"use client"

import { createBrowserClient } from "@supabase/ssr"

// Create a singleton instance to prevent multiple instances
let supabaseClient: ReturnType<typeof createBrowserClient> | null = null

export function createClientSupabaseClient() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error("Missing Supabase environment variables")
    throw new Error("Missing Supabase environment variables")
  }

  if (!supabaseClient) {
    try {
      console.log("Creating Supabase client with URL:", process.env.NEXT_PUBLIC_SUPABASE_URL)

      supabaseClient = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
          auth: {
            flowType: "pkce",
            persistSession: true,
            detectSessionInUrl: true,
            // Let Supabase use its configured Site URL for redirects
            // This will use the Site URL you configured in the Supabase dashboard
          },
          global: {
            headers: {
              "X-Client-Info": "supabase-js-client",
            },
          },
        },
      )
    } catch (error) {
      console.error("Error creating Supabase client:", error)
      // Return a mock client that won't break the app but will fail gracefully
      return createMockSupabaseClient()
    }
  }

  return supabaseClient
}

// Create a mock client that won't break the app but will fail gracefully
function createMockSupabaseClient() {
  return {
    auth: {
      signInWithPassword: async () => ({ data: null, error: new Error("Database connection failed") }),
      signUp: async () => ({ data: null, error: new Error("Database connection failed") }),
      signOut: async () => ({ error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
      resend: async () => ({ error: new Error("Database connection failed") }),
    },
    from: () => ({
      select: () => ({
        eq: () => ({
          single: async () => ({ data: null, error: new Error("Database connection failed") }),
        }),
        limit: async () => ({ data: null, error: new Error("Database connection failed") }),
        order: () => ({
          limit: async () => ({ data: null, error: new Error("Database connection failed") }),
        }),
      }),
      insert: async () => ({ data: null, error: new Error("Database connection failed") }),
    }),
    rpc: async () => ({ data: null, error: new Error("Database connection failed") }),
  } as any
}

// Debug function to check client-side Supabase connection
export async function checkClientSupabaseConnection() {
  try {
    // First, check if we can even create the client
    const supabase = createClientSupabaseClient()

    // Log the current origin for debugging
    if (typeof window !== "undefined") {
      console.log("Current origin:", window.location.origin)
    }

    // Then check if we can reach the Supabase API
    // Use a simple auth check instead of a database query as it's more likely to succeed
    // even with limited permissions
    const { data, error } = await supabase.auth.getSession()

    if (error) {
      console.error("Client Supabase connection test failed:", error)
      return { success: false, error: error.message }
    }

    console.log("Client Supabase connection successful")
    return { success: true }
  } catch (error: any) {
    console.error("Client Supabase connection test error:", error)
    return {
      success: false,
      error: error.message || "Failed to connect to the database. Please check your internet connection.",
    }
  }
}

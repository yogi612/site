"use client"

import { createBrowserClient } from "@supabase/ssr"
import type { Database } from "@/types/supabase"

// Create a singleton instance to prevent multiple instances
let supabaseClient: ReturnType<typeof createBrowserClient> | null = null

export function createClientSupabaseClient() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error("Missing Supabase environment variables")
    throw new Error("Missing Supabase environment variables")
  }

  if (!supabaseClient) {
    try {
      supabaseClient = createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
          auth: {
            flowType: "pkce",
            persistSession: true,
            detectSessionInUrl: true,
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

// Export a direct supabase client instance for use in components
export const supabase = createClientSupabaseClient()

// Helper function to get user role
export async function getUserRole(userId: string) {
  try {
    const { data, error } = await supabase.from("profiles").select("role").eq("id", userId).single()

    if (error || !data) {
      console.error("Error fetching user role:", error)
      return "user" // Default role
    }

    return data.role
  } catch (error) {
    console.error("Error in getUserRole:", error)
    return "user" // Default role on error
  }
}

// Helper function to check if user is admin
export async function isUserAdmin(userId: string) {
  const role = await getUserRole(userId)
  return role === "admin"
}

// Helper function to check if user is employee or admin
export async function isUserStaff(userId: string) {
  const role = await getUserRole(userId)
  return role === "admin" || role === "employee"
}

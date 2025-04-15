import { createClientSupabaseClient } from "./supabase-client"

// Utility function to check if Supabase email service is properly configured
export async function checkSupabaseEmailService() {
  const supabase = createClientSupabaseClient()

  try {
    // Try to get the current session to check if auth is working
    const { data, error } = await supabase.auth.getSession()

    if (error) {
      console.error("Error checking Supabase auth:", error)
      return {
        configured: false,
        error: error.message,
      }
    }

    // This doesn't guarantee emails work, but it's a basic check
    return {
      configured: true,
      message: "Basic auth check passed",
    }
  } catch (error: any) {
    console.error("Failed to check Supabase email service:", error)
    return {
      configured: false,
      error: error.message || "Unknown error checking email service",
    }
  }
}

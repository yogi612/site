import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"

// Debug endpoint to check Supabase connection
export async function GET() {
  try {
    const supabase = createServerSupabaseClient()

    // Test the connection with a simple query
    const { data, error } = await supabase.from("profiles").select("count", { count: "exact" }).limit(1)

    if (error) {
      console.error("Supabase connection test failed:", error)
      return NextResponse.json(
        {
          success: false,
          message: "Database connection failed",
          error: error.message,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      data,
    })
  } catch (error: any) {
    console.error("API route error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: error.message,
      },
      { status: 500 },
    )
  }
}

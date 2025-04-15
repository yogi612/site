import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("Received lead data:", body)

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.interestedIn) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 },
      )
    }

    try {
      // Log environment variables (without sensitive values)
      console.log("NEXT_PUBLIC_SUPABASE_URL exists:", !!process.env.NEXT_PUBLIC_SUPABASE_URL)
      console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY exists:", !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

      // Create a new Supabase client for this request
      const supabase = createRouteHandlerClient({ cookies })

      // Insert lead into Supabase
      const { data, error } = await supabase
        .from("leads")
        .insert([
          {
            name: body.name,
            email: body.email,
            phone: body.phone,
            interested_in: body.interestedIn,
            status: "new",
          },
        ])
        .select()

      if (error) {
        console.error("Supabase error details:", error)
        throw error
      }

      console.log("Lead saved successfully:", data)

      return NextResponse.json({
        success: true,
        message: "Lead saved successfully",
        data,
      })
    } catch (supabaseError) {
      console.error("Supabase operation failed:", supabaseError)

      // Fallback to local storage in a JSON file
      // Since we can't write to the filesystem in serverless functions,
      // we'll return a specific error that the client can handle
      return NextResponse.json(
        {
          success: false,
          message: "Database connection failed",
          error: String(supabaseError),
          fallback: true,
        },
        { status: 503 }, // Service Unavailable
      )
    }
  } catch (error) {
    console.error("Unexpected error in API route:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred",
        error: String(error),
      },
      { status: 500 },
    )
  }
}

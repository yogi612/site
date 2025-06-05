import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.interestedIn) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Create Supabase client
    const supabase = createRouteHandlerClient({ cookies })

    // Insert lead into database
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          name: body.name,
          email: body.email,
          phone: body.phone,
          interested_in: body.interestedIn,
          status: "new",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error("Error inserting lead:", error)

      // If database is unavailable, return a special response
      if (error.code === "PGRST116" || error.code === "22P02" || error.message.includes("connection")) {
        return NextResponse.json({ message: "Database unavailable", fallback: true }, { status: 503 })
      }

      return NextResponse.json({ message: "Failed to save lead", error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error("Unexpected error in leads API:", error)
    return NextResponse.json({ message: "Internal server error", error: error.message }, { status: 500 })
  }
}

import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: Request) {
  try {
    const { leads } = await request.json()

    if (!Array.isArray(leads) || leads.length === 0) {
      return NextResponse.json({ success: false, message: "No leads to sync" }, { status: 400 })
    }

    console.log(`Attempting to sync ${leads.length} offline leads`)

    // Create a direct Supabase client
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase credentials")
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Insert all leads at once
    const { data, error } = await supabase.from("leads").insert(leads).select()

    if (error) {
      console.error("Error syncing offline leads:", error)
      return NextResponse.json(
        { success: false, message: "Failed to sync leads", error: error.message },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: `Successfully synced ${leads.length} leads`,
      data,
    })
  } catch (error) {
    console.error("Unexpected error in sync-offline-leads:", error)
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred", error: String(error) },
      { status: 500 },
    )
  }
}

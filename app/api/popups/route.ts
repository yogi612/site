import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies })

    // Get query parameters
    const url = new URL(request.url)
    const page = url.searchParams.get("page") || "all"
    const isActive = url.searchParams.get("active") === "true"

    // Build query
    let query = supabase.from("popups").select("*")

    // Filter by active status if specified
    if (url.searchParams.has("active")) {
      query = query.eq("is_active", isActive)
    }

    // Filter by page if not "all"
    if (page !== "all") {
      query = query.eq("target_page", page)
    }

    // Filter by date range (only show popups that are currently valid)
    const now = new Date().toISOString()
    query = query.or(`start_date.is.null,start_date.lte.${now}`)
    query = query.or(`end_date.is.null,end_date.gte.${now}`)

    // Execute query
    const { data, error } = await query

    if (error) {
      console.error("Error fetching popups:", error)
      return NextResponse.json({ error: "Failed to fetch popups" }, { status: 500 })
    }

    return NextResponse.json({ popups: data })
  } catch (error) {
    console.error("Unexpected error in popups API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 })
    }

    // Insert new popup
    const { data, error } = await supabase.from("popups").insert([body]).select()

    if (error) {
      console.error("Error creating popup:", error)
      return NextResponse.json({ error: "Failed to create popup" }, { status: 500 })
    }

    return NextResponse.json({ popup: data[0] }, { status: 201 })
  } catch (error) {
    console.error("Unexpected error in popups API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

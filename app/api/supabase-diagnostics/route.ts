import { NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase-server"

// List of tables that should exist in the database
const requiredTables = [
  "profiles",
  "loan_applications",
  "partner_applications",
  "job_applications",
  "products",
  "news",
  "testimonials",
]

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    const diagnostics: Record<string, any> = {
      timestamp: new Date().toISOString(),
      connection: { success: false, message: "" },
      environment: {
        NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      },
      tables: {},
      auth: { status: "unknown" },
    }

    // Test basic connection
    try {
      const { data, error } = await supabase.from("profiles").select("count", { count: "exact" }).limit(1)

      if (error) {
        diagnostics.connection = {
          success: false,
          message: error.message,
          code: error.code,
        }
      } else {
        diagnostics.connection = {
          success: true,
          message: "Successfully connected to Supabase",
        }
      }
    } catch (error: any) {
      diagnostics.connection = {
        success: false,
        message: error.message || "Failed to connect to Supabase",
      }
    }

    // Check auth configuration
    try {
      const { data, error } = await supabase.auth.getSession()
      diagnostics.auth = {
        status: error ? "error" : "configured",
        message: error ? error.message : "Auth appears to be configured correctly",
        session: !!data.session,
      }
    } catch (error: any) {
      diagnostics.auth = {
        status: "error",
        message: error.message || "Failed to check auth configuration",
      }
    }

    // Check tables
    if (diagnostics.connection.success) {
      for (const table of requiredTables) {
        try {
          // Check if table exists by attempting to query it
          const { data, error } = await supabase.from(table).select("count", { count: "exact" }).limit(1)

          if (error) {
            diagnostics.tables[table] = {
              exists: false,
              error: error.message,
              code: error.code,
            }
          } else {
            // Get table structure
            const { data: columns, error: columnsError } = await supabase.rpc("get_table_columns", {
              table_name: table,
            })

            diagnostics.tables[table] = {
              exists: true,
              count: data[0]?.count || 0,
              columns: columnsError ? null : columns,
            }
          }
        } catch (error: any) {
          diagnostics.tables[table] = {
            exists: false,
            error: error.message || `Failed to check table ${table}`,
          }
        }
      }
    }

    return NextResponse.json(diagnostics)
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Diagnostics failed",
        error: error.message || String(error),
      },
      { status: 500 },
    )
  }
}

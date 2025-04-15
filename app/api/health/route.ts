import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Basic health check
    const health = {
      status: "ok",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development",
      uptime: process.uptime(),
      hostname: process.env.HOSTNAME || "unknown",
    }

    return NextResponse.json(health, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: "error", message: "Health check failed", error: String(error) }, { status: 500 })
  }
}

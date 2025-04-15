import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protected routes that require authentication
  const protectedRoutes = ["/dashboard", "/admin", "/profile"]

  // Admin-only routes
  const adminRoutes = ["/admin"]

  const path = req.nextUrl.pathname

  // Check if the route is protected
  if (protectedRoutes.some((route) => path.startsWith(route))) {
    if (!session) {
      // Redirect to login if no session
      const redirectUrl = new URL("/login", req.url)
      redirectUrl.searchParams.set("redirect", path)
      return NextResponse.redirect(redirectUrl)
    }

    // Check if the route is admin-only
    if (adminRoutes.some((route) => path.startsWith(route))) {
      const user = session.user
      const isAdmin = user.app_metadata?.role === "admin" || user.user_metadata?.role === "admin"

      if (!isAdmin) {
        // Redirect to dashboard if not admin
        return NextResponse.redirect(new URL("/dashboard", req.url))
      }
    }
  }

  return res
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/profile/:path*"],
}

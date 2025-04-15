"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { createClientSupabaseClient } from "@/lib/supabase-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"
import { useAuth } from "@/components/AuthProvider"

export default function ClientLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [verificationMessage, setVerificationMessage] = useState<string | null>(null)
  const router = useRouter()
  const { user } = useAuth()
  const searchParams = useSearchParams()
  const { toast } = useToast()

  useEffect(() => {
    if (user?.role === "employee") {
      router.push("/employee-dashboard")
    } else if (user?.role === "user") {
      router.push("/dashboard")
    }
  }, [user, router])

  useEffect(() => {
    // Check for verification status from URL
    const verified = searchParams.get("verified")
    const errorMsg = searchParams.get("error")

    if (verified === "true") {
      setVerificationMessage("Your email has been verified. You can now log in.")
      toast({
        title: "Email Verified",
        description: "Your email has been verified. You can now log in.",
      })
    } else if (verified === "pending") {
      setVerificationMessage("Please check your email to verify your account.")
      toast({
        title: "Verification Email Sent",
        description: "Please check your email to verify your account.",
      })
    }

    if (errorMsg) {
      setError(decodeURIComponent(errorMsg))
      toast({
        title: "Authentication Error",
        description: decodeURIComponent(errorMsg),
        variant: "destructive",
      })
    }
  }, [searchParams, toast])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email || !password) {
      setError("Email and password are required")
      return
    }

    setIsLoading(true)

    try {
      console.log("Starting login process...")
      const supabase = createClientSupabaseClient()

      // Log connection status
      const connectionStatus = await supabase.auth.getSession()
      console.log("Connection status:", connectionStatus.error ? "Error" : "Connected")

      // Attempt login
      console.log("Attempting login with email:", email)
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error("Login error:", error)
        throw error
      }

      console.log("Login successful:", data)

      // Show success message
      toast({
        title: "Login successful!",
        description: "You are now logged in.",
      })

      // Redirect to dashboard
      if (user?.role === "admin") {
        router.push("/admin")
      } else if (user?.role === "employee") {
        router.push("/employee-dashboard")
      } else {
        router.push("/dashboard")
      }
    } catch (err: any) {
      console.error("Error during login:", err)

      let errorMessage = err.message || "An error occurred during login"

      // Handle specific error cases
      if (err.message?.includes("Invalid login credentials")) {
        errorMessage = "Invalid email or password. Please try again."
      } else if (err.message?.includes("Email not confirmed")) {
        errorMessage = "Please verify your email before logging in."
      } else if (err.message?.includes("Failed to fetch")) {
        errorMessage = "Network error. Please check your internet connection and try again."
      }

      setError(errorMessage)

      toast({
        title: "Login failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendVerification = async () => {
    if (!email) {
      setError("Please enter your email address to resend verification")
      return
    }

    try {
      setIsLoading(true)
      const supabase = createClientSupabaseClient()

      const { error } = await supabase.auth.resend({
        type: "signup",
        email,
        options: {
          // Let Supabase use its configured Site URL
          // No need to specify redirectTo here
          // redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      toast({
        title: "Verification Email Sent",
        description: "Please check your email to verify your account.",
      })

      setVerificationMessage("Verification email resent. Please check your inbox.")
    } catch (err: any) {
      console.error("Error resending verification:", err)
      setError(err.message || "Failed to resend verification email")

      toast({
        title: "Failed to resend",
        description: err.message || "Failed to resend verification email",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Login to Your Account</h1>

      {verificationMessage && <div className="bg-blue-50 text-blue-700 p-3 rounded-md mb-4">{verificationMessage}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>

      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={handleResendVerification}
          className="text-sm text-primary hover:underline"
          disabled={isLoading}
        >
          Resend verification email
        </button>
      </div>
    </div>
  )
}

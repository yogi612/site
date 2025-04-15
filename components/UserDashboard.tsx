"use client"

import { useEffect, useState } from "react"
import { useSupabase } from "@/components/SupabaseProvider"
import { LoadingSpinner } from "@/components/LoadingSpinner"

export function UserDashboard() {
  const { user } = useSupabase()
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return

      try {
        // Fetch user data from Supabase or any other source
        // For now, we'll just use the user object from Supabase
        setUserData(user)
      } catch (error) {
        console.error("Error fetching user data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [user])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">User Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Welcome, {userData?.email || "User"}</h2>
          <p className="text-muted-foreground">
            This is your personal dashboard where you can manage your profile and track your financial goals.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Loan Applications</h2>
          <p className="text-muted-foreground">Track the status of your loan applications.</p>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-white">View Applications</button>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Credit Score</h2>
          <p className="text-muted-foreground">Check your latest credit score and reports.</p>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-white">Check Score</button>
        </div>
      </div>
    </div>
  )
}

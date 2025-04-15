"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/AuthProvider"
import { LoadingSpinner } from "@/components/LoadingSpinner"
import { UserDashboard } from "@/components/UserDashboard"
import { EmployeeDashboard } from "@/components/EmployeeDashboard"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push("/login")
      } else if (user.role === "employee") {
        router.push("/employee-dashboard")
      }
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (!user) {
    return null // Redirect handled by useEffect
  }

  if (user.role === "employee") {
    return <EmployeeDashboard />
  }

  return <UserDashboard />
}

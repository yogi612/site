"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSupabase } from "@/components/SupabaseProvider"
import { LoadingSpinner } from "@/components/LoadingSpinner"

export function ClientAuth({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useSupabase()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && !isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router, isMounted])

  // Don't render anything on the server or during loading
  if (!isMounted || isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  // Only render children if user is authenticated
  if (user) {
    return <>{children}</>
  }

  // This will only show briefly before redirect
  return (
    <div className="flex h-screen items-center justify-center">
      <LoadingSpinner size="lg" />
    </div>
  )
}

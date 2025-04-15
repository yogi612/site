"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { LoadingSpinner } from "./LoadingSpinner"

// Dynamically import components with no SSR
const ClientAuth = dynamic(() => import("@/components/ClientAuth").then((mod) => mod.ClientAuth), { ssr: false })
const DashboardContent = dynamic(() => import("@/components/DashboardContent").then((mod) => mod.DashboardContent), {
  ssr: false,
})

export function DashboardClientWrapper() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <ClientAuth>
      <DashboardContent />
    </ClientAuth>
  )
}

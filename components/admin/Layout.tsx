"\"use client"

import type React from "react"

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (You can add a real sidebar here later) */}
      <div className="w-64 hidden md:block bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
        {/* Add navigation links here */}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4">{children}</div>
    </div>
  )
}

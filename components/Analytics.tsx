"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

type AnalyticsData = {
  name: string
  users: number
  applications: number
  approvals: number
}

export function Analytics() {
  const [data, setData] = useState<AnalyticsData[]>([])

  useEffect(() => {
    // Fetch analytics data from API
    // This is a mock implementation
    const mockData: AnalyticsData[] = [
      { name: "Jan", users: 400, applications: 240, approvals: 200 },
      { name: "Feb", users: 300, applications: 139, approvals: 100 },
      { name: "Mar", users: 200, applications: 980, approvals: 800 },
      { name: "Apr", users: 278, applications: 390, approvals: 300 },
      { name: "May", users: 189, applications: 480, approvals: 380 },
      { name: "Jun", users: 239, applications: 380, approvals: 300 },
    ]
    setData(mockData)
  }, [])

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.reduce((sum, item) => sum + item.users, 0)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.reduce((sum, item) => sum + item.applications, 0)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.reduce((sum, item) => sum + item.approvals, 0)}</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Monthly Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#8884d8" />
              <Bar dataKey="applications" fill="#82ca9d" />
              <Bar dataKey="approvals" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

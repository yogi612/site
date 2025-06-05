"use client"

import { useState, useEffect } from "react"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { supabase } from "@/lib/supabase-client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, TrendingUpIcon, TrendingDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Skeleton } from "@/components/ui/skeleton"

interface DashboardStats {
  totalUsers: number
  totalLeads: number
  totalApplications: number
  newUsersToday: number
  newLeadsToday: number
  userGrowth: number
  leadGrowth: number
}

export function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(new Date().setDate(new Date().getDate() - 30)),
    to: new Date(),
  })

  useEffect(() => {
    const fetchDashboardStats = async () => {
      setIsLoading(true)
      try {
        // Fetch total users
        const { count: totalUsers } = await supabase.from("profiles").select("*", { count: "exact", head: true })

        // Fetch total leads
        const { count: totalLeads } = await supabase.from("leads").select("*", { count: "exact", head: true })

        // Fetch total loan applications
        const { count: totalApplications } = await supabase
          .from("loan_applications")
          .select("*", { count: "exact", head: true })

        // Fetch new users today
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const { count: newUsersToday } = await supabase
          .from("profiles")
          .select("*", { count: "exact", head: true })
          .gte("created_at", today.toISOString())

        // Fetch new leads today
        const { count: newLeadsToday } = await supabase
          .from("leads")
          .select("*", { count: "exact", head: true })
          .gte("created_at", today.toISOString())

        // Calculate growth (mock data for now)
        const userGrowth = 12.5 // 12.5% growth
        const leadGrowth = 8.3 // 8.3% growth

        setStats({
          totalUsers: totalUsers || 0,
          totalLeads: totalLeads || 0,
          totalApplications: totalApplications || 0,
          newUsersToday: newUsersToday || 0,
          newLeadsToday: newLeadsToday || 0,
          userGrowth,
          leadGrowth,
        })
      } catch (error) {
        console.error("Error fetching dashboard stats:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDashboardStats()
  }, [dateRange])

  return (
    <AdminLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button id="date" variant={"outline"} className="w-[300px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="range"
                  selected={{
                    from: dateRange.from,
                    to: dateRange.to,
                  }}
                  onSelect={(range) => {
                    if (range?.from && range?.to) {
                      setDateRange({ from: range.from, to: range.to })
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-[100px]" />
              ) : (
                <>
                  <div className="text-2xl font-bold">{stats?.totalUsers}</div>
                  <p className="text-xs text-muted-foreground">
                    {stats?.userGrowth > 0 ? (
                      <span className="flex items-center text-green-600">
                        <TrendingUpIcon className="mr-1 h-4 w-4" />
                        {stats?.userGrowth}% from last month
                      </span>
                    ) : (
                      <span className="flex items-center text-red-600">
                        <TrendingDownIcon className="mr-1 h-4 w-4" />
                        {Math.abs(stats?.userGrowth || 0)}% from last month
                      </span>
                    )}
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-[100px]" />
              ) : (
                <>
                  <div className="text-2xl font-bold">{stats?.totalLeads}</div>
                  <p className="text-xs text-muted-foreground">
                    {stats?.leadGrowth > 0 ? (
                      <span className="flex items-center text-green-600">
                        <TrendingUpIcon className="mr-1 h-4 w-4" />
                        {stats?.leadGrowth}% from last month
                      </span>
                    ) : (
                      <span className="flex items-center text-red-600">
                        <TrendingDownIcon className="mr-1 h-4 w-4" />
                        {Math.abs(stats?.leadGrowth || 0)}% from last month
                      </span>
                    )}
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-[100px]" />
              ) : (
                <div className="text-2xl font-bold">{stats?.totalApplications}</div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Users Today</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-[100px]" />
              ) : (
                <div className="text-2xl font-bold">{stats?.newUsersToday}</div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              ) : (
                <div className="text-center py-10 text-muted-foreground">Activity data will be displayed here</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard

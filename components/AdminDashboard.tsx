"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoanApplications } from "@/components/LoanApplications"
import { UserManagement } from "@/components/UserManagement"
import { WebsiteSettings } from "@/components/WebsiteSettings"
import { Analytics } from "@/components/Analytics"
import { CreditCard, Users, Settings, BarChart } from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("loan-applications")

  const dashboardItems = [
    { id: "loan-applications", title: "Loan Applications", icon: CreditCard, component: LoanApplications },
    { id: "user-management", title: "User Management", icon: Users, component: UserManagement },
    { id: "website-settings", title: "Website Settings", icon: Settings, component: WebsiteSettings },
    { id: "analytics", title: "Analytics", icon: BarChart, component: Analytics },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-8">
          {dashboardItems.map((item) => (
            <TabsTrigger key={item.id} value={item.id} className="flex items-center space-x-2">
              <item.icon className="w-5 h-5" />
              <span>{item.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {dashboardItems.map((item) => (
          <TabsContent key={item.id} value={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <item.component />
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

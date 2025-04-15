import { EmployeeDashboard } from "@/components/EmployeeDashboard"
import { ClientAuth } from "@/components/ClientAuth"

export default function EmployeeDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <ClientAuth>
        <EmployeeDashboard />
      </ClientAuth>
    </div>
  )
}

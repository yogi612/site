import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { LoansContent } from "@/components/admin/loans/LoansContent"

export default async function AdminLoansPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    redirect("/login?callbackUrl=/admin/loans")
  }

  return <LoansContent />
}

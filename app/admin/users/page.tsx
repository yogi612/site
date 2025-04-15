import { AdminUsersContent } from "@/components/admin/users/UsersContent"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export default async function AdminUsersPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    redirect("/login?callbackUrl=/admin/users")
  }

  return <AdminUsersContent />
}

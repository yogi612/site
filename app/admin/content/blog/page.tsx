import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { BlogContent } from "@/components/admin/content/BlogContent"

export default async function AdminBlogPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    redirect("/login?callbackUrl=/admin/content/blog")
  }

  return <BlogContent />
}

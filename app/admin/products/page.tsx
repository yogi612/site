import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { ProductsContent } from "@/components/admin/products/ProductsContent"

export default async function AdminProductsPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    redirect("/login?callbackUrl=/admin/products")
  }

  return <ProductsContent />
}

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PageLayout from "@/components/PageLayout"

const blogPosts = [
  {
    title: "5 Tips for Improving Your Credit Score",
    excerpt: "Learn how to boost your credit score with these simple yet effective strategies.",
    date: "2023-05-15",
    slug: "5-tips-for-improving-credit-score",
  },
  {
    title: "Understanding Home Loan Interest Rates",
    excerpt: "Dive into the factors that influence home loan interest rates and how they affect your mortgage.",
    date: "2023-05-10",
    slug: "understanding-home-loan-interest-rates",
  },
  {
    title: "The Basics of Personal Financial Planning",
    excerpt: "Get started with personal financial planning and set yourself up for a secure financial future.",
    date: "2023-05-05",
    slug: "basics-of-personal-financial-planning",
  },
]

export default function BlogPage() {
  return (
    <PageLayout title="Finonest Blog">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-700">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageLayout>
  )
}

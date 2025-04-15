import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

type NewsItem = {
  id: string
  title: string
  content: string
  author: string
  date: string
}

type NewsListProps = {
  news: NewsItem[]
}

export function NewsList({ news }: NewsListProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Latest News</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <Card key={item.id} className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle>
                <Link href={`/news/${item.id}`} className="hover:underline">
                  {item.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">
                By {item.author} on {item.date}
              </p>
              <p className="line-clamp-3">{item.content}</p>
              <Link href={`/news/${item.id}`} className="text-primary hover:underline mt-2 inline-block">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

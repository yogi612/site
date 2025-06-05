import Link from "next/link"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { ArrowRight } from "lucide-react"

const newsItems = [
  {
    title: "RBI Announces New Guidelines for Digital Lending",
    date: "May 10, 2025",
    excerpt:
      "The Reserve Bank of India has released new guidelines aimed at regulating digital lending platforms, ensuring better protection for borrowers...",
    link: "/news/rbi-digital-lending-guidelines",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGlnaXRhbCxsZW5kaW5nfHx8fHx8MTY4NDc2MjYxNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    title: "Finonest Launches AI-Powered Credit Score Improvement Tool",
    date: "May 5, 2025",
    excerpt:
      "Finonest introduces a revolutionary AI-powered tool to help customers improve their credit scores through personalized recommendations and financial insights...",
    link: "/news/ai-credit-score-tool",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8QUksZmluYW5jZXx8fHx8fDE2ODQ3NjI2MTg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    title: "Government Announces New Scheme for MSME Financing",
    date: "April 28, 2025",
    excerpt:
      "The Indian government has unveiled a new scheme to boost financing for Micro, Small, and Medium Enterprises (MSMEs), aiming to support economic growth...",
    link: "/news/msme-financing-scheme",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmluYW5jaW5nLGJ1c2luZXNzfHx8fHx8MTY4NDc2MjYxOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
]

export default function LatestNews() {
  return (
    <section className="py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Financial News & Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg shadow-lg border-2 border-red-500 p-6 hover:shadow-xl transition-shadow"
            >
              <OptimizedImage
                src={item.image}
                alt={item.title}
                width={400}
                height={225}
                className="rounded-lg object-cover mb-4"
                fallbackCategory="general"
              />
              <p className="text-gray-600 text-sm mb-2">{item.date}</p>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <Link
                href={item.link}
                className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
              >
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

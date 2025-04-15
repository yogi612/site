import PageLayout from "@/components/PageLayout"
import Link from "next/link"

const mediaItems = [
  { title: "Finonest Expands to 10 New Cities", date: "May 15, 2023", link: "#" },
  { title: "CEO Interview: The Future of Fintech in India", date: "April 22, 2023", link: "#" },
  { title: "Finonest Launches New AI-Powered Advisory Service", date: "March 10, 2023", link: "#" },
  // Add more media items as needed
]

export default function MediaPage() {
  return (
    <PageLayout title="Media">
      <p className="mb-8">Stay updated with the latest news, press releases, and media coverage about Finonest.</p>
      <div className="space-y-6">
        {mediaItems.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={item.link} className="text-red-600 hover:text-red-800">
                {item.title}
              </Link>
            </h2>
            <p className="text-gray-600">{item.date}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

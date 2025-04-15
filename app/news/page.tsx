import { NewsList } from "@/components/NewsList"
import PageLayout from "@/components/PageLayout"

// This would typically come from your API or database
const allNews = [
  {
    id: "1",
    title: "Finonest Launches New Investment Product",
    content:
      "We're excited to announce our new high-yield savings account, offering competitive interest rates and flexible terms. This product is designed to help our customers grow their wealth more effectively.",
    author: "Jane Smith",
    date: "2023-05-20",
  },
  {
    id: "2",
    title: "Finonest Expands to 10 New Cities",
    content:
      "As part of our ongoing growth strategy, Finonest is proud to announce our expansion into 10 new cities across India. This move will bring our innovative financial services to even more customers.",
    author: "John Doe",
    date: "2023-05-22",
  },
  {
    id: "3",
    title: "Finonest Partners with Leading Tech Firm",
    content:
      "We're thrilled to announce our new partnership with a leading tech firm. This collaboration will allow us to enhance our digital offerings and provide an even better experience for our customers.",
    author: "Mike Johnson",
    date: "2023-05-25",
  },
  // Add more news items here
]

export default function NewsPage() {
  return (
    <PageLayout title="Latest News">
      <NewsList news={allNews} />
    </PageLayout>
  )
}

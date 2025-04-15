import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

type Review = {
  id: string
  name: string
  rating: number
  review: string
  date: string
}

type CustomerReviewsProps = {
  reviews: Review[]
}

export function CustomerReviews({ reviews }: CustomerReviewsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Customer Reviews</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{review.name}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">{review.date}</p>
              <p>{review.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

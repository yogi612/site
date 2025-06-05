import { OptimizedImage } from "@/components/ui/optimized-image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Small Business Owner",
    content:
      "Finonest helped me secure a business loan quickly, allowing me to expand my operations. Their process was smooth and transparent.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Priya Sharma",
    role: "IT Professional",
    content:
      "I was impressed by Finonest's personalized investment advice. They helped me create a diversified portfolio that aligns with my financial goals.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Amit Patel",
    role: "Homeowner",
    content:
      "Thanks to Finonest, I was able to get a home loan at a competitive rate. Their team guided me through every step of the process.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={`${testimonial.name}, ${testimonial.role}`}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                    fallbackCategory="person"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

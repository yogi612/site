"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import PageLayout from "@/components/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

// This is a mock function to simulate searching. In a real application,
// you would fetch results from your backend or search service.
const mockSearch = async (query: string) => {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  const allServices = [
    { title: "Personal Loans", description: "Quick and easy personal loans", href: "/services/personal-loans" },
    { title: "Business Loans", description: "Flexible financing for your business", href: "/services/business-loans" },
    { title: "Home Loans", description: "Affordable home financing options", href: "/services/home-loans" },
    {
      title: "Investment Solutions",
      description: "Grow your wealth with our investment options",
      href: "/services/investment-solutions",
    },
    {
      title: "Credit Score Services",
      description: "Check and improve your credit score",
      href: "/services/credit-score",
    },
  ]

  return allServices.filter(
    (service) =>
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase()),
  )
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true)
      const searchResults = await mockSearch(query)
      setResults(searchResults)
      setLoading(false)
    }

    fetchResults()
  }, [query])

  return (
    <PageLayout title={`Search Results for "${query}"`}>
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <p>Loading results...</p>
        ) : results.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {results.map((result, index) => (
              <Card key={index} className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle>{result.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{result.description}</p>
                  <Link href={result.href} className="text-primary hover:underline">
                    Learn more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p>No results found for "{query}". Please try a different search term.</p>
        )}
      </div>
    </PageLayout>
  )
}

import { notFound } from "next/navigation"
import PageLayout from "@/components/PageLayout"
import { Card, CardContent } from "@/components/ui/card"

const newsArticles = {
  "rbi-digital-lending-guidelines": {
    title: "RBI Announces New Guidelines for Digital Lending",
    date: "May 10, 2025",
    content: `
      The Reserve Bank of India has released new guidelines aimed at regulating digital lending platforms, ensuring better protection for borrowers. These guidelines focus on enhancing transparency, data protection, and fair lending practices.

      Key highlights of the guidelines include:
      - Mandatory disclosure of all fees and charges
      - Enhanced data privacy measures
      - Standardized recovery practices
      - Clear grievance redressal mechanisms
      
      These regulations are expected to bring more stability and trust to the digital lending ecosystem while protecting consumer interests.
    `,
  },
  "ai-credit-score-tool": {
    title: "Finonest Launches AI-Powered Credit Score Improvement Tool",
    date: "May 5, 2025",
    content: `
      Finonest introduces a revolutionary AI-powered tool to help customers improve their credit scores through personalized recommendations and financial insights.

      Features of the new tool include:
      - Real-time credit score monitoring
      - Personalized improvement recommendations
      - AI-driven financial behavior analysis
      - Custom alerts and notifications
      
      This innovative solution is expected to help thousands of customers achieve better credit scores and access better financial opportunities.
    `,
  },
  "msme-financing-scheme": {
    title: "Government Announces New Scheme for MSME Financing",
    date: "April 28, 2025",
    content: `
      The Indian government has unveiled a new scheme to boost financing for Micro, Small, and Medium Enterprises (MSMEs), aiming to support economic growth.

      The scheme includes:
      - Subsidized interest rates
      - Simplified application process
      - Extended repayment periods
      - Collateral-free loans up to certain limits
      
      This initiative is expected to provide significant support to the MSME sector and contribute to economic recovery.
    `,
  },
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = newsArticles[params.slug as keyof typeof newsArticles]

  if (!article) {
    notFound()
  }

  return (
    <PageLayout title={article.title}>
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-600 mb-4">{article.date}</p>
            <div className="prose max-w-none">
              {article.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}

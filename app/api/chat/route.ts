import { NextResponse } from "next/server"

// Simple pattern matching for common financial questions
const responses = [
  {
    patterns: ["loan", "borrow", "credit"],
    response:
      "We offer various loan products including personal loans, home loans, and business loans. Would you like to know more about a specific type of loan?",
  },
  {
    patterns: ["interest", "rate", "apr"],
    response:
      "Our interest rates are competitive and start from 8.99% depending on your credit score and loan type. Would you like to check your eligibility?",
  },
  {
    patterns: ["invest", "investment", "return", "portfolio"],
    response:
      "Our investment advisory services can help you build a diversified portfolio based on your financial goals and risk tolerance. Would you like to speak with an investment advisor?",
  },
  {
    patterns: ["credit score", "cibil", "credit history"],
    response:
      "We offer free credit score checks and personalized advice to improve your credit score. Would you like to check your credit score now?",
  },
  {
    patterns: ["contact", "support", "help", "call", "email", "phone"],
    response:
      "You can reach our support team at support@finonest.com or call us at 1800-123-4567 during business hours (9 AM - 6 PM, Monday to Friday).",
  },
  {
    patterns: ["document", "kyc", "verification"],
    response:
      "For most of our services, you'll need to provide identity proof (Aadhar/PAN), address proof, income proof, and recent photographs. The specific requirements may vary based on the service.",
  },
]

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Convert message to lowercase for pattern matching
    const lowerMessage = message.toLowerCase()

    // Find matching response
    for (const item of responses) {
      if (item.patterns.some((pattern) => lowerMessage.includes(pattern))) {
        return NextResponse.json({ response: item.response }, { status: 200 })
      }
    }

    // Default response if no pattern matches
    return NextResponse.json(
      {
        response:
          "Thank you for your question. I'd be happy to help with your financial needs. Could you provide more details about what you're looking for?",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing chat message:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}

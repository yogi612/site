import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"
import CookieConsent from "@/components/CookieConsent"
import { ScrollToTop } from "@/components/ScrollToTop"
import { SupabaseProvider } from "@/components/SupabaseProvider"
import { AuthProvider } from "@/components/AuthProvider"
import { LeadPopup } from "@/components/LeadPopup"
import dynamic from "next/dynamic"
import ImagePreloader from "@/components/ImagePreloader"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"

// Dynamically import chat components with no SSR
const ChatBot = dynamic(() => import("@/components/ChatBot"), { ssr: false })
const GabsChat = dynamic(() => import("@/components/GabsChat"), { ssr: false })

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Finonest - Your Financial Partner",
  description: "Finonest offers comprehensive financial services including loans, investments, and financial advisory.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SupabaseProvider>
            <ImagePreloader />
            <Header />
            <main className="min-h-screen">
              <Suspense>{children}</Suspense>
            </main>
            <Footer />
            <Toaster />
            <CookieConsent />
            <ScrollToTop />
            <LeadPopup />
            {/* Chat components loaded client-side only */}
            <Suspense fallback={null}>
              <ChatBot />
              <GabsChat />
            </Suspense>
            <Analytics />
            <SpeedInsights />
          </SupabaseProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

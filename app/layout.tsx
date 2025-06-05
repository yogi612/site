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
import ChatBot from "@/components/ChatBot"
import GabsChat from "@/components/GabsChat"

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
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
            <CookieConsent />
            <ScrollToTop />
            <LeadPopup />
            <ChatBot />
            <GabsChat />
          </SupabaseProvider>
        </AuthProvider>
      </body>
    </html>
  )
}


import './globals.css'

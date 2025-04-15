"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LeadPopup } from "@/components/LeadPopup"
import { ChatBot } from "@/components/ChatBot"
import { Footer } from "@/components/Footer"
import Header from "@/components/Header"

export default function PreviewPage() {
  const [showChatBot, setShowChatBot] = useState(false)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Component Preview</h1>

      <Tabs defaultValue="leadPopup" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="leadPopup">Lead Popup</TabsTrigger>
          <TabsTrigger value="chatBot">Chat Bot</TabsTrigger>
          <TabsTrigger value="header">Header & Footer</TabsTrigger>
        </TabsList>

        <TabsContent value="leadPopup">
          <Card>
            <CardHeader>
              <CardTitle>Lead Generation Popup</CardTitle>
              <CardDescription>
                The lead generation popup appears automatically after 5 seconds of page load.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <h3 className="font-medium mb-2">Implementation Notes:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The popup is configured to appear 5 seconds after page load</li>
                  <li>It will only show once every 24 hours per user (stored in localStorage)</li>
                  <li>Form submissions are stored in the Supabase "leads" table</li>
                  <li>The popup has a fallback to use the API route if direct Supabase access fails</li>
                </ul>
              </div>

              {/* Lead popup will appear automatically */}
              <LeadPopup />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chatBot">
          <Card>
            <CardHeader>
              <CardTitle>Chat Bot</CardTitle>
              <CardDescription>Preview the chat bot that helps users with questions and support.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={() => setShowChatBot(true)}>Show Chat Bot</Button>

              {showChatBot && <ChatBot />}

              <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <h3 className="font-medium mb-2">Implementation Notes:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The chat bot uses Magic Loops API for natural language processing</li>
                  <li>It provides responses about Finonest services and products</li>
                  <li>The bot can collect user information for follow-up</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="header">
          <Card>
            <CardHeader>
              <CardTitle>Header & Footer</CardTitle>
              <CardDescription>Preview the site header and footer components.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md overflow-hidden">
                <div className="bg-gray-100 p-4">
                  <Header />
                </div>

                <div className="h-40 bg-gray-50 flex items-center justify-center">
                  <p className="text-gray-400">Page Content Would Appear Here</p>
                </div>

                <div className="bg-gray-100 p-4">
                  <Footer />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

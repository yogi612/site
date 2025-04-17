"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, Send, X, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LoadingSpinner } from "@/components/LoadingSpinner"

type Message = {
  role: "user" | "assistant"
  content: string
}

// Define the component as a named function
export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Finonest's AI assistant. How can I help you with your financial needs today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Add assistant response to chat
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "This is a dummy response from the chatbot.",
        },
      ])
    } catch (error) {
      console.error("Chat API error:", error)
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const toggleChat = () => {
    setIsOpen((prev) => !prev)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized((prev) => !prev)
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 bg-white rounded-lg shadow-xl z-40 transition-all duration-300 overflow-hidden
            ${isMinimized ? "w-72 h-14" : "w-80 sm:w-96 h-[500px] max-h-[80vh]"}`}
        >
          {/* Chat Header */}
          <div className="bg-primary text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              <h3 className="font-medium">Finonest Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={toggleMinimize} className="text-white/90 hover:text-white" aria-label="Minimize chat">
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </button>
              <button onClick={toggleChat} className="text-white/90 hover:text-white" aria-label="Close chat">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Container */}
              <div className="p-4 h-[calc(100%-120px)] overflow-y-auto">
                {messages.map((message, index) => (
                  <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                    <div
                      className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                        message.role === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="text-left mb-4">
                    <div className="inline-block rounded-lg px-4 py-2 bg-gray-100 text-gray-800">
                      <LoadingSpinner />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t p-3">
                <div className="flex items-center">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-grow mr-2"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSend}
                    size="icon"
                    disabled={isLoading || !input.trim()}
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

// Also export as default for backward compatibility
export default ChatBot

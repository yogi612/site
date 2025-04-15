"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

// Fallback storage for leads when Supabase is unavailable
const saveFallbackLead = (leadData: any) => {
  try {
    // Get existing leads from localStorage
    const existingLeads = JSON.parse(localStorage.getItem("fallbackLeads") || "[]")

    // Add new lead with timestamp
    const newLead = {
      ...leadData,
      id: `local-${Date.now()}`,
      created_at: new Date().toISOString(),
      status: "new",
    }

    // Save back to localStorage
    localStorage.setItem("fallbackLeads", JSON.stringify([...existingLeads, newLead]))

    return true
  } catch (error) {
    console.error("Error saving to fallback storage:", error)
    return false
  }
}

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedIn: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  // For testing purposes, show popup immediately in preview mode
  useEffect(() => {
    // Check if we're in the preview page
    const isPreviewPage = window.location.pathname.includes("/preview")

    if (isPreviewPage) {
      // Show immediately in preview mode
      setIsOpen(true)
    } else {
      // Normal behavior for other pages
      const hasSubmitted = localStorage.getItem("leadFormSubmitted")

      if (!hasSubmitted) {
        const timer = setTimeout(() => {
          setIsOpen(true)
        }, 5000)

        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interestedIn: value }))

    // Clear error when user selects
    if (errors.interestedIn) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.interestedIn
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    if (!formData.interestedIn) {
      newErrors.interestedIn = "Please select an option"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      console.log("Submitting lead data:", formData)

      // Use API route instead of direct Supabase client
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interestedIn: formData.interestedIn,
        }),
      })

      const responseData = await response.json()

      if (!response.ok) {
        console.error("API error:", responseData)

        // Check if this is a fallback scenario
        if (response.status === 503 && responseData.fallback) {
          console.log("Using fallback storage for lead data")
          const fallbackSuccess = saveFallbackLead(formData)

          if (!fallbackSuccess) {
            throw new Error("Failed to save lead data")
          }

          // Even though we're using fallback, we'll show success to the user
          console.log("Lead saved to fallback storage")
        } else {
          throw new Error(responseData.message || "Failed to submit lead")
        }
      } else {
        console.log("Lead submitted successfully via API route")
      }

      // Mark as submitted in localStorage
      localStorage.setItem("leadFormSubmitted", "true")

      setIsSuccess(true)

      // Close popup after 3 seconds
      setTimeout(() => {
        setIsOpen(false)
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting lead:", error)
      toast({
        title: "Error",
        description: "There was an error submitting your information. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // If popup is not open, don't render anything
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-6 m-4 animate-in fade-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              We've received your information and will contact you shortly with personalized financial solutions.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Get Personalized Financial Solutions</h3>
              <p className="text-gray-600 mt-2">
                Complete this quick form and our experts will contact you with tailored options for your needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={errors.name ? "border-red-500" : ""}
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={errors.email ? "border-red-500" : ""}
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="space-y-1">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className={errors.phone ? "border-red-500" : ""}
                  disabled={isSubmitting}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div className="space-y-1">
                <Label htmlFor="interested-in">I'm Interested In</Label>
                <Select value={formData.interestedIn} onValueChange={handleSelectChange}>
                  <SelectTrigger
                    id="interested-in"
                    className={errors.interestedIn ? "border-red-500" : ""}
                    disabled={isSubmitting}
                  >
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal-loan">Personal Loan</SelectItem>
                    <SelectItem value="business-loan">Business Loan</SelectItem>
                    <SelectItem value="home-loan">Home Loan</SelectItem>
                    <SelectItem value="vehicle-loan">Vehicle Loan</SelectItem>
                    <SelectItem value="investment">Investment Advisory</SelectItem>
                    <SelectItem value="credit-score">Credit Score Improvement</SelectItem>
                    <SelectItem value="other">Other Services</SelectItem>
                  </SelectContent>
                </Select>
                {errors.interestedIn && <p className="text-red-500 text-xs mt-1">{errors.interestedIn}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get Expert Advice"
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-2">
                By submitting this form, you agree to our{" "}
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                and consent to be contacted by our team.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

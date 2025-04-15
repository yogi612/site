"use client"

import type React from "react"
import { useState } from "react"
import { submitLoanApplication } from "../services/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, CheckCircle2 } from "lucide-react"
import {
  formGroupStyles,
  formLabelStyles,
  formInputStyles,
  formButtonStyles,
  formErrorStyles,
} from "@/components/ui/form-styles"

export function ApplyNowForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    amount: "",
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? value.replace(/[^0-9]/g, "") : value,
    }))

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
    setFormData((prev) => ({ ...prev, loanType: value }))

    // Clear error when user selects
    if (errors.loanType) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.loanType
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
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    if (!formData.loanType) {
      newErrors.loanType = "Please select a loan type"
    }

    if (!formData.amount) {
      newErrors.amount = "Loan amount is required"
    } else if (Number.parseInt(formData.amount) < 10000) {
      newErrors.amount = "Loan amount must be at least ₹10,000"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Convert amount to number for API
      const formattedData = {
        ...formData,
        amount: Number.parseInt(formData.amount),
      }

      const response = await submitLoanApplication(formattedData)
      console.log("Application submitted successfully:", response)

      setIsSuccess(true)

      toast({
        title: "Application Submitted",
        description: "Your loan application has been submitted successfully. We'll contact you soon.",
      })

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          loanType: "",
          amount: "",
        })
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting application:", error)

      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Format amount with commas
  const formatAmount = (value: string) => {
    if (!value) return ""
    return Number.parseInt(value).toLocaleString("en-IN")
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">Apply for a Loan</h3>

      {isSuccess ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Application Submitted!</h4>
          <p className="text-gray-600">
            Thank you for your application. Our team will review it and contact you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={formGroupStyles}>
            <Label htmlFor="name" className={formLabelStyles}>
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className={formInputStyles({ state: errors.name ? "error" : "default" })}
              disabled={isSubmitting}
            />
            {errors.name && <p className={formErrorStyles}>{errors.name}</p>}
          </div>

          <div className={formGroupStyles}>
            <Label htmlFor="email" className={formLabelStyles}>
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className={formInputStyles({ state: errors.email ? "error" : "default" })}
              disabled={isSubmitting}
            />
            {errors.email && <p className={formErrorStyles}>{errors.email}</p>}
          </div>

          <div className={formGroupStyles}>
            <Label htmlFor="phone" className={formLabelStyles}>
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className={formInputStyles({ state: errors.phone ? "error" : "default" })}
              disabled={isSubmitting}
            />
            {errors.phone && <p className={formErrorStyles}>{errors.phone}</p>}
          </div>

          <div className={formGroupStyles}>
            <Label htmlFor="loanType" className={formLabelStyles}>
              Loan Type
            </Label>
            <Select value={formData.loanType} onValueChange={handleSelectChange}>
              <SelectTrigger
                id="loanType"
                className={formInputStyles({ state: errors.loanType ? "error" : "default" })}
                disabled={isSubmitting}
              >
                <SelectValue placeholder="Select loan type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">Personal Loan</SelectItem>
                <SelectItem value="business">Business Loan</SelectItem>
                <SelectItem value="home">Home Loan</SelectItem>
                <SelectItem value="vehicle">Vehicle Loan</SelectItem>
                <SelectItem value="education">Education Loan</SelectItem>
                <SelectItem value="gold">Gold Loan</SelectItem>
              </SelectContent>
            </Select>
            {errors.loanType && <p className={formErrorStyles}>{errors.loanType}</p>}
          </div>

          <div className={formGroupStyles}>
            <Label htmlFor="amount" className={formLabelStyles}>
              Loan Amount (₹)
            </Label>
            <Input
              id="amount"
              name="amount"
              value={formData.amount ? formatAmount(formData.amount) : ""}
              onChange={handleInputChange}
              placeholder="Enter loan amount"
              className={formInputStyles({ state: errors.amount ? "error" : "default" })}
              disabled={isSubmitting}
            />
            {errors.amount && <p className={formErrorStyles}>{errors.amount}</p>}
          </div>

          <Button type="submit" className={formButtonStyles({ fullWidth: true, size: "lg" })} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              "Apply Now"
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting this form, you agree to our terms and conditions and privacy policy.
          </p>
        </form>
      )}
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"
import {
  formContainerStyles,
  formGroupStyles,
  formLabelStyles,
  formInputStyles,
  formButtonStyles,
  formErrorStyles,
} from "@/components/ui/form-styles"

interface FallbackSignupProps {
  onSuccess: () => void
}

export default function FallbackSignup({ onSuccess }: FallbackSignupProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const router = useRouter()
  const { toast } = useToast()

  const validateForm = (formData: FormData) => {
    const errors: { [key: string]: string } = {}
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const confirmPassword = formData.get("confirmPassword") as string

    if (!email) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!password) {
      errors.password = "Password is required"
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters"
    }

    if (!name) {
      errors.name = "Full name is required"
    }

    if (!phone) {
      errors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Please enter a valid 10-digit phone number"
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your password"
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    if (!validateForm(formData)) {
      return
    }

    setIsLoading(true)

    try {
      // Use the API route instead of direct Supabase client
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
          name: formData.get("name"),
          phone: formData.get("phone"),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create account")
      }

      toast({
        title: "Account created successfully!",
        description: "You can now log in with your credentials.",
      })

      onSuccess()
    } catch (error: any) {
      console.error("Signup error:", error)
      toast({
        title: "Signup Error",
        description: error.message || "An error occurred during signup. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={formContainerStyles}>
      <div className={formGroupStyles}>
        <Label htmlFor="name" className={formLabelStyles}>
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          className={formInputStyles({ state: formErrors.name ? "error" : "default" })}
          disabled={isLoading}
        />
        {formErrors.name && <p className={formErrorStyles}>{formErrors.name}</p>}
      </div>

      <div className={formGroupStyles}>
        <Label htmlFor="email" className={formLabelStyles}>
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          className={formInputStyles({ state: formErrors.email ? "error" : "default" })}
          disabled={isLoading}
        />
        {formErrors.email && <p className={formErrorStyles}>{formErrors.email}</p>}
      </div>

      <div className={formGroupStyles}>
        <Label htmlFor="phone" className={formLabelStyles}>
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="9876543210"
          className={formInputStyles({ state: formErrors.phone ? "error" : "default" })}
          disabled={isLoading}
        />
        {formErrors.phone && <p className={formErrorStyles}>{formErrors.phone}</p>}
      </div>

      <div className={formGroupStyles}>
        <Label htmlFor="password" className={formLabelStyles}>
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          className={formInputStyles({ state: formErrors.password ? "error" : "default" })}
          disabled={isLoading}
        />
        {formErrors.password && <p className={formErrorStyles}>{formErrors.password}</p>}
        <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
      </div>

      <div className={formGroupStyles}>
        <Label htmlFor="confirm-password" className={formLabelStyles}>
          Confirm Password
        </Label>
        <Input
          id="confirm-password"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          className={formInputStyles({ state: formErrors.confirmPassword ? "error" : "default" })}
          disabled={isLoading}
        />
        {formErrors.confirmPassword && <p className={formErrorStyles}>{formErrors.confirmPassword}</p>}
      </div>

      <Button type="submit" className={formButtonStyles({ fullWidth: true })} disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  )
}

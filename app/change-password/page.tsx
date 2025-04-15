"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/AuthProvider"
import Link from "next/link"
import { Loader2, Eye, EyeOff, Lock, ArrowLeft } from "lucide-react"
import PageLayout from "@/components/PageLayout"
import {
  formGroupStyles,
  formLabelStyles,
  formInputStyles,
  formButtonStyles,
  formErrorStyles,
} from "@/components/ui/form-styles"

export default function ChangePasswordPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
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

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!passwords.currentPassword) {
      newErrors.currentPassword = "Current password is required"
    }

    if (!passwords.newPassword) {
      newErrors.newPassword = "New password is required"
    } else if (passwords.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters"
    }

    if (!passwords.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password"
    } else if (passwords.newPassword !== passwords.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Password Updated",
        description: "Your password has been changed successfully.",
      })

      // Reset form
      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })

      // Redirect to profile page after successful password change
      router.push("/profile")
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "There was an error updating your password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <PageLayout title="Change Password">
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </PageLayout>
    )
  }

  if (!user) {
    router.push("/login?redirect=/change-password")
    return null
  }

  return (
    <PageLayout title="Change Password">
      <div className="container max-w-md mx-auto px-4 py-8">
        <Card className="border-0 shadow-md overflow-hidden">
          <CardHeader className="bg-primary/5 border-b pb-4">
            <div className="flex items-center mb-2">
              <Button
                variant="ghost"
                size="sm"
                className="p-0 mr-2 hover:bg-transparent"
                onClick={() => router.push("/profile")}
              >
                <ArrowLeft className="h-4 w-4 text-gray-500" />
              </Button>
              <CardTitle className="text-xl">Change Password</CardTitle>
            </div>
            <CardDescription>Update your account password to keep your account secure.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className={formGroupStyles}>
                  <Label htmlFor="currentPassword" className={formLabelStyles}>
                    Current Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      name="currentPassword"
                      type={showPasswords.currentPassword ? "text" : "password"}
                      value={passwords.currentPassword}
                      onChange={handleInputChange}
                      className={formInputStyles({ state: errors.currentPassword ? "error" : "default" })}
                      disabled={isSubmitting}
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("currentPassword")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      tabIndex={-1}
                    >
                      {showPasswords.currentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.currentPassword && <p className={formErrorStyles}>{errors.currentPassword}</p>}
                </div>

                <div className={formGroupStyles}>
                  <Label htmlFor="newPassword" className={formLabelStyles}>
                    New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      name="newPassword"
                      type={showPasswords.newPassword ? "text" : "password"}
                      value={passwords.newPassword}
                      onChange={handleInputChange}
                      className={formInputStyles({ state: errors.newPassword ? "error" : "default" })}
                      disabled={isSubmitting}
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("newPassword")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      tabIndex={-1}
                    >
                      {showPasswords.newPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.newPassword && <p className={formErrorStyles}>{errors.newPassword}</p>}
                  <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long.</p>
                </div>

                <div className={formGroupStyles}>
                  <Label htmlFor="confirmPassword" className={formLabelStyles}>
                    Confirm New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPasswords.confirmPassword ? "text" : "password"}
                      value={passwords.confirmPassword}
                      onChange={handleInputChange}
                      className={formInputStyles({ state: errors.confirmPassword ? "error" : "default" })}
                      disabled={isSubmitting}
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("confirmPassword")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      tabIndex={-1}
                    >
                      {showPasswords.confirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className={formErrorStyles}>{errors.confirmPassword}</p>}
                </div>
              </div>

              <div className="flex justify-between items-center mt-8">
                <Link href="/profile">
                  <Button variant="outline" type="button" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" className={formButtonStyles({})} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Lock className="mr-2 h-4 w-4" />
                      Change Password
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="bg-gray-50 border-t py-4 px-6">
            <div className="w-full text-center">
              <p className="text-sm text-gray-500">
                For security reasons, you'll be logged out after changing your password.
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  )
}

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/AuthProvider"
import Link from "next/link"
import { Loader2, User, FileText, CreditCard } from "lucide-react"
import PageLayout from "@/components/PageLayout"
import {
  formGroupStyles,
  formLabelStyles,
  formInputStyles,
  formButtonStyles,
  formErrorStyles,
} from "@/components/ui/form-styles"

export default function ProfilePage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?redirect=/profile")
    } else if (user) {
      // In a real app, you would fetch the user's profile data from the database
      setProfileData({
        fullName: user.name || "User",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      })
    }
  }, [user, loading, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
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

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!profileData.fullName.trim()) {
      newErrors.fullName = "Name is required"
    }

    if (profileData.phone && !/^[6-9]\d{9}$/.test(profileData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsUpdating(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Profile Updated",
        description: "Your profile information has been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "There was an error updating your profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUpdating(false)
    }
  }

  if (loading) {
    return (
      <PageLayout title="Profile">
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </PageLayout>
    )
  }

  if (!user) {
    return null // This will redirect in the useEffect
  }

  return (
    <PageLayout title="My Profile">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Applications</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span>Documents</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="border-0 shadow-md">
              <CardHeader className="bg-primary/5 border-b pb-4">
                <CardTitle className="text-xl">Personal Information</CardTitle>
                <CardDescription>Update your personal details and contact information.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleProfileUpdate}>
                  <div className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className={formGroupStyles}>
                        <Label htmlFor="fullName" className={formLabelStyles}>
                          Full Name
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={profileData.fullName}
                          onChange={handleInputChange}
                          className={formInputStyles({ state: errors.fullName ? "error" : "default" })}
                          disabled={isUpdating}
                        />
                        {errors.fullName && <p className={formErrorStyles}>{errors.fullName}</p>}
                      </div>
                      <div className={formGroupStyles}>
                        <Label htmlFor="email" className={formLabelStyles}>
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={profileData.email}
                          className={formInputStyles({ state: "disabled" })}
                          disabled
                        />
                        <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className={formGroupStyles}>
                        <Label htmlFor="phone" className={formLabelStyles}>
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleInputChange}
                          className={formInputStyles({ state: errors.phone ? "error" : "default" })}
                          disabled={isUpdating}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && <p className={formErrorStyles}>{errors.phone}</p>}
                      </div>
                      <div className={formGroupStyles}>
                        <Label htmlFor="address" className={formLabelStyles}>
                          Address
                        </Label>
                        <Input
                          id="address"
                          name="address"
                          value={profileData.address}
                          onChange={handleInputChange}
                          className={formInputStyles({ state: "default" })}
                          disabled={isUpdating}
                          placeholder="Enter your address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-8">
                    <Link href="/change-password">
                      <Button
                        variant="outline"
                        type="button"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        Change Password
                      </Button>
                    </Link>
                    <Button type="submit" className={formButtonStyles({})} disabled={isUpdating}>
                      {isUpdating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Updating...
                        </>
                      ) : (
                        "Save Changes"
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card className="border-0 shadow-md">
              <CardHeader className="bg-primary/5 border-b pb-4">
                <CardTitle className="text-xl">Loan Applications</CardTitle>
                <CardDescription>View and track your loan applications.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="rounded-md border border-dashed border-gray-300 bg-gray-50">
                  <div className="p-8 text-center">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Yet</h3>
                    <p className="text-gray-500 mb-4">You don't have any active loan applications.</p>
                    <Link href="/apply-now">
                      <Button>Apply for a Loan</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card className="border-0 shadow-md">
              <CardHeader className="bg-primary/5 border-b pb-4">
                <CardTitle className="text-xl">Documents</CardTitle>
                <CardDescription>Manage your uploaded documents and statements.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="rounded-md border border-dashed border-gray-300 bg-gray-50">
                  <div className="p-8 text-center">
                    <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Documents</h3>
                    <p className="text-gray-500 mb-4">You haven't uploaded any documents yet.</p>
                    <Button>Upload Documents</Button>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">We accept JPG, PNG, and PDF files up to 5MB.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  )
}

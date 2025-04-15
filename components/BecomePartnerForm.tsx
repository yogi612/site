"use client"

import type React from "react"

import { useState } from "react"
import { db } from "@/lib/db-schema"

export function BecomePartnerForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    experience: "0",
    location: "",
    businessType: "",
    expectedBusiness: "0",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters."
    }

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!formData.phone || !/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number."
    }

    if (!formData.company) {
      newErrors.company = "Company name is required."
    }

    if (!formData.location) {
      newErrors.location = "Location is required."
    }

    if (!formData.businessType) {
      newErrors.businessType = "Business type is required."
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
      const formattedValues = {
        ...formData,
        experience: Number(formData.experience) || 0,
        expectedBusiness: Number(formData.expectedBusiness) || 0,
      }

      await db.createPartnerApplication(formattedValues)
      setSuccessMessage("Application submitted successfully! We will contact you shortly.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        experience: "0",
        location: "",
        businessType: "",
        expectedBusiness: "0",
      })
      setTimeout(() => {
        setIsOpen(false)
        setSuccessMessage("")
      }, 3000)
    } catch (error) {
      setErrors({ submit: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white hover:bg-gray-100 text-primary font-medium px-8 py-3 rounded-md transition-colors duration-200 shadow-md"
        type="button"
      >
        Become Our Partner
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-auto">
            <div className="bg-primary text-white p-6 rounded-t-lg">
              <h2 className="text-2xl font-bold">Partner Application</h2>
              <p className="text-white/90 mt-2">
                Fill out the form below to become our partner. We will contact you shortly.
              </p>
            </div>

            <div className="p-6">
              {successMessage ? (
                <div className="text-green-600 text-center py-4">{successMessage}</div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isSubmitting}
                      />
                      {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isSubmitting}
                      />
                      {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isSubmitting}
                      />
                      {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isSubmitting}
                      />
                      {errors.company && <p className="text-sm text-red-500 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                        Years of Experience
                      </label>
                      <input
                        id="experience"
                        name="experience"
                        type="number"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="5"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isSubmitting}
                      />
                      {errors.experience && <p className="text-sm text-red-500 mt-1">{errors.experience}</p>}
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, State"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isSubmitting}
                      />
                      {errors.location && <p className="text-sm text-red-500 mt-1">{errors.location}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Type
                      </label>
                      <input
                        id="businessType"
                        name="businessType"
                        type="text"
                        value={formData.businessType}
                        onChange={handleChange}
                        placeholder="Type of business"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isSubmitting}
                      />
                      {errors.businessType && <p className="text-sm text-red-500 mt-1">{errors.businessType}</p>}
                    </div>

                    <div>
                      <label htmlFor="expectedBusiness" className="block text-sm font-medium text-gray-700 mb-1">
                        Expected Monthly Business (₹)
                      </label>
                      <input
                        id="expectedBusiness"
                        name="expectedBusiness"
                        type="number"
                        value={formData.expectedBusiness}
                        onChange={handleChange}
                        placeholder="500000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isSubmitting}
                      />
                      {errors.expectedBusiness && (
                        <p className="text-sm text-red-500 mt-1">{errors.expectedBusiness}</p>
                      )}
                    </div>
                  </div>

                  {errors.submit && <p className="text-sm text-red-500 text-center">{errors.submit}</p>}

                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="flex-1 bg-primary hover:bg-primary/90 text-white py-2 rounded-md transition-colors duration-200 disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md transition-colors duration-200"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

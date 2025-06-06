"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      })
      return
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    if (!formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please enter your message",
        variant: "destructive",
      })
      return
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <PageLayout title="Contact Us">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
          <p className="text-gray-600">Have questions about our services? Our team is here to help you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-gray-200 rounded-lg p-4">
            <Image
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=600&ixlib=rb-4.0.3"
              alt="Contact Finonest"
              width={600}
              height={400}
              className="rounded-lg shadow-md mb-6"
            />
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <p>
                  <strong>Email:</strong> info@finonest.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <p>
                  <strong>Phone:</strong> +91 9314474723
                </p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong>Address:</strong>
                  <p className="text-gray-700">
                    AA-15, Basement Floor,
                    <br />
                    Opposite Jaipur Hospital,
                    <br />
                    Near Gopalpura Bypass,
                    <br />
                    Tonk Road, Jai Ambey Nagar,
                    <br />
                    Jaipur, Rajasthan 302018
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

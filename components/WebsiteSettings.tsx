"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export function WebsiteSettings() {
  const [settings, setSettings] = useState({
    siteName: "Finonest",
    siteDescription: "Your trusted financial partner",
    contactEmail: "support@finonest.com",
    contactPhone: "+91 1234567890",
    address: "123 Financial Street, Mumbai, India",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save settings to API
    // This is a mock implementation
    console.log("Saving settings:", settings)
    toast({
      title: "Settings saved",
      description: "Your website settings have been updated successfully.",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="siteName">Site Name</Label>
        <Input id="siteName" name="siteName" value={settings.siteName} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="siteDescription">Site Description</Label>
        <Textarea
          id="siteDescription"
          name="siteDescription"
          value={settings.siteDescription}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="contactEmail">Contact Email</Label>
        <Input
          id="contactEmail"
          name="contactEmail"
          type="email"
          value={settings.contactEmail}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="contactPhone">Contact Phone</Label>
        <Input id="contactPhone" name="contactPhone" type="tel" value={settings.contactPhone} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Textarea id="address" name="address" value={settings.address} onChange={handleChange} />
      </div>
      <Button type="submit">Save Settings</Button>
    </form>
  )
}

"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/Layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { Switch } from "@/components/ui/switch"

export function SettingsContent() {
  const [activeTab, setActiveTab] = useState("general")
  const [formState, setFormState] = useState({
    general: {
      siteName: "Finonest",
      siteDescription: "Your trusted financial partner",
      supportEmail: "support@finonest.com",
      supportPhone: "+91 1234567890",
      address: "123 Financial Street, Mumbai, India",
    },
    seo: {
      metaTitle: "Finonest - Financial Services & Loan Assistance",
      metaDescription:
        "Finonest provides financial services, loan assistance, and credit score management for individuals and businesses.",
      ogTitle: "Finonest - Your Trusted Financial Partner",
      ogDescription: "Get expert financial services and loan assistance with Finonest.",
      ogImage: "/images/og-image.jpg",
    },
    appearance: {
      primaryColor: "#4f46e5",
      logoUrl: "/logo.png",
      darkMode: false,
      defaultFontSize: "16px",
    },
    notifications: {
      enableEmailNotifications: true,
      enableSmsNotifications: true,
      adminEmailNotifications: true,
      loanApplicationNotifications: true,
      userRegistrationNotifications: true,
    },
  })

  const handleInputChange = (section: string, field: string, value: any) => {
    setFormState({
      ...formState,
      [section]: {
        ...formState[section as keyof typeof formState],
        [field]: value,
      },
    })
  }

  const handleSave = (section: string) => {
    console.log(`Saving ${section} settings:`, formState[section as keyof typeof formState])
    toast({
      title: "Settings saved",
      description: `Your ${section} settings have been updated successfully.`,
    })
  }

  return (
    <AdminLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Manage your website's general information and contact details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input
                    id="site-name"
                    value={formState.general.siteName}
                    onChange={(e) => handleInputChange("general", "siteName", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="site-description">Site Description</Label>
                  <Textarea
                    id="site-description"
                    value={formState.general.siteDescription}
                    onChange={(e) => handleInputChange("general", "siteDescription", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="support-email">Support Email</Label>
                  <Input
                    id="support-email"
                    type="email"
                    value={formState.general.supportEmail}
                    onChange={(e) => handleInputChange("general", "supportEmail", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="support-phone">Support Phone</Label>
                  <Input
                    id="support-phone"
                    type="tel"
                    value={formState.general.supportPhone}
                    onChange={(e) => handleInputChange("general", "supportPhone", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={formState.general.address}
                    onChange={(e) => handleInputChange("general", "address", e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave("general")}>Save General Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="seo">
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>Optimize your website for search engines and social media sharing.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="meta-title">Meta Title</Label>
                  <Input
                    id="meta-title"
                    value={formState.seo.metaTitle}
                    onChange={(e) => handleInputChange("seo", "metaTitle", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <Textarea
                    id="meta-description"
                    value={formState.seo.metaDescription}
                    onChange={(e) => handleInputChange("seo", "metaDescription", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="og-title">Open Graph Title</Label>
                  <Input
                    id="og-title"
                    value={formState.seo.ogTitle}
                    onChange={(e) => handleInputChange("seo", "ogTitle", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="og-description">Open Graph Description</Label>
                  <Textarea
                    id="og-description"
                    value={formState.seo.ogDescription}
                    onChange={(e) => handleInputChange("seo", "ogDescription", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="og-image">Open Graph Image URL</Label>
                  <Input
                    id="og-image"
                    value={formState.seo.ogImage}
                    onChange={(e) => handleInputChange("seo", "ogImage", e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave("seo")}>Save SEO Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize the look and feel of your website.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="primary-color"
                      type="color"
                      className="w-12 h-8"
                      value={formState.appearance.primaryColor}
                      onChange={(e) => handleInputChange("appearance", "primaryColor", e.target.value)}
                    />
                    <Input
                      value={formState.appearance.primaryColor}
                      onChange={(e) => handleInputChange("appearance", "primaryColor", e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="logo-url">Logo URL</Label>
                  <Input
                    id="logo-url"
                    value={formState.appearance.logoUrl}
                    onChange={(e) => handleInputChange("appearance", "logoUrl", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="default-font-size">Default Font Size</Label>
                  <Input
                    id="default-font-size"
                    value={formState.appearance.defaultFontSize}
                    onChange={(e) => handleInputChange("appearance", "defaultFontSize", e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="dark-mode"
                    checked={formState.appearance.darkMode}
                    onCheckedChange={(checked) => handleInputChange("appearance", "darkMode", checked)}
                  />
                  <Label htmlFor="dark-mode">Enable Dark Mode by Default</Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave("appearance")}>Save Appearance Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Configure how notifications are sent to users and administrators.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="email-notifications"
                    checked={formState.notifications.enableEmailNotifications}
                    onCheckedChange={(checked) =>
                      handleInputChange("notifications", "enableEmailNotifications", checked)
                    }
                  />
                  <Label htmlFor="email-notifications">Enable Email Notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="sms-notifications"
                    checked={formState.notifications.enableSmsNotifications}
                    onCheckedChange={(checked) => handleInputChange("notifications", "enableSmsNotifications", checked)}
                  />
                  <Label htmlFor="sms-notifications">Enable SMS Notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="admin-email-notifications"
                    checked={formState.notifications.adminEmailNotifications}
                    onCheckedChange={(checked) =>
                      handleInputChange("notifications", "adminEmailNotifications", checked)
                    }
                  />
                  <Label htmlFor="admin-email-notifications">Send Email Notifications to Administrators</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="loan-notifications"
                    checked={formState.notifications.loanApplicationNotifications}
                    onCheckedChange={(checked) =>
                      handleInputChange("notifications", "loanApplicationNotifications", checked)
                    }
                  />
                  <Label htmlFor="loan-notifications">Loan Application Notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="user-notifications"
                    checked={formState.notifications.userRegistrationNotifications}
                    onCheckedChange={(checked) =>
                      handleInputChange("notifications", "userRegistrationNotifications", checked)
                    }
                  />
                  <Label htmlFor="user-notifications">User Registration Notifications</Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSave("notifications")}>Save Notification Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}

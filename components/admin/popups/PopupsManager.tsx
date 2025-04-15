"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Loader2, Plus, Trash2, Edit, Eye } from "lucide-react"

type Popup = {
  id: string
  title: string
  content: string
  is_active: boolean
  target_page: string
  display_frequency: string
  start_date: string | null
  end_date: string | null
  created_at: string
}

export default function PopupsManager() {
  const [popups, setPopups] = useState<Popup[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    is_active: true,
    target_page: "all",
    display_frequency: "once",
    start_date: "",
    end_date: "",
  })

  const supabase = createClientComponentClient()

  useEffect(() => {
    fetchPopups()
  }, [])

  const fetchPopups = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase.from("popups").select("*").order("created_at", { ascending: false })

      if (error) throw error
      setPopups(data || [])
    } catch (error) {
      console.error("Error fetching popups:", error)
      toast({
        title: "Error",
        description: "Failed to load popups",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, is_active: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      is_active: true,
      target_page: "all",
      display_frequency: "once",
      start_date: "",
      end_date: "",
    })
    setEditingId(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (editingId) {
        // Update existing popup
        const { error } = await supabase.from("popups").update(formData).eq("id", editingId)

        if (error) throw error

        toast({
          title: "Success",
          description: "Popup updated successfully",
        })
      } else {
        // Create new popup
        const { error } = await supabase.from("popups").insert([formData])

        if (error) throw error

        toast({
          title: "Success",
          description: "Popup created successfully",
        })
      }

      // Reset form and refresh data
      resetForm()
      setShowForm(false)
      fetchPopups()
    } catch (error) {
      console.error("Error saving popup:", error)
      toast({
        title: "Error",
        description: "Failed to save popup",
        variant: "destructive",
      })
    }
  }

  const handleEdit = (popup: Popup) => {
    setFormData({
      title: popup.title,
      content: popup.content,
      is_active: popup.is_active,
      target_page: popup.target_page || "all",
      display_frequency: popup.display_frequency || "once",
      start_date: popup.start_date || "",
      end_date: popup.end_date || "",
    })
    setEditingId(popup.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this popup?")) return

    try {
      const { error } = await supabase.from("popups").delete().eq("id", id)

      if (error) throw error

      toast({
        title: "Success",
        description: "Popup deleted successfully",
      })

      fetchPopups()
    } catch (error) {
      console.error("Error deleting popup:", error)
      toast({
        title: "Error",
        description: "Failed to delete popup",
        variant: "destructive",
      })
    }
  }

  const toggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase.from("popups").update({ is_active: !currentStatus }).eq("id", id)

      if (error) throw error

      toast({
        title: "Success",
        description: `Popup ${!currentStatus ? "activated" : "deactivated"} successfully`,
      })

      fetchPopups()
    } catch (error) {
      console.error("Error toggling popup status:", error)
      toast({
        title: "Error",
        description: "Failed to update popup status",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Popups</h2>
        <Button
          onClick={() => {
            resetForm()
            setShowForm(!showForm)
          }}
        >
          {showForm ? (
            "Cancel"
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Add New Popup
            </>
          )}
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Popup" : "Create New Popup"}</CardTitle>
            <CardDescription>
              {editingId
                ? "Update the details of your existing popup"
                : "Configure a new popup to display on your website"}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter popup title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Enter popup content"
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="target_page">Target Page</Label>
                  <Select
                    value={formData.target_page}
                    onValueChange={(value) => handleSelectChange("target_page", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select page" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Pages</SelectItem>
                      <SelectItem value="home">Home Page</SelectItem>
                      <SelectItem value="services">Services Page</SelectItem>
                      <SelectItem value="products">Products Page</SelectItem>
                      <SelectItem value="about">About Page</SelectItem>
                      <SelectItem value="contact">Contact Page</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="display_frequency">Display Frequency</Label>
                  <Select
                    value={formData.display_frequency}
                    onValueChange={(value) => handleSelectChange("display_frequency", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once">Once per user</SelectItem>
                      <SelectItem value="always">Every visit</SelectItem>
                      <SelectItem value="daily">Once per day</SelectItem>
                      <SelectItem value="weekly">Once per week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start_date">Start Date (Optional)</Label>
                  <Input
                    id="start_date"
                    name="start_date"
                    type="datetime-local"
                    value={formData.start_date}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end_date">End Date (Optional)</Label>
                  <Input
                    id="end_date"
                    name="end_date"
                    type="datetime-local"
                    value={formData.end_date}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="is_active" checked={formData.is_active} onCheckedChange={handleSwitchChange} />
                <Label htmlFor="is_active">Active</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                type="button"
                onClick={() => {
                  setShowForm(false)
                  resetForm()
                }}
              >
                Cancel
              </Button>
              <Button type="submit">{editingId ? "Update Popup" : "Create Popup"}</Button>
            </CardFooter>
          </form>
        </Card>
      )}

      {loading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : popups.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No popups found. Create your first popup to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popups.map((popup) => (
            <Card key={popup.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{popup.title}</CardTitle>
                  <div
                    className={`px-2 py-1 text-xs rounded-full ${popup.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                  >
                    {popup.is_active ? "Active" : "Inactive"}
                  </div>
                </div>
                <CardDescription>
                  Target: {popup.target_page || "All Pages"} • Frequency: {popup.display_frequency || "Once"}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-600 line-clamp-2">{popup.content}</p>
                {(popup.start_date || popup.end_date) && (
                  <div className="mt-2 text-xs text-gray-500">
                    {popup.start_date && <span>From: {new Date(popup.start_date).toLocaleDateString()}</span>}
                    {popup.start_date && popup.end_date && <span> • </span>}
                    {popup.end_date && <span>To: {new Date(popup.end_date).toLocaleDateString()}</span>}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(popup)}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => toggleActive(popup.id, popup.is_active)}>
                    <Eye className="h-4 w-4 mr-1" />
                    {popup.is_active ? "Deactivate" : "Activate"}
                  </Button>
                </div>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(popup.id)}>
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

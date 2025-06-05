"use client"

import type React from "react"

import { useState } from "react"
import { supabase } from "@/utils/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, PlusCircle } from "lucide-react"

interface AddTodoFormProps {
  onTodoAdded: () => void
}

export default function AddTodoForm({ onTodoAdded }: AddTodoFormProps) {
  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!title.trim()) {
      setError("Please enter a task title")
      return
    }

    try {
      setLoading(true)
      setError(null)

      const { error: supabaseError } = await supabase.from("todos").insert([{ title, completed: false }])

      if (supabaseError) {
        throw supabaseError
      }

      setTitle("")
      onTodoAdded()
    } catch (err) {
      console.error("Error adding task:", err)
      setError("Failed to add task. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          disabled={loading}
          className="flex-1"
        />
        <Button type="submit" disabled={loading} className="bg-primary hover:bg-primary/90">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Adding
            </>
          ) : (
            <>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Task
            </>
          )}
        </Button>
      </div>

      {error && <div className="mt-2 text-sm text-red-600">{error}</div>}
    </form>
  )
}

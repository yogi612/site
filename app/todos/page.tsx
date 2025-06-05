"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/utils/supabase"
import { Loader2, CheckCircle, Circle, Trash2 } from "lucide-react"
import AddTodoForm from "@/components/AddTodoForm"
import PageLayout from "@/components/PageLayout"
import { useTodosSubscription } from "@/hooks/useTodosSubscription"

interface Todo {
  id: number
  title: string
  completed: boolean
  created_at: string
}

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchTodos() {
    try {
      setLoading(true)
      const { data, error } = await supabase.from("todos").select("*").order("created_at", { ascending: false })

      if (error) {
        throw error
      }

      setTodos(data || [])
    } catch (err) {
      console.error("Error fetching todos:", err)
      setError("Failed to load todos. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  // Subscribe to real-time updates
  useTodosSubscription(fetchTodos)

  async function toggleTodoStatus(id: number, currentStatus: boolean) {
    try {
      const { error } = await supabase.from("todos").update({ completed: !currentStatus }).eq("id", id)

      if (error) {
        throw error
      }

      // Update local state
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !currentStatus } : todo)))
    } catch (err) {
      console.error("Error updating todo:", err)
    }
  }

  async function deleteTodo(id: number) {
    try {
      const { error } = await supabase.from("todos").delete().eq("id", id)

      if (error) {
        throw error
      }

      // Update local state
      setTodos(todos.filter((todo) => todo.id !== id))
    } catch (err) {
      console.error("Error deleting todo:", err)
    }
  }

  return (
    <PageLayout>
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-primary">Task Management</h1>

          <AddTodoForm onTodoAdded={fetchTodos} />

          {loading && todos.length === 0 ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2">Loading tasks...</span>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>
          ) : todos.length === 0 ? (
            <div className="text-center py-12 text-gray-500">No tasks found. Create your first task above!</div>
          ) : (
            <ul className="space-y-3 mt-6">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="border border-gray-200 p-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center flex-1">
                    <button
                      onClick={() => toggleTodoStatus(todo.id, todo.completed)}
                      className="mr-3 text-primary hover:text-primary/80 transition-colors"
                      aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
                    >
                      {todo.completed ? <CheckCircle className="h-6 w-6" /> : <Circle className="h-6 w-6" />}
                    </button>
                    <div className={`flex-1 ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                      {todo.title}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500 hidden md:block">
                      {new Date(todo.created_at).toLocaleDateString()}
                    </div>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Delete task"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

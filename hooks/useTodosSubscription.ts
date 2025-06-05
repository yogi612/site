"use client"

import { useEffect } from "react"
import { supabase } from "@/utils/supabase"

type SubscriptionCallback = () => void

export function useTodosSubscription(callback: SubscriptionCallback) {
  useEffect(() => {
    // Subscribe to changes in the todos table
    const subscription = supabase
      .channel("todos-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "todos",
        },
        () => {
          // Call the callback function when changes occur
          callback()
        },
      )
      .subscribe()

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe()
    }
  }, [callback])
}

"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

/**
 * Attempts to sync any leads stored in localStorage with the database
 * when the user comes back online
 */
export function setupOfflineSync() {
  if (typeof window === "undefined") return

  // Function to sync offline leads
  const syncOfflineLeads = async () => {
    try {
      const offlineLeads = localStorage.getItem("offlineLeads")

      if (!offlineLeads) return

      const leads = JSON.parse(offlineLeads)

      if (!leads.length) return

      console.log(`Attempting to sync ${leads.length} offline leads`)

      // Try API route first
      try {
        const response = await fetch("/api/sync-offline-leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ leads }),
        })

        if (response.ok) {
          console.log("Successfully synced offline leads via API")
          localStorage.removeItem("offlineLeads")
          return
        }
      } catch (apiError) {
        console.error("Failed to sync via API:", apiError)
      }

      // Fallback to direct Supabase
      try {
        const supabase = createClientComponentClient()

        // Insert leads one by one to maximize chances of success
        let successCount = 0

        for (const lead of leads) {
          const { error } = await supabase.from("leads").insert([lead])

          if (!error) {
            successCount++
          }
        }

        if (successCount === leads.length) {
          console.log(`Successfully synced all ${successCount} offline leads`)
          localStorage.removeItem("offlineLeads")
        } else if (successCount > 0) {
          console.log(`Partially synced offline leads: ${successCount}/${leads.length}`)
          // Keep only the failed ones
          localStorage.setItem("offlineLeads", JSON.stringify(leads.slice(successCount)))
        }
      } catch (supabaseError) {
        console.error("Failed to sync via Supabase client:", supabaseError)
      }
    } catch (error) {
      console.error("Error in offline sync:", error)
    }
  }

  // Set up online/offline event listeners
  window.addEventListener("online", syncOfflineLeads)

  // Also try to sync on page load if we're online
  if (navigator.onLine) {
    syncOfflineLeads()
  }
}

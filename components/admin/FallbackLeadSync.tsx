"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, CloudIcon as CloudSync } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export function FallbackLeadSync() {
  const [isLoading, setIsLoading] = useState(false)
  const [fallbackLeads, setFallbackLeads] = useState<any[]>([])
  const { toast } = useToast()

  useEffect(() => {
    // Check for fallback leads in localStorage
    try {
      const leads = JSON.parse(localStorage.getItem("fallbackLeads") || "[]")
      setFallbackLeads(leads)
    } catch (error) {
      console.error("Error loading fallback leads:", error)
    }
  }, [])

  const syncFallbackLeads = async () => {
    if (fallbackLeads.length === 0) return

    setIsLoading(true)

    try {
      const supabase = createClientComponentClient()
      let successCount = 0
      let errorCount = 0

      // Process each lead
      for (const lead of fallbackLeads) {
        const { error } = await supabase.from("leads").insert([
          {
            name: lead.name,
            email: lead.email,
            phone: lead.phone,
            interested_in: lead.interestedIn,
            status: "new",
            // Use the original timestamp if available
            created_at: lead.created_at || new Date().toISOString(),
          },
        ])

        if (error) {
          console.error("Error syncing lead:", error)
          errorCount++
        } else {
          successCount++
        }
      }

      // Clear synced leads from localStorage
      if (successCount > 0) {
        localStorage.removeItem("fallbackLeads")
        setFallbackLeads([])
      }

      toast({
        title: "Sync Complete",
        description: `Successfully synced ${successCount} leads. Failed: ${errorCount}.`,
        variant: successCount > 0 ? "default" : "destructive",
      })
    } catch (error) {
      console.error("Error during sync:", error)
      toast({
        title: "Sync Failed",
        description: "There was an error syncing the leads. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (fallbackLeads.length === 0) return null

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium text-yellow-800">Offline Leads Available</h3>
          <p className="text-sm text-yellow-700">
            {fallbackLeads.length} lead(s) stored locally. Sync them to the database now.
          </p>
        </div>
        <Button onClick={syncFallbackLeads} disabled={isLoading} variant="outline" className="bg-white">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Syncing...
            </>
          ) : (
            <>
              <CloudSync className="mr-2 h-4 w-4" />
              Sync Now
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LeadPopup } from "@/components/LeadPopup"

export default function TestPopupPage() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Lead Popup Test Page</h1>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <p className="mb-4">
          This page allows you to test the lead generation popup. Click the button below to show the popup.
        </p>

        <Button onClick={() => setShowPopup(true)} className="bg-primary hover:bg-primary/90">
          Show Lead Popup
        </Button>

        {showPopup && <LeadPopup />}
      </div>
    </div>
  )
}

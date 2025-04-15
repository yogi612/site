"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type LoanApplication = {
  id: string
  name: string
  email: string
  loanType: string
  amount: number
  status: "pending" | "approved" | "rejected"
}

export function LoanApplications() {
  const [applications, setApplications] = useState<LoanApplication[]>([])
  const [selectedApplication, setSelectedApplication] = useState<LoanApplication | null>(null)

  useEffect(() => {
    // Fetch loan applications from API
    // This is a mock implementation
    const mockApplications: LoanApplication[] = [
      { id: "1", name: "John Doe", email: "john@example.com", loanType: "Personal", amount: 50000, status: "pending" },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        loanType: "Business",
        amount: 100000,
        status: "approved",
      },
      { id: "3", name: "Bob Johnson", email: "bob@example.com", loanType: "Home", amount: 500000, status: "rejected" },
    ]
    setApplications(mockApplications)
  }, [])

  const handleStatusChange = (applicationId: string, newStatus: "pending" | "approved" | "rejected") => {
    // Update application status in API
    // This is a mock implementation
    setApplications(applications.map((app) => (app.id === applicationId ? { ...app, status: newStatus } : app)))
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Loan Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell>{application.name}</TableCell>
              <TableCell>{application.email}</TableCell>
              <TableCell>{application.loanType}</TableCell>
              <TableCell>₹{application.amount.toLocaleString()}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    application.status === "approved"
                      ? "success"
                      : application.status === "rejected"
                        ? "destructive"
                        : "default"
                  }
                >
                  {application.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setSelectedApplication(application)}>
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Loan Application Details</DialogTitle>
                    </DialogHeader>
                    {selectedApplication && (
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input id="name" value={selectedApplication.name} className="col-span-3" readOnly />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">
                            Email
                          </Label>
                          <Input id="email" value={selectedApplication.email} className="col-span-3" readOnly />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="loanType" className="text-right">
                            Loan Type
                          </Label>
                          <Input id="loanType" value={selectedApplication.loanType} className="col-span-3" readOnly />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="amount" className="text-right">
                            Amount
                          </Label>
                          <Input
                            id="amount"
                            value={`₹${selectedApplication.amount.toLocaleString()}`}
                            className="col-span-3"
                            readOnly
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="status" className="text-right">
                            Status
                          </Label>
                          <Select
                            value={selectedApplication.status}
                            onValueChange={(value: "pending" | "approved" | "rejected") =>
                              handleStatusChange(selectedApplication.id, value)
                            }
                          >
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="approved">Approved</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

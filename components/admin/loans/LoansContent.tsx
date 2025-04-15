"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/Layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { MoreHorizontal, CheckCircle, XCircle, Eye, FileText, Download } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

type LoanApplication = {
  id: string
  name: string
  email: string
  phone: string
  loanType: string
  amount: number
  purpose: string
  employmentType: string
  monthlyIncome: number
  status: "pending" | "approved" | "rejected"
  createdAt: Date
}

export function LoansContent() {
  const [applications, setApplications] = useState<LoanApplication[]>([
    {
      id: "1",
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "9876543210",
      loanType: "Personal",
      amount: 100000,
      purpose: "Home renovation",
      employmentType: "Salaried",
      monthlyIncome: 50000,
      status: "pending",
      createdAt: new Date(2023, 5, 15),
    },
    {
      id: "2",
      name: "Priya Patel",
      email: "priya@example.com",
      phone: "9876543211",
      loanType: "Home",
      amount: 3000000,
      purpose: "New home purchase",
      employmentType: "Business Owner",
      monthlyIncome: 120000,
      status: "approved",
      createdAt: new Date(2023, 4, 20),
    },
    {
      id: "3",
      name: "Amit Kumar",
      email: "amit@example.com",
      phone: "9876543212",
      loanType: "Business",
      amount: 500000,
      purpose: "Business expansion",
      employmentType: "Self-employed",
      monthlyIncome: 80000,
      status: "rejected",
      createdAt: new Date(2023, 5, 5),
    },
    {
      id: "4",
      name: "Neha Gupta",
      email: "neha@example.com",
      phone: "9876543213",
      loanType: "Education",
      amount: 200000,
      purpose: "MBA program",
      employmentType: "Salaried",
      monthlyIncome: 45000,
      status: "pending",
      createdAt: new Date(2023, 5, 10),
    },
    {
      id: "5",
      name: "Vijay Singh",
      email: "vijay@example.com",
      phone: "9876543214",
      loanType: "Vehicle",
      amount: 800000,
      purpose: "New car purchase",
      employmentType: "Salaried",
      monthlyIncome: 60000,
      status: "approved",
      createdAt: new Date(2023, 5, 8),
    },
  ])

  const [selectedApplication, setSelectedApplication] = useState<LoanApplication | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredApplications = applications.filter(
    (app) =>
      (app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.loanType.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "all" || app.status === statusFilter),
  )

  const handleStatusChange = (id: string, newStatus: "pending" | "approved" | "rejected") => {
    setApplications(applications.map((app) => (app.id === id ? { ...app, status: newStatus } : app)))
    const application = applications.find((app) => app.id === id)
    toast({
      title: `Application ${newStatus}`,
      description: `${application?.name}'s loan application has been ${newStatus}.`,
    })
  }

  return (
    <AdminLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <h2 className="text-3xl font-bold tracking-tight">Loan Applications</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={() => window.print()}>
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex flex-1 items-center space-x-2">
            <Input
              placeholder="Search applications..."
              className="w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="status-filter" className="mr-2">
              Status:
            </Label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger id="status-filter" className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Applications</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Applicant</TableHead>
                <TableHead>Loan Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{application.name}</div>
                      <div className="text-sm text-muted-foreground">{application.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{application.loanType}</TableCell>
                  <TableCell>₹{application.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    {application.createdAt.toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        application.status === "approved"
                          ? "success"
                          : application.status === "rejected"
                            ? "destructive"
                            : "outline"
                      }
                    >
                      {application.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Dialog>
                          <DialogTrigger asChild>
                            <DropdownMenuItem
                              onSelect={(e) => {
                                e.preventDefault()
                                setSelectedApplication(application)
                              }}
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Loan Application Details</DialogTitle>
                            </DialogHeader>
                            {selectedApplication && (
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <h3 className="text-lg font-medium">Applicant Information</h3>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="font-medium">Name:</div>
                                      <div className="col-span-2">{selectedApplication.name}</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="font-medium">Email:</div>
                                      <div className="col-span-2">{selectedApplication.email}</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="font-medium">Phone:</div>
                                      <div className="col-span-2">{selectedApplication.phone}</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="font-medium">Employment:</div>
                                      <div className="col-span-2">{selectedApplication.employmentType}</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="font-medium">Monthly Income:</div>
                                      <div className="col-span-2">
                                        ₹{selectedApplication.monthlyIncome.toLocaleString()}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <h3 className="text-lg font-medium">Loan Information</h3>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="font-medium">Loan Type:</div>
                                      <div className="col-span-2">{selectedApplication.loanType}</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="font-medium">Amount:</div>
                                      <div className="col-span-2">₹{selectedApplication.amount.toLocaleString()}</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="font-medium">Purpose:</div>
                                      <div className="col-span-2">{selectedApplication.purpose}</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="font-medium">Application Date:</div>
                                      <div className="col-span-2">
                                        {selectedApplication.createdAt.toLocaleDateString("en-IN", {
                                          day: "numeric",
                                          month: "long",
                                          year: "numeric",
                                        })}
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                      <div className="font-medium">Status:</div>
                                      <div className="col-span-2">
                                        <Badge
                                          variant={
                                            selectedApplication.status === "approved"
                                              ? "success"
                                              : selectedApplication.status === "rejected"
                                                ? "destructive"
                                                : "outline"
                                          }
                                        >
                                          {selectedApplication.status}
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <h3 className="text-lg font-medium">Application Status</h3>
                                  <div className="flex items-center space-x-2">
                                    <Label htmlFor="application-status" className="min-w-[80px]">
                                      Update Status:
                                    </Label>
                                    <Select
                                      value={selectedApplication.status}
                                      onValueChange={(value: "pending" | "approved" | "rejected") =>
                                        handleStatusChange(selectedApplication.id, value)
                                      }
                                    >
                                      <SelectTrigger id="application-status">
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
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(application.id, "approved")}
                          disabled={application.status === "approved"}
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleStatusChange(application.id, "rejected")}
                          disabled={application.status === "rejected"}
                        >
                          <XCircle className="mr-2 h-4 w-4" />
                          Reject
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  )
}

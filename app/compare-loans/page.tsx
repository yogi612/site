"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

interface LoanOffer {
  bank: string
  interestRate: number
  processingFee: number
  tenure: number
  maxAmount: number
}

const sampleOffers: LoanOffer[] = [
  {
    bank: "ABC Bank",
    interestRate: 8.5,
    processingFee: 0.5,
    tenure: 180,
    maxAmount: 5000000,
  },
  {
    bank: "XYZ Bank",
    interestRate: 8.75,
    processingFee: 0.25,
    tenure: 240,
    maxAmount: 7500000,
  },
  {
    bank: "PQR Bank",
    interestRate: 9.0,
    processingFee: 0,
    tenure: 300,
    maxAmount: 10000000,
  },
]

export default function CompareLoan() {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [tenure, setTenure] = useState(180)

  const calculateEMI = (amount: number, rate: number, months: number) => {
    const ratePerMonth = rate / (12 * 100)
    const emi = (amount * ratePerMonth * Math.pow(1 + ratePerMonth, months)) / (Math.pow(1 + ratePerMonth, months) - 1)
    return Math.round(emi)
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 className="text-3xl font-bold text-center mb-8" initial={{ y: -20 }} animate={{ y: 0 }}>
          Compare Loan Offers
        </motion.h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Loan Requirements</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Loan Amount (₹)</Label>
              <Input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                min={100000}
                max={10000000}
              />
            </div>
            <div className="space-y-2">
              <Label>Tenure (months)</Label>
              <Input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                min={12}
                max={360}
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6">
          {sampleOffers.map((offer, index) => (
            <motion.div
              key={offer.bank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{offer.bank}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Interest Rate</TableCell>
                        <TableCell>{offer.interestRate}% p.a.</TableCell>
                        <TableCell className="font-medium">Processing Fee</TableCell>
                        <TableCell>{offer.processingFee}%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Monthly EMI</TableCell>
                        <TableCell>₹{calculateEMI(loanAmount, offer.interestRate, tenure).toLocaleString()}</TableCell>
                        <TableCell className="font-medium">Processing Amount</TableCell>
                        <TableCell>₹{Math.round(loanAmount * (offer.processingFee / 100)).toLocaleString()}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Button className="mt-4 w-full">Apply Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

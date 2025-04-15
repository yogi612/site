"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [interestRate, setInterestRate] = useState(10)
  const [tenure, setTenure] = useState(12)

  const calculateEMI = () => {
    const principal = loanAmount
    const ratePerMonth = interestRate / (12 * 100)
    const n = tenure

    const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, n)) / (Math.pow(1 + ratePerMonth, n) - 1)
    const totalAmount = emi * n
    const totalInterest = totalAmount - principal

    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
    }
  }

  const { emi, totalAmount, totalInterest } = calculateEMI()

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-primary/5 to-white py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h1 className="text-3xl font-bold text-center mb-8" initial={{ y: -20 }} animate={{ y: 0 }}>
          EMI Calculator
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Loan Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Loan Amount: ₹{loanAmount.toLocaleString()}</Label>
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  min={100000}
                  max={10000000}
                  step={10000}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label>Interest Rate: {interestRate}%</Label>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  min={5}
                  max={20}
                  step={0.1}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label>Tenure (months): {tenure}</Label>
                <Slider
                  value={[tenure]}
                  onValueChange={(value) => setTenure(value[0])}
                  min={6}
                  max={360}
                  step={6}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>EMI Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Monthly EMI</TableCell>
                    <TableCell className="text-right">₹{emi.toLocaleString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total Interest</TableCell>
                    <TableCell className="text-right">₹{totalInterest.toLocaleString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total Amount</TableCell>
                    <TableCell className="text-right">₹{totalAmount.toLocaleString()}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}

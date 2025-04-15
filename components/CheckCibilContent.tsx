"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleCheck, CircleX, Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Please enter a valid date in YYYY-MM-DD format." }),
  pan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, { message: "Please enter a valid PAN number." }),
  mobile: z.string().regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit mobile number." }),
})

export function CheckCibilContent() {
  const [score, setScore] = useState<number | null>(null)
  const [offers, setOffers] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dob: "",
      pan: "",
      mobile: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const simulatedScore = Math.floor(Math.random() * (900 - 300 + 1)) + 300
    setScore(simulatedScore)

    const simulatedOffers = [
      { bank: "ABC Bank", amount: 500000, interest: 8.5 },
      { bank: "XYZ Bank", amount: 750000, interest: 9.0 },
      { bank: "PQR Bank", amount: 1000000, interest: 9.5 },
    ]
    setOffers(simulatedOffers)
    setLoading(false)
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="max-w-4xl mx-auto" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Check Your CIBIL Score
          </motion.h1>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Get your credit score instantly and explore personalized loan offers
          </motion.p>
        </div>

        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PAN Number</FormLabel>
                      <FormControl>
                        <Input placeholder="ABCDE1234F" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input placeholder="9876543210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking Score...
                  </>
                ) : (
                  "Check CIBIL Score"
                )}
              </Button>
            </form>
          </Form>
        </motion.div>

        {score !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Your CIBIL Score</CardTitle>
                <CardDescription>Based on the information provided</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white text-4xl font-bold">
                    {score}
                  </div>
                </motion.div>
                <div className="mt-4">
                  {score >= 750 ? (
                    <div className="flex items-center justify-center text-green-500">
                      <CircleCheck className="w-6 h-6 mr-2" />
                      Excellent Credit Score
                    </div>
                  ) : score >= 650 ? (
                    <div className="flex items-center justify-center text-yellow-500">
                      <CircleCheck className="w-6 h-6 mr-2" />
                      Good Credit Score
                    </div>
                  ) : (
                    <div className="flex items-center justify-center text-red-500">
                      <CircleX className="w-6 h-6 mr-2" />
                      Needs Improvement
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {offers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Recommended Loan Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {offers.map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{offer.bank}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold mb-2">₹{offer.amount.toLocaleString()}</p>
                      <p className="text-gray-600">Interest Rate: {offer.interest}%</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Apply Now</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

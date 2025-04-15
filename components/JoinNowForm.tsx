"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { db } from "@/lib/db-schema"
import { Loader2, Upload } from "lucide-react"
import { formInputStyles, formButtonStyles } from "@/components/ui/form-styles"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: "Please enter a valid phone number." }),
  position: z.string().min(1, { message: "Position is required." }),
  experience: z
    .string()
    .transform(Number)
    .pipe(z.number().min(0, { message: "Experience cannot be negative." })),
  currentCompany: z.string(),
  expectedSalary: z
    .string()
    .transform(Number)
    .pipe(z.number().min(0, { message: "Expected salary cannot be negative." })),
  resume: z.string().url({ message: "Please enter a valid URL to your resume." }),
})

export function JoinNowForm() {
  const [open, setOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const linkProps = isDesktop ? { target: "_blank", rel: "noopener noreferrer" } : {}

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      currentCompany: "",
      expectedSalary: "",
      resume: "",
    },
  })

  const isSubmitting = form.formState.isSubmitting

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await db.createJoinApplication(values)
      toast({
        title: "Application submitted",
        description: "We will contact you shortly.",
      })
      setOpen(false)
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" {...linkProps}>
          Join Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <DialogHeader className="bg-primary text-white p-6 rounded-t-lg">
          <DialogTitle className="text-2xl font-bold">Job Application</DialogTitle>
          <DialogDescription className="text-primary-foreground/90 mt-2">
            Fill out the form below to apply for a position. We will contact you shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          className={formInputStyles({
                            state: form.formState.errors.name ? "error" : "default",
                          })}
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          type="email"
                          className={formInputStyles({
                            state: form.formState.errors.email ? "error" : "default",
                          })}
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Phone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="9876543210"
                          className={formInputStyles({
                            state: form.formState.errors.phone ? "error" : "default",
                          })}
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Position</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Desired position"
                          className={formInputStyles({
                            state: form.formState.errors.position ? "error" : "default",
                          })}
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Years of Experience</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="5"
                          type="number"
                          className={formInputStyles({
                            state: form.formState.errors.experience ? "error" : "default",
                          })}
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="currentCompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Current Company</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Current company"
                          className={formInputStyles({
                            state: form.formState.errors.currentCompany ? "error" : "default",
                          })}
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="expectedSalary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Expected Salary (₹)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="500000"
                          type="number"
                          className={formInputStyles({
                            state: form.formState.errors.expectedSalary ? "error" : "default",
                          })}
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Resume Link</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Link to your resume"
                            className={formInputStyles({
                              state: form.formState.errors.resume ? "error" : "default",
                            })}
                            {...field}
                            disabled={isSubmitting}
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <Upload size={16} />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-sm text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className={formButtonStyles({ fullWidth: true })} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-2">
                By submitting this application, you agree to our terms and privacy policy.
              </p>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

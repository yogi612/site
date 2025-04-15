import { supabase } from "@/lib/supabase"
import type { LoanApplication, PartnerApplication, JoinApplication } from "@/lib/db-schema"

// Loan application
export async function submitLoanApplication(data: Omit<LoanApplication, "id" | "createdAt">) {
  try {
    const { data: result, error } = await supabase
      .from("loan_applications")
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          loanType: data.loanType,
          amount: data.amount,
          purpose: data.purpose,
          employmentType: data.employmentType,
          monthlyIncome: data.monthlyIncome,
        },
      ])
      .select()
      .single()

    if (error) throw error

    return { success: true, data: result }
  } catch (error) {
    console.error("Error submitting loan application:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit loan application",
    }
  }
}

// Partner application
export async function submitPartnerApplication(data: Omit<PartnerApplication, "id" | "createdAt">) {
  try {
    const { data: result, error } = await supabase
      .from("partner_applications")
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          experience: data.experience,
          location: data.location,
          businessType: data.businessType,
          expectedBusiness: data.expectedBusiness,
        },
      ])
      .select()
      .single()

    if (error) throw error

    return { success: true, data: result }
  } catch (error) {
    console.error("Error submitting partner application:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit partner application",
    }
  }
}

// Job application
export async function submitJobApplication(data: Omit<JoinApplication, "id" | "createdAt">) {
  try {
    const { data: result, error } = await supabase
      .from("job_applications")
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          position: data.position,
          experience: data.experience,
          currentCompany: data.currentCompany,
          expectedSalary: data.expectedSalary,
          resume: data.resume,
        },
      ])
      .select()
      .single()

    if (error) throw error

    return { success: true, data: result }
  } catch (error) {
    console.error("Error submitting job application:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit job application",
    }
  }
}

// Get products
export async function getProducts() {
  try {
    const { data, error } = await supabase.from("products").select("*").order("id")

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    console.error("Error fetching products:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch products",
    }
  }
}

// Get product by slug
export async function getProductBySlug(slug: string) {
  try {
    const { data, error } = await supabase.from("products").select("*").eq("slug", slug).single()

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error)
    return {
      success: false,
      error: error instanceof Error ? error.message : `Failed to fetch product with slug ${slug}`,
    }
  }
}

// Get news articles
export async function getNewsArticles() {
  try {
    const { data, error } = await supabase.from("news").select("*").order("created_at", { ascending: false })

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    console.error("Error fetching news articles:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch news articles",
    }
  }
}

// Get news article by slug
export async function getNewsArticleBySlug(slug: string) {
  try {
    const { data, error } = await supabase.from("news").select("*").eq("slug", slug).single()

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    console.error(`Error fetching news article with slug ${slug}:`, error)
    return {
      success: false,
      error: error instanceof Error ? error.message : `Failed to fetch news article with slug ${slug}`,
    }
  }
}

// Get testimonials
export async function getTestimonials() {
  try {
    const { data, error } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false })

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch testimonials",
    }
  }
}

// Submit testimonial
export async function submitTestimonial(testimonial: {
  name: string
  email: string
  rating: number
  comment: string
}) {
  try {
    const { data, error } = await supabase.from("testimonials").insert([testimonial]).select().single()

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    console.error("Error submitting testimonial:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit testimonial",
    }
  }
}

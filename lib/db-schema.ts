export type LoanApplication = {
  id: string
  name: string
  email: string
  phone: string
  loanType: string
  amount: number
  purpose: string
  employmentType: string
  monthlyIncome: number
  createdAt: Date
}

export type PartnerApplication = {
  id: string
  name: string
  email: string
  phone: string
  company: string
  experience: number
  location: string
  businessType: string
  expectedBusiness: number
  createdAt: Date
}

export type JoinApplication = {
  id: string
  name: string
  email: string
  phone: string
  position: string
  experience: number
  currentCompany: string
  expectedSalary: number
  resume: string
  createdAt: Date
}

// Dummy database functions (replace with actual database integration)
export const db = {
  async createLoanApplication(data: Omit<LoanApplication, "id" | "createdAt">) {
    // Simulate database insert
    console.log("Creating loan application:", data)
    return {
      id: Math.random().toString(36).substring(7),
      createdAt: new Date(),
      ...data,
    }
  },

  async createPartnerApplication(data: Omit<PartnerApplication, "id" | "createdAt">) {
    // Simulate database insert
    console.log("Creating partner application:", data)
    return {
      id: Math.random().toString(36).substring(7),
      createdAt: new Date(),
      ...data,
    }
  },

  async createJoinApplication(data: Omit<JoinApplication, "id" | "createdAt">) {
    // Simulate database insert
    console.log("Creating join application:", data)
    return {
      id: Math.random().toString(36).substring(7),
      createdAt: new Date(),
      ...data,
    }
  },
}

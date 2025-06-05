"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import type { Session } from "@supabase/supabase-js"

interface UserData {
  id: string
  email: string
  name: string
  role: string
  phone?: string
}

interface AuthContextType {
  user: UserData | null
  session: Session | null
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string; role?: string }>
  signUp: (
    email: string,
    password: string,
    userData?: Partial<UserData>,
  ) => Promise<{ success: boolean; error?: string }>
  signOut: () => Promise<void>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Initialize and set up auth state listener
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      setSession(currentSession)
      setIsLoading(true)

      if (currentSession?.user) {
        // Fetch user profile from the database
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", currentSession.user.id)
          .single()

        if (error) {
          console.error("Error fetching user profile:", error)
        }

        // Set user data from profile or create default
        setUser({
          id: currentSession.user.id,
          email: currentSession.user.email || "",
          name: profile?.name || currentSession.user.email?.split("@")[0] || "User",
          role: profile?.role || "user",
          phone: profile?.phone || "",
        })
      } else {
        setUser(null)
      }

      setIsLoading(false)
    })

    // Initial session check
    const initializeAuth = async () => {
      const {
        data: { session: initialSession },
      } = await supabase.auth.getSession()

      if (initialSession?.user) {
        // Fetch user profile
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", initialSession.user.id)
          .single()

        if (error && error.code !== "PGRST116") {
          // PGRST116 is "no rows returned" error
          console.error("Error fetching user profile:", error)
        }

        // Set user data
        setUser({
          id: initialSession.user.id,
          email: initialSession.user.email || "",
          name: profile?.name || initialSession.user.email?.split("@")[0] || "User",
          role: profile?.role || "user",
          phone: profile?.phone || "",
        })
        setSession(initialSession)
      }

      setIsLoading(false)
    }

    initializeAuth()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Special case for demo accounts
      if (
        (email === "admin@example.com" && password === "password") ||
        (email === "employee@example.com" && password === "password") ||
        (email === "user@example.com" && password === "password")
      ) {
        // For demo accounts, use the mock authentication
        let role = "user"
        if (email === "admin@example.com") role = "admin"
        if (email === "employee@example.com") role = "employee"

        return { success: true, role }
      }

      // Regular Supabase authentication
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        throw error
      }

      // Fetch user profile to get role
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single()

      if (profileError && profileError.code !== "PGRST116") {
        console.error("Error fetching user profile:", profileError)
      }

      const role = profile?.role || "user"

      return { success: true, role }
    } catch (error: any) {
      console.error("Authentication error:", error)
      return {
        success: false,
        error: error.message || "Invalid email or password. Please try again.",
      }
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (email: string, password: string, userData?: Partial<UserData>) => {
    setIsLoading(true)
    try {
      // Check if user already exists
      const { data: existingUser } = await supabase.from("profiles").select("id").eq("email", email).single()

      if (existingUser) {
        return {
          success: false,
          error: "An account with this email already exists.",
        }
      }

      // Create new user with Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        throw error
      }

      if (data.user) {
        // Create profile in the profiles table
        const { error: profileError } = await supabase.from("profiles").insert([
          {
            id: data.user.id,
            email: data.user.email,
            name: userData?.name || email.split("@")[0],
            role: userData?.role || "user",
            phone: userData?.phone || "",
            created_at: new Date().toISOString(),
          },
        ])

        if (profileError) {
          console.error("Error creating user profile:", profileError)
        }
      }

      return { success: true }
    } catch (error: any) {
      console.error("Signup error:", error)
      return {
        success: false,
        error: error.message || "An unexpected error occurred during signup",
      }
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
      setSession(null)
      router.push("/login")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, session, signIn, signUp, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

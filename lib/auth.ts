import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Create a simple auth options configuration that doesn't depend on external services for now
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "YOUR_FALLBACK_SECRET_KEY_DO_NOT_USE_IN_PRODUCTION",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "hello@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // For development purposes, let's use a simple mock authentication
          // In production, you would validate against your database
          if (credentials.email === "admin@example.com" && credentials.password === "password") {
            return {
              id: "1",
              email: credentials.email,
              name: "Admin User",
              role: "admin",
            }
          }

          if (credentials.email === "user@example.com" && credentials.password === "password") {
            return {
              id: "2",
              email: credentials.email,
              name: "Regular User",
              role: "user",
            }
          }

          return null
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === "development",
}

// Add the missing signIn and signUp exports
export async function signIn(email: string, password: string) {
  try {
    // For development, we'll use the same mock authentication
    if (email === "admin@example.com" && password === "password") {
      return {
        success: true,
        data: {
          user: {
            id: "1",
            email,
            name: "Admin User",
            role: "admin",
          },
        },
      }
    }

    if (email === "user@example.com" && password === "password") {
      return {
        success: true,
        data: {
          user: {
            id: "2",
            email,
            name: "Regular User",
            role: "user",
          },
        },
      }
    }

    return {
      success: false,
      error: "Invalid credentials",
    }
  } catch (error) {
    console.error("Sign in error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to sign in",
    }
  }
}

export async function signUp(email: string, password: string, userData: any = {}) {
  try {
    // In a real implementation, you would create a user in your database
    return {
      success: true,
      user: {
        id: Math.random().toString(36).substring(2, 9),
        email,
        name: userData.name || email.split("@")[0],
        role: "user",
      },
    }
  } catch (error) {
    console.error("Sign up error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to sign up",
    }
  }
}

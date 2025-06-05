export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          phone: string | null
          role: "admin" | "user" | "employee"
          status: "active" | "inactive" | "suspended"
          last_login: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          phone?: string | null
          role?: "admin" | "user" | "employee"
          status?: "active" | "inactive" | "suspended"
          last_login?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          phone?: string | null
          role?: "admin" | "user" | "employee"
          status?: "active" | "inactive" | "suspended"
          last_login?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      leads: {
        Row: {
          id: number
          name: string
          email: string
          phone: string
          interested_in: string
          status: string
          notes: string | null
          assigned_to: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          name: string
          email: string
          phone: string
          interested_in: string
          status?: string
          notes?: string | null
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string
          email?: string
          phone?: string
          interested_in?: string
          status?: string
          notes?: string | null
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string | null
          featured_image: string | null
          author_id: string | null
          status: "draft" | "published" | "archived"
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          excerpt?: string | null
          featured_image?: string | null
          author_id?: string | null
          status?: "draft" | "published" | "archived"
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string | null
          featured_image?: string | null
          author_id?: string | null
          status?: "draft" | "published" | "archived"
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      customer_reviews: {
        Row: {
          id: string
          user_id: string | null
          name: string
          email: string
          rating: number
          review_text: string
          service_type: string | null
          approved: boolean
          approved_by: string | null
          approved_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          name: string
          email: string
          rating: number
          review_text: string
          service_type?: string | null
          approved?: boolean
          approved_by?: string | null
          approved_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          name?: string
          email?: string
          rating?: number
          review_text?: string
          service_type?: string | null
          approved?: boolean
          approved_by?: string | null
          approved_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          subject: string
          message: string
          status: "unread" | "read" | "replied" | "archived"
          handled_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          subject: string
          message: string
          status?: "unread" | "read" | "replied" | "archived"
          handled_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          subject?: string
          message?: string
          status?: "unread" | "read" | "replied" | "archived"
          handled_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      todos: {
        Row: {
          id: number
          title: string
          completed: boolean
          user_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          title: string
          completed?: boolean
          user_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          title?: string
          completed?: boolean
          user_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

export type Profile = Database["public"]["Tables"]["profiles"]["Row"]
export type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"]
export type CustomerReview = Database["public"]["Tables"]["customer_reviews"]["Row"]
export type ContactMessage = Database["public"]["Tables"]["contact_messages"]["Row"]
export type Lead = Database["public"]["Tables"]["leads"]["Row"]
export type Todo = Database["public"]["Tables"]["todos"]["Row"]

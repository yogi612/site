export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: number
          name: string
          email: string
          phone: string
          interested_in: string
          status: string
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
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

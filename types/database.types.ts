export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          type: 'drink' | 'flavor' | 'shisha'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          type: 'drink' | 'flavor' | 'shisha'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: 'drink' | 'flavor' | 'shisha'
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          price: number | null
          category_id: string
          type: 'drink' | 'flavor' | 'shisha'
          description: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          price?: number | null
          category_id: string
          type: 'drink' | 'flavor' | 'shisha'
          description?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          price?: number | null
          category_id?: string
          type?: 'drink' | 'flavor' | 'shisha'
          description?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
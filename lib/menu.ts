import { getSupabaseClient } from './supabase'
import type { Database } from '@/types/database.types'

type Category = Database['public']['Tables']['categories']['Row']
type Product = Database['public']['Tables']['products']['Row']

export interface MenuCategory {
  id: string
  name: string
  type: 'drink' | 'flavor' | 'shisha'
  items: MenuProduct[]
}

export interface MenuProduct {
  id: string
  name: string
  price?: number | null
  description?: string | null
}

export async function getDrinkMenu(): Promise<MenuCategory[]> {
  try {
    // カテゴリーと商品を一緒に取得
    const supabase = getSupabaseClient()
    const { data: categories, error: categoriesError } = await supabase
      .from('categories')
      .select('*')
      .eq('type', 'drink')

    if (categoriesError) throw categoriesError

    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('*')
      .eq('type', 'drink')
      .eq('is_active', true)

    if (productsError) throw productsError

    // カテゴリーごとに商品をグループ化
    const menuCategories: MenuCategory[] = (categories || []).map(category => ({
      id: category.id,
      name: category.name,
      type: category.type,
      items: (products || [])
        .filter(product => product.category_id === category.id)
        .map(product => ({
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description
        }))
    }))

    return menuCategories
  } catch (error) {
    console.error('Error fetching drink menu:', error)
    return []
  }
}

export async function getFlavorMenu(): Promise<MenuCategory[]> {
  try {
    // カテゴリーと商品を一緒に取得
    const supabase = getSupabaseClient()
    const { data: categories, error: categoriesError } = await supabase
      .from('categories')
      .select('*')
      .eq('type', 'flavor')

    if (categoriesError) throw categoriesError

    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('*')
      .eq('type', 'flavor')
      .eq('is_active', true)

    if (productsError) throw productsError

    // カテゴリーごとに商品をグループ化
    const menuCategories: MenuCategory[] = (categories || []).map(category => ({
      id: category.id,
      name: category.name,
      type: category.type,
      items: (products || [])
        .filter(product => product.category_id === category.id)
        .map(product => ({
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description
        }))
    }))

    return menuCategories
  } catch (error) {
    console.error('Error fetching flavor menu:', error)
    return []
  }
}

export async function getShishaMenu(): Promise<MenuProduct[]> {
  try {
    const supabase = getSupabaseClient()
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('type', 'shisha')
      .eq('is_active', true)

    if (error) throw error

    return (products || []).map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description
    }))
  } catch (error) {
    console.error('Error fetching shisha menu:', error)
    return []
  }
}

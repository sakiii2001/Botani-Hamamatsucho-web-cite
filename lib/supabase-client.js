import { createClient } from '@supabase/supabase-js'

// 環境変数からSupabase設定を取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase環境変数が設定されていません')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// メニューデータ取得用の関数
export async function fetchCategories() {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('type', { ascending: true })
      .order('name', { ascending: true })
    
    if (error) {
      console.error('Categories fetch error:', error)
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch (err) {
    console.error('Categories fetch exception:', err)
    return { data: null, error: err }
  }
}

export async function fetchProducts() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (
          id,
          name,
          type
        )
      `)
      .eq('is_active', true)
      .order('type', { ascending: true })
      .order('name', { ascending: true })
    
    if (error) {
      console.error('Products fetch error:', error)
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch (err) {
    console.error('Products fetch exception:', err)
    return { data: null, error: err }
  }
}

export async function fetchDrinkCategories() {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('type', 'drink')
      .order('name', { ascending: true })
    
    if (error) {
      console.error('Drink categories fetch error:', error)
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch (err) {
    console.error('Drink categories fetch exception:', err)
    return { data: null, error: err }
  }
}

export async function fetchFlavorCategories() {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('type', 'flavor')
      .order('name', { ascending: true })
    
    if (error) {
      console.error('Flavor categories fetch error:', error)
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch (err) {
    console.error('Flavor categories fetch exception:', err)
    return { data: null, error: err }
  }
}

export async function fetchProductsByCategory(categoryId) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category_id', categoryId)
      .eq('is_active', true)
      .order('name', { ascending: true })
    
    if (error) {
      console.error('Products by category fetch error:', error)
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch (err) {
    console.error('Products by category fetch exception:', err)
    return { data: null, error: err }
  }
}

export async function fetchDrinkProducts() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (
          id,
          name,
          type
        )
      `)
      .eq('type', 'drink')
      .eq('is_active', true)
      .order('name', { ascending: true })
    
    if (error) {
      console.error('Drink products fetch error:', error)
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch (err) {
    console.error('Drink products fetch exception:', err)
    return { data: null, error: err }
  }
}

export async function fetchFlavorProducts() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (
          id,
          name,
          type
        )
      `)
      .eq('type', 'flavor')
      .eq('is_active', true)
      .order('name', { ascending: true })
    
    if (error) {
      console.error('Flavor products fetch error:', error)
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch (err) {
    console.error('Flavor products fetch exception:', err)
    return { data: null, error: err }
  }
}
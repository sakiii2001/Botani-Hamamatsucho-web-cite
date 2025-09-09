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

// Fallback data used when Supabase is unreachable or no data is returned
const fallbackDrinkMenu: MenuCategory[] = [
  {
    id: 'drink-beer',
    name: 'ビール',
    type: 'drink',
    items: [
      { id: 'corona', name: 'コロナ', price: 800 },
      { id: 'heineken', name: 'ハイネケン', price: 800 }
    ]
  },
  {
    id: 'drink-highball',
    name: 'ハイボール',
    type: 'drink',
    items: [
      { id: 'highball', name: 'ハイボール', price: 700 },
      { id: 'kaku', name: 'サントリー角', price: 800 }
    ]
  },
  {
    id: 'drink-cocktail',
    name: 'カクテル',
    type: 'drink',
    items: [
      { id: 'gin-tonic', name: 'ジントニック', price: 800 },
      { id: 'moscow-mule', name: 'モスコミュール', price: 800 },
      { id: 'rum-coke', name: 'ラムコーク', price: 800 }
    ]
  },
  {
    id: 'drink-soft',
    name: 'ソフトドリンク',
    type: 'drink',
    items: [
      { id: 'coca-cola', name: 'コカコーラ', price: 700 },
      { id: 'sprite', name: 'スプライト', price: 700 },
      { id: 'oolong', name: 'ウーロン茶', price: 700 }
    ]
  }
]

const fallbackShishaMenu: MenuProduct[] = [
  // チャージ
  { id: 'charge-all', name: 'ALL TIME', price: 1000, description: 'チャージ' },
  { id: 'charge-bar', name: 'BAR USE', price: 1500, description: 'チャージ' },
  // シーシャ
  { id: 'shisha-one', name: 'シーシャ一台', price: 3000, description: 'シーシャ' },
  { id: 'share', name: 'シェア', price: 1500, description: 'シーシャ' },
  // オプション
  { id: 'ice-hose', name: 'アイスホース', price: 800, description: 'シーシャオプション' },
  { id: 'juice-bottle', name: 'ジュースボトル', price: 1000, description: 'シーシャオプション' },
  { id: 'alcohol-bottle', name: 'アルコールボトル', price: 3000, description: 'シーシャオプション' },
  { id: 'top-change', name: 'トップ替え', price: 2000, description: 'シーシャオプション' }
]

const fallbackFlavorMenu: MenuCategory[] = [
  {
    id: 'flavor-fruit',
    name: 'フルーツ',
    type: 'flavor',
    items: [
      { id: 'double-apple', name: 'ダブルアップル' },
      { id: 'peach', name: 'ピーチ' },
      { id: 'mango', name: 'マンゴー' },
      { id: 'grape', name: 'グレープ' },
      { id: 'watermelon', name: 'スイカ' }
    ]
  },
  {
    id: 'flavor-tea',
    name: 'ティー',
    type: 'flavor',
    items: [
      { id: 'earl-grey', name: 'アールグレイ' },
      { id: 'jasmine', name: 'ジャスミン' }
    ]
  },
  {
    id: 'flavor-others',
    name: 'スパイス・その他',
    type: 'flavor',
    items: [
      { id: 'mint', name: 'ミント' },
      { id: 'white-musk', name: 'ホワイトムスク' }
    ]
  }
]

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

    // Fallback if empty result
    if (!menuCategories || menuCategories.every(c => !c.items || c.items.length === 0)) {
      return fallbackDrinkMenu
    }
    return menuCategories
  } catch (error) {
    console.error('Error fetching drink menu:', error)
    return fallbackDrinkMenu
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

    if (!menuCategories || menuCategories.every(c => !c.items || c.items.length === 0)) {
      return fallbackFlavorMenu
    }
    return menuCategories
  } catch (error) {
    console.error('Error fetching flavor menu:', error)
    return fallbackFlavorMenu
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

    const mapped = (products || []).map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description
    }))
    if (!mapped || mapped.length === 0) {
      return fallbackShishaMenu
    }
    return mapped
  } catch (error) {
    console.error('Error fetching shisha menu:', error)
    return fallbackShishaMenu
  }
}

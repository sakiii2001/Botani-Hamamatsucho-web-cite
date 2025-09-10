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
    name: 'Beer',
    type: 'drink',
    items: [
      { id: 'beer-corona', name: 'コロナ', price: 800 },
      { id: 'beer-heineken', name: 'ハイネケン', price: 800 }
    ]
  },
  {
    id: 'drink-whiskey',
    name: 'Whiskey',
    type: 'drink',
    items: [
      { id: 'whisky-yamazaki', name: '山崎', price: 1500 },
      { id: 'whisky-hakushu', name: '白州', price: 1500 },
      { id: 'whisky-chita', name: '知多', price: 1300 },
      { id: 'whisky-chivas', name: 'シーバスリーガル', price: 1000 },
      { id: 'whisky-ballantine', name: 'バランタイン', price: 1000 },
      { id: 'whisky-suntory', name: 'サントリー角', price: 800 }
    ]
  },
  {
    id: 'drink-sour',
    name: 'Sour',
    type: 'drink',
    items: [
      { id: 'sour-lemon', name: 'レモンサワー', price: 800 },
      { id: 'sour-grapefruit', name: 'グレープフルーツサワー', price: 800 },
      { id: 'high-oolong', name: 'ウーロンハイ', price: 800 },
      { id: 'high-jasmine', name: 'ジャスミンハイ', price: 800 },
      { id: 'high-green', name: '緑茶ハイ', price: 800 }
    ]
  },
  {
    id: 'drink-cocktail',
    name: 'Cocktail',
    type: 'drink',
    items: [
      { id: 'cocktail-gin-tonic', name: 'ジントニック', price: 800 },
      { id: 'cocktail-gin-buck', name: 'ジンバック', price: 800 },
      { id: 'cocktail-gin-rickey', name: 'ジンリッキー', price: 800 },
      { id: 'cocktail-screwdriver', name: 'スクリュードライバー', price: 800 },
      { id: 'cocktail-bulldog', name: 'ブルドッグ', price: 800 },
      { id: 'cocktail-moscow', name: 'モスコミュール', price: 800 },
      { id: 'cocktail-redbull-vodka', name: 'レッドブルウォッカ', price: 800 },
      { id: 'cocktail-rum-coke', name: 'ラムコーク', price: 800 },
      { id: 'cocktail-rum-buck', name: 'ラムバック', price: 800 },
      { id: 'cocktail-cassis', name: 'カシス', price: 800 },
      { id: 'cocktail-cassis-orange', name: 'カシスオレンジ', price: 800 },
      { id: 'cocktail-cassis-soda', name: 'カシスソーダ', price: 800 },
      { id: 'cocktail-cassis-ginger', name: 'カシスジンジャー', price: 800 },
      { id: 'cocktail-fuzzy-navel', name: 'ファジーネーブル', price: 800 },
      { id: 'cocktail-reggae-punch', name: 'レゲエパンチ', price: 800 },
      { id: 'cocktail-peach-fizz', name: 'ピーチフィズ', price: 800 }
    ]
  },
  {
    id: 'drink-wine',
    name: 'Wine',
    type: 'drink',
    items: [
      { id: 'wine-red', name: '赤ワイン', price: 800 },
      { id: 'wine-white', name: '白ワイン', price: 800 },
    ]
  },
  {
    id: 'drink-champagne',
    name: 'Champagne',
    type: 'drink',
    items: [
      { id: 'champagne-dom-white', name: 'ドンペリニヨン（白）', price: 80000 },
      { id: 'champagne-veuve', name: 'ヴーヴ・クリコ', price: 30000 }
    ]
  },
  {
    id: 'drink-soft',
    name: 'Soft Drink',
    type: 'drink',
    items: [
      { id: 'soft-cocacola', name: 'コカコーラ', price: 700 },
      { id: 'soft-orange', name: 'オレンジジュース', price: 700 },
      { id: 'soft-grapefruit', name: 'グレープフルーツジュース', price: 700 },
      { id: 'soft-oolong', name: 'ウーロン茶', price: 700 },
      { id: 'soft-oolong2', name: '烏龍茶', price: 700 },
      { id: 'soft-jasmine', name: 'ジャスミン茶', price: 700 },
      { id: 'soft-green', name: '緑茶', price: 700 },
      { id: 'soft-ginger-ale', name: 'ジンジャエール', price: 700 },
      { id: 'soft-redbull', name: 'レッドブル', price: 700 },
      { id: 'soft-coffee', name: 'コーヒー', price: 700 }
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
    name: 'Fruit',
    type: 'flavor',
    items: [
      { id: 'flv-double-apple', name: 'ダブルアップル' },
      { id: 'flv-peach', name: 'ピーチ' },
      { id: 'flv-lime', name: 'ライム' },
      { id: 'flv-lemon', name: 'レモン' },
      { id: 'flv-orange', name: 'オレンジ' },
      { id: 'flv-grapefruit', name: 'グレープフルーツ' },
      { id: 'flv-mango', name: 'マンゴー' },
      { id: 'flv-pineapple', name: 'パイン' },
      { id: 'flv-cherry', name: 'チェリー' },
      { id: 'flv-raspberry', name: 'ラズベリー' },
      { id: 'flv-strawberry', name: 'ストロベリー' },
      { id: 'flv-blueberry', name: 'ブルーベリー' },
      { id: 'flv-pomegranate', name: 'ザクロ' },
      { id: 'flv-grape', name: 'グレープ' },
      { id: 'flv-watermelon', name: 'スイカ' },
      { id: 'flv-melon', name: 'メロン' },
      { id: 'flv-lychee', name: 'ライチ' },
      { id: 'flv-kiwi', name: 'キウイ' },
      { id: 'flv-banana', name: 'バナナ' },
      { id: 'flv-guava', name: 'グアバ' },
      { id: 'flv-passionfruit', name: 'パッションフルーツ' },
      { id: 'flv-pear', name: 'ペア' }
    ]
  },
  {
    id: 'flavor-tea',
    name: 'Tea',
    type: 'flavor',
    items: [
      { id: 'flv-earl-grey', name: 'アールグレイ' },
      { id: 'flv-bergamot', name: 'ベルガモットティー' },
      { id: 'flv-linden', name: 'リンデンティー' }
    ]
  },
  {
    id: 'flavor-sweet',
    name: 'Sweet',
    type: 'flavor',
    items: [
      { id: 'flv-vanilla', name: 'バニラ' },
      { id: 'flv-milk', name: 'ミルク' },
      { id: 'flv-honey', name: 'ハチミツ' },
      { id: 'flv-caramel', name: 'キャラメル' },
      { id: 'flv-cappuccino', name: 'カプチーノ' },
      { id: 'flv-yogurt', name: 'ヨーグルト' },
      { id: 'flv-coconut', name: 'ココナッツ' }
    ]
  },
  {
    id: 'flavor-spice',
    name: 'Spice & Others',
    type: 'flavor',
    items: [
      { id: 'flv-mint', name: 'ミント' },
      { id: 'flv-ice', name: 'アイス' },
      { id: 'flv-cardamom', name: 'カルダモン' },
      { id: 'flv-cinnamon', name: 'シナモン' },
      { id: 'flv-panlazna', name: 'パンラズナ' },
      { id: 'flv-white-musk', name: 'ホワイトムスク' },
      { id: 'flv-hinoki', name: 'ヒノキ' },
      { id: 'flv-spring-water', name: 'スプリングウォーター' },
      { id: 'flv-rose', name: 'ローズ' },
      { id: 'flv-jasmine', name: 'ジャスミン' },
      { id: 'flv-cola', name: 'コーラ' }
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

#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@supabase/supabase-js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function loadEnv(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const env = {}
  for (const line of content.split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)\s*=\s*"?([^"\n]*)"?$/)
    if (m) env[m[1]] = m[2]
  }
  return env
}

const envPath = path.resolve(__dirname, '..', '.env.local')
if (!fs.existsSync(envPath)) {
  console.error('Missing .env.local next to project root')
  process.exit(1)
}

const env = loadEnv(envPath)
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || env.SUPABASE_URL
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY || env.SUPABASE_ANON_KEY

if (!url || !anon) {
  console.error('Supabase URL or anon key not found in environment')
  process.exit(1)
}

const supabase = createClient(url, anon)

function safeSlice(arr, n = 10) {
  return Array.isArray(arr) ? arr.slice(0, n) : []
}

function summarizeProducts(rows) {
  const total = rows.length
  const byType = rows.reduce((acc, r) => {
    acc[r.type] = (acc[r.type] || 0) + 1
    return acc
  }, {})
  return { total, byType }
}

;(async () => {
  const { data: categories, error: catErr } = await supabase
    .from('categories')
    .select('*')
    .order('type', { ascending: true })
    .order('name', { ascending: true })

  if (catErr) {
    console.error('Categories error:', catErr.message)
  }

  const { data: products, error: prodErr } = await supabase
    .from('products')
    .select('*')
    .order('type', { ascending: true })
    .order('name', { ascending: true })

  if (prodErr) {
    console.error('Products error:', prodErr.message)
  }

  console.log('--- Supabase DB Summary ---')
  console.log('URL:', url)
  console.log('Categories count:', categories ? categories.length : 0)
  if (categories && categories.length) {
    const byType = categories.reduce((acc, c) => {
      acc[c.type] = (acc[c.type] || 0) + 1
      return acc
    }, {})
    console.log('Categories by type:', byType)
    console.log('Sample categories:', safeSlice(categories).map(c => ({ id: c.id, name: c.name, type: c.type })))
  }

  const prods = products || []
  const prodSummary = summarizeProducts(prods)
  console.log('Products count:', prodSummary.total)
  console.log('Products by type:', prodSummary.byType)
  console.log('Sample products:', safeSlice(prods).map(p => ({ id: p.id, name: p.name, price: p.price, type: p.type, category_id: p.category_id, is_active: p.is_active })))

  // Per-type samples for clarity
  for (const type of ['drink', 'flavor', 'shisha']) {
    const items = prods.filter(p => p.type === type)
    if (items.length) {
      console.log(`Sample ${type} products:`, safeSlice(items).map(p => ({ id: p.id, name: p.name, price: p.price, category_id: p.category_id })))
    }
  }
})().catch((e) => {
  console.error('Unexpected error:', e?.message || e)
  process.exit(1)
})


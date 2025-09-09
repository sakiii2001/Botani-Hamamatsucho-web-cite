"use client"

import { useState, useEffect } from 'react'
import { fetchCategories, fetchProducts, fetchDrinkProducts, fetchFlavorProducts } from '@/lib/supabase-client'

export default function TestDBPage() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [drinkProducts, setDrinkProducts] = useState([])
  const [flavorProducts, setFlavorProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      try {
        console.log('Fetching data from Supabase...')
        
        // カテゴリを取得
        const categoriesResult = await fetchCategories()
        if (categoriesResult.error) {
          console.error('Categories error:', categoriesResult.error)
          setError(`Categories: ${categoriesResult.error.message}`)
        } else {
          console.log('Categories:', categoriesResult.data)
          setCategories(categoriesResult.data || [])
        }

        // 全商品を取得
        const productsResult = await fetchProducts()
        if (productsResult.error) {
          console.error('Products error:', productsResult.error)
          setError(prev => prev ? `${prev}, Products: ${productsResult.error.message}` : `Products: ${productsResult.error.message}`)
        } else {
          console.log('Products:', productsResult.data)
          setProducts(productsResult.data || [])
        }

        // ドリンク商品を取得
        const drinkResult = await fetchDrinkProducts()
        if (drinkResult.error) {
          console.error('Drink products error:', drinkResult.error)
        } else {
          console.log('Drink products:', drinkResult.data)
          setDrinkProducts(drinkResult.data || [])
        }

        // フレーバー商品を取得
        const flavorResult = await fetchFlavorProducts()
        if (flavorResult.error) {
          console.error('Flavor products error:', flavorResult.error)
        } else {
          console.log('Flavor products:', flavorResult.data)
          setFlavorProducts(flavorResult.data || [])
        }

      } catch (err) {
        console.error('Load data error:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">データベーステスト</h1>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">データベーステスト結果</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <strong>エラー:</strong> {error}
        </div>
      )}

      {/* カテゴリ */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">カテゴリ ({categories.length}件)</h2>
        <div className="bg-gray-100 p-4 rounded">
          {categories.length > 0 ? (
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex justify-between">
                  <span><strong>{category.name}</strong></span>
                  <span className="text-gray-600">{category.type}</span>
                </div>
              ))}
            </div>
          ) : (
            <p>カテゴリが見つかりません</p>
          )}
        </div>
      </div>

      {/* 全商品 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">全商品 ({products.length}件)</h2>
        <div className="bg-gray-100 p-4 rounded max-h-96 overflow-y-auto">
          {products.length > 0 ? (
            <div className="space-y-2">
              {products.map((product) => (
                <div key={product.id} className="flex justify-between items-center border-b pb-1">
                  <div>
                    <span className="font-medium">{product.name}</span>
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.categories?.name} - {product.type})
                    </span>
                  </div>
                  <span className="text-gray-600">
                    {product.price ? `¥${product.price}` : '価格なし'}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p>商品が見つかりません</p>
          )}
        </div>
      </div>

      {/* ドリンク商品 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">ドリンク商品 ({drinkProducts.length}件)</h2>
        <div className="bg-blue-50 p-4 rounded">
          {drinkProducts.length > 0 ? (
            <div className="space-y-2">
              {drinkProducts.map((product) => (
                <div key={product.id} className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{product.name}</span>
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.categories?.name})
                    </span>
                  </div>
                  <span className="text-gray-600">
                    {product.price ? `¥${product.price}` : '価格なし'}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p>ドリンク商品が見つかりません</p>
          )}
        </div>
      </div>

      {/* フレーバー商品 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">フレーバー商品 ({flavorProducts.length}件)</h2>
        <div className="bg-green-50 p-4 rounded">
          {flavorProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {flavorProducts.map((product) => (
                <div key={product.id} className="text-sm">
                  <span className="font-medium">{product.name}</span>
                  <span className="text-gray-600 block text-xs">
                    ({product.categories?.name})
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p>フレーバー商品が見つかりません</p>
          )}
        </div>
      </div>
    </div>
  )
}
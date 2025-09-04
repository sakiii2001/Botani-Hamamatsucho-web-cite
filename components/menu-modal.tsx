"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"
import { getDrinkMenu, getFlavorMenu, getShishaMenu, type MenuCategory, type MenuProduct } from "@/lib/menu"

interface MenuModalProps {
  isOpen: boolean
  onClose: () => void
  type: "drinks" | "flavors"
}

export default function MenuModal({ isOpen, onClose, type }: MenuModalProps) {
  const [drinkMenu, setDrinkMenu] = useState<MenuCategory[]>([])
  const [flavorMenu, setFlavorMenu] = useState<MenuCategory[]>([])
  const [shishaMenu, setShishaMenu] = useState<MenuProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMenuData = async () => {
      if (!isOpen) return
      
      setLoading(true)
      setError(null)
      
      try {
        if (type === "drinks") {
          const [drinks, shisha] = await Promise.all([
            getDrinkMenu(),
            getShishaMenu()
          ])
          setDrinkMenu(drinks)
          setShishaMenu(shisha)
        } else {
          const flavors = await getFlavorMenu()
          setFlavorMenu(flavors)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '메뉴 데이터를 불러오는데 실패했습니다')
      } finally {
        setLoading(false)
      }
    }

    fetchMenuData()
  }, [isOpen, type])

  if (!isOpen) return null

  const formatPrice = (price: number | null | undefined) => {
    if (price === null || price === undefined) return null
    return `¥${price.toLocaleString()}`
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>
              {type === "drinks" ? "ドリンクメニュー" : "シーシャフレーバー"}
            </CardTitle>
            <CardDescription>
              {type === "drinks" ? "豊富なドリンクメニューをご用意しております" : "多彩なフレーバーからお選びください"}
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="ml-2">メニューを読み込み中...</span>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-700 text-sm">エラー: {error}</p>
            </div>
          )}
          
          {!loading && !error && type === "drinks" && (
            <>
              {drinkMenu.map((category) => (
                <div key={category.id}>
                  <h4 className="font-semibold mb-3 text-lg">{category.name}</h4>
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <div>
                          <span>{item.name}</span>
                          {item.description && (
                            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                          )}
                        </div>
                        <span className="text-muted-foreground font-medium">{formatPrice(item.price)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              {shishaMenu.length > 0 && (
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">シーシャ</h4>
                  <div className="space-y-2">
                    {shishaMenu.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">{item.name}</span>
                          {item.description && (
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          )}
                        </div>
                        <span className="font-bold">{formatPrice(item.price)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
          
          {!loading && !error && type === "flavors" && (
            <>
              {shishaMenu.length > 0 && (
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">シーシャ</h4>
                  <div className="space-y-2">
                    {shishaMenu.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">{item.name}</span>
                          {item.description && (
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          )}
                        </div>
                        <span className="font-bold">{formatPrice(item.price)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {flavorMenu.map((category) => (
                <div key={category.id}>
                  <h4 className="font-semibold mb-3 text-lg">{category.name}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.items.map((flavor) => (
                      <div key={flavor.id} className="py-2 px-3 bg-primary/10 border border-border rounded-md text-center text-foreground font-medium">
                        {flavor.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="bg-muted/20 border border-border p-4 rounded-lg">
                <p className="text-sm text-foreground/80">
                  ※ メニューに記載のないフレーバーも多数ご用意しております。<br/>
                  ※ ノンニコチン、ダークリーフフレーバーもお選びいただけます。<br/>
                  ※ お気軽にスタッフにお声がけください。
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"
import { getDrinkMenu, getFlavorMenu, getShishaMenu, type MenuCategory, type MenuProduct } from "@/lib/menu"
import { useLanguage } from "@/contexts/language-context"

interface MenuModalProps {
  isOpen: boolean
  onClose: () => void
  type: "drinks" | "flavors"
}

export default function MenuModal({ isOpen, onClose, type }: MenuModalProps) {
  const { t } = useLanguage()
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
          const drinks = await getDrinkMenu()
          setDrinkMenu(drinks)
        } else {
          const [flavors, shisha] = await Promise.all([
            getFlavorMenu(),
            getShishaMenu()
          ])
          setFlavorMenu(flavors)
          setShishaMenu(shisha)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : t.error)
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

  // カテゴリー名を翻訳する関数
  const getTranslatedCategoryName = (categoryName: string): string => {
    const categoryMap: { [key: string]: keyof typeof t } = {
      // Drink categories
      "Beer": "beerCategory",
      "Whiskey": "whiskeyCategory", 
      "Sour": "sourCategory",
      "Cocktail": "cocktailCategory",
      "Wine": "wineCategory",
      "Champagne": "champagneCategory",
      "Soft Drink": "softDrinkCategory",
      
      // Flavor categories
      "Fruit": "fruitCategory",
      "Tea": "teaCategory", 
      "Sweet": "sweetCategory",
      "Spice & Others": "spiceCategory",
      
      // Legacy Japanese names for backward compatibility
      "ビール": "beerCategory",
      "ウイスキー": "whiskeyCategory",
      "サワー": "sourCategory", 
      "カクテル": "cocktailCategory",
      "ワイン": "wineCategory",
      "シャンパン": "champagneCategory",
      "ソフトドリンク": "softDrinkCategory",
      "フルーツ": "fruitCategory",
      "ティー": "teaCategory",
      "スイート": "sweetCategory",
      "スパイス・その他": "spiceCategory"
    }
    
    const key = categoryMap[categoryName]
    if (key && t[key]) {
      return t[key] as string
    }
    return categoryName // 翻訳がない場合は元の名前を返す
  }

  // 日本語の項目名を翻訳されたテキストに変換する関数
  const getTranslatedItemName = (itemName: string): string => {
    const nameMap: { [key: string]: keyof typeof t } = {
      // システム項目
      "シーシャ一台": "shishaOne",
      "シェア": "share",
      "アイスホース": "iceHose", 
      "ジュースボトル": "juiceBottle",
      "アルコールボトル": "alcoholBottle",
      "トップ替え": "topChange",
      
      // フルーツフレーバー
      "ダブルアップル": "doubleApple",
      "ピーチ": "peach",
      "ライム": "lime",
      "レモン": "lemon",
      "オレンジ": "orange",
      "グレープフルーツ": "grapefruit",
      "マンゴー": "mango",
      "パイン": "pineapple",
      "チェリー": "cherry",
      "ラズベリー": "raspberry",
      "ストロベリー": "strawberry",
      "ブルーベリー": "blueberry",
      "ザクロ": "pomegranate",
      "グレープ": "grape",
      "スイカ": "watermelon",
      "メロン": "melon",
      "ライチ": "lychee",
      "キウイ": "kiwi",
      "バナナ": "banana",
      "グアバ": "guava",
      "パッションフルーツ": "passionfruit",
      
      // Additional Fruit Flavors  
      "ペア": "pear",
      
      // Tea Flavors
      "アールグレイ": "earlGrey",
      "ベルガモットティー": "bergamotTea",
      "リンデンティー": "lindenTea",
      
      // Sweet Flavors
      "バニラ": "vanilla",
      "ミルク": "milk",
      "ハチミツ": "honey",
      "キャラメル": "caramel",
      "カプチーノ": "cappuccino", 
      "ヨーグルト": "yogurt",
      "ココナッツ": "coconut",
      
      // Spice & Others
      "ミント": "mint",
      "アイス": "ice",
      "カルダモン": "cardamom",
      "シナモン": "cinnamon",
      "パンラズナ": "panlazna",
      "ホワイトムスク": "whiteMusk",
      "ヒノキ": "hinoki",
      "スプリングウォーター": "springWater",
      "ローズ": "rose",
      "ジャスミン": "jasmine",
      "コーラ": "cola",
      
      // Drink Menu Items - Beer
      "コロナ": "corona",
      "ハイネケン": "heineken",
      
      // Drink Menu Items - Whiskey
      "山崎": "yamazaki",
      "白州": "hakushu", 
      "知多": "chita",
      "シーバスリーガル": "chivasRegal",
      "バランタイン": "ballantine",
      "サントリー角": "suntory",
      
      // Drink Menu Items - Sour
      "レモンサワー": "lemonSour",
      "グレープフルーツサワー": "grapefruitSour",
      
      // Drink Menu Items - Cocktail
      "ジントニック": "ginTonic",
      "モスコミュール": "moscowMule",
      
      // Drink Menu Items - Wine
      "赤ワイン": "redWine",
      "白ワイン": "whiteWine",
      
      // Drink Menu Items - Champagne
      
      // Drink Menu Items - Soft Drinks
      "コカコーラ": "cocaCola",
      "オレンジジュース": "orangeJuice",
      "グレープフルーツジュース": "grapefruitJuice",
      "ウーロン茶": "oolongTea",
      "コーヒー": "coffee",
      
      // Additional Cocktail Items
      "ジンバック": "ginBuck",
      "ジンリッキー": "ginRickey", 
      "スクリュードライバー": "screwdriver",
      "ブルドック": "bulldog",
      "レッドブルウォッカ": "redBullVodka",
      "ラムコーク": "rumCoke",
      "ラムバック": "rumBuck",
      "カシス": "cassis",
      "カシスオレンジ": "cassisOrange",
      "カシスソーダ": "cassisSoda", 
      "カシスジンジャー": "cassisGinger",
      "ファジーネーブル": "fuzzyNavel",
      "レゲエパンチ": "reggaePunch",
      "ピーチフィズ": "peachFizz",
      
      // Additional Champagne Items
      "ヴーヴ・クリコ": "veuvClicquot",
      "ドンペリニヨン（白）": "domPerignonWhite",
      
      // Additional Soft Drink Items
      "ジンジャエール": "gingerAle",
      "レッドブル": "redBull",
      "烏龍茶": "oolongTea2",
      "ジャスミン茶": "jasmineTeaDrink",
      "緑茶": "greenTea",
      
      // Missing drink items
      "ウーロンハイ": "oolongHigh",
      "ジャスミンハイ": "jasmineHigh", 
      "緑茶ハイ": "greenTeaHigh",
      "コカ・コーラ": "cocaCola"
    }
    
    const key = nameMap[itemName]
    if (key && t[key]) {
      return t[key] as string
    }
    return itemName // 翻訳がない場合は元の名前を返す
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>
              {type === "drinks" ? t.drinkMenu : t.shishaFlavors}
            </CardTitle>
            <CardDescription>
              {type === "drinks" ? t.drinkMenuDescription : t.shishaFlavorsDescription}
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
              <span className="ml-2">{t.loading}</span>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-700 text-sm">{t.error}: {error}</p>
            </div>
          )}
          
          {!loading && !error && type === "drinks" && (
            <>
              {drinkMenu.map((category) => (
                <div key={category.id}>
                  <h4 className="font-semibold mb-3 text-lg">{getTranslatedCategoryName(category.name)}</h4>
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <div>
                          <span>{getTranslatedItemName(item.name)}</span>
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
            </>
          )}
          
          {!loading && !error && type === "flavors" && (
            <>
              {shishaMenu.length > 0 && (
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-4 text-xl">{t.systemTitle}</h4>
                  
                  {/* システム料金をカテゴリー別に表示 */}
                  {[t.chargeTitle, t.shishaTitle, t.shishaOptions].map((categoryName, index) => {
                    const originalNames = ['チャージ', 'シーシャ', 'シーシャオプション']
                    const originalCategoryName = originalNames[index]
                    const categoryItems = shishaMenu.filter(item => 
                      item.description === originalCategoryName || 
                      (originalCategoryName === 'チャージ' && (item.name === 'ALL TIME' || item.name === 'BAR USE')) ||
                      (originalCategoryName === 'シーシャ' && (item.name === 'シーシャ一台' || item.name === 'シェア')) ||
                      (originalCategoryName === 'シーシャオプション' && ['アイスホース', 'ジュースボトル', 'アルコールボトル', 'トップ替え'].includes(item.name))
                    )
                    
                    if (categoryItems.length === 0) return null
                    
                    return (
                      <div key={originalCategoryName} className="mb-4">
                        <h5 className="font-semibold mb-2">{categoryName}</h5>
                        <div className="space-y-1">
                          {categoryItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center text-sm">
                              <span>{getTranslatedItemName(item.name)}</span>
                              <span className="font-medium">{formatPrice(item.price)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
              
              <div>
                <h4 className="font-semibold mb-4 text-xl">{t.shishaFlavors}</h4>
                {flavorMenu.map((category) => (
                  <div key={category.id} className="mb-6">
                    <h5 className="font-semibold mb-3 text-lg">{getTranslatedCategoryName(category.name)}</h5>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {category.items.map((flavor) => (
                        <div key={flavor.id} className="py-2 px-3 bg-primary/10 border border-border rounded-md text-center text-foreground font-medium text-sm">
                          {getTranslatedItemName(flavor.name)}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-muted/20 border border-border p-4 rounded-lg">
                <p className="text-sm text-foreground/80">
                  {t.flavorNote}
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
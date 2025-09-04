"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Instagram, Wifi, Coffee, Users, MessageCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ReservationForm from "@/components/reservation-form"
import MenuModal from "@/components/menu-modal"

export default function HomePage() {
  const [menuModal, setMenuModal] = useState<{ isOpen: boolean; type: "drinks" | "flavors" | null }>({
    isOpen: false,
    type: null,
  })

  const openMenuModal = (type: "drinks" | "flavors") => {
    setMenuModal({ isOpen: true, type })
  }

  const closeMenuModal = () => {
    setMenuModal({ isOpen: false, type: null })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-serif font-bold text-foreground tracking-wide">BOTANI</h1>
              <Badge variant="secondary">浜松町店</Badge>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#menu" className="text-muted-foreground hover:text-foreground transition-colors">
                メニュー
              </Link>
              <Link href="#reservation" className="text-muted-foreground hover:text-foreground transition-colors">
                予約
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                店舗情報
              </Link>
              <Button onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}>今すぐ予約</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/interior-1.png" alt="BOTANI浜松町店の店内" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center space-y-6 px-4">
          <h2 className="text-4xl md:text-6xl font-serif font-light text-white text-balance tracking-wider leading-tight">
            浜松町・大門エリアの
            <br />
            <span className="font-light tracking-[0.15em] italic">シーシャ＆カフェバー</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto text-pretty">
            飲み会やデート、友達との雑談、カフェ利用、お一人様でのコワーキング、様々なシーンにご利用可能です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}>
              今すぐ予約する
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              メニューを見る
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">店内の雰囲気</h3>
          <div className="max-w-2xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/interior-wide.png"
                alt="モダンな店内空間"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
            工業的なデザインと温かみのある照明が織りなす、洗練された空間。コンクリート壁と黒革のソファが作り出すモダンな雰囲気の中で、ゆったりとしたひとときをお過ごしください。
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">BOTANIの特徴</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Wifi className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Wi-Fi & 電源完備</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  コワーキングスペースとしても利用可能。高速Wi-Fiと電源をご用意しています。
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Coffee className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>多彩なフレーバー</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  メニューに載ってないフレーバーも多数あります。ノンニコチン、ダークリーフフレーバーの取り扱いもございます。
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>初心者歓迎</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>シーシャが初めての方も安心。スタッフが丁寧にご説明いたします。</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">メニュー</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/drink-menu-1.png" alt="ドリンクメニュー" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="w-6 h-6" />
                  ドリンクメニュー
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>アルコール各種</span>
                  <span className="text-muted-foreground">¥800〜</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>ソフトドリンク</span>
                  <span className="text-muted-foreground">¥700</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>シャンパン</span>
                  <span className="text-muted-foreground">¥30,000〜</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent" onClick={() => openMenuModal('drinks')}>
                  ドリンクメニューを見る
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/flavors-menu.png" alt="シーシャフレーバーメニュー" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  シーシャフレーバー
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>シーシャ</span>
                  <span className="text-muted-foreground">¥3,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>シェア</span>
                  <span className="text-muted-foreground">¥1,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>フルーツ・スパイス系など</span>
                  <span className="text-muted-foreground">多数ご用意</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent" onClick={() => openMenuModal('flavors')}>
                  フレーバーメニューを見る
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8 text-foreground">ご予約</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            下記フォームからご予約いただけます。お電話やInstagram DMでもご予約を承っております。
          </p>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6">
                <Phone className="w-8 h-8 mx-auto text-primary mb-4" />
                <h4 className="font-semibold mb-2">電話予約</h4>
                <p className="text-sm text-muted-foreground mb-4">お急ぎの場合はお電話で</p>
                <Button variant="outline" className="w-full bg-transparent" onClick={() => window.open('tel:+81-3-XXXX-XXXX')}>
                  電話をかける
                </Button>
              </Card>

              <Card className="p-6">
                <Instagram className="w-8 h-8 mx-auto text-primary mb-4" />
                <h4 className="font-semibold mb-2">Instagram DM</h4>
                <p className="text-sm text-muted-foreground mb-4">DMでもご予約可能</p>
                <Button variant="outline" className="w-full bg-transparent" onClick={() => window.open('https://instagram.com/shishabar_botani_hamamatsucho', '_blank')}>
                  DMを送る
                </Button>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">店舗情報</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold">シーシャ（水タバコ）とは</h4>
              <p className="text-muted-foreground leading-relaxed">
                別名"水タバコ"とも呼ばれる「シーシャ」。水タバコは中近東で発明され、その後インド北部や中国、東南アジアの一部に伝わりました。シーシャは皿の上で燃やしたタバコの煙を「水パイプ」という専用の器具でろ過し、香りを楽しむものです。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">住所</p>
                    <p className="text-muted-foreground">〒105-0013 東京都港区浜松町１丁目２４−５ロマネBLDG 3F</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=〒105-0013 東京都港区浜松町１丁目２４−５ロマネBLDG 3F",
                      "_blank",
                    )
                  }
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Googleマップで開く
                </Button>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>お電話でのご予約承ります</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="/images/shisha-setup.png" alt="シーシャの雰囲気" fill className="object-cover" />
              </div>
              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 mt-6">
                <h4 className="text-xl font-serif font-semibold mb-4">営業時間</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>13:00 - 24:00</p>
                  <p className="text-sm mt-4">※最終入店は23:00まで</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar text-sidebar-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-serif font-bold mb-4 tracking-wide">BOTANI 浜松町店</h4>
              <p className="text-sidebar-foreground/80 mb-4">浜松町・大門エリアのシーシャ＆カフェバー</p>
              <p className="text-sidebar-foreground/60 text-sm">
                〒105-0013 東京都港区浜松町１丁目２４−５ロマネBLDG 3F
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">メニュー</h5>
              <ul className="space-y-2 text-sidebar-foreground/80">
                <li>ドリンクメニュー</li>
                <li>シーシャフレーバー</li>
                <li>料金システム</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">SNS・予約</h5>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" onClick={() => window.open('https://instagram.com/shishabar_botani_hamamatsucho', '_blank')}>
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.open('https://line.me/R/ti/p/@botani', '_blank')}>
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.open('tel:+81-3-XXXX-XXXX')}>
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sidebar-foreground/60">
            <p>&copy; 2025 BOTANI 浜松町店. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <MenuModal 
        isOpen={menuModal.isOpen} 
        onClose={closeMenuModal} 
        type={menuModal.type || 'drinks'} 
      />
    </div>
  )
}

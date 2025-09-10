"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Instagram, Wifi, Coffee, Users, MessageCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import MenuModal from "@/components/menu-modal"
import LanguageSelector from "@/components/language-selector"
import ClientOnly from "@/components/client-only"
import { useLanguage } from "@/contexts/language-context"
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/constants"
import { getDrinkMenu, getShishaMenu } from "@/lib/menu"

export default function HomePage() {
  const { t } = useLanguage()
  const [menuModal, setMenuModal] = useState({
    isOpen: false,
    type: null,
  })

  // Dynamic preview prices from Supabase
  const [drinkPreview, setDrinkPreview] = useState({
    alcoholFrom: null,
    softFrom: null,
    champagneFrom: null,
  })
  const [systemPreview, setSystemPreview] = useState({
    allTime: null,
    barUse: null,
    shishaOne: null,
    share: null,
    iceHose: null,
  })

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const [drinkMenu, shishaMenu] = await Promise.all([
          getDrinkMenu(),
          getShishaMenu(),
        ])

        if (cancelled) return

        // Drinks: compute mins
        const allDrinkItems = drinkMenu.flatMap((c) => c.items || [])
        const categoryByName = (name) => drinkMenu.find((c) => c.name === name)

        // Support English or Japanese DB category names
        const softCat = categoryByName('ソフトドリンク') || categoryByName('Soft Drink')
        const champagneCat = categoryByName('シャンパン') || categoryByName('Champagne')

        const minPrice = (items) => {
          const prices = (items || []).map((i) => i.price).filter((p) => typeof p === 'number')
          return prices.length ? Math.min(...prices) : null
        }

        const excluded = new Set(['ソフトドリンク', 'シャンパン', 'Soft Drink', 'Champagne'])
        const alcoholFrom = minPrice(
          allDrinkItems.filter((i) => {
            const cat = drinkMenu.find((c) => c.items?.some((x) => x.id === i.id))
            return cat && !excluded.has(cat.name)
          })
        )
        const softFrom = softCat ? minPrice(softCat.items) : null
        const champagneFrom = champagneCat ? minPrice(champagneCat.items) : null

        setDrinkPreview({ alcoholFrom, softFrom, champagneFrom })

        // Shisha/System: pick by product name
        const findByName = (name) => shishaMenu.find((p) => p.name === name)
        setSystemPreview({
          allTime: findByName('ALL TIME')?.price ?? null,
          barUse: findByName('BAR USE')?.price ?? null,
          shishaOne: findByName('シーシャ一台')?.price ?? null,
          share: findByName('シェア')?.price ?? null,
          iceHose: findByName('アイスホース')?.price ?? null,
        })
      } catch (e) {
        // Silent: preview is optional; modal shows full data with errors handled
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  const formatPrice = (price) => {
    if (price === null || price === undefined) return null
    return `¥${Number(price).toLocaleString()}`
  }

  const openMenuModal = (type) => {
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
            <div className="flex items-center space-x-3">
              <Image
                src="/images/botani-logo.png"
                alt="BOTANI"
                width={280}
                height={80}
                className="h-8 sm:h-10 w-auto object-contain hover:opacity-90 transition-opacity dark:invert"
                priority
              />
              <Badge variant="secondary" className="hidden sm:block">{t.storeLocation}</Badge>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#menu" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.menu}
              </Link>
              <Link href="#reservation" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.reservation}
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.storeInfo}
              </Link>
              <ClientOnly>
                <LanguageSelector />
              </ClientOnly>
              <Button onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}>{t.reserveNow}</Button>
            </div>
            {/* Mobile language selector */}
            <div className="md:hidden">
              <ClientOnly>
                <LanguageSelector />
              </ClientOnly>
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
            {t.heroTitle}
            <br />
            <span className="font-light tracking-[0.15em] italic">{t.heroSubtitle}</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto text-pretty">
            {t.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.reserveNow}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.viewMenu}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">{t.storeAtmosphereTitle}</h3>
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
            {t.storeAtmosphereDescription}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">{t.featuresTitle}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Wifi className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>{t.wifiTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t.wifiDescription}
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Coffee className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>{t.flavorsTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t.flavorsDescription}
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>{t.beginnerTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.beginnerDescription}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">{t.menuTitle}</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="w-6 h-6" />
                  {t.drinkMenu}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Dynamic preview derived from Supabase */}
                {drinkPreview.alcoholFrom !== null && (
                  <div className="flex justify-between items-center">
                    <span>{t.alcoholVariety}</span>
                    <span className="text-muted-foreground">{formatPrice(drinkPreview.alcoholFrom)}〜</span>
                  </div>
                )}
                {drinkPreview.softFrom !== null && (
                  <div className="flex justify-between items-center">
                    <span>{t.softDrinks}</span>
                    <span className="text-muted-foreground">{formatPrice(drinkPreview.softFrom)}</span>
                  </div>
                )}
                {drinkPreview.champagneFrom !== null && (
                  <div className="flex justify-between items-center">
                    <span>{t.champagne}</span>
                    <span className="text-muted-foreground">{formatPrice(drinkPreview.champagneFrom)}〜</span>
                  </div>
                )}
                <Button variant="outline" className="w-full bg-transparent" onClick={() => openMenuModal('drinks')}>
                  {t.viewDrinkMenu}
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  {t.shishaFlavors}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Dynamic system preview from Supabase */}
                <div className="space-y-3">
                  {(systemPreview.allTime !== null || systemPreview.barUse !== null) && (
                    <div>
                      <h4 className="font-semibold mb-2">{t.chargeTitle}</h4>
                      {systemPreview.allTime !== null && (
                        <div className="flex justify-between items-center">
                          <span>{t.allTime}</span>
                          <span className="text-muted-foreground">{formatPrice(systemPreview.allTime)}</span>
                        </div>
                      )}
                      {systemPreview.barUse !== null && (
                        <div className="flex justify-between items-center">
                          <span>{t.barUse}</span>
                          <span className="text-muted-foreground">{formatPrice(systemPreview.barUse)}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {(systemPreview.shishaOne !== null || systemPreview.share !== null) && (
                    <div>
                      <h4 className="font-semibold mb-2">{t.shishaTitle}</h4>
                      {systemPreview.shishaOne !== null && (
                        <div className="flex justify-between items-center">
                          <span>{t.shishaOne}</span>
                          <span className="text-muted-foreground">{formatPrice(systemPreview.shishaOne)}</span>
                        </div>
                      )}
                      {systemPreview.share !== null && (
                        <div className="flex justify-between items-center">
                          <span>{t.share}</span>
                          <span className="text-muted-foreground">{formatPrice(systemPreview.share)}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {systemPreview.iceHose !== null && (
                    <div>
                      <h4 className="font-semibold mb-2">{t.shishaOptions}</h4>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between items-center">
                          <span>{t.iceHose}</span>
                          <span className="text-muted-foreground">{formatPrice(systemPreview.iceHose)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <Button variant="outline" className="w-full bg-transparent" onClick={() => openMenuModal('flavors')}>
                  {t.viewFlavorMenu}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8 text-foreground">{t.reservationTitle}</h3>
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            {t.reservationDescription}
          </p>
          <p className="text-foreground font-medium mb-8">{t.phoneReservations}</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <Phone className="w-12 h-12 mx-auto text-primary mb-4" />
              <h4 className="font-semibold mb-2 text-xl">{t.phoneReservation}</h4>
              <p className="text-muted-foreground mb-2">{t.phoneDescription}</p>
              <p className="text-xl font-semibold tracking-widest mb-4" aria-label={`電話番号 ${PHONE_DISPLAY}`}>
                {PHONE_DISPLAY}
              </p>
              <Button size="lg" className="w-full" asChild>
                <a href={`tel:${PHONE_E164}`}>{t.callNow}</a>
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <Instagram className="w-12 h-12 mx-auto text-primary mb-4" />
              <h4 className="font-semibold mb-2 text-xl">{t.instagramDM}</h4>
              <p className="text-muted-foreground mb-6">{t.instagramDescription}</p>
              <Button size="lg" className="w-full" onClick={() => window.open('https://instagram.com/shishabar_botani_hamamatsucho', '_blank')}>
                {t.sendDM}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* LINE Add Friend Section */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">{t.lineTitle}</h3>
            <p className="text-muted-foreground mb-8">
              {t.lineDescription}
            </p>
            <div className="bg-card rounded-lg p-6 mb-6">
              <p className="text-lg font-semibold mb-2">LINE ID</p>
              <p className="text-2xl font-mono text-primary mb-4">@950sfthr</p>
              <p className="text-sm text-muted-foreground">{t.lineIdLabel}</p>
            </div>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white border-0 px-8 py-3"
              onClick={() => window.open('https://line.me/R/ti/p/@950sfthr', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.lineAddButton}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">{t.storeInfoTitle}</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold">{t.aboutShisha}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {t.aboutShishaDescription}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{t.address}</p>
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
                  {t.openGoogleMaps}
                </Button>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a 
                    href={`tel:${PHONE_E164}`}
                    className="text-primary hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <h5 className="font-semibold mb-3">{t.paymentMethods}</h5>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>{t.cash}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>{t.payPay}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>{t.creditCard}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="/images/shisha-setup.png" alt="シーシャの雰囲気" fill className="object-cover" />
              </div>
              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 mt-6">
                <h4 className="text-xl font-serif font-semibold mb-4">{t.businessHours}</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>{t.businessHoursValue}</p>
                  <p className="text-sm mt-4">{t.businessHoursNote}</p>
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
              <div className="mb-4">
                <Image
                  src="/images/botani-logo.png"
                  alt="BOTANI"
                  width={240}
                  height={66}
                  className="h-8 w-auto object-contain mb-2 dark:invert"
                />
              </div>
              <p className="text-sidebar-foreground/80 mb-4">{t.footerDescription}</p>
              <p className="text-sidebar-foreground/60 text-sm mb-2">
                〒105-0013 東京都港区浜松町１丁目２４−５ロマネBLDG 3F
              </p>
              <p className="text-sidebar-foreground/80">
                <Phone className="w-4 h-4 inline mr-2" />
                <a 
                  href={`tel:${PHONE_E164}`}
                  className="text-primary hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">{t.footerMenuTitle}</h5>
              <ul className="space-y-2 text-sidebar-foreground/80">
                <li>{t.footerDrinkMenu}</li>
                <li>{t.footerShishaFlavors}</li>
                <li>{t.footerPricingSystem}</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">{t.footerSNSTitle}</h5>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" onClick={() => window.open('https://instagram.com/shishabar_botani_hamamatsucho', '_blank')}>
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.open('https://line.me/R/ti/p/@950sfthr', '_blank')}>
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={`tel:${PHONE_E164}`}>
                    <Phone className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sidebar-foreground/60">
            <p dangerouslySetInnerHTML={{ __html: t.footerCopyright }} />
          </div>
        </div>
      </footer>
      
      <ClientOnly>
        <MenuModal 
          isOpen={menuModal.isOpen} 
          onClose={closeMenuModal} 
          type={menuModal.type || 'drinks'} 
        />
      </ClientOnly>
    </div>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "BOTANI 浜松町店 - シーシャ＆カフェバー",
  description:
    "浜松町・大門エリアのシーシャ＆カフェバー。飲み会やデート、友達との雑談、カフェ利用、お一人様でのコワーキング、様々なシーンにご利用可能です。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

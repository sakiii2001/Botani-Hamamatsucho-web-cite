"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "lucide-react"

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("予約データ:", formData)
    alert("予約を受け付けました。確認のご連絡をいたします。")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          オンライン予約
        </CardTitle>
        <CardDescription>必要事項をご入力ください</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">お名前 *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="山田太郎"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">ご希望日 *</Label>
              <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">ご希望時間 *</Label>
              <Input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">人数 *</Label>
            <Input
              id="guests"
              name="guests"
              type="number"
              min="1"
              max="20"
              value={formData.guests}
              onChange={handleChange}
              placeholder="2"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requests">その他ご希望事項</Label>
            <Textarea
              id="requests"
              name="requests"
              value={formData.requests}
              onChange={handleChange}
              placeholder="フレーバーのご希望、アレルギー等ございましたらお書きください"
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full">
            予約を送信する
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

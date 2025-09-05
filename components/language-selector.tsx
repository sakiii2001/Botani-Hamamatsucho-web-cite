'use client'

import { useLanguage } from '@/contexts/language-context'
import { Language } from '@/lib/translations'

const languageOptions: { code: Language; name: string; flag: string }[] = [
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
]

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="bg-transparent text-white border border-white/20 rounded px-2 py-1 text-sm focus:outline-none focus:border-white/40 appearance-none cursor-pointer"
      >
        {languageOptions.map((option) => (
          <option 
            key={option.code} 
            value={option.code}
            className="bg-black text-white"
          >
            {option.flag} {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
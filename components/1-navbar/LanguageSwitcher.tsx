'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'

const locales = [
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
]

export default function LanguageModal() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const [currentLang, setCurrentLang] = useState(locales[0]) // الافتراضية: العربية

    useEffect(() => {
        const currentCode = pathname.split('/')[1]
        const found = locales.find(locale => locale.code === currentCode)
        if (found) setCurrentLang(found)
    }, [pathname])

    const changeLanguage = (code: string) => {
        const segments = pathname.split('/')
        segments[1] = code
        router.push(segments.join('/'))
        setIsOpen(false)
    }

    return (

        <>
     <Image
            src="/images/flags/globe.svg"
            alt="IWJ DATES Logo"
            width={20}
            height={20}
            className="cursor-pointer"
        />

            <div className="relative group inline-block">

                <button
                    type="button"
                    className="flex items-center gap-1 px-2 py-1 rounded bg-transparent border-none cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <span className="text-[#A97C50] font-bold"> {currentLang.label}</span>
                    <svg width="12" height="12" fill="#A97C50" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5z" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute left-0 mt-6 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                        <ul className="py-2">
                            {locales.map((locale) => (
                                <li key={locale.code}>
                                    <button
                                        onClick={() => changeLanguage(locale.code)}
                                        className={`w-full text-right px-4 py-2 hover:bg-gray-100 ${currentLang.code === locale.code
                                            ? 'text-[#A97C50] font-bold bg-[#E5D6C5]'
                                            : 'text-gray-700'
                                            } ${locale.code === 'ar' ? 'rounded-t' : ''} ${locale.code === 'fr' ? 'rounded-b' : ''}`}
                                    >
                                        {locale.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>

    )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"
import { LanguageSwitcher } from "./language-switcher"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.aiGenerator"), href: "/ai-generator" },
    { name: t("navigation.marketplace"), href: "/marketplace" },
    { name: t("navigation.aniCharacter"), href: "/ani-character" },
    { name: t("navigation.token"), href: "/tokenomics" },
    { name: t("navigation.roadmap"), href: "/roadmap" },
    { name: t("navigation.about"), href: "/about" },
    { name: t("navigation.whitepaper"), href: "/whitepaper" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <div className="relative">
              <Image
                src="/logoh.png"
                alt="AniGROK Logo"
                width={120}
                height={40}
                className="h-8 lg:h-10 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  scrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-6 py-2 rounded-xl transition-all duration-300"
            >
              {t("navigation.signIn")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 bg-white/95 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 px-4">
                <div className="flex items-center justify-center mb-2">
                  <LanguageSwitcher />
                </div>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 py-3 rounded-xl"
                >
                  {t("navigation.signIn")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

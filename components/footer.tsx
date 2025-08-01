"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"
import { MessageCircle, ExternalLink, Users } from "lucide-react"

export function Footer() {
  const { t } = useTranslation()

  const footerLinks = {
    platform: [
      { name: t("navigation.aiGenerator"), href: "/ai-generator" },
      { name: t("navigation.marketplace"), href: "/marketplace" },
      { name: t("navigation.aniCharacter"), href: "/ani-character" },
      { name: t("navigation.token"), href: "/tokenomics" },
    ],
    community: [
      { name: t("navigation.about"), href: "/about" },
      { name: t("navigation.roadmap"), href: "/roadmap" },
      { name: "GitHub", href: "https://github.com/afsdfdf/AniGROK" },
      { name: t("footer.social.telegram"), href: "https://t.me/Ani_bsc" },
    ],
    resources: [
      { name: t("navigation.whitepaper"), href: "/whitepaper" },
      { name: "API Docs", href: "/developer-docs" },
      { name: "Protocol", href: "/protocol" },
      { name: "DAO", href: "/dao" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Disclaimer", href: "/disclaimer" },
    ]
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AniGROK
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              {t("footer.description")}
            </p>

            {/* Telegram Community Highlight */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-500/30">
              <div className="flex items-center space-x-3 mb-2">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-blue-300">AniGROK全球社区</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{t("footer.social.telegramMembers")}</span>
                  </div>
                </div>
                <Link 
                  href="https://t.me/Ani_bsc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>{t("footer.social.telegram")}</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-purple-300">
              {t("footer.links.platform")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-purple-300">
              {t("footer.links.community")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    {link.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-purple-300">
              {t("footer.links.resources")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {t("footer.copyright")}
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="https://t.me/Ani_bsc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                title="Telegram Community"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link 
                href="https://github.com/afsdfdf/AniGROK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                title="GitHub Repository"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
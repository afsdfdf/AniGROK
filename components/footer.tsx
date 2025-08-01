"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { 
  Twitter, 
  MessageSquare, 
  Globe, 
  Sparkles,
  Heart,
  ExternalLink,
  MessageCircle
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function Footer() {
  const { t } = useTranslation()

  const currentYear = new Date().getFullYear()

  const footerSections = {
    platform: {
      title: t("footer.platform.title", "Platform"),
      links: [
        { label: t("footer.platform.aiGenerator", "AI Generator"), href: "/ai-generator" },
        { label: t("footer.platform.marketplace", "Marketplace"), href: "/marketplace" },
        { label: t("footer.platform.aniCharacter", "Ani Character"), href: "/ani-character" },
        { label: t("footer.platform.computing", "Computing"), href: "/computing" }
      ]
    },
    resources: {
      title: t("footer.resources.title", "Resources"),
      links: [
        { label: t("footer.resources.whitepaper", "Whitepaper"), href: "/whitepaper" },
        { label: t("footer.resources.roadmap", "Roadmap"), href: "/roadmap" },
        { label: t("footer.resources.tokenomics", "Tokenomics"), href: "/tokenomics" },
        { label: t("footer.resources.developers", "Developer Docs"), href: "/developer-docs" }
      ]
    },
    community: {
      title: t("footer.community.title", "Community"),
      links: [
        { label: t("footer.community.about", "About Us"), href: "/about" },
        { label: t("footer.community.team", "Team"), href: "/team" },
        { label: t("footer.community.dao", "DAO Governance"), href: "/dao" },
        { label: t("footer.community.blog", "Blog"), href: "/blog", external: true }
      ]
    },
    support: {
      title: t("footer.support.title", "Support"),
      links: [
        { label: t("footer.support.help", "Help Center"), href: "/help", external: true },
        { label: t("footer.support.contact", "Contact Us"), href: "/contact" },
        { label: t("footer.support.status", "Status"), href: "/status", external: true },
        { label: t("footer.support.security", "Security"), href: "/security" }
      ]
    }
  }

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/AniGROKOfficial",
      color: "hover:text-blue-400"
    },
    {
      name: "Telegram", 
      icon: MessageSquare,
      href: "https://t.me/Ani_bsc",
      color: "hover:text-blue-500"
    }
  ]

  const legalLinks = [
    { label: t("footer.legal.privacy", "Privacy Policy"), href: "/privacy" },
    { label: t("footer.legal.terms", "Terms of Service"), href: "/terms" },
    { label: t("footer.legal.cookies", "Cookie Policy"), href: "/cookies" },
    { label: t("footer.legal.disclaimer", "Disclaimer"), href: "/disclaimer" }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="py-12 sm:py-16 border-b border-white/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-purple-200 font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>{t("footer.newsletter.badge", "Stay Updated")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t("footer.newsletter.title", "Join Our Community")}
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              {t("footer.newsletter.description", "Get the latest updates on AniGROK platform, new features, and exclusive anime NFT drops.")}
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input 
                type="email"
                placeholder={t("footer.newsletter.placeholder", "Enter your email")}
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 focus:bg-white/20"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 px-6">
                {t("footer.newsletter.subscribe", "Subscribe")}
              </Button>
            </div>
            <p className="text-sm text-purple-200 mt-2 text-center">
              {t("footer.newsletter.privacy", "We respect your privacy. Unsubscribe at any time.")}
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">AniGROK</h3>
              </div>
              <p className="text-purple-100 mb-6 leading-relaxed">
                {t("footer.brand.description", "The world's first AI-driven anime NFT platform. Create, share, and trade unique anime characters with the power of GROK AI and blockchain technology.")}
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Chat with Ani CTA */}
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 w-full sm:w-auto"
                onClick={() => window.location.href = '/ani-character'}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t("footer.brand.chatWithAni", "Chat with Ani")}
              </Button>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.values(footerSections).map((section, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          {link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-200 hover:text-white transition-colors duration-300 flex items-center gap-1 group"
                            >
                              <span>{link.label}</span>
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className="text-purple-200 hover:text-white transition-colors duration-300"
                            >
                              {link.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <Separator className="bg-white/10" />
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-purple-200">
              <span>© {currentYear} AniGROK.</span>
              <span>{t("footer.copyright", "All rights reserved.")}</span>
              <span className="flex items-center gap-1">
                {t("footer.madeWith", "Made with")} <Heart className="w-4 h-4 text-red-400" /> {t("footer.forAnime", "for anime lovers")}
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-purple-200">
              {t("footer.additionalInfo", "AniGROK is built on Binance Smart Chain. ANI tokens are utility tokens for platform governance and features.")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
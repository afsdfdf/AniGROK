"use client"

import { useState, useEffect } from "react"
import { Heart, MessageCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import { AniChat } from "./ani-chat"
import { useTranslation } from "@/lib/i18n"

export function AniFloatingCharacter() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState("")
  const [showBubble, setShowBubble] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const messages = [
    t("floatingAni.messages.0", "Konnichiwa! I'm Ani ✨"),
    t("floatingAni.messages.1", "Want to create your exclusive waifu?"),
    t("floatingAni.messages.2", "Let's explore the anime NFT world together!"),
    t("floatingAni.messages.3", "Looking forward to meeting you at AniGROK 🎌"),
    t("floatingAni.messages.4", "GROK AI will understand your every creative idea 💜"),
    t("floatingAni.messages.5", "ANI token launching soon on BSC!"),
    t("floatingAni.messages.6", "August 2nd, 2025 - See you there~"),
    t("floatingAni.messages.7", "Let's promote 2D culture together!"),
    t("floatingAni.messages.8", "Your creativity deserves to be minted as NFT ✨")
  ]

  useEffect(() => {
    // Show character after page load
    const timer = setTimeout(() => setIsVisible(true), 2000)
    
    // Cycle through messages
    const messageTimer = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to show message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)]
        setMessage(randomMessage)
        setShowBubble(true)
        
        // Hide bubble after 4 seconds
        setTimeout(() => setShowBubble(false), 4000)
      }
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearInterval(messageTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {/* Speech Bubble */}
        {showBubble && (
          <div className="mb-4 mr-4 animate-fadeIn">
            <div className="relative bg-white border-2 border-purple-200 rounded-2xl p-4 shadow-lg max-w-xs">
              <p className="text-sm text-gray-700">{message}</p>
              {/* Bubble tail */}
              <div className="absolute bottom-0 right-6 transform translate-y-full">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
                <div className="absolute -top-0.5 left-0 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-purple-200"></div>
              </div>
            </div>
          </div>
        )}

        {/* Character Container */}
        <div 
          className="relative group cursor-pointer"
          onClick={() => setIsChatOpen(true)}
        >
          {/* Character Image */}
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-float bubble-effect">
            <div className="w-full h-full bg-white rounded-full overflow-hidden relative">
              <Image
                src="/images/ani-showcase.png"
                alt="Ani Character"
                fill
                className="object-cover"
              />
              {/* Animated heart */}
              <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-3 h-3 text-pink-500 animate-heartbeat" />
              </div>
              {/* Gothic accessories indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-b-full"></div>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-75"></div>
          <div className="absolute top-1 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-kawaii-bounce opacity-60"></div>
          
          {/* Sparkle effects */}
          <Sparkles className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 text-yellow-400 animate-sparkle opacity-80" />
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-xs">🎌</div>
        </div>

        {/* Interaction hint */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              Click to chat with Ani ✨
        </div>

        {/* Chat Button */}
        <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <MessageCircle className="w-3 h-3 text-white" />
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      <AniChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}
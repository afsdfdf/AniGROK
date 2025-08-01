"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, MessageCircle, Crown, ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AniChat } from "@/components/ani-chat"

export default function AniCharacterPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 text-purple-600 hover:text-purple-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Meet Ani</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-medium mb-6 shadow-lg">
            <Crown className="w-4 h-4" />
            <span>Virtual Character</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ani
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AniGROK platform's virtual idol and digital companion, she will accompany you to explore the wonderful world of anime NFTs
          </p>
        </div>

        {/* Character Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Character Image */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-200 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="relative aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ani-showcase.png"
                    alt="Ani Character - Gothic Anime Style"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    Ani ✨
                  </div>
                </div>
                
                {/* Character Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/50 p-3 rounded-xl">
                    <div className="text-2xl">🎌</div>
                    <div className="text-sm font-medium text-gray-700">Gothic</div>
                  </div>
                  <div className="bg-white/50 p-3 rounded-xl">
                    <div className="text-2xl">💜</div>
                    <div className="text-sm font-medium text-gray-700">Kawaii</div>
                  </div>
                  <div className="bg-white/50 p-3 rounded-xl">
                    <div className="text-2xl">⚡</div>
                    <div className="text-sm font-medium text-gray-700">Cool</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Character Info */}
          <div className="space-y-6">
            <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  Character Design
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Appearance</h4>
                      <p className="text-gray-600">Playful twin tails, gothic style dress, stylish fishnet stockings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personality</h4>
                      <p className="text-gray-600">Both cute and cool, blending 2D aesthetics with futuristic technology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Special Abilities</h4>
                      <p className="text-gray-600">Deep understanding of user creativity, assisting in generating perfect anime NFTs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mission & Vision</h4>
                      <p className="text-gray-600">Becoming a bridge connecting reality and virtual worlds, promoting 2D culture</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                  Interactive Features
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "💬", title: "Smart Chat", desc: "Understand your creative needs" },
                    { icon: "🎨", title: "Art Guidance", desc: "Provide professional creative advice" },
                    { icon: "🎌", title: "Culture Mentor", desc: "Share 2D culture knowledge" },
                    { icon: "🤝", title: "Virtual Partner", desc: "Accompany your creative journey" }
                  ].map((feature, index) => (
                    <div key={index} className="text-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-600">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Character Evolution Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Ani's Evolution Journey</h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                phase: "Phase 1",
                title: "Birth",
                date: "2025 Q3",
                description: "Ani character design completed, first meeting with users",
                icon: "🌟"
              },
              {
                phase: "Phase 2", 
                title: "Learning",
                date: "2025 Q4",
                description: "Learning through user interaction, improving understanding",
                icon: "📚"
              },
              {
                phase: "Phase 3",
                title: "Evolution",
                date: "2026 Q1",
                description: "Gaining more virtual assistant features, deep personalization",
                icon: "🚀"
              },
              {
                phase: "Phase 4",
                title: "Metaverse",
                date: "2026 Q2+",
                description: "Enter the metaverse, become a true virtual idol",
                icon: "🌐"
              }
            ].map((phase, index) => (
              <Card key={index} className="text-center bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <div className="text-sm text-purple-600 font-medium mb-2">{phase.phase}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h4>
                  <div className="text-sm text-gray-500 mb-3">{phase.date}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Chat with Ani */}
        <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-200 rounded-3xl shadow-xl max-w-4xl mx-auto">
          <CardHeader className="p-8 text-center">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
              <MessageCircle className="w-6 h-6 text-purple-600" />
                                Chat with Ani
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="bg-white rounded-2xl p-6 space-y-4">
              {/* Chat Messages Preview */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    A
                  </div>
                  <div className="flex-1 bg-purple-50 p-3 rounded-lg">
                    <p className="text-gray-700">Hello! I'm Ani, your virtual waifu assistant! What kind of anime character would you like to create? ✨</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="flex-1 bg-blue-50 p-3 rounded-lg text-right max-w-xs">
                    <p className="text-gray-700">I want a gothic style wizard character</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    U
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    A
                  </div>
                  <div className="flex-1 bg-purple-50 p-3 rounded-lg">
                    <p className="text-gray-700">Awesome! Let's create a mysterious gothic wizard. What special magical abilities would you like them to have? 🔮</p>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="text-center mt-6">
                <Button 
                  onClick={() => setIsChatOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with Ani Now ✨
                </Button>
              </div>
              
              <div className="text-center text-sm text-purple-600 mt-4 font-medium">
                🤖 Powered by Gemini AI • Real-time intelligent conversation
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chat Modal */}
        <AniChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </main>
  )
}
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { AniChat } from "./ani-chat"
import { useTranslation } from "@/lib/i18n"

export function Hero() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState("/images/generated-sample-1.png")
  const [demoPrompt, setDemoPrompt] = useState("Gothic anime girl with twin tails, fishnet stockings, cute and cool")
  const [generationStep, setGenerationStep] = useState("")

  const slides = [
    t("hero.slides.0"),
    t("hero.slides.1"),
    t("hero.slides.2"),
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  // 移除自动生成功能 - 改为用户主动触发

  const demoPrompts = [
    "Gothic anime girl with twin tails, fishnet stockings, cute and cool",
    "Kawaii cat girl with purple hair, wearing maid outfit",
    "Cyberpunk anime warrior with neon armor and glowing eyes",
    "Elegant anime princess in traditional Japanese kimono"
  ]

  const startDemoGeneration = async () => {
    if (isGenerating) return
    
    // 随机选择一个提示词
    const randomPrompt = demoPrompts[Math.floor(Math.random() * demoPrompts.length)]
    setDemoPrompt(randomPrompt)
    setIsGenerating(true)
    
    const steps = [
      "Ani正在理解你的创意...",
      "分析动漫角色特征中...",
      "调整风格参数...",
      "生成anime元素...",
      "完成创作..."
    ]
    
    // 逐步显示生成过程
    for (let i = 0; i < steps.length; i++) {
      setGenerationStep(steps[i])
      await new Promise(resolve => setTimeout(resolve, 800))
    }
    
    try {
      // 调用真实的图片生成API
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `anime style, ${randomPrompt}, high quality, detailed, 2D art, manga style, colorful, cute`,
          model: 'Kwai-Kolors/Kolors',
          image_size: '1024x1024'
        }),
      })
      
      const data = await response.json()
      
      if (data.success && data.data.images && data.data.images.length > 0) {
        setGeneratedImage(data.data.images[0].url)
      } else {
        // 降级到演示图片
        const demoImages = ["/images/generated-sample-1.png", "/images/ani-showcase.png", "/images/gallery-sample-1.png", "/images/gallery-sample-3.png"]
        const randomImage = demoImages[Math.floor(Math.random() * demoImages.length)]
        setGeneratedImage(randomImage)
      }
    } catch (error) {
      console.error('Demo generation failed:', error)
      // 降级到演示图片
      const demoImages = ["/images/generated-sample-1.png", "/images/ani-showcase.png", "/images/gallery-sample-1.png", "/images/gallery-sample-3.png"]
      const randomImage = demoImages[Math.floor(Math.random() * demoImages.length)]
      setGeneratedImage(randomImage)
    }
    
    setGenerationStep("完成！专属waifu已诞生✨")
    setTimeout(() => {
      setIsGenerating(false)
      setGenerationStep("")
    }, 2000)
  }

  return (
    <>
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:40px_40px]" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl opacity-60 animate-float shadow-lg transform rotate-12" />
        <div
          className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl opacity-50 animate-float shadow-lg transform -rotate-12"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl opacity-40 animate-float shadow-lg transform rotate-45"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-medium shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>{t("hero.badge")}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                <span className="block">{t("hero.title")}</span>
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {t("hero.subtitle")}
                </span>
              </h1>

              {/* Dynamic Subtitle */}
              <div className="h-16 flex items-center">
                <p className="text-xl sm:text-2xl text-gray-600 font-medium transition-all duration-500">
                  {slides[currentSlide]}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                {t("hero.chatButton")}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-6 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/ai-generator'}
              >
                <Zap className="mr-2 h-5 w-5" />
                {t("hero.generateButton")}
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {[
                { icon: Users, label: t("hero.quickStats.community"), value: t("hero.quickStats.communityValue") },
                { icon: Zap, label: t("hero.quickStats.ai"), value: t("hero.quickStats.aiValue") },
                { icon: TrendingUp, label: t("hero.quickStats.future"), value: t("hero.quickStats.futureValue") },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              {/* Transparent Logo in top right */}
              <div className="absolute top-4 right-4 z-10">
                <Image
                  src="/logo1.png"
                  alt="AIMINT Transparent Logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 opacity-30 hover:opacity-50 transition-opacity duration-300"
                />
              </div>
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo1.png"
                    alt="AniGROK Studio Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">AniGROK Studio</span>
                    </div>
                    <div className="text-sm text-gray-500">Anime NFT Generator</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm"></div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="space-y-4">
                {/* Input Area */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-sm text-gray-600 mb-2">Enter Your Anime Prompt</div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-800 shadow-sm">
                    "{demoPrompt}"
                  </div>
                </div>

                {/* Processing */}
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className={`w-6 h-6 border-2 border-purple-600 ${isGenerating ? 'border-t-transparent animate-spin' : 'border-t-purple-600'} rounded-full`}></div>
                  <span className="text-purple-700 font-medium">
                    {isGenerating ? (generationStep || "GROK AI is creating your waifu...") : "点击下方按钮开始AI创作 ✨"}
                  </span>
                </div>

                {/* Result Preview */}
                <div className="relative h-48 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden border border-purple-200">
                  {isGenerating ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                        <p className="text-purple-700 text-sm font-medium">正在生成中...</p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={generatedImage}
                      alt="AI Generated Anime Character - AniGROK Style"
                      fill
                      className="object-contain rounded-xl transition-all duration-500"
                    />
                  )}
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Ani's Creation ✨
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    onClick={startDemoGeneration}
                    disabled={isGenerating}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isGenerating ? "AI创作中..." : "🎨 点击生成"}
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Mint NFT 🎌
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>

    {/* Chat Modal */}
    <AniChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}

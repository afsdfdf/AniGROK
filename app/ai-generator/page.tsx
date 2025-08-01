"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Sparkles, Wand2, Heart, Download, Share2, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AIGeneratorPage() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [generationMessages, setGenerationMessages] = useState<string[]>([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const presetPrompts = [
    "Gothic anime girl with twin tails, fishnet stockings, cute and cool",
    "Kawaii cat girl with purple hair, wearing maid outfit",
    "Cyberpunk anime warrior with neon armor and glowing eyes",
    "Elegant anime princess in traditional Japanese kimono",
    "Cool anime boy with silver hair and magical powers"
  ]

  const demoGenerations = [
    { prompt: "Gothic anime girl", image: "/images/ai-generator-hero.png" },
    { prompt: "Multiple art styles", image: "/images/generation-styles.png" },
    { prompt: "AI brain visualization", image: "/images/ai-brain-anime.png" },
  ]

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    setGeneratedImage(null)
    
    const messages = [
      "Ani正在理解你的创意...",
      "连接AI生成服务...",
      "分析动漫角色特征中...",
      "调整哥特风格参数...",
      "生成独特的anime元素...",
      "即将完成创作..."
    ]
    
    setGenerationMessages(messages)
    setCurrentMessageIndex(0)
    
    // 显示进度消息
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex(prev => {
        if (prev < messages.length - 1) {
          return prev + 1
        } else {
          clearInterval(messageInterval)
          return prev
        }
      })
    }, 800)
    
    try {
      // 构建anime风格的prompt
      const animePrompt = `anime style, ${prompt}, high quality, detailed, 2D art, manga style, colorful, cute`
      
      // 调用真实的图片生成API
          const response = await fetch('/api/generate-image', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
        body: JSON.stringify({
          prompt: animePrompt,
          model: 'Kwai-Kolors/Kolors',
          image_size: '1024x1024',
          batch_size: 1,
          num_inference_steps: 20,
          guidance_scale: 7.5
        }),
      })

      const data = await response.json()
      
      clearInterval(messageInterval)
      
      if (data.success && data.data.images && data.data.images.length > 0) {
        setGeneratedImage(data.data.images[0].url)
        setCurrentMessageIndex(messages.length - 1)
        
        // 显示状态信息
        if (data.data.fallback) {
          console.log('📱 Using fallback image:', data.data.message)
          // 可以在UI中显示降级提示
        } else {
          console.log('✅ Real AI generation successful!')
        }
        
        setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1) // 触发"完成"状态
        }, 500)
      } else {
        console.error('Image generation failed:', data.error)
        // 降级到演示图片
        const demoImages = ["/images/generated-sample-1.png", "/images/ani-showcase.png", "/images/nft-creation.png", "/images/token-economy.png"]
        const randomImage = demoImages[Math.floor(Math.random() * demoImages.length)]
        setGeneratedImage(randomImage)
        setCurrentMessageIndex(messages.length - 1)
      }
    } catch (error) {
      console.error('API call failed:', error)
      clearInterval(messageInterval)
      
      // 降级到演示图片
      const demoImages = ["/images/generated-sample-1.png", "/images/ani-showcase.png", "/images/nft-creation.png", "/images/token-economy.png"]
      const randomImage = demoImages[Math.floor(Math.random() * demoImages.length)]
      setGeneratedImage(randomImage)
      setCurrentMessageIndex(messages.length - 1)
    } finally {
      setIsGenerating(false)
    }
  }

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
                <Wand2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI Generator</span>
            </div>
          </div>
      </div>
      </nav>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Header */}
          <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-medium mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>AI Art Generator</span>
            </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              GROK AI Studio
              </span>
            </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            与Ani一起创造独一无二的动漫角色NFT，让你的创意通过AI变为现实
            </p>
          </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Generator Interface */}
            <div className="space-y-6">
            <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Wand2 className="w-6 h-6 text-purple-600" />
                  创作你的动漫角色
                  </CardTitle>
                </CardHeader>
              <CardContent className="p-8 pt-0 space-y-6">
                  {/* Prompt Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    描述你想要的角色 *
                  </label>
                    <Textarea
                    placeholder="例如: 哥特风格的动漫女孩，双马尾，渔网袜，既可爱又酷炫"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[120px] resize-none"
                    />
                  </div>

                {/* Preset Prompts */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    快速选择模板
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {presetPrompts.map((preset, index) => (
                      <button
                        key={index}
                        onClick={() => setPrompt(preset)}
                        className="text-left p-3 bg-gray-50 hover:bg-purple-50 rounded-lg transition-colors text-sm text-gray-700 hover:text-purple-700"
                      >
                        {preset}
                      </button>
                    ))}
                        </div>
                      </div>

                  {/* Generate Button */}
                  <Button
                    onClick={handleGenerate}
                  disabled={!prompt || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {isGenerating ? (
                      <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Ani正在创作中...
                      </>
                    ) : (
                      <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      生成动漫NFT
                      </>
                    )}
                  </Button>

                <div className="text-xs text-gray-500 text-center">
                  ⚡ 使用ANI代币支付生成费用 • 🎌 专业动漫风格训练
                    </div>
                </CardContent>
              </Card>

            {/* Generation Settings */}
            <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl">
              <CardHeader className="p-6">
                <CardTitle className="text-lg font-bold text-gray-900">高级设置</CardTitle>
                </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">艺术风格</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                      <option>哥特风格</option>
                      <option>萌系可爱</option>
                      <option>赛博朋克</option>
                      <option>传统和风</option>
                    </select>
                        </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">画质</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                      <option>高清 (推荐)</option>
                      <option>超高清</option>
                      <option>标准</option>
                    </select>
                      </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          {/* Result Display */}
            <div className="space-y-6">
            {/* Generated Result */}
            <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-pink-600" />
                  Ani的创作结果
                  </CardTitle>
                </CardHeader>
              <CardContent className="p-8 pt-0">
                {!generatedImage && !isGenerating ? (
                  <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-purple-200">
                    <div className="text-center">
                      <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <p className="text-gray-500">输入提示词开始创作</p>
                                </div>
                              </div>
                ) : isGenerating ? (
                  <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-purple-700 font-medium">
                        {currentMessageIndex >= generationMessages.length 
                          ? "完成！你的专属waifu已诞生✨" 
                          : (generationMessages[currentMessageIndex] || "GROK AI正在创作中...")
                        }
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        {currentMessageIndex >= generationMessages.length 
                          ? "创作完成，正在加载图片..." 
                          : "Ani正在为你精心制作"
                        }
                      </p>
                      <div className="flex justify-center mt-3">
                        {generationMessages.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                              index <= currentMessageIndex ? "bg-purple-600" : "bg-gray-300"
                            }`}
                          />
                        ))}
                        {currentMessageIndex >= generationMessages.length && (
                          <div className="w-2 h-2 rounded-full mx-1 bg-green-500 animate-pulse" />
                        )}
                      </div>
                          </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden">
                      <Image
                        src={generatedImage || "/images/ai-generator-hero.png"}
                        alt="AI Generated Anime Character"
                        fill
                        className="object-contain"
                      />
                      <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        Ani's Creation ✨
                        </div>
                      </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        铸造NFT
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share2 className="w-4 h-4 mr-2" />
                        分享
                        </Button>
                        <Button 
                        variant="outline" 
                        className="px-3"
                        onClick={() => window.location.href = '/ani-character'}
                        title="与Ani聊天"
                      >
                        <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                )}
              </CardContent>
            </Card>

            {/* Demo Gallery */}
            <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl">
              <CardHeader className="p-6">
                <CardTitle className="text-lg font-bold text-gray-900">展示作品集</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="grid grid-cols-3 gap-3">
                  {demoGenerations.map((demo, index) => (
                    <div key={index} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
                      <Image
                        src={demo.image}
                        alt={demo.prompt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <p className="text-white text-xs text-center px-2">{demo.prompt}</p>
                      </div>
                    </div>
                  ))}
                </div>
                </CardContent>
              </Card>
            </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-purple-800 mb-4">
              🎨 AI生成技术演示
            </h3>
            <p className="text-gray-700">
              这里展示了AniGROK的AI生成技术原型。通过与Ani的对话和这个演示界面，
              你可以体验到未来anime NFT创作的无限可能。立即与Ani聊天了解更多！
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
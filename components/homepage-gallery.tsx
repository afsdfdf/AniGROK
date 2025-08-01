"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Download, Sparkles, Eye, X } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

interface GalleryImage {
  id: number
  filename: string
  prompt: string
  status: string
}

export function HomepageGallery() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [likedImages, setLikedImages] = useState<number[]>([])

  // 图片数据 - 使用新生成的项目相关配图
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      filename: "generated-sample-1.png",
      prompt: "Gothic anime girl with twin tails, dark dress, cute expression",
      status: "success"
    },
    {
      id: 2,
      filename: "ani-character.png", 
      prompt: "Ani virtual assistant character, gothic lolita with twin tails",
      status: "success"
    },
    {
      id: 3,
      filename: "ani-showcase.png",
      prompt: "Ani character showcase, elegant gothic lolita virtual assistant",
      status: "success"
    },
    {
      id: 4,
      filename: "gallery-sample-1.png",
      prompt: "Elegant anime princess, traditional Japanese kimono, serene expression",
      status: "success"
    },
    {
      id: 5,
      filename: "gallery-sample-3.png",
      prompt: "Twin anime girls, matching outfits, sisterly bond, colorful illustration",
      status: "success"
    },
    {
      id: 6,
      filename: "platform-hero.png",
      prompt: "AniGROK platform overview, multiple anime characters, NFT creation",
      status: "success"
    },
    {
      id: 7,
      filename: "ai-technology.png",
      prompt: "AI technology illustration, neural network with anime elements",
      status: "success"
    },
    {
      id: 8,
      filename: "nft-creation.png",
      prompt: "NFT creation process, anime girl creating digital art, blockchain",
      status: "success"
    },
    {
      id: 9,
      filename: "token-economy.png",
      prompt: "Cryptocurrency economy, anime girl with digital coins, trading",
      status: "success"
    },
    {
      id: 10,
      filename: "ani-avatar.png",
      prompt: "Ani character portrait, cute gothic girl with twin tails, friendly smile",
      status: "success"
    }
  ]

  const toggleLike = (imageId: number) => {
    setLikedImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200/50 rounded-full text-purple-700 font-medium mb-6 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>{t("gallery.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t("gallery.heroTitle")}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            {t("gallery.heroDescription")}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {galleryImages.map((image) => (
            <Card 
              key={image.id}
              className="group cursor-pointer overflow-hidden border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white"
              onClick={() => setSelectedImage(image)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={`/images/${image.filename}`}
                    alt={image.prompt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-3">
                      <Eye className="w-6 h-6 mx-auto mb-2" />
                      <p className="text-xs font-medium">查看详情</p>
                    </div>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(image.id)
                    }}
                    className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      likedImages.includes(image.id)
                        ? 'bg-pink-500 text-white scale-110'
                        : 'bg-white/80 text-gray-600 hover:bg-pink-100 hover:text-pink-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedImages.includes(image.id) ? 'fill-current' : ''}`} />
                  </button>

                  {/* AI Generated Badge */}
                  <div className="absolute bottom-2 left-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                    AI生成 ✨
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{galleryImages.length}</div>
            <div className="text-gray-600 font-medium">精品作品</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">{likedImages.length}</div>
            <div className="text-gray-600 font-medium">收藏作品</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-gray-600 font-medium">AI生成</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
            <div className="text-gray-600 font-medium">创作可能</div>
          </div>
        </div>
      </div>

      {/* Modal for detailed view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square">
                <Image
                  src={`/images/${selectedImage.filename}`}
                  alt={selectedImage.prompt}
                  fill
                  className="object-cover rounded-l-3xl md:rounded-r-none rounded-t-3xl md:rounded-t-3xl"
                />
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-4">
                    <Sparkles className="w-3 h-3" />
                    <span>作品 #{selectedImage.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI生成艺术作品</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>创作提示:</strong> {selectedImage.prompt}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => toggleLike(selectedImage.id)}
                      variant={likedImages.includes(selectedImage.id) ? "default" : "outline"}
                      className={`flex-1 ${
                        likedImages.includes(selectedImage.id) 
                          ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white' 
                          : ''
                      }`}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${likedImages.includes(selectedImage.id) ? 'fill-current' : ''}`} />
                      {likedImages.includes(selectedImage.id) ? '已收藏' : '收藏'}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      下载
                    </Button>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <Sparkles className="w-4 h-4 mr-2" />
                    生成类似作品
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-500">风格</div>
                      <div className="font-medium">Anime 2D</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">分辨率</div>
                      <div className="font-medium">1024×1024</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">模型</div>
                      <div className="font-medium">Kolors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

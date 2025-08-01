"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Filter, Search, ArrowLeft, Heart, Zap, Crown, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MarketplacePage() {
  const featuredNFTs = [
    {
      id: 1,
      title: "Gothic Waifu #001",
      creator: "AniCreator",
      price: "150 ANI",
      image: "/images/generated-sample-1.png",
      rarity: "Legendary",
      likes: 234,
      tags: ["Gothic", "Twin Tails", "Rare"]
    },
    {
      id: 2,
      title: "Cyberpunk Cat Girl #045",
      creator: "CyberArtist",
      price: "89 ANI",
      image: "/images/nft-creation.png",
      rarity: "Epic",
      likes: 156,
      tags: ["Cyberpunk", "Cat Girl", "Neon"]
    },
    {
      id: 3,
      title: "Magical Warrior #123",
      creator: "MagicMaker",
      price: "267 ANI",
      image: "/images/token-economy.png",
      rarity: "Mythic",
      likes: 389,
      tags: ["Magic", "Warrior", "Fantasy"]
    }
  ]

  const categories = [
    { name: "All", count: 1247, active: true },
    { name: "Gothic", count: 423, active: false },
    { name: "Kawaii", count: 356, active: false },
    { name: "Cyberpunk", count: 189, active: false },
    { name: "Fantasy", count: 279, active: false },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary": return "bg-yellow-500"
      case "Mythic": return "bg-purple-500"
      case "Epic": return "bg-blue-500"
      case "Rare": return "bg-green-500"
      default: return "bg-gray-500"
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
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">NFT Marketplace</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-medium mb-6 shadow-lg">
            <ShoppingBag className="w-4 h-4" />
            <span>Demo展示</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              NFT市场演示
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            预览未来的anime NFT交易市场，体验去中心化的数字艺术收藏生态系统
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "演示作品", value: "3件", icon: "💎" },
            { label: "风格类型", value: "多样化", icon: "👨‍🎨" },
            { label: "技术展示", value: "完整", icon: "🎌" },
            { label: "用户体验", value: "流畅", icon: "💰" }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-white border border-gray-200 rounded-3xl shadow-lg">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="搜索anime NFT..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled
              />
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2" disabled>
            <Filter className="w-4 h-4" />
            筛选
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                category.active 
                  ? "bg-purple-600 text-white hover:bg-purple-700" 
                  : "text-gray-600 hover:bg-purple-50"
              }`}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Featured NFTs Preview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Star className="w-6 h-6 text-purple-600" />
            精选作品预览
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNFTs.map((nft) => (
              <Card key={nft.id} className="group bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
                    <Image
                      src={nft.image}
                      alt={nft.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={`${getRarityColor(nft.rarity)} text-white text-xs`}>
                        {nft.rarity}
                      </Badge>
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      disabled
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{nft.title}</h4>
                  <p className="text-gray-600 mb-4">by {nft.creator}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {nft.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">价格</div>
                      <div className="text-lg font-bold text-purple-600">{nft.price}</div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{nft.likes}</span>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" disabled>
                    即将开放购买
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Zap,
              title: "ANI代币支付",
              description: "使用ANI代币购买NFT，享受交易费折扣",
              color: "purple"
            },
            {
              icon: Crown,
              title: "创作者版税",
              description: "每次二级市场交易，原创者获得版税收入",
              color: "pink"
            },
            {
              icon: ShoppingBag,
              title: "安全交易",
              description: "BSC智能合约保障，交易安全透明",
              color: "indigo"
            }
          ].map((feature, index) => (
            <Card key={index} className="text-center p-8 bg-white border border-gray-200 rounded-3xl shadow-lg">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
                feature.color === "purple" ? "from-purple-500 to-purple-600" :
                feature.color === "pink" ? "from-pink-500 to-pink-600" :
                "from-indigo-500 to-indigo-600"
              }`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Demo Info Banner */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl shadow-xl text-center">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold mb-4">🎌 NFT市场愿景展示</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              这里展示了未来NFT交易市场的用户界面和功能设计，
              体验去中心化的anime数字艺术收藏生态系统。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold"
                onClick={() => window.location.href = '/ai-generator'}
              >
                <Heart className="w-5 h-5 mr-2" />
                体验AI生成
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-xl font-semibold"
                onClick={() => window.location.href = '/ani-character'}
              >
                <Crown className="w-5 h-5 mr-2" />
                认识Ani
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
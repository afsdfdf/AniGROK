"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Zap, Globe, ArrowLeft, Users, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export default function AboutPage() {
  const { t } = useTranslation()
  
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
              <span className="text-xl font-bold text-gray-900">About AniGROK</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-medium mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>About Our Project</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AniGROK 的故事
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            一个致力于推广二次元文化、让AI理解动漫艺术的革命性平台
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Target className="w-6 h-6 text-purple-600" />
                我们的使命
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">用户互动革新</h4>
                  <p className="text-gray-600 text-sm">革新人机交互方式，借助Ani虚拟角色和AI技术，将用户从被动收藏者转变为互动创作者。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">NFT创作民主化</h4>
                  <p className="text-gray-600 text-sm">通过强大的文本生成图像模型，让任何人都能成为艺术家，实现NFT内容生产的民主化。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">推动二次元文化</h4>
                  <p className="text-gray-600 text-sm">扶持和推广动漫、美术插画等二次元风格的数字内容创作，让优秀的二次元IP焕发新生。</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Globe className="w-6 h-6 text-purple-600" />
                我们的愿景
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="relative aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-6 overflow-hidden">
                <Image
                  src="/images/about-hero.png"
                  alt="AniGROK Vision"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                创造一个由用户驱动、充满创意的数字内容生态。充分利用AI和区块链技术，让二次元文化在Web3时代蓬勃发展，成为连接全球动漫爱好者的桥梁。
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">技术优势</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "GROK AI技术",
                description: "专门训练的AI模型，深度理解动漫文化和二次元美学",
                features: ["专业动漫风格训练", "理解otaku文化", "多种艺术风格支持"],
                color: "purple"
              },
              {
                icon: Globe,
                title: "BSC区块链",
                description: "选择币安智能链作为基础设施，享受高速低费的优势",
                features: ["BEP-20代币标准", "低交易费用", "高速确认"],
                color: "blue"
              },
              {
                icon: Users,
                title: "社区治理",
                description: "通过DAO实现去中心化治理，让社区共同决定平台发展",
                features: ["ANI持有者投票", "透明决策过程", "社区提案机制"],
                color: "pink"
              }
            ].map((tech, index) => (
              <Card key={index} className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
                    tech.color === "purple" ? "from-purple-500 to-purple-600" :
                    tech.color === "blue" ? "from-blue-500 to-blue-600" :
                    "from-pink-500 to-pink-600"
                  }`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{tech.description}</p>
                  <div className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">核心价值观</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: "🚀", title: "技术创新", desc: "持续推进AI与区块链深度融合" },
              { emoji: "🌍", title: "全球连接", desc: "连接世界各地的二次元爱好者" },
              { emoji: "🎌", title: "文化传承", desc: "推广和发展动漫二次元文化" },
              { emoji: "💜", title: "社区第一", desc: "以社区为中心的去中心化理念" }
            ].map((value, index) => (
              <Card key={index} className="text-center p-6 bg-white border border-gray-200 rounded-3xl shadow-lg">
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl shadow-xl text-center">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold mb-4">🎌 加入AniGROK社区</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              与全球动漫爱好者一起，见证AI与二次元文化的完美结合，创造属于你的anime NFT作品
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold">
                <Heart className="w-5 h-5 mr-2" />
                关注项目动态
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-xl font-semibold">
                <Users className="w-5 h-5 mr-2" />
                加入Telegram群
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}


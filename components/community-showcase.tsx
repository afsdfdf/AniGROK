"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Star, TrendingUp, Users, Sparkles } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"
import { useState, useEffect } from "react"

export function CommunityShowcase() {
  const { t } = useTranslation()
  const [selectedCreator, setSelectedCreator] = useState(0)

  const featuredCreators = [
    {
      id: 1,
      name: "AkiraArt",
      avatar: "/placeholder-user.jpg",
      badge: "Top Creator",
      followers: "12.5K",
      nftsCreated: 156,
      totalEarned: "45.8 ANI",
      recentWork: "/images/gallery-sample-1.png",
      style: "Gothic & Dark Fantasy"
    },
    {
      id: 2,
      name: "KawaiiMaster",
      avatar: "/placeholder-user.jpg", 
      badge: "Rising Star",
      followers: "8.2K",
      nftsCreated: 89,
      totalEarned: "32.1 ANI",
      recentWork: "/images/gallery-sample-3.png",
      style: "Cute & Colorful"
    },
    {
      id: 3,
      name: "CyberNinja",
      avatar: "/placeholder-user.jpg",
      badge: "Tech Pioneer",
      followers: "15.7K", 
      nftsCreated: 203,
      totalEarned: "67.3 ANI",
      recentWork: "/images/ai-technology.png",
      style: "Cyberpunk & Futuristic"
    }
  ]

  const communityStats = [
    { icon: Users, label: "Active Creators", value: "2,847", change: "+12%" },
    { icon: Heart, label: "Daily Likes", value: "15.2K", change: "+8%" },
    { icon: TrendingUp, label: "Monthly Volume", value: "156 ANI", change: "+23%" },
    { icon: Sparkles, label: "New Artworks", value: "342", change: "+15%" }
  ]

  const testimonials = [
    {
      id: 1,
      user: "TokyoDreamer",
      avatar: "/placeholder-user.jpg",
      content: "AniGROK has revolutionized how I create anime art! The AI assistance is incredible and Ani is such a helpful companion. 🎨✨",
      likes: 234,
      time: "2h ago"
    },
    {
      id: 2,
      user: "WaifuCollector",
      avatar: "/placeholder-user.jpg",
      content: "Finally found the perfect platform for anime NFTs! The community here is amazing and the quality of art is outstanding. 💖",
      likes: 189,
      time: "5h ago"
    },
    {
      id: 3,
      user: "AnimeArtist",
      avatar: "/placeholder-user.jpg",
      content: "Love how easy it is to generate unique characters with Ani's help. The blockchain integration is seamless! 🚀",
      likes: 156,
      time: "1d ago"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCreator((prev) => (prev + 1) % featuredCreators.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [featuredCreators.length])

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-full text-purple-700 font-medium mb-6 shadow-lg">
            <Users className="w-4 h-4" />
            <span>{t("community.badge", "Thriving Community")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t("community.title", "Join Our Creative")}
            </span>
            <br />
            {t("community.subtitle", "Community")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("community.description", "Connect with thousands of anime creators, share your art, and earn rewards in our vibrant ecosystem powered by AI and blockchain technology.")}
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                <Badge variant="secondary" className="text-green-700 bg-green-100">
                  {stat.change}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Creators */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            {t("community.featuredCreators", "Featured Creators")}
          </h3>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Creator Info */}
            <div className="space-y-6">
              {featuredCreators.map((creator, index) => (
                <Card 
                  key={creator.id}
                  className={`cursor-pointer transition-all duration-500 ${
                    selectedCreator === index 
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 border-purple-300 shadow-xl scale-105' 
                      : 'bg-white/70 border-gray-200 hover:border-purple-200 hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedCreator(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={creator.avatar} />
                        <AvatarFallback>{creator.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-900">{creator.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {creator.badge}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{creator.style}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="font-semibold text-purple-600">{creator.followers}</div>
                        <div className="text-xs text-gray-500">Followers</div>
                      </div>
                      <div>
                        <div className="font-semibold text-pink-600">{creator.nftsCreated}</div>
                        <div className="text-xs text-gray-500">NFTs</div>
                      </div>
                      <div>
                        <div className="font-semibold text-indigo-600">{creator.totalEarned}</div>
                        <div className="text-xs text-gray-500">Earned</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Featured Artwork */}
            <div className="relative">
              <Card className="bg-white border-2 border-purple-200 shadow-2xl overflow-hidden">
                <div className="relative h-96 sm:h-[500px]">
                  <Image
                    src={featuredCreators[selectedCreator].recentWork}
                    alt={`${featuredCreators[selectedCreator].name}'s artwork`}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Latest Creation</h4>
                      <p className="text-sm text-gray-600 mb-3">by {featuredCreators[selectedCreator].name}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Heart className="w-4 h-4 mr-1" />
                          Like
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Share2 className="w-4 h-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Community Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            {t("community.testimonials", "What Our Community Says")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.user.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{testimonial.user}</div>
                      <div className="text-sm text-gray-500">{testimonial.time}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.content}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500" />
                      {testimonial.likes}
                    </div>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Reply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {t("community.cta.title", "Ready to Join Our Community?")}
              </h3>
              <p className="text-purple-100 mb-6 text-lg">
                {t("community.cta.description", "Start creating, sharing, and earning with thousands of anime artists worldwide!")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-purple-50 font-semibold"
                  onClick={() => window.location.href = '/ai-generator'}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  {t("community.cta.create", "Start Creating")}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold"
                  onClick={() => window.location.href = '/marketplace'}
                >
                  <Users className="w-5 h-5 mr-2" />
                  {t("community.cta.explore", "Explore Gallery")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
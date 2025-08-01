"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Zap, 
  Shield, 
  Layers, 
  Globe, 
  Cpu, 
  Lock, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Sparkles 
} from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"
import { useState, useEffect } from "react"

export function TechHighlights() {
  const { t } = useTranslation()
  const [activeFeature, setActiveFeature] = useState(0)

  const techFeatures = [
    {
      icon: Brain,
      title: "GROK AI Engine",
      subtitle: "Advanced Neural Networks",
      description: "Powered by cutting-edge AI technology that understands anime aesthetics and 2D culture deeply",
      metrics: ["99.2% Accuracy", "0.8s Generation", "50+ Styles"],
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: Shield,
      title: "BSC Blockchain",
      subtitle: "Secure & Fast Transactions", 
      description: "Built on Binance Smart Chain for fast, secure, and cost-effective NFT operations",
      metrics: ["<$0.01 Fees", "3s Finality", "99.9% Uptime"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      subtitle: "Scalable Infrastructure",
      description: "Microservices architecture designed for high performance and infinite scalability",
      metrics: ["1M+ Users", "Auto-scaling", "Load Balanced"],
      gradient: "from-blue-500 to-cyan-500", 
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Lock,
      title: "Decentralized Storage",
      subtitle: "IPFS Integration",
      description: "Your NFTs and metadata are stored permanently on decentralized networks",
      metrics: ["100% Uptime", "Global CDN", "Immutable"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ]

  const technicalSpecs = [
    {
      category: "AI Performance",
      specs: [
        { label: "Model Parameters", value: "7B+" },
        { label: "Training Data", value: "500M+ Images" },
        { label: "Generation Speed", value: "0.8s average" },
        { label: "Style Accuracy", value: "99.2%" }
      ]
    },
    {
      category: "Blockchain",
      specs: [
        { label: "Network", value: "BSC Mainnet" },
        { label: "Transaction Cost", value: "<$0.01" },
        { label: "Confirmation Time", value: "3 seconds" },
        { label: "Smart Contract", value: "Audited" }
      ]
    },
    {
      category: "Infrastructure", 
      specs: [
        { label: "CDN Nodes", value: "150+" },
        { label: "Global Latency", value: "<100ms" },
        { label: "Uptime SLA", value: "99.9%" },
        { label: "Auto Scaling", value: "Enabled" }
      ]
    }
  ]

  const partnerships = [
    {
      name: "Binance Smart Chain",
      logo: "/placeholder.svg",
      type: "Blockchain Partner",
      description: "Official BSC ecosystem partner"
    },
    {
      name: "IPFS",
      logo: "/placeholder.svg", 
      type: "Storage Partner",
      description: "Decentralized storage provider"
    },
    {
      name: "Anime Studios",
      logo: "/placeholder.svg",
      type: "Content Partner", 
      description: "Official anime content licensing"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % techFeatures.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [techFeatures.length])

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-purple-200 font-medium mb-6">
            <Cpu className="w-4 h-4" />
            <span>{t("tech.badge", "Advanced Technology")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("tech.title", "Cutting-Edge")}
            </span>
            <br />
            {t("tech.subtitle", "Technology Stack")}
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            {t("tech.description", "Powered by advanced AI, secured by blockchain, and designed for the future of digital art creation.")}
          </p>
        </div>

        {/* Main Tech Features */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Feature Cards */}
          <div className="space-y-6">
            {techFeatures.map((feature, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-500 border-0 ${
                  activeFeature === index 
                    ? 'bg-gradient-to-r from-white/20 to-white/10 scale-105 shadow-2xl' 
                    : 'bg-white/5 hover:bg-white/10'
                } backdrop-blur-sm`}
                onClick={() => setActiveFeature(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-purple-200 text-sm mb-2">{feature.subtitle}</p>
                      <p className="text-purple-100 text-sm mb-3">{feature.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {feature.metrics.map((metric, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white/10 text-purple-200 border-0">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Visualization */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm h-full">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${techFeatures[activeFeature].gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {React.createElement(techFeatures[activeFeature].icon, { className: "w-10 h-10 text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{techFeatures[activeFeature].title}</h3>
                  <p className="text-purple-200">{techFeatures[activeFeature].subtitle}</p>
                </div>
                
                <div className="space-y-4">
                  {techFeatures[activeFeature].metrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-purple-100">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0"
                    onClick={() => window.location.href = '/developer-docs'}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    {t("tech.learnMore", "Learn More")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">
            {t("tech.specifications", "Technical Specifications")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {technicalSpecs.map((category, index) => (
              <Card key={index} className="bg-white/5 border border-white/10 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-white">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-purple-200 text-sm">{spec.label}</span>
                        <Badge variant="outline" className="border-purple-400 text-purple-300">
                          {spec.value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            {t("tech.partnerships", "Technology Partners")}
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {partnerships.map((partner, index) => (
              <Card key={index} className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-purple-300" />
                  </div>
                  <h4 className="font-bold text-white mb-1">{partner.name}</h4>
                  <Badge variant="outline" className="border-purple-400 text-purple-300 mb-2">
                    {partner.type}
                  </Badge>
                  <p className="text-sm text-purple-200">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
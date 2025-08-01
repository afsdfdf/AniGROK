import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Share2, Code, CheckCircle, Users, Star, Play, GitBranch } from "lucide-react"
import Image from "next/image"

export default function ProtocolPage() {
  const features = [
    {
      title: "Open Protocol",
      description: "Open AI model protocol supporting global developer contributions",
      icon: Share2,
    },
    {
      title: "Revenue Sharing",
      description: "Smart contracts automatically distribute model usage revenue",
      icon: Star,
    },
    {
      title: "Version Control",
      description: "Git-style model version control and collaboration",
      icon: GitBranch,
    },
    {
      title: "Quality Assessment",
      description: "Community-driven model quality evaluation system",
      icon: CheckCircle,
    },
  ]

  const benefits = [
    {
      title: "Model Ecosystem",
      description: "Building a comprehensive AI model marketplace",
      value: "Growing",
      suffix: "Ecosystem",
    },
    {
      title: "Developer Community",
      description: "Fostering a vibrant global developer community",
      value: "Welcoming",
      suffix: "Community",
    },
    {
      title: "Revenue Vision",
      description: "Sustainable revenue sharing for model creators",
      value: "Fair",
      suffix: "Distribution",
    },
  ]

  const modelTypes = [
    {
      title: "Image Generation",
      description: "Stable Diffusion, DALL-E and other image generation models",
      icon: "🎨",
      count: "300+",
    },
    {
      title: "Natural Language",
      description: "GPT, BERT and other language understanding models",
      icon: "💬",
      count: "250+",
    },
    {
      title: "Audio Processing",
      description: "Speech recognition, music generation AI models",
      icon: "🎵",
      count: "150+",
    },
    {
      title: "Video Generation",
      description: "RunwayML, Pika and other video generation models",
      icon: "🎬",
      count: "100+",
    },
    {
      title: "Code Generation",
      description: "Codex, CodeT5 and other code generation models",
      icon: "💻",
      count: "120+",
    },
    {
      title: "Multimodal",
      description: "CLIP, DALL-E and other multimodal understanding models",
      icon: "🔗",
      count: "80+",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium shadow-lg">
                <Share2 className="w-4 h-4" />
                <span>Open Model Protocol</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  <span className="block">Model</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Protocol
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                  Developers upload models and share revenue distribution
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Build an open AI model ecosystem where global developers can contribute, use, and earn revenue from AI models. Smart contracts ensure fair revenue distribution mechanisms.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Upload Model
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Browse Models
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{benefit.value}</div>
                    <div className="text-sm text-blue-600 font-medium">{benefit.suffix}</div>
                    <div className="text-xs text-gray-600 mt-1">{benefit.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Model Protocol Demo */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                {/* Transparent Logo */}
                <div className="absolute top-4 right-4 z-10">
                  <Image
                    src="/logo1.png"
                    width={40}
                    height={40}
                    alt="AniGROK Logo"
                    className="mr-3"
                  />
                </div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo1.png"
                      alt="Model Protocol"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">Model Protocol Platform</span>
                      </div>
                      <div className="text-sm text-gray-500">Developer Console</div>
                    </div>
                  </div>
                </div>

                {/* Model Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="text-sm text-blue-600 mb-1">Monthly Usage</div>
                    <div className="text-2xl font-bold text-blue-700">12,847</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="text-sm text-green-600 mb-1">Revenue Share</div>
                    <div className="text-2xl font-bold text-green-700">$2,340</div>
                  </div>
                </div>

                {/* Model Upload Interface */}
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-sm text-gray-600 mb-2">Model Information</div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-800 shadow-sm">
                      Stable Diffusion v2.1 - Image Generation Model
                    </div>
                  </div>

                  {/* Processing */}
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    <span className="text-blue-700 font-medium">Model validation passed, ready to publish</span>
                  </div>

                  {/* Model Preview */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden border border-blue-200">
                    <Image
                      src="/images/nft-creation.png"
                      alt="AI Model Protocol Interface"
                      fill
                      className="object-cover rounded-xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                      <div className="text-sm font-medium">Smart Contract Revenue Distribution</div>
                      <div className="text-xs opacity-75">Fair • Transparent • Automated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Types Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Model{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Types
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Supporting various AI model types, providing the most suitable solutions for different application scenarios
            </p>
          </div>

          {/* Model Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelTypes.map((type, index) => (
              <Card
                key={index}
                className="group border-2 border-slate-200/50 hover:border-blue-300 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
                <CardHeader className="text-center p-6">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2">
                    {type.title}
                  </CardTitle>
                  <div className="text-sm text-blue-600 font-medium mb-3">{type.count} Models</div>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Protocol{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Blockchain-based open protocol ensuring developer rights and transparent revenue distribution
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-2 border-slate-200/50 hover:border-blue-300 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-105 bg-white"
              >
                <CardHeader className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Revenue Distribution Explanation */}
          <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  Smart Revenue Distribution Mechanism
                </h3>
                <div className="space-y-4">
                  {[
                    "Automatic revenue distribution based on usage",
                    "Smart contracts ensure transparency and fairness",
                    "Real-time settlement, no waiting required",
                    "Multi-tier contributor incentive system"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-xl">
                  <Star className="w-12 h-12 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-800 mb-2">Distribution Algorithm</div>
                <div className="text-slate-600">Based on usage and quality score</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Contributing Models
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 
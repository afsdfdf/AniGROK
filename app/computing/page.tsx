import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Cpu, Zap, CheckCircle, Globe, TrendingDown, Play, Server } from "lucide-react"
import Image from "next/image"

export default function ComputingPage() {
  const features = [
    {
      title: "Global Vision",
      description: "Building a worldwide network of distributed computing resources",
      icon: Globe,
    },
    {
      title: "Cost Efficiency",
      description: "Optimizing computing costs through innovative distributed architecture",
      icon: TrendingDown,
    },
    {
      title: "Smart Scheduling",
      description: "AI-driven load balancing and intelligent task scheduling",
      icon: Cpu,
    },
    {
      title: "Elastic Scaling",
      description: "Pay-as-you-go, elastic resource scaling for various computing needs",
      icon: Zap,
    },
  ]

  const benefits = [
    {
      title: "Performance Focus",
      description: "GPU clusters designed for AI model training and inference",
      value: "Optimized",
      suffix: "Performance",
    },
    {
      title: "Cost Innovation",
      description: "Distributed computing network designed for efficiency",
      value: "Efficient",
      suffix: "Architecture",
    },
    {
      title: "Network Growth",
      description: "Expanding computing node network infrastructure",
      value: "Scalable",
      suffix: "Network",
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
                <Cpu className="w-4 h-4" />
                <span>Decentralized Computing</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  <span className="block">Computing</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Market
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                  Global distributed computing network, dramatically reducing AI computation costs
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                A decentralized computing network built through blockchain technology, connecting global idle computing resources to provide high-performance, low-cost computing services for AI applications.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start Computing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
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
              {/* Computing Network Demo */}
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
                      alt="Computing Network"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">Distributed Computing Network</span>
                      </div>
                      <div className="text-sm text-gray-500">Real-time Monitoring Dashboard</div>
                    </div>
                  </div>
                </div>

                {/* Network Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="text-sm text-blue-600 mb-1">Network Status</div>
                    <div className="text-2xl font-bold text-blue-700">Building</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="text-sm text-green-600 mb-1">Platform Vision</div>
                    <div className="text-2xl font-bold text-green-700">Global</div>
                  </div>
                </div>

                {/* Computing Task */}
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-sm text-gray-600 mb-2">Current Task</div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-800 shadow-sm">
                      AI Model Training - ResNet50 Image Classification
                    </div>
                  </div>

                  {/* Processing */}
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-blue-700 font-medium">Distributed computing in progress...</span>
                  </div>

                  {/* Network Visualization */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden border border-blue-200">
                    <Image
                      src="/images/ai-technology.png"
                      alt="Distributed Computing Network Visualization"
                      fill
                      className="object-cover rounded-xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                      <div className="text-sm font-medium">Global Computing Node Network</div>
                      <div className="text-xs opacity-75">60% Cost Savings • 10x Performance Boost</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Core{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Advantages
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Decentralized architecture combined with blockchain incentive mechanisms for optimal allocation of global computing resources
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-2 border-slate-200/50 hover:border-blue-300 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-105"
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
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Network{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Architecture
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three-layer distributed architecture ensuring efficient task distribution and execution
            </p>
          </div>

          {/* Architecture Layers */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Task Distribution Layer",
                description: "Smart task scheduling and load balancing",
                icon: Server,
                features: ["Intelligent Task Splitting", "Load Balancing Algorithm", "Priority Queue Management", "Real-time Monitoring"]
              },
              {
                title: "Computing Execution Layer", 
                description: "Global distributed computing node network",
                icon: Cpu,
                features: ["GPU Cluster Computing", "Containerized Environment", "Resource Isolation", "Fault Recovery"]
              },
              {
                title: "Incentive Consensus Layer",
                description: "Blockchain incentives and consensus mechanisms",
                icon: CheckCircle,
                features: ["Proof of Work", "Revenue Distribution", "Reputation Assessment", "Smart Contracts"]
              }
            ].map((layer, index) => (
              <Card
                key={index}
                className="group border-2 border-slate-200/50 hover:border-blue-300 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-105 bg-white"
              >
                <CardHeader className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <layer.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800 mb-3">
                    {layer.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed mb-6">
                    {layer.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    {layer.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-left">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Join Computing Network
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 
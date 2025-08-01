import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Vote, CheckCircle, Coins, TrendingUp, Play, Shield } from "lucide-react"
import Image from "next/image"

export default function DAOPage() {
  const features = [
    {
      title: "Community Governance",
      description: "AIMINT token holders participate in major platform decisions",
      icon: Users,
    },
    {
      title: "Voting Mechanism",
      description: "Transparent on-chain voting system ensuring fairness",
      icon: Vote,
    },
    {
      title: "Proposal System",
      description: "Any token holder can submit improvement proposals",
      icon: CheckCircle,
    },
    {
      title: "Incentive Distribution",
      description: "Smart contracts automatically execute governance decisions",
      icon: Coins,
    },
  ]

  const benefits = [
    {
      title: "Governance Vision",
      description: "Building transparent community governance mechanisms",
      value: "Democratic",
      suffix: "Governance",
    },
    {
      title: "Community Participation",
      description: "Encouraging active community involvement",
      value: "Inclusive",
      suffix: "Community",
    },
    {
      title: "Proposal Quality",
      description: "Fostering high-quality community proposals",
      value: "Thoughtful",
      suffix: "Process",
    },
  ]

  const governanceAreas = [
    {
      title: "Protocol Upgrades",
      description: "Technical roadmap and protocol improvement proposals",
      icon: "⚡",
      examples: ["Smart Contract Updates", "New Feature Development", "Security Patches"],
    },
    {
      title: "Economic Model",
      description: "Token economics and incentive mechanism adjustments",
      icon: "💰",
      examples: ["Revenue Distribution", "Staking Rewards", "Burn Mechanisms"],
    },
    {
      title: "Ecosystem Fund",
      description: "Usage and allocation of ecosystem development funds",
      icon: "🌱",
      examples: ["Developer Grants", "Marketing Promotion", "Partnerships"],
    },
    {
      title: "Community Rules",
      description: "Platform rules and code of conduct formulation",
      icon: "📋",
      examples: ["Content Moderation", "User Behavior", "Dispute Resolution"],
    },
  ]

  const votingProcess = [
    {
      step: "01",
      title: "Proposal Submission",
      description: "Token holders submit governance proposals",
      icon: CheckCircle,
    },
    {
      step: "02",
      title: "Community Discussion",
      description: "7-day discussion period to refine proposals",
      icon: Users,
    },
    {
      step: "03",
      title: "On-chain Voting",
      description: "14-day voting period to reach consensus",
      icon: Vote,
    },
    {
      step: "04",
      title: "Automatic Execution",
      description: "Smart contracts automatically execute decisions",
      icon: Shield,
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
                <Users className="w-4 h-4" />
                <span>Decentralized Governance</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  <span className="block">DAO</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Governance
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                  Community-driven decentralized platform governance
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                AIMINT token holders participate in platform governance together, determining platform development direction, resource allocation, and important decisions through transparent voting mechanisms, achieving true decentralized governance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Participate in Governance
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  <Play className="mr-2 w-5 h-5" />
                  View Proposals
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
              {/* DAO Governance Demo */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                {/* Transparent Logo */}
                <div className="absolute top-4 right-4 z-10">
                  <Image
                    src="/logo1.png"
                    alt="AIMint Logo"
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
                      alt="DAO Governance"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">DAO Governance Panel</span>
                      </div>
                      <div className="text-sm text-gray-500">Community Voting System</div>
                    </div>
                  </div>
                </div>

                {/* Current Proposal */}
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 mb-6">
                  <div className="text-sm text-blue-600 mb-2">Current Hot Proposal</div>
                  <div className="font-semibold text-gray-900 mb-2">
                    AIP-007: Increase AI Model Quality Assessment Rewards
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-green-600">For: 75.2%</span>
                    <span className="text-red-600">Against: 24.8%</span>
                  </div>
                </div>

                {/* Voting Interface */}
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-sm text-gray-600 mb-2">Your Voting Power</div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-800 shadow-sm">
                      1,250 AIMINT Tokens (0.025% voting power)
                    </div>
                  </div>

                  {/* Voting Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl">
                      For ✓
                    </Button>
                    <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 py-3 rounded-xl">
                      Against ✗
                    </Button>
                  </div>

                  {/* Governance Stats */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden border border-blue-200">
                    <Image
                      src="/images/token-economy.png"
                      alt="DAO Governance Statistics"
                      fill
                      className="object-cover rounded-xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                      <div className="text-sm font-medium">Decentralized Governance Statistics</div>
                      <div className="text-xs opacity-75">Transparent • Fair • Community-Driven</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Areas Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Governance{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Areas
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The community can vote on various important aspects of the platform
            </p>
          </div>

          {/* Governance Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governanceAreas.map((area, index) => (
              <Card
                key={index}
                className="group border-2 border-slate-200/50 hover:border-blue-300 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
                <CardHeader className="text-center p-6">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed mb-4">
                    {area.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {area.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {example}
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Voting Process Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Voting{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Standardized governance process ensures every proposal gets thorough discussion and fair voting
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {votingProcess.map((process, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg -mt-10 relative z-10">
                  <process.icon className="w-6 h-6 text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-3">{process.title}</h3>
                <p className="text-slate-600 leading-relaxed">{process.description}</p>

                {/* Arrow */}
                {index < votingProcess.length - 1 && (
                                      <div className="hidden lg:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transform -translate-x-6">
                      <ArrowRight className="w-4 h-4 text-blue-500 absolute -top-2 -right-2" />
                    </div>
                )}
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
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

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Join DAO Governance
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 
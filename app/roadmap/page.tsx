import { Rocket, Zap, Globe, Users, Target, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RoadmapPage() {
  const roadmapData = [
    {
      quarter: "2025 Q3",
      title: "项目上线 (Project Launch)",
      status: "upcoming",
      progress: 30,
      icon: Rocket,
      color: "purple",
      achievements: [
        "✅ Anonymous team formation",
        "✅ Ani character design completion",
        "🔄 BSC smart contract development",
      ],
      upcoming: [
        "ANI token deployment on BSC",
        "AniGROK platform MVP launch",
        "AI anime art generation engine",
        "Community Telegram group launch"
      ],
    },
    {
      quarter: "2025 Q4",
      title: "NFT 市场启动 (NFT Market Launch)",
      status: "planned",
      progress: 0,
      icon: Globe,
      color: "blue",
      achievements: [],
      upcoming: [
        "Internal NFT trading market",
        "ANI and stablecoin settlement",
        "AI model optimization",
        "Cross-platform anime IP collaborations"
      ],
    },
    {
      quarter: "2026 Q1",
      title: "合作拓展 (Partnership Expansion)",
      status: "planned",
      progress: 0,
      icon: Users,
      color: "green",
      achievements: [],
      upcoming: [
        "Strategic partnership alliances",
        "NFT platform technical integration",
        "Gaming & metaverse collaborations",
        "Creator hackathon events"
      ],
    },
    {
      quarter: "2026 Q2",
      title: "DAO 治理 (DAO Governance)",
      status: "planned",
      progress: 0,
      icon: Target,
      color: "orange",
      achievements: [],
      upcoming: [
        "Decentralized Autonomous Organization launch",
        "ANI holder governance voting",
        "Community council formation",
        "Open source module deployment"
      ],
    },
  ]

  const milestones = [
    {
      date: "August 2, 2025 18:00 GMT+8",
      title: "AniGROK Platform Launch",
      description: "ANI token goes live on BSC, platform opens for public beta",
      status: "upcoming",
      icon: Rocket,
    },
    {
      date: "December 2025",
      title: "NFT Marketplace Active",
      description: "Internal trading market with ANI token settlements",
      status: "planned",
      icon: Globe,
    },
    {
      date: "June 2026",
      title: "DAO Governance Live",
      description: "Community-driven decision making through ANI token voting",
      status: "planned",
      icon: Users,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-50 text-green-600 border-green-200"
      case "in-progress":
        return "bg-blue-50 text-blue-600 border-blue-200"
      case "upcoming":
        return "bg-purple-50 text-purple-600 border-purple-200"
      default:
        return "bg-gray-50 text-gray-600 border-gray-200"
    }
  }

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-gradient-to-br from-emerald-500 to-green-600",
      blue: "bg-gradient-to-br from-blue-500 to-blue-600",
      purple: "bg-gradient-to-br from-purple-500 to-indigo-600",
      orange: "bg-gradient-to-br from-orange-500 to-amber-600",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AIMINT Roadmap</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-medium mb-6 shadow-lg">
            <Rocket className="w-4 h-4" />
            <span>Development Roadmap</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Development Blueprint
            </span>{" "}
            & Milestones
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From product development to ecosystem maturity, each phase has clear goals and measurable outcomes
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapData.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < roadmapData.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gray-200 z-0" />
                )}

                <div
                  className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                    phase.color === "green"
                      ? "border-green-200 hover:border-green-300"
                      : phase.color === "blue"
                        ? "border-blue-200 hover:border-blue-300"
                        : phase.color === "purple"
                          ? "border-purple-200 hover:border-purple-300"
                          : "border-orange-200 hover:border-orange-300"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg ${getColorClasses(phase.color)}`}
                  >
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-1">{phase.quarter}</div>
                      <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                    </div>

                    {/* Progress */}
                    {phase.status === "in-progress" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{phase.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${phase.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    <div className="space-y-2">
                      {phase.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="text-sm text-gray-700">
                          {achievement}
                        </div>
                      ))}
                      {phase.upcoming.map((item, upIndex) => (
                        <div key={upIndex} className="text-sm text-gray-600">
                          🔜 {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Milestones */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Milestones</h3>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-8 bg-white rounded-3xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${getStatusColor(milestone.status)}`}
                >
                  <milestone.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl font-bold text-gray-900">{milestone.title}</h4>
                    <span className="text-sm text-gray-500">{milestone.date}</span>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

import { Rocket, Zap, Globe, Users, Target } from "lucide-react"

export function Roadmap() {
  const roadmapData = [
    {
      quarter: "2025 Q1",
      title: "Infrastructure Development",
      status: "completed",
      progress: 100,
      icon: Rocket,
      color: "green",
      achievements: [
        "✅ Core team formation completed",
        "✅ Seed funding $5M",
        "✅ Technical architecture design",
        "✅ Smart contract development",
      ],
      upcoming: [],
    },
    {
      quarter: "2025 Q2",
      title: "Product Development",
      status: "in-progress",
      progress: 75,
      icon: Zap,
      color: "blue",
      achievements: [
        "✅ AI Minting Engine v1.0",
        "✅ Testnet deployment",
        "✅ Community building launch",
        "🔄 Beta version testing",
      ],
      upcoming: ["Mobile app development", "Security audit completion"],
    },
    {
      quarter: "2025 Q3",
      title: "Mainnet Launch",
      status: "upcoming",
      progress: 0,
      icon: Globe,
      color: "purple",
      achievements: [],
      upcoming: [
        "Official mainnet release",
        "Public token sale",
        "Decentralized computing network",
        "DAO governance launch",
      ],
    },
    {
      quarter: "2025 Q4",
      title: "Ecosystem Expansion",
      status: "planned",
      progress: 0,
      icon: Users,
      color: "orange",
      achievements: [],
      upcoming: [
        "Multi-chain deployment support",
        "Enterprise-grade API",
        "Partner integrations",
        "Global market expansion",
      ],
    },
  ]

  const milestones = [
    {
      date: "March 2025",
      title: "Series A Funding Completed",
      description: "$15M funding led by top-tier institutions",
      status: "upcoming",
      icon: Target,
    },
    {
      date: "June 2025",
      title: "Official Mainnet Launch",
      description: "Full feature release, open to public use",
      status: "upcoming",
      icon: Rocket,
    },
    {
      date: "September 2025",
      title: "1 Million Users Milestone",
      description: "Global user count reaches important milestone",
      status: "planned",
      icon: Users,
    },
    {
      date: "December 2025",
      title: "Ecosystem Fully Mature",
      description: "Complete creator economy ecosystem established",
      status: "planned",
      icon: Globe,
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
      green: "bg-green-50 text-green-600 border-green-200",
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
      orange: "bg-orange-50 text-orange-600 border-orange-200",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-medium mb-6">
            <Rocket className="w-4 h-4" />
            <span>Development Roadmap</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Development Blueprint
            </span>{" "}
            & Milestones
          </h2>
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
                  className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${getColorClasses(phase.color)}`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(phase.color)}`}
                  >
                    <phase.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-1">{phase.quarter}</div>
                      <h3 className="text-lg font-bold text-gray-900">{phase.title}</h3>
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
                className="flex items-start gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getStatusColor(milestone.status)}`}
                >
                  <milestone.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{milestone.title}</h4>
                    <span className="text-sm text-gray-500">{milestone.date}</span>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

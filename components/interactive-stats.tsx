"use client"

import { TrendingUp, Users, Zap, Globe, DollarSign, Activity } from "lucide-react"
import { useEffect, useState } from "react"

export function InteractiveStats() {
  const [counters, setCounters] = useState({
    users: 0,
    models: 0,
    nfts: 0,
    volume: 0,
    nodes: 0,
    transactions: 0,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targets = {
      users: 500000,
      models: 1000,
      nfts: 2000000,
      volume: 50000000,
      nodes: 10000,
      transactions: 5000000,
    }

    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    const timers = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timers[Object.keys(targets).indexOf(key)])
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, stepTime)
    })

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [isVisible])

  const stats = [
    {
      icon: Users,
      label: "Global Users",
      value: counters.users.toLocaleString() + "+",
      change: "+12.5%",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200/50",
    },
    {
      icon: Zap,
      label: "AI Models",
      value: counters.models.toLocaleString() + "+",
      change: "+8.3%",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      borderColor: "border-purple-200/50",
    },
    {
      icon: TrendingUp,
      label: "NFTs Minted",
      value: (counters.nfts / 1000000).toFixed(1) + "M+",
      change: "+25.7%",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      borderColor: "border-emerald-200/50",
    },
    {
      icon: DollarSign,
      label: "Trading Volume",
      value: "$" + (counters.volume / 1000000).toFixed(0) + "M+",
      change: "+18.9%",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200/50",
    },
    {
      icon: Globe,
      label: "Computing Nodes",
      value: (counters.nodes / 1000).toFixed(0) + "K+",
      change: "+15.2%",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-cyan-50 to-teal-50",
      borderColor: "border-cyan-200/50",
    },
    {
      icon: Activity,
      label: "On-chain Transactions",
      value: (counters.transactions / 1000000).toFixed(1) + "M+",
      change: "+22.1%",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200/50",
    },
  ]

  return (
    <section
      id="stats-section"
      className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-blue-50 border-b border-slate-200/50"
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
            Real-time Ecosystem Data
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Transparent on-chain data showcasing the real activity and growth potential of the AIMint ecosystem
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative ${stat.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 border ${stat.borderColor} hover:border-slate-300 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform perspective-1000 hover:-rotate-y-1 cursor-pointer`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 3D Shadow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
              />

              {/* Icon */}
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              {/* Value */}
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                  <span className="text-xs text-emerald-600 font-medium">{stat.change}</span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Live Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg" />
          <span className="text-sm text-slate-600">Real-time data updates</span>
          <div className="w-1 h-1 bg-slate-400 rounded-full mx-2" />
          <span className="text-xs text-slate-500">Last updated: just now</span>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Coins, Users, Zap, Shield, Award, TrendingUp, Table } from "lucide-react"

export function Tokenomics() {
  const tokenData = [
    {
      name: "Asset Onboarding and Liquidity Incentives",
      value: 50,
      amount: 500000000,
      color: "#06b6d4",
      tge: "33%",
      cliff: "0 months",
      vesting: "24 months",
      note: "For incentivizing quality assets and providing liquidity incentives",
    },
    {
      name: "Technical Development and Platform Operations",
      value: 15,
      amount: 150000000,
      color: "#3b82f6",
      tge: "20%",
      cliff: "12 months",
      vesting: "24 months",
      note: "Technical development, platform operations and maintenance",
    },
    {
      name: "Compliance and Governance Fund",
      value: 15,
      amount: 150000000,
      color: "#8b5cf6",
      tge: "20%",
      cliff: "12 months",
      vesting: "24 months",
      note: "Ensuring regulatory compliance and governance",
    },
    {
      name: "Foundation Reserve",
      value: 10,
      amount: 100000000,
      color: "#f59e0b",
      tge: "20%",
      cliff: "0 months",
      vesting: "18 months",
      note: "Reserve funds for future ecosystem development",
    },
    {
      name: "Team and Advisors",
      value: 10,
      amount: 100000000,
      color: "#10b981",
      tge: "10%",
      cliff: "12 months",
      vesting: "36 months",
      note: "Team incentives and advisor rewards",
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-200 font-medium mb-4 sm:mb-6 shadow-lg backdrop-blur-sm">
            <Coins className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">Tokenomics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">ANI Token</span>{" "}
            Economic Model
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Building a sustainable token economy ecosystem through scientific release mechanisms and multiple utilities
          </p>
        </div>

        {/* Token Distribution */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Distribution Chart */}
          <Card className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <CardHeader className="p-6 sm:p-8">
              <CardTitle className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                Token Distribution
              </CardTitle>
              <CardDescription className="text-slate-400">Scientific and reasonable token distribution ensures long-term healthy ecosystem development</CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0">
              <div className="h-64 sm:h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tokenData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {tokenData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(30, 41, 59, 0.95)",
                        border: "1px solid rgba(148, 163, 184, 0.3)",
                        borderRadius: "12px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                        color: "white",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {tokenData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-700/30 rounded-xl border border-slate-600/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-medium text-white text-sm sm:text-base">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">{item.value}%</div>
                      <div className="text-xs sm:text-sm text-slate-400">{(item.amount / 1000000000).toFixed(1)}B</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Distribution Details */}
          <Card className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <CardHeader className="p-6 sm:p-8">
              <CardTitle className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                Release Mechanism
              </CardTitle>
              <CardDescription className="text-slate-400">Detailed token release schedule and lock-up mechanism</CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0">
              <div className="space-y-4 sm:space-y-6">
                {tokenData.map((item, index) => (
                  <div key={index} className="bg-slate-700/30 rounded-xl p-4 sm:p-5 border border-slate-600/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <h4 className="font-semibold text-white text-sm sm:text-base">{item.name}</h4>
                      <span className="text-xs sm:text-sm text-slate-400">({item.value}%)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 text-xs sm:text-sm">
                      <div>
                        <span className="text-slate-400">TGE Unlock:</span>
                        <span className="text-cyan-400 font-medium ml-1">{item.tge}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Cliff Period:</span>
                        <span className="text-blue-400 font-medium ml-1">{item.cliff}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Vesting Period:</span>
                        <span className="text-purple-400 font-medium ml-1">{item.vesting}</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300">{item.note}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* TGE Table */}
        <Card className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-10 sm:mb-12">
          <CardHeader className="p-6 sm:p-8">
            <CardTitle className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <Table className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
              TGE Allocation Details
            </CardTitle>
            <CardDescription className="text-slate-400">Comprehensive breakdown of token allocation at Token Generation Event</CardDescription>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 pt-0 overflow-x-auto">
            <div className="min-w-full">
              <table className="min-w-full divide-y divide-slate-700 border border-slate-700 rounded-xl overflow-hidden">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-slate-300">
                      Allocation Category
                    </th>
                    <th scope="col" className="px-4 py-3 text-center text-xs sm:text-sm font-semibold text-slate-300">
                      % of Total Supply
                    </th>
                    <th scope="col" className="px-4 py-3 text-center text-xs sm:text-sm font-semibold text-slate-300">
                      Amount of Token
                    </th>
                    <th scope="col" className="px-4 py-3 text-center text-xs sm:text-sm font-semibold text-slate-300">
                      Unlock % at TGE
                    </th>
                    <th scope="col" className="px-4 py-3 text-center text-xs sm:text-sm font-semibold text-slate-300">
                      Cliff Period (months)
                    </th>
                    <th scope="col" className="px-4 py-3 text-center text-xs sm:text-sm font-semibold text-slate-300">
                      Vesting Period (months)
                    </th>
                    <th scope="col" className="px-4 py-3 text-center text-xs sm:text-sm font-semibold text-slate-300">
                      TGE % of Total Supply
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-slate-800/30 divide-y divide-slate-700">
                  {tokenData.map((item, index) => {
                    // Calculate TGE % of Total Supply
                    const unlockPercentage = parseFloat(item.tge.replace("%", "")) / 100;
                    const tgePercentOfTotal = (item.value * unlockPercentage).toFixed(2);
                    
                    return (
                      <tr key={index} className="hover:bg-slate-700/30">
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="font-medium text-white text-xs sm:text-sm">{item.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-center text-xs sm:text-sm text-white font-semibold">
                          {item.value}%
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-center text-xs sm:text-sm text-slate-300">
                          {(item.amount / 1000000000).toFixed(1)}B
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-center text-xs sm:text-sm text-cyan-400 font-medium">
                          {item.tge}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-center text-xs sm:text-sm text-blue-400 font-medium">
                          {item.cliff}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-center text-xs sm:text-sm text-purple-400 font-medium">
                          {item.vesting}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-center text-xs sm:text-sm text-indigo-400 font-bold">
                          {tgePercentOfTotal}%
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="bg-slate-700/50">
                    <td className="px-4 py-3 whitespace-nowrap font-bold text-white text-xs sm:text-sm">Total</td>
                    <td className="px-4 py-3 whitespace-nowrap text-center font-bold text-white text-xs sm:text-sm">100%</td>
                    <td className="px-4 py-3 whitespace-nowrap text-center font-bold text-white text-xs sm:text-sm">1.0B</td>
                    <td className="px-4 py-3 whitespace-nowrap text-center"></td>
                    <td className="px-4 py-3 whitespace-nowrap text-center"></td>
                    <td className="px-4 py-3 whitespace-nowrap text-center"></td>
                    <td className="px-4 py-3 whitespace-nowrap text-center font-bold text-indigo-400 text-xs sm:text-sm">
                      {tokenData
                        .reduce((total, item) => {
                          const unlockPercentage = parseFloat(item.tge.replace("%", "")) / 100;
                          return total + item.value * unlockPercentage;
                        }, 0)
                        .toFixed(2)}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Utility & Use Cases */}
        <div className="bg-slate-800/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-700/50 backdrop-blur-sm">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Token Utility</h3>
            <p className="text-base sm:text-lg text-slate-400">Multiple application scenarios of ANI tokens in the ecosystem</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Zap,
                title: "Computing Payment",
                description: "Use ANI tokens to pay for AI computing resources with discount benefits",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: TrendingUp,
                title: "Transaction Fees",
                description: "NFT transaction fee discounts, more tokens held means bigger discounts",
                gradient: "from-emerald-500 to-green-500",
              },
              {
                icon: Users,
                title: "Governance Voting",
                description: "Participate in DAO governance and vote on important proposals",
                gradient: "from-purple-500 to-indigo-500",
              },
              {
                icon: Award,
                title: "Creator Incentives",
                description: "Quality content creators receive ANI token rewards",
                gradient: "from-orange-500 to-amber-500",
              },
              {
                icon: Shield,
                title: "Ecosystem Benefits",
                description: "Token holders enjoy platform privileges and priority access",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                icon: Coins,
                title: "Royalty Dividends",
                description: "Token holders share platform transaction royalty income",
                gradient: "from-amber-500 to-orange-500",
              },
            ].map((useCase, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-gradient-to-br ${useCase.gradient} shadow-lg`}
                >
                  <useCase.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{useCase.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

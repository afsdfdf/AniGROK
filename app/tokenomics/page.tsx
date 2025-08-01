"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Coins, Users, Zap, Shield, Award, TrendingUp, ArrowLeft, Table } from "lucide-react"
import Link from "next/link"

export default function TokenomicsPage() {
  const tokenData = [
    {
      name: "Community & Ecosystem",
      value: 50,
      amount: 150000000,
      color: "#8b5cf6",
      tge: "30%",
      cliff: "0 months",
      vesting: "24 months",
      note: "Community airdrops, creator incentives, liquidity mining rewards, and ecosystem fund",
    },
    {
      name: "Team & Development",
      value: 20,
      amount: 60000000,
      color: "#10b981",
      tge: "10%",
      cliff: "12 months",
      vesting: "36 months",
      note: "Core team incentives and product development with long-term commitment",
    },
    {
      name: "Marketing & Partnerships",
      value: 15,
      amount: 45000000,
      color: "#f59e0b",
      tge: "25%",
      cliff: "0 months",
      vesting: "18 months",
      note: "Market promotion, brand partnerships, and exchange listings",
    },
    {
      name: "Strategic Cooperation",
      value: 10,
      amount: 30000000,
      color: "#06b6d4",
      tge: "20%",
      cliff: "6 months",
      vesting: "24 months",
      note: "Strategic partnerships, IP collaborations, and KOL incentives",
    },
    {
      name: "Liquidity Reserve",
      value: 5,
      amount: 15000000,
      color: "#ef4444",
      tge: "50%",
      cliff: "0 months",
      vesting: "12 months",
      note: "DEX liquidity provision, market stability, and potential buyback operations",
    },
  ]

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
                <Coins className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ANI Tokenomics</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-medium mb-6 shadow-lg">
            <Coins className="w-4 h-4" />
                            <span>Economic Model Design</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ANI Token
            </span>{" "}
                          Economic Model
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Dual-purpose token design based on BSC blockchain, combining Meme culture with practical functions to provide economic support for the AniGROK ecosystem
          </p>
          
          {/* Token Key Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-sm text-gray-600">Total Supply</div>
              <div className="text-2xl font-bold text-gray-900">300M</div>
              <div className="text-xs text-purple-600">ANI Tokens</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-sm text-gray-600">Blockchain</div>
              <div className="text-2xl font-bold text-gray-900">BSC</div>
              <div className="text-xs text-purple-600">BEP-20</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-sm text-gray-600">Launch Date</div>
              <div className="text-2xl font-bold text-gray-900">Aug 2</div>
              <div className="text-xs text-purple-600">2025 18:00 GMT+8</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-sm text-gray-600">Type</div>
              <div className="text-2xl font-bold text-gray-900">Meme</div>
              <div className="text-xs text-purple-600">+ Utility</div>
            </div>
          </div>
        </div>

        {/* Token Distribution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Distribution Chart */}
          <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Coins className="w-6 h-6 text-blue-600" />
                Token Distribution
              </CardTitle>
              <CardDescription className="text-gray-600">
                Scientific and reasonable token distribution ensures long-term healthy ecosystem development
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="h-80 mb-6">
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
                      label={({ name, value }) => `${name}: ${value}%`}
                      labelLine={false}
                    >
                      {tokenData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name) => [`${value}%`, name]}
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "12px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {tokenData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-medium text-gray-900">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{item.value}%</div>
                      <div className="text-sm text-gray-600">{(item.amount / 1000000).toFixed(0)}M</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Distribution Details */}
          <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                Release Mechanism
              </CardTitle>
              <CardDescription className="text-gray-600">
                Detailed token release schedule and locking mechanisms
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="space-y-6">
                {tokenData.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-sm text-gray-500">({item.value}%)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-600">TGE Unlock:</span>
                        <span className="text-blue-600 font-medium ml-2">{item.tge}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Cliff Period:</span>
                        <span className="text-purple-600 font-medium ml-2">{item.cliff}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-600">Vesting Period:</span>
                        <span className="text-green-600 font-medium ml-2">{item.vesting}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 bg-white p-3 rounded-lg">{item.note}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* TGE Table */}
        <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl mb-16">
          <CardHeader className="p-8">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Table className="w-6 h-6 text-indigo-600" />
              TGE Allocation Details
            </CardTitle>
            <CardDescription className="text-gray-600">
              Comprehensive breakdown of token allocation at Token Generation Event
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0 overflow-x-auto">
            <div className="min-w-full">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-100 rounded-xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Allocation Category
                    </th>
                    <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      % of Total Supply
                    </th>
                    <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      Amount of Token
                    </th>
                    <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      Unlock % at TGE
                    </th>
                    <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      Cliff Period (months)
                    </th>
                    <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      Vesting Period (months)
                    </th>
                    <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      TGE % of Total Supply
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tokenData.map((item, index) => {
                    // Calculate TGE % of Total Supply
                    const unlockPercentage = parseFloat(item.tge.replace("%", "")) / 100;
                    const tgePercentOfTotal = (item.value * unlockPercentage).toFixed(2);
                    
                    return (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="font-medium text-gray-900">{item.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-semibold">
                          {item.value}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                          {(item.amount / 1000000).toFixed(0)}M
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-blue-600 font-medium">
                          {item.tge}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-purple-600 font-medium">
                          {item.cliff}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-green-600 font-medium">
                          {item.vesting}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-indigo-600 font-bold">
                          {tgePercentOfTotal}%
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900">Total</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center font-bold text-gray-900">100%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center font-bold text-gray-900">300M</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-center"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-center"></td>
                    <td className="px-6 py-4 whitespace-nowrap text-center font-bold text-indigo-600">
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
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 border border-purple-100 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">ANI Token Utility</h3>
            <p className="text-lg text-gray-600">Multiple use cases of ANI tokens in the AniGROK anime NFT ecosystem</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "NFT Generation Payment",
                description: "Pay for AI anime art generation services with ANI tokens",
                color: "purple",
              },
              {
                icon: TrendingUp,
                title: "NFT Market Trading",
                description: "Use ANI as trading currency in the AniGROK NFT marketplace",
                color: "pink",
              },
              {
                icon: Users,
                title: "Community Governance",
                description: "Participate in DAO governance and vote on platform decisions",
                color: "indigo",
              },
              {
                icon: Award,
                title: "Creator Rewards",
                description: "Active creators and community contributors earn ANI token rewards",
                color: "orange",
              },
              {
                icon: Shield,
                title: "Premium Features",
                description: "Access special Ani character interactions and exclusive NFT drops",
                color: "emerald",
              },
              {
                icon: Coins,
                title: "Staking Benefits",
                description: "Stake ANI tokens for platform fee discounts and priority access",
                color: "amber",
              },
            ].map((useCase, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg ${
                    useCase.color === "purple"
                      ? "bg-gradient-to-br from-purple-500 to-purple-600"
                      : useCase.color === "pink"
                        ? "bg-gradient-to-br from-pink-500 to-pink-600"
                        : useCase.color === "indigo"
                          ? "bg-gradient-to-br from-indigo-500 to-indigo-600"
                          : useCase.color === "orange"
                            ? "bg-gradient-to-br from-orange-500 to-amber-600"
                            : useCase.color === "emerald"
                              ? "bg-gradient-to-br from-emerald-500 to-emerald-600"
                              : "bg-gradient-to-br from-amber-500 to-amber-600"
                  }`}
                >
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h4>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

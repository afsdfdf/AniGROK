"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  FileText,
  Brain,
  Shield,
  Coins,
  Globe,
  Target,
  Award,
  Lock,
  Database,
  Code,
  Layers,
  BarChart3,
  LineChart,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts"

export default function WhitepaperPage() {
  const tokenDistribution = [
    { name: "Asset Onboarding and Liquidity Incentives", value: 50, color: "#06b6d4" },
    { name: "Technical Development and Platform Operations", value: 15, color: "#3b82f6" },
    { name: "Compliance and Governance Fund", value: 15, color: "#8b5cf6" },
    { name: "Foundation Reserve", value: 10, color: "#f59e0b" },
    { name: "Team and Advisors", value: 10, color: "#10b981" },
  ]

  const adoptionData = [
    { year: "2025", users: 100000, revenue: 5000000 },
    { year: "2026", users: 500000, revenue: 25000000 },
    { year: "2027", users: 2000000, revenue: 100000000 },
    { year: "2028", users: 5000000, revenue: 250000000 },
    { year: "2029", users: 10000000, revenue: 500000000 },
  ]

  const competitorData = [
    { name: "AniGROK", aiCapability: 95, web3Integration: 90, userExperience: 88, scalability: 92 },
    { name: "OpenSea", aiCapability: 20, web3Integration: 85, userExperience: 80, scalability: 75 },
    { name: "MidJourney", aiCapability: 90, web3Integration: 10, userExperience: 85, scalability: 70 },
    { name: "SuperRare", aiCapability: 30, web3Integration: 80, userExperience: 75, scalability: 65 },
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
                <FileText className="w-5 h-5 text-white" />
              </div>
            <span className="text-xl font-bold text-gray-900">AniGROK Whitepaper</span>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl">
            Download PDF
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-6 shadow-lg">
            <FileText className="w-4 h-4" />
            <span>Technical Whitepaper v2.0</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AniGROK</span>
            <br />
            <span className="text-3xl sm:text-4xl text-gray-700">AI-Driven Anime NFT Platform</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A revolutionary platform that transforms creative prompts into unique anime-style NFTs using GROK AI technology on BSC blockchain with 300 million ANI tokens
          </p>
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-500">
            <span>Release Date: January 2025</span>
            <span>Version: 2.0</span>
            <span>Language: English</span>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-16 bg-white border border-gray-200 rounded-3xl shadow-xl">
          <CardHeader className="p-8">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-600" />
              Table of Contents
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { section: "1. Executive Summary", page: "3", id: "executive-summary" },
                { section: "2. Project Vision & Mission", page: "5", id: "vision-mission" },
                { section: "3. Market Analysis", page: "8", id: "market-analysis" },
                { section: "4. Technical Architecture", page: "12", id: "technical-architecture" },
                { section: "5. Product Features", page: "18", id: "product-features" },
                { section: "6. Token Economics", page: "24", id: "token-economics" },
                { section: "7. Governance Mechanism", page: "30", id: "governance" },
                { section: "8. Development Roadmap", page: "34", id: "roadmap" },
                { section: "9. Team Introduction", page: "38", id: "team" },
                { section: "10. Legal Compliance", page: "42", id: "legal-compliance" },
                { section: "11. Appendix", page: "45", id: "appendix" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex justify-between items-center p-3 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer text-left w-full border-none bg-transparent"
                >
                  <span className="font-medium text-gray-900 hover:text-blue-600">{item.section}</span>
                  <span className="text-gray-500">{item.page}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Executive Summary */}
        <Card id="executive-summary" className="mb-16 bg-white border border-gray-200 rounded-3xl shadow-xl">
          <CardHeader className="p-8">
            <CardTitle className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Target className="w-8 h-8 text-blue-600" />
              1. Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h3>
              <p className="text-gray-700 leading-relaxed">
                AniGROK is the world's first decentralized creative ecosystem that deeply integrates AI-generated content with blockchain technology. Through the revolutionary concept of "Algorithm as Asset", we tokenize AI models, creative processes, and generated content, building a complete creator economy loop.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">AI-Driven Creation</h4>
                <p className="text-gray-600 text-sm">Support for multi-modal AI generation including text, images, audio, and video</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Blockchain Rights</h4>
                <p className="text-gray-600 text-sm">Automatic rights confirmation via smart contracts, instant NFT minting</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Coins className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Economic Incentives</h4>
                <p className="text-gray-600 text-sm">Multi-tier revenue distribution, continuous value creation</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-600" />
                Core Advantages
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Technology Leadership:</strong> World's first AI+Web3 deep integration architecture with 12 core technology patents
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Complete Ecosystem:</strong> Comprehensive ecosystem covering creation, rights confirmation, trading, and governance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Economic Sustainability:</strong> Multiple revenue mechanisms ensure long-term healthy development of the ecosystem
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Market Analysis */}
        <Card id="market-analysis" className="mb-16 bg-white border border-gray-200 rounded-3xl shadow-xl">
          <CardHeader className="p-8">
            <CardTitle className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-green-600" />
              3. Market Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Market Size</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">AI-Generated Content Market</span>
                      <span className="text-blue-600 font-bold">$126B</span>
                    </div>
                    <div className="text-sm text-gray-600">Projected 2025 market size</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">NFT Market</span>
                      <span className="text-purple-600 font-bold">$35B</span>
                    </div>
                    <div className="text-sm text-gray-600">2024 total trading volume</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Creator Economy</span>
                      <span className="text-green-600 font-bold">$104B</span>
                    </div>
                    <div className="text-sm text-gray-600">Global creator economy size</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Analysis</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={competitorData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="aiCapability" fill="#3b82f6" name="AI Capability" />
                      <Bar dataKey="web3Integration" fill="#8b5cf6" name="Web3 Integration" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Opportunities</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Technology Convergence Trend</h4>
                  <p className="text-gray-600 text-sm">Deep integration of AI and blockchain technologies will create new business models</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Creator Demand</h4>
                  <p className="text-gray-600 text-sm">Growing demand from creators for copyright protection and revenue distribution</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Regulatory Clarity</h4>
                  <p className="text-gray-600 text-sm">Gradual clarification of regulatory policies for AI and blockchain across countries</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Architecture */}
        <Card id="technical-architecture" className="mb-16 bg-white border border-gray-200 rounded-3xl shadow-xl">
          <CardHeader className="p-8">
            <CardTitle className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Layers className="w-8 h-8 text-purple-600" />
              4. Technical Architecture
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Layered Architecture Design</h3>
              <p className="text-gray-700 mb-6">AniGROK adopts a modular layered architecture to ensure system scalability, security, and high performance.</p>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <Image
                    src="/images/technical-architecture.png"
                    alt="AniGROK Technical Architecture"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  layer: "Application Layer",
                  icon: Globe,
                  color: "blue",
                  description: "User interfaces, DApps, mobile applications",
                  components: ["Web Application", "Mobile App", "API Gateway", "Developer Tools"],
                },
                {
                  layer: "Business Logic Layer",
                  icon: Code,
                  color: "green",
                  description: "Core business logic, smart contracts",
                  components: ["AI Minting Engine", "NFT Contracts", "Governance Contracts", "Revenue Distribution"],
                },
                {
                  layer: "AI Service Layer",
                  icon: Brain,
                  color: "purple",
                  description: "AI model services, compute scheduling",
                  components: ["Model Management", "Inference Service", "Compute Scheduling", "Quality Assessment"],
                },
                {
                  layer: "Blockchain Layer",
                  icon: Shield,
                  color: "orange",
                  description: "Consensus mechanism, data storage",
                  components: ["Ethereum Mainnet", "Polygon L2", "IPFS Storage", "Oracle Services"],
                },
                {
                  layer: "Infrastructure Layer",
                  icon: Database,
                  color: "gray",
                  description: "Network, storage, computing resources",
                  components: ["Cloud Computing", "CDN Acceleration", "Load Balancing", "Monitoring & Alerting"],
                },
              ].map((layer, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        layer.color === "blue"
                          ? "bg-gradient-to-br from-blue-500 to-blue-600"
                          : layer.color === "green"
                            ? "bg-gradient-to-br from-emerald-500 to-green-600"
                            : layer.color === "purple"
                              ? "bg-gradient-to-br from-purple-500 to-indigo-600"
                              : layer.color === "orange"
                                ? "bg-gradient-to-br from-orange-500 to-amber-600"
                                : "bg-gradient-to-br from-gray-500 to-gray-600"
                      }`}
                    >
                      <layer.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{layer.layer}</h4>
                      <p className="text-gray-600 mb-4">{layer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.components.map((component, compIndex) => (
                          <span key={compIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-red-600" />
                Security Mechanisms
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Contract Security</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Multi-signature mechanism</li>
                    <li>• Time-lock control</li>
                    <li>• Hierarchical permission management</li>
                    <li>• Third-party security audits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Security</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• End-to-end encryption</li>
                    <li>• Distributed storage</li>
                    <li>• Access control</li>
                    <li>• Privacy protection</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Token Economics */}
        <Card id="token-economics" className="mb-16 bg-white border border-gray-200 rounded-3xl shadow-xl">
          <CardHeader className="p-8">
            <CardTitle className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Coins className="w-8 h-8 text-yellow-600" />
              6. Token Economics
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Token Distribution</h3>
                <div className="h-64 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={tokenDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {tokenDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2">
                  {tokenDistribution.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="font-medium text-gray-900">{item.name}</span>
                      </div>
                      <span className="font-bold text-gray-900">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Value Capture Mechanism</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Transaction Fees</h4>
                    <p className="text-gray-700 text-sm">2.5% fee on each NFT transaction, with 1% burned and 1.5% distributed to token holders</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Computing Service Fees</h4>
                    <p className="text-gray-700 text-sm">AI computing service fees: 50% for node rewards, 30% for buyback and burn, 20% for ecosystem development</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Royalty Income</h4>
                    <p className="text-gray-700 text-sm">NFT secondary market trading royalties: 70% to creators, 20% to platform, 10% to token holders</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Governance Rights</h4>
                    <p className="text-gray-700 text-sm">Token holders enjoy proposal and voting rights, participating in ecosystem governance decisions</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Release Mechanism */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-indigo-600" />
                Release Mechanism
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-100 rounded-xl mb-4">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Allocation Category
                      </th>
                      <th scope="col" className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                        % of Total Supply
                      </th>
                      <th scope="col" className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                        Amount of Token
                      </th>
                      <th scope="col" className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                        Unlock % at TGE
                      </th>
                      <th scope="col" className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                        Cliff Period
                      </th>
                      <th scope="col" className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                        Vesting Period
                      </th>
                      <th scope="col" className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                        TGE % of Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#06b6d4" }} />
                          <span className="font-medium text-gray-900">Asset Onboarding and Liquidity Incentives</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 font-semibold">50%</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900">150M</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-blue-600 font-medium">33%</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-purple-600 font-medium">0 months</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-green-600 font-medium">24 months</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-indigo-600 font-bold">16.5%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#3b82f6" }} />
                          <span className="font-medium text-gray-900">Technical Development and Platform Operations</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 font-semibold">15%</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900">45M</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-blue-600 font-medium">20%</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-purple-600 font-medium">12 months</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-green-600 font-medium">24 months</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-indigo-600 font-bold">3.0%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#8b5cf6" }} />
                          <span className="font-medium text-gray-900">Compliance and Governance Fund</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 font-semibold">15%</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900">45M</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-blue-600 font-medium">20%</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-purple-600 font-medium">12 months</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-green-600 font-medium">24 months</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-indigo-600 font-bold">3.0%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
                          <span className="font-medium text-gray-900">Foundation Reserve</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 font-semibold">10%</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900">30M</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-blue-600 font-medium">20%</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-purple-600 font-medium">0 months</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-green-600 font-medium">18 months</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-indigo-600 font-bold">2.0%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#10b981" }} />
                          <span className="font-medium text-gray-900">Team and Advisors</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900 font-semibold">10%</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-900">30M</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-blue-600 font-medium">10%</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-purple-600 font-medium">12 months</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-green-600 font-medium">36 months</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-indigo-600 font-bold">1.0%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap font-bold text-gray-900">Total</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center font-bold text-gray-900">100%</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center font-bold text-gray-900">300M</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center"></td>
                      <td className="px-4 py-3 whitespace-nowrap text-center"></td>
                      <td className="px-4 py-3 whitespace-nowrap text-center"></td>
                      <td className="px-4 py-3 whitespace-nowrap text-center font-bold text-indigo-600">25.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-sm text-gray-700">
                <p className="mb-2">
                  <strong>Total Token Supply: 300,000,000 (300M) ANI Tokens</strong>
                </p>
                <p className="mb-2">
                  <strong>Initial Circulating Supply: 76,500,000 (76.5M) ANI Tokens</strong> - 25.5% of total supply unlocked at Token Generation Event (TGE)
                </p>
                <p>
                  The token release schedule is designed to ensure long-term project sustainability and ecosystem growth while providing sufficient liquidity for market operations.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inflation and Deflation Mechanisms</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">Deflationary Mechanisms</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Transaction fee burning: 1% of tokens permanently burned on each transaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Computing fee buyback: 30% of computing service fees for buyback and burn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Governance burning: Community voting decides additional burning mechanisms</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Issuance Mechanisms</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Creator incentives: High-quality content creators receive token rewards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Node rewards: Computing power providers receive mining rewards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Ecosystem development: Annual issuance rate not exceeding 2% for ecosystem building</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Growth Projections */}
        <Card id="growth-projections" className="mb-16 bg-white border border-gray-200 rounded-3xl shadow-xl">
          <CardHeader className="p-8">
            <CardTitle className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <LineChart className="w-8 h-8 text-green-600" />
              Growth Projections
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-8">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={adoptionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip
                    formatter={(value, name) => [
                      name === "users"
                        ? `${(value as number).toLocaleString()} Users`
                        : `$${(value as number).toLocaleString()} Revenue`,
                      name === "users" ? "User Count" : "Platform Revenue",
                    ]}
                  />
                  <Line yAxisId="left" type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} name="users" />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    strokeWidth={3}
                    name="revenue"
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
                <div className="text-gray-700">Expected Users by 2029</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-2">$500M</div>
                <div className="text-gray-700">Expected Annual Revenue by 2029</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">150%</div>
                <div className="text-gray-700">Compound Annual Growth Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Competitive Analysis */}
        <Card id="competitive-analysis" className="mb-16 bg-white border border-gray-200 rounded-3xl shadow-xl">
          <CardHeader className="p-8">
            <CardTitle className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-indigo-600" />
              Competitive Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-8">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={competitorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="aiCapability" fill="#3b82f6" name="AI Capability" />
                  <Bar dataKey="web3Integration" fill="#10b981" name="Web3 Integration" />
                  <Bar dataKey="userExperience" fill="#f59e0b" name="User Experience" />
                  <Bar dataKey="scalability" fill="#8b5cf6" name="Scalability" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3">Technical Advantages</h4>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• Leading multi-modal AI generation capabilities</li>
                  <li>• Deep Web3 integration architecture</li>
                  <li>• Decentralized computing network</li>
                  <li>• Automatic smart contract rights confirmation</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <h4 className="font-bold text-green-900 mb-3">Ecosystem Advantages</h4>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Complete creator economy loop</li>
                  <li>• Multi-tier incentive mechanisms</li>
                  <li>• Community governance participation</li>
                  <li>• Cross-chain compatibility</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                <h4 className="font-bold text-purple-900 mb-3">Market Positioning</h4>
                <ul className="space-y-2 text-purple-800 text-sm">
                  <li>• First deep AI+Web3 integration</li>
                  <li>• Algorithm-as-asset pioneer</li>
                  <li>• Global creator community</li>
                  <li>• Enterprise-grade service capabilities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technology Roadmap */}
        <Card id="technology-roadmap" className="mb-16 bg-white border border-gray-200 rounded-3xl shadow-xl">
          <CardHeader className="p-8">
            <CardTitle className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Code className="w-8 h-8 text-emerald-600" />
              Technology Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q1</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">2025 Q1</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mainnet launch</li>
                  <li>• Basic AI model deployment</li>
                  <li>• NFT minting functionality</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q2</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">2025 Q2</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multi-modal AI support</li>
                  <li>• Decentralized computing</li>
                  <li>• Mobile applications</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q3</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">2025 Q3</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• DAO governance launch</li>
                  <li>• API development platform</li>
                  <li>• Enterprise features</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Q4</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">2025 Q4</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cross-chain bridging</li>
                  <li>• AI model marketplace</li>
                  <li>• Global deployment</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Long-term Vision (2026-2028)</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technology Innovation</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• AGI integration</li>
                    <li>• Quantum computing support</li>
                    <li>• Brain-computer interface exploration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ecosystem Expansion</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Metaverse integration</li>
                    <li>• Educational platform</li>
                    <li>• Enterprise solutions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Market Expansion</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Global compliance</li>
                    <li>• Institutional adoption</li>
                    <li>• Industry standard setting</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card id="conclusion" className="mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl shadow-xl">
          <CardContent className="p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              AniGROK is committed to building the world's largest AI+Web3 creative ecosystem. Through technological innovation and economic incentives, 
              we enable every creator to receive the value they deserve in the digital age. We believe that the concept of "Algorithm as Asset" 
              will redefine the value of creation and forge a bright future for digital creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold">
                Download Full Whitepaper
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl font-semibold"
              >
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 AniGROK Foundation. This whitepaper is for informational purposes only and does not constitute investment advice.</p>
          <p className="mt-2">Last Updated: January 2025 | Version: 2.0 | Language: English</p>
        </div>
      </div>
    </main>
  )
}

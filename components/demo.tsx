"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Sparkles, TrendingUp, Users } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Demo() {
  const [activeTab, setActiveTab] = useState(0)

  const demos = [
    {
      title: "AI Art Creation",
      description: "From text description to exquisite artwork",
      steps: [
        { title: "Input Creativity", desc: "Describe the artwork you want", time: "1s" },
        { title: "AI Generation", desc: "Multi-model collaborative creation", time: "2s" },
        { title: "Quality Enhancement", desc: "Automatic post-processing enhancement", time: "1s" },
        { title: "NFT Minting", desc: "One-click on-chain copyright", time: "3s" },
      ],
      result: "Unique digital art NFT",
    },
    {
      title: "Music Creation",
      description: "AI-generated original music and copyright NFT minting",
      steps: [
        { title: "Style Selection", desc: "Choose music style and emotion", time: "1s" },
        { title: "Melody Generation", desc: "AI creates original melodies", time: "5s" },
        { title: "Arrangement Production", desc: "Automatic orchestration and mixing", time: "3s" },
        { title: "Copyright Minting", desc: "Music copyright NFT creation", time: "2s" },
      ],
      result: "Original music work + Copyright NFT",
    },
    {
      title: "Code Generation",
      description: "AI programming assistant generates smart contracts",
      steps: [
        { title: "Requirement Description", desc: "Describe contract functionality requirements", time: "1s" },
        { title: "Code Generation", desc: "AI writes smart contracts", time: "3s" },
        { title: "Security Audit", desc: "Automatic security checks", time: "2s" },
        { title: "Deploy On-chain", desc: "One-click deployment to blockchain", time: "5s" },
      ],
      result: "Audited smart contract",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 font-medium mb-6">
            <Play className="w-4 h-4" />
            <span>Product Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Experience{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">AniGROK</span>{" "}
            in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understand how AniGROK transforms your creative ideas into valuable digital assets through real
            demonstrations of our core platform features.
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 bg-gray-50 p-2 rounded-2xl">
            {demos.map((demo, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTab === index
                    ? "bg-white shadow-lg text-gray-900"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                <div className="font-semibold mb-1">{demo.title}</div>
                <div className="text-sm opacity-75">{demo.description}</div>
              </button>
            ))}
          </div>

          {/* Demo Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Process Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{demos[activeTab].title} Process</h3>

              {demos[activeTab].steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <span className="text-sm text-blue-600 font-medium">{step.time}</span>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}

              {/* Result */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Final Result</span>
                </div>
                <p className="text-gray-700">{demos[activeTab].result}</p>
              </div>
            </div>

            {/* Visual Demo */}
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100">
                {/* Transparent Logo in top right */}
                <div className="absolute top-4 right-4 z-10">
                  <Image
                    src="/logo1.png"
                    alt="AniGROK Transparent Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 opacity-30 hover:opacity-50 transition-opacity duration-300"
                  />
                </div>
                
                {/* Demo Interface */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/logo1.png"
                        alt="AI Creation Studio Logo"
                        width={28}
                        height={28}
                        className="w-7 h-7"
                      />
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">AniGROK Studio</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Creative Input</div>
                    <div className="h-20 bg-gray-50 rounded-lg flex items-center justify-center text-gray-500">
                      {demos[activeTab].title} Creation Area
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Processing Progress</span>
                      <span className="text-blue-600 font-medium">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full w-3/4 transition-all duration-1000"></div>
                    </div>
                  </div>

                  {/* Output Preview */}
                  <div className="h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-gray-700 font-medium">AI Generation Preview</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl">
                    Mint as NFT
                  </Button>
                </div>
              </Card>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                {/* Transparent Logo */}
                <div className="absolute top-2 right-2">
                  <Image
                    src="/logo1.png"
                    alt="AniGROK Transparent Logo"
                    width={24}
                    height={24}
                    className="w-4 h-4 opacity-20"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Success Rate</div>
                    <div className="text-lg font-bold text-green-600">99.9%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                {/* Transparent Logo */}
                <div className="absolute top-2 right-2">
                  <Image
                    src="/logo1.png"
                    alt="AniGROK Transparent Logo"
                    width={24}
                    height={24}
                    className="w-4 h-4 opacity-20"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Platform Status</div>
                    <div className="text-lg font-bold text-blue-600">Building</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 w-5 h-5" />
              Experience Full Demo Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

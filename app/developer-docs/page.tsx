import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Book, Zap, CheckCircle, Download, ExternalLink, Copy, Terminal } from "lucide-react"
import Image from "next/image"

export default function DeveloperDocsPage() {
  const gettingStarted = [
    {
      title: "Quick Start",
      description: "Get up and running with AniGROK in 5 minutes",
      icon: Zap,
      time: "5 min",
      link: "#quick-start"
    },
    {
      title: "SDK Installation", 
      description: "Install AniGROK SDK for your preferred language",
      icon: Download,
      time: "2 min",
      link: "#sdk-installation"
    },
    {
      title: "Authentication",
      description: "Set up API keys and authentication",
      icon: CheckCircle,
      time: "3 min", 
      link: "#authentication"
    },
    {
      title: "First API Call",
      description: "Make your first successful API request",
      icon: Code,
      time: "5 min",
      link: "#first-api-call"
    },
  ]

  const documentation = [
    {
      title: "AI Minting API",
      description: "Generate and mint AI content as NFTs",
      sections: ["Text-to-Image", "Text-to-Video", "Audio Generation", "NFT Minting"],
      icon: "🎨",
    },
    {
      title: "Computing Network API",
      description: "Access distributed computing resources",
      sections: ["Task Submission", "Resource Allocation", "Result Retrieval", "Billing"],
      icon: "⚡",
    },
    {
      title: "Model Protocol API",
      description: "Upload and manage AI models",
      sections: ["Model Upload", "Version Control", "Revenue Tracking", "Quality Assessment"],
      icon: "🤖",
    },
    {
      title: "DAO Governance API",
      description: "Participate in platform governance",
      sections: ["Proposal Creation", "Voting System", "Token Management", "Delegation"],
      icon: "🏛️",
    },
    {
      title: "Blockchain Integration",
      description: "Smart contract interactions",
      sections: ["Contract Deployment", "Transaction Handling", "Event Listening", "Gas Optimization"],
      icon: "⛓️",
    },
    {
      title: "Webhooks & Events",
      description: "Real-time notifications and events",
      sections: ["Event Types", "Webhook Setup", "Payload Structure", "Security"],
      icon: "🔔",
    },
  ]

  const codeExamples = [
    {
      title: "JavaScript/TypeScript",
      language: "javascript",
      code: `import { AniGROKSDK } from '@anigrok/sdk';

// Initialize the SDK with your API key
const anigrok = new AniGROKSDK({
  apiKey: 'YOUR_API_KEY',
  environment: 'production'
});

// Generate an image
const image = await anigrok.generate({
  prompt: 'A futuristic city with flying cars and neon lights',
  model: 'stable-diffusion-xl',
  enhancePrompt: true,
  width: 1024,
  height: 1024
});

// Mint the generated image
const txHash = await anigrok.mint({
  image: image.url,
  name: 'Future City',
  description: 'A futuristic cityscape with neon lights',
  royaltyBps: 500 // 5% royalties
});

console.log(\`Minted successfully: \${txHash}\`);`
    },
    {
      title: "Python",
      language: "python", 
      code: `from anigrok import AniGROKSDK
import asyncio

# Initialize the SDK with your API key
anigrok = AniGROKSDK(
    api_key="YOUR_API_KEY",
    environment="production"
)

async def generate_and_mint():
    # Generate an image
    image = await anigrok.generate(
        prompt="A futuristic city with flying cars and neon lights",
        model="stable-diffusion-xl",
        enhance_prompt=True,
        width=1024,
        height=1024
    )
    
    # Mint the generated image
    tx_hash = await anigrok.mint(
        image=image.url,
        name="Future City",
        description="A futuristic cityscape with neon lights",
        royalty_bps=500  # 5% royalties
    )
    
    print(f"Minted successfully: {tx_hash}")

# Run the async function
asyncio.run(generate_and_mint())`
    },
    {
      title: "cURL",
      language: "bash",
      code: `# Generate AI artwork
curl -X POST "https://api.anigrok.ai/v1/ai/generate" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A cyberpunk cat in space",
    "style": "digital-art",
    "resolution": "1024x1024"
  }'

# Mint as NFT  
curl -X POST "https://api.anigrok.ai/v1/nft/mint" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image_url": "https://...",
    "metadata": {
      "name": "Cyberpunk Cat",
      "description": "AI-generated artwork"
    }
  }'`
    }
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
                <Book className="w-4 h-4" />
                <span>Developer Documentation</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  <span className="block">Developer</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Docs
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                  Build powerful AI applications with our comprehensive APIs
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Complete documentation, SDKs, and examples to help you integrate AniGROK's AI generation, computing network, and blockchain features into your applications.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  API Reference
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                {[
                  { label: "API Endpoints", value: "50+" },
                  { label: "SDK Languages", value: "6" },
                  { label: "Code Examples", value: "100+" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-blue-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Code Editor Demo */}
              <div className="relative bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                {/* Transparent Logo */}
                <div className="absolute top-4 right-4 z-10">
                  <Image
                    src="/logo1.png"
                    alt="AniGROK Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 opacity-30 hover:opacity-50 transition-opacity duration-300"
                  />
                </div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">AniGROK SDK</span>
                      </div>
                      <div className="text-sm text-gray-400">Interactive Code Example</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Code Content */}
                <div className="space-y-4">
                  <div className="text-green-400 text-sm">// Quick Start Example</div>
                  <div className="font-mono text-sm space-y-2">
                    <div><span className="text-purple-400">import</span> <span className="text-yellow-300">&#123; AniGROKSDK &#125;</span> <span className="text-purple-400">from</span> <span className="text-green-300">'@anigrok/sdk'</span></div>
                    <div className="text-gray-400">// Initialize SDK</div>
                    <div><span className="text-blue-400">const</span> <span className="text-white">anigrok</span> = <span className="text-purple-400">new</span> <span className="text-yellow-300">AniGROKSDK</span>&#40;&#123;</div>
                    <div className="ml-4"><span className="text-red-400">apiKey</span>: <span className="text-green-300">'your-api-key'</span>,</div>
                    <div className="ml-4"><span className="text-red-400">environment</span>: <span className="text-green-300">'production'</span></div>
                    <div>&#125;&#41;</div>
                    <div className="text-gray-400 mt-4">// Generate AI artwork</div>
                    <div><span className="text-blue-400">const</span> <span className="text-white">artwork</span> = <span className="text-purple-400">await</span> <span className="text-white">anigrok</span>.<span className="text-yellow-300">generate</span>&#40;&#123;</div>
                    <div className="ml-4"><span className="text-red-400">prompt</span>: <span className="text-green-300">'A cyberpunk cat'</span>,</div>
                    <div className="ml-4"><span className="text-red-400">model</span>: <span className="text-green-300">'stable-diffusion-xl'</span></div>
                    <div>&#125;&#41;</div>
                  </div>

                  {/* Terminal Output */}
                  <div className="bg-black bg-opacity-50 rounded-lg p-4 mt-4">
                    <div className="text-green-400 text-xs mb-2">✓ Image generated successfully</div>
                    <div className="text-blue-400 text-xs">→ NFT minting in progress...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Getting{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Started
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Follow our step-by-step guide to integrate AniGROK into your application
            </p>
          </div>

          {/* Getting Started Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gettingStarted.map((item, index) => (
              <Card
                key={index}
                className="group border-2 border-slate-200/50 hover:border-blue-300 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                <CardHeader className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2">
                    {item.title}
                  </CardTitle>
                  <div className="text-sm text-blue-600 font-medium mb-3">{item.time}</div>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              API{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Documentation
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive guides for all AniGROK platform features and integrations
            </p>
          </div>

          {/* Documentation Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentation.map((doc, index) => (
              <Card
                key={index}
                className="group border-2 border-slate-200/50 hover:border-blue-300 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-105 bg-white cursor-pointer"
              >
                <CardHeader className="p-6">
                  <div className="text-4xl mb-4">{doc.icon}</div>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2">
                    {doc.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed mb-4">
                    {doc.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {doc.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-slate-700">{section}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Code{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Examples
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready-to-use code examples in multiple programming languages
            </p>
          </div>

          {/* Code Examples */}
          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between p-6 border-b border-gray-700">
                  <div>
                    <CardTitle className="text-white">{example.title}</CardTitle>
                    <CardDescription className="text-gray-400">AniGROK SDK Example</CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <pre className="text-sm text-gray-300 p-6 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Full Documentation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 
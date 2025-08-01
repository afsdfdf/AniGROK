"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Wifi, WifiOff } from "lucide-react"
import { AniChat } from "@/components/ani-chat"

export default function TestChatPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [networkStatus, setNetworkStatus] = useState<'checking' | 'online' | 'offline'>('checking')

  const checkNetwork = async () => {
    setNetworkStatus('checking')
    try {
      const response = await fetch('/api/chat', {
        method: 'GET',
      })
      setNetworkStatus(response.ok ? 'online' : 'offline')
    } catch (error) {
      setNetworkStatus('offline')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="container mx-auto max-w-4xl">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              AniGROK Chat Function Test
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Network Status */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                {networkStatus === 'online' && <Wifi className="w-5 h-5 text-green-500" />}
                {networkStatus === 'offline' && <WifiOff className="w-5 h-5 text-red-500" />}
                {networkStatus === 'checking' && <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />}
                <span className="font-medium">
                  Network Status: {
                    networkStatus === 'online' ? 'Online' :
                    networkStatus === 'offline' ? 'Offline' : 'Detecting...'
                  }
                </span>
              </div>
              <Button onClick={checkNetwork} variant="outline" size="sm">
                Detect Network
              </Button>
            </div>

            {/* Chat Test */}
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold">Test Ani Chat Function</h3>
              <p className="text-gray-600">
                Even when there are network connection issues, Ani will use local responses to chat with you
              </p>
              <Button 
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Chat with Ani
              </Button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">✨ Smart Response</h4>
                <p className="text-sm text-gray-600">
                  Keyword-based intelligent responses, normal conversation even without network
                </p>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg">
                <h4 className="font-semibold text-pink-800 mb-2">🤖 Gemini AI</h4>
                <p className="text-sm text-gray-600">
                  When network is normal, uses Gemini AI for richer conversation experience
                </p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">🌐 Offline Mode</h4>
                <p className="text-sm text-gray-600">
                  Automatically switches to offline mode when network is abnormal, ensuring user experience
                </p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">🎌 Character Consistency</h4>
                <p className="text-sm text-gray-600">
                  Regardless of mode, Ani maintains anime character consistency
                </p>
              </div>
            </div>

            {/* Test Suggestions */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">💡 Test Suggestions</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Try saying "hello" or greetings</li>
                <li>• Ask about NFT or character creation</li>
                <li>• Ask about AniGROK platform features</li>
                <li>• Get responses even with network issues</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Chat Modal */}
        <AniChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </main>
  )
}
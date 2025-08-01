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
              AniGROK 聊天功能测试
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
                  网络状态: {
                    networkStatus === 'online' ? '在线' :
                    networkStatus === 'offline' ? '离线' : '检测中...'
                  }
                </span>
              </div>
              <Button onClick={checkNetwork} variant="outline" size="sm">
                检测网络
              </Button>
            </div>

            {/* Chat Test */}
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold">测试Ani聊天功能</h3>
              <p className="text-gray-600">
                即使在网络连接有问题的情况下，Ani也会使用本地响应与你聊天
              </p>
              <Button 
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                开始与Ani聊天
              </Button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">✨ 智能响应</h4>
                <p className="text-sm text-gray-600">
                  基于关键词的智能响应，即使无网络也能正常对话
                </p>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg">
                <h4 className="font-semibold text-pink-800 mb-2">🤖 Gemini AI</h4>
                <p className="text-sm text-gray-600">
                  网络正常时会使用Gemini AI提供更丰富的对话体验
                </p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">🌐 离线模式</h4>
                <p className="text-sm text-gray-600">
                  网络异常时自动切换到离线模式，保证用户体验
                </p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">🎌 角色一致</h4>
                <p className="text-sm text-gray-600">
                  无论何种模式，Ani都会保持anime角色的一致性
                </p>
              </div>
            </div>

            {/* Test Suggestions */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">💡 测试建议</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 试试说"你好"或"hello"</li>
                <li>• 询问关于NFT或角色创作的问题</li>
                <li>• 问问AniGROK平台的功能</li>
                <li>• 即使网络有问题也能得到回应</li>
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
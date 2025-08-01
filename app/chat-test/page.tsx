"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ChatTestPage() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const testChat = async () => {
    if (!message.trim()) return
    
    setLoading(true)
    setError('')
    setResponse('')
    
    try {
      console.log('🚀 Testing chat with message:', message)
      
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message.trim() }),
      })
      
      console.log('📊 Response status:', res.status)
      console.log('📊 Response headers:', Object.fromEntries(res.headers.entries()))
      
      const data = await res.json()
      console.log('📦 Response data:', data)
      
      if (res.ok && data.success) {
        setResponse(data.response)
        console.log('✅ Chat success:', data.response)
      } else {
        setError(data.error || `HTTP ${res.status}`)
        console.error('❌ Chat error:', data)
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMsg)
      console.error('💥 Network error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">聊天API测试页面</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">测试消息：</label>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="输入测试消息..."
            onKeyPress={(e) => e.key === 'Enter' && testChat()}
          />
        </div>
        
        <Button onClick={testChat} disabled={loading || !message.trim()}>
          {loading ? '发送中...' : '发送测试'}
        </Button>
        
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded">
            <h3 className="font-semibold text-red-800">错误：</h3>
            <p className="text-red-600">{error}</p>
          </div>
        )}
        
        {response && (
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <h3 className="font-semibold text-green-800">Ani的回复：</h3>
            <p className="text-green-600">{response}</p>
          </div>
        )}
        
        <div className="mt-8 p-4 bg-gray-50 border rounded">
          <h3 className="font-semibold mb-2">测试建议：</h3>
          <div className="space-y-1 text-sm">
            <button 
              className="block text-blue-600 hover:underline"
              onClick={() => setMessage("你好Ani")}
            >
              测试问候语
            </button>
            <button 
              className="block text-blue-600 hover:underline"
              onClick={() => setMessage("多少钱")}
            >
              测试价格询问
            </button>
            <button 
              className="block text-blue-600 hover:underline"
              onClick={() => setMessage("创作角色")}
            >
              测试创作功能
            </button>
            <button 
              className="block text-blue-600 hover:underline"
              onClick={() => setMessage("随便写点什么测试")}
            >
              测试复杂消息
            </button>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 mt-4">
          <p>🔍 打开浏览器开发者工具 (F12) → Console 查看详细日志</p>
          <p>📱 当前页面：{typeof window !== 'undefined' ? window.location.href : 'Server'}</p>
        </div>
      </div>
    </div>
  )
}
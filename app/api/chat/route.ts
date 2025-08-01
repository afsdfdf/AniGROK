import { NextRequest, NextResponse } from 'next/server'
import { generateAniResponse } from '@/lib/gemini'
import { checkNetworkConnectivity } from '@/lib/network-check'

export async function POST(request: NextRequest) {
  try {
    console.log('🎯 Chat API called')
    const { message } = await request.json()
    console.log('📝 Message received:', message)

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      )
    }

        // Skip network check for better performance and reliability
    console.log('🤖 Direct AIN generation attempt...')

    // Generate response using AIN (AniGROK Intelligence Network)
    const response = await generateAniResponse(message)

    return NextResponse.json({
      success: true,
      response: response,
      isOffline: false
    })
  } catch (error) {
    console.error('Chat API Error:', error)
    
    // More specific error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const isNetworkError = errorMessage.includes('fetch failed') || 
                          errorMessage.includes('network') || 
                          errorMessage.includes('timeout')
    
    const fallbackResponse = isNetworkError 
      ? "网络连接遇到了点小问题～不过Ani的AIN技术还是在这里陪你！想聊聊你喜欢的anime风格吗？🎌💜"
      : "哎呀～AIN系统暂时需要休息一下呢... 请稍后再试试吧！💜"

    return NextResponse.json(
      { 
        success: true,
        response: fallbackResponse,
        error: 'Network or AI service issue',
        isOffline: isNetworkError
      },
      { status: 200 } // Return 200 to avoid error state in UI
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'AniGROK Chat API is running',
    status: 'healthy',
    powered_by: 'AIN (AniGROK Intelligence Network)'
  })
}
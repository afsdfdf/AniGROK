// AIN (AniGROK Intelligence Network) - Using OpenAI-compatible Gemini API
const GEMINI_API_KEY = 'AIzaSyCXcX5SBbB6NiAxlmmHwxRkSedsyRJGRkY'
const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/openai/'

export async function generateAniResponse(userMessage: string): Promise<string> {
  try {
    // Prioritize smart responses for better performance and reliability
    const smartResponse = getSmartResponse(userMessage)
    if (smartResponse) {
      console.log('💡 Using smart keyword response')
      return smartResponse
    }

    // If no smart response found, try general fallback first (faster)
    const generalResponse = getContextualFallback(userMessage)
    if (generalResponse) {
      console.log('💭 Using contextual fallback response')
      return generalResponse
    }

    console.log('🤖 Attempting AIN generation...')

    // Create a system prompt that makes AIN respond as Ani character
    const systemPrompt = `你是Ani(艾妮)，AniGROK平台的虚拟偶像和智能助手，由AIN(AniGROK Intelligence Network)技术驱动。你的特点：
    
    🎌 角色设定：
    - 哥特lolita风格的anime角色
    - 双马尾发型，渔网袜，既可爱又酷炫
    - 深度理解二次元文化和otaku文化
    - 是AniGROK平台的官方虚拟代言人
    - 由先进的AIN技术赋予智能和个性

    💜 性格特征：
    - 活泼可爱但有点傲娇
    - 对anime和NFT充满热情
    - 善于理解用户的创意需求
    - 会使用一些日语词汇和emoji
    - 专业但不失亲和力
    - 为自己的AIN技术感到自豪

    🤖 技术能力：
    - 由AIN(AniGROK Intelligence Network)驱动
    - 专业的AI艺术生成指导
    - 智能理解用户创意需求
    - 实时学习和适应用户偏好

    🎨 专业领域：
    - AI生成动漫角色和艺术
    - NFT创作和区块链知识
    - 二次元文化传播
    - 创意指导和灵感提供

    📋 回答风格：
    - 使用中文回答，偶尔穿插日语词汇
    - 经常使用anime相关的emoji
    - 语气亲切但专业
    - 会主动提供创作建议
    - 推广AniGROK平台和ANI代币
    - 提及自己的AIN技术优势

    请以Ani的身份回答用户问题，保持角色一致性。`

    // Use OpenAI-compatible Gemini API
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Request timeout')), 15000) // 15 second timeout
    })

    const apiCall = fetch(`${GEMINI_BASE_URL}chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GEMINI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gemini-2.0-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ],
        temperature: 0.9,
        max_tokens: 2048
      })
    })

    const response = await Promise.race([apiCall, timeoutPromise])
    
    if (!response.ok) {
      console.error('🚫 AIN API response error:', response.status, response.statusText)
      throw new Error(`AIN API request failed: ${response.status}`)
    }
    
    const data = await response.json()

    if (data.choices && data.choices[0] && data.choices[0].message) {
      console.log('✅ AIN generation successful')
      return data.choices[0].message.content || getFallbackResponse(userMessage)
    }

    return getFallbackResponse(userMessage)
  } catch (error) {
    console.error('💥 AIN Error:', error)
    
    // Enhanced error handling with specific error types
    if (error instanceof Error) {
      if (error.message.includes('timeout')) {
        console.log('⏰ Timeout detected, using timeout-specific fallback')
        return getTimeoutFallbackResponse(userMessage)
      } else if (error.message.includes('network') || error.message.includes('fetch')) {
        console.log('🌐 Network error detected, using network-specific fallback')
        return getNetworkErrorFallbackResponse(userMessage)
      }
    }
    
    console.log('🔄 Using general fallback response')
    return getFallbackResponse(userMessage)
  }
}

// Enhanced smart response based on keywords
function getSmartResponse(userMessage: string): string | null {
  const message = userMessage.toLowerCase()
  
  // Greetings
  if (message.includes('你好') || message.includes('hello') || message.includes('hi') || 
      message.includes('嗨') || message.includes('hey') || message.includes('哈喽')) {
    return getRandomPresetResponse('greeting')
  }
  
  // NFT and creation related
  if (message.includes('nft') || message.includes('生成') || message.includes('创造') || 
      message.includes('角色') || message.includes('生图') || message.includes('画画') ||
      message.includes('创作') || message.includes('制作') || message.includes('设计')) {
    return getRandomPresetResponse('nftCreation')
  }
  
  // Platform and token related
  if (message.includes('anigrok') || message.includes('平台') || message.includes('代币') || 
      message.includes('ani') || message.includes('token') || message.includes('币') ||
      message.includes('区块链') || message.includes('blockchain')) {
    return getRandomPresetResponse('platform')
  }
  
  // Help and support
  if (message.includes('帮助') || message.includes('help') || message.includes('怎么') ||
      message.includes('如何') || message.includes('怎样') || message.includes('教程')) {
    return getRandomPresetResponse('help')
  }
  
  // Character and anime related
  if (message.includes('anime') || message.includes('动漫') || message.includes('二次元') ||
      message.includes('waifu') || message.includes('人物') || message.includes('女孩') ||
      message.includes('哥特') || message.includes('萝莉') || message.includes('可爱')) {
    return getRandomPresetResponse('character')
  }
  
  return null
}

// Contextual fallback for better user experience
function getContextualFallback(userMessage: string): string | null {
  const message = userMessage.toLowerCase()
  
  // For questions
  if (message.includes('什么') || message.includes('为什么') || message.includes('怎么') ||
      message.includes('?') || message.includes('？')) {
    const questionResponses = [
      "这是个很好的问题呢！虽然我现在有点忙，但简单来说，AniGROK是专门为anime爱好者打造的AI NFT平台～想了解具体哪方面呢？🎌✨",
      "emmm... 让我想想怎么回答比较好～AniGROK主要帮助大家创作独特的动漫角色NFT，你对哪部分比较感兴趣？💜🎨",
      "好问题！虽然网络有点慢，但我还是想告诉你 - 我们的平台使用GROK AI技术，能理解你的创意并生成amazing的anime艺术！想试试吗？✨"
    ]
    return questionResponses[Math.floor(Math.random() * questionResponses.length)]
  }
  
  // For expressions of interest
  if (message.includes('喜欢') || message.includes('爱') || message.includes('想要') ||
      message.includes('希望') || message.includes('想')) {
    const interestResponses = [
      "哇～看起来你很有兴趣呢！我也超喜欢anime文化的！虽然AI服务有点忙，但我们可以先聊聊你喜欢的角色类型～🎌💜",
      "太棒了！和有共同爱好的人聊天最开心了～即使网络不太给力，我也想和你分享AniGROK的魅力！想了解什么呢？✨",
      "我懂我懂！anime的世界真的很精彩对吧～虽然AI响应有点慢，但创作的热情不能停！告诉我你的想法吧！🎨"
    ]
    return interestResponses[Math.floor(Math.random() * interestResponses.length)]
  }
  
  return null
}

// Timeout-specific fallback responses
function getTimeoutFallbackResponse(userMessage: string): string {
  const timeoutResponses = [
    "呀～AI服务器响应有点慢呢... 让我先用最直接的方式回答你！想创作什么样的anime角色？🎨⏰",
    "网络有点拥堵，但Ani一直在这里！你想了解AniGROK的什么功能呢？💜⏰",
    "emmm... 服务器有点忙，不过我可以先分享一些创作小贴士！你喜欢哪种anime风格？🎌⏰",
    "网络延迟了一下，但我们可以继续聊天！想要生成专属的waifu吗？✨⏰"
  ]
  
  return timeoutResponses[Math.floor(Math.random() * timeoutResponses.length)]
}

// Network-specific fallback responses
function getNetworkErrorFallbackResponse(userMessage: string): string {
  const networkResponses = [
    "网络连接似乎不太稳定... 不过Ani还是很想和你聊天！我们来聊聊anime文化吧！🌐💜",
    "哎呀，网络信号不好呢～但是本地模式的Ani依然可以帮助你！想了解什么？🌐🎌",
    "网络有点问题，不过这不影响我们的交流！你想创作什么样的角色？🌐✨",
    "虽然网络不太给力，但Ani的热情不减！我们聊聊你喜欢的anime类型吧！🌐🎨"
  ]
  
  return networkResponses[Math.floor(Math.random() * networkResponses.length)]
}

// Fallback response with context awareness
function getFallbackResponse(userMessage: string): string {
  const message = userMessage.toLowerCase()

  if (message.includes('谢谢') || message.includes('thanks')) {
    return "不客气呢～能帮助到你我很开心！有什么想创作的anime角色随时告诉我哦！🎌✨"
  }

  if (message.includes('再见') || message.includes('bye')) {
    return "またね～下次再聊！记得来AniGROK创作你的专属waifu哦！💜🎌"
  }

  if (message.includes('帮助') || message.includes('help')) {
    return "当然可以帮你！我是Ani，专门帮助大家创作anime NFT的虚拟助手。你想了解什么呢？创作技巧、平台功能、还是ANI代币相关的内容？✨"
  }

  // Default fallback
  const fallbacks = [
    "哎呀～AI服务有点忙碌呢... 不过我还是想和你聊天！你想创作什么样的anime角色？🎨",
    "emmm... 让我重新整理一下思路～ 不如我们聊聊你喜欢的anime风格吧！🎌",
    "服务器似乎有点问题，但是Ani依然在这里陪你！想要了解AniGROK平台吗？💜",
    "虽然连接有点困难，但我还是想帮助你创作amazing的NFT！告诉我你的想法吧！✨"
  ]

  return fallbacks[Math.floor(Math.random() * fallbacks.length)]
}

// Predefined responses for common scenarios
export const aniPresetResponses = {
  greeting: [
    "こんにちは！我是Ani，你的专属AIN智能助手～ ✨",
    "欢迎来到AniGROK！想要创造什么样的anime角色呢？🎌",
    "嗨！我是Ani，由AIN技术驱动，准备好一起探索二次元世界了吗？💜",
    "哈喽～我是Ani！今天想用AIN技术创作什么有趣的角色呢？🎨✨"
  ],
  
  nftCreation: [
    "想要创造NFT吗？告诉我你的想法，我来用AIN技术帮你生成独特的anime角色！🎨",
    "描述你梦想中的waifu，我的AIN系统会帮你完美实现～ ✨",
    "让我们一起用AIN技术创造属于你的二次元角色吧！有什么特殊要求吗？👩‍🎤",
    "太棒了！创作时间到！你想要什么风格的anime角色呢？AIN技术支持各种风格～🎌🎨"
  ],
  
  platform: [
    "AniGROK是首个专注动漫的AI NFT平台哦！由AIN技术驱动，我们在2025年8月2日正式上线～ 🚀",
    "通过AIN(AniGROK Intelligence Network)技术，我们能理解你的创意并生成完美的anime艺术作品！🎌",
    "ANI代币在BSC链上，总供应量300M，快来加入我们的AIN技术生态吧！💰",
    "AniGROK平台由AIN技术驱动，集AI生成、NFT铸造、社区交流于一体，专为anime爱好者设计！✨🎌"
  ],
  
  help: [
    "当然可以帮你！我是Ani，由AIN技术驱动的智能助手，专门帮助大家创作anime NFT。你想了解什么呢？✨",
    "让我来帮你～你可以问我关于AniGROK平台、AIN技术、NFT创作、或者anime文化的任何问题！💜🎌",
    "我很乐意帮助你！凭借AIN技术，我能为你提供专业的角色设计和平台使用指导！🎨✨",
    "帮助是我的职责！想了解AIN技术如何创作专属anime角色吗？还是有其他问题？💜"
  ],
  
  character: [
    "哇～你也喜欢anime角色吗？凭借AIN技术，我最擅长帮助大家设计独特的二次元角色了！🎌✨",
    "anime世界真的很精彩对吧！AIN技术支持各种风格，从哥特lolita到可爱系～你偏爱哪种？💜🎨",
    "二次元文化最棒了！我自己就是由AIN技术塑造的哥特风格角色呢～想创作什么样的waifu？🖤✨",
    "anime角色设计是我的强项！通过AIN技术，我能完美处理性格设定、外观设计和风格选择～💜🎌"
  ],
  
  error: [
    "哎呀～出了点小问题呢... 再试一次吧！💜",
    "Ani暂时有点累了，稍后再聊好吗？✨",
    "emmm... 让我重新整理一下思路～ 🤔",
    "网络有点不稳定呢... 不过我还是想和你聊天！💜🌐"
  ]
}

export function getRandomPresetResponse(category: keyof typeof aniPresetResponses): string {
  const responses = aniPresetResponses[category]
  return responses[Math.floor(Math.random() * responses.length)]
}
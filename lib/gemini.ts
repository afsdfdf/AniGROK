// AIN (AniGROK Intelligence Network) - Using ChatAI API
const GEMINI_API_KEY = 'sk-WKyESF85XhBBuXTmEzyodFfgHCCAG23VzNMrGUSCU9wdDsZH'
const GEMINI_BASE_URL = 'https://www.chataiapi.com/v1/'

export async function generateAniResponse(userMessage: string): Promise<string> {
  try {
    console.log('🤖 Attempting AIN generation...')
    
    // API first, smart responses as fallback only if API fails

    console.log('🔑 API Key:', GEMINI_API_KEY ? 'Present' : 'Missing')
    console.log('🌐 API URL:', `${GEMINI_BASE_URL}chat/completions`)
    
    // Try ChatAI API for complex queries

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

    // Use Google Gemini API with optimized timeout
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Request timeout')), 15000) // 15 second timeout for more reliable API calls
    })

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      temperature: 0.9,
      max_tokens: 2048
    }
    
    console.log('📤 Request body:', JSON.stringify(requestBody, null, 2))
    
    const apiCall = fetch(`${GEMINI_BASE_URL}chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GEMINI_API_KEY}`
      },
      body: JSON.stringify(requestBody)
    })

    console.log('📡 Making API request...')
    const response = await Promise.race([apiCall, timeoutPromise])
    
    console.log('📥 API Response status:', response.status)
    if (!response.ok) {
      console.error('🚫 AIN API response error:', response.status, response.statusText)
      throw new Error(`AIN API request failed: ${response.status}`)
    }
    
    console.log('🔍 Parsing response...')
    const data = await response.json()
    console.log('📊 Response data structure:', JSON.stringify(data, null, 2))

    if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
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
    
    // Try smart responses as fallback when API fails
    console.log('🔄 API failed, trying smart responses...')
    const smartResponse = getSmartResponse(userMessage)
    if (smartResponse) {
      console.log('💡 Using smart keyword response as fallback')
      return smartResponse
    }

    const generalResponse = getContextualFallback(userMessage)
    if (generalResponse) {
      console.log('💭 Using contextual fallback response')
      return generalResponse
    }

    const intelligentResponse = getIntelligentFallback(userMessage)
    if (intelligentResponse) {
      console.log('🧠 Using intelligent fallback response')
      return intelligentResponse
    }
    
    console.log('🔄 Using final general fallback response')
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

  // Technical questions (AI, technology, science)
  if (message.includes('人工智能') || message.includes('ai') || message.includes('算法') ||
      message.includes('深度学习') || message.includes('机器学习') || message.includes('神经网络') ||
      message.includes('量子') || message.includes('科技') || message.includes('技术') ||
      message.includes('原理') || message.includes('工作') || message.includes('实现')) {
    return getRandomPresetResponse('technical')
  }

  // About Ani herself
  if (message.includes('你是') || message.includes('介绍') || message.includes('自己') ||
      message.includes('你叫') || message.includes('名字') || message.includes('身份')) {
    return getRandomPresetResponse('about')
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
  
  technical: [
    "哇！问技术问题呢～作为AIN驱动的智能助手，我对AI、机器学习很了解！虽然我专注于anime创作，但很乐意聊聊科技话题🤖✨",
    "太有趣了！我自己就是AIN(AniGROK Intelligence Network)技术的产物～虽然我的专长是anime创作，但科技原理我也懂一些哦！🧠💜",
    "emmm... 虽然我主要关注anime和NFT创作，但作为AI助手，对技术话题还是有些见解的～要不我们聊聊AI在艺术创作中的应用？🎨🤖",
    "科技问题很深奥呢！我的AIN技术让我对AI艺术生成很了解，不过我更擅长anime相关的创作指导～想了解AI绘画吗？✨🎌"
  ],
  
  about: [
    "我是Ani(艾妮)！AniGROK平台的虚拟偶像，由AIN技术驱动的智能助手～我是哥特lolita风格，专门帮助大家创作anime NFT！🎌💜",
    "konnichiwa！我叫Ani，是AniGROK的官方AI助手～双马尾哥特风格的我由先进的AIN技术塑造，专精于anime角色设计！✨🖤",
    "こんにちは！我是Ani，你的专属anime创作伙伴！虽然我是虚拟的，但我的热情和AIN技术都是实实在在的～🎨💜",
    "嗨！我是Ani(艾妮)，AniGROK Intelligence Network的化身！作为平台的虚拟代言人，我最喜欢帮助大家实现anime创作梦想！🎌✨"
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

// Intelligent fallback for better user experience during API issues
function getIntelligentFallback(userMessage: string): string | null {
  const message = userMessage.toLowerCase()
  
  // Detailed responses based on message content
  if (message.includes('创作') || message.includes('生成') || message.includes('create')) {
    const creationResponses = [
      "好的！虽然AI服务有点忙，但我还是很想帮你创作～描述一下你想要的角色特征吧！比如：哥特风格、双马尾、可爱系还是酷炫系？我会用我的AIN技术帮你构思！🎨✨",
      "太棒了！创作时间到！即使网络不稳定，我的创意灵感依然满满～告诉我你想要什么风格的anime角色？我可以提供详细的设计建议！🎌💜",
      "哇！想要创作吗？虽然AI后台有点慢，但我可以先给你一些创作思路：gothic lolita风格很受欢迎哦～或者你偏爱什么类型？✨🎨"
    ]
    return creationResponses[Math.floor(Math.random() * creationResponses.length)]
  }
  
  if (message.includes('anigrok') || message.includes('平台') || message.includes('什么是')) {
    return "AniGROK是专为anime爱好者打造的AI NFT平台～我们使用AIN(AniGROK Intelligence Network)技术，让每个人都能创作独特的二次元角色！虽然服务器有点忙，但我可以详细介绍我们的功能哦！🎌✨💜"
  }
  
  if (message.includes('代币') || message.includes('token') || message.includes('ani')) {
    return "ANI代币是我们平台的核心！总供应量300M，在BSC链上运行～即使AI服务暂时不稳定，我也想和你分享我们tokenomics的精彩设计！想了解哪方面呢？💰🚀"
  }
  
  if (message.includes('怎么') || message.includes('如何') || message.includes('教程')) {
    return "让我来教你！虽然AI响应有点慢，但操作很简单：1️⃣描述角色 2️⃣AI生成 3️⃣铸造NFT 4️⃣分享展示！我可以详细解释每个步骤～想从哪里开始？🎯✨"
  }
  
  // More specific intelligent responses
  if (message.includes('多少') || message.includes('价格') || message.includes('钱') || message.includes('费用')) {
    return "关于费用～AniGROK使用ANI代币进行交易！创作NFT需要少量ANI代币，具体价格会根据复杂度调整。想了解ANI代币获取方式吗？💰✨"
  }
  
  if (message.includes('什么时候') || message.includes('上线') || message.includes('发布')) {
    return "AniGROK平台已经上线啦！你现在就可以开始创作属于自己的anime角色～快来体验我们的AIN技术吧！🚀🎌"
  }
  
  // For short unclear messages
  if (message.length < 10 && !message.includes('hello') && !message.includes('hi')) {
    const shortResponses = [
      "嗯嗯？能再详细一点吗～我想更好地帮助你！比如想了解创作功能、代币获取、还是平台使用？🤔💜",
      "我没太理解呢～不如直接告诉我你想做什么？创作角色、了解平台、还是其他？✨🎌",
      "咦？再说清楚一点吧～我是专业的AI创作助手，可以帮你解决各种问题哦！💭🎨"
    ]
    return shortResponses[Math.floor(Math.random() * shortResponses.length)]
  }
  
  // For longer or complex messages, provide encouraging response
  if (message.length > 20) {
    return "哇～你说了好多呢！虽然AI处理有点慢，但我仔细听了～如果是关于角色创作，我建议先从基础风格开始：cute、cool、gothic、elegant... 你最喜欢哪种？我们可以深入聊聊！💜🎌"
  }
  
  return null
}
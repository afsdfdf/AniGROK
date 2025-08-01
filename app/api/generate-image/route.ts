import { NextRequest, NextResponse } from 'next/server';

interface GenerateImageRequest {
  prompt: string;
  model?: string;
  image_size?: string;
  batch_size?: number;
  num_inference_steps?: number;
  guidance_scale?: number;
}

interface SiliconFlowResponse {
  images: Array<{ url: string }>;
  timings: { inference: number };
  seed: number;
  shared_id: string;
  data: Array<{ url: string }>;
  created: number;
}

export async function POST(request: NextRequest) {
  try {
    console.log('📸 Image generation request received');
    
    const {
      prompt,
      model = 'Kwai-Kolors/Kolors',
      image_size = '1024x1024',
      batch_size = 1,
      num_inference_steps = 20,
      guidance_scale = 7.5,
    } = await request.json()

    console.log('📋 Request parameters:', { prompt, model, image_size });

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // 首先检测网络连通性
    try {
      const healthCheck = await fetch('https://httpbin.org/get', { 
        method: 'GET',
        signal: AbortSignal.timeout(5000)
      });
      if (!healthCheck.ok) {
        throw new Error('Network connectivity issue');
      }
    } catch (networkError) {
      console.error('❌ Network check failed:', networkError);
      // 返回本地演示图片
      return NextResponse.json({
        success: true,
        data: {
          images: [{ url: "/images/generated-cat.png" }],
          timings: { inference: 0 },
          seed: Math.floor(Math.random() * 1000000),
          shared_id: "demo",
          created: Date.now(),
          prompt: prompt,
          model: model,
          fallback: true,
          message: "网络连接问题，使用演示图片"
        }
      });
    }

    // 调用SiliconFlow API
    const options = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer sk-plzzktolkbrcgwmmebprgsrolavtgiplwmqjmawwenvehebe',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        prompt,
        image_size,
        batch_size,
        num_inference_steps,
        guidance_scale
      })
    };

    console.log('🚀 Calling SiliconFlow API...');
    const response = await fetch('https://api.siliconflow.cn/v1/images/generations', {
      ...options,
      signal: AbortSignal.timeout(30000) // 30秒超时
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ SiliconFlow API Error:', errorText);
      
      // API失败时降级到演示图片
      const demoImages = ["/images/generated-cat.png", "/images/crypto-ai-1.png", "/images/crypto-ai-2.png"];
      const randomImage = demoImages[Math.floor(Math.random() * demoImages.length)];
      
      return NextResponse.json({
        success: true,
        data: {
          images: [{ url: randomImage }],
          timings: { inference: 0 },
          seed: Math.floor(Math.random() * 1000000),
          shared_id: "demo",
          created: Date.now(),
          prompt: prompt,
          model: model,
          fallback: true,
          message: "API暂时不可用，使用演示图片"
        }
      });
    }

    const data: SiliconFlowResponse = await response.json();
    console.log('✅ SiliconFlow API success');
    
    return NextResponse.json({
      success: true,
      data: {
        images: data.images,
        timings: data.timings,
        seed: data.seed,
        shared_id: data.shared_id,
        created: data.created,
        prompt: prompt,
        model: model,
        fallback: false
      }
    });

  } catch (error) {
    console.error('❌ API Error:', error);
    
    // 任何其他错误都降级到演示图片
    const demoImages = ["/images/generated-cat.png", "/images/crypto-ai-1.png", "/images/crypto-ai-2.png"];
    const randomImage = demoImages[Math.floor(Math.random() * demoImages.length)];
    
    return NextResponse.json({
      success: true,
      data: {
        images: [{ url: randomImage }],
        timings: { inference: 0 },
        seed: Math.floor(Math.random() * 1000000),
        shared_id: "demo",
        created: Date.now(),
        prompt: "fallback",
        model: "demo",
        fallback: true,
        message: "服务暂时不可用，使用演示图片"
      }
    });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'AI Image Generation API',
    endpoints: {
      POST: '/api/generate-image',
      description: 'Generate images using AI with SiliconFlow API'
    },
    parameters: {
      prompt: 'string (required) - Description of the image to generate',
      model: 'string (optional) - AI model to use, default: Kwai-Kolors/Kolors',
      image_size: 'string (optional) - Image dimensions, default: 1024x1024',
      batch_size: 'number (optional) - Number of images to generate, default: 1',
      num_inference_steps: 'number (optional) - Generation steps, default: 20',
      guidance_scale: 'number (optional) - Guidance scale, default: 7.5'
    }
  });
}
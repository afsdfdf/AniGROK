// 为整个网站生成所有配图的脚本
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// 所有网站配图的提示词配置
const imageCategories = {
  // Logo和品牌图片
  logos: [
    {
      name: "logo-main.png",
      prompt: "anime style, cute gothic lolita girl mascot logo, twin tails, purple and pink colors, simple design, clean background, 2D art style",
      category: "brand"
    },
    {
      name: "logo-transparent.png", 
      prompt: "anime style, minimalist waifu mascot logo, transparent background, gothic cute style, purple gradient, simple design",
      category: "brand"
    }
  ],

  // Hero区域背景图片
  hero: [
    {
      name: "hero-bg-1.png",
      prompt: "anime style, magical fantasy background, sparkles and stars, purple pink gradient sky, dreamy atmosphere, high quality, detailed",
      category: "background"
    },
    {
      name: "hero-bg-2.png",
      prompt: "anime style, cyberpunk city background, neon lights, futuristic buildings, purple and pink neon glow, night scene",
      category: "background"
    }
  ],

  // 功能展示图片
  features: [
    {
      name: "ai-brain.png",
      prompt: "anime style, cute AI brain illustration, glowing neural networks, purple and pink colors, kawaii style, tech elements, 2D art",
      category: "feature"
    },
    {
      name: "nft-creation.png",
      prompt: "anime style, NFT minting process illustration, digital art creation, blockchain elements, cute anime girl creating art, colorful",
      category: "feature"
    },
    {
      name: "ani-character.png",
      prompt: "anime style, gothic lolita virtual assistant, twin tails, fishnet stockings, cute and cool, purple dress, friendly pose",
      category: "feature"
    },
    {
      name: "token-economy.png",
      prompt: "anime style, cryptocurrency and economy illustration, coins and charts, anime girl with money, financial success, kawaii style",
      category: "feature"
    }
  ],

  // 演示和生成图片
  generated: [
    {
      name: "generated-1.png",
      prompt: "anime style, gothic lolita girl with twin tails, dark dress, fishnet stockings, cute and elegant, high quality, detailed, 2D art",
      category: "generated"
    },
    {
      name: "generated-2.png", 
      prompt: "anime style, kawaii cat girl with purple hair, maid outfit, adorable expression, high quality, detailed, 2D art, manga style",
      category: "generated"
    },
    {
      name: "generated-3.png",
      prompt: "anime style, cyberpunk anime warrior girl, neon armor, glowing eyes, cool and futuristic, high quality, detailed, 2D art",
      category: "generated"
    },
    {
      name: "generated-4.png",
      prompt: "anime style, elegant anime princess, traditional Japanese kimono, beautiful and graceful, high quality, detailed, 2D art",
      category: "generated"
    },
    {
      name: "generated-5.png",
      prompt: "anime style, magical anime girl, sparkles and stars, enchanting and mystical, high quality, detailed, 2D art, colorful",
      category: "generated"
    },
    {
      name: "generated-6.png",
      prompt: "anime style, school uniform anime girl, glasses, intelligent and cute expression, high quality, detailed, 2D art",
      category: "generated"
    },
    {
      name: "generated-7.png",
      prompt: "anime style, angel anime girl, white wings, pure and graceful, heavenly atmosphere, high quality, detailed, 2D art",
      category: "generated"
    },
    {
      name: "generated-8.png",
      prompt: "anime style, witch anime girl, hat and magic wand, mysterious and cute, magical atmosphere, high quality, detailed, 2D art",
      category: "generated"
    },
    {
      name: "generated-9.png",
      prompt: "anime style, ninja anime girl, dark outfit, stealthy and cool, action pose, high quality, detailed, 2D art",
      category: "generated"
    },
    {
      name: "generated-10.png",
      prompt: "anime style, fairy anime girl, flower crown, nature themed, forest background, high quality, detailed, 2D art, colorful",
      category: "generated"
    }
  ],

  // 加密和区块链相关图片
  crypto: [
    {
      name: "crypto-ai-1.png",
      prompt: "anime style, cute anime girl with cryptocurrency symbols, blockchain technology, digital money, kawaii style, colorful",
      category: "crypto"
    },
    {
      name: "crypto-ai-2.png",
      prompt: "anime style, anime girl trading NFTs, digital marketplace, computer screen, tech-savvy, modern setting, 2D art",
      category: "crypto"
    },
    {
      name: "blockchain-network.png",
      prompt: "anime style, network visualization, connected nodes, blockchain illustration, cyber space, purple and blue colors, tech art",
      category: "crypto"
    }
  ],

  // 额外的画廊图片
  gallery: [
    {
      name: "gallery-1.png",
      prompt: "anime style, traditional shrine maiden, red and white outfit, serene expression, japanese temple background, detailed, 2D art",
      category: "gallery"
    },
    {
      name: "gallery-2.png",
      prompt: "anime style, steampunk anime girl, gears and clockwork, vintage technology, brown and copper colors, detailed, 2D art",
      category: "gallery"
    },
    {
      name: "gallery-3.png",
      prompt: "anime style, space anime girl, astronaut suit, stars and planets, cosmic background, sci-fi theme, detailed, 2D art",
      category: "gallery"
    },
    {
      name: "gallery-4.png",
      prompt: "anime style, pirate anime girl, tricorn hat, sword, ocean background, adventure theme, detailed, 2D art, colorful",
      category: "gallery"
    },
    {
      name: "gallery-5.png",
      prompt: "anime style, vampire anime girl, gothic clothing, bat wings, night castle background, mysterious, detailed, 2D art",
      category: "gallery"
    },
    {
      name: "gallery-6.png",
      prompt: "anime style, chef anime girl, cooking outfit, kitchen background, delicious food, warm atmosphere, detailed, 2D art",
      category: "gallery"
    },
    {
      name: "gallery-7.png",
      prompt: "anime style, artist anime girl, paintbrush and palette, colorful studio, creative atmosphere, detailed, 2D art",
      category: "gallery"
    },
    {
      name: "gallery-8.png",
      prompt: "anime style, musician anime girl, violin, concert hall background, elegant performance, detailed, 2D art",
      category: "gallery"
    },
    {
      name: "gallery-9.png",
      prompt: "anime style, detective anime girl, magnifying glass, mystery solving, library background, intelligent, detailed, 2D art",
      category: "gallery"
    },
    {
      name: "gallery-10.png",
      prompt: "anime style, dancer anime girl, flowing dress, stage performance, spotlight, graceful movement, detailed, 2D art",
      category: "gallery"
    }
  ]
};

// 确保目录存在
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 下载图片函数
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filename);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${path.basename(filename)}`);
          resolve(filename);
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filename, () => {}); // 删除失败的文件
      reject(err);
    });
  });
}

// 调用图片生成API
async function generateImage(imageConfig, outputPath) {
  try {
    console.log(`🎨 Generating ${imageConfig.name}: ${imageConfig.prompt.substring(0, 60)}...`);
    
    const response = await fetch('http://localhost:3004/api/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: imageConfig.prompt,
        model: 'Kwai-Kolors/Kolors',
        image_size: '1024x1024',
        batch_size: 1,
        num_inference_steps: 20,
        guidance_scale: 7.5
      }),
    });

    const data = await response.json();
    
    if (data.success && data.data.images && data.data.images.length > 0) {
      const imageUrl = data.data.images[0].url;
      const filename = path.join(outputPath, imageConfig.name);
      
      if (imageUrl.startsWith('http')) {
        // 真实生成的图片，下载到本地
        await downloadImage(imageUrl, filename);
        console.log(`🎉 Real AI generation successful for ${imageConfig.name}`);
        return { success: true, type: 'real', filename: imageConfig.name };
      } else {
        // 本地演示图片，复制到目标目录
        const srcPath = path.join(__dirname, '../public', imageUrl);
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, filename);
          console.log(`📁 Copied demo image for ${imageConfig.name}`);
          return { success: true, type: 'demo', filename: imageConfig.name };
        }
      }
    }
    
    console.log(`⚠️ Generation failed for ${imageConfig.name}, skipping`);
    return { success: false, filename: imageConfig.name };
    
  } catch (error) {
    console.error(`❌ Error generating ${imageConfig.name}:`, error);
    return { success: false, filename: imageConfig.name, error: error.message };
  }
}

// 生成所有图片
async function generateAllImages() {
  console.log('🚀 Starting comprehensive website image generation...');
  
  const baseImagesPath = path.join(__dirname, '../public/images');
  ensureDir(baseImagesPath);
  
  const results = {
    logos: [],
    hero: [],
    features: [],
    generated: [],
    crypto: [],
    gallery: []
  };
  
  let totalGenerated = 0;
  let totalSuccess = 0;
  let realGenerated = 0;
  let demoUsed = 0;
  
  // 生成每个类别的图片
  for (const [category, images] of Object.entries(imageCategories)) {
    console.log(`\n📁 Generating ${category} images...`);
    
    for (const imageConfig of images) {
      const result = await generateImage(imageConfig, baseImagesPath);
      results[category].push({
        ...imageConfig,
        ...result
      });
      
      totalGenerated++;
      if (result.success) {
        totalSuccess++;
        if (result.type === 'real') realGenerated++;
        if (result.type === 'demo') demoUsed++;
      }
      
      // 添加延迟避免API限制
      if (totalGenerated < Object.values(imageCategories).flat().length) {
        console.log('⏳ Waiting 2 seconds before next generation...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }
  
  // 生成总结报告
  console.log('\n📊 Generation Summary:');
  console.log(`🎯 Total images processed: ${totalGenerated}`);
  console.log(`✅ Successful generations: ${totalSuccess}`);
  console.log(`🤖 Real AI generated: ${realGenerated}`);
  console.log(`📁 Demo images used: ${demoUsed}`);
  console.log(`❌ Failed generations: ${totalGenerated - totalSuccess}`);
  
  // 按类别显示结果
  for (const [category, categoryResults] of Object.entries(results)) {
    console.log(`\n📂 ${category.toUpperCase()}:`);
    categoryResults.forEach(result => {
      const status = result.success ? 
        (result.type === 'real' ? '🤖 AI生成' : '📁 演示图片') : 
        '❌ 失败';
      console.log(`  ${status} ${result.filename}`);
    });
  }
  
  // 保存生成信息
  const generationInfo = {
    generated_at: new Date().toISOString(),
    total_images: totalGenerated,
    successful_images: totalSuccess,
    real_generated: realGenerated,
    demo_used: demoUsed,
    failed_images: totalGenerated - totalSuccess,
    categories: results
  };
  
  const infoPath = path.join(baseImagesPath, 'website-images-info.json');
  fs.writeFileSync(infoPath, JSON.stringify(generationInfo, null, 2));
  console.log(`\n📄 Generation info saved to: ${infoPath}`);
  
  // 生成图片索引文件
  const imageIndex = {};
  for (const [category, categoryResults] of Object.entries(results)) {
    imageIndex[category] = categoryResults
      .filter(result => result.success)
      .map(result => ({
        name: result.filename,
        prompt: result.prompt,
        type: result.type,
        category: result.category
      }));
  }
  
  const indexPath = path.join(baseImagesPath, 'image-index.json');
  fs.writeFileSync(indexPath, JSON.stringify(imageIndex, null, 2));
  console.log(`📚 Image index saved to: ${indexPath}`);
  
  console.log('\n🎉 Website image generation completed!');
}

// 运行脚本
if (require.main === module) {
  generateAllImages().catch(console.error);
}

module.exports = { generateAllImages };
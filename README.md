# AniGROK - AI NFT Platform

🎌 一个创新的AI驱动anime NFT生成平台，结合二次元文化与Web3技术。

## ✨ 特色功能

- 🤖 **Ani智能助手**: 由AIN技术驱动的虚拟waifu助手
- 🎨 **AI图片生成**: 高质量anime角色AI创作
- 🏪 **NFT市场**: 专业的anime NFT交易平台
- 💰 **ANI代币**: 平台原生加密货币
- 🌍 **双语支持**: 中英文无缝切换

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发环境
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 🛠 技术栈

- **前端**: Next.js 14, React 18, TypeScript
- **样式**: Tailwind CSS, Radix UI
- **AI集成**: Google Gemini API (AIN技术)
- **图表**: Recharts
- **国际化**: 自定义i18n解决方案
- **图标**: Lucide React

## 🌐 部署

项目已配置支持Vercel部署：

1. Fork此仓库
2. 在Vercel中导入项目
3. 设置环境变量（如需要）
4. 自动部署

### 环境变量

```bash
# Google Gemini AI API Key (已内置，生产环境建议使用环境变量)
GEMINI_API_KEY=your_api_key_here
```

## 📱 功能页面

- `/` - 首页
- `/ai-generator` - AI图片生成器
- `/marketplace` - NFT市场
- `/ani-character` - Ani角色介绍
- `/tokenomics` - ANI代币经济
- `/roadmap` - 发展路线图
- `/about` - 关于我们
- `/whitepaper` - 技术白皮书

## 🎨 UI组件

- **Hero**: 首页英雄区域，支持背景图片
- **Navigation**: 响应式导航栏，支持语言切换
- **Features**: 功能展示，国际化支持
- **AniChat**: 智能聊天助手
- **InteractiveStats**: 交互式统计面板

## 🌍 国际化

支持中英双语：
- 默认语言：英文
- 自动检测浏览器语言
- 手动切换语言功能
- 持久化语言偏好

## 📦 项目结构

```
├── app/                 # Next.js App Router
├── components/          # React组件
├── lib/                # 工具函数和配置
├── locales/            # 国际化语言文件
├── public/             # 静态资源
│   └── images/         # 项目图片资源
└── scripts/            # 构建和部署脚本
```

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

© 2025 AniGROK. All rights reserved.

---

🎌 **让anime文化与Web3技术完美结合！**
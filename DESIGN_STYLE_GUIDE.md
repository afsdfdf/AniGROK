# AIMint 网站设计风格指南

## 🎨 设计概述

AIMint 网站采用现代化的科技感设计风格，融合 AI 与区块链元素，营造专业、创新、未来感的视觉体验。整体设计注重用户体验，运用渐变色彩、3D 效果和动态交互来突出产品的技术先进性。

---

## 🌈 配色方案

### 主色调
- **主要蓝色**: `hsl(217, 91%, 60%)` - 专业、科技感
- **主要青色**: `hsl(189, 94%, 43%)` - 创新、活力
- **主要紫色**: `hsl(244, 83%, 58%)` - 神秘、AI感

### 渐变色组合
```css
/* 主要渐变 */
from-blue-600 to-indigo-600     /* 主按钮、重点元素 */
from-blue-500 to-cyan-500       /* AI智能功能 */
from-purple-500 to-indigo-500   /* 协议相关 */
from-cyan-500 to-teal-500       /* 挖矿、收益相关 */
from-indigo-500 to-purple-500   /* 模型相关 */

/* 背景渐变 */
from-slate-50 to-blue-50        /* 页面背景 */
from-slate-50 to-indigo-50      /* 功能区背景 */
from-white to-blue-50           /* 卡片背景 */
```

### 中性色系
- **背景色**: `hsl(0, 0%, 100%)` (白色)
- **前景色**: `hsl(222.2, 84%, 4.9%)` (深灰)
- **边框色**: `hsl(214.3, 31.8%, 91.4%)` (浅灰)
- **文本色**: 
  - 主要文本: `text-gray-900` 
  - 次要文本: `text-gray-600`
  - 辅助文本: `text-gray-500`

### 功能色彩
- **成功色**: `text-emerald-500` (检查标记、成功状态)
- **警告色**: `bg-yellow-400` (状态指示)
- **错误色**: `hsl(0, 84.2%, 60.2%)` (错误提示)

---

## 🎯 视觉风格特征

### 设计语言
- **现代简约**: 干净的线条、充足的留白
- **科技未来感**: 3D 效果、渐变、透明度
- **专业可信**: 一致的设计系统、精确的排版

### 卡片设计
```css
/* 基础卡片样式 */
.card-base {
  background: white;
  border-radius: 1.5rem; /* 24px 圆角 */
  border: 2px solid rgba(203, 213, 225, 0.5);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

/* 悬停 3D 效果 */
.card-hover-3d:hover {
  transform: translateY(-8px) rotateX(5deg) rotateY(-2deg);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}
```

### 按钮设计
- **主要按钮**: 渐变背景 + 圆角 + 阴影 + 悬停缩放
- **次要按钮**: 描边样式 + 悬停变色
- **尺寸规格**: `sm`, `default`, `lg` 三种规格
- **状态反馈**: 悬停缩放 1.05 倍

---

## ✨ 动画与交互效果

### 核心动画
```css
/* 浮动动画 */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}

/* 渐入动画 */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 发光效果 */
@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
  50% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.6); }
}

/* 水平滚动 */
@keyframes scroll-x {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### 交互反馈
- **悬停效果**: 缩放 1.02-1.05 倍
- **点击反馈**: 轻微缩小效果
- **3D 效果**: 卡片悬停时的空间旋转
- **过渡时间**: 0.3s 缓动动画

### 加载状态
- **旋转加载器**: 蓝色边框 + 透明顶部
- **骨架屏**: 渐变背景的内容占位
- **进度指示**: 渐变色进度条

---

## 📐 布局系统

### 网格系统
- **桌面**: 12 列网格，最大宽度 1280px
- **平板**: 8 列网格，响应式调整
- **手机**: 单列布局，优化触摸操作

### 间距规范
```css
/* 内边距 */
.section-padding { padding: 5rem 0; }      /* 80px 上下 */
.container-padding { padding: 0 1.5rem; }  /* 24px 左右 */

/* 外边距 */
.space-y-8 { margin-bottom: 2rem; }        /* 32px 间距 */
.space-y-12 { margin-bottom: 3rem; }       /* 48px 间距 */
```

### 响应式断点
- **sm**: 640px 及以上
- **md**: 768px 及以上  
- **lg**: 1024px 及以上
- **xl**: 1280px 及以上

---

## 🔤 字体排版

### 字体族
- **主字体**: 系统默认无衬线字体
- **品牌字体**: 用于标题的粗体显示

### 字体大小层级
```css
/* 标题层级 */
.text-7xl { font-size: 4.5rem; }   /* 72px - 主标题 */
.text-5xl { font-size: 3rem; }     /* 48px - 二级标题 */
.text-2xl { font-size: 1.5rem; }   /* 24px - 三级标题 */

/* 正文层级 */
.text-lg { font-size: 1.125rem; }  /* 18px - 大正文 */
.text-base { font-size: 1rem; }    /* 16px - 标准正文 */
.text-sm { font-size: 0.875rem; }  /* 14px - 小文本 */
```

### 字重规范
- **font-black**: 900 - 主要标题
- **font-bold**: 700 - 次要标题
- **font-semibold**: 600 - 强调文本
- **font-medium**: 500 - 导航菜单

---

## 🎪 特殊效果

### 玻璃态效果
```css
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### 渐变边框
```css
.border-gradient {
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #06b6d4, #3b82f6) border-box;
  border: 2px solid transparent;
}
```

### 3D 透视效果
```css
.perspective-1000 { perspective: 1000px; }
.rotate-y-2 { transform: rotateY(2deg); }
```

### 自定义滚动条
```css
::-webkit-scrollbar {
  width: 8px;
  background: linear-gradient(180deg, #06b6d4, #3b82f6);
  border-radius: 4px;
}
```

---

## 🚀 品牌元素

### Logo 使用
- **主 Logo**: `/logoh.png` - 导航栏使用
- **图标 Logo**: `/logo1.png` - 功能区装饰
- **悬停效果**: 1.1 倍缩放

### 图标风格
- **线性图标**: Lucide React 图标库
- **尺寸规范**: 16px, 20px, 24px, 32px
- **颜色**: 继承父元素或使用品牌色

### 徽章设计
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 9999px;
  font-weight: 500;
}
```

---

## 📱 移动端优化

### 触摸优化
- **最小触摸目标**: 44px × 44px
- **手势支持**: 轻扫、点击、长按
- **触摸反馈**: 视觉状态变化

### 移动端布局
- **单列布局**: 避免水平滚动
- **紧凑间距**: 减少 padding 和 margin
- **大号文本**: 提升可读性

### 性能优化
- **图片懒加载**: Next.js Image 组件
- **动画简化**: 移动端减少复杂动画
- **触摸滚动**: 平滑的原生滚动体验

---

## 🎮 状态设计

### 加载状态
- **主加载**: 旋转的圆形指示器
- **内容加载**: 渐变骨架屏
- **按钮加载**: 内联 spinner

### 错误状态
- **表单错误**: 红色边框 + 错误图标
- **页面错误**: 居中错误卡片
- **网络错误**: Toast 提示

### 成功状态
- **操作成功**: 绿色检查图标
- **完成状态**: 渐变成功背景
- **进度完成**: 100% 进度条

---

## 🔍 可访问性

### 颜色对比
- **正文文本**: 至少 4.5:1 对比度
- **大文本**: 至少 3:1 对比度
- **交互元素**: 清晰的视觉区分

### 键盘导航
- **焦点环**: 2px 蓝色描边
- **跳转链接**: 隐藏的快速导航
- **逻辑顺序**: Tab 键遍历顺序

### 屏幕阅读器
- **语义标签**: 正确的 HTML 结构
- **Alt 文本**: 所有图片的描述
- **ARIA 标签**: 复杂交互的辅助信息

---

## ⚡ 性能指标

### 加载优化
- **首屏渲染**: < 1.5s
- **交互就绪**: < 2.5s  
- **图片优化**: WebP 格式 + 懒加载

### 动画性能
- **60fps**: 使用 CSS transforms
- **GPU 加速**: transform3d 优化
- **节流处理**: 滚动和 resize 事件

---

这份设计指南确保了 AIMint 网站在视觉设计、用户体验和技术实现上的一致性和专业性。通过统一的设计语言和严格的规范，打造出具有强烈科技感和未来感的 AI + Web3 产品体验。 
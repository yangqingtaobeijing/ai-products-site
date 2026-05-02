export interface Product {
  name: string;
  developer: string;
  developerTwitter?: string;
  description: string;
  monetization: string;
  revenue: string;
  url: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "ai-image",
    title: "AI 图像生成",
    icon: "🎨",
    products: [
      {
        name: "PhotoAI",
        developer: "Pieter Levels",
        developerTwitter: "levelsio",
        description: "用户上传自拍照片，AI 训练个人模型后可生成任意场景、服装、姿势的专业照片",
        monetization: "订阅制（Starter/Pro/Max/Ultra）",
        revenue: "月收入 $100K+，年收入 $200万+",
        url: "https://photoai.com",
      },
      {
        name: "HeadshotPro",
        developer: "Danny Postma",
        developerTwitter: "dannypostma",
        description: "AI 专业头像生成器，上传 1-3 张自拍，10-30 分钟生成 50+ 张专业头像",
        monetization: "单次购买 $29 起",
        revenue: "上线数月突破 $100万 ARR",
        url: "https://headshotpro.com",
      },
      {
        name: "InteriorAI",
        developer: "Pieter Levels",
        developerTwitter: "levelsio",
        description: "上传房间照片，AI 在 25 秒内重新设计室内装修，支持 55+ 种设计风格",
        monetization: "订阅制 $29-$99/月",
        revenue: "高收入（未公开具体数字）",
        url: "https://interiorai.com",
      },
    ],
  },
  {
    id: "ai-chatbot",
    title: "AI 聊天机器人 / 客服",
    icon: "💬",
    products: [
      {
        name: "Chatbase",
        developer: "Yasser Elsaid",
        description: "上传文档/网站数据，快速创建 AI 客服机器人，支持多语言、多渠道",
        monetization: "SaaS 分层定价",
        revenue: "突破 $100万+ ARR，服务 10,000+ 企业",
        url: "https://chatbase.co",
      },
    ],
  },
  {
    id: "ai-frontend",
    title: "AI 前端 / UI 工具",
    icon: "🖥️",
    products: [
      {
        name: "TypingMind",
        developer: "Tony Dinh",
        developerTwitter: "tdinh_me",
        description: "更好用的 ChatGPT 前端界面，支持自带 API Key、多模型切换、Prompt 管理",
        monetization: "一次性购买 ~$39-$49",
        revenue: "年收入 $100万+",
        url: "https://typingmind.com",
      },
    ],
  },
  {
    id: "dev-tools",
    title: "开发者工具 / 模板",
    icon: "🛠️",
    products: [
      {
        name: "ShipFast",
        developer: "Marc Lou",
        developerTwitter: "marc_louvion",
        description: "Next.js 启动模板，预置认证、支付、数据库、邮件、SEO，几天内上线 SaaS",
        monetization: "一次性购买 $199-$399",
        revenue: "月收入 $6.4K",
        url: "https://shipfa.st",
      },
      {
        name: "CodeFast",
        developer: "Marc Lou",
        developerTwitter: "marc_louvion",
        description: "几周而非几年学会编程的在线编程课程",
        monetization: "课程付费",
        revenue: "月收入 $3.4K",
        url: "https://codefa.st",
      },
      {
        name: "DataFast",
        developer: "Marc Lou",
        developerTwitter: "marc_louvion",
        description: "数据驱动的创业增长分析工具",
        monetization: "SaaS 订阅",
        revenue: "月收入 $21K",
        url: "https://datafa.st",
      },
      {
        name: "TrustMRR",
        developer: "Marc Lou",
        developerTwitter: "marc_louvion",
        description: "经过验证的创业公司收入数据库",
        monetization: "SaaS 订阅",
        revenue: "月收入 $27.6K",
        url: "https://trustmrr.com",
      },
    ],
  },
  {
    id: "website-gen",
    title: "网站生成 / 落地页",
    icon: "🌐",
    products: [
      {
        name: "Carrd.co",
        developer: "AJ",
        description: "简单的一页式响应式网站构建器，极简设计哲学",
        monetization: "Freemium，Pro $19-$49/年",
        revenue: "年收入 $100万+",
        url: "https://carrd.co",
      },
      {
        name: "Mixo.io",
        developer: "独立开发者",
        description: "AI 驱动的网站/落地页生成器，面向创业者快速验证商业想法",
        monetization: "SaaS 订阅制",
        revenue: "快速增长中",
        url: "https://mixo.io",
      },
    ],
  },
  {
    id: "health",
    title: "健康 / 生活方式",
    icon: "💪",
    products: [
      {
        name: "SuperShrimp",
        developer: "Marc Lou",
        developerTwitter: "marc_louvion",
        description: "矫正不良体态的应用",
        monetization: "SaaS 订阅",
        revenue: "月收入 $5.6K",
        url: "https://supershrimp.io",
      },
    ],
  },
  {
    id: "other",
    title: "其他 AI Wrapper 产品",
    icon: "🚀",
    products: [
      {
        name: "MakeLanding（已收购）",
        developer: "Marc Lou",
        developerTwitter: "marc_louvion",
        description: "AI 一键生成落地页",
        monetization: "以 $35,000 被收购",
        revenue: "$35K 退出",
        url: "https://makelanding.ai",
      },
      {
        name: "ProfilePicture.ai",
        developer: "Danny Postma",
        developerTwitter: "dannypostma",
        description: "AI 生成个性化头像（头像风格化）",
        monetization: "单次付费模式",
        revenue: "未公开",
        url: "https://profilepicture.ai",
      },
    ],
  },
];

export const marcLouProducts = [
  { name: "TrustMRR", revenue: "$27.6K/mo", url: "https://trustmrr.com" },
  { name: "DataFast", revenue: "$21K/mo", url: "https://datafa.st" },
  { name: "ShipFast", revenue: "$6.4K/mo", url: "https://shipfa.st" },
  { name: "SuperShrimp", revenue: "$5.6K/mo", url: "https://supershrimp.io" },
  { name: "CodeFast", revenue: "$3.4K/mo", url: "https://codefa.st" },
  { name: "Indie Page", revenue: "$1.4K/mo", url: "https://indiepa.ge" },
  { name: "LaunchViral", revenue: "$387/mo", url: "https://launchvir.al" },
  { name: "ByeDispute", revenue: "$248/mo", url: "https://byedispute.com" },
];

export const businessModels = [
  { model: "AI Wrapper", description: "包装 LLM/图像 API 做垂直场景", examples: "Chatbase, TypingMind, HeadshotPro" },
  { model: "SaaS 订阅", description: "月付/年付服务", examples: "PhotoAI, InteriorAI, Chatbase" },
  { model: "模板/Boilerplate", description: "一次性购买开发模板", examples: "ShipFast, CodeFast" },
  { model: "Freemium", description: "免费基础 + 付费高级", examples: "Carrd.co" },
  { model: "一次性付费", description: "买断制", examples: "TypingMind" },
  { model: "被收购退出", description: "构建后出售", examples: "MakeLanding ($35K), Headlime" },
];

export const trends = [
  { title: "一人公司可行", description: "以上案例大多是一个人运营，无员工" },
  { title: "AI 图像类最赚钱", description: "PhotoAI、HeadshotPro、InteriorAI 都是图像方向" },
  { title: "海外付费意愿高", description: "主要面向欧美用户，付费转化率更高" },
  { title: "Twitter 获客", description: "几乎所有开发者都在 Twitter 上 #buildinpublic" },
  { title: "Vibe Coding 降门槛", description: "Cursor、Bolt.new、Lovable 让非程序员也能快速构建产品" },
];

export const tools = [
  { category: "AI 代码编辑器", items: "Cursor, Windsurf, GitHub Copilot" },
  { category: "应用构建器", items: "Lovable, Bolt.new, Replit Agent" },
  { category: "UI 生成", items: "v0.dev, Lovable" },
  { category: "部署托管", items: "Vercel, Netlify, Railway" },
  { category: "数据库", items: "Supabase, PlanetScale" },
];

export const developers = [
  { name: "Pieter Levels", twitter: "levelsio", products: "PhotoAI, InteriorAI, Nomad List" },
  { name: "Marc Lou", twitter: "marc_louvion", products: "ShipFast, DataFast, TrustMRR" },
  { name: "Tony Dinh", twitter: "tdinh_me", products: "TypingMind" },
  { name: "Danny Postma", twitter: "dannypostma", products: "HeadshotPro" },
];

export const stats = [
  { label: "产品案例", value: "14+", suffix: "个" },
  { label: "独立开发者", value: "6", suffix: "位" },
  { label: "最高月收入", value: "$100K+", suffix: "" },
  { label: "商业模式", value: "6", suffix: "种" },
];

export interface Product {
  name: string;
  developer: string;
  developerTwitter?: string;
  description: string;
  monetization: string;
  revenue: string;
  url: string;
  logo: string;
  tags: string[];
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "ai-image",
    title: "AI 图像生成",
    subtitle: "用 AI 创造专业级图像，替代昂贵的摄影和设计服务",
    products: [
      {
        name: "PhotoAI",
        developer: "Pieter Levels",
        developerTwitter: "levelsio",
        description:
          "上传自拍训练个人 AI 模型，生成任意场景、服装、姿势的专业照片。约会照、职业照、旅行照一站搞定。",
        monetization: "订阅制",
        revenue: "$100K+/月",
        url: "https://photoai.com",
        logo: "https://www.google.com/s2/favicons?domain=photoai.com&sz=64",
        tags: ["头像", "照片生成", "订阅"],
      },
      {
        name: "HeadshotPro",
        developer: "Danny Postma",
        developerTwitter: "dannypostma",
        description:
          "上传 1-3 张自拍，10 分钟生成 50+ 张专业商务头像。比摄影师便宜 8 倍。",
        monetization: "单次购买",
        revenue: "$100万+ ARR",
        url: "https://headshotpro.com",
        logo: "https://www.google.com/s2/favicons?domain=headshotpro.com&sz=64",
        tags: ["头像", "商务", "单次付费"],
      },
      {
        name: "InteriorAI",
        developer: "Pieter Levels",
        developerTwitter: "levelsio",
        description:
          "上传房间照片，25 秒重新设计室内装修。55+ 种风格，支持虚拟布置和 3D 视频。",
        monetization: "订阅制",
        revenue: "高收入",
        url: "https://interiorai.com",
        logo: "https://www.google.com/s2/favicons?domain=interiorai.com&sz=64",
        tags: ["室内设计", "房地产", "订阅"],
      },
    ],
  },
  {
    id: "ai-chatbot",
    title: "AI 客服与聊天机器人",
    subtitle: "让 AI 接管客服，降低企业运营成本",
    products: [
      {
        name: "Chatbase",
        developer: "Yasser Elsaid",
        description:
          "上传文档即可创建 AI 客服机器人。支持 80+ 语言，覆盖网站、WhatsApp、Slack 等渠道。",
        monetization: "SaaS 订阅",
        revenue: "$100万+ ARR",
        url: "https://chatbase.co",
        logo: "https://www.google.com/s2/favicons?domain=chatbase.co&sz=64",
        tags: ["客服", "聊天机器人", "B2B"],
      },
    ],
  },
  {
    id: "ai-tools",
    title: "AI 工具与效率",
    subtitle: "用 AI 提升个人和团队的工作效率",
    products: [
      {
        name: "TypingMind",
        developer: "Tony Dinh",
        developerTwitter: "tdinh_me",
        description:
          "更好用的 ChatGPT 前端。自带 API Key、多模型切换、Prompt 管理、AI Agent，数据本地存储。",
        monetization: "一次性买断",
        revenue: "$100万+/年",
        url: "https://typingmind.com",
        logo: "https://www.google.com/s2/favicons?domain=typingmind.com&sz=64",
        tags: ["ChatGPT", "效率工具", "买断制"],
      },
    ],
  },
  {
    id: "dev-tools",
    title: "开发者工具与模板",
    subtitle: "帮助开发者快速上线产品的启动模板和工具",
    products: [
      {
        name: "ShipFast",
        developer: "Marc Lou",
        developerTwitter: "marc_louvion",
        description:
          "Next.js SaaS 启动模板。预置认证、支付、数据库、邮件、SEO，几天内上线产品。",
        monetization: "一次性购买",
        revenue: "$6.4K/月",
        url: "https://shipfa.st",
        logo: "https://www.google.com/s2/favicons?domain=shipfa.st&sz=64",
        tags: ["Next.js", "模板", "SaaS"],
      },
      {
        name: "DataFast",
        developer: "Marc Lou",
        developerTwitter: "marc_louvion",
        description: "数据驱动的创业增长分析工具，用数据而非直觉做决策。",
        monetization: "SaaS 订阅",
        revenue: "$21K/月",
        url: "https://datafa.st",
        logo: "https://www.google.com/s2/favicons?domain=datafa.st&sz=64",
        tags: ["数据分析", "增长", "SaaS"],
      },
      {
        name: "TrustMRR",
        developer: "Marc Lou",
        developerTwitter: "marc_louvion",
        description: "经过验证的创业公司收入数据库，透明公开的 MRR 数据。",
        monetization: "SaaS 订阅",
        revenue: "$27.6K/月",
        url: "https://trustmrr.com",
        logo: "https://www.google.com/s2/favicons?domain=trustmrr.com&sz=64",
        tags: ["数据", "透明收入", "SaaS"],
      },
      {
        name: "CodeFast",
        developer: "Marc Lou",
        developerTwitter: "marc_louvion",
        description: "几周而非几年学会编程的在线课程。",
        monetization: "课程付费",
        revenue: "$3.4K/月",
        url: "https://codefa.st",
        logo: "https://www.google.com/s2/favicons?domain=codefa.st&sz=64",
        tags: ["编程教育", "课程"],
      },
    ],
  },
  {
    id: "website-gen",
    title: "网站与落地页生成",
    subtitle: "用 AI 快速创建专业网站，验证商业想法",
    products: [
      {
        name: "Carrd.co",
        developer: "AJ",
        description:
          "极简一页式网站构建器。拖拽操作，响应式设计，Pro 版仅 $19/年。",
        monetization: "Freemium",
        revenue: "$100万+/年",
        url: "https://carrd.co",
        logo: "https://www.google.com/s2/favicons?domain=carrd.co&sz=64",
        tags: ["网站构建", "落地页", "Freemium"],
      },
      {
        name: "Mixo.io",
        developer: "独立开发者",
        description:
          "AI 一键生成落地页，面向创业者快速验证商业想法。",
        monetization: "SaaS 订阅",
        revenue: "快速增长",
        url: "https://mixo.io",
        logo: "https://www.google.com/s2/favicons?domain=mixo.io&sz=64",
        tags: ["AI 生成", "落地页"],
      },
    ],
  },
  {
    id: "other",
    title: "更多案例",
    subtitle: "其他值得关注的独立开发者产品",
    products: [
      {
        name: "SuperShrimp",
        developer: "Marc Lou",
        developerTwitter: "marc_louvion",
        description: "矫正不良体态的健康应用。",
        monetization: "SaaS 订阅",
        revenue: "$5.6K/月",
        url: "https://supershrimp.io",
        logo: "https://www.google.com/s2/favicons?domain=supershrimp.io&sz=64",
        tags: ["健康", "体态矫正"],
      },
      {
        name: "MakeLanding",
        developer: "Marc Lou",
        developerTwitter: "marc_louvion",
        description: "AI 一键生成落地页，已被收购。",
        monetization: "已收购",
        revenue: "$35K 退出",
        url: "https://makelanding.ai",
        logo: "https://www.google.com/s2/favicons?domain=makelanding.ai&sz=64",
        tags: ["AI 生成", "已退出"],
      },
      {
        name: "ProfilePicture.ai",
        developer: "Danny Postma",
        developerTwitter: "dannypostma",
        description: "AI 生成个性化艺术头像。",
        monetization: "单次付费",
        revenue: "未公开",
        url: "https://profilepicture.ai",
        logo: "https://www.google.com/s2/favicons?domain=profilepicture.ai&sz=64",
        tags: ["头像", "AI 生成"],
      },
    ],
  },
];

export const marcLouProducts = [
  { name: "TrustMRR", revenue: "$27,600", url: "https://trustmrr.com" },
  { name: "DataFast", revenue: "$21,000", url: "https://datafa.st" },
  { name: "ShipFast", revenue: "$6,400", url: "https://shipfa.st" },
  { name: "SuperShrimp", revenue: "$5,600", url: "https://supershrimp.io" },
  { name: "CodeFast", revenue: "$3,400", url: "https://codefa.st" },
  { name: "Indie Page", revenue: "$1,400", url: "https://indiepa.ge" },
  { name: "LaunchViral", revenue: "$387", url: "https://launchvir.al" },
  { name: "ByeDispute", revenue: "$248", url: "https://byedispute.com" },
];

export const businessModels = [
  {
    model: "AI Wrapper",
    description: "包装 LLM 或图像 API，做垂直场景",
    examples: "Chatbase · TypingMind · HeadshotPro",
    icon: "⚡",
  },
  {
    model: "SaaS 订阅",
    description: "按月或按年付费的持续服务",
    examples: "PhotoAI · InteriorAI · Chatbase",
    icon: "🔄",
  },
  {
    model: "模板销售",
    description: "一次性购买开发模板或启动套件",
    examples: "ShipFast · CodeFast",
    icon: "📦",
  },
  {
    model: "Freemium",
    description: "免费基础功能 + 付费高级功能",
    examples: "Carrd.co",
    icon: "🆓",
  },
  {
    model: "买断制",
    description: "一次付费终身使用",
    examples: "TypingMind",
    icon: "💎",
  },
  {
    model: "收购退出",
    description: "构建产品后出售给大公司",
    examples: "MakeLanding · Headlime",
    icon: "🎯",
  },
];

export const trends = [
  {
    number: "01",
    title: "一人公司成为现实",
    description:
      "以上案例大多是一个人运营、零员工。AI 编程工具让单人可以完成过去需要团队才能做到的事情。",
  },
  {
    number: "02",
    title: "AI 图像赛道最赚钱",
    description:
      "PhotoAI、HeadshotPro、InteriorAI 都在图像方向。视觉内容的付费意愿最强，客单价高。",
  },
  {
    number: "03",
    title: "海外市场付费意愿高",
    description:
      "主要面向欧美用户，付费转化率远高于国内市场。出海是个人开发者的优选路径。",
  },
  {
    number: "04",
    title: "Twitter 是核心获客渠道",
    description:
      "几乎所有开发者都在 Twitter 上 #buildinpublic，透明分享收入和开发过程，吸引早期用户。",
  },
  {
    number: "05",
    title: "Vibe Coding 降低门槛",
    description:
      "Cursor、Bolt.new、Lovable 等工具让非程序员也能快速构建产品。编程不再是唯一门槛。",
  },
];

export const tools = [
  {
    category: "AI 代码编辑器",
    items: ["Cursor", "Windsurf", "GitHub Copilot"],
  },
  { category: "应用构建器", items: ["Lovable", "Bolt.new", "Replit Agent"] },
  { category: "UI 生成", items: ["v0.dev", "Lovable"] },
  { category: "部署托管", items: ["Vercel", "Netlify", "Railway"] },
  { category: "数据库", items: ["Supabase", "PlanetScale"] },
];

export const developers = [
  {
    name: "Pieter Levels",
    handle: "@levelsio",
    products: "PhotoAI · InteriorAI · Nomad List",
    url: "https://twitter.com/levelsio",
    revenue: "$300万+/年",
  },
  {
    name: "Marc Lou",
    handle: "@marc_louvion",
    products: "ShipFast · DataFast · TrustMRR",
    url: "https://twitter.com/marc_louvion",
    revenue: "$80万/年",
  },
  {
    name: "Tony Dinh",
    handle: "@tdinh_me",
    products: "TypingMind · BlackMagic",
    url: "https://twitter.com/tdinh_me",
    revenue: "$100万+/年",
  },
  {
    name: "Danny Postma",
    handle: "@dannypostma",
    products: "HeadshotPro · ProfilePicture.ai",
    url: "https://twitter.com/dannypostma",
    revenue: "$100万+ ARR",
  },
];

export const stats = [
  { value: "14+", label: "产品案例" },
  { value: "6", label: "独立开发者" },
  { value: "$100K+", label: "最高月收入" },
  { value: "6", label: "商业模式" },
];

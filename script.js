const dict = {
  zh: {
    navPortfolio: "业务组合",
    navPlatform: "平台能力",
    navContact: "联系",
    heroOverline: "PRIVATE HOLDING PLATFORM",
    heroTitle: "为长期主义企业，打造通往百亿美金估值的增长平台。",
    heroCopy: "8848.Group 连接品牌、运营与资本，以系统化能力推动业务持续增长，并构建跨周期竞争力。",
    heroBtnPrimary: "查看业务组合",
    heroBtnSecondary: "查看平台能力",
    metricBusiness: "核心业务单元",
    metricEngines: "增长引擎",
    metricPlatform: "控股平台",
    portfolioOverline: "PORTFOLIO",
    portfolioTitle: "多业务协同，不做单点波动。",
    coffeeDesc: "精品咖啡品牌运营，围绕产品、空间和区域复制形成稳健增长。",
    studioDesc: "会务与活动业务，从策略到执行，交付高质量商业场景。",
    incubationTitle: "投资孵化",
    incubationDesc: "围绕产业链上下游做投资孵化，提升组合韧性与长期回报能力。",
    momDesc: "龙虾妈妈业务，打通产品、渠道与口碑，放大品牌势能。",
    buzzDesc: "AI 新闻业务，提供高信噪比资讯筛选、聚合与传播。",
    fundDesc: "基金业务，以产业认知驱动资本配置，服务长期价值创造。",
    clubDesc: "会员与社群业务，连接高价值人群、内容与线下场景。",
    platformOverline: "PLATFORM CAPABILITIES",
    platformTitle: "品牌、运营、资本三位一体，形成可复用的增长基础设施。",
    pillar1Title: "品牌架构",
    pillar1Desc: "统一品牌系统与叙事框架，提升市场认知与资产溢价。",
    pillar2Title: "运营卓越",
    pillar2Desc: "通过标准化运营体系，实现高质量交付和规模化复制。",
    pillar3Title: "资本配置",
    pillar3Desc: "以产业洞察指导资本配置，强化现金流与长期回报表现。",
    contactTitle: "与 8848.Group 一起，定义下一阶段增长曲线。",
    contactDesc: "当前官网已上线 GitHub，可继续升级为完整集团门户与多页面站点。",
    footerLine: "为长期企业价值而建。",
    toggle: "EN",
    aria: "切换语言 / Toggle language"
  },
  en: {
    navPortfolio: "Portfolio",
    navPlatform: "Platform",
    navContact: "Contact",
    heroOverline: "PRIVATE HOLDING PLATFORM",
    heroTitle: "A growth platform built for enduring enterprises on the path to $100B valuation.",
    heroCopy: "8848.Group integrates brand, operations, and capital to compound growth and build cycle-resilient competitiveness.",
    heroBtnPrimary: "Explore Portfolio",
    heroBtnSecondary: "View Platform",
    metricBusiness: "Core Business Units",
    metricEngines: "Growth Engines",
    metricPlatform: "Holding Platform",
    portfolioOverline: "PORTFOLIO",
    portfolioTitle: "Diversified businesses, integrated for anti-cyclical strength.",
    coffeeDesc: "Specialty coffee operations with disciplined growth across product, space, and regional replication.",
    studioDesc: "Conference and event operations delivering premium commercial experiences from strategy to execution.",
    incubationTitle: "Investment & Incubation",
    incubationDesc: "Investing and incubating across the value chain to strengthen portfolio resilience and long-term returns.",
    momDesc: "openclaw.mom (Lobster Mom): scaling brand energy through product, channels, and reputation.",
    buzzDesc: "8848.buzz: high-signal AI news filtering, aggregation, and distribution.",
    fundDesc: "8848.fund: industry-informed capital allocation focused on long-term value creation.",
    clubDesc: "8848Club: membership and community platform connecting high-value people, content, and offline experiences.",
    platformOverline: "PLATFORM CAPABILITIES",
    platformTitle: "Brand, operations, and capital as one integrated growth infrastructure.",
    pillar1Title: "Brand Architecture",
    pillar1Desc: "Unified brand system and narrative to strengthen market perception and strategic premium.",
    pillar2Title: "Operational Excellence",
    pillar2Desc: "Standardized operating systems for quality delivery and scalable replication.",
    pillar3Title: "Capital Allocation",
    pillar3Desc: "Industry-led allocation discipline to reinforce cash flow and long-term return profile.",
    contactTitle: "Partner with 8848.Group to define your next growth curve.",
    contactDesc: "The site is live on GitHub and can scale into a full multi-page corporate portal.",
    footerLine: "Built for Enduring Enterprise Value.",
    toggle: "中文",
    aria: "Toggle language / 切换语言"
  }
};

let lang = "zh";

function applyLang(nextLang) {
  lang = nextLang;
  document.documentElement.lang = nextLang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = dict[nextLang][node.dataset.i18n];
  });
  const toggle = document.getElementById("lang-toggle");
  toggle.textContent = dict[nextLang].toggle;
  toggle.setAttribute("aria-label", dict[nextLang].aria);
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  applyLang(lang === "zh" ? "en" : "zh");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear().toString();
applyLang("zh");

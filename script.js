const dict = {
  zh: {
    navPortfolio: "业务版图",
    navPlatform: "平台体系",
    navContact: "合作联系",
    heroOverline: "PRIVATE HOLDING PLATFORM",
    heroTitle: "8848 Group 控股平台，驱动跨产业的长期增长与资本韧性。",
    heroCopy: "我们以集团化方法整合品牌运营、组织效率与资本能力，为成员企业提供可审计、可复制、可持续的增长系统。",
    heroBtnPrimary: "查看业务版图",
    heroBtnSecondary: "查看平台体系",
    metricBusiness: "战略业务单元",
    metricEngines: "核心增长引擎",
    metricPlatform: "集团控股平台",
    portfolioOverline: "BUSINESS PORTFOLIO",
    portfolioTitle: "七大业务协同运行，形成抗周期、可扩展的集团化组合。",
    coffeeDesc: "精品咖啡品牌业务，以产品标准、门店运营和区域复制推动稳定现金流增长。",
    studioDesc: "会务与活动服务体系，覆盖策划、执行与复盘，交付高规格商业活动成果。",
    incubationTitle: "投资与孵化",
    incubationDesc: "围绕产业链关键节点进行投资孵化，构建长期回报与战略协同能力。",
    momDesc: "openclaw.mom 品牌业务，打通产品、渠道与口碑资产，提升品牌复购与规模效率。",
    buzzDesc: "8848.buzz AI 信息业务，提供高信噪比资讯筛选、结构化分发与行业洞察支持。",
    fundDesc: "8848.fund 资本业务，以产业研究驱动配置决策，强化风险控制与复利增长。",
    clubDesc: "8848Club 会员生态，连接高净值人群、内容资源与线下场景，提升平台影响力。",
    platformOverline: "GROUP PLATFORM",
    platformTitle: "以品牌战略、运营治理和资本配置为底层能力，统一支撑各业务稳健扩张。",
    pillar1Title: "品牌战略系统",
    pillar1Desc: "统一品牌定位、叙事和传播框架，强化市场认知与品牌资产沉淀。",
    pillar2Title: "运营治理系统",
    pillar2Desc: "通过标准流程、质量控制与组织机制，保障业务可复制与可持续交付。",
    pillar3Title: "资本管理系统",
    pillar3Desc: "以审慎配置和风险纪律管理资金效率，提升现金流质量与长期回报能力。",
    contactTitle: "与 8848 Group 建立长期合作，进入下一阶段规模增长。",
    contactDesc: "如需业务合作、投资交流或平台共建，请通过 GitHub 与我们联系。",
    footerLine: "为长期企业价值而建。",
    toggle: "EN",
    aria: "切换语言 / Toggle language"
  },
  en: {
    navPortfolio: "Portfolio",
    navPlatform: "Platform",
    navContact: "Contact",
    heroOverline: "PRIVATE HOLDING PLATFORM",
    heroTitle: "8848 Group Holding Platform powering cross-industry growth with institutional resilience.",
    heroCopy: "We integrate brand operations, organizational discipline, and capital capability into an auditable, repeatable, and durable growth system.",
    heroBtnPrimary: "View Portfolio",
    heroBtnSecondary: "View Platform",
    metricBusiness: "Strategic Business Units",
    metricEngines: "Core Growth Engines",
    metricPlatform: "Group Holding Platform",
    portfolioOverline: "BUSINESS PORTFOLIO",
    portfolioTitle: "Seven coordinated businesses engineered for anti-cyclical and scalable portfolio performance.",
    coffeeDesc: "Specialty coffee business driven by product standards, store operations, and disciplined regional replication.",
    studioDesc: "Conference and event services covering strategy, execution, and review with premium commercial delivery.",
    incubationTitle: "Investment & Incubation",
    incubationDesc: "Investment and incubation across key value-chain nodes to build long-term returns and strategic synergies.",
    momDesc: "openclaw.mom brand operation connecting product, channels, and reputation assets to improve scale efficiency.",
    buzzDesc: "8848.buzz AI information unit delivering high-signal filtering, structured distribution, and sector intelligence.",
    fundDesc: "8848.fund capital arm guided by industry research, risk discipline, and compounding-oriented allocation.",
    clubDesc: "8848Club membership ecosystem linking high-value people, content assets, and offline experiences.",
    platformOverline: "GROUP PLATFORM",
    platformTitle: "Brand strategy, operational governance, and capital management working as a unified growth foundation.",
    pillar1Title: "Brand Strategy System",
    pillar1Desc: "Unified positioning, narrative, and communication architecture to strengthen market authority.",
    pillar2Title: "Operational Governance System",
    pillar2Desc: "Standardized processes and quality controls ensuring scalable and reliable execution.",
    pillar3Title: "Capital Management System",
    pillar3Desc: "Prudent allocation and risk discipline to improve cash-flow quality and long-term returns.",
    contactTitle: "Build long-term partnerships with 8848 Group for the next phase of scale.",
    contactDesc: "For business cooperation, investment dialogue, or platform co-building, connect with us via GitHub.",
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

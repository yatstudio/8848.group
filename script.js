const dict = {
  zh: {
    navBusiness: "业务",
    navStrategy: "战略",
    navContact: "联系",
    heroKicker: "8848 GROUP",
    heroTitle: "以品牌为矛，以运营为盾，以资本放大增长。",
    heroLead: "在消费与产业交汇处，我们打造可持续的商业系统，而不是短期热点。",
    heroBtnMain: "查看业务版图",
    heroBtnAlt: "了解方法论",
    metricUnits: "核心业务单元",
    metricSystem: "统一增长系统",
    businessKicker: "BUSINESS MATRIX",
    businessTitle: "业务矩阵",
    coffeeDesc: "精品咖啡品牌运营，覆盖产品研发、空间体验与区域增长复制。",
    studioDesc: "会务业务与活动执行，从内容策划到现场交付的一体化服务。",
    incubationTitle: "投资孵化",
    incubationDesc: "以产业协同为核心，投资并孵化具备长期价值与现金流能力的项目。",
    momDesc: "龙虾妈妈业务，连接产品、渠道和口碑，实现品牌增长闭环。",
    buzzDesc: "AI 新闻业务，聚焦高价值资讯筛选、聚合与传播。",
    fundDesc: "基金业务，围绕产业升级进行资本配置与长期价值管理。",
    strategyKicker: "OPERATING THESIS",
    strategyTitle: "我们不是做单点项目，而是搭建增长引擎。",
    s1: "品牌：定位与叙事，让业务被记住。",
    s2: "运营：流程与交付，让结果可复制。",
    s3: "资本：投资与孵化，让价值被放大。",
    contactTitle: "让下一次增长，发生在同一张桌子上。",
    contactDesc: "可通过 GitHub 与我们保持同步，后续可扩展为完整品牌官网。",
    footerLine: "大胆构建，真实增长。",
    toggle: "EN",
    aria: "切换语言 / Toggle language"
  },
  en: {
    navBusiness: "Business",
    navStrategy: "Strategy",
    navContact: "Contact",
    heroKicker: "8848 GROUP",
    heroTitle: "Brand as spear, operations as shield, capital as amplifier.",
    heroLead: "At the intersection of consumer and industry, we build durable systems, not temporary hype.",
    heroBtnMain: "Explore Businesses",
    heroBtnAlt: "Our Operating Thesis",
    metricUnits: "Core Business Units",
    metricSystem: "Unified Growth System",
    businessKicker: "BUSINESS MATRIX",
    businessTitle: "Business Matrix",
    coffeeDesc: "Specialty coffee brand operations across product R&D, space experience, and regional scale.",
    studioDesc: "Conference and event operations from strategy and content to on-site execution.",
    incubationTitle: "Investment & Incubation",
    incubationDesc: "Industry-aligned investments and incubation with long-term value and cashflow potential.",
    momDesc: "openclaw.mom (Lobster Mom): product, channel, and reputation-driven brand growth.",
    buzzDesc: "8848.buzz: AI news intelligence with high-signal filtering, aggregation, and distribution.",
    fundDesc: "8848.fund: fund operations focused on industrial upgrading and long-term capital allocation.",
    strategyKicker: "OPERATING THESIS",
    strategyTitle: "We do not run one-off projects. We build growth engines.",
    s1: "Brand: positioning and narrative that make ventures memorable.",
    s2: "Operations: systems and delivery that make outcomes repeatable.",
    s3: "Capital: investment and incubation that scale enterprise value.",
    contactTitle: "Let the next wave of growth happen at one table.",
    contactDesc: "Follow our GitHub now. This can evolve into a full corporate website next.",
    footerLine: "Build Bold. Scale Real.",
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

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
document.getElementById("year").textContent = new Date().getFullYear().toString();
applyLang("zh");

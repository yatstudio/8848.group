const dict = {
  zh: {
    heroEyebrow: "8848 GROUP",
    heroTitle: "链接产业价值，打造增长引擎。",
    heroSub: "我们围绕消费、会务、孵化与餐饮品牌构建业务生态，持续创造真实商业回报。",
    heroCta: "查看业务版图",
    businessTitle: "核心业务矩阵",
    coffeeDesc: "精品咖啡品牌运营，覆盖产品研发、空间体验与区域增长。",
    studioDesc: "会务业务与活动策划执行，提供从内容到落地的一体化服务。",
    incubationTitle: "投资孵化",
    incubationDesc: "以产业协同为导向，投资并孵化具备长期价值的创新项目。",
    momDesc: "龙虾妈妈品牌业务，连接产品、渠道与用户口碑增长。",
    aboutTitle: "关于 8848.Group",
    aboutBody: "8848.Group 聚焦“品牌 + 运营 + 资本”的协同模式，帮助项目从 0 到 1、从 1 到 N，形成可复制、可持续的增长路径。",
    footerLine: "大胆构建，真实增长。",
    toggle: "EN",
    aria: "切换语言 / Toggle language"
  },
  en: {
    heroEyebrow: "8848 GROUP",
    heroTitle: "Connecting industries, scaling meaningful growth.",
    heroSub: "We build a practical business ecosystem across coffee, event operations, incubation, and consumer brands.",
    heroCta: "Explore Our Businesses",
    businessTitle: "Core Business Matrix",
    coffeeDesc: "Specialty coffee brand operations with product R&D, space experience, and regional expansion.",
    studioDesc: "Event and conference operations with end-to-end planning and execution.",
    incubationTitle: "Investment & Incubation",
    incubationDesc: "Industry-driven investment and incubation for projects with long-term value.",
    momDesc: "openclaw.mom (Lobster Mom): brand growth across product, channels, and reputation.",
    aboutTitle: "About 8848.Group",
    aboutBody: "8848.Group combines brand building, operations, and capital to help ventures move from zero to one and scale from one to many.",
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

document.getElementById("year").textContent = new Date().getFullYear().toString();
applyLang("zh");

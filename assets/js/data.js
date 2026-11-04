/* ============================================================
   你的作品集資料都在這個檔案，改這裡就好，不用動 HTML。
   - 圖片：把截圖放進 assets/img/，然後在 image 填路徑，例如 "assets/img/my-app.jpg"
     沒有圖片就留空 ""，會用彩色色塊加上 mark 文字代替。
   - category 要對應下面 CATEGORIES 裡的 id。
   - color 可用：coral / sun / mint / sky / grape
   ============================================================ */

const PROFILE = {
  name: "wantingpan",
  initials: "W",                             // 沒有大頭照時，圓圈裡顯示的字
  handle: "wantingpan",                      // GitHub 帳號
  location: "台北",
  role: "系統分析師 / 專案管理",
  avatar: "",                                // 例如 "https://avatars.githubusercontent.com/wantingpan"，留空會顯示 initials
  headline: "把複雜的商業需求，\n變成穩定好用的系統",
  bio: "10 年以上軟體工程與系統分析經驗，從寫程式的工程師一路走到系統分析與專案管理。擅長 C#、.NET、MSSQL 與 Angular，會用 Figma、Axure、UML 把需求畫清楚，再用 Scrum 和 Azure DevOps 把專案穩穩推到上線。",
  stats: [
    { value: "10+", label: "年軟體開發經驗" },
    { value: "17", label: "個專案實績" },
    { value: "6", label: "個產業領域" },
  ],
  links: {
    github: "https://github.com/wantingpan",
    resume: "",                                // 想公開完整履歷再填連結
    email: "",                               // ← 填你的 Email，「索取履歷」和「複製 Email」按鈕才會出現
    linkedin: "",                            // ← 填 LinkedIn 網址，留空就不顯示
  },
  skills: ["C#", ".NET Core", "ASP.NET MVC", "Angular", "TypeScript", "MSSQL", "RESTful API", "Azure DevOps", "Scrum", "CI/CD", "Figma", "Axure", "UML"],
};

/* ============================================================
   聯絡區：求職狀態、目標職位、價值主張
   ============================================================ */
const CONTACT = {
  open: true,                                // 正在找工作 → true；不想顯示求職狀態 → false
  status: "正在尋找新機會",
  headline: "在找系統分析或專案管理夥伴嗎？",
  text: "我擅長把模糊的需求變成清楚的規格，再帶著團隊穩穩上線。想了解更多，歡迎來信索取完整履歷。",
  prefs: [
    { label: "目標職位", value: "技術專案經理 (Technical PM) · 系統分析師" },
    { label: "工作地點", value: "台北 · 可接受混合辦公" },
    { label: "熟悉產業", value: "製造 · 電商 · 零售 · 醫療" },
  ],
  response: "通常 1–2 個工作天內回覆",
  resumeSubject: "索取完整履歷｜wantingpan",
  resumeBody: "您好，我在您的作品集網站看到您的經歷，想索取完整履歷。\n\n公司：\n職缺：\n聯絡人：\n聯絡電話：\n\n謝謝！",
};

const VALUE_PROPS = [
  { color: "sky", icon: "01", title: "把需求講清楚", text: "用訪談、Figma / Axure 原型、UML 與流程圖，在開發前就和利害關係人對齊範圍，減少返工。" },
  { color: "sun", icon: "02", title: "把專案控得住", text: "以 Scrum 和 Azure DevOps Dashboard 讓時程、里程碑和風險透明化，提早發現問題。" },
  { color: "mint", icon: "03", title: "把技術落地", text: "10 年以上 C#、.NET、Angular 實戰經驗，能和工程團隊說同一種語言，也能親自下場開發。" },
];

/* 技能分組（顯示在「技能」區塊） */
const SKILL_GROUPS = [
  { title: "後端與架構", color: "coral", items: ["C#", "ASP.NET MVC5", ".NET Core", "WPF", "Entity Framework", "LINQ", "Dapper", "SqlBulkCopy"] },
  { title: "前端開發", color: "sun", items: ["HTML5 / CSS3", "JavaScript", "TypeScript", "Angular / AngularJS", "RxJS", "jQuery", "Bootstrap", "Kendo UI"] },
  { title: "資料與串接", color: "mint", items: ["SQL Server / T-SQL", "效能調校", "RESTful API", "JSON", "XML"] },
  { title: "雲端與工具", color: "sky", items: ["Microsoft Azure", "Azure Functions", "Azure Storage Queue", "Visual Studio", "SSMS", "Git", "VSTS / TFS", "Figma", "Axure", "Visio"] },
  { title: "專案管理", color: "grape", items: ["系統分析", "需求訪談", "UML / 流程圖", "Scrum", "Azure DevOps Dashboard", "時程與風險控管", "CI/CD", "技術移轉"] },
];

const CATEGORIES = [
  { id: "all", label: "全部" },
  { id: "mfg", label: "智慧製造" },
  { id: "ecom", label: "電商平台" },
  { id: "ent", label: "企業系統" },
  { id: "health", label: "醫療照護" },
  { id: "pos", label: "售票與 POS" },
  { id: "gov", label: "政府與研究" },
];

const PROJECTS = [
  {
    title: "商場 OMO 虛實融合平台",
    role: "系統分析師",
    period: "2026 –",
    category: "ecom", color: "coral", mark: "OMO",
    image: "",
    description: "讓百貨的實體會員也能在 APP 玩遊戲、參加館內各種活動，提升會員黏著度與顧客服務。平台串起會員 APP、專櫃 POS 與會員資料，點數和折價券線上線下即時同步。目前 Presale 規劃完成，正在開發串接中。",
    industry: "百貨零售業",
    users: "商場營運與行銷人員、專櫃人員、消費者",
    problem: "點數折抵延遲、行銷推播無感、舊專櫃 POS 無法連線，POS、贈品系統、停車場與 APP 資料各自獨立",
    myRole: "Presale 規劃：產品概念、目標、系統架構與資料流",
    team: "6 人，跨 4 家公司合作",
    points: ["部署在商場地端主機，串接專櫃 POS、贈品系統、停車場服務與消費者 APP", "與內部多套系統協作串接（CDP、BI 等）", "以 CDP 作為單一事實來源，串起 APP、POS 與 CRM", "中介層 + API Gateway 串接異質 POS，不用換硬體", "第二階段規劃嵌入式金融：數位錢包、BNPL、場景保險", "規劃產品網頁的 GEO 內容策略"],
    tags: ["地端部署", "CDP", "CRM", "API Gateway", "POS 串接", "停車場服務", "GEO"],
    links: [],
  },
  /* 選填欄位（給非技術主管看）：
     impact   → 卡片上的亮點成果
     industry → 🏭 產業
     users    → 👥 誰在用
     problem  → 🎯 解決的問題
     myRole   → 🧑‍💼 我的角色 */
  {
    title: "全球樣品申請管理系統",
    role: "軟體工程師 → 系統分析師",
    period: "2020 – 2022.7、2025.12 – 2026.7",
    category: "mfg", color: "sky", mark: "樣品",
    image: "",
    description: "讓光電製造業客戶的全球業務在同一個平台申請樣品、追蹤進度，訂單狀態有變動就自動同步到工廠系統。",
    impact: "樣品申請時效從 14 天縮短到 4 天（約 70%）",
    industry: "光電製造業",
    users: "全球業務、研發團隊、生產管理與工廠現場人員",
    problem: "訂單資訊分散在各據點、進度難掌握；系統需要同時符合多國業務模式",
    myRole: "系統分析、開發、時程與部分風險管理",
    team: "4 人",
    points: ["用 Axure 設計介面與流程，和全球使用者對齊需求", "擴充 NPI（新產品導入）模組，整合研發團隊的專案管理流程", "用 Azure Storage Queue 搭配 Azure Functions 自動同步訂單狀態", "以 Azure DevOps Dashboard 呈現時程與風險"],
    tags: ["C#", "MVC5", "Entity Framework", "AngularJS", "Azure Functions", "Azure Storage Queue", "Axure", "Azure DevOps"],
    links: [],
  },
  {
    title: "智慧工廠系統（Lotus Notes 改寫）",
    role: "軟體工程師 → 系統分析師",
    period: "2020 – 2022.5",
    category: "mfg", color: "mint", mark: "工廠",
    image: "",
    description: "把工廠原本的 Lotus Notes 系統改寫成新平台，並和全球樣品申請管理系統自動同步訂單狀態，讓工廠從接單到出貨都能線上管理。",
    impact: "點檢與放行單全面數位化",
    industry: "光電製造業",
    users: "工廠生產管理與現場人員",
    problem: "接單到出貨流程長、製程細節難掌控，點檢與放行單皆靠人工處理，成本過高",
    myRole: "系統分析、開發、時程與部分風險管理",
    team: "4 人",
    points: ["將舊有 Lotus Notes 系統改寫到新平台", "透過 Azure Storage Queue 與 Azure Functions，和樣品系統自動同步訂單狀態", "建置點檢與放行單製作功能"],
    tags: ["C#", "MVC5", "Entity Framework", "AngularJS", "Azure Functions", "Azure Storage Queue", "Lotus Notes 移轉"],
    links: [],
  },
  {
    title: "集團型電商系統",
    role: "系統分析師",
    period: "2023 – 2024",
    category: "ecom", color: "coral", mark: "商城",
    image: "",
    description: "集團旗下的網路商城，整合集團點數與活動；在預算有限、多個需求變更並行的情況下，持續推進新功能與系統優化。",
    impact: "系統品質良率提升至 99% 以上",
    industry: "電子商務",
    users: "一般消費者",
    problem: "串接集團相關點數與活動，讓消費者購物時可以直接折抵",
    myRole: "系統分析、時程與風險控管",
    team: "共 8 人：1\u00a0PM・3\u00a0SA・1\u00a0SD・3\u00a0PG",
    points: [
      "交付多項重點需求變更：會員分級優惠、自訂免運與主題活動、GA4 埋碼、跨站購物、據點取貨",
      "整合點數與金流：點數、點＋金與信用卡等多元支付",
      "效能與品質優化：資料庫查詢調校、修正價格顯示邏輯",
    ],
    tags: ["UML", "Azure DevOps", "Scrum", "GA4"],
    links: [],
  },
  {
    title: "虛擬商品庫存中台系統",
    role: "系統分析師",
    period: "2024 – 2025",
    category: "ecom", color: "grape", mark: "中台",
    image: "",
    description: "遊戲公司的虛擬商品買賣與庫存控管中台，串起商務與資料流。",
    points: ["用 UML 與流程圖說明商務與資料流", "專案時程與版本控管", "協助上線測試"],
    tags: ["UML", "流程圖", "Azure DevOps"],
    links: [],
  },
  {
    title: "人力招募系統改寫與技術移轉",
    role: "系統分析師",
    period: "2023 – 2025",
    category: "ent", color: "mint", mark: "招募",
    image: "",
    description: "零售集團的招募系統改寫，帶領團隊如期完成架構重建，並把技術完整移轉給客戶。",
    points: ["用 Figma 與流程圖對齊需求", "提供客戶整體解決方案", "建置產品版控與 CI/CD", "提供顧問服務，教導客戶團隊專案管理與 CI/CD 設定", "完成技術移轉"],
    tags: ["Figma", "流程圖", "CI/CD", "顧問服務", "技術移轉"],
    links: [],
  },
  {
    title: "汽車集團部署整合顧問",
    role: "系統分析師",
    period: "2023 –",
    category: "ent", color: "sun", mark: "CI/CD",
    image: "",
    description: "協助客戶梳理多方外包商的開發與部署方式，建立 CI/CD 流程規範。",
    points: ["了解客戶與外包商的部署流程", "設定 CI/CD 流程與測試"],
    tags: ["CI/CD", "Azure DevOps"],
    links: [],
  },
  {
    title: "傳直銷電子購物商城",
    role: "軟體工程師",
    period: "2020 – 2022（維運至今）",
    category: "ecom", color: "sun", mark: "電商",
    image: "",
    description: "傳直銷產業的電子購物商城建置，前後端整合開發。",
    points: ["負責開發與資料串接", "前後端以 RESTful API 整合"],
    tags: ["C#", ".NET Core", "RESTful API", "Angular 8", "RxJS", "Axure"],
    links: [],
  },
  {
    title: "APP 車輛派遣通知後台",
    role: "軟體工程師",
    period: "2019 – 2020",
    category: "ent", color: "coral", mark: "派遣",
    image: "",
    description: "物流業司機 APP 的管理後台，讓調度人員和管理者能即時派發臨時任務，透過推播把通知與派送單直接送到司機手機上。",
    points: [
      "管理司機資料、所在位置與 APP 內容",
      "串接公司內部系統，自動推播通知到行動裝置",
      "臨時調度時可從後台發送推播與派送單，司機馬上接到任務",
      "負責後台管理功能開發，以及提供 APP 串接的 API",
    ],
    tags: ["C#", ".NET Core", "RESTful API", "Angular 7"],
    links: [],
  },
  {
    title: "農業入口形象網",
    role: "軟體工程師",
    period: "2018 – 2019",
    category: "gov", color: "mint", mark: "農業",
    image: "",
    description: "政府標案的農業入口形象網站。",
    points: ["前後端開發", "Kendo UI 與 Bootstrap 介面"],
    tags: ["C#", "MVC5", ".NET Core", "Angular 7", "Kendo UI"],
    links: [],
  },
  {
    title: "大量發票資料批次上傳",
    role: "軟體工程師",
    period: "2018",
    category: "ent", color: "grape", mark: "發票",
    image: "",
    description: "為政府財政資料單位處理巨量發票資料上傳，解決大量資料傳輸的效能問題。",
    points: ["用 Dapper 與 SqlBulkCopy 提升寫入效能", "負責開發與維運"],
    tags: ["C#", "Dapper", "SqlBulkCopy", "Entity Framework"],
    links: [],
  },
  {
    title: "雲端智慧醫療照護平台",
    role: "系統工程師",
    period: "2016 – 2018",
    category: "health", color: "coral", mark: "醫療",
    image: "",
    description: "多平台的雲端照護網站，涵蓋日間照護、長期照護、轉診、婦產照護、慢性病照護等，提供醫護與醫管人員追蹤管理。",
    points: ["與診所醫療系統 API 串接", "負責開發與維運"],
    tags: ["C#", "MVC5", "RESTful API", "Kendo UI", "CI"],
    links: [],
  },
  {
    title: "遊樂園自動售票機",
    role: "軟體工程師",
    period: "2014 – 2016",
    category: "pos", color: "sun", mark: "售票",
    image: "",
    description: "遊樂園的自動售票機操作介面與流程。",
    points: ["規劃與設計操作流程", "開發互動介面"],
    tags: ["C#", "WPF", "MSSQL", "Visio"],
    links: [],
  },
  {
    title: "客製化餐飲銷售系統",
    role: "軟體工程師",
    period: "2014 – 2016",
    category: "pos", color: "mint", mark: "點餐",
    image: "",
    description: "依客戶配方比例客製化的點餐與銷售系統。",
    points: ["和客戶討論配方比例與呈現方式", "開發點餐、客製化帳單與銷售計算"],
    tags: ["C#", "WPF", "MSSQL"],
    links: [],
  },
  {
    title: "影城售票與商品販售系統",
    role: "軟體工程師",
    period: "2014 – 2016",
    category: "pos", color: "grape", mark: "影城",
    image: "",
    description: "影城的售票與商品販售系統。",
    points: ["負責商品兌換功能", "負責配方計算"],
    tags: ["C#", "WPF", "T-SQL", "MSSQL"],
    links: [],
  },
  {
    title: "環境安全與防災物聯網",
    role: "專任研究助理",
    period: "2012 – 2014",
    category: "gov", color: "sky", mark: "防災",
    image: "",
    description: "經濟部研發計畫：在橋梁、道路、校舍等結構物裝設感應器，於地圖上顯示安全等級並分析量測數值，災後即時判斷結構是否安全。",
    points: ["資料庫分析與程式設計", "網頁維護", "協助研發計畫會議資料"],
    tags: ["C#", "ASP.NET", "Silverlight", "WPF", "T-SQL"],
    links: [],
  },
  {
    title: "RIA Wafer Map Generator",
    role: "大學專題",
    period: "2011 – 2012",
    category: "mfg", color: "coral", mark: "晶圓",
    image: "",
    description: "以 RIA 技術開發的晶圓圖產生器，拿下資訊應用服務創新競賽第三名。",
    points: ["第 16 屆資訊應用服務創新競賽 第三名", "微軟 Imagine Cup 台灣區參賽資格"],
    tags: ["C#", "WPF", "Silverlight", "TFS"],
    links: [],
  },
];

/* 「經歷」時間軸：由新到舊 */
const STORY = [
  { year: "2023", title: "系統分析師", period: "2023.04 – 至今", text: "負責需求訪談、介面與流程設計、專案時程與風險控管，帶領團隊完成光電、汽車、遊戲、零售等產業的大型專案。" },
  { year: "2018", title: "軟體工程師", period: "2018.07 – 2022.06", text: "參與智慧工廠、電商商城、物流派遣、政府網站與發票批次等專案，前後端都做，也處理大量資料效能問題。" },
  { year: "2016", title: "系統工程師", period: "2016.06 – 2018.06", text: "開發雲端智慧醫療照護平台，建置 CI/CD，並與診所醫療系統 API 串接。" },
  { year: "2014", title: "軟體工程師", period: "2014.08 – 2016.06", text: "用 WPF 開發遊樂園自動售票機、餐飲 POS 與影城售票系統。" },
  { year: "2012", title: "專任研究助理", period: "2012.07 – 2014.07", text: "參與經濟部環境安全與防災物聯網研發計畫，負責資料庫分析、程式設計與網頁維護。" },
  { year: "2008", title: "資訊管理學系 學士", period: "2008.09 – 2012.06", text: "網路策進會副社長、國標社總務、校司儀。專題作品拿下競賽第三名。" },
];

/* 經歷下方的亮點框（不需要就把 items 留空 []） */
const HIGHLIGHTS = {
  title: "得獎與亮點",
  icon: "🏆",
  items: [
    { title: "第三名", text: "第 16 屆資訊應用服務創新競賽（資訊技術應用組），2011" },
    { title: "Imagine Cup", text: "微軟潛能創意盃 台灣區參賽資格，2012" },
    { title: "一路成長", text: "從軟體工程師晉升為系統分析師，橫跨製造、醫療、電商、零售等產業" },
  ],
};

/* ============================================================
   精選案例：深入介紹（背景 → 問題 → 做法 → 成果）
   - 「（待補：...）」是我留給你補的地方，填好後把括號拿掉。
   - images：把 Figma / Axure / 流程圖 / UML 截圖放進 assets/img/cases/，
     src 填路徑，例如 "assets/img/cases/mfg-flow.png"。
     src 留空會顯示虛線框提醒你放圖；整個 images 留空 [] 就不顯示圖片區。
   - ⚠️ 客戶專案的截圖請先把客戶名稱、真實資料打馬賽克或換成假資料。
   ============================================================ */
const CASE_STUDIES = [
  {
    title: "全球樣品申請管理系統",
    role: "軟體工程師 → 系統分析師", period: "2020 – 2022.7、2025.12 – 2026.7",
    team: "團隊 4 人",
    color: "sky",
    tags: ["光電製造業", "系統分析", "Axure", "Azure Functions", "Azure Storage Queue", "Azure DevOps", "C#", "AngularJS"],
    background: "光電製造業客戶的業務遍布多個國家，業務要向各地工廠申請樣品，流程橫跨多國、牽涉十多種角色。",
    problem: "訂單資訊分散在各據點，進度難掌握，樣品申請平均要 14 天；新系統還必須同時符合多個國家不同的業務模式。",
    approach: [
      "需求訪談後，用 Axure 做出介面與流程原型，先和全球使用者對齊範圍再開發",
      "設計可支援多國業務模式的申請流程，讓不同角色在同一個平台上協作",
      "和工廠系統透過 Azure Storage Queue + Azure Functions 自動同步訂單狀態",
      "擴充 NPI（新產品導入）模組，把研發團隊的專案管理流程整合進系統",
      "用 Azure DevOps Dashboard 把時程、里程碑與風險攤開，定期和客戶同步",
    ],
    result: [
      "樣品申請時效從 14 天縮短到 4 天（約 70%）",
      "一套系統支援多國業務模式與跨國角色協作",
      "NPI 研發團隊的專案流程也納入同一個平台管理",
    ],
    images: [
      { src: "assets/img/cases/sample-role-flow.svg", caption: "角色工作流程：業務流程 → 樣品申請 → SKU 量產申請" },
      { src: "assets/img/cases/sample-sync.svg", caption: "系統串接關卡：樣品系統 × 智慧工廠的狀態同步" },
    ],
  },
  {
    title: "智慧工廠系統（Lotus Notes 改寫）",
    role: "軟體工程師 → 系統分析師", period: "2020 – 2022.5",
    team: "團隊 4 人",
    color: "mint",
    tags: ["光電製造業", "系統改寫", "Lotus Notes 移轉", "Azure Functions", "Azure Storage Queue", "C#", "AngularJS"],
    background: "光電製造業客戶的工廠端長期使用 Lotus Notes 管理生產作業，需要改寫成新平台，並和全球樣品申請管理系統串接。",
    problem: "接單到出貨流程長、製程細節難掌控，點檢與放行單皆靠人工處理，成本過高。",
    approach: [
      "盤點 Lotus Notes 既有功能與流程，改寫到新平台",
      "透過 Azure Storage Queue 與 Azure Functions，和全球樣品申請管理系統自動同步訂單狀態",
      "建置點檢與放行單製作功能，取代人工作業",
      "負責系統分析、開發、時程與部分風險管理",
    ],
    result: [
      "點檢與放行單全面數位化",
      "工廠從接單到出貨都能線上管理，訂單狀態與樣品系統自動同步",
    ],
    images: [
      { src: "assets/img/cases/factory-flow.svg", caption: "流程圖：接單到出貨流程" },
      { src: "assets/img/cases/echeck-screens.svg", caption: "點檢系統使用流程示意：儀表板 → 查詢 → 補點檢" },
    ],
  },
  {
    title: "商場 OMO 虛實融合平台",
    role: "系統分析師", period: "2026 –",
    team: "團隊 6 人・跨 4 家公司",
    status: "Presale 規劃 · 開發串接中",
    color: "coral",
    tags: ["百貨零售", "Presale", "地端部署", "CDP", "CRM", "消費者 APP", "POS 串接", "停車場服務", "API Gateway", "嵌入式金融"],
    background: "大型百貨與複合式商場的會員 APP、專櫃 POS、會員資料和行銷系統各自獨立，線下會員和 APP 之間缺少互動。專案目的是讓線下會員也能在 APP 玩遊戲、參加館內各種活動，提升會員黏著度、顧客關係與服務。我負責 Presale 階段的概念與目標規劃，把這些系統整合成一個 OMO（線上線下融合）平台，目前正在開發串接中。",
    compare: [
      ["點數折抵延遲，客訴頻傳", "APP 與 POS 透過 API 即時連線，點數發放與折抵零時差"],
      ["行銷推播沒人看", "依 CDP 會員標籤，由 CRM 自動派發個人化折價券"],
      ["舊專櫃 POS 接不上", "中介層 + API Gateway 串接異質 POS，不用換硬體"],
      ["POS、贈品、停車場、APP 各自獨立", "部署在商場地端主機，透過 API 統一串接各系統"],
    ],
    approach: [
      "以 CDP 作為單一事實來源（SSOT）：線上線下的資料只存一份，點數和票券在每個系統都一致",
      "拆成四個模組：CDP 資料大腦、CRM 行銷引擎、消費者 APP、POS 整合中介層",
      "系統部署在商場地端主機，串接專櫃 POS、贈品系統、停車場服務與消費者 APP",
      "與內部多套系統協作串接（CDP、BI 等）",
      "第二階段規劃嵌入式金融：串接銀行、第三方支付、保險與先買後付（BNPL）業者，提供數位錢包、分期與場景保險",
      "規劃產品網頁的 GEO（生成式引擎優化）內容：首屏定義、痛點對照表、模組說明與 FAQ 結構化資料，讓 AI 搜尋引擎也能正確介紹這套平台",
    ],
    resultLabel: "目標",
    result: [
      "線下會員在 APP 玩遊戲、參加館內活動，提升會員黏著度與顧客關係",
      "點數與折價券線上線下即時同步，零時差",
      "不汰換舊 POS，也能納入全館點數與票券機制",
      "行銷人員可即時追蹤票券轉換率與活動 ROI",
    ],
    images: [
      { src: "assets/img/cases/omo-topology.svg", caption: "會員點數與行銷資料流" },
      { src: "assets/img/cases/omo-finance.svg", caption: "第二階段：嵌入式金融擴充" },
    ],
  },
  {
    title: "集團型電商系統：多個需求變更並行管理",
    role: "系統分析師", period: "2023 – 2024",
    team: "團隊 8 人",
    color: "sun",
    tags: ["電子商務", "會員分級", "點數整合", "需求變更管理", "Azure DevOps", "Scrum"],
    background: "集團旗下的網路商城，整合集團點數與活動，讓消費者購物時可以直接折抵。我負責系統分析與專案管理。",
    problem: "預算有限，但多個需求單位同時提出需求變更（CR），經常要並行開發，而且等待決策本身就會拖慢進度；同時還要維持既有系統穩定運作。",
    approach: [
      "把「計畫內開發」和「需求變更」畫成流程圖，讓客戶看見每個決策（暫緩、照原定、調整需求）對時程的影響",
      "交付多項重點需求變更：會員分級優惠、自訂免運與主題活動、GA4 埋碼、跨站購物、據點取貨",
      "整合點數與金流：支援點數、點＋金與信用卡等多元支付",
      "效能與品質優化：資料庫查詢調校、修正價格顯示邏輯",
    ],
    result: [
      "系統品質良率提升至 99% 以上",
      "會員分級上線：不同等級會員登入就能看到專屬商品與折扣",
      "解決資料庫查詢效能問題",
    ],
    images: [
      { src: "assets/img/cases/auto-cr-flow.svg", caption: "需求變更並行管理流程" },
    ],
  },
];

/* ============================================================
   個人 Side Projects（格式和 PROJECTS 一樣，可以放連結）
   下面兩個是範例，換成你的作品；沒有的話留空 [] 就會隱藏整個區塊。
   ============================================================ */
const SIDE_PROJECTS = [
  {
    title: "（範例）我的第一個 Side Project",
    subtitle: "repo-name",
    period: "2026",
    color: "coral", mark: "Side",
    image: "",
    description: "用一兩句說明它是什麼、為什麼做它。",
    points: ["重點功能一", "重點功能二"],
    tags: ["JavaScript", "HTML / CSS"],
    links: [
      { label: "線上試用", url: "#" },
      { label: "原始碼", url: "https://github.com/wantingpan" },
    ],
  },
  {
    title: "（範例）用 AI 一起做的小工具",
    subtitle: "tool-name",
    period: "2026",
    color: "sun", mark: "AI",
    image: "",
    description: "用一兩句說明它是什麼、解決什麼問題。",
    points: ["重點功能一", "重點功能二"],
    tags: ["Python", "AI"],
    links: [{ label: "原始碼", url: "https://github.com/wantingpan" }],
  },
];

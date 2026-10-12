export const skillsData = [
  {
    category: "frontend",
    title: {
      en: "Frontend Development",
      ar: "تطوير الواجهات الأمامية"
    },
    description: {
      en: "Crafting modular, accessible, and high-performance user interfaces with modern React ecosystems.",
      ar: "بناء واجهات مستخدم معيارية وسريعة الاستجابة وعالية الأداء بالاعتماد على بيئة عمل React الحديثة."
    },
    skills: [
      { name: "React.js", badge: "Primary", highlight: true },
      { name: "JavaScript (ES6+)", badge: "Core", highlight: true },
      { name: "HTML5 / Semantic Web", badge: "Semantic", highlight: false },
      { name: "CSS3 / Tailwind CSS", badge: "Styling", highlight: true },
      { name: "Responsive & Mobile-First", badge: "UX", highlight: false },
      { name: "Framer Motion", badge: "Animation", highlight: false },
      { name: "Leaflet.js", badge: "Maps & GIS", highlight: false },
      { name: "Vite", badge: "Bundler", highlight: false }
    ]
  },
  {
    category: "backend",
    title: {
      en: "Backend & Databases",
      ar: "الأنظمة الخلفية وقواعد البيانات"
    },
    description: {
      en: "Architecting reliable REST APIs, database schemas, and server-side business logic.",
      ar: "تصميم واجهات برمجية RESTful موثوقة ومخططات قواعد بيانات متينة ومنطق أعمال قوي."
    },
    skills: [
      { name: "Node.js", badge: "Runtime", highlight: true },
      { name: "Express.js", badge: "Framework", highlight: true },
      { name: "ASP.NET MVC", badge: "Framework", highlight: true },
      { name: "PostgreSQL", badge: "RDBMS", highlight: true },
      { name: "SQL & Relational Design", badge: "Database", highlight: false },
      { name: "Firebase (Auth / Firestore)", badge: "BaaS", highlight: false },
      { name: "RESTful API Design", badge: "Architecture", highlight: false }
    ]
  },
  {
    category: "ai",
    title: {
      en: "AI & Computer Vision",
      ar: "الذكاء الاصطناعي والرؤية الحاسوبية"
    },
    description: {
      en: "Building computer vision pipelines, pose estimation algorithms, and generative AI integrations.",
      ar: "تطوير مسارات معالجة الصور والرؤية الحاسوبية، وتتبع حركة الجسم، ودمج تقنيات الذكاء الاصطناعي التوليدي."
    },
    skills: [
      { name: "Python", badge: "Core", highlight: true },
      { name: "MediaPipe", badge: "Pose Estimation", highlight: true },
      { name: "OpenCV", badge: "Computer Vision", highlight: true },
      { name: "TensorFlow", badge: "Deep Learning", highlight: true },
      { name: "Face Recognition", badge: "Biometrics", highlight: false },
      { name: "Prompt Engineering", badge: "Generative AI", highlight: true }
    ]
  },
  {
    category: "tools",
    title: {
      en: "Tools & Workflow",
      ar: "الأدوات وبيئة العمل"
    },
    description: {
      en: "Maintaining reproducible workflows, version control, API testing, and deployment hygiene.",
      ar: "إدارة دورة تطوير البرمجيات، والتحكم بالإصدارات، واختبار الواجهات البرمجية، والنشر السحابي."
    },
    skills: [
      { name: "Git & GitHub", badge: "Version Control", highlight: true },
      { name: "Postman", badge: "API Testing", highlight: false },
      { name: "VS Code", badge: "IDE", highlight: false },
      { name: "Overpass API", badge: "OSM Data", highlight: false },
      { name: "Vercel / Netlify", badge: "Hosting", highlight: false },
      { name: "npm / Yarn", badge: "Package Mgmt", highlight: false }
    ]
  }
];

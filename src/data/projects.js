export const projectsData = [
  {
    id: "ai-sprint-coach",
    category: "ai", // Primary category for filter: "ai", "web", "backend"
    secondaryCategories: ["web", "backend"],
    featured: true,
    title: {
      en: "AI Sprint Coach",
      ar: "مدرب العدو بالذكاء الاصطناعي (AI Sprint Coach)"
    },
    subtitle: {
      en: "Graduation Project: 100m sprint biomechanical analysis using Computer Vision",
      ar: "مشروع التخرج: تحليل الأداء الحركي لسباقات 100 متر عبر الرؤية الحاسوبية"
    },
    teamInfo: {
      isTeam: true,
      teamSize: 4,
      role: {
        en: "Lead Full-Stack & Computer Vision Pipeline Integrator",
        ar: "مسؤول الربط الشامل ومسار الرؤية الحاسوبية والواجهات"
      }
    },
    shortDescription: {
      en: "Computer vision platform that analyzes 100m sprint performance from video recordings using pose detection (MediaPipe, OpenCV, TensorFlow) with a React.js / React Native interface and Node.js + PostgreSQL backend.",
      ar: "منصة ذكية لتحليل الأداء الحركي لسباقات 100 متر من مقاطع الفيديو عبر خوارزميات تتبع المفاصل (MediaPipe, OpenCV, TensorFlow)، مع واجهة React.js وتطبيق React Native وخلفية Node.js وPostgreSQL."
    },
    fullDescription: {
      en: "Developed as a senior capstone graduation project by a team of 4, AI Sprint Coach empowers track athletes and coaches with objective biomechanical diagnostics without requiring expensive sensor suits. By processing high-frame-rate sprint videos, the system detects joint coordinates, computes stride frequency, ground contact time, acceleration curves, and torso angles throughout each phase of the 100-meter dash. The web and mobile frontends present interactive graphs, synchronized video playback, and coaching recommendations.",
      ar: "مشروع تخرج نُفّذ ضمن فريق مكون من 4 طلاب؛ يهدف إلى مساعدة مدربي ولاعبي ألعاب القوى في تحليل وتطوير الأداء الحركي في سباق 100 متر دون الحاجة لأجهزة استشعار باهظة الثمن. يقوم النظام بمعالجة مقاطع الفيديو وحساب زوايا المفاصل، وتردد الخطوات، وزمن ملامسة الأرض، ومنحنى التسارع عبر مراحل السباق. توفر الواجهات رسوماً بيانية تفاعلية وتشغيلاً متزامناً للفيديو مع توصيات تدريبية دقيقة."
    },
    techStack: [
      "MediaPipe",
      "OpenCV",
      "TensorFlow",
      "Python",
      "React.js",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Firebase"
    ],
    features: {
      en: [
        "Frame-by-frame 2D/3D pose estimation and joint angle tracking",
        "Biomechanical metrics: stride length, cadence, start block reaction, and lean angle",
        "Interactive dashboard with synchronized video playback and split-second milestones",
        "Node.js REST API with PostgreSQL for athlete history and session analytics",
        "Firebase authentication and cloud media management"
      ],
      ar: [
        "تقدير وضعية الجسم (Pose Estimation) إطاراً بإطار وتتبع زوايا المفاصل",
        "قياس المقاييس الحركية: طول الخطوة، التردد، زاوية الانطلاق، وزمن ملامسة الأرض",
        "لوحة تحكم تفاعلية مع تزامن تشغيل الفيديو والرسوم البيانية للمراحل الزمنية",
        "واجهة برمجية REST مبنية بـ Node.js وقاعدة بيانات PostgreSQL لتاريخ أداء اللاعبين",
        "إدارة المصادقة والتخزين السحابي عبر Firebase"
      ]
    },
    links: {
      demo: "https://github.com/ahmedsaeed/ai-sprint-coach",
      github: "https://github.com/ahmedsaeed/ai-sprint-coach"
    },
    accentColor: "#4F7C82"
  },
  {
    id: "dalil-sehatek",
    category: "web",
    secondaryCategories: [],
    featured: true,
    title: {
      en: "Dalil Sehatek (Your Health Guide)",
      ar: "دليل صحتك (Your Health Guide)"
    },
    subtitle: {
      en: "Arabic health information portal with GPS-based hospital search",
      ar: "بوابة معلومات صحية باللغة العربية مع بحث جغرافي عن المستشفيات"
    },
    teamInfo: {
      isTeam: false,
      role: {
        en: "Solo Creator & Developer",
        ar: "تطوير فردي وتصميم كامل"
      }
    },
    shortDescription: {
      en: "An accessible Arabic health portal featuring verified medical guidance and real-time GPS hospital locator using Leaflet.js and OpenStreetMap's Overpass API.",
      ar: "موقع طبي تعريفي باللغة العربية يوفر محتوى صحياً موثوقاً مع ميزة تحديد أقرب المستشفيات والمراكز الطبية عبر نظام تحديد المواقع (GPS) باستخدام Leaflet.js وOverpass API."
    },
    fullDescription: {
      en: "Dalil Sehatek provides Egyptian and Arabic-speaking users with intuitive access to essential public health information, first-aid workflows, and an instant nearest-facility finder. Using Leaflet.js paired with the Overpass API, the application queries OpenStreetMap nodes within the user's geographic radius, displaying verified hospitals, emergency clinics, contact numbers, and turn-by-turn directions without proprietary map license dependencies.",
      ar: "يقدم دليل صحتك للمستخدمين العرب محتوى صحياً وإرشادات إسعاف أولي مبسطة وموثوقة، مع محرك بحث لحظي عن أقرب المنشآت الطبية. بالاعتماد على مكتبة Leaflet.js واستعلامات Overpass API، يستخرج الموقع بيانات المستشفيات والعيادات من خريطة OpenStreetMap حسب النطاق الجغرافي للمستخدم، مع عرض أرقام الطوارئ والاتجاهات دون الاعتماد على خدمات خرائط مدفوعة."
    },
    techStack: [
      "JavaScript (ES6+)",
      "HTML5 / Semantic",
      "CSS3 / Tailwind",
      "Leaflet.js",
      "Overpass API (OpenStreetMap)",
      "Geolocation Web API"
    ],
    features: {
      en: [
        "Real-time geolocation detection with user consent and fallback search",
        "Overpass API queries filtered specifically for amenity=hospital and emergency=yes",
        "Interactive responsive map with custom markers, popups, and radius filtering",
        "Fully RTL Arabic typography optimized with Cairo font",
        "Fast client-side caching of local healthcare facilities"
      ],
      ar: [
        "تحديد الموقع الجغرافي اللحظي مع مراعاة خصوصية المستخدم والبحث اليدوي البديل",
        "استعلامات Overpass API المخصصة للمستشفيات ومراكز الطوارئ والعيادات",
        "خريطة تفاعلية سريعة التجاوب مع علامات مخصصة ونوافذ تفاصيل الاتجاهات",
        "تصميم عربي بالكامل (RTL) مع خط Cairo وتنسيق مريح للعين",
        "تخزين مؤقت للنتائج لتقليل استهلاك الإنترنت وزيادة سرعة التصفح"
      ]
    },
    links: {
      demo: "https://github.com/ahmedsaeed/dalil-sehatek",
      github: "https://github.com/ahmedsaeed/dalil-sehatek"
    },
    accentColor: "#D9B99B"
  },
  {
    id: "asp-ecommerce",
    category: "backend",
    secondaryCategories: ["web"],
    featured: true,
    title: {
      en: "ASP.NET MVC E-Commerce Platform",
      ar: "منصة متجر إلكتروني متكاملة (ASP.NET MVC)"
    },
    subtitle: {
      en: "Robust commercial web app with product catalogs, shopping cart & secure checkout",
      ar: "تطبيق ويب تجاري متكامل لإدارة المنتجات وسلة الشراء والمدفوعات"
    },
    teamInfo: {
      isTeam: false,
      role: {
        en: "Full-Stack Developer",
        ar: "مطور الواجهات والخلفية البرمجية"
      }
    },
    shortDescription: {
      en: "A full-featured e-commerce web application built with ASP.NET MVC, C#, Entity Framework, and SQL Server, featuring user authentication, catalog filtering, cart, and admin inventory controls.",
      ar: "تطبيق تجارة إلكترونية متكامل مبني باستخدام ASP.NET MVC ولغة C# مع Entity Framework وSQL Server، يتضمن نظام إدارة المستخدمين، وسلة التسوق، ولوحة تحكم لإدارة المنتجات والمخزون."
    },
    fullDescription: {
      en: "Built to demonstrate scalable enterprise software patterns, this ASP.NET MVC e-commerce platform implements the Model-View-Controller architecture with repository pattern and dependency injection. It includes role-based access control (Customers and Administrators), dynamic product filtering by category/price, real-time cart state management, and relational database schema design with transactional consistency.",
      ar: "صُمم المشروع لتطبيق المعايير البرمجية القوية للأنظمة التجارية عبر بنية MVC مع نمط المستودع (Repository Pattern). يشتمل النظام على صلاحيات مستخدمين متعددة المستويات (عملاء ومسؤولين)، وتصفية متقدمة للمنتجات حسب السعر والفئة، وسلة مشتريات ديناميكية، وتصميم متين لقواعد البيانات العلاقية يضمن سلامة المعاملات المالية والمخزون."
    },
    techStack: [
      "ASP.NET MVC",
      "C#",
      "Entity Framework",
      "SQL Server",
      "Bootstrap",
      "JavaScript",
      "LINQ"
    ],
    features: {
      en: [
        "Role-based identity and authentication (Admin / Customer)",
        "Catalog search with multi-parameter filtering and pagination",
        "Session-persistent shopping cart and checkout pipeline",
        "Administrative dashboard for inventory, category, and order status updates",
        "Entity Framework Code-First database migrations and data validation"
      ],
      ar: [
        "نظام مصادقة وتفويض متقدم بالصلاحيات (مدير / عميل)",
        "بحث وتصفية متعددة المعايير للمنتجات مع ترقيم الصفحات (Pagination)",
        "سلة تسوق مستمرة عبر الجلسة ومسار إتمام طلبات آمن",
        "لوحة تحكم إدارية لتتبع المخزون والطلبات وإضافة المنتجات",
        "استخدام Entity Framework بنهج Code-First للتحقق من صحة البيانات"
      ]
    },
    links: {
      demo: "https://github.com/ahmedsaeed/aspnet-ecommerce",
      github: "https://github.com/ahmedsaeed/aspnet-ecommerce"
    },
    accentColor: "#4F7C82"
  },
  {
    id: "face-recognition-python",
    category: "ai",
    secondaryCategories: [],
    featured: true,
    title: {
      en: "Python Face Recognition System",
      ar: "نظام التعرف على الوجوه بلغة بايثون"
    },
    subtitle: {
      en: "Automated biometric face detection and identification pipeline",
      ar: "منظومة معالجة صور بيومترية للتعرف الآلي على الوجوه والتحقق"
    },
    teamInfo: {
      isTeam: false,
      role: {
        en: "Machine Learning / CV Developer",
        ar: "مطور خوارزميات الرؤية الحاسوبية"
      }
    },
    shortDescription: {
      en: "Biometric face recognition system built in Python utilizing OpenCV and deep metric facial embeddings for fast, accurate subject identification and attendance logging.",
      ar: "نظام تعرف بيومتري على الوجوه مبني بلغة بايثون باستخدام OpenCV ونماذج استخراج السمات الوجهية العميقة للتحقق السريع وتسجيل الحضور آلياً."
    },
    fullDescription: {
      en: "This project provides an automated face recognition and identity management pipeline. Leveraging OpenCV and pre-trained deep convolutional neural network embeddings (128-dimensional face representations), it detects faces in real-time video streams, aligns facial landmarks, computes Euclidean distance against a known database, and logs verified encounters with timestamped reporting.",
      ar: "منظومة آلية متكاملة للكشف والتعرف على الوجوه في بث الفيديو اللحظي. بالاعتماد على مكتبة OpenCV ونماذج التضمين الوجهي العميقة (128-d embeddings)، يقوم النظام باكتشاف الوجوه وتصحيح زواياها وحساب المسافة الإقليدية مقارنة بقاعدة بيانات الوجوه المسجلة، مع توثيق الحضور وإصدار تقارير دقيقة."
    },
    techStack: [
      "Python 3",
      "OpenCV",
      "dlib / Face Recognition API",
      "NumPy",
      "SQLite",
      "Tkinter / CLI"
    ],
    features: {
      en: [
        "Real-time webcam stream face detection and bounding box visualization",
        "Deep 128-d metric face embedding comparison with configurable tolerance threshold",
        "Automated attendance logging with duplicate prevention within customizable timeframes",
        "Batch enrollment tool to add new faces and train identity embeddings in seconds"
      ],
      ar: [
        "اكتشاف الوجوه في بث الكاميرا المباشر وتحديد المعالم الرئيسية بلحظية تامة",
        "مقارنة متجهات السمات الوجهية بدقة عالية مع إمكانية ضبط حساسية التطابق",
        "تسجيل تلقائي للحضور ومنع التكرار الزمني غير المرغوب فيه",
        "أداة تدريب وتسجيل سريعة لإضافة أشخاص جدد وتحديث قاعدة البيانات فورياً"
      ]
    },
    links: {
      demo: "https://github.com/ahmedsaeed/python-face-recognition",
      github: "https://github.com/ahmedsaeed/python-face-recognition"
    },
    accentColor: "#D9B99B"
  }
];

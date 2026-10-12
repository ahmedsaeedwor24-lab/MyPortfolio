# Ahmed Saeed — Personal Portfolio Website

A dynamic, fully responsive, bilingual personal portfolio website for **Ahmed Saeed** — Computer Science student at Assiut University (Class of 2027) and freelance web developer on Khamsat, Mostaql, and Fiverr.

Designed with a calm, harmonious, low-saturation sage-teal & soft-sand palette, fluid typography, full RTL/LTR bilingual support (English & Arabic), light/dark themes, and accessible interactive project details.

---

## 🌟 Highlights & Key Features

- **Tech Stack**: React 19, Vite, Tailwind CSS, Framer Motion, and Lucide React.
- **Bilingual & Full RTL/LTR**: Dynamic language switcher toggling English (`Inter`) and Arabic (`Cairo` / `Tajawal`) with proper CSS logical properties and layout mirroring.
- **Light & Dark Theme**: Low-saturation calm palette with automatic `prefers-color-scheme` detection and persistent `localStorage` synchronization.
- **Data Isolation Architecture**: All content (projects, skills, certifications, services, profile info, and translations) lives in isolated files under `/src/data/`. Add or update items without modifying any React components.
- **Interactive Project Showcase**:
  - Live filter tabs: **All**, **Web Apps**, **AI & CV**, **Backend & Systems**.
  - Accessible detail modal with focus trap, Escape key closing, and detailed architectural breakdowns.
  - Featured projects: **AI Sprint Coach** (Graduation capstone, team of 4), **دليل صحتك (Your Health Guide)** (GPS hospital finder with Leaflet.js & Overpass API), **ASP.NET MVC E-Commerce**, and **Python Face Recognition System**.
- **Interactive Freelance & Contact Services**: Direct badges and order links for **Khamsat**, **Mostaql**, and **Fiverr**, client-side validated form, and direct `mailto:` fallback.
- **Accessibility & Performance**: Semantic HTML5 landmarks, 44px+ touch targets, WCAG AA contrast compliance, and full keyboard navigation.

---

## 🎨 Color Palette & Design Tokens

Strictly defined via CSS custom properties in `src/index.css` and mapped to Tailwind tokens:

| Token | Light Theme | Dark Theme | Purpose |
| :--- | :--- | :--- | :--- |
| **`bg`** | `#F6F7F5` | `#0F1719` | Main background canvas |
| **`surface`** | `#FFFFFF` | `#172326` | Cards, modals, sticky navbar |
| **`text`** | `#1F2A2E` | `#E6EEEE` | Primary headings and body |
| **`text-muted`**| `#5C6B70` | `#8FA3A6` | Subtitles, meta tags, and dates |
| **`primary`** | `#4F7C82` *(Sage Teal)* | `#7FB5B5` | Brand accents, buttons, active tabs |
| **`accent`** | `#D9B99B` *(Soft Sand)* | `#C9A98A` | Highlights, tags, secondary badges |
| **`border`** | `#E3E8E6` | `#243236` | Card borders, dividers, inputs |

---

## 📁 Project Directory Structure

```
ahmed-saeed-portfolio/
├── index.html                   # HTML entry point, SEO, OpenGraph, Google Fonts (Inter + Cairo)
├── package.json                 # Dependencies and build scripts
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # Semantic design tokens and font declarations
├── postcss.config.js            # PostCSS configuration
├── public/
│   ├── favicon.svg              # Vector favicon
│   └── og-image.png             # Social share card
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Master application orchestrator
    ├── index.css                # CSS variables, fonts, scrollbar, reduced-motion
    ├── context/
    │   ├── ThemeContext.jsx     # Light / Dark theme toggle & persistence
    │   └── LanguageContext.jsx  # English / Arabic toggle & RTL management
    ├── data/
    │   ├── profile.js           # Bio, Assiut University info, freelance platforms
    │   ├── skills.js            # Frontend, Backend, AI/CV, Tools (no fake bars!)
    │   ├── projects.js          # Project list with dual-language details
    │   ├── certifications.js    # Dubai Future Foundation prompt engineering, etc.
    │   ├── services.js          # Portfolio and web development freelance offerings
    │   └── translations.js      # Bilingual UI dictionary
    └── components/
        ├── Navbar.jsx           # Sticky nav, scroll-spy, drawer menu, toggles
        ├── Hero.jsx             # Intro, value proposition, CTAs, freelance badges
        ├── About.jsx            # Bio, Assiut Univ 2027 education card, principles
        ├── Skills.jsx           # Categorized pills and production-ready tags
        ├── Projects.jsx         # Live filter tabs and project card grid
        ├── ProjectModal.jsx     # Accessible detail modal with keyboard traps
        ├── Certifications.jsx   # Credential cards with issuer and verify links
        ├── Services.jsx         # Freelance service packages & platform CTAs
        ├── Contact.jsx          # Validated form + mailto fallback + networks
        ├── Footer.jsx           # Brand info, quick links, back to top
        └── common/
            ├── SectionHeading.jsx
            └── Icons.jsx        # SVG icons and freelance platform badges
```

---

## 🚀 Getting Started

### 1. Installation
Clone or navigate to the project directory:
```bash
cd ahmed-saeed-portfolio
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 📝 How to Add a New Project

All project content is decoupled from React components. To add a new project, open `src/data/projects.js` and append an object to the `projectsData` array:

```javascript
{
  id: "my-new-project",
  category: "web", // "web" | "ai" | "backend"
  secondaryCategories: ["backend"],
  featured: true,
  title: {
    en: "Project Name",
    ar: "اسم المشروع بالعربية"
  },
  subtitle: {
    en: "One-line subtitle",
    ar: "وصف موجز للمشروع"
  },
  teamInfo: {
    isTeam: false, // set true for team projects
    teamSize: 1,
    role: {
      en: "Solo Developer",
      ar: "مطور المشروع"
    }
  },
  shortDescription: {
    en: "Brief overview visible on the project card.",
    ar: "نبذة سريعة تظهر على بطاقة المشروع في الصفحة الرئيسية."
  },
  fullDescription: {
    en: "In-depth description displayed inside the accessible detail modal.",
    ar: "وصف تفصيلي كامل يعرض داخل النافذة المنبثقة عند النقر على تفاصيل المشروع."
  },
  techStack: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
  features: {
    en: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3"
    ],
    ar: [
      "الميزة الرئيسية الأولى",
      "الميزة الرئيسية الثانية",
      "الميزة الرئيسية الثالثة"
    ]
  },
  links: {
    demo: "https://your-demo-url.com",
    github: "https://github.com/your-username/your-repo"
  },
  accentColor: "#4F7C82"
}
```

The new project will automatically appear in the project grid and link into the category filter tabs and detail modal.

---

## 🌐 How to Add or Edit Other Data

- **Skills**: Add or update skills in `src/data/skills.js`. Categorized by `frontend`, `backend`, `ai`, and `tools`.
- **Certifications**: Add credentials in `src/data/certifications.js`.
- **Freelance Services**: Add offerings or update platform packages in `src/data/services.js`.
- **Bio & Links**: Edit university details, social links, or freelance platforms in `src/data/profile.js`.
- **UI Labels**: Edit or expand English and Arabic translations in `src/data/translations.js`.

---

## 🚢 Deployment Guide

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

Alternatively, deploy using the Vercel CLI:
```bash
npx vercel
```

### Deploy to Netlify
1. Connect your GitHub repository on [Netlify](https://netlify.com).
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

For single-page routing support on Netlify, add a `public/_redirects` file with:
```
/*    /index.html   200
```

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base`:
   ```javascript
   export default defineConfig({
     base: '/ahmed-saeed-portfolio/', // replace with your repo name
     plugins: [react()],
   })
   ```
2. Run build:
   ```bash
   npm run build
   ```
3. Deploy `dist/` to the `gh-pages` branch using `gh-pages` package:
   ```bash
   npx gh-pages -d dist
   ```

---

## ♿ Accessibility & Responsiveness Checklist

- [x] **WCAG AA Contrast**: Checked across all text, links, buttons, and badges in both Light and Dark modes.
- [x] **Logical CSS Properties**: Seamless layout inversion between LTR and RTL.
- [x] **Touch Targets**: All interactive elements maintain `>= 44px` dimensions.
- [x] **Keyboard Navigation**: Accessible skip-links, focus-visible indicators, and Escape-key modal/menu dismissals.
- [x] **Responsive Breakpoints**: Verified at 360px (mobile), 768px (tablet), 1024px (laptop), and 1440px (desktop) with zero horizontal overflow.
- [x] **Motion Preferences**: Respects `prefers-reduced-motion` across all animated transitions.

---

## 📄 License
MIT © 2026 Ahmed Saeed. Built with care and precision.

# Sakshi Kulkarni — Portfolio Website

A modern, responsive portfolio website built with **HTML5, CSS3, and Vanilla JavaScript** — showcasing projects, skills, and contact information for a Computer Science Engineering student specializing in Frontend Development and AI/ML.

---

## 🌟 Live Preview

> Open `index.html` in your browser to view locally. Deploy to GitHub Pages, Netlify, or Vercel for a live URL.

---

## ✨ Features

### Pages
- **Home** — Hero section, skills preview, featured projects, testimonials, CTA
- **About** — Profile summary, education timeline, career goals, personal strengths
- **Skills** — Animated progress bars, tool cards, tech stack overview
- **Projects** — Project cards with category filter (All / AI / Web / Python)
- **Contact** — Contact info + validated contact form

### Core Features
- 🌙 **Dark / Light Mode Toggle** — Persisted in `localStorage`
- 📱 **Responsive Mobile Menu** — Hamburger nav for mobile/tablet
- 🎬 **Scroll Reveal Animations** — Powered by Intersection Observer API
- ⚡ **Project Filtering** — Dynamic JS filter (All, AI, Web, Python)
- 📊 **Animated Skill Bars** — Animate on scroll into view
- ⌨️ **Typed Role Animation** — Cycling text in hero section
- ⬆️ **Scroll to Top Button** — Appears after scrolling 400px
- ✅ **Form Validation** — Client-side validation with accessible error messages
- ⏳ **Page Loader** — Smooth loading animation on every page
- 📄 **Resume Download** — Direct PDF download button
- ♿ **Accessibility** — ARIA labels, visible focus states, keyboard navigation, heading hierarchy, alt text

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (Semantic) |
| Styling | CSS3 (Custom Properties, Flexbox, Grid, Animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Font | Sora + JetBrains Mono (Google Fonts) |
| Icons | Emoji (no external dependency) |

---

## 📁 Folder Structure

```
portfolio-website/
├── index.html          # Home page
├── about.html          # About page
├── projects.html       # Projects page (with filter)
├── contact.html        # Contact page (with form)
├── skills.html         # Skills page (with progress bars)
├── css/
│   └── style.css       # All styles (CSS variables, responsive, animations)
├── js/
│   └── script.js       # All JavaScript functionality
├── assets/
│   ├── images/         # Project screenshots / profile images
│   ├── icons/          # Custom icons (if used)
│   └── resume.pdf      # Downloadable resume — REPLACE with real PDF
├── screenshots/        # Website screenshots for README
└── README.md           # This file
```

---

## 🚀 Getting Started

### Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/sakshikulkarni/portfolio-website.git

# 2. Enter the directory
cd portfolio-website

# 3. Open in browser
open index.html
# or use VS Code Live Server extension
```

No build tools, no package manager, no dependencies — pure HTML/CSS/JS.

---

## 🌐 Deployment

### GitHub Pages
1. Push the project to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder `/`
4. Your site will be live at `https://yourusername.github.io/portfolio-website`

### Netlify (Recommended)
1. Drag and drop the project folder onto [netlify.com/drop](https://app.netlify.com/drop)
2. Get an instant public URL

### Vercel
```bash
npx vercel --prod
```

---

## 🎨 Customization

### Update Personal Info
- Replace `Sakshi Kulkarni`, email, GitHub/LinkedIn links in all HTML files
- Update `assets/resume.pdf` with your actual resume

### Change Color Theme
Edit CSS variables in `css/style.css`:
```css
:root {
  --primary:   #2563eb;   /* Main brand color */
  --secondary: #38bdf8;   /* Secondary */
  --accent:    #06b6d4;   /* Accent highlights */
}
```

### Add New Projects
In `projects.html`, duplicate a `.project-card` article and set:
```html
<article class="project-card reveal" data-category="ai web python">
```
Use space-separated values to assign multiple categories.

---

## 📸 Screenshots

> Add screenshots to the `screenshots/` folder and reference them below.

| Page | Screenshot |
|------|-----------|
| Home | `screenshots/home.png` |
| About | `screenshots/about.png` |
| Skills | `screenshots/skills.png` |
| Projects | `screenshots/projects.png` |
| Contact | `screenshots/contact.png` |

---

## ♿ Accessibility

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- `aria-label` on all interactive elements and navigation landmarks
- `aria-required`, `aria-describedby`, `role="alert"` on form fields and errors
- Visible `:focus-visible` states for keyboard navigation
- Heading hierarchy maintained across all pages
- All images have descriptive `alt` text
- High contrast text (WCAG AA compliant colors)

---

## 👤 Author

**Sakshi Kulkarni**

- 🎓 B.E. Computer Science Engineering
- 💼 Frontend Developer | AI & Machine Learning Enthusiast
- 📧 sakshi.kulkarni@example.com
- 🐙 [GitHub](https://github.com/sakshikulkarni)
- 💼 [LinkedIn](https://linkedin.com/in/sakshi-kulkarni)

---

## 📝 License

This project is open source under the [MIT License](LICENSE).

---

*Built as part of internship Task 1 — Portfolio Website Creation*

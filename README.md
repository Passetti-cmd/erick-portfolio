# Erick Passetti - Portfolio

Professional portfolio website showcasing backend engineering, automation, and cloud infrastructure expertise. Built with React, TypeScript, and modern web technologies.

**Live Site**: [https://passetti-cmd.github.io/erick-portfolio/](https://passetti-cmd.github.io/erick-portfolio/)

## 🚀 Features

- Modern, clean design with technical focus
- Smooth animations and interactions using Framer Motion
- Fully responsive design
- Optimized for performance
- Dark theme with glassmorphism effects
- Deployed on GitHub Pages

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/     # Reusable React components
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── pages/         # Page components
│   ├── Home.tsx
│   └── ProjectDetails.tsx
├── App.tsx        # Main app component
├── main.tsx       # Entry point
└── index.css      # Global styles
```

## 🚢 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Deployment Process

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys
3. Site is available at `https://passetti-cmd.github.io/erick-portfolio/`

### Manual Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting service
```

## 📝 Customization

To customize the portfolio, update the following files:

- `src/components/Hero.tsx` - Landing section
- `src/components/Projects.tsx` - Project cards
- `src/pages/ProjectDetails.tsx` - Project detail pages
- `src/components/Experience.tsx` - Work experience
- `src/components/Skills.tsx` - Skills section
- `src/components/Contact.tsx` - Contact information

## 🔧 Configuration

### GitHub Pages Base Path

If you change the repository name, update:

- `vite.config.ts` - `base` path
- `src/App.tsx` - `basename` in Router

## 📄 License

MIT License

## 👨‍💻 Author

**Erick Passetti**

- Portfolio: [https://passetti-cmd.github.io/erick-portfolio/](https://passetti-cmd.github.io/erick-portfolio/)
- GitHub: [@Passetti-cmd](https://github.com/Passetti-cmd)
- LinkedIn: [erick-passetti](https://www.linkedin.com/in/erick-passetti)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

# Developer Blog Template

A professional, production-ready blog template built with React, TypeScript, and Vite. Perfect for developers who want a clean, fast, and easily extensible blog with Markdown-based content.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for instant HMR and optimized builds
- 📝 **Markdown-Based** - Write blog posts in Markdown with frontmatter metadata
- 🎨 **Clean Design** - Modern, developer-focused UI
- 🔍 **SEO Ready** - Semantic HTML and proper meta tags
- 📱 **Responsive** - Works great on all devices
- 🎯 **Type-Safe** - Full TypeScript support
- 🧩 **Component-Based** - Reusable, well-documented components
- 🚦 **React Router** - Clean routing with nested layouts
- 💅 **Syntax Highlighting** - Beautiful code blocks with highlight.js

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **React Markdown** - Markdown rendering
- **Gray Matter** - Frontmatter parsing
- **Rehype & Remark** - Markdown processing plugins

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx              # Root app component
│   └── router.tsx           # Route configuration
│
├── layouts/
│   ├── RootLayout.tsx       # Main layout wrapper
│   └── BlogLayout.tsx       # Blog-specific layout
│
├── pages/
│   ├── HomePage.tsx         # Landing page
│   ├── BlogListPage.tsx     # All blog posts
│   ├── BlogPostPage.tsx     # Individual post
│   ├── AboutPage.tsx        # About page
│   └── NotFoundPage.tsx     # 404 page
│
├── components/
│   ├── Header.tsx           # Site header
│   ├── Footer.tsx           # Site footer
│   ├── PostCard.tsx         # Blog post preview
│   ├── TagList.tsx          # Tag display
│   └── CodeBlock.tsx        # Code syntax highlighting
│
├── content/
│   └── blog/                # Markdown blog posts
│       ├── react-performance.md
│       ├── vite-build-tips.md
│       └── clean-code.md
│
├── lib/
│   ├── posts.ts             # Blog post utilities
│   └── markdown.ts          # Markdown parser
│
├── utils/
│   ├── slug.ts              # URL slug generation
│   ├── readingTime.ts       # Reading time calculation
│   └── formatDate.ts        # Date formatting
│
├── styles/
│   ├── globals.css          # Global styles
│   └── prism.css            # Code highlighting theme
│
├── types/
│   └── blog.ts              # TypeScript types
│
└── main.tsx                 # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd nvmkmrm.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## 📝 Adding Blog Posts

1. Create a new Markdown file in \`src/content/blog/\`
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
date: "2024-01-15"
tags: ["React", "TypeScript", "Web Dev"]
author: "Your Name"
---

# Your Post Title

Your content here...
```

3. The post will automatically appear on the blog page!

## 🎨 Customization

### Styling

- Edit \`src/styles/globals.css\` to customize colors, fonts, and spacing
- CSS variables are defined in \`:root\` for easy theming
- Modify \`src/styles/prism.css\` for code highlighting themes

### Content

- Update \`src/pages/AboutPage.tsx\` with your information
- Customize \`src/components/Header.tsx\` and \`src/components/Footer.tsx\`
- Edit \`src/pages/HomePage.tsx\` to change the landing page

### Routes

- Add new routes in \`src/app/router.tsx\`
- Create corresponding page components in \`src/pages/\`

## 🏗️ Building for Production

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The optimized files will be in the \`dist/\` directory, ready to deploy.

## 📤 Deployment

This template can be deployed to:

- **GitHub Pages** - Enable GitHub Pages in repository settings
- **Vercel** - Import your repository
- **Netlify** - Drag and drop the \`dist\` folder
- **Any static hosting** - Upload the \`dist\` folder

## 🔧 Development

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build
- \`npm run lint\` - Run ESLint

## 📚 Key Concepts

### Static Blog Generation

Blog posts are loaded at build time using Vite's \`import.meta.glob\`, creating a static index without needing a backend or CMS.

### Type Safety

All components, utilities, and data structures are fully typed with TypeScript for better developer experience and fewer runtime errors.

### Component Architecture

Components are small, focused, and reusable. Each component handles one responsibility, making the codebase easy to understand and maintain.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

MIT License - feel free to use this template for your own blog!

## 🙏 Acknowledgments

Built with modern best practices for React, TypeScript, and Vite development.

---

\*_Happy Bloggingrun dev_ 🎉

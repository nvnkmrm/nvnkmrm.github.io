---
title: "Vite Build Optimization Tips for Production"
description: "Master Vite's build configuration to create lightning-fast production bundles with optimal code splitting and asset optimization."
date: "2024-12-05"
tags: ["Vite", "Build Tools", "Performance", "DevOps"]
author: "Naveen Kumar"
---

# Vite Build Optimization Tips for Production

Vite has revolutionized the frontend build experience with its lightning-fast HMR and optimized production builds. Let's explore how to squeeze even more performance from your Vite builds.

## Why Vite?

Vite leverages native ES modules during development and Rollup for production builds, offering:

- ⚡ Instant server start
- 🔥 Lightning-fast HMR
- 📦 Optimized production bundles
- 🔌 Rich plugin ecosystem

## Production Build Configuration

### 1. Optimize Bundle Size

Configure your `vite.config.ts` for optimal chunking:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
```

### 2. Enable Compression

Add compression for smaller transfer sizes:

```typescript
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
});
```

### 3. Analyze Bundle Size

Use rollup-plugin-visualizer to understand your bundle:

```typescript
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
```

## Asset Optimization

### Image Optimization

Use vite-plugin-imagetools for automatic image optimization:

```typescript
import { imagetools } from "vite-plugin-imagetools";

export default defineConfig({
  plugins: [imagetools()],
});
```

Then import optimized images:

```typescript
import heroImage from "./hero.jpg?w=800&format=webp";
```

### CSS Optimization

Vite automatically:

- Minifies CSS
- Removes unused CSS (with purge-css plugin)
- Generates separate CSS chunks

## Environment-Specific Builds

Create different configurations for environments:

```typescript
export default defineConfig(({ mode }) => {
  return {
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
    build: {
      sourcemap: mode === "development",
      minify: mode === "production" ? "esbuild" : false,
    },
  };
});
```

## Performance Checklist

- ✅ Enable code splitting for routes
- ✅ Lazy load heavy components
- ✅ Use dynamic imports for conditional features
- ✅ Compress assets (gzip/brotli)
- ✅ Optimize images and fonts
- ✅ Tree-shake unused code
- ✅ Use production mode for builds
- ✅ Enable browser caching with hashed filenames

## Build Analysis Command

Add this to your `package.json`:

```json
{
  "scripts": {
    "build": "vite build",
    "build:analyze": "vite build && vite-bundle-visualizer"
  }
}
```

## Conclusion

Vite provides excellent defaults, but these optimizations can reduce bundle size by 30-50% and improve load times significantly. Always measure the impact of your optimizations using Lighthouse or WebPageTest.

Remember: **Fast builds lead to faster iteration and happier developers!** 🚀

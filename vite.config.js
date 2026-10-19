import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Helper to keep public/images and src/images in sync for travel SEO and other pages
try {
  const srcImagesDir = path.resolve(__dirname, 'src/images')
  const pubImagesDir = path.resolve(__dirname, 'public/images')

  if (fs.existsSync(srcImagesDir)) {
    if (!fs.existsSync(pubImagesDir)) {
      fs.mkdirSync(pubImagesDir, { recursive: true })
    }

    const copySrc = path.join(srcImagesDir, 'travel-agency-seo-dubai-diglip7 copy.webp')
    const cleanSrc = path.join(srcImagesDir, 'travel-agency-seo-dubai-diglip7.webp')
    if (fs.existsSync(copySrc) && !fs.existsSync(cleanSrc)) {
      fs.copyFileSync(copySrc, cleanSrc)
    }

    const filesToSync = [
      'travel-agency-seo-dubai-diglip7.webp',
      'travel-agency-seo-dubai-diglip7 copy.webp',
      'travel-website-search-visibility-dubai.webp',
      'holiday-package-seo-dubai.webp',
      'tour-operator-seo-dubai.webp',
      'travel-agency-seo-services-dubai.webp',
      'corporate-group-travel-seo.webp',
      'travel-booking-website-seo.webp',
      'local-seo-travel-agencies-dubai.webp',
    ]

    for (const file of filesToSync) {
      const s = path.join(srcImagesDir, file)
      const d = path.join(pubImagesDir, file)
      if (fs.existsSync(s) && !fs.existsSync(d)) {
        fs.copyFileSync(s, d)
      }
    }
  }
} catch (e) {
  console.warn('Sync images error:', e)
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
    allowedHosts: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
      '/sitemap.xml': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
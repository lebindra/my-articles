import { seoData } from './data'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-30',

   // Enable SSR and set target to 'static' for SSG
   ssr: true,
   target: 'static',
 
   // Set the base URL for the router (required for GitHub Pages)
   router: {
     base: '/nuxt-blog/', // Replace with your repository name
   },

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxt/content',
    'nuxt-og-image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate',
    '@stefanobartoletti/nuxt-social-share',
  ],

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: seoData.title,
      titleTemplate: `%s - ${seoData.title}`,
      meta: [
        // Add a Content Security Policy (CSP) meta tag
        {
          'http-equiv': 'Content-Security-Policy',
          content: "img-src 'self' data: https://test.sumitpun.com.np/;",
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  site: {
    url: seoData.mySite,
    identity: {
      type: 'Person',
    },
    twitter: seoData.twitterHandle,
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/rss.xml'],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },

  content: {
    highlight: {
      theme: 'dracula',
    },
  },
})

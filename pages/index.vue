<script lang="ts" setup>
import { navbarData } from '~/data'

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome To My Article Site.',
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'नमस्ते 👋',
  title: navbarData.homeTitle,
  description: 'Your go-to destination for insightful and engaging articles',
  link: '/profile.jpg',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>

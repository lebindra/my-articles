<script lang="ts" setup>

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
  headline: 'lebindra.com.np',
  title: 'Lebindra Gurung',
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

<script setup lang="ts">
import { footerData } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300 text-2xl py-1 font-semibold">
      {{ footerData.author }}
    </p>
    <p class="py-2 dark:text-zinc-300">
      {{ footerData.aboutAuthor }}
    </p>
    <div class="my-3 space-x-3 pb-3">
      <NuxtLink
        to="https://www.facebook.com/lebindra.gurung"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="Facebook"
      >
        <Icon name="fa:facebook" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://twitter.com/"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="Twitter"
      >
        <Icon name="fa6-brands:square-x-twitter" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://www.instagram.com/lebindragurung?igsh=MWJmY2JsOXd0OTV4Zg=="
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="Instagram"
      >
        <Icon name="logos:instagram-icon" size="1em" />
      </NuxtLink>
    </div>
  </div>
</template>

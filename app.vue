<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <LandingBackground></LandingBackground>
</template>

<script setup>
useHead({
  title: 'AIdentifier',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'author', name: 'author', content: 'AIdentifier'},
    { hid: 'description', name: 'description', content: 'AIdentifier' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'zh-CN',
  }
})

const title = 'AIdentifier'
const description = 'AI智慧识别系统'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://dashboard-template.nuxt.dev/social-card.png',
  twitterImage: 'https://dashboard-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})

</script>
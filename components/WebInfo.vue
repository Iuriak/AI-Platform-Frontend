<script setup lang="ts">
const CurtainWeb = [{
  label: 'AIdentifier',
  avatar: {
    src: '/assets/img/eye.gif'
  },
  description: 'AI智慧识别平台',
  click: () => {
    team.value = CurtainWeb[0]
  }
}]

const team = ref(CurtainWeb[0])
</script>

<template>
  <div class="flex flex-row items-center">
    <img class="m-2 w-8 h-8" :src="team.avatar.src" />
    <span class="truncate text-gray-900 dark:text-white font-semibold text-lg">{{ team.label }}</span>
  </div>
  <!--
    <UAvatar :src="team.avatar.src" size="md" />
    
    -->
  </template>
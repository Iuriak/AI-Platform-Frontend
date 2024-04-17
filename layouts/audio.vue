<script setup lang="ts">

const links = [
{
  id: 'Home',
  label: '首页',
  icon: 'i-heroicons-arrow-left-start-on-rectangle',
  to: '/identifiers',
  tooltip: {
    text: '首页',
  }
},{
  id: 'Audio-Recognition',
  label: '语音识别模块',
  icon: 'i-heroicons-home',
  to: '/audio-recognition',
  tooltip: {
    text: '语音识别模块',
  }
}, {
  id: 'Audio-Speech',
  label: '语音技术',
  icon: 'i-heroicons-face-smile',
  to: '/audio-speech',
  tooltip: {
    text: '语音技术',
  }
}, {
  id: 'Audio-NLP',
  label: '自然语言处理',
  icon: 'i-heroicons-sparkles',
  to: '/audio-NLP',
  tooltip: {
    text: '自然语言处理',
  }
}, {
  id: 'Audio-Platform',
  label: 'AI平台服务',
  icon: 'i-heroicons-magnifying-glass-circle',
  to: '/audio-platform',
  tooltip: {
    text: 'AI平台服务',
  }
}, {
  id: 'Audio-Robot',
  label: '智能机器人',
  icon: 'i-heroicons-chart-bar',
  to: '/audio-robot',
  tooltip: {
    text: '智能机器人',
  }
}]

</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel :width="250" :resizable="{ min: 200, max: 300 }" collapsible>
      <UDashboardNavbar class="!border-transparent" :ui="{ left: 'flex-1' }">
        <template #left>
          <WebInfo />
        </template>
      </UDashboardNavbar>

      <UDashboardSidebar>
        <UDashboardSidebarLinks :links="links" />
        <UDivider />
      </UDashboardSidebar>
    </UDashboardPanel>
    <slot></slot>
  </UDashboardLayout>
</template>
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
  id: 'Object-Recognition',
  label: '图像识别模块',
  icon: 'i-heroicons-home',
  to: '/object-detection',
  tooltip: {
    text: '图像识别模块',
  }
}, {
  id: 'Iden-bg',
  label: '场景识别',
  icon: 'i-heroicons-face-smile',
  to: '/iden-bg',
  tooltip: {
    text: '场景识别',
  }
},{
  id: 'Iden-obj',
  label: '物体识别',
  icon: 'i-heroicons-face-smile',
  to: '/iden-obj',
  tooltip: {
    text: '物体识别',
  }
},{
  id: 'Audio-SpeechtoText',
  label: '语音转文本',
  icon: 'i-heroicons-face-smile',
  to: '/audio-SpeechtoText',
  tooltip: {
    text: '语音转文本',
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
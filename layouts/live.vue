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
  id: 'live-split',
  label: '直播工具模块',
  icon: 'i-heroicons-home',
  to: '/live-tools',
  tooltip: {
    text: '直播工具模块',
  }
},{
  id: 'live-split',
  label: '背景分割',
  icon: 'i-heroicons-face-smile',
  to: '/live-split',
  tooltip: {
    text: '背景分割',
  }
},{
  id: 'live-bg',
  label: '虚拟背景',
  icon: 'i-heroicons-face-smile',
  to: '/live-bg',
  tooltip: {
    text: '虚拟背景',
  }
}, {
  id: 'live-figure',
  label: '虚拟形象',
  icon: 'i-heroicons-face-smile',
  to: '/live-figure',
  tooltip: {
    text: '虚拟形象',
  }
}
]

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
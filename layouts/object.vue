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
  label: '目标检测模块',
  icon: 'i-heroicons-home',
  to: '/obj-recognition',
  tooltip: {
    text: '目标检测模块',
  }
},{
  id: 'Object-fire',
  label: '火灾烟雾检测',
  icon: 'i-heroicons-face-smile',
  to: '/object-fire',
  tooltip: {
    text: '火灾烟雾检测',
  }
}, {
  id: 'object-smoke',
  label: '吸烟检测',
  icon: 'i-heroicons-face-smile',
  to: '/object-smoke',
  tooltip: {
    text: '吸烟检测',
  }
},{
  id: 'object-mask',
  label: '口罩佩戴检测',
  icon: 'i-heroicons-face-smile',
  to: '/object-mask',
  tooltip: {
    text: '口罩佩戴检测',
  }
},
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
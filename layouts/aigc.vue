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
  id: 'aigc-tools',
  label: 'AIGC模块',
  icon: 'i-heroicons-home',
  to: '/aigc-tools',
  tooltip: {
    text: 'AIGC模块',
  }
}, {
  id: 'aigc-dranggan',
  label: 'DragGan',
  icon: 'i-heroicons-home',
  to: '/aigc-dranggan',
  tooltip: {
    text: 'DragGan',
  }
}, {
  id: 'aigc-Codeformer',
  label: 'Codeformer',
  icon: 'i-heroicons-home',
  to: '/aigc-codeformer',
  tooltip: {
    text: 'Codeformer',
  }
}, {
  id: 'aigc-PowerPaint',
  label: 'PowerPaint',
  icon: 'i-heroicons-home',
  to: '/aigc-powerPaint',
  tooltip: {
    text: 'PowerPaint',
  }
}, {
  id: 'aigc-InstantID',
  label: 'InstantID',
  icon: 'i-heroicons-home',
  to: '/aigc-instantID',
  tooltip: {
    text: 'InstantID',
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
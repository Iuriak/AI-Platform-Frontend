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
  label: '动作捕捉模块',
  icon: 'i-heroicons-home',
  to: '/action-recognition',
  tooltip: {
    text: '动作捕捉模块',
  }
}, {
  id: 'action-handaction',
  label: '手部动作捕捉',
  icon: 'i-heroicons-face-smile',
  to: '/action-handaction',
  tooltip: {
    text: '手部动作捕捉',
  }
},{
  id: 'action-handpose',
  label: '手势识别',
  icon: 'i-heroicons-face-smile',
  to: '/action-handpose',
  tooltip: {
    text: '手势识别',
  }
}, {
  id: 'action-bodyaction',
  label: '全身动作捕捉',
  icon: 'i-heroicons-sparkles',
  to: '/action-bodyaction',
  tooltip: {
    text: '全身动作捕捉',
  }
}, {
  id: 'action-spacepose',
  label: '面部动作捕捉',
  icon: 'i-heroicons-magnifying-glass-circle',
  to: '/action-spacepose',
  tooltip: {
    text: '面部动作捕捉',
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
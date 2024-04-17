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
  id: 'Iden-vehicle',
  label: '车辆识别',
  icon: 'i-heroicons-face-smile',
  to: '/iden-vehicle',
  tooltip: {
    text: '车辆识别',
  }
}, {
  id: 'Iden-Object',
  label: '商品识别',
  icon: 'i-heroicons-sparkles',
  to: '/iden-object',
  tooltip: {
    text: '商品识别',
  }
}, {
  id: 'Iden-Document',
  label: '文件封识别',
  icon: 'i-heroicons-magnifying-glass-circle',
  to: '/iden-document',
  tooltip: {
    text: '文件封识别',
  }
}, {
  id: 'Iden-Pet',
  label: '宠物识别',
  icon: 'i-heroicons-chart-bar',
  to: '/iden-pet',
  tooltip: {
    text: '宠物识别',
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
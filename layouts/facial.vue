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
  id: 'Facial-Recognition',
  label: '人脸识别模块',
  icon: 'i-heroicons-home',
  to: '/facial-recognition',
  tooltip: {
    text: '人脸识别模块',
  }
}, {
  id: 'Face-Authentication',
  label: '人脸验证与检索',
  icon: 'i-heroicons-face-smile',
  to: '/face-authentication',
  tooltip: {
    text: '人脸验证与检索',
  }
}, {
  id: 'Facial-Effect',
  label: '人脸特效',
  icon: 'i-heroicons-sparkles',
  to: '/facial-effect',
  tooltip: {
    text: '人脸特效',
  }
}, {
  id: 'Static-Biopsy',
  label: '静态活体检测',
  icon: 'i-heroicons-magnifying-glass-circle',
  to: '/static-biopsy',
  tooltip: {
    text: '静态活体检测',
  }
}, {
  id: 'Detection-Analyse',
  label: '人脸检测与属性分析',
  icon: 'i-heroicons-chart-bar',
  to: '/detection-analyse',
  tooltip: {
    text: '人脸检测与属性分析',
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
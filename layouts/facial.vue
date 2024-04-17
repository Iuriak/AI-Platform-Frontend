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
  id: 'Facial-simi',
  label: '人脸相似性检验',
  icon: 'i-heroicons-sparkles',
  to: '/facial-simi',
  tooltip: {
    text: '人脸相似性检验',
  }
},{
  id: 'Facial-watersimi',
  label: '人脸水印照对比',
  icon: 'i-heroicons-sparkles',
  to: '/facial-watersimi',
  tooltip: {
    text: '人脸水印照对比',
  }
},{
  id: 'Facial-imglivedetect',
  label: '图片活体检测',
  icon: 'i-heroicons-sparkles',
  to: '/facial-imglivedetect',
  tooltip: {
    text: '图片活体检测',
  }
},{
  id: 'Facial-videolivedetect',
  label: '视频活体检测',
  icon: 'i-heroicons-sparkles',
  to: '/facial-videolivedetect',
  tooltip: {
    text: '视频活体检测',
  }
},{
  id: 'Facial-agechange',
  label: '人脸年龄改变',
  icon: 'i-heroicons-sparkles',
  to: '/facial-agechange',
  tooltip: {
    text: '人脸年龄改变',
  }
},{
  id: 'Facial-genderchange',
  label: '人脸性别改变',
  icon: 'i-heroicons-sparkles',
  to: '/facial-genderchange',
  tooltip: {
    text: '人脸性别改变',
  }
},{
  id: 'Facial-cartoonstyle',
  label: '人脸风格动漫化',
  icon: 'i-heroicons-sparkles',
  to: '/facial-cartoonstyle',
  tooltip: {
    text: '人脸风格动漫化',
  }
},{
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
<!--人脸检测与属性分析模块-->
<script setup>
definePageMeta({
  layout: 'object',
  title: 'obj Authentication',
})
</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="口罩佩戴检测">
      </UDashboardNavbar>

      <video controls autoplay loop muted playsinline loading="eager" width="800" height="512">
        <source src="/assets/打包/目标检测/口罩佩戴检测/mask_detection.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <video controls autoplay loop muted playsinline loading="eager" width="800" height="512">
        <source src="/assets/打包/目标检测/口罩佩戴检测/mask_origin.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

    </UDashboardPanel>
  </UDashboardPage>
</template>
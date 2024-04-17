<!--人脸检测与属性分析模块-->
<script setup>
definePageMeta({
  layout: 'live',
  title: 'live Authentication',
})
</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="虚拟背景">
      </UDashboardNavbar>

      <div>
        <div>
          <video controls autoplay loop muted playsinline loading="eager" width="800" height="512">
            <source src="/assets/打包/直播工具/虚拟背景/2024-04-18 02-45-01.mkv" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

    </UDashboardPanel>
  </UDashboardPage>
</template>
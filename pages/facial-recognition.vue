<script setup>
definePageMeta({
  layout: 'facial',
  title: 'Facial Recognition',
})
</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="人脸识别模块">
      </UDashboardNavbar>

      <!-- 标题卡片 -->
      <div class="mb-8">
        <ULandingCard title="我是标题" description="我是简介。。。。。。" icon="i-heroicons-photo" color="blue-500"
          orientation="horizontal">
          <img src="https://picsum.photos/640/360?grayscale" class="w-full h-64 object-cover rounded-md" />
        </ULandingCard>
      </div>

      <!-- 功能网格 -->
      <div class="grid grid-cols-12 gap-4">
        <ULandingCard href="/face-authentication" class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-swatch" title="人脸验证与检索" description="详细描述可放在这里。" />
        <ULandingCard href="/facial-effect" class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-wrench-screwdriver" title="人脸特效" description="详细描述可放在这里。" />
        <ULandingCard href="/static-biopsy" class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-face-smile" title="静态活体检测" description="详细描述可放在这里。" />
        <ULandingCard href="/detection-analyse" class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-computer-desktop" title="人脸检测与属性分析" description="详细描述可放在这里。" />
      </div>

    </UDashboardPanel>
  </UDashboardPage>
</template>
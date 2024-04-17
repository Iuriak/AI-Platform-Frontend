<script setup>
definePageMeta({
  layout: 'audio',
  title: 'Audio Recognition',
})
</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="语音识别模块">
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
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-swatch" title="语音技术" description="详细描述可放在这里。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-wrench-screwdriver" title="自然语言处理" description="详细描述可放在这里。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-face-smile" title="AI平台服务" description="详细描述可放在这里。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-computer-desktop" title="智能机器人" description="详细描述可放在这里。" />
      </div>

    </UDashboardPanel>
  </UDashboardPage>
</template>
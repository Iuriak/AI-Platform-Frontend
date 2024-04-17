<script setup>
definePageMeta({
  layout: 'object',
  title: 'object Recognition',
})
</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="目标检测模块">
      </UDashboardNavbar>
      <!-- 标题卡片 -->
      <div class="mb-8">
        <ULandingCard title="目标检测模块" description="目标检测模块是一种基于计算机视觉和深度学习技术的应用程序，旨在自动检测图像或视频中的物体并确定其位置和类别。这种模块通常应用于视频监控、智能交通、自动驾驶、物体识别等领域，为用户提供了高效、准确的目标识别和跟踪解决方案。" icon="i-heroicons-photo" color="blue-500"
          orientation="horizontal">
          <img src="https://picsum.photos/640/360?grayscale" class="w-full h-64 object-cover rounded-md" />
        </ULandingCard>
      </div>
      <!-- 功能网格 -->
      <div class="grid grid-cols-12 gap-4">
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-swatch" title="物体检测与定位" description="目标检测模块能够自动检测图像或视频中的物体，并确定其位置和边界框，以准确地标记目标的位置。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-wrench-screwdriver" title="多类别识别" description="模块可以同时识别多种不同类别的物体，如人、车辆、动物、交通标志等，为不同场景和应用提供了广泛的适用性。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-face-smile" title="多尺度适应性" description=" 模块可以适应不同尺度的目标物体，包括远处的小物体和近处的大物体，以保证在不同距离下的有效检测和识别。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-computer-desktop" title="目标跟踪与持久性" description="在连续的视频帧中，模块可以实现目标的跟踪和持久性，确保目标在运动和遮挡等情况下的稳定检测。" />
      </div>

    </UDashboardPanel>
  </UDashboardPage>
</template>
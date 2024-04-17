<script setup>
definePageMeta({
  layout: 'live',
  title: 'live Recognition',
})
</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="直播工具模块">
      </UDashboardNavbar>
      <!-- 标题卡片 -->
      <div class="mb-8">
        <ULandingCard title="直播工具模块" description="直播工具模块是一种用于实时视频流传输和播放的应用程序，通常用于在线直播、视频会议、远程教育等场景。该模块提供了一系列功能，包括视频编码、流媒体传输、播放器集成等，为用户提供了高质量、稳定的直播体验。" icon="i-heroicons-photo" color="blue-500"
          orientation="horizontal">
          <img src="https://picsum.photos/640/360?grayscale" class="w-full h-64 object-cover rounded-md" />
        </ULandingCard>
      </div>
      <!-- 功能网格 -->
      <div class="grid grid-cols-12 gap-4">
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-swatch" title="视频编码与压缩" description="直播工具模块可以将实时视频流进行编码和压缩，以减少带宽占用并保证视频质量，常见的编码标准包括H.264、H.265等。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-wrench-screwdriver" title="流媒体传输" description="模块提供了流媒体传输功能，能够将编码后的视频流通过网络传输到观众端，实现实时的视频直播和播放。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-face-smile" title="多人互动" description=" 直播工具模块支持多人同时进行直播，观众可以通过弹幕、评论等方式与主播进行互动交流。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-computer-desktop" title="实时性和稳定性" description="模块具有较高的实时性和稳定性，能够实现低延迟、高清晰度的视频传输和播放，为用户提供流畅的直播体验。" />
      </div>

    </UDashboardPanel>
  </UDashboardPage>
</template>
<script setup>
definePageMeta({
  layout: 'action',
  title: 'action Recognition',
})
</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="动作捕捉模块">
      </UDashboardNavbar>

      <!-- 标题卡片 -->
      <div class="mb-8">
        <ULandingCard title="动作捕捉模块" description="动作捕捉模块是一种基于计算机视觉和运动分析技术的应用程序，旨在通过分析视频或传感器数据，实时捕捉和识别人体或物体的运动姿态和动作。这种模块通常应用于体育训练、医学康复、虚拟现实、电影制作等领域，为用户提供了全面、精准的动作数据。" icon="i-heroicons-photo" color="blue-500"
          orientation="horizontal">
          <img src="https://picsum.photos/640/360?grayscale" class="w-full h-64 object-cover rounded-md" />
        </ULandingCard>
      </div>

      <!-- 功能网格 -->
      <div class="grid grid-cols-12 gap-4">
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-swatch" title="姿态检测与跟踪" description="动作捕捉模块能够检测和跟踪人体或物体的关键关节或节点，实时地捕捉其运动姿态和位置信息。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-wrench-screwdriver" title="动作识别与分类" description="通过分析捕捉到的运动数据，模块可以识别和分类各种动作，如走路、跑步、跳跃、举重等，以及复杂的动作序列，如体操动作、舞蹈动作等。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-face-smile" title="实时性与精准度" description="动作捕捉模块具有较高的实时性和精准度，能够在不同场景和环境下实时捕捉运动数据，并对动作进行准确的识别和分类。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-computer-desktop" title="姿态重建与分析" description="基于捕捉到的运动数据，模块可以重建人体或物体的三维姿态，并进行运动学分析和生物力学分析，为运动员训练、医学康复等提供有价值的数据支持" />
      </div>

    </UDashboardPanel>
  </UDashboardPage>
</template>
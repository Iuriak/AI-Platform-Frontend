<script setup>
definePageMeta({
  layout: 'aigc',
  title: 'aigc Recognition',
})
</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="AIGC模块">
      </UDashboardNavbar>

      <!-- 标题卡片 -->
      <div class="mb-8">
        <ULandingCard title="AIGC模块" description="AIGC模块旨在提供一个统一的平台，使用户能够轻松访问和应用各种人工智能技术，从而实现更智能、更便捷的应用和服务。例如，在智慧家居中，AIGC模块可以用于语音助手控制、智能家电管理、环境监测等多个方面的功能。在医疗保健中，AIGC模块可以用于健康监测、病例诊断、药物推荐等多个方面的应用。" icon="i-heroicons-photo" color="blue-500"
          orientation="horizontal">
          <img src="https://picsum.photos/640/360?grayscale" class="w-full h-64 object-cover rounded-md" />
        </ULandingCard>
      </div>

      <!-- 功能网格 -->
      <div class="grid grid-cols-12 gap-4">
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-swatch" title="自然语言处理（NLP）" description="用于文本分析、语音识别、情感分析等。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-wrench-screwdriver" title="计算机视觉" description="用于图像识别、目标检测、人脸识别等。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-face-smile" title="深度学习" description="用于大规模数据的特征提取和模式识别。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-computer-desktop" title="智能决策系统" description="用于基于数据和规则的智能决策制定。" />
      </div>

    </UDashboardPanel>
  </UDashboardPage>
</template>
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
        <ULandingCard title="人脸识别模块" description="人脸识别模块是一种基于人工智能和图像处理技术的应用程序，用于识别和验证人类面部特征。它通过分析输入图像或视频中的人脸，并将其与事先存储的人脸信息进行比对，从而确定身份或执行特定的操作。人脸识别技术在安全、身份验证、监控、生物特征识别等领域广泛应用。" icon="i-heroicons-swatch" color="blue-500"
          orientation="horizontal">
          <img src="https://img2.baidu.com/it/u=372571997,3447695972&fm=253&fmt=auto&app=138&f=JPEG?w=660&h=385" class="w-full h-64 object-cover rounded-md" />
        </ULandingCard>
      </div>

      <!-- 功能网格 -->
      <div class="grid grid-cols-12 gap-4">
        <ULandingCard href="/face-authentication" class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-swatch" title="人脸验证与检索" description="可实现对比两张照片中的人脸信息，判断是否是同一个人并返回相似度得分。" />
        <ULandingCard href="/facial-effect" class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-wrench-screwdriver" title="人脸特效" description="对人脸增加特效" />
        <ULandingCard href="/static-biopsy" class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-face-smile" title="静态活体检测" description="针对打印照、屏幕二次翻拍等作弊场景，基于图片中人像破绽及成像畸形，可有效识别目标是否为活体，并给出置信度参考。" />
        <ULandingCard href="/detection-analyse" class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-computer-desktop" title="人脸检测与属性分析" description="对图片中的人脸进行精准定位并标记，分析人脸性别、表情、口罩等属性信息。" />
      </div>

    </UDashboardPanel>
  </UDashboardPage>
</template>
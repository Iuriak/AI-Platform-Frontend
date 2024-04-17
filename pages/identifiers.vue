<script setup>
definePageMeta({
  layout: "landing",
});

const functions = [
  {
    name: "人脸识别",
    features: [
      "人脸验证与检索",
      "人脸特效",
      "静态活体检测",
      "人脸检测和属性分析",
    ],
    button: {
      text: "Get Started",
      link: "/facial-recognition",
    },
  },
  {
    name: "图像识别",
    features: [
      "车辆识别",
      "商品识别",
      "文件封识别",
      "宠物识别",
    ],
    button: {
      text: "Get Started",
      link: "/object-detection",
    },
  },
  {
    name: "语音识别",
    features: [
      "语音技术",
      "自然语言处理",
      "AI平台服务",
      "智能机器人",
    ],
    button: {
      text: "Get Started",
      link: "/audio-recognition",
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>AIdentifiers</template>
      <template v-slot:desc
        >多样化的智慧AI识别与检测功能</template
      >
    </LandingSectionhead>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingFunctions v-for="item of functions" :func="item" />
    </div>
  </LandingContainer>
</template>
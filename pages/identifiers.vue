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
    name: "图像语音识别",
    features: [
      "场景识别",
      "物体识别",
      "语音转文本",
      "...",
    ],
    button: {
      text: "Get Started",
      link: "/object-detection",
    },
  },
  // {
  //   name: "语音识别",
  //   features: [
  //     "语音技术",
  //     "自然语言处理",
  //     "AI平台服务",
  //     "智能机器人",
  //   ],
  //   button: {
  //     text: "Get Started",
  //     link: "/audio-recognition",
  //   },
  // },
  {
    name: "动作捕捉",
    features: [
      "手部动作捕捉",
      "手势识别",
      "全身动作捕捉",
      "空间位姿估计",
    ],
    button: {
      text: "Get Started",
      link: "/action-recognition",
    },
  },
  {
    name: "目标检测",
    features: [
      "火灾烟雾检测",
      "吸烟检测",
      "口罩佩戴检测",
      "...",
    ],
    button: {
      text: "Get Started",
      link: "/obj-recognition",
    },
  },
  {
    name: "直播工具",
    features: [
      "背景分割",
      "虚拟背景",
      "虚拟形象",
      "...",
    ],
    button: {
      text: "Get Started",
      link: "/live-tools",
    },
  },
  {
    name: "AIGC",
    features: [
      "DragGan",
      "Codeformer",
      "PowerPaint",
      "InstantID"
    ],
    button: {
      text: "Get Started",
      link: "/aigc-tools",
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>AIdentifiers</template>
      <template v-slot:desc>多样化的智慧AI识别与检测功能</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingFunctions v-for="item of functions" :func="item" />
    </div>
  </LandingContainer>
</template>
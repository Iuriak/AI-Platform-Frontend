<script setup>
const features = [
  {
    title: "我是场景",
    description:
      "我是描述",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "我是场景",
    description:
      "我是描述",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "我是场景",
    description:
      "我是描述",
    icon: "bx:bxs-data",
  },
  {
    title: "我是场景",
    description:
      "我是描述",
    icon: "bx:bxs-bot",
  },
  {
    title: "我是场景",
    description:
      "我是描述",
    icon: "bx:bxs-file-find",
  },
  {
    title: "我是场景",
    description:
      "我是描述",
    icon: "bx:bxs-user",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-blue-700">
      应用场景
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      这是我们的项目的应用场景。
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-blue-800 rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps(["func"]);
</script>

<template>
  <div>
    <div
      class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md bg-white"
    >
      <div class="text-center">
        <p class="mt-3 text-4xl font-bold text-black md:text-4xl">
            {{ func.name }}
        </p>
      </div>
      <ul class="grid mt-8 text-left gap-y-4">
        <li
          v-for="item of func.features"
          class="flex items-start gap-3 text-gray-800"
        >
          <LandingTick className="w-6 h-6" />
          <span>{{ item }}</span>
        </li>
      </ul>
      <div class="flex mt-8">
        <LandingLink
          :href="func.button.link || '#'"
          class="bg-blue-600 hover:bg-blue-700"
          block
        >
          {{ func.button.text || "Get Started" }}
        </LandingLink>
      </div>
    </div>
  </div>
</template>
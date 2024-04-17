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
        <ULandingCard title="语音识别模块" description="语音识别模块是一种基于声音处理和自然语言处理技术的应用程序，旨在将语音输入转换为文本或命令。通过分析输入的语音信号，该模块能够识别和理解说话者的语音内容，并将其转换为可识别的文本形式，从而实现对语音信息的自动化处理和应用。" icon="i-heroicons-photo" color="blue-500"
          orientation="horizontal">
          <img src="https://picsum.photos/640/360?grayscale" class="w-full h-64 object-cover rounded-md" />
        </ULandingCard>
      </div>

      <!-- 功能网格 -->
      <div class="grid grid-cols-12 gap-4">
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-swatch" title="语音转文本" description="语音识别模块能够将说话者的语音输入转换为文本形式，使其可以被计算机程序理解和处理。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-wrench-screwdriver" title="实时识别" description="模块可以实时地识别说话者的语音输入，并将其转换为文本，以支持实时的对话和交互。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-face-smile" title="声音识别" description="除了识别文本内容，模块还可以分析语音信号的音调、语速、语气等特征，实现对说话者情绪和语气的识别。" />
        <ULandingCard class="col-span-12 md:col-span-6 xl:col-span-3" color="blue-500"
          icon="i-heroicons-computer-desktop" title="语音命令识别" description="语音识别模块广泛应用于智能助理、语音搜索、语音导航、语音转写、语音翻译等领域，为用户提供了便捷、高效的语音交互体验。" />
      </div>

    </UDashboardPanel>
  </UDashboardPage>
</template>
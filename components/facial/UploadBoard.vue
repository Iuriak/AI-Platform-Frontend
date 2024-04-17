<template>
    <div class="container mx-auto p-6">
      <div class="flex flex-col md:flex-row gap-4">
        <!-- 图片上传区域 -->
        <div class="w-full md:w-1/2">
          <div class="border-dashed border-4 border-gray-200 p-12 flex justify-center items-center">
            <input type="file" class="hidden" @change="uploadImage" ref="fileInput">
            <button class="px-4 py-2 bg-blue-500 text-white rounded shadow" @click="triggerFileInput">上传图片</button>
          </div>
          <!-- 显示上传的图片 -->
          <div v-if="imageSrc" class="mt-4">
            <img :src="imageSrc" class="w-full h-auto" alt="Uploaded image">
          </div>
        </div>
  
        <!-- 人脸识别结果展示区域 -->
        <div class="w-full md:w-1/2">
          <div class="bg-white shadow p-4">
            <div v-if="recognitionResults" class="space-y-2">
              <div v-for="(face, index) in recognitionResults.faces" :key="index">
                <p>Face {{ index + 1 }}</p>
                <p>年龄: {{ face.age }}</p>
                <p>性别: {{ face.gender }}</p>
                <!-- 其他识别出的信息 -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
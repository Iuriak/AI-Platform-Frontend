<template>
  <div class="container mx-auto p-6">
    <div class="flex flex-col md:flex-row gap-4">
      <!-- 图片上传区域 -->
      <div class="w-full md:w-1/3">
        <div class="border-dashed border-4 border-gray-200 p-12 flex justify-center items-center">
          <input type="file" class="hidden" @change="uploadImage1" ref="fileInput1">
          <button class="px-4 py-2 bg-blue-500 text-white rounded shadow" @click="triggerFileInput(1)">上传水印图片</button>
        </div>
        <!-- 显示上传的图片 -->
        <div v-if="imageSrc1" class="mt-4">
          <img :src="imageSrc1" class="w-full h-auto" alt="Uploaded image">
        </div>
      </div>

      <div class="w-full md:w-1/3">
        <div class="border-dashed border-4 border-gray-200 p-12 flex justify-center items-center">
          <input type="file" class="hidden" @change="uploadImage2" ref="fileInput2">
          <button class="px-4 py-2 bg-blue-500 text-white rounded shadow" @click="triggerFileInput(2)">上传人脸图片</button>
        </div>
        <!-- 显示上传的图片 -->
        <div v-if="imageSrc2" class="mt-4">
          <img :src="imageSrc2" class="w-full h-auto" alt="Uploaded image">
        </div>
      </div>
    </div>
    <button class="px-4 py-2 bg-blue-500 text-white rounded shadow" @click="do_action(1)">运行</button>

    <div class="flex flex-col md:flex-row gap-4">
      <div class="w-full">
        <div class="bg-white shadow p-4">
          <div v-if="recognitionResults" class="space-y-2">
            <p>相似性：{{ recognitionResults.data }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      imageSrc1: null, // 照片的URL
      imageSrc2: null, // 照片的URL
      file1: null,
      file2: null,
      recognitionResults: null, //识别结果(根据每个api的实际情况做修改吧，反正大差不差)
    };
  },
  created() {
    this.$axios = axios; // Assigning axios to $axios
  },
  methods: {
    triggerFileInput(index) {
      if (index == 1)
        this.$refs.fileInput1.click();
      else
        this.$refs.fileInput2.click();
    },
    uploadImage1(event) {
      const file = event.target.files[0];
      if (file) {
        // 将图片转换为可显示的URL
        this.imageSrc1 = URL.createObjectURL(file);
        this.file1 = file;
      }
    },
    uploadImage2(event) {
      const file = event.target.files[0];
      if (file) {
        // 将图片转换为可显示的URL
        this.imageSrc2 = URL.createObjectURL(file);
        this.file2 = file;
      }
    },
    do_action() {
      // 创建 FormData 对象以发送到后端
      const formData = new FormData();
      formData.append('face_image', this.file1);
      formData.append('watermark_image', this.file2);
      console.log(formData);
      this.$axios.post('http://0.0.0.0:8080/face/face_watermarkdetect', formData)
        .then((response) => {
          console.log(response);
          this.recognitionResults = response.data;
          console.log(this.recognitionResults);
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    }
  }
};
</script>

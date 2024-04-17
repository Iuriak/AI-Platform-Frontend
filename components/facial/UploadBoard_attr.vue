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
              <div v-for="(face, index) in recognitionResults" :key="index">
                <p>Face {{ index}}</p>
                <p>是否带口罩: {{ face.mask }}</p>
                <p>头发长度: {{ face.hair }}</p>
                <p>是否带眼镜: {{ face.glass }}</p>
                <p>性别: {{ face.gender }}</p>
                <p>心情: {{ face.expression }}</p>
                <p>是否有胡子: {{ face.beard }}</p>
                <p>位置(w,h,x,y): {{ face.w}} {{ face.h}} {{ face.x}} {{ face.y}}</p>
              </div>
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
      imageSrc: null, // 照片的URL
      recognitionResults: null, //识别结果(根据每个api的实际情况做修改吧，反正大差不差)
    };
  },
  created() {
    this.$axios = axios; // Assigning axios to $axios
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    uploadImage(event) {
      const file = event.target.files[0];
      if (file) {
        // 将图片转换为可显示的URL
        this.imageSrc = URL.createObjectURL(file);

        // 创建 FormData 对象以发送到后端
        const formData = new FormData();
        formData.append('img_1', file);
        console.log(formData);
        // 发送到后端进行人脸识别（这里需要替换为当前需要用的API endpoint）
        this.$axios.post('http://0.0.0.0:8080/face/face_attrdetect', formData)
          .then((response) => {
            // 假设后端返回的结果格式为 { faces: [{ age: number, gender: string }] }
            console.log(response);
            this.recognitionResults = response.data;
            console.log(this.recognitionResults);
          })
          .catch((error) => {
            console.error('There was an error!', error);
          });
      }
    }
  }
};
</script>

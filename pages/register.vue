<template>
  <div class="flex items-center justify-center h-screen bg-gray-200">
    <div class="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg">
      <h2 class="mb-6 text-center text-3xl font-extrabold text-gray-900">
        创建新账户
      </h2>
      <form class="space-y-4">
        <input type="text" placeholder="用户名" class="w-full px-3 py-2 border border-gray-300 rounded-md" />
        <input type="email" placeholder="邮箱地址" class="w-full px-3 py-2 border border-gray-300 rounded-md" />
        <input type="password" placeholder="密码" class="w-full px-3 py-2 border border-gray-300 rounded-md" />
        <input type="password" placeholder="确认密码" class="w-full px-3 py-2 border border-gray-300 rounded-md" />

        <a href="/login"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
          注册
        </a>
        <button
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          @click="face_register">人脸识别注册</button>
      </form>
      <div class="mt-6 text-center">
        <a href="/login" class="font-medium text-blue-600 hover:text-blue-500">
          已经有账户了？登录
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      audioSrc: null, // 照片的URL
      recognitionResults: null, //识别结果(根据每个api的实际情况做修改吧，反正大差不差)
    };
  },
  created() {
    this.$axios = axios; // Assigning axios to $axios
  },
  methods: {
    face_register() {
      this.$refs.fileInput.click();
    },
  }
};
</script>
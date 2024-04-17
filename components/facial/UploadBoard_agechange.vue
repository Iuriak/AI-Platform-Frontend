<template>
    <div class="container mx-auto p-6">
        <div class="flex flex-col md:flex-row gap-4">
            <!-- 图片上传区域 -->
            <div class="w-full md:w-1/2">
                <div class="border-dashed border-4 border-gray-200 p-12 flex justify-center items-center">
                    <input type="file" class="hidden" @change="uploadImage1" ref="fileInput1">
                    <button class="px-4 py-2 bg-blue-500 text-white rounded shadow"
                        @click="triggerFileInput(1)">上传图片</button>
                </div>
                <!-- 显示上传的图片 -->
                <div v-if="imageSrc1" class="mt-4">
                    <img :src="imageSrc1" class="w-full h-auto" alt="Uploaded image">
                </div>
                <label for="targetAge" class="block">请输入目标年龄:</label>
                <input type="number" id="targetAge" v-model.number="age" min="10" max="80" class="border-2
                border-gray-200 p-2 rounded w-full" />
            </div>
            <button class="px-4 py-2 bg-blue-500 text-white rounded shadow" @click="do_action">运行</button>

            <div class="w-full md:w-1/2">
                <div class="border-dashed border-4 border-gray-200 p-12 flex justify-center items-center">
                    <button class="px-4 py-2 bg-blue-500 text-white rounded shadow">结果图片</button>
                </div>
                <!-- 显示上传的图片 -->
                <div v-if="imageSrc2" class="mt-4">
                    <img :src="imageSrc2" class="w-full h-auto" alt="Uploaded image">
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
            age: null,
            imageSrc1: null, // 照片的URL
            imageSrc2: null, // 照片的URL
            file1: null,
            file2: null,
        };
    },
    created() {
        this.$axios = axios; // Assigning axios to $axios
    },
    methods: {
        triggerFileInput(index) {
            if (index == 1)
                this.$refs.fileInput1.click();
        },
        uploadImage1(event) {
            const file = event.target.files[0];
            if (file) {
                // 将图片转换为可显示的URL
                this.imageSrc1 = URL.createObjectURL(file);
                this.file1 = file;
            }
        },
        do_action(){
            // 如果age不在10-80之间，提示用户
            if(this.age < 10 || this.age > 80){
                alert("请输入10-80之间的年龄");
                return;
            }
            // 创建 FormData 对象以发送到后端
            const formData = new FormData();
            formData.append('img_1', this.file1);
            formData.append('target_age', this.age);

            console.log(this.age);
            this.$axios.post('http://0.0.0.0:8080/face/face_changeage', formData)
                .then((response) => {
                    console.log(response);
                    this.imageSrc2 = response.data.ResultImage;
                    this.imageSrc2 = "data:image/jpeg;base64,"+ this.imageSrc2;
                })
                .catch((error) => {
                    console.error('There was an error!', error);
                });
        }
    }
};
</script>
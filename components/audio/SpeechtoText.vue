<template>
    <div class="container mx-auto p-6">
        <div class="flex flex-col md:flex-row gap-4">
            <!-- 图片上传区域 -->
            <div class="w-full md:w-1/2">
                <div class="border-dashed border-4 border-gray-200 p-12 flex justify-center items-center">
                    <input type="file" class="hidden" @change="uploadImage" ref="fileInput">
                    <button class="px-4 py-2 bg-blue-500 text-white rounded shadow"
                        @click="triggerFileInput">上传语音</button>
                </div>

                <!-- 播放语音控件 -->
                <div v-if="audioSrc" class="mt-4">
                    <audio controls>
                        <source :src="audioSrc" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>

            <!-- 人脸识别结果展示区域 -->
            <div class="w-full md:w-1/2">
                <div class="bg-white shadow p-4">
                    <div v-if="recognitionResults" class="space-y-2">
                        <p>{{ recognitionResults }}</p>
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
            audioSrc: null, // 照片的URL
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
                this.audioSrc = URL.createObjectURL(file);

                // 创建 FormData 对象以发送到后端
                const formData = new FormData();
                formData.append('audio_file', file);
                console.log(formData);
                // 发送到后端进行人脸识别（这里需要替换为当前需要用的API endpoint）
                this.$axios.post('http://0.0.0.0:8080/audio/to_text', formData)
                    .then((response) => {
                        console.log(response);
                        this.recognitionResults = response.data.res;
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

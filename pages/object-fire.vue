<script setup>
definePageMeta({
  layout: 'object',
  title: 'obj Authentication',
})
</script>
<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="火灾烟雾检测">
      </UDashboardNavbar>

      <div>
        <div>
          <video controls autoplay loop muted playsinline loading="eager" width="800" height="512">
            <source src="/assets/打包/目标检测/火灾烟雾检测/fire_detection.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <video controls autoplay loop muted playsinline loading="eager" width="800" height="512">
            <source src="/assets/打包/目标检测/火灾烟雾检测/fire_origin.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <button @click="runPythonScript">执行Python脚本</button>

    </UDashboardPanel>
  </UDashboardPage>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
    };
  },
  created() {
    this.$axios = axios; // Assigning axios to $axios
  },
  methods: {
    runPythonScript() {
      const formData = new FormData();
      const python_cmd = "python app.py";
      formData.append('cmd_str', python_cmd);
      this.$axios.post('http://0.0.0.0:8080/run', formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });

    }
  },
}
</script>

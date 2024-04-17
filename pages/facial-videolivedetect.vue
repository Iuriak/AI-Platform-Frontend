<!--人脸验证与检索模块-->
<script setup>
definePageMeta({
  layout: 'facial',
  title: 'Facial Authentication',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="视频活体检测">
        </UDashboardNavbar>
        <FacialUploadBoard_videolivedetect></FacialUploadBoard_videolivedetect>
        </UDashboardPanel>
    </UDashboardPage>
</template>
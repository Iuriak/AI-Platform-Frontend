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
        <UDashboardNavbar title="图片活体检测">
        </UDashboardNavbar>
        <FacialUploadBoard_imglivedetect></FacialUploadBoard_imglivedetect>
        </UDashboardPanel>
    </UDashboardPage>
</template>
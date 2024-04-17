<!--人脸验证与检索模块-->
<script setup>
definePageMeta({
  layout: 'facial',
  title: 'Facial Effect',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="人脸水印照对比">
        </UDashboardNavbar>
        <FacialUploadBoard_watersmi></FacialUploadBoard_watersmi>
        </UDashboardPanel>
    </UDashboardPage>
</template>
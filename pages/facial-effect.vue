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
        <UDashboardNavbar title="人脸特效">
        </UDashboardNavbar>
        <FacialUploadBoard></FacialUploadBoard>
        </UDashboardPanel>
    </UDashboardPage>
</template>
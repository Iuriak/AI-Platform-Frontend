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
        <UDashboardNavbar title="人脸验证与检索">
        </UDashboardNavbar>
        <FacialUploadBoard></FacialUploadBoard>
        </UDashboardPanel>
    </UDashboardPage>
</template>
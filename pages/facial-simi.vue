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
        <UDashboardNavbar title="人脸相似性检验">
        </UDashboardNavbar>
        <FacialUploadBoard_smi></FacialUploadBoard_smi>
        </UDashboardPanel>
    </UDashboardPage>
</template>
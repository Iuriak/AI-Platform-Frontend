<!--人脸检测与属性分析模块-->
<script setup>
definePageMeta({
  layout: 'facial',
  title: 'Facial Authentication',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="人脸年龄改变">
        </UDashboardNavbar>
        <FacialUploadBoard_agechange></FacialUploadBoard_agechange>
        </UDashboardPanel>
    </UDashboardPage>
</template>
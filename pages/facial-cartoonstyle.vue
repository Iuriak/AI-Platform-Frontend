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
        <UDashboardNavbar title="人脸风格动漫化">
        </UDashboardNavbar>
        <FacialUploadBoard_cartoon></FacialUploadBoard_cartoon>
        </UDashboardPanel>
    </UDashboardPage>
</template>
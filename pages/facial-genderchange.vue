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
        <UDashboardNavbar title="人脸性别改变">
        </UDashboardNavbar>
        <FacialUploadBoard_genderchange></FacialUploadBoard_genderchange>
        </UDashboardPanel>
    </UDashboardPage>
</template>
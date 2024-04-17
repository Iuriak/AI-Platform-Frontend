<!--人脸检测与属性分析模块-->
<script setup>
definePageMeta({
  layout: 'identification',
  title: 'obj Authentication',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="物体识别">
        </UDashboardNavbar>
        <ImageObjdetect></ImageObjdetect>
        </UDashboardPanel>
    </UDashboardPage>
</template>
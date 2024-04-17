<!--商品识别模块-->
<script setup>
definePageMeta({
  layout: 'identification',
  title: 'Object Identification',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="商品识别">
        </UDashboardNavbar>
        <FacialUploadBoard></FacialUploadBoard>
        </UDashboardPanel>
    </UDashboardPage>
</template>
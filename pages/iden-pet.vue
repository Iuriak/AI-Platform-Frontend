<!--宠物识别模块-->
<script setup>
definePageMeta({
  layout: 'identification',
  title: 'Pet Identification',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="宠物识别">
        </UDashboardNavbar>
        <FacialUploadBoard></FacialUploadBoard>
        </UDashboardPanel>
    </UDashboardPage>
</template>
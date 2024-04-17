<!--AI平台服务模块-->
<script setup>
definePageMeta({
  layout: 'audio',
  title: 'Audio Platform',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="AI平台服务">
        </UDashboardNavbar>
        <FacialUploadBoard></FacialUploadBoard>
        </UDashboardPanel>
    </UDashboardPage>
</template>
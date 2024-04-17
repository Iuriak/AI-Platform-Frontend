<!--语音技术模块-->
<script setup>
definePageMeta({
  layout: 'audio',
  title: 'Audio Speech',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="语音技术">
        </UDashboardNavbar>
        <FacialUploadBoard></FacialUploadBoard>
        </UDashboardPanel>
    </UDashboardPage>
</template>
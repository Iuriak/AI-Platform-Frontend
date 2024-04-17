<!--文件封识别模块-->
<script setup>
definePageMeta({
  layout: 'identification',
  title: 'Document Identification',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="文件封识别">
        </UDashboardNavbar>
        <FacialUploadBoard></FacialUploadBoard>
        </UDashboardPanel>
    </UDashboardPage>
</template>
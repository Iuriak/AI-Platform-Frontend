<!--车辆识别模块-->
<script setup>
definePageMeta({
  layout: 'identification',
  title: 'Vehicle Identification',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="车辆识别">
        </UDashboardNavbar>
        <FacialUploadBoard></FacialUploadBoard>
        </UDashboardPanel>
    </UDashboardPage>
</template>
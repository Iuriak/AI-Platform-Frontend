<!--静态活体检测模块-->
<script setup>
definePageMeta({
  layout: 'facial',
  title: 'Static Biopsy',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="静态活体检测">
        </UDashboardNavbar>
        <FacialUploadBoard></FacialUploadBoard>
        </UDashboardPanel>
    </UDashboardPage>
</template>
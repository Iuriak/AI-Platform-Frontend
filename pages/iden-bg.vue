<script setup>
definePageMeta({
  layout: 'identification',
  title: 'bg Authentication',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="场景识别">
        </UDashboardNavbar>
        <ImageBgdetect></ImageBgdetect>
        </UDashboardPanel>
    </UDashboardPage>
</template>
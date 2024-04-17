<script setup>
definePageMeta({
  layout: 'action',
  title: 'action Authentication',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="空间位姿估计">
        </UDashboardNavbar>
        <ActionSpacePose></ActionSpacePose>
        </UDashboardPanel>
    </UDashboardPage>
</template>
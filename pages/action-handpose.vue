<!--人脸检测与属性分析模块-->
<script setup>
definePageMeta({
  layout: 'action',
  title: 'action Authentication',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="手势识别">
        </UDashboardNavbar>
        <ActionHandPose></ActionHandPose>
        </UDashboardPanel>
    </UDashboardPage>
</template>
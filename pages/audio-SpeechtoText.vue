<script setup>
definePageMeta({
  layout: 'identification',
  title: 'identification Robot',
})
</script>
<template>
    <UDashboardPage>
        <UDashboardPanel grow>
        <UDashboardNavbar title="语音转文本">
        </UDashboardNavbar>
        <AudioSpeechtoText></AudioSpeechtoText>
        </UDashboardPanel>
    </UDashboardPage>
</template>
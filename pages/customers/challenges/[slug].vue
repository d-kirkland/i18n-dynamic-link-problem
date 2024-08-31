<script setup lang="ts">
    const { t } = useI18n({ useScope: 'local' })
</script>

<template>
    <h1>{{ t('welcome')}}</h1>
</template>

<i18n lang="yaml">
    en: 
        welcome: Welcome to the Challenge 
    de:
        welcome: Willkommen zur Herausforderung
</i18n>

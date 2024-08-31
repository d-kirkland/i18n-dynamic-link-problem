<script setup lang="ts">
    const { localeProperties, setLocale } = useI18n({ useScope: 'local' })
    const localePath = useLocalePath()
    const { t } = useI18n({ inheritLocale: true })
    const source = {
        en: {
            route: 'food'
        },
        de: {
            route: 'lebensmittel'
        }
    }
    const code = localeProperties.value.code
    const currentRoute = computed(() => {
        if (localeProperties.value.code === 'de') return source.de.route
        else return source.en.route
    })
</script>

<template>
    <div>
        <div class="flex justify-center my-6">
            <NuxtLink :to="localePath({ name: 'customers-challenges-slug', params: { slug: currentRoute }})">{{ t('link.name') }}</NuxtLink>
        </div>
        <div class="flex justify-center my-10 gap-x-10">
            <button @click="setLocale('en')">en</button>
            <button @click="setLocale('de')">de</button>
        </div>
    </div>
</template>

<i18n lang="yaml">
    en:
        link: 
            name: Challenges
    de:
        link: 
            name: Herausforderungen
</i18n>

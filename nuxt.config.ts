import pages from './locales/routes'

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
    ],
    i18n: {
        locales: [
            {
                code: 'en',
                iso: 'en-DE',
                languageCode: 'EN',
                countryCode: 'US',
                regionCode: 'EU',
                countryName: 'United States',
                currency: 'EUR',
            },
            {
                code: 'de',
                iso: 'de-DE',
                languageCode: 'DE',
                countryCode: 'DE',
                regionCode: 'EU',
                countryName: 'Deutschland',
                currency: 'EUR',
            },
        ],
        defaultLocale: 'en',
        strategy: 'prefix',
        detectBrowserLanguage: false,
        pages: pages,
        customRoutes: 'config',
    },
})
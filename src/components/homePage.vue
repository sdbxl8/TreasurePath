<script setup lang="ts">
    import headerPage from './landingPageComponents/headerPage.vue'
    import footerPage from './landingPageComponents/footerPage.vue'
    import leftMenu from './landingPageComponents/leftMenu.vue';
</script>
<template>
    <div class="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gradient-to-b from-[#1f0700] via-[#241802] to-[#351a03]">
        <headerPage />

        <main class="w-full max-w-6x mx-auto px-8 py-6 grid gap-6 md:grid-cols-[16rem_1fr]">
            <leftMenu class="self-start" />
            <div class="flex items-center justify-center p-4 bg-amber-200 rounded-2xl overflow-auto">
                <router-view class="w-full" />
            </div>
        </main>

        <footerPage />
    </div>
</template>

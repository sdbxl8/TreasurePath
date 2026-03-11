<script setup lang="ts">
    import headerPage from './landingPageComponents/headerPage.vue'
    import footerPage from './landingPageComponents/footerPage.vue'
    import leftMenu from './landingPageComponents/leftMenu.vue';
</script>
<template>
    <div class="min-h-[100dvh] grid grid-rows-[auto_1fr_auto] bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 relative">        
        <headerPage />
        <main class="flex justify-center items-center"> 
            <leftMenu/>
            <div class="flex items-center justify-center p-5 wood-texture w-[85%] h-[90%] rounded-2xl shadow-2xl shadow-black">
            <router-view />
            </div>
        </main>
        <footerPage/>
    </div>
</template>
<!-- bg-gradient-to-br from-[#4e2507] via-[#8d5111] to-[#c7a912] -->
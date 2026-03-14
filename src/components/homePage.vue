<script setup lang="ts">
    import menuAside from './landingPageComponents/menuAside.vue'
    import footerPage from './landingPageComponents/footerPage.vue'
</script>
<template>
    <div class="min-h-screen grid grid-cols-1 md:grid-cols-[16rem_1fr] md:grid-rows-[1fr_auto]">
        <menuAside class="md:row-span-2 lg:w-auto" />

        <main class="w-full h-full bg-gradient-to-b from-[#ccbc9e] via-[#d4ccbb] to-[#ecd6c1]">
            <router-view class="w-full h-full flex items-center justify-center" />
        </main>
            <footerPage class="md:col-start-2" />
    </div>
</template>

<style scoped>
.bg-app{
    background-image: url("../assets/texture/fondo-recuadro.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>

<!-- bg-gradient-to-b from-[#0e0300] via-[#160f01] to-[#160b01] -->
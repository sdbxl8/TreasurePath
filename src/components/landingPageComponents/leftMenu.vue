<script setup lang="ts">
import graphics from '../../assets/icons/graphics.vue'
</script>

<template>
    <section class="wood-texture border-3 border-yellow-700 shadow-2xl shadow-black h-80 w-24 m-2 rounded-2xl flex items-center justify-center p-2 absolute left-0 top-1/2 transform -translate-y-1/2 z-60">
        <div class="flex flex-col justify-between items-center p-4 w-full h-full">

            <span class="hover:scale-110 hover:text-black hover:underline hover:decoration-4 transition-all ease-in-out duration-300">
                    <routerLink to="/homePage/graphics"><graphics/></routerLink>
                </span>
                <span class="hover:scale-110 hover:text-black hover:underline hover:decoration-4 transition-all ease-in-out duration-300">
                    <routerLink to="/homePage/inicio"><img src="../../assets/texture/brujula.png" alt="" class="menu-icon"></routerLink>
                </span>
                <span class="hover:scale-110 hover:text-black hover:underline hover:decoration-4 transition-all ease-in-out duration-300">
                    <routerLink to="/homePage/historial"><img src="../../assets/texture/chest-removebg-preview.png" alt="" class="menu-icon"></routerLink>
                </span>
                <span class="hover:scale-110 hover:text-black hover:underline hover:decoration-4 transition-all ease-in-out duration-300">
                    <routerLink to="/homePage/metas"><img src="../../assets/texture/map-removebg-preview.png" alt="" class="menu-icon"></routerLink>
                </span>
            </div>
    </section>
</template>
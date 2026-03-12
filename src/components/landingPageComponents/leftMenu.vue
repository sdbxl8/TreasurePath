<script setup lang="ts">
import graphics from '../../assets/icons/graphics.vue'
</script>

<template>
    <section class="wood-texture border-3 border-yellow-700 shadow-2xl shadow-black w-full md:w-24 h-16 md:h-80 m-2 rounded-2xl flex items-center justify-center p-2 md:translate-y-[50%] translate-y-0">
        <div class="flex w-full h-full items-center justify-between md:flex-col gap-2 md:gap-4 p-2">
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

<script setup lang="ts">

import closeSession from '../../assets/icons/closeSession.vue';
import graphics from '../../assets/icons/graphics.vue';
import { useLogOut } from '../../composables/useLogOut';
import { usePopup } from '../../composables/usePopup';
import leftArrow from '../../assets/icons/leftArrow.vue';

const {popupVisible,togglePopup} = usePopup();

const{nombreUsuario,logOut}= useLogOut();

</script>
<template>
    <aside class="w-full h-60 md:w-72 lg:h-full text-white old-wood-texture border-r-3 border-r-yellow-600 p-5 flex flex-col lg:justify-between gap-6">

        <div class="flex items-center justify-center md:justify-center lg:justify-between w-full">
            <div class="flex items-center gap-3">
                <img src="../../assets/texture/barco.png" alt="logo" class="h-10 w-10" />
                <h1 class="tittle-font text-2xl md:text-2xl lg:text-xl uppercase">Treasurepath</h1>
            </div>
        </div>

        <!-- <nav class="flex  h-20 lg:h-100 w-full items-center justify-between md:flex-col gap-4">
            <router-link to="/homePage/graphics" class="flex items-center justify-center gap-3 w-full p-3 rounded-2xl hover:bg-amber-100 hover:text-black transition">
                <graphics class="h-8 w-8" />
                <span class="hidden md:inline tittle-font">Gráficas</span>
            </router-link>
            <router-link to="/homePage/inicio" class="flex items-center justify-center gap-3 w-full p-3 rounded-2xl hover:bg-amber-100 hover:text-black transition">
                <img src="../../assets/texture/brujula.png" alt="" class="h-8 w-8" />
                <span class="hidden md:inline tittle-font">Inicio</span>
            </router-link>
            <router-link to="/homePage/historial" class="flex items-center justify-center gap-3 w-full p-3 rounded-2xl hover:bg-amber-100 hover:text-black transition">
                <img src="../../assets/texture/chest-removebg-preview.png" alt="" class="h-8 w-8" />
                <span class="hidden md:inline tittle-font">Historial</span>
            </router-link>
            <router-link to="/homePage/metas" class="flex items-center justify-center gap-3 w-full p-3 rounded-2xl hover:bg-amber-100 hover:text-black transition">
                <img src="../../assets/texture/map-removebg-preview.png" alt="" class="h-8 w-8" />
                <span class="hidden md:inline tittle-font">Metas</span>
            </router-link>
        </nav> -->

        <div class="mt w-full">
            <div class="flex items-center justify-between gap-3 p-4 wood-texture rounded-2xl hover:shadow-black hover:shadow-2xl hover:scale-105 transition-all duration-700">
                <img src="../../assets/texture/piratas.png" alt="logo user" class="h-10 w-10" />
                <span class="text-lg tittle-font uppercase text-yellow-950">{{ nombreUsuario }}</span>
                <button @click="togglePopup" class="cursor-pointer text-yellow-900" :class="{ 'lg:rotate-90': popupVisible, '-rotate-90':popupVisible }">
                    <leftArrow />
                </button>
            </div>

            <div v-show="popupVisible" class="w-full rounded-2xl z-50 overflow-hidden">
                <div class="wood-texture p-3 flex items-center justify-center gap-3">
                    <span class="tittle-font uppercase text-yellow-950 hover:text-yellow-400 cursor-pointer">cerrar sesion</span>
                    <button @click="logOut" class="cursor-pointer h-8 w-8 flex items-center justify-center hover:scale-105"><closeSession /></button>
                </div>
            </div>
        </div>
    </aside>
</template>


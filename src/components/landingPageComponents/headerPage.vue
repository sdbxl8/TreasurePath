<script setup lang="ts">

import closeSession from '../../assets/icons/closeSession.vue';
import { useLogOut } from '../../composables/useLogOut';
import { usePopup } from '../../composables/usePopup';
import leftArrow from '../../assets/icons/leftArrow.vue';

const {popupVisible,togglePopup} = usePopup();


const{nombreUsuario,logOut}= useLogOut();

</script>
<template>
    <header class="w-full text-white">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-4">
            <div class="flex items-center justify-center gap-4 p-4 wood-texture rounded-2xl shadow-black shadow-2xl w-full md:w-auto">
                <h1 class="tittle-font text-3xl uppercase">Treasurepath</h1>
                <img src="../../assets/texture/barco.png" alt="logo" class="h-12 w-12" />
            </div>

            <div class="relative w-full md:w-auto">
                <div class="flex items-center justify-between gap-3 p-4 wood-texture rounded-2xl hover:shadow-black hover:shadow-2xl hover:scale-105 transition-all duration-700">
                    <img src="../../assets/texture/piratas.png" alt="logo user" class="h-10 w-10">
                    <span class="text-lg tittle-font uppercase">{{ nombreUsuario }}</span>
                    <button @click="togglePopup" class="cursor-pointer" :class="{ '-rotate-90': popupVisible }"><leftArrow /></button>
                </div>

                <div v-show="popupVisible" class="absolute right-0 mt-2 w-full md:w-64 wood-texture rounded-2xl z-50 overflow-hidden">
                    <div class="bg-amber-100 p-3 flex items-center justify-between gap-4">
                        <span class="tittle-font uppercase text-yellow-900 hover:text-yellow-700 cursor-pointer">cerrar sesion</span>
                        <button @click="logOut" class="cursor-pointer h-8 w-8 flex items-center justify-center hover:scale-105"><closeSession /></button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


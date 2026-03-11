<script setup lang="ts">

import closeSession from '../../assets/icons/closeSession.vue';
import { useLogOut } from '../../composables/useLogOut';
import { usePopup } from '../../composables/usePopup';
import leftArrow from '../../assets/icons/leftArrow.vue';

const {popupVisible,togglePopup} = usePopup();


const{nombreUsuario,logOut}= useLogOut();

</script>
<template>
    <header class="h-40 w-full flex items-center justify-center relative text-white ">
        <div class="flex items-center justify-between w-full pt-4 px-5">
            <div class="h-25 w-90 flex items-center justify-center gap-4 p-10  wood-texture rounded-2xl shadow-black shadow-2xl ">
                <h1 class="tittle-font text-3xl uppercase">Treasurepath</h1>
                <img src="../../assets/texture/barco.png" alt="logo" class="h-12 w-12 -translate-2">
            </div>

            <div class="flex justify-center items-center gap-3 p-10 wood-texture rounded-2xl shadow-black shadow-2xl relative h-25 w-40">
                <img src="../../assets/texture/piratas.png" alt="logo user" class="h-10 w-10">
                <span  class="text-lg tittle-font uppercase cursor-pointer">{{nombreUsuario}}</span>
                <button @click="togglePopup" class="cursor-pointer"><leftArrow/></button>
                <div v-show="popupVisible" class="wood-texture rounded-2xl absolute translate-y-18 z-50 h-full w-full flex justify-between items-center p-4">
                    <div class="bg-amber-100 h-full w-full rounded-2xl flex items-center justify-start gap-10 p-2"> 
                            <span class="tittle-font w-10 uppercase text-yellow-900 hover:text-yellow-700">cerrar sesion</span>
                            <button @click="logOut" class="cursor-pointer h-8 w-8 flex items-center justify-center hover:scale-105"><closeSession/></button>                                                                
                    </div>         
                </div>
            </div>
            
        </div>
        
    </header>
</template>


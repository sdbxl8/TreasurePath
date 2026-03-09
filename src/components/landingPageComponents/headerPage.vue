<script setup lang="ts">

import closeSession from '../../assets/icons/closeSession.vue';
import { useLogOut } from '../../composables/useLogOut';
import { usePopup } from '../../composables/usePopup';

const {popupVisible,togglePopup} = usePopup();


const{nombreUsuario,logOut}= useLogOut();

</script>
<template>
    <header class="h-20 w-full flex items-center justify-center relative text-white">
        <div class="flex items-center justify-between w-full pt-4 px-5">
            <div class="flex items-center justify-center gap-3 p-10">
                <h1 class="tittle-font text-3xl uppercase">Treasurepath</h1>
                <img src="../../assets/texture/barco.png" alt="logo" class="h-12 w-12 -translate-2">
            </div>

            <div class="flex justify-center items-center gap-3 p-10">
                <img src="../../assets/texture/piratas.png" alt="logo user" class="h-10 w-10">
                <button @click="togglePopup" class="text-lg tittle-font uppercase cursor-pointer">{{nombreUsuario}}</button>
                <div v-show="popupVisible" class="bg-white rounded-2xl absolute right-3 top-18 h-16 w-40 flex justify-between items-center p-4">
                    <span class="tittle-font w-10 uppercase text-black">cerrar sesion</span>
                    <button @click="logOut" class="cursor-pointer h-8 w-8 flex items-center justify-center hover:scale-105"> <closeSession/></button>           
                </div>
            </div>
            
        </div>
        
    </header>
</template>


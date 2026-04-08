<script setup lang="ts">

    import tick from '../../assets/icons/tick.vue';
    import arrowMax from '../../assets/icons/arrowMax.vue';
    import exit from '../../assets/icons/exit.vue';
    import {useMeta} from '../../composables/useMeta';
    import { onMounted, watch } from 'vue';
    import { usePopup } from '../../composables/usePopup';
    import metas from './metas.vue';

    const {metaCompletada,cargarMeta} = useMeta();

    // onMounted(()=>{
    //     cargarMeta();
    // })

    const {popupVisible,togglePopup} = usePopup();

    onMounted(()=>{
        cargarMeta();
    })
    watch(popupVisible, (newVal) => {
        if (newVal) {
            cargarMeta();
        }
    })
</script>

<template>
       <div class="h-full rounded-2xl flex flex-col gap-2 items-center justify-start wood-texture overflow-x-hidden  shadow-black shadow-2xl m-2 transition-all duration-700 p-1">

            <div v-show="popupVisible"  class="h-180 w-300 absolute z-50 top-1/8 left-1/2 transform -translate-x-1/2 wood-texture rounded-2xl flex items-center justify-center p-5"> 
                <metas class="h-full w-full"/> 
                <div class="flex flex-col items-center justify-start h-full w-full bg-amber-200 rounded-2xl">
                    <div class="flex items-center justify-center m-4 gap-3">
                        <h1 class="tittle-font uppercase text-2xl text-center">metas completadas</h1>
                        <img src="../../assets/texture/brujula.png" class="h-10 w-10">
                    <button @click="togglePopup" class="absolute right-6 top-2 rotate-45 hover:rotate-0 transition-all ease-in-out duration-700 cursor-pointer"><exit/></button>
                </div>
                <div v-if="metaCompletada.length ===0" class="">no hay metas completadas</div>
                <div v-else class="h-full w-full flex flex-col items-center justify-start overflow-x-hidden">
                    <div v-for="m in metaCompletada" :key="m.id" class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-3 m-2 bg-white/80 rounded-xl w-full">
                        <div class="flex flex-row items-center justify-center gap-2 w-full">
                            <p class="text-lg">{{ m.descripcion}}</p>
                            <span><tick/></span>
                        </div>
                    </div>
                </div>
                </div> 
            </div>
            
            <div class="flex items-center justify-center m-4 gap-3">
                <h1 class="tittle-font uppercase text-2xl text-center">metas completadas</h1>
                <img src="../../assets/texture/brujula.png" class="h-10 w-10">
                <button @click="togglePopup" class="cursor-pointer"><arrowMax/></button>
            </div>
            <div v-if="metaCompletada.length ===0" class="">no hay metas completadas</div>
            <div v-else class="h-full w-full">
                <div v-for="m in metaCompletada" :key="m.id" class="flex items-center justify-start gap-5">
                    <div class="flex flex-row items-center justify-center gap-2 w-full">
                        <p class="text-lg uppercase font-extrabold ">{{ m.descripcion}}</p>
                        <span><tick/></span>
                    </div>
                </div>
            </div>
       </div>
</template>
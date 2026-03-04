<script setup lang="ts">
    import xCircle from '../../assets/icons/xCircle.vue';
    import circlePlus from '../../assets/icons/circlePlus.vue';
    import tick from '../../assets/icons/tick.vue';
    import chest from '../../assets/icons/chest.vue';

    import exit from '../../assets/icons/exit.vue';
    import { usePopup } from '../../composables/usePopup';
    import {useMeta} from '../../composables/useMeta';
    import { onMounted } from 'vue';

   const {popupVisible,togglePopup} = usePopup();

    const {
        meta,
        metaCompletada,
        cargarMeta,
        calcularProgreso,
        descripcion,
        cantidad,
        añadirMeta,
        completarMeta
    } = useMeta();

    onMounted(()=>{
        cargarMeta();
    })

</script>
<template>

    <div class="h-full w-full flex items-center justify-center gap-5 rounded-2xl">                

        <div class="h-150 w-200 flex items-center justify-center flex-col p-3 paper-texture relative rounded-2xl">
            <div class="w-70 flex items-center justify-center gap-3">
                <h2 class="tittle-font text-2xl uppercase font-bold">metas activas</h2>
                <img src="../../assets/texture/brujula.png" class="h-10 w-10">
            </div>
                    
            <button @click="togglePopup" class="absolute right-3 top-3 cursor-pointer"><circlePlus/></button>
                                
            <div v-show="popupVisible" class="h-20 w-full flex items-center justify-center absolute z-50 right-0 top-0 rounded-2xl bg-panel  gap-4 ">
            <button @click="togglePopup" class="absolute right-6 top-2 rotate-45 hover:rotate-0 transition-all ease-in-out duration-700 cursor-pointer"><exit/></button>
                <form @submit.prevent="añadirMeta" class="flex items-center justify-center gap-2" >
                    <input v-model="descripcion" class="bg-transparent h-10 w-40 border-b-3 p-2 outline-none text-center" type="text">
                    <input v-model.number="cantidad" type="number" class="bg-transparent h-10 w-40 border-b-3 p-2 outline-none text-center no-spinner">
                    <div class="flex justify-center items-center gap-4">
                        <button type="reset" class="-translate-x-7"><xCircle/></button>
                        <button type="submit" class="border-2 borderLine wood-texture text-yellow-950 cursor-pointer hover:text-yellow-950 hover:scale-105 transition-all ease-in-out duration-700"><chest/></button>
                </div>                        
                </form>
            </div>

            <div v-if="meta.length === 0">
                <p>No hay metas activas</p>
            </div>

            <div v-else class="h-full w-full">

                <div v-for="m in meta" :key="m.id" class="flex justify-center items-center gap-5 h-20 w-full ">
                    <p class="font-body">{{ m.descripcion }} - {{ m.cantidad }}€</p>
                    <div class="relative w-20 h-5 bg-white rounded overflow-hidden border-2 border-amber-300">
                        <div class="h-10 bg-amber-300 transition-all duration-700 ease-out" :style="{width: calcularProgreso(m) + '%'}"></div>
                        <span class="absolute inset-0 flex justify-center items-center font-bold">{{ calcularProgreso(m) }}%</span>
                    </div>
                    <button @click="completarMeta(m.id)" class="cursor-pointer">completar</button>
                </div>                        
            </div>

        </div>


        <div class="h-150 w-100 rounded-2xl paper-texture flex flex-col gap-5 items-center justify-start">
            <div class="flex items-center justify-center m-4">
                <h1 class="tittle-font uppercase text-2xl text-center">metas completadas</h1>
                <img src="../../assets/texture/brujula.png" class="h-10 w-10">
            </div>
            <div v-if="metaCompletada.length ===0" class="">no hay metas completadas</div>
            <div v-else class="h-full w-full">
                <div v-for="m in metaCompletada" :key="m.id" class="grid grid-cols-2 gap-5 pl-20 w-full">
                    <div class="flex flex-row items-center justify-center gap-2 w-full">
                        <p class="text-lg">{{ m.descripcion}}</p>
                        <span><tick/></span>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
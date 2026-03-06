<script setup lang="ts">

    import tick from '../../assets/icons/tick.vue';
    import arrowMax from '../../assets/icons/arrowMax.vue';
    import {useMeta} from '../../composables/useMeta';
    import { onMounted } from 'vue';
    import { usePopup } from '../../composables/usePopup';

    const {
        metaCompletada,
        cargarMeta
    } = useMeta();

    const {popupVisible,togglePopup} = usePopup();


    onMounted(()=>{
        cargarMeta();
    })
</script>

<template>
       <div class="h-80 w-110 rounded-2xl flex flex-col gap-5 items-center justify-start overflow-y-hidden absolute">


            <div v-show="popupVisible"  class="h-180 w-150 absolute z-50 top-1/8 left-1/2 transform -translate-x-1/2 bg-red-800 rounded-2xl flex flex-col items-center justify-center p-5">
                 <div class="flex items-center justify-center m-4 gap-3">
                    <h1 class="tittle-font uppercase text-2xl text-center">metas completadas</h1>
                    <img src="../../assets/texture/brujula.png" class="h-10 w-10">
                </div>
                <div v-if="metaCompletada.length ===0" class="">no hay metas completadas</div>
                <div v-else class="h-full w-full flex flex-col items-center justify-start overflow-y-auto bg-green-900">
                    <div v-for="m in metaCompletada" :key="m.id" class="flex items-center justify-start gap-5 -20 w-full p-1">
                        <div class="flex flex-row items-center justify-center gap-2 w-full">
                            <p class="text-lg">{{ m.descripcion}}</p>
                            <span><tick/></span>
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
                        <p class="text-lg">{{ m.descripcion}}</p>
                        <span><tick/></span>
                    </div>
                </div>
            </div>
        </div>
</template>
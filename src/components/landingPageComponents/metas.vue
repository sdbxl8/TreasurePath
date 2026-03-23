<script setup lang="ts">
    import xCircle from '../../assets/icons/xCircle.vue';
    import circlePlus from '../../assets/icons/circlePlus.vue';
    // import tick from '../../assets/icons/tick.vue';
    import chest from '../../assets/icons/chest.vue';

    import exit from '../../assets/icons/exit.vue';
    import { usePopup } from '../../composables/usePopup';
    import {useMeta} from '../../composables/useMeta';
    import { onMounted } from 'vue';

   const {popupVisible,togglePopup} = usePopup();

    const {
        meta,
        // metaCompletada,
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

    <div class="w-full p-4 h-full flex lg:-row gap-4 ">

        <section class=" w-full flex flex-col justify-start items-center rounded-2xl relative p-4 bg-amber-200">

            <div class="flex items-center justify-center gap-3 ">
                <div class="flex justify-center items-center gap-3">
                    <h2 class="tittle-font text-2xl uppercase font-bold">Metas activas</h2>
                    <img src="../../assets/texture/brujula.png" class="h-10 w-10" alt="brújula" />
                </div>
                <button @click="togglePopup" class="cursor-pointer absolute top-2 right-2"><circlePlus /></button>
            </div>

            <div v-show="popupVisible" class="h-30 w-full absolute z-50 top-0 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl flex flex-col items-center justify-center p-5">
                <button @click="togglePopup" class="absolute right-4 top-3 rotate-45 hover:rotate-0 transition-all duration-700 cursor-pointer"><exit /></button>
                <form @submit.prevent="añadirMeta" class="flex flex-col sm:flex-row items-center justify-center gap-2">
                    <input v-model="descripcion" class="bg-transparent h-10 w-full sm:w-40 border-b-3 p-2 outline-none text-center" type="text" placeholder="Descripción">
                    <input v-model.number="cantidad" type="number" class="bg-transparent h-10 w-full sm:w-40 border-b-3 p-2 outline-none text-center no-spinner" placeholder="€">
                    <div class="flex items-center gap-2">
                        <button type="reset" class="-translate-x-3"><xCircle /></button>
                        <button type="submit" class="border-2 borderLine wood-texture text-yellow-950 cursor-pointer hover:text-yellow-950 hover:scale-105 transition-all ease-in-out duration-700"><chest /></button>
                    </div>
                </form>
            </div>

            <div class="h-full w-full p-4 overflow-y-auto">
                <div v-if="meta.length === 0" class="text-center text-sm">No hay metas activas</div>
                <div v-else class="space-y-4">
                    <div v-for="m in meta" :key="m.id" class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 bg-white/80 rounded-xl">
                        <div class="flex flex-col">
                            <p class="font-body font-semibold">{{ m.descripcion }}</p>
                            <p class="text-sm text-gray-600">{{ m.cantidad }} €</p>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <div class="relative h-4 bg-white rounded overflow-hidden border-2 border-amber-300">
                                <div class="h-full bg-amber-300 transition-all duration-700 ease-out" :style="{ width: calcularProgreso(m) + '%' }"></div>
                                <span class="absolute inset-0 flex items-center justify-center text-xs font-bold">{{ calcularProgreso(m) }}%</span>
                            </div>
                        </div>
                        <button @click="completarMeta(m.id)" class="text-sm font-semibold text-blue-700 hover:text-blue-900">completar</button>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>
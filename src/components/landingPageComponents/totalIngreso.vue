<script setup lang="ts">
    import { usePopup } from '../../composables/usePopup';
    import exit from '../../assets/icons/exit.vue';
    import arrowMax from '../../assets/icons/arrowMax.vue';
    import { useTotalIngreso } from '../../composables/useTotalIngreso';
    import { useIngreso } from '../../composables/useIngreso';
    import circlePlus from '../../assets/icons/circlePlus.vue';

    import { onMounted } from 'vue';

    const {popupVisible,togglePopup,ingresoVisible,toggleIngreso} = usePopup();
    const{totalIngreso,cargarTotalIngreso} = useTotalIngreso();

    const {
        ingreso,
        descripcion_ingreso,
        cantidad_ingreso,
        añadirIngreso,
    } = useIngreso();

    onMounted(()=>{
        cargarTotalIngreso();
    })
</script>

<template>

       <div class="wood-texture rounded-2xl flex justify-center items-center shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700 p-6">
            <div class="flex flex-col items-center justify-center gap-5 relative">
                <button @click="togglePopup" class="cursor-pointer absolute top-0 right-0"><arrowMax/></button>
                <h3 class="tittle-font text-3xl text-yellow-950">Ingresos totales</h3>
                <p class="text-2xl text-green-700">{{ totalIngreso }} €</p>
            </div>               
        </div>

        <div v-show="popupVisible"  class="h-180 w-210 absolute z-50 top-1/8 left-1/2 transform -translate-x-1/2 wood-texture rounded-2xl flex flex-col items-center justify-center p-5">
            <button @click="togglePopup" class="h-2 w-2 absolute right-4 top-2 rotate-45 hover:rotate-0 transition-all ease-in-out duration-700 cursor-pointer"><exit/></button>
            <div class="flex flex-col gap-4 bg-amber-200 h-full w-full rounded-2xl p-5">
                <div class="flex items-center justify-center gap-3 relative">
                    <h3 class="tittle-font text-2xl uppercase">Ingresos</h3>
                    <button @click="toggleIngreso" class="cursor-pointer absolute top-0 right-0"><circlePlus /></button>

                    <div v-show="ingresoVisible" class="absolute inset-x-4 top-16 z-50 bg-white/90 rounded-2xl p-4 shadow-lg">
                        <form @submit.prevent="añadirIngreso" class="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <input v-model="descripcion_ingreso" class="bg-transparent h-10 w-full sm:w-64 border-b-3 p-2 outline-none text-center" type="text" placeholder="Descripción">
                            <input v-model="cantidad_ingreso" type="number" class="bg-transparent h-10 w-full sm:w-40 border-b-3 p-2 outline-none text-center no-spinner" placeholder="€">
                            <button type="submit" class="border-2 borderLine wood-texture font-color cursor-pointer hover:scale-105 transition-all ease-in-out duration-700"><chest/></button>
                        </form>
                    </div>
                </div>

                <div class="space-y-3 max-h-[55vh] overflow-y-auto">
                    <div v-for="(item,index) in ingreso" :key="index" class="grid grid-cols-3 gap-2 items-center bg-white/70 rounded-xl p-3">
                        <div class="text-sm font-medium">{{ item.descripcion }}</div>
                        <div class="text-sm">{{ item.cantidad }}€</div>
                        <div class="text-sm text-gray-600">{{ item.fecha }}</div>
                     </div>
                </div>
            </div>
        </div>
</template>
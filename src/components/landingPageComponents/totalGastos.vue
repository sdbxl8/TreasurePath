<script setup lang="ts">

    import { usePopup } from '../../composables/usePopup';
    import arrowMax from '../../assets/icons/arrowMax.vue';
    import { useTotalGastos } from '../../composables/useTotalGastos';
    import { useGasto } from '../../composables/useGasto';
    import circlePlus from '../../assets/icons/circlePlus.vue';
    import chest from '../../assets/icons/chest.vue';
    import { onMounted } from 'vue';
    import exit from '../../assets/icons/exit.vue';

    const {popupVisible,togglePopup,gastoVisible,toggleGasto} = usePopup();
    const{totalGastos,cargarTotalGastos} = useTotalGastos();

       const {
         gasto,
        descripcion_gasto,
        cantidad_gasto,
        añadirGasto,
        } = useGasto();


    onMounted(()=>{
        cargarTotalGastos();
    })

</script>

<template>
         <div class="wood-texture rounded-2xl flex justify-center items-center shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700">
            <div class="flex flex-col items-center justify-center gap-5 relative h-full w-full">
                <button @click="togglePopup" class="cursor-pointer absolute top-2 right-2"><arrowMax/></button>
                <p class="text-4xl text-red-600 font-extrabold">-{{ totalGastos }} €</p>                
                <h3 class="tittle-font text-xl text-yellow-900">Gastos totales</h3>
            </div>
        </div>
 
        <div v-show="popupVisible"  class="h-180 w-210 absolute z-50 top-1/8 left-1/2 transform -translate-x-1/2 wood-texture rounded-2xl flex flex-col items-center justify-center p-8">
            <button @click="togglePopup" class="absolute right-6 top-2 rotate-45 hover:rotate-0 transition-all ease-in-out duration-700 cursor-pointer"><exit/></button>
            <div v-show="gastoVisible" class="h-20 w-full absolute top-0 z-50 bg-white rounded-2xl p-4 shadow-lg flex items-center justify-center gap-4">
                <button @click="toggleGasto" class="absolute right-6 top-2 rotate-45 hover:rotate-0 transition-all ease-in-out duration-700 cursor-pointer"><exit/></button>
                    <form @submit.prevent="añadirGasto" class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <input v-model="descripcion_gasto" class="bg-transparent h-10 w-full sm:w-64 border-b-3 p-2 outline-none text-center" type="text" placeholder="Descripción">
                        <input v-model="cantidad_gasto" type="number" class="bg-transparent h-10 w-full sm:w-40 border-b-3 p-2 outline-none text-center no-spinner" placeholder="cantidad">
                        <button type="submit" class=" cursor-pointer hover:text-yellow-950 hover:scale-115 transition-all ease-in-out duration-700"><chest/></button>
                    </form>
                </div>

                <div class="flex flex-col gap-4 bg-amber-200 h-full w-full rounded-2xl p-5">
                    <div class="flex items-center justify-center gap-3 relative">
                        <h1 class="tittle-font uppercase text-2xl">Gastos</h1>
                        <button @click="toggleGasto" class="cursor-pointer  absolute top-0 right-0"><circlePlus/></button>
                    </div>
                    <div class="space-y-3 max-h-[55vh] overflow-y-auto">
                        <div v-for="(item,index) in gasto" :key="index" class="grid grid-cols-3 gap-2 items-center bg-white/70 rounded-xl p-3">
                            <div class="text-sm font-medium">{{ item.descripcion }}</div>
                            <div class="text-sm">{{ item.cantidad }}€</div>
                            <div class="text-sm text-gray-600">{{ item.fecha }}</div>
                        </div>
                    </div>
                </div>
        </div>
</template>
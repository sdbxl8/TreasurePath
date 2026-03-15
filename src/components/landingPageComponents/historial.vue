<script setup lang="ts">
    import circlePlus from '../../assets/icons/circlePlus.vue';
    import exit from '../../assets/icons/exit.vue';
    import { usePopup } from '../../composables/usePopup';
    import { useIngreso } from '../../composables/useIngreso';
    import { useGasto } from '../../composables/useGasto';
    import chest from '../../assets/icons/chest.vue';

    const {gastoVisible,ingresoVisible,toggleIngreso,toggleGasto} = usePopup();

    const {
         gasto,
        descripcion_gasto,
        cantidad_gasto,
        añadirGasto,
    } = useGasto();

    const {
        ingreso,
        descripcion_ingreso,
        cantidad_ingreso,
        añadirIngreso,
    } = useIngreso();

</script>
<template>
    <div class="w-full max-w-5xl mx-auto px-4 py-6">

        <div class="flex flex-col lg:flex-row gap-6">

            <section class="relative w-full lg:w-1/2 bg-amber-400 rounded-2xl p-4">

                <button @click="toggleIngreso" class="absolute right-4 top-4 z-50 rotate-45 hover:rotate-0 transition-all duration-700 cursor-pointer"><exit/></button>

                <div v-show="ingresoVisible" class="absolute inset-x-4 top-16 z-50 bg-white/90 rounded-2xl p-4 shadow-lg">
                    <form @submit.prevent="añadirIngreso" class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <input v-model="descripcion_ingreso" class="bg-transparent h-10 w-full sm:w-64 border-b-3 p-2 outline-none text-center" type="text" placeholder="Descripción">
                        <input v-model="cantidad_ingreso" type="number" class="bg-transparent h-10 w-full sm:w-40 border-b-3 p-2 outline-none text-center no-spinner" placeholder="€">
                        <button type="submit" class="border-2 borderLine wood-texture font-color cursor-pointer hover:scale-105 transition-all ease-in-out duration-700"><chest/></button>
                    </form>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between">
                        <h3 class="tittle-font text-2xl uppercase">Ingresos</h3>
                        <button @click="toggleIngreso" class="cursor-pointer"><circlePlus /></button>
                    </div>
                    <div class="space-y-3 max-h-[55vh] overflow-y-auto">
                        <div v-for="(item,index) in ingreso" :key="index" class="grid grid-cols-3 gap-2 items-center bg-white/70 rounded-xl p-3">
                            <div class="text-sm font-medium">{{ item.descripcion }}</div>
                            <div class="text-sm">{{ item.cantidad }}€</div>
                            <div class="text-sm text-gray-600">{{ item.fecha }}</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="relative w-full lg:w-1/2 bg-amber-400 rounded-2xl p-4">
                <button @click="toggleGasto" class="absolute right-4 top-4 z-50 rotate-45 hover:rotate-0 transition-all duration-700 cursor-pointer"><exit/></button>
                <div v-show="gastoVisible" class="absolute inset-x-4 top-16 z-50 bg-white/90 rounded-2xl p-4 shadow-lg">
                    <form @submit.prevent="añadirGasto" class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <input v-model="descripcion_gasto" class="bg-transparent h-10 w-full sm:w-64 border-b-3 p-2 outline-none text-center" type="text" placeholder="Descripción">
                        <input v-model="cantidad_gasto" type="number" class="bg-transparent h-10 w-full sm:w-40 border-b-3 p-2 outline-none text-center no-spinner" placeholder="€">
                        <button type="submit" class="border-2 borderLine wood-texture font-color cursor-pointer hover:scale-105 transition-all ease-in-out duration-700"><chest/></button>
                    </form>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between">
                        <h1 class="tittle-font uppercase text-2xl">Gastos</h1>
                        <button @click="toggleGasto" class="cursor-pointer"><circlePlus /></button>
                    </div>
                    <div class="space-y-3 max-h-[55vh] overflow-y-auto">
                        <div v-for="(item,index) in gasto" :key="index" class="grid grid-cols-3 gap-2 items-center bg-white/70 rounded-xl p-3">
                            <div class="text-sm font-medium">{{ item.descripcion }}</div>
                            <div class="text-sm">{{ item.cantidad }}€</div>
                            <div class="text-sm text-gray-600">{{ item.fecha }}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
    .bg-book{
        background-image: url('../../assets/texture/libro.png');
        background-size: cover;
        background-position: center;
    }
</style>
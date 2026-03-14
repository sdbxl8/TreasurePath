<script setup lang="ts">
    import exit from '../../assets/icons/exit.vue';
    import { usePopup } from '../../composables/usePopup';
    import CirclePlus from '../../assets/icons/circlePlus.vue';
    import { useSaldo } from '../../composables/useSaldo';
    import { useTotalGastos } from '../../composables/useTotalGastos';
    import { useTotalIngreso } from '../../composables/useTotalIngreso';
    import { usePorcentajeAhorro } from '../../composables/usePorcentajeAhorro';
    import xCircle from '../../assets/icons/xCircle.vue';
    import chest from '../../assets/icons/chest.vue';
    import { onMounted } from 'vue';

    const {popupVisible,togglePopup} = usePopup();

    const {saldo,newSaldo,saldoInicial,actualizarSaldo} = useSaldo();

    const {totalGastos,cargarTotalGastos} = useTotalGastos(); 

    const{totalIngreso,cargarTotalIngreso} = useTotalIngreso();

    const{porcentajeAhorro} = usePorcentajeAhorro();

    onMounted(()=>{
        cargarTotalGastos();
        saldoInicial();
        cargarTotalIngreso();
    });
    
    
</script>
<template>
    <section class="w-full h-40">

        <div class="flex justify-between itmes-center gap-5 p-3">           
            <div class="bg-amber-200 rounded-2xl flex flex-col justify-center items-center relative shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700">
                <button @click="togglePopup" class="absolute right-3 top-3 text-yellow-950 cursor-pointer"><circlePlus/></button>

                <div v-show="popupVisible" class="absolute inset-0 bg-amber-900 flex items-center justify-center gap-4 rounded-2xl p-4">
                    <button @click="togglePopup" class="absolute right-6 top-2 rotate-45 hover:rotate-0 transition-all ease-in-out duration-700 cursor-pointer"><exit/></button>
                    <form @submit.prevent="actualizarSaldo" class="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
                        <input v-model.number="newSaldo" class="bg-transparent h-10 w-full sm:w-40 border-b-3 p-2 outline-none text-center no-spinner" type="number">
                        <div class="flex items-center gap-2">
                            <button type="reset" class="-translate-x-3"><xCircle/></button>
                            <button type="submit" class="border-2 borderLine wood-texture text-yellow-950 cursor-pointer hover:text-yellow-950 hover:scale-105 transition-all ease-in-out duration-700"><chest/></button>
                        </div>
                    </form>
                </div>

                <div class="bg-amber-200 flex flex-col items-center justify-center gap-5 p-6">
                    <h3 class="tittle-font text-3xl text-yellow-950">Saldo actual</h3>
                    <span class="text-2xl text-yellow-950">{{ saldo }} €</span>
                </div>
            </div>

            <div class="bg-amber-200 rounded-2xl flex justify-center items-center shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700 p-6">
                <div class="flex flex-col items-center justify-center gap-5">
                    <h3 class="tittle-font text-3xl text-yellow-950">Ingresos totales</h3>
                    <p class="text-2xl text-green-700">{{ totalIngreso }} €</p>
                </div>
            </div>

            <div class="bg-amber-200 rounded-2xl flex justify-center items-center shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700 p-6">
                <div class="flex flex-col items-center justify-center gap-5">
                    <h3 class="tittle-font text-3xl text-yellow-950">Gastos totales</h3>
                    <p class="text-2xl text-red-800">-{{ totalGastos }} €</p>
                </div>
            </div>

            <div class="bg-amber-200 rounded-2xl flex justify-center items-center shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700 p-6">
                <div class="flex flex-col items-center justify-center gap-5">
                    <h3 class="tittle-font text-3xl text-yellow-950 text-center">Porcentaje de ahorro</h3>
                    <p class="text-2xl text-yellow-950">{{ porcentajeAhorro }} %</p>
                </div>
            </div>
        </div>
    </section>
</template>
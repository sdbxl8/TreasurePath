<script setup lang="ts">
    // import graphics from './graphics.vue';
    // import mostrarMeta from './mostrarMeta.vue';
    // import circlePlus from '../../assets/icons/circlePlus.vue';
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

    <section class="flex justify-center items-center">

        <div class="grid grid-cols-2 gap-10">

       <div class="h-80 w-110 rounded-2xl flex justify-center items-center relative shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700">

            <button @click="togglePopup" class="absolute right-3 top-3 text-yellow-950 cursor-pointer"><circlePlus/></button>

            <div v-show="popupVisible" class="h-20 w-full bg-panel absolute top-0 flex items-center justify-center gap-4 rounded-2xl ">
                <button @click="togglePopup" class="absolute right-6 top-2 rotate-45 hover:rotate-0 transition-all ease-in-out duration-700 cursor-pointer"><exit/></button>
                <form @submit.prevent="actualizarSaldo" class="flex items-center justify-center gap-2">
                    <input v-model.number="newSaldo" class="bg-transparent h-10 w-40 border-b-3 p-2 outline-none text-center no-spinner" type="number">
                    <button type="reset" class="-translate-x-7"><xCircle/></button>
                    <button type="submit" class="border-2 borderLine wood-texture text-yellow-950 cursor-pointer hover:text-yellow-950 hover:scale-105 transition-all ease-in-out duration-700"><chest/></button>
                </form>                
            </div>

            <div class="flex flex-col items-center justify-center gap-5 ">
                <h3 class="tittle-font text-3xl text-yellow-950">Saldo actual</h3>
                <span class="text-2xl text-yellow-950">{{ saldo}} €</span>
            </div>           
       </div>
       

       <div class="h-80 w-110  rounded-2xl flex justify-center items-center shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700">
        <div  class="flex flex-col items-center justify-center gap-5">
            <h3 class="tittle-font text-3xl text-yellow-950">Ingresos totales</h3>
            <p class="text-2xl text-green-700">{{ totalIngreso }} €</p>
        </div>            
       </div>

       <div class="h-80 w-110  rounded-2xl flex justify-center items-center shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700">
        <div class="flex flex-col items-center justify-center gap-5">
            <h3 class="tittle-font text-3xl text-yellow-950">gastos totales</h3>
            <p class="text-2xl text-red-800">-{{ totalGastos }} €</p>
        </div>            
       </div>
       <div class="h-80 w-110  rounded-2xl flex justify-center items-center shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700">
            <div class="flex flex-col items-center justify-center translate-y-4 gap-5">
                <h3 class="tittle-font text-3xl text-yellow-950 text-center">porcentaje de ahorro</h3>
                <p class="text-2xl text-yellow-950">{{ porcentajeAhorro }} %</p>
            </div>            
       </div>
    </div>
    </section>
    

</template>

 <style scoped>
   .bg-map{
    background-image: url(../../assets/texture/fondo-recuadro.jpg);
    background-size: cover;
    background-position: center;
    backdrop-filter: inherit;
    }
</style>
<script setup lang="ts">

    //    import { usePopup } from '../../composables/usePopup';
    // import arrowMax from '../../assets/icons/arrowMax.vue';
    import { useTotalGastos } from '../../composables/useTotalGastos';
    import { onMounted } from 'vue';

    // const {popupVisible,togglePopup} = usePopup();
    const{totalGastos,cargarTotalGastos} = useTotalGastos();

    onMounted(()=>{
        cargarTotalGastos();
    })

</script>

<template>
         <div class="wood-texture rounded-2xl flex justify-center items-center shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700 p-6">
                <div class="flex flex-col items-center justify-center gap-5">
                    <h3 class="tittle-font text-3xl text-yellow-950">Gastos totales</h3>
                    <p class="text-2xl text-red-800">-{{ totalGastos }} €</p>
                </div>
            </div>
</template>
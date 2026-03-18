<script setup lang="ts">
    import { usePorcentajeAhorro } from '../../composables/usePorcentajeAhorro';
    const{porcentajeAhorro} = usePorcentajeAhorro();

</script>

<template>
    <div class="wood-texture rounded-2xl flex justify-center items-center shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700 p-6">
        <div class="flex flex-col items-center justify-center gap-5">
            <p class="text-4xl text-white font-extrabold">{{ porcentajeAhorro }} %</p>
            <h3 class="tittle-font text-xl text-yellow-950 text-center">Porcentaje de ahorro</h3>
        </div>
    </div> 
</template>
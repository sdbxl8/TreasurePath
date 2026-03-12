<script setup lang="ts">
import '../../chartSetup';
import { Bar } from 'vue-chartjs';
import { useGrapichs } from '../../composables/useGraphics';


const {chartData,chartOptions}=useGrapichs();

</script>

<template>
    <div class="w-full max-w-3xl h-64 md:h-96 bg-amber-500 flex items-center justify-center p-2 rounded-2xl">
        <Bar class="w-full h-full" :data="chartData" :options="chartOptions"/>
    </div>
</template>
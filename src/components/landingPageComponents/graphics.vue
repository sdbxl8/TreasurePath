<script setup lang="ts">
import '../../chartSetup';
import { Bar } from 'vue-chartjs';
import { useGrapichs } from '../../composables/useGraphics';


const {chartData,chartOptions}=useGrapichs();

</script>

<template>
    <div class="h-80 w-110 bg-amber-500 flex items-center justify-center p-2">
        <Bar  :data="chartData" :options="chartOptions"/>
    </div>
</template>
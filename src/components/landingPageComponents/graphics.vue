<script setup lang="ts">
import '../../chartSetup';
import { Bar } from 'vue-chartjs';
import { useGrapichs } from '../../composables/useGraphics';

const { chartData, chartOptions } = useGrapichs();
</script>

<template>
  <div class="w-full h-100 flex items-center justify-center p-4 sm:p-6">
    <div class="w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
      <Bar 
        class="w-full" 
        :data="chartData" 
        :options="chartOptions"
        :style="{ minHeight: 'clamp(20rem, 20vh, 50rem)' }"
      />
    </div>
  </div>
</template>

<!-- <style scoped>
/* Animación suave al cargar */
div {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  :deep(.chartjs-tooltip) {
    font-size: 12px;
  }
}
</style> -->
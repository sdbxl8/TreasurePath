<script setup lang="ts">
    import graphics from './graphics.vue';
    import balanceSalary from './balanceSalary.vue';
import MostrarMeta from './mostrarMeta.vue';
</script>
<template>
    <section class="w-full h-full grid grid-cols-[1fr_2fr] p-5 ">
        <div class="flex items-center justify-center flex-col gap-5 ml-10">
            <graphics class="h-80 w-110 wood-texture rounded-2xl flex justify-center items-center shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700"/>
            <MostrarMeta class="h-80 w-110 wood-texture rounded-2xl flex justify-center items-center shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700" />
        </div>
        <div class=" ">
            <balanceSalary/>
        </div>
    </section>
</template>

<script setup lang="ts">
    import balanceSalary from './balanceSalary.vue';
    import graphics from './graphics.vue';
    import mostrarMeta from './mostrarMeta.vue';
</script>
<template>
    <section class=" h-full w-full grid grid-cols-[3fr_1fr] grid-rows-1 gap-8 p-3">
        <div class="flex flex-col items-center justify-start gap-40">
            <balanceSalary/>
            <graphics/>
        </div>       
       <mostrarMeta class="col-start-2 row-span-2" />       
    </section>
</template>

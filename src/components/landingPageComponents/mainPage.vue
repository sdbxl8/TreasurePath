<script setup lang="ts">
    import balanceSalary from './balanceSalary.vue';
    import graphics from './graphics.vue';
    import mostrarMeta from './mostrarMeta.vue';
</script>
<template>
    <section class=" h-full w-full grid grid-cols-[3fr_1fr] grid-rows-2 gap-10 items-center p-5">
       <balanceSalary/>
       <graphics class="row-start-2 " />
       <mostrarMeta class="col-start-2 row-span-2" />       
    </section>
</template>

<script setup lang="ts">
    import balanceSalary from './balanceSalary.vue';
    import graphics from './graphics.vue';
    import mostrarMeta from './mostrarMeta.vue';
</script>
<template>
    <section class="flex h-full w-full  bg-green-600">
       <balanceSalary/>
       <graphics/>
       <mostrarMeta/>       
    </section>
</template>

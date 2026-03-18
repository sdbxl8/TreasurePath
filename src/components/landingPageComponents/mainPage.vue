<script setup lang="ts">
    import balanceSalary from './balanceSalary.vue';
    import graphics from './graphics.vue';
    import mostrarMeta from './mostrarMeta.vue';
</script>
<template>
    <!-- <section class=" h-full w-full grid grid-cols-[4fr_1fr] grid-rows-1 gap-5 p-2">
        <div class=" w-full flex flex-col items-center justify-start gap-5">
            <balanceSalary/>
            <graphics/>
        </div>       
       <mostrarMeta class="col-start-2 row-span-2" />       
    </section> -->
    <section class="h-full w-full grid grid-rows-[auto_auto] gap-4 p-2">
        <div class="w-full p-5">
            <balanceSalary class="w-full" />
        </div>
        <div class="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 p">
            <div class="w-full flex items-start justify-center">
                <graphics class="w-full" />
            </div>
            <div class="w-full flex items-start justify-end">
                <mostrarMeta class="w-full" />
            </div>
        </div>
    </section>
</template>

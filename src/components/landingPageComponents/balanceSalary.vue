<script setup lang="ts">
    import saldo from './saldo.vue';
    import totalIngreso from './totalIngreso.vue';
    import totalGastos from './totalGastos.vue';
    import ahorro from './ahorro.vue';

</script>
<template>
    <section class="w-full h-40  m-5">

        <div class="flex justify-between items-center gap-5 p-3">              
            <saldo/>
            <ahorro/>
            <totalIngreso/>
            <totalGastos/>
        </div>
    </section>
</template>
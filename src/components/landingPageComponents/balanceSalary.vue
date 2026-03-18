<script setup lang="ts">
    import saldo from './saldo.vue';
    import totalIngreso from './totalIngreso.vue';
    import totalGastos from './totalGastos.vue';
    import ahorro from './ahorro.vue';

</script>
<template>
    <section class="w-full h-20 m-5">

        <div class="grid grid-cols-4 gap-5 p-3">              
            <saldo/>
            <ahorro />
            <totalIngreso />
            <totalGastos />
        </div>
    </section>
</template>
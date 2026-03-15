<script setup lang="ts">

    import { onMounted } from 'vue';
    import exit from '../../assets/icons/exit.vue';
    import xCircle from '../../assets/icons/xCircle.vue';
    // import arrowMax from '../../assets/icons/arrowMax.vue';
    import { usePopup } from '../../composables/usePopup';
    import circlePlus from '../../assets/icons/circlePlus.vue';
    import { useSaldo } from '../../composables/useSaldo';

    const {popupVisible,togglePopup} = usePopup();
    const {saldo,newSaldo,saldoInicial,actualizarSaldo} = useSaldo();

    onMounted(()=>{
        saldoInicial();
    });

</script>

<template>
    <div class="rounded-2xl flex flex-col justify-center items-center relative shadow-2xl shadow-black hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-700">
                <button @click="togglePopup" class="absolute right-3 top-3 text-yellow-950 cursor-pointer"><circlePlus/></button>

                <div v-show="popupVisible" class="absolute z-50 top-1/8 left-1/2 transform -translate-x-1/2 wood-texture rounded-2xl flex flex-col items-center justify-center p-5">
                    <button @click="togglePopup" class="absolute right-6 top-2 rotate-45 hover:rotate-0 transition-all ease-in-out duration-700 cursor-pointer"><exit/></button>
                    <form @submit.prevent="actualizarSaldo" class="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
                        <input v-model.number="newSaldo" class="bg-transparent h-10 w-full sm:w-40 border-b-3 p-2 outline-none text-center no-spinner" type="number">
                        <div class="flex items-center gap-2">
                            <button type="reset" class="-translate-x-3"><xCircle/></button>
                            <button type="submit" class="border-2 borderLine wood-texture text-yellow-950 cursor-pointer hover:text-yellow-950 hover:scale-105 transition-all ease-in-out duration-700"><chest/></button>
                        </div>
                    </form>
                </div>

                <div class="wood-texture rounded-2xl flex flex-col items-center justify-center gap-5 p-6">
                    <h3 class="tittle-font text-xl text-yellow-950">Saldo actual</h3>
                    <span class="text-2xl text-yellow-950">{{ saldo }} €</span>
                </div>
            </div>
</template>
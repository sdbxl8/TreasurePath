<script setup lang="ts">
import xCircle from '../assets/icons/xCircle.vue'
import { useLogging} from '../composables/useLogging';

const{logUsuario,loggingData}= useLogging()

</script>

<template>
    <div class="min-h-screen w-full grid grid-cols-1 md:grid-cols-2">
        <div class="bg-logging"></div>
        <div class="old-wood-texture flex items-center justify-center p-6">
            <div class="wood-texture w-full max-w-lg flex flex-col items-center justify-around rounded-2xl p-8">
                <div class="flex flex-col items-center gap-4">
                    <h1 class="tittle-font text-4xl md:text-5xl font-extrabold uppercase font-color text-center">TreasurePath</h1>
                    <img src="../assets/texture/barco.png" class="h-20 w-20" alt="logo">
                </div>

                <form @submit.prevent="logUsuario" class="w-full mt-6 space-y-4" autocomplete="off">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                        <label class="w-full sm:w-1/3 tittle-font text-lg font-color">Nombre Usuario:</label>
                        <div class="flex items-center gap-2 w-full">
                            <input v-model="loggingData.nombre_usuario" class="h-10 w-full border-0 border-b-3 border-b-black p-2 outline-none bg-transparent" type="text" />
                            <button class="cursor-pointer" type="reset"><xCircle /></button>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                        <label class="w-full sm:w-1/3 tittle-font text-lg font-color">Contraseña:</label>
                        <div class="flex items-center gap-2 w-full">
                            <input v-model="loggingData.contraseña" type="password" class="h-10 w-full border-0 border-b-3 border-b-black p-2 outline-none bg-transparent" />
                            <button class="cursor-pointer" type="reset"><xCircle /></button>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <button class="tittle-font cursor-pointer font-color wood-texture h-12 w-full sm:w-40 flex items-center justify-center rounded-lg shadow shadow-amber-900 hover:text-black hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all ease-in-out duration-700" type="submit">entrar</button>
                    </div>
                </form>

                <div class="w-full text-center mt-4">
                    <span class="text-sm">No tienes una cuenta? <RouterLink to="/register" class="hover:text-amber-300 font-extrabold transition-all">Registrate aqui</RouterLink></span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .bg-logging{
        background-image: url('../assets/texture/img3.jpg');
        background-size: cover;
    }
</style>
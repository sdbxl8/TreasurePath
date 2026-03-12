<script setup lang="ts">
    import xCircle from '../assets/icons/xCircle.vue';
    import {useRegistro} from '../composables/useRegistro';
    import returnArrow from '../assets/icons/return-arrow.vue'; 
    
    const{registerData,registrarUsuario}=useRegistro();
    

</script>

<template>
    <div class="min-h-screen w-full grid grid-cols-1 md:grid-cols-2">
        <div class="old-wood-texture flex items-center justify-center p-6">
            <div class="wood-texture w-full max-w-lg flex flex-col items-center justify-center rounded-2xl shadow-xl shadow-amber-900 p-8">
                <div class="flex flex-col items-center gap-4">
                    <h1 class="tittle-font text-4xl md:text-5xl font-extrabold uppercase font-color text-center">TreasurePath</h1>
                    <img src="../assets/texture/barco.png" class="h-20 w-20" alt="logo">
                </div>

                <form @submit.prevent="registrarUsuario" class="w-full mt-6 space-y-4">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                        <label class="w-full sm:w-1/3 tittle-font uppercase text-lg font-color">Nombre:</label>
                        <div class="flex items-center gap-2 w-full">
                            <input v-model="registerData.nombre" class="h-10 w-full border-0 border-b-3 border-b-black p-2 outline-none bg-transparent" type="text" />
                            <button class="cursor-pointer" type="reset"><xCircle /></button>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                        <label class="w-full sm:w-1/3 tittle-font uppercase text-lg font-color">Apellidos:</label>
                        <div class="flex items-center gap-2 w-full">
                            <input v-model="registerData.apellido" class="h-10 w-full border-0 border-b-3 border-b-black p-2 outline-none bg-transparent" type="text" />
                            <button class="cursor-pointer" type="reset"><xCircle /></button>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                        <label class="w-full sm:w-1/3 tittle-font uppercase text-lg font-color">Nombre Usuario:</label>
                        <div class="flex items-center gap-2 w-full">
                            <input v-model="registerData.nombre_usuario" class="h-10 w-full border-0 border-b-3 border-b-black p-2 outline-none bg-transparent" type="text" />
                            <button class="cursor-pointer" type="reset"><xCircle /></button>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                        <label class="w-full sm:w-1/3 tittle-font uppercase text-lg font-color">Contraseña:</label>
                        <div class="flex items-center gap-2 w-full">
                            <input v-model="registerData.contraseña" class="h-10 w-full border-0 border-b-3 border-b-black p-2 outline-none bg-transparent" type="password" />
                            <button class="cursor-pointer" type="reset"><xCircle /></button>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row items-center justify-center gap-5 mt-4">
                        <RouterLink to="/logging" class="tittle-font wood-texture h-12 w-full sm:w-24 flex items-center justify-center rounded-lg shadow shadow-amber-900 hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-700">
                            <return-arrow />
                        </RouterLink>
                        <button class="tittle-font wood-texture h-12 w-full sm:w-40 flex items-center justify-center rounded-lg shadow shadow-amber-900 hover:shadow-2xl hover:shadow-black hover:text-black font-color hover:scale-105 transition-all ease-in-out duration-700" type="submit">guardar datos</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="h-full w-full bg-register"></div>
    </div>
</template>

<style scoped >
    .bg-register{
        background-image: url('../assets/texture/fondolg.jpg');
        background-size: cover;
    }
</style>
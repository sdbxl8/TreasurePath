<script setup lang="ts">
    import xCircle from '../assets/icons/xCircle.vue';
    import {useRegistro} from '../composables/useRegistro';
    import returnArrow from '../assets/icons/return-arrow.vue'; 
    
    const{registerData,registrarUsuario}=useRegistro();
    

</script>

<template>
    <div class="h-screen w-full grid grid-cols-2">

        <div class="old-wood-texture flex justify-center items-center">
            <div class="wood-texture h-140 w-160  flex flex-col items-center justify-center rounded-2xl shadow-xl shadow-amber-900">
                <div class="flex justify-center items-center ml gap-5">
                    <h1 class="tittle-font text-5xl font-extrabold uppercase font-color">TreasurePath</h1>
                    <img src="../assets/texture/barco.png" class="h-20 w-20 -translate-y-2" alt="logo">
                </div>
                    <form @submit.prevent="registrarUsuario">
                    <div class="h-20 w-full flex justify-center items-center gap-3">
                        <label class="tittle-font uppercase text-xl font-color">Nombre:</label>
                        <input v-model="registerData.nombre" class="h-6 w-50  border-0 border-b-3 border-b-black p-2 outline-none bg-transparent" type="text">
                        <button class="cursor-pointer" type="reset"><xCircle /></button>
                    </div>
                    <div class="h-20 flex justify-center items-center gap-3">
                        <label class="tittle-font uppercase text-xl font-color">Apellidos:</label>
                        <input v-model="registerData.apellido" class="h-6 w-50  border-0 border-b-3 border-b-black p-2 outline-none bg-transparent" type="text">
                        <button class="cursor-pointer" type="reset"><xCircle /></button>
                    </div>
                    <div class="h-20 flex justify-center items-center gap-3">
                        <label class="tittle-font uppercase text-xl font-color">Nombre Usuario:</label>
                        <input v-model="registerData.nombre_usuario" class="h-6 w-50  border-0 border-b-3 border-b-black p-2 outline-none bg-transparent" type="text">
                        <button class="cursor-pointer" type="reset"><xCircle /></button>
                    </div>
                     <div class="h-20 flex justify-center items-center gap-3">
                        <label class="tittle-font uppercase text-xl font-color">Contraseña:</label>
                        <input v-model="registerData.contraseña" class="h-6 w-50  border-0 border-b-3 border-b-black p-2 outline-none bg-transparent" type="password">
                        <button class="cursor-pointer" type="reset"><xCircle /></button>
                    </div>
                    <div class="w-full flex justify-center items-center gap-5 m-5 transition-all">
                        <button 
                            class="tittle-font wood-texture h-10 w-20 cursor-pointer shadow shadow-amber-900 hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all ease-in-out duration-700">
                            <RouterLink to="/logging" class="flex items-center justify-center"><return-arrow/></RouterLink>
                        </button>
                        <button class="tittle-font wood-texture h-10 w-40 cursor-pointer shadow shadow-amber-900 hover:shadow-2xl hover:shadow-black hover:text-black font-color hover:scale-105 transition-all ease-in-out duration-700" type="submit">guardar datos</button>
                    </div>
                </form>
            
        </div>
            
    </div>

        <div class="h-full w-full bg-register">
        </div>

    </div>

</template>

<style scoped >
    .bg-register{
        background-image: url('../assets/texture/fondolg.jpg');
        background-size: cover;
    }
</style>
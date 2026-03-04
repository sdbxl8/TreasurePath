<script setup lang="ts">
import xCircle from '../assets/icons/xCircle.vue'
import { useLogging} from '../composables/useLogging';

const{logUsuario,loggingData}= useLogging()

</script>

<template>

    <div class="h-screen w-full grid grid-cols-2">

        <div class="bg-logging">

        </div>
        
        <div class="old-wood-texture flex items-center justify-center ">
            
            <div class="wood-texture h-120 w-140  flex flex-col items-center justify-around rounded-2xl">
                <div class="flex justify-center items-center ml-2 gap-3">
                    <h1 class="tittle-font text-5xl font-extrabold uppercase font-color">TreasurePath</h1>
                    <img src="../assets/texture/barco.png" class="h-20 w-20 -translate-y-3" alt="logo">
                </div>
                    
                <form @submit.prevent="logUsuario" class="h-50 w-full flex items-center justify-around flex-col" autocomplete="off">
                    <div class="h-20 w-full flex items-center justify-center gap-2">
                            <label class="tittle-font text-2xl font-color">Nombre Usuario:</label>                      
                            <input v-model="loggingData.nombre_usuario" class="h-6 w-50  border-0 border-b-3 border-b-black p-2 outline-none bg-transparent" type="text">
                            <button class="cursor-pointer" type="reset"><xCircle /></button>        
                    </div>                    
                    <div class="h-20 w-full flex items-center justify-center p-4 gap-2">
                        <label class="tittle-font text-2xl font-color">Contraseña:</label>            
                        <input v-model="loggingData.contraseña" type="password" class="h-6 w-50  border-0 border-b-3 border-b-black p-2 outline-none bg-transparent">
                        <button class="cursor-pointer" type="reset"><xCircle /></button>
                    </div>
                    <div class="h-5 w-full flex justify-center items-center">
                        <button class="tittle-font font-color wood-texture h-10 w-40 cursor-pointer shadow shadow-amber-900 hover:text-black hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all ease-in-out duration-700" type="submit">entrar</button>   
                    </div> 
                                       
                </form> 
                <div class="h-10 w-full flex justify-center items-end center">
                    <span class="">No tienes una cuenta? <RouterLink to="/register" class=" hover:text-amber-300  font-extrabold transition-all">Registrate aqui</RouterLink></span>                
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
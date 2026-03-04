<script setup lang="ts">
    import circlePlus from '../../assets/icons/circlePlus.vue';
    import xCircle from '../../assets/icons/xCircle.vue';
    import exit from '../../assets/icons/exit.vue';
    import { usePopup } from '../../composables/usePopup';
    import { useIngreso } from '../../composables/useIngreso';
    import { useGasto } from '../../composables/useGasto';
    import chest from '../../assets/icons/chest.vue';

    const {gastoVisible,ingresoVisible,toggleIngreso,toggleGasto} = usePopup();

    const {
         gasto,
        descripcion_gasto,
        cantidad_gasto,
        añadirGasto,
    } = useGasto();

    const {
        ingreso,
        descripcion_ingreso,
        cantidad_ingreso,
        añadirIngreso,
    } = useIngreso();

</script>
<template>

<div class="h-auto w-full flex items-center justify-center translate-y-12">

    <div class="min-h-160 w-200 flex bg-book">

        <div v-show="ingresoVisible" class="flex-col e z-50 h-20 w-200 wood-texture absolute top-0 flex items-center justify-center gap-4 rounded-2xl ">
            <button @click="toggleIngreso" class="rotate-45 hover:rotate-0 transition-all ease-in-out duration-700 cursor-pointer absolute z-50 top-2 right-2"><exit/></button>
            <form @submit.prevent="añadirIngreso" class="gap-8 flex items-center justify-center">
                <input v-model="descripcion_ingreso" class="bg-transparent h-10 w-70 border-b-3 p-2 outline-none text-center" type="text">
                <button type="reset" class="-translate-x-13"><xCircle/></button>                         
                <input v-model="cantidad_ingreso" type="number" class=" bg-transparent h-10 w-40 border-b-3 p-2 outline-none text-center no-spinner">
                <button type="reset" class="-translate-x-13"><xCircle/></button>                         
                <button type="submit" class="border-2 borderLine wood-texture text-yellow-950 cursor-pointer hover:text-yellow-950 hover:scale-105 transition-all ease-in-out duration-700"><chest/></button>
            </form>
        </div> 
      
        <div v-show="gastoVisible" class="flex-col e z-50 h-20 w-200 wood-texture absolute top-0 flex items-center justify-center gap-4 rounded-2xl ">
            <button @click="toggleGasto" class="absolute z-50 right-2 top-2 rotate-45 hover:rotate-0 transition-all ease-in-out duration-700 cursor-pointer"><exit/></button>
            <form @submit.prevent="añadirGasto" class="gap-8 flex items-center justify-center">
                <input v-model="descripcion_gasto" class="bg-transparent h-10 w-70 border-b-3 p-2 outline-none text-center" type="text">
                <button type="reset" class="-translate-x-13"><xCircle/></button>
                <input v-model="cantidad_gasto" type="number" class=" bg-transparent h-10 w-40 border-b-3 p-2 outline-none text-center no-spinner">
                <button type="reset" class="-translate-x-13"><xCircle/></button>                         
                <button type="submit" class="border-2 borderLine wood-texture font-color cursor-pointer hover:scale-105 transition-all ease-in-out duration-700"><chest/></button>
            </form>
        </div>

            <div class="h-80 w-90 p-3 relative translate-y-4 translate-x-10">          

                <h3 class="tittle-font text-2xl uppercase text-center mb-4 border-b-2" >ingresos</h3>

                <button @click="toggleIngreso" class="absolute right-4 top-3 cursor-pointer z-50"><circlePlus /></button>                 

                <div  v-for="(item,index) in ingreso" :key="index" class="grid grid-cols-3  w-full overflow-y-auto">
                    <div class="flex justify-center items-center">
                        <span>{{ item.descripcion }}</span>
                    </div>
                    <div class="flex justify-center items-center">
                        <span>{{ item.cantidad }}€</span>
                    </div>
                    <div class="flex justify-center items-center">
                        <span>{{ item.fecha }}</span>
                    </div>
                </div>
               
        </div>

        <div class="h-80 w-90 p-3 translate-y-4 relative translate-x-10 overflow-y-auto">          

            <h1 class="tittle-font uppercase text-2xl text-center mb-4 border-b-2">gastos</h1>

            <button @click="toggleGasto" class="absolute right-4 top-3 cursor-pointer z-50"><circlePlus /></button>                
            
            <div  v-for="(item,index) in gasto" :key="index" class="grid grid-cols-3  w-full overflow-y-auto">
                <div class="flex justify-center items-center">
                    <span>{{ item.descripcion }}</span>
                </div>
                <div class="flex justify-center items-center">
                    <span>{{ item.cantidad }}€</span>
                </div>
                <div class="flex justify-center items-center">
                    <span>{{ item.fecha }}</span>
                </div>
            </div>
                           
        </div>

    </div>    
    </div>     
                   
</template>

<style scoped>
    .bg-book{
        background-image: url('../../assets/texture/libro.png');
        background-size: cover;
        background-position: center;
    }
</style>
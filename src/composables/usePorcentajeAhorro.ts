import {computed,watch} from 'vue';
import { useTotalGastos } from './useTotalGastos';
import { useTotalIngreso } from './useTotalIngreso';

    

export function usePorcentajeAhorro() {

    const {totalGastos} = useTotalGastos(); 

    const{totalIngreso} = useTotalIngreso();

    const porcentajeAhorro = computed(()=>{
        if(totalIngreso.value === 0){
            return 0;
        }
        const ahorro = totalIngreso.value - totalGastos.value;
        return Number(((ahorro/totalIngreso.value) *100).toFixed(2));
    });

    watch(porcentajeAhorro, async(nuevoValor)=>{
        try{
            await fetch('/api/porcentajeAhorro.php',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                credentials:'include',
                body:JSON.stringify({porcentajeAhorro:nuevoValor})
            })
        }catch(error){
            console.error('error al guardar porcentaje')
        }
    })

       return{porcentajeAhorro}; 
    }
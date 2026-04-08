import {ref,computed} from 'vue';
import { useTotalGastos } from './useTotalGastos';
import { useTotalIngreso } from './useTotalIngreso';
import type {Meta} from '../interfaces/meta';

export function useMeta(){
    
    const meta = ref<Meta[]>([]);
    const metaCompletada = ref<Meta[]>([]);
    const cargando = ref(false);
    const metaSeleccionada = ref<Meta|null>(null)
    const error = ref<string|null>(null);
    const descripcion = ref<string>('');
    const cantidad = ref<number|null>(null);
      
    const {totalGastos} = useTotalGastos(); 

    const{totalIngreso} = useTotalIngreso();

    const ahorroActual = computed <number> (()=>
        totalIngreso.value - totalGastos.value
    );

    async function cargarMeta() {
        cargando.value = true
        try{
             const response = await fetch('/api/meta.php',{
                method:'GET',
                headers: {'Content-Type': 'application/json'},
                credentials:'include',
        })

        const data = await response.json();

        if(data.status === 'success'){
            const metaArray = Array.isArray(data.value) ? data.value: Object.values(data.value);

            meta.value = metaArray
            .filter((m:any)=>m.Meta_completada===0)
            .map((m:any)=>({
                id:Number(m.Id_meta),
                descripcion:String(m.Descripcion_meta),
                cantidad: Number(m.Cantidad_meta),
                fecha:String(m.Fecha_meta)
            }));


            metaCompletada.value = metaArray
            .filter((m:any)=>m.Meta_completada===1)
            .map((m:any)=>({
                id:Number(m.Id_meta),
                descripcion:String(m.Descripcion_meta),
                cantidad: Number(m.Cantidad_meta),
                fecha:String(m.Fecha_meta)
            }));


            if(!metaSeleccionada.value && meta.value.length >0){
                metaSeleccionada.value = meta.value[0] ?? null;
            }


            }else{
                error.value = 'error al cargar las metas'
            }
        } catch{
            error.value ='error de conexion al cargar la meta';
        }

    }   

    function calcularProgreso(m:Meta){
        const porcentaje =(ahorroActual.value/m.cantidad)*100;
        return Math.min(Number(porcentaje.toFixed(2)),100);
    }

    async function completarMeta(metaId:number) {
        cargando.value = true
        try{
             const response = await fetch('/api/meta.php',{
                method:'PUT',
                headers: {'Content-Type': 'application/json'},
                credentials:'include',
                body: JSON.stringify({id:metaId}),
        })

        const data = await response.json();
        console.log(data)
        if(data.status === 'success'){
           await cargarMeta();
        }else{
            alert('error al completar meta')
            }
        } catch{
            alert('error de conexion al completar la meta');
        }

    }   

    function reset(){
            descripcion.value='';
            cantidad.value=null;
        }
    
    async function añadirMeta() {
        if(!descripcion.value || !cantidad.value === null){
            error.value="por favor completa todos los campos";
                return;
        }

        try{
            const response = await fetch('/api/meta.php',{
                method: 'POST',
                headers: {"Content-Type":"application/json"},
                credentials: 'include',
                body: JSON.stringify({descripcion:descripcion.value,cantidad:cantidad.value}),
            });
            const data = await response.json();

            if(data.status === "success"){
                reset();
                await cargarMeta(); 
                alert('añadido con exito');
            } else{
                alert('fallo al añadir')
            }

        } catch{
            alert("error de conexion al añadir meta");
        }
        
        }

    

    return{
        meta,
        metaCompletada,
        cargando,
        error,
        descripcion,
        cantidad,
        ahorroActual,
        cargarMeta,
        calcularProgreso,
        metaSeleccionada,
        completarMeta,
        añadirMeta
    }
}

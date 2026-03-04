import {ref,onMounted} from 'vue';
import { useTotalGastos } from './useTotalGastos';

export function useGasto(){
    const descripcion_gasto = ref<string>('');
    const cantidad_gasto = ref<number | null>(null);
    const gasto = ref<any[]>([]);

    const {cargarTotalGastos} = useTotalGastos();

      const añadirGasto = async () => {
        if(!descripcion_gasto.value || !cantidad_gasto.value){
            alert("Rellena todos los campos del formulario");
            return;
        }

        try{
            const response = await fetch('/api/incomeExpenses.php',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    descripcion: descripcion_gasto.value,
                    cantidad: cantidad_gasto.value,
                    tipo: "gasto",
                }),
            });

            const data = await response.json();

            if(data.status === 'success'){
                alert('gasto añadido con exito');

                descripcion_gasto.value='';
                cantidad_gasto.value=null;
                
                await cargarGastos();
                await cargarTotalGastos();

            } else{
                alert(data.mensaje ||'error añadir ingreso');
            }
        }
        catch(error){
        console.error("error en la solicitud:",error);
        alert('error al conectar al servidor')
        }; 
    } 
    const cargarGastos = async () =>{
        try{
            const response = await fetch('/api/getExpensesIncome.php',{
                method:'GET',
                credentials:'include',
            });
            const data = await response.json();

            if(data.status === "success"){
                gasto.value = data.gasto;
            }else{
                console.error('error al cargar',data.mensaje);
            }
        } catch{
            console.error('eror en la solicitud');
        }
    };

    onMounted(()=>{
        cargarGastos();
    });

    return{
        gasto,
        descripcion_gasto,
        cantidad_gasto,
        añadirGasto,
        cargarGastos
    }
}



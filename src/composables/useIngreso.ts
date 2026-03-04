import {ref,onMounted} from 'vue';
import { useTotalIngreso } from './useTotalIngreso';

export function useIngreso(){
    
    const descripcion_ingreso = ref<string>('');
    const cantidad_ingreso = ref<number | null>(null);
    const ingreso = ref<any[]>([]);

    const {cargarTotalIngreso} = useTotalIngreso();

      const añadirIngreso = async () => {
        if(!descripcion_ingreso.value || !cantidad_ingreso.value){
            alert("Rellena todos los campos del formulario");
            return;
        }

        try{
            const response = await fetch('/api/incomeExpenses.php',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    descripcion: descripcion_ingreso.value,
                    cantidad: cantidad_ingreso.value,
                    tipo: "ingreso",
                }),
            });

            const data = await response.json();
            console.log(data);

            if(data.status === 'success'){
                alert('ingreso añadido con exito');

                descripcion_ingreso.value='';
                cantidad_ingreso.value=null;
                
                await cargarIngreso();
                await cargarTotalIngreso();

            } else{
                alert(data.mensaje ||'error añadir ingreso');
            }
        }
        catch(error){
        console.error("error en la solicitud:",error);
        alert('error al conectar al servidor')
        }; 
    } 
    const cargarIngreso = async () =>{
        try{
            const response = await fetch('/api/getExpensesIncome.php',{
                method:'GET',
                credentials:'include',
            });
            const data = await response.json();

            if(data.status === "success"){
                ingreso.value = data.ingreso;
            }else{
                console.error('error al cargar',data.mensaje);
            }
        } catch{
            console.error('eror en la solicitud');
        }
    };

    onMounted(()=>{
        cargarIngreso();
    });

    return{
        ingreso,
        descripcion_ingreso,
        cantidad_ingreso,
        añadirIngreso,
        cargarIngreso
    }
}



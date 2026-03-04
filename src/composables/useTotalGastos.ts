import {ref} from 'vue';

    const totalGastos = ref<number>(0);

export function useTotalGastos(){


    const cargarTotalGastos = async () =>{
        try{
            const response = await fetch('/api/totalGastos.php',{
                method: 'GET',
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
            });

            const data = await response.json();

            if (data.status === 'success'){
                totalGastos.value = parseFloat(data.total_gastos);
            }else{
                alert("eror al obtener total de gastos")
            }
        }catch(error){
        alert("error al conectarse con el servidor")
    };
    
    }
    return{
        totalGastos,
        cargarTotalGastos,
    };
}
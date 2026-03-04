import {ref} from 'vue';

    const totalIngreso = ref<number>(0);

export function useTotalIngreso(){
    

    const cargarTotalIngreso = async () =>{
        try{
            const response = await fetch('/api/totalIngreso.php',{
                method: 'GET',
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
            });

            const data = await response.json();

            if (data.status === 'success'){
                totalIngreso.value = parseFloat(data.total_ingreso);
            }else{
                alert("eror al obtener total de ingresos")
            }
        }catch(error){
        alert("error al conectarse con el servidor")
    };
    
    }
    
    return{
        totalIngreso,
        cargarTotalIngreso,
    };
}

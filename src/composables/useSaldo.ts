import {ref} from 'vue';
import { usePopup } from './usePopup';

    const saldo = ref<number>(0);
    const newSaldo = ref<number>(0); 


export function useSaldo(){
    const {togglePopup} = usePopup();


     const saldoInicial = async() =>{
        try{
            const response = await fetch('/api/getSaldo.php',{
                method:'GET',
                headers: {'Content-Type': 'application/json'},
                credentials:'include',
            });

        const data = await response.json();

        if(data.status === 'success'){
            saldo.value = parseFloat(data.saldo);
            newSaldo.value =saldo.value;
        }else{
            console.log("error al cargar el saldo");
        }
        } catch {
            console.log("error al conectar con el servidor");
        }        
    };

    const actualizarSaldo = async() =>{
        if (newSaldo.value === null || isNaN(newSaldo.value)){
            alert("introduce un saldo valido");
            return;
        }

        try{
            const response = await fetch('/api/getSaldo.php',{
                method: 'POST',
                headers: {"Content-Type":"application/json"},
                credentials: 'include',
                body: JSON.stringify({saldo:newSaldo.value}),
            });
            const data = await response.json();
            if(data.status === "success"){
                saldo.value = newSaldo.value;
                alert("saldo actualizado correctamente");
                togglePopup();
                
            }else{
            alert("error al actualizar saldo");
            }
        } catch{
            alert("error de conexion al actualizar saldo");
        }
    };
        return{
        saldo,
        newSaldo,
        saldoInicial,
        actualizarSaldo,
    };
}

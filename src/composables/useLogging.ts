import router from "../router/router"
import {reactive} from "vue";
import type { LoggingData } from '../interfaces/logginData';

    export function useLogging(){
        const loggingData = reactive<LoggingData>({
        nombre_usuario:'',
        contraseña:''
    });
        const logUsuario = async() => {
        try{
            console.log(JSON.stringify(loggingData))
            const response = await fetch('/api/logging.php',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                credentials : 'include',
                body: JSON.stringify(loggingData)
            })

            const data = await response.json()
            console.log(data);

            if(data.status==='success'){
                router.push('/homePage')
            }else{
                alert('dato defectuoso')
            }
        }catch(error){
            alert('error de conexion al servidor')
        }
    }
    return{
        logUsuario,
        loggingData
    }
    }

    
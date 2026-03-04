    import type { RegisterData } from '../interfaces/registerData';
    import {reactive} from 'vue';
    import router from '../router/router';


export function useRegistro(){

    const registerData = reactive<RegisterData>({
        nombre:'',
        apellido:'',
        nombre_usuario:'',
        contraseña:''
    })

    const registrarUsuario = async() => {
        try{
            const response = await fetch('/api/register.php',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(registerData)
            })

            const data = await response.json()

            if(data.status==='success'){
                alert('registro exitoso')
                router.push('/logging')
            }else{
                alert('error al registrar')
            }
        }catch(error){
            alert('error de conexion al servidor')
        }
    }
    return{
        registerData,
        registrarUsuario
    }
}
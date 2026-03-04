import router from "../router/router";
import {ref,onMounted} from 'vue'

export function useLogOut(){
    
    const logOut = async () =>{
    try{
        const response = await fetch('/api/sessionOut.php',{
            method: 'POST',
            credentials: 'include'
        })

        const data = await response.json();
        console.log(data);

        if (data.status === 'success'){
            alert('Sesion cerrada con exito');
            router.push('/logging');
        } else {
            alert("no se pudo conectar");
        }
    } catch {
        alert('error al cerrar sesion');
    }
    }

    const nombreUsuario = ref<string>('');

    onMounted ( async () =>{
        const response = await fetch('/api/verifySession.php', {
        method: 'POST',
        credentials: 'include'
    })

    const data = await response.json()
    console.log('verifySession:', data)

    if (data.logged){
        nombreUsuario.value = data.usuario.nombre_usuario
    }
    });
    return{
        logOut,
        nombreUsuario
    };
}
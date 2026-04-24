import {ref,onMounted} from 'vue'
import { useRouter } from 'vue-router'

export function useLogOut(){
    const router = useRouter();
    const apiUrl = import.meta.env.VITE_API_URL;

    const logOut = async () =>{
    try{
        const response = await fetch(`${apiUrl}/sessionOut.php`,{
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
        const response = await fetch(`${apiUrl}/verifySession.php`, {
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
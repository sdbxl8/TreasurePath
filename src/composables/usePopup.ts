import {ref} from 'vue';

export function usePopup(){
    const popupVisible = ref(false);
    const ingresoVisible = ref(false);
    const gastoVisible = ref(false);

    const togglePopup = () =>{
        popupVisible.value = !popupVisible.value
    };

    const toggleIngreso = () =>{
        ingresoVisible.value = !ingresoVisible.value
    };

    const toggleGasto = () =>{
        gastoVisible.value = !gastoVisible.value
    }

    return {
        popupVisible,
        gastoVisible,
        ingresoVisible,
        togglePopup,
        toggleIngreso,
        toggleGasto
    }
}
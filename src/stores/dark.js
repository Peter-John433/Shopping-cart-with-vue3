import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usedarkStore = defineStore('dark', () =>{
    const darkMode = ref(false);

    toggleMode = () => {
        darkMode.value = !darkMode.value;

        if(darkMode.value) {
            document.documentElement.classsList.add('dark');
        }else{
            document.documentElement.classList.remove('dark')
        }
    }

    return{
        darkMode,
        toggleMode
    }
})
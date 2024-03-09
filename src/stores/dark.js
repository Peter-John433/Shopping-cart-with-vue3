import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usedarkStore = defineStore('dark', () =>{
    const darkMode = ref(false);

    const toggleMode = () => {
        darkMode.value = !darkMode.value;
    }

    return{
        darkMode,
        toggleMode
    }
})
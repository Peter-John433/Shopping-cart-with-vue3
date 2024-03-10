import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

export const useProductStore = defineStore('product', () =>{
     const item = ref([]);
     const countItems = computed(() => item.value.length );

        axios.get('https://dummyjson.com/products', item)
        .then((response) =>{
            item.value = response.data.products
            console.log(item.value)
        })
        .catch((error) =>{
            console.log(error)
        })

        const addItem = (itemId) =>{
            item.value = item.value.filter((prod) => prod.id === itemId); 
            // item.value.qty += 1;  
            item.value += 1;
        }
    

    return{
        item,
        countItems,
        addItem
    }
})
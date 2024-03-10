<template>
    <div>
        <div class="conatainer">
            <div 
                 :class="{'bg-[skyblue] text-white shadow-md shadow-[orange]' : darkMode, 'bg-[orange] text-white shadow-md shadow-black' : !darkMode}"
                class="w-[80px] cursor-pointer relative h-[80px] text-6xl font-bold mx-auto text-center flex justify-center items-center rounded-full drop-shadow-md ">
               <i class="bx bx-cart-alt "></i>
               <span 
                   :class="{'bg-[skyblue] text-white' : darkMode, 'bg-[orange] text-white' : !darkMode}"
                   class="absolute left-[1.8rem] top-2 text-3xl p-1 w-[30px] h-[30px] flex items-center justify-center rounded-full">
                  <!-- {{ CountItem }} -->0
               </span>
            </div>
        </div>
    </div>
</template>

<script setup>
   import { ref } from 'vue';
   import { useProductStore } from '@/stores/products';
   import { storeToRefs } from 'pinia';
   import {usedarkStore } from  "@/stores/dark";
  

   const store = useProductStore();
   const { CountItem } = storeToRefs(store);

   const darkStore = usedarkStore();
   const { darkMode } = storeToRefs(darkStore);

</script>

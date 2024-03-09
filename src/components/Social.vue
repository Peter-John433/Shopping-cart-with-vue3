<template>
    <div>
        <div 
            class="
                container
                flex justify-end items-center
                gap-x-3
                text-4xl
            "
        >
            
            <i 
               :class="{'bg-white' : darkMode, 'bg-[#ffa500]' : !darkMode }"
               class='bx bxl-facebook-circle rounded-full p-1 flex justify-center items-center'>
            </i>
            <i 
               :class="{'bg-white' : darkMode, 'bg-[#ffa500]' : !darkMode }"
               class='bx bxl-twitter rounded-full p-1 flex justify-center items-center'>
            </i>
            <i 
               :class="{'bg-white' : darkMode, 'bg-[#ffa500]' : !darkMode }"
               class='bx bxl-whatsapp rounded-full p-1 flex justify-center items-center'>
            </i>
        </div>
    </div>
</template>

<script setup>
   import { usedarkStore } from '@/stores/dark';
   import { storeToRefs } from 'pinia';

   const store = usedarkStore();
   const { darkMode } = storeToRefs(store);

</script>

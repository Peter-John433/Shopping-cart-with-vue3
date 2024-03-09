<template>
    <div>
        <div 
            class="
                container
                flex justify-center items-center
                text-4xl sm:text-6xl lg:text-8xl 
                font-extrabold
                uppercase
                pt-36
                text-[orange]
                drop-shadow-md
                px-5 sm:px-0
                
            "
        >
            <div
                 :class="{'border-white text-[#87ceeb]' : darkMode, 'border-black text-[#ffa500]' : !darkMode}"
                class="
                border-4
                py-2 px-2
                w-[70%] sm:w-1/2
                "
            >
               <marquee behavior="smoot" direction="rtl">
                  big deals
               </marquee>
            </div>
        </div>

        <BrowseItem />
    </div>
</template>

<script setup>
   import BrowseItem from './BrowseItem.vue';
   import { usedarkStore } from '@/stores/dark';
   import { storeToRefs } from 'pinia';

   const store = usedarkStore();
   const { darkMode } = storeToRefs(store);
</script>

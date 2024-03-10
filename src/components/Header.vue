<template>
    <div :class="{ 'text-black bg-[#0D0D0D] shadow-md drop-shadow-md' : darkMode,  'text-[yellow] bg-black' : !darkMode}">
        <div 
            class="
                container 
                px-5 sm:px-0
            "
        >
            <div 
                class="
                    flex justify-between items-center 
                    py-5
                    text-white
                    text-4xl
                "
            >
                <div 
                    :class="{ 'text-white bg-[skyblue] hover:bg-[#8eddfc]' : darkMode,  'text-white bg-[orange] hover:bg-[#fcbe4c] focus:bg-[orange]' : !darkMode}"
                    class="
                         flex justify-center items-center 
                         rounded-full 
                         p-1 
                         drop-shadow-md
                    "
                >
                    <i 
                        class='
                          bx bx-menu 
                          cursor-pointer
                          '
                     ></i>
                </div>
                <div 
                    @click="toggleMode"
                >
                    <i 
                        v-if="darkMode" 
                        class='
                            bx bx-moon 
                            text-white 
                            cursor-pointer dark'
                         ></i>
                    <i 
                        v-else 
                        class='
                           bx bx-moon 
                           text-[orange] 
                           cursor-pointer 
                           dark' 
                    ></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
   import { usedarkStore } from '@/stores/dark';
   import { storeToRefs } from 'pinia';

   const darkStore = usedarkStore();
   const { darkMode } = storeToRefs(darkStore);
   const { toggleMode } = darkStore;
</script>

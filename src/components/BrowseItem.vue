<template>
    <div>
        <div 
            class="
                container
            "
        >
            <router-link to="/products">
                <div
                :class="{'bg-[white] text-[#ffa500]' : darkMode, 'bg-[#ffa500] text-white' : !darkMode}"
                class="
                    bg-[orange]
                    py-3
                    w-[65%] sm:w-1/2
                    mx-auto mt-5 
                    text-center text-2xl sm:text-4xl
                    font-extrabold
                    capitalize
                    rounded
                    text-white
                    
                "
                >
                    Start Browsing...
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
  import { usedarkStore } from '@/stores/dark';
  import { storeToRefs } from 'pinia';

  const store = usedarkStore();
  const { darkMode  } = storeToRefs(store);

</script>

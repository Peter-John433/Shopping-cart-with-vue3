<template>
    <div 
       :class="{ 'bg-[#0D0D0D]' : darkMode,  'bg-[white]' : !darkMode}"
       class="relative max-h-full"
    >
        <Header />
        <ItemsList />

        <div class="fixed top-[50%] left-5">
            <CountItem />
        </div>
    </div>
</template>

<script setup>
   import Header from '@/components/Header.vue';
   import { usedarkStore } from '@/stores/dark';
   import { storeToRefs } from 'pinia';
   import ItemsList from '@/components/layouts/ItemsList.vue';
   import CountItem from '../components/layouts2/CountItem.vue';

    const darkStore = usedarkStore();
    const { darkMode } = storeToRefs(darkStore);
</script>

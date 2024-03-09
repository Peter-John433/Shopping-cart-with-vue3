<template>
    <div 
        :class="{ 'bg-[#0D0D0D]' : darkMode,  'bg-[white]' : !darkMode}"
        class="relative h-[100vh]">
        <Header />
        <LandingPage />
        
        <div class="absolute bottom-5 right-8">
            <Social />
        </div>
    </div>
</template>

<script setup>
    import Header from '@/components/Header.vue';
    import LandingPage from '@/components/LandingPage.vue';
    import Social from '@/components/Social.vue';
    import { usedarkStore } from '@/stores/dark';
    import { storeToRefs } from 'pinia';

    const darkStore = usedarkStore();
    const { darkMode } = storeToRefs(darkStore);
    const { toggleMode } = darkMode;

</script>

<template>
    <div class="relative h-[100vh]">
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

</script>

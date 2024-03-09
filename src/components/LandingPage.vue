<template>
    <div>
        <div 
            class="
                container
                flex justify-center items-center
                sm:text-6xl lg:text-8xl 
                font-extrabold
                uppercase
                pt-36
                text-[orange]
                drop-shadow-md
                
            "
        >
            <div
                class="
                border-4 border-black
                py-2 px-2
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
</script>

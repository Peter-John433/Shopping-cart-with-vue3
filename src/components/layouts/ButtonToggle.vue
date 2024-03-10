<template>
    <div>
        <div @click="showModal" class="container">
            <button>add</button>
        </div>
    </div>
</template>

<script setup>
   import { ref } from 'vue';

   const item = ref('');

    const showModal = () =>{
      item.value = !item.value;
    //    $emit( "show-modal");  // emit
    }

</script>

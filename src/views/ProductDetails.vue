<template>
    <div>
        <div class="container mt-20">
            <div v-for="item in dat" class="flex flex-col sm:flex-row justify-start items-start gap-x-10 ">
                <div>
                    <img :src="item.images[0]" class="h-[300px] bg-white" alt="">
                </div>
                <div class="flex flex-col justify-between h-[300px]">
                    <div class="text-2xl capitalize font-bold ">
                        {{ item.title }}
                    </div>
                    <div class="flex justify-start items-start gap-x-10 mt-10">
                        <div class="text-black font-bold">
                           $ {{ item.price }}
                        </div>
                        <div class="text-gray-400 line-through">
                           {{ item.discountPercentage }}
                        </div>
                    </div>
                    <div class="flex text-xl justify-start items-start gap-x-8">
                        <span class="bg-green-500 text-white w-[30px] drop-shadow-md hover:bg-green-400 hover:shadow-sm hover:shadow-gray-300 focus:bg-green-600 h-[30px] cursor-pointer rounded-md flex justify-center items-center">+</span>
                        0
                        <span class="bg-red-500 text-white w-[30px] drop-shadow-md hover:bg-red-400 hover:shadow-sm hover:shadow-gray-300 focus:bg-red-600 h-[30px] cursor-pointer rounded-md flex justify-center items-center">-</span>
                    </div>

                    <div>
                        <button class="bg-green-500 py-2 rounded-md drop-shadow-md hover:bg-green-400 hover:shadow-md hover:shadow-gray-300 focus:bg-green-600 text-white font-bold text-xl w-[200px]">add to cart</button>
                    </div>
                </div>
            </div>
            <div class="mt-10 bg-white p-5 drop-shadow-md rounded-md">
               <div class="text-xl font-bold mb-5 capitalize">
                   product-details
               </div>
               <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus dolorum ex eaque officia praesentium perferendis, eius quaerat expedita et quidem. Asperiores quaerat quod harum quas tempora, nesciunt amet doloribus cumque!
               </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  import axios  from 'axios'
  import { ref } from 'vue'

  const dat = ref([])

    axios.get('https://dummyjson.com/products')
    .then((response) => {
        dat.value = response.data.products;
        console.log(dat.value)
    })
    .catch((error) => console.log(error))
</script>
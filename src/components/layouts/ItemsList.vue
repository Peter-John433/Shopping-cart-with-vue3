<template>
    <div>
        <div class="container mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  px-5 lg-px-0">
                <div 
                    v-for="data in item" 
                    :key="data.id"
                    class="
                        bg-white
                        drop-shadow-lg rounded 
                        overflow-hidden 
                        hover:shadow-md hover:shadow-gray-300
                        transition-all ease-in-out duration-300
                    "
                >
                    <!-- <router-link to="product-details"> -->
                        <div class="">
                            <img :src="data.images[0]" class=" object-fill mx-auto h-[250px] bg-yellow-500" alt="">
                        </div>
                        <div class="flex flex-col justify-start items-start px-5">
                            <div class="py-3 text-sm font-bold">
                                {{ data.title }}
                            </div>
                            <div class="pb-3 flex justify-between items-center w-full">
                                <div class="bg-[#f1f1f1] px-2 rounded-full">
                                    $ {{ data.price }}
                                </div>
                                <div>
                                    <i 
                                      @click="addItem(itemId)"
                                      class='bx bx-cart-alt text-2xl text-green-500 cursor-[pointer] bg-[#f1f1f1] w-[35px] h-[35px] p-2 rounded-full flex justify-center items-center'></i>
                                </div>
                            </div>

                            <div class="pb-3">
                                {{ data.description }}
                            </div>
                        </div>
                    <!-- </router-link> -->
                </div>
        </div>
    </div>
</template>

<script setup>
import {useProductStore }  from '@/stores/products';
import { storeToRefs } from 'pinia';

const store = useProductStore();
const { item } = storeToRefs(store);
const { addItem } = store;
</script>

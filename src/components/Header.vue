<template>
    <div>
        <div
         class="
         bg-[#0d0d0d]
         text-[#f1f1f1]
         "
        >
            <header 
            >
                <nav
                    class="
                        container
                        flex justify-between items-center lg:items-center
                        lg:gap-x-40
                        py-5
                         relative
                         
                    " 
                >
                    <div
                        class="
                             text-[#B98E2F]
                            hover:text-white
                             transition-all ease-in-out duration-500
                             font-semibold
                             cursor-pointer
                             px-3 lg:px-0
                        "
                    >
                        Shopping<span
                        class="
                          text-[white]
                           hover:text-[#b98e2f]
                        "
                        >Cart</span>
                    </div>
                    <ul 
                    :class="showMenu ? 'flex' : 'hidden'"
                     class="
                       list-none
                       flex 
                       flex-col
                       lg:flex-row
                       lg:flex-wrap 
                       lg:content-center
                       justify-start 
                       lg:justify-center 
                       lg:items-center
                       absolute
                       w-[100%]
                       top-[100%]
                       lg:top-0
                       bg-[#0d0d0d]
                       lg:bg-inherit
                       z-10
                     "
                    >
                        <li
                          class="
                            lg:w-[100px]
                            py-5
                            lg:text-center
                            hover:bg-[#f1f1f1]
                            hover:text-[#0d0d0d]
                             transition-all ease-in-out duration-500
                             font-semibold
                             w-[100%]
                             px-3 lg:px-0
                          "
                        >
                            <a 
                              href="#"
                            >
                              Home
                            </a>
                       </li>
                        <li 
                          class="
                            lg:w-[100px]
                            py-5
                            lg:text-center
                            hover:bg-[#f1f1f1]
                            hover:text-[#0d0d0d]
                             transition-all ease-in-out duration-500
                             font-semibold
                             w-[100%]
                             px-3 lg:px-0
                          "
                        >
                            <a 
                              href="#"
                             >
                              About
                            </a>
                        </li>
                        <li
                            class="
                                w-[100%]
                                lg:w-[100px]
                                py-5
                                lg:text-center
                                hover:bg-[#f1f1f1]
                                hover:text-[#0d0d0d]
                                transition-all ease-in-out duration-500
                                font-semibold
                                px-3 lg:px-0
                            "
                        >
                            <a 
                               href="#"
                            >
                              Products
                            </a>
                        </li>
                        <li
                            class="
                                lg:w-[100px]
                                py-5
                                lg:text-center
                                hover:bg-[#f1f1f1]
                                hover:text-[#0d0d0d]
                                transition-all ease-in-out duration-500
                                font-semibold
                                w-[100%]
                                px-3 lg:px-0
                            "
                        >
                            <a
                               href="#"
                            >
                               Services
                            </a>
                        </li>
                        <li
                        class="
                            lg:w-[100px]
                            py-5
                            lg:text-center
                            hover:bg-[#f1f1f1]
                            hover:text-[#0d0d0d]
                             transition-all ease-in-out duration-500
                             font-semibold
                             w-[100%]
                             px-3 lg:px-0
                          "
                        >
                            <a 
                              href="#"
                            >
                              Contact
                            </a>
                        </li>
                    </ul>
                    <div 
                        @click="toggleMenu"
                        :class="showMenu ? 'bx bx-x' : 'bx bx-menu'"
                         class="
                            icons  
                            px-3 
                            lg:px-0
                            text-4xl
                            block lg:hidden
                        "
                    >
                        <!-- <i 
                            
                            class="
                               bx bx-menu 
                               text-4xl 
                               block lg:hidden
                               "
                        >
                        </i>
                        <i 
                           
                            class="
                               bx bx-x 
                               text-4xl 
                               block lg:hidden
                               "
                        >
                        </i> -->
                    </div>
                </nav>
            </header>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const showMenu = ref(true);

    const toggleMenu = () =>{
        return showMenu.value = !showMenu.value
    }
</script>

<style scoped>

</style>
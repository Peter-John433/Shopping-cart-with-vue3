import Home from '@/views/Home.vue'
import ProductDetails from '@/views/ProductDetails.vue';
import Products from '@/views/Products.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: Home,
      component: Home
    },
    {
      path: '/products',
      name: Products,
      component: Products
    },
    {
      path: '/product-details',
      name: ProductDetails,
      component: ProductDetails
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import AdminDashboard from '@/pages/admin/Dashboard.vue'
import AdminProducts from "@/pages/admin/AdminProducts.vue"
import AddProduct from "@/pages/admin/AddProduct.vue"
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import Cart from '@/pages/Cart.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import ProductDetail from '@/pages/ProductDetail.vue'
import { useAuthStore } from '../stores/auth.store'
import { components } from 'vuetify/dist/vuetify.js'
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
      path: 'product/:id',
      name: 'ProductDetail',
      component: ProductDetail,
      props: true
    },
    ]
  },
  
  {
    path: '/admin',
    component: AdminLayout,
    meta:{requiresAuth:true},
    children: [
      {
        path: '',
        name: 'AdminDashboard',
        component: AdminDashboard
      },
      {
        path: 'addProduct',
        name: 'AddProduct',
        component: AddProduct
      },
      {
        path:'products',
        name:'AdminProducts',
        component:AdminProducts
      }
    ]
  },
  {
  path: '/cart',
  name: 'cart',
  meta:{requiresAuth:true},
  component: Cart,
},
{
  path: '/login',
  name: 'login',
  component: Login
},
{
  path:'/register',
  name:'register',
  component:Register
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !auth.token) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    console.log("ALLOW")
    next()
  }
})
export default router

import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import AdminDashboard from '@/pages/admin/Dashboard.vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'AdminDashboard',
        component: AdminDashboard
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

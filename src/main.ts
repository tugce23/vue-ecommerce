import { createApp,watch } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAuthStore } from '@/stores/auth.store'
import vuetify from './plugins/vuetify'

const app = createApp(App)
app.use(createPinia())

const auth = useAuthStore()
auth.loadUser() 
app.use(router)
app.use(vuetify)   // 👈 V-APP BURADA TANINIR
app.mount('#app')

import { useCartStore } from '@/stores/cart.store'

const cart = useCartStore()

cart.items = JSON.parse(localStorage.getItem('cart') || '[]')

watch(
  () => cart.items,
  items => {
    localStorage.setItem('cart', JSON.stringify(items))
  },
  { deep: true }
)

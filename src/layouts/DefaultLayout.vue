<template>
  <v-app-bar color="primary" elevation="1">
    <v-app-bar-title>Vue E-Commerce</v-app-bar-title>
     <v-btn variant="text" @click="goToLogin">
      Login
    </v-btn>

    <v-btn variant="text" @click="goToRegister">
      Register
    </v-btn>
    <v-btn icon to="/cart">
  <v-badge
    :content="cartCount"
    :model-value="cartCount > 0"
    color="error"
  >
    <v-icon>mdi-cart</v-icon>
  </v-badge>
</v-btn>
  </v-app-bar>

 <v-main>
  <router-view />
</v-main>

</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
const cartStore = useCartStore()

const cartCount = computed(() =>
  cartStore.items.reduce((total, item) => total + item.quantity, 0)
)



const router = useRouter()

const goToLogin = () => {
  router.push('/login')
}

const goToRegister = () => {
  router.push('/register')
}
</script>
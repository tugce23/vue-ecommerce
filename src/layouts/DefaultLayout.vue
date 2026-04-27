<template>
  <v-app-bar color="primary" elevation="1">
    
    <!-- Logo -->
    <v-app-bar-title>
      <router-link to="/" style="color: white; text-decoration: none;">
        Vue E-Commerce
      </router-link>
    </v-app-bar-title>

    <v-spacer />

    <!-- Auth butonları -->
<div v-if="!isLoggedIn">
 <v-btn variant="text" to="/login">Login
 <template v-slot:append>
        <v-icon     icon="mdi-account" ></v-icon>
      </template>
 </v-btn>

</div>
<div v-else>
  <v-btn variant="text" to="/profile">Profile</v-btn>
  <v-btn variant="text" @click="logout">Logout</v-btn>
</div>
    <!-- Cart -->
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
import { ref,computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const cartCount = computed(() =>
  cartStore.items.reduce((total, item) => total + item.quantity, 0)
)


const isLoggedIn = ref(false)
const logout = () => {
  isLoggedIn.value = false
}
</script>
<template>
  <v-app-bar color="primary" elevation="1">
    <v-app-bar-title>Vue E-Commerce</v-app-bar-title>
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

const cartStore = useCartStore()

const cartCount = computed(() =>
  cartStore.items.reduce((total, item) => total + item.quantity, 0)
)
</script>
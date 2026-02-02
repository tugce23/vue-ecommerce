<template>
  <v-container>
    <h2>Sepetim</h2>

    <v-card
      v-for="item in cartStore.items"
      :key="item.id"
      class="mb-3"
    >
      <v-card-title>
        {{ item.title }}
      </v-card-title>

      <v-card-text>
        <div>Adet: {{ item.quantity }}</div>
        <div>Fiyat: {{ item.price }} ₺</div>
      </v-card-text>
    </v-card>

    <v-divider class="my-4" />

    <h3>Toplam: {{ totalPrice }} ₺</h3>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const totalPrice = computed(() =>
  cartStore.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
)
</script>

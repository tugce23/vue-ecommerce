<template>
  <v-card>
    <v-img
      :src="product.image"
      height="200"
      cover
    />

    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-text>
      {{ product.price }} ₺
    </v-card-text>

    <v-card-actions>
      <v-btn
  color="primary"
  block
  @click="addToCart"
>
  Sepete Ekle
</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { Product } from '@/types/Product'
import { useCartStore } from '@/stores/cart'

const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addToCart(props.product)
}
</script>

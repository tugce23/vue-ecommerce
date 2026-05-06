<template>
  <v-container>
    <h2>Sepetim</h2>

    <v-card
      v-for="item in items"
      :key="item.id"
      class="mb-3"
    >
      <v-card-title>
        {{ item.product.name }}
      </v-card-title>

      <v-card-text>
        <div class="d-flex align-center mb-2">
          <v-btn size="small" @click="decrease(item)">-</v-btn>

          <span class="mx-3 font-weight-medium">
            {{ item.quantity }}
          </span>

          <v-btn size="small" @click="increase(item)">+</v-btn>
          <v-btn size="small" color="warning" class="ms-2" @click="remove(item)"><v-icon   icon="mdi-delete"></v-icon></v-btn>
        </div>

        <div>Fiyat: {{ item.product.price }} ₺</div>
        <div>Ara Toplam: {{ item.product.price * item.quantity }} ₺</div>
        
      </v-card-text>
     

    </v-card>

    <v-divider class="my-4" />

  <div class="d-flex justify-space-between align-center">
  <h3>Toplam: {{ totalPrice.toFixed(2) }} ₺</h3>

  <v-btn
    color="success"
    @click="goToCheckout"
  >
    Ödeme Yap
  </v-btn>
</div>

 
  </v-container>
</template>


<script setup lang="ts">
import {  onMounted} from 'vue'
import { useCart } from '@/composables/useCart'

const { items, loadCart, increase, decrease, totalPrice ,remove} = useCart()

onMounted(() => {
  loadCart()
})
</script>

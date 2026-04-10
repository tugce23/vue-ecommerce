<template>
<v-card class="product-card" elevation="0">

  <!-- IMAGE -->
  <div class="image-wrapper">
    <v-img
      :src="product.image"
      height="240"
      cover
    />

    <!-- badge -->
    <div class="badge">Yeni</div>
  </div>

  <!-- CONTENT -->
  <v-card-text class="pa-3">

    <div class="title">
      {{ product.title }}
    </div>

    <div class="price-row">
  
  <!-- sadece varsa göster -->
  <span v-if="product.oldPrice" class="old-price">
    {{ product.oldPrice }} ₺
  </span>

  <span class="price">
    {{ product.price }} ₺
  </span>

</div>
<div v-if="product.oldPrice" class="discount-badge">
  %{{ discountPercent }}
</div>
    <v-btn
      block
      color="black"
      class="mt-2 add-btn"
      @click="addProduct(product)"
    >
      Sepete Ekle
    </v-btn>
<v-snackbar v-model="snackbar">
  Ürün sepete eklendi 🛒
</v-snackbar>
  </v-card-text>

</v-card>
</template>

<script setup lang="ts">
import type { Product } from '@/types/Product'
import { ref ,computed} from 'vue'
import { useCartStore } from '@/stores/cart.store'
const cart = useCartStore()


const props = defineProps<{
  product: Product
}>()

const snackbar = ref(false)

const addProduct = (product) => {
  cart.addToCart(product)
  snackbar.value = true
}


const discountPercent = computed(() => {
  if (!props.product?.oldPrice) return 0

  return Math.round(
    ((props.product.oldPrice - props.product.price) / props.product.oldPrice) * 100
  )
})

</script>
<style lang="css">
.product-card {
  border-radius: 12px;
  overflow: hidden;
  transition: 0.2s ease;
}

.product-card:hover {
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

/* image */
.image-wrapper {
  position: relative;
}

/* badge */
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: black;
  color: white;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 6px;
}

/* title */
.title {
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  overflow: hidden;
}

/* price */
.price {
  font-size: 18px;
  font-weight: 700;
}

/* button */
.add-btn {
  border-radius: 8px;
  text-transform: none;
}

.discount-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 6px;
}

</style>

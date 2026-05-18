<template>
      <div>
    <h2>Admin Products</h2>

     <v-card
      v-for="p in products"
      :key="p.id"
      class="mb-2 pa-3 d-flex justify-space-between"
    >
      <div>
        <div><b>{{ p.name }}</b></div>
        <div>{{ p.price }} ₺</div>
      </div>

      <v-btn color="red" @click="handleDelete(p.id)">
        Delete
      </v-btn>
    </v-card> 
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getProducts, deleteProduct } from '@/services/product.service'
const products = ref([])

const loadProducts = async () => {
  const res = await getProducts()
  products.value = res.data
}

const handleDelete = async (id: number) => {
  await deleteProduct(id)
  await loadProducts()
}

import { useAuthStore } from '@/stores/auth.store'

const auth = useAuthStore()

console.log("ROLE:", auth.role)


onMounted(() => {
  loadProducts()
})

</script>
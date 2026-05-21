<template>
      <div>
    <h2>Admin Products</h2>
<v-btn @click="isAddProductForm=true">
Ürün Ekle</v-btn>
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
    <v-dialog v-model="isAddProductForm">

    <AddProduct ></AddProduct>
    </v-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { productService } from '@/services/product.service'
import AddProduct from '@/pages/admin/AddProduct.vue' 
const products = ref([])

const isAddProductForm=ref(false)

const loadProducts = async () => {
  const res = await productService.getAll()
  console.log(res,"res")
  products.value = res.items
}

const handleDelete = async (id: number) => {
  await productService.delete(id)
  await loadProducts()
}

onMounted(() => {
  loadProducts()
})

</script>
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
<v-btn
  color="primary"
  size="small"
  @click="editProduct(p)"
>
  Edit
</v-btn>
      <v-btn color="red" @click="handleDelete(p.id)">
        Delete
      </v-btn>
      
    </v-card> 
    <v-dialog v-model="isAddProductForm">

    <AddProduct ></AddProduct>
    </v-dialog>
    <v-dialog v-model="isUpdateProductForm">
    <UpdateProduct  :product="selectedProduct"
      @close="isUpdateProductForm = false" @save="updateProduct"></UpdateProduct> 
    </v-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { productService } from '@/services/product.service'
import AddProduct from '@/pages/admin/AddProduct.vue' 
import UpdateProduct from '@/pages/admin/UpdateProduct.vue' 
const products = ref([])

const isAddProductForm=ref(false)
const isUpdateProductForm=ref(false)

const selectedProduct = ref({
  id: null,
  name: "",
  price: 0,
  description: "",
  imageUrl: ""
})
const editProduct = (item:any) => {
  selectedProduct.value = { ...item } // clone
  isUpdateProductForm.value = true
}

const loadProducts = async () => {
  const res = await productService.getAll()
  products.value = res.items
}

const handleDelete = async (id: number) => {
  await productService.delete(id)
  await loadProducts()
}

const updateProduct = async (product:any) => {
  await productService.update(product.id, product)

  isUpdateProductForm.value = false

  await loadProducts()
}

onMounted(() => {
  loadProducts()
})

</script>
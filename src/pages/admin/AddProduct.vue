<template>
  <v-card class="pa-4">
    <h3>Ürün Ekle</h3>

    <v-text-field v-model="form.name" label="Name" />
    <v-text-field v-model="form.description" label="Description" />
    <v-text-field v-model="form.price" label="Price" type="number" />
    <v-file-input
  label="Product Image"
  accept="image/*"
  @change="handleImage"
/>

<v-img
  v-if="form.imageUrl"
  :src="form.imageUrl"
  height="150"
/>
    <v-text-field v-model="form.stock" label="Stock" type="number" />

    <v-btn color="primary" class="mt-3" @click="submit">
      Save
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useProducts } from '@/composables/useProducts'

const { addProduct } = useProducts()

const form = reactive({
  name: '',
  description: '',
  price: 0,
  imageUrl: '',
  stock: 0
})

async function submit() {
  await addProduct(form)

  form.name = ''
  form.description = ''
  form.price = 0
  form.imageUrl = ''
  form.stock = 0
}

import { uploadImage } from '@/services/upload.service'

async function handleImage(e: any) {
  const url = await uploadImage(e)
  form.imageUrl = `http://localhost:5095${url}`
  console.log(e)
console.log(e.target.files)
}
</script>
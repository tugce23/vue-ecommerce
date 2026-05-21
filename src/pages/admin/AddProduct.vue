<template>
  <v-card class="pa-4">
    <h3>Ürün Ekle</h3>

    <v-text-field v-model="form.name" label="Name" />
    <v-text-field v-model="form.description" label="Description" />
    <v-text-field v-model="form.price" label="Price" type="number" />
    <v-text-field v-model="form.imageUrl" label="Image URL" />
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
</script>
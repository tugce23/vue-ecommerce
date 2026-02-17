<template>
  <v-container>
  <v-row class="mb-4">
  <v-col cols="12" md="4">
    <v-text-field
  label="Search"
  @update:modelValue="onSearch"
/>
  </v-col>

  <v-col cols="12" md="4">
    <v-select
      label="Category"
      :items="categories"
      v-model="category"
      @update:modelValue="loadProducts"
    />
  </v-col>

  <v-col cols="12" md="4">
    <v-select
      label="Sort"
      :items="[
        { title: 'Price ↑', value: 'price-asc' },
        { title: 'Price ↓', value: 'price-desc' }
      ]"
      v-model="sort"
      @update:modelValue="loadProducts"
    />
  </v-col>
</v-row>

    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
     <v-pagination
  v-model="page"
  :length="totalPages"
  @update:modelValue="changePage"
/>

    <div v-if="loading" class="text-center pa-6">
      Yükleniyor...
    </div>
   
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProducts } from '@/composables/useProducts'

const {
  products,
  loading,
  page,
  totalPages,
  loadProducts,
  changePage,
  category, 
  sort ,
  categories,
  onSearch
} = useProducts()
onMounted(() => {
  loadProducts({ page: 1, limit: 12 })
})
</script>

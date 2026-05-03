<template>
  <v-container>{{ store.getProductById(route.params.id) }}
    <div v-if="product">
      <v-row>
        <!-- Ürün görsel -->
        <v-col cols="12" md="6">
          <v-img :src="product.imageUrl" height="300" contain />
        </v-col>

        <!-- Ürün bilgi -->
        <v-col cols="12" md="6">
          <h1>{{ product.title }}</h1>
          <p>{{ product.description }}</p>
          <h2>{{ product.price }} ₺</h2>

          <v-btn color="primary" class="mt-4">
            Sepete Ekle
          </v-btn>

          <v-btn variant="text" class="mt-2" @click="goBack">
            Geri dön
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <div v-else>
      Yükleniyor...
    </div>
  </v-container>
</template>

<script setup>
import { computed, onMounted ,ref} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product.store'
import { useProducts } from '@/composables/useProducts'
const route = useRoute()
const router = useRouter()
const store = useProductStore()
const { getProduct } = useProducts()

const product = ref(null)

onMounted(async () => {
  product.value = await getProduct(Number(route.params.id))
})





const goBack = () => {
  router.back()
}
</script>
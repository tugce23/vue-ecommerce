<template>
  <v-card>
    <v-card-title>Update Product</v-card-title>

    <v-card-text>
      <v-text-field v-model="updateProduct.name" label="Name" />
      <v-text-field v-model="updateProduct.price" label="Price" type="number" />
      <v-textarea v-model="updateProduct.description" label="Description" />
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn text @click="emit('close')">Cancel</v-btn>
      <v-btn color="green" @click="saveProduct">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps({
  product: Object
})

const emit = defineEmits(['save', 'close'])

const saveProduct = () => {
  emit('save', updateProduct.value)
}

const updateProduct = ref({})

watch(
  () => props.product,
  (newProduct) => {
    if (newProduct) {
      updateProduct.value = { ...newProduct }
    }
  },
  { immediate: true }
)
</script>

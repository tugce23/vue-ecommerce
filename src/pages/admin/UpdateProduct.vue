<template>
  <v-card>
    <v-card-title>Update Product</v-card-title>

    <v-card-text>
      <v-text-field v-model="selectedProduct.name" label="Name" />
      <v-text-field v-model="selectedProduct.price" label="Price" type="number" />
      <v-textarea v-model="selectedProduct.description" label="Description" />
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn text @click="dialog = false">Cancel</v-btn>
      <v-btn color="green" @click="updateProduct">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

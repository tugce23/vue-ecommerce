import { defineStore } from 'pinia'
import { products  } from '@/data/product'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: []
  }),

  actions: {
    loadProducts() {
      // API yerine local data
      this.products = products
    },

    getProductById(id:number) {
      return this.products.find(p => p.id == id)
    }
  }
})
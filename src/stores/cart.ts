import { defineStore } from 'pinia'
import type { Product } from '@/types/Product'

export interface CartItem extends Product {
  quantity: number
}
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  actions: {
    addToCart(product: Product) {
      const existing = this.items.find(
        item => item.id === product.id
      )

      if (existing) {
        existing.quantity++
      } else {
        this.items.push({
          ...product,
          quantity: 1,
        })
      }
    },
  },
})
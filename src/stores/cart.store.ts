import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as any[]
  }),

  getters: {
    totalPrice: state =>
      state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),

    totalItems: state =>
      state.items.reduce((sum, item) => sum + item.quantity, 0)
  },

  actions: {
    addToCart(product:any) {
      const existing = this.items.find(i => i.id === product.id)

      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },

    removeFromCart(id:number) {
      this.items = this.items.filter(i => i.id !== id)
    },

    clearCart() {
      this.items = []
    },
    increase(id:number) {
  const item = this.items.find(i => i.id === id)
  if (item) item.quantity++
},

decrease(id:number) {
  const item = this.items.find(i => i.id === id)

  if (!item) return

  if (item.quantity > 1) {
    item.quantity--
  } else {
    this.removeFromCart(id)
  }
}
  }

})

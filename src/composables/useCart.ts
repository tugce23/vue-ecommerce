import { ref } from 'vue'
import { addToCart, getCart } from '@/services/cart.service'
import { useAuthStore } from '@/stores/auth.store'

export function useCart() {
  const items = ref([])
  const auth = useAuthStore()

  async function add(product: any) {
    await addToCart({
      productId: product.id,
      quantity: 1,
      userId: auth.user?.email // şimdilik email
    })
  }

  async function loadCart() {
    const res = await getCart(auth.user?.email)
    items.value = res.data
  }

  return {
    items,
    add,
    loadCart
  }
}
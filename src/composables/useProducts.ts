import { ref, computed } from 'vue'
import { fetchProducts ,createProduct,fetchProductById} from '@/services/product.service'

export function useProducts() {
  const products = ref([])
  const total = ref(0)
  const loading = ref(false)

  const page = ref(1)
  const limit = ref(12)

  const totalPages = computed(() =>
    Math.ceil(total.value / limit.value)
  )
  const search = ref('')
  const category = ref('all')
  const sort = ref('')

  const categories = computed(() => {
  const set = new Set(products.value.map(p => p.category))
  return ['all', ...set]
})
 async function getProduct(id: number) {
  const res = await fetchProductById(id)
  return res.data
}
  async function loadProducts() {
    loading.value = true
    const res = await fetchProducts({
        page: page.value,
        limit: limit.value,
        search: search.value,
        category: category.value,
        sort: sort.value
    })
    products.value = res.items
    total.value = res.total
    loading.value = false
  }

  function changePage(newPage: number) {
    page.value = newPage
    loadProducts()
  }

  async function addProduct(product: any) {
  await createProduct(product)
  await loadProducts() // listeyi yenile
}
  let timer: any

function onSearch(value: string) {
  search.value = value

  clearTimeout(timer)
  timer = setTimeout(() => {
    page.value = 1
    loadProducts()
  }, 400)

 
}

  return {
  products,
  loading,
  page,
  totalPages,
  search,
  category,
  sort,
  categories,
  loadProducts,
  changePage,
  onSearch,
  addProduct,
  getProduct
  }
}

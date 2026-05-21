import { ref, computed } from 'vue'
import { productService } from '@/services/product.service'

export function useProducts() {
  const products = ref<any[]>([])
  const total = ref(0)
  const loading = ref(false)

  const page = ref(1)
  const limit = ref(12)

  const search = ref('')
  const category = ref('all')
  const sort = ref('')

  let timer: ReturnType<typeof setTimeout>

  const totalPages = computed(() =>
    Math.ceil(total.value / limit.value)
  )

  const categories = computed(() => {
    const set = new Set(products.value.map(p => p.category))
    return ['all', ...set]
  })

  async function loadProducts() {
    loading.value = true

    try {
      const res = await productService.getAll({
        page: page.value,
        limit: limit.value,
        search: search.value,
        category: category.value,
        sort: sort.value
      })

      products.value = res.items
      total.value = res.total
    } catch (error) {
      console.error('Products load error:', error)
    } finally {
      loading.value = false
    }
  }

  async function getProduct(id: number) {
    try {
      return await productService.getById(id)
    } catch (error) {
      console.error('Product fetch error:', error)
    }
  }

  async function addProduct(product: any) {
    try {
      await productService.create(product)
      await loadProducts()
    } catch (error) {
      console.error('Create product error:', error)
    }
  }

  async function removeProduct(id: number) {
    try {
      await productService.delete(id)
      await loadProducts()
    } catch (error) {
      console.error('Delete product error:', error)
    }
  }

  function changePage(newPage: number) {
    page.value = newPage
    loadProducts()
  }

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
    total,
    loading,

    page,
    limit,
    totalPages,

    search,
    category,
    sort,
    categories,

    loadProducts,
    getProduct,
    addProduct,
    removeProduct,

    changePage,
    onSearch
  }
}
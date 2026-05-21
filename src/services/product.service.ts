import api from '@/services/api.service'

export const productService = {
  // GET ALL
  async getAll(params?: any) {
    const res = await api.get('/products', { params })

    return {
      items: res.data,
      total: res.data.length
    }
  },

  // GET BY ID
  async getById(id: number) {
    const res = await api.get(`/products/${id}`)
    return res.data
  },

  // CREATE
  async create(data: any) {
    const res = await api.post('/products', data)
    return res.data
  },

  // UPDATE
  async update(id: number, data: any) {
    const res = await api.put(`/products/${id}`, data)
    return res.data
  },

  // DELETE
  async remove(id: number) {
    await api.delete(`/products/${id}`)
  }
}
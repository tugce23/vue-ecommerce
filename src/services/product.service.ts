// import { products } from '@/data/product'

// export function fetchProducts(params:any) {
//   let list = [...products]

//   if (params.search) {
//     list = list.filter(p =>
//       p.title.toLowerCase().includes(params.search.toLowerCase())
//     )
//   }

//   if (params.category !== 'all') {
//     list = list.filter(p => p.category === params.category)
//   }

//   if (params.sort === 'price-asc') {
//     list.sort((a, b) => a.price - b.price)
//   }

//   if (params.sort === 'price-desc') {
//     list.sort((a, b) => b.price - a.price)
//   }

//   const start = (params.page - 1) * params.limit
//   const end = start + params.limit

//   return {
//     items: list.slice(start, end),
//     total: list.length
//   }
// }


import api from "@/services/api.service";

export const productService = {
  // GET ALL
  async getAll(params?: any) {
    const res = await api.get('/products', { params });

    return {
      items: res.data,
      total: res.data.length
    };
  },

  // GET BY ID
  async getById(id: number) {
    const res = await api.get(`/products/${id}`);
    return res.data;
  },

  // CREATE
  async create(data: any) {
    const res = await api.post('/products', data);
    return res.data;
  },

  // UPDATE
  async update(id: number, data: any) {
    const res = await api.put(`/products/${id}`, data);
    return res.data;
  },

  // DELETE
  async delete(id: number) {
    const res = await api.delete(`/products/${id}`);
    return res.data;
  }
};
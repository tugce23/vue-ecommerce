import api from "@/services/api.service";

export const addToCart = (data: any) => {
  return api.post('/cart', data)
}

export const getCart = (userId: string) => {
  return api.get(`/cart/${userId}`)
}

export const updateCartItem = (id: number, quantity: number) => {
  return api.put(`/cart/${id}?quantity=${quantity}`)
}

export const removeCartItem = (id: number) => {
  return api.delete(`/cart/${id}`)
}
import api from "@/services/api.service";

export const addToCart = (data: any) => {
  return api.post('/cart', data)
}

export const getCart = (userId: string) => {
  return api.get(`/cart/${userId}`)
}
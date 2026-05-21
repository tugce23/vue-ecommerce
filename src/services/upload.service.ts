import api from '@/services/api.service'

export const uploadImage = async (event: any) => {
  const file = event.target.files[0]

  const formData = new FormData()
  formData.append('file', file)

  const res = await api.post('/products/upload', formData)

  return res.data.url
}
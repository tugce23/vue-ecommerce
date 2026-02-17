import type { Product } from '@/types/Product'

export const products: Product[] = [
    {
    id: 1,
    title: 'iPhone 14',
    price: 35000,
    category: 'electronics',
      image: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: 2,
    title: 'Sneakers',
    price: 2200,
    category: 'fashion',
      image: 'https://picsum.photos/400/300?random=2',
  },
  {
    id: 3,
    title: 'Coffee Machine',
    price: 4800,
    category: 'home',
      image: 'https://picsum.photos/400/300?random=3',
  },
  {
    id: 4,
    title: 'Headphones',
    price: 1800,
    category: 'electronics',
      image: 'https://picsum.photos/400/300?random=4',
  }
]
'use client'

import { useState, useEffect } from 'react'
import { PurchaseCardProps } from '@/types/purchases'

export const usePurchases = () => {
  const [purchases, setPurchases] = useState<PurchaseCardProps[]>([])
  const [loading, setLoading] = useState(true)
  const [hasPurchases, setHasPurchases] = useState(false)

  useEffect(() => {
    const fetchPurchases = async () => {
      setLoading(true)
      try {
        // Здесь будет API запрос
        const mockPurchases: PurchaseCardProps[] = [
          {
            id: 1,
            title: 'SolarTime v1',
            description: 'Готовая сборка анархического сервера на основе популярного проекта FunTime для Minecraft 1.16.5+.',
            price: 500,
            image: '/products/p-2.png'
          },
          {
            id: 2,
            title: 'SolarTime v1',
            description: 'Готовая сборка анархического сервера на основе популярного проекта FunTime для Minecraft 1.16.5+.',
            price: 500,
            image: '/products/p-2.png'
          },
          {
            id: 3,
            title: 'SolarTime v1',
            description: 'Готовая сборка анархического сервера на основе популярного проекта FunTime для Minecraft 1.16.5+.',
            price: 500,
            image: '/products/p-2.png'
          }
        ]
        
        setPurchases(mockPurchases)
        setHasPurchases(mockPurchases.length > 0)
      } catch (error) {
        console.error('Error fetching purchases:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPurchases()
  }, [])

  return { purchases, loading, hasPurchases }
} 
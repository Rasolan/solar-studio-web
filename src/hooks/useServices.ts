'use client'

import { useState, useEffect } from 'react'
import { ServiceCard } from '@/types/services'

const MOCK_PAID_SERVICES: ServiceCard[] = [
  // Сборки
  {
    id: 1,
    title: 'SolarTime v1',
    description: 'Готовая сборка анархического сервера на основе популярного проекта FunTime для Minecraft 1.16.5+.',
    price: 500,
    image: '/products/p-2.png',
    category: 'builds',
    type: 'paid'
  },
  {
    id: 2,
    title: 'SolarTime v2',
    description: 'Улучшенная сборка с расширенным функционалом для Minecraft 1.17+.',
    price: 800,
    image: '/products/p-2.png',
    category: 'builds',
    type: 'paid'
  },
  // Плагины
  {
    id: 3,
    title: 'AdminTools Pro',
    description: 'Профессиональный набор инструментов для администрирования.',
    price: 300,
    image: '/products/p-2.png',
    category: 'plugins',
    type: 'paid'
  },
  {
    id: 4,
    title: 'SecurityPlus',
    description: 'Комплексная защита сервера от взломов и атак.',
    price: 450,
    image: '/products/p-2.png',
    category: 'plugins',
    type: 'paid'
  },
  // Карты
  {
    id: 5,
    title: 'SkyBlock Premium',
    description: 'Премиум карта для режима SkyBlock с уникальными островами.',
    price: 250,
    image: '/products/p-2.png',
    category: 'maps',
    type: 'paid'
  }
]

const MOCK_FREE_SERVICES: ServiceCard[] = [
  // Сборки
  {
    id: 1,
    title: 'SolarTime Lite',
    description: 'Базовая сборка сервера Minecraft с основными плагинами.',
    downloads: 150,
    image: '/products/p-2.png',
    category: 'builds',
    type: 'free'
  },
  // Плагины
  {
    id: 2,
    title: 'BasicAuth',
    description: 'Простой плагин авторизации для небольших серверов.',
    downloads: 300,
    image: '/products/p-2.png',
    category: 'plugins',
    type: 'free'
  },
  {
    id: 3,
    title: 'Simple',
    description: 'Набор базовых команд для администрирования.',
    downloads: 250,
    image: '/products/p-2.png',
    category: 'plugins',
    type: 'free'
  },
  // Карты
  {
    id: 4,
    title: 'SkyBlock',
    description: 'Классическая карта для режима SkyBlock.',
    downloads: 200,
    image: '/products/p-2.png',
    category: 'maps',
    type: 'free'
  }
]

export const useServices = (category: string, type: 'paid' | 'free') => {
  const [services, setServices] = useState<ServiceCard[]>([])
  const [loading, setLoading] = useState(true)
  const [hasServices, setHasServices] = useState(false)

  useEffect(() => {
    console.log('useServices hook called with:', { category, type }) // Для отладки

    const fetchServices = async () => {
      setLoading(true)
      try {
        const mockServices = type === 'paid' ? MOCK_PAID_SERVICES : MOCK_FREE_SERVICES
        
        // Фильтруем сервисы по категории
        const filteredServices = category 
          ? mockServices.filter(service => service.category === category)
          : mockServices

        console.log('Filtered services:', filteredServices) // Для отладки

        setServices(filteredServices)
        setHasServices(filteredServices.length > 0)
      } catch (error) {
        console.error('Error fetching services:', error)
        setServices([])
        setHasServices(false)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [category, type])

  return { services, loading, hasServices }
} 
'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { useServices } from '@/hooks/useServices'
import { ServiceCard } from './ServiceCard'

interface ServicesListProps {
  category: string
  type: 'paid' | 'free'
}

const getCategoryTitle = (category: string, type: 'paid' | 'free') => {
  const prefix = type === 'free' ? 'Бесплатно' : 'Платно'
  
  switch (category) {
    case 'builds':
    case 'free-builds':
      return `${prefix} - сборки`
    case 'plugins':
    case 'free-plugins':
      return `${prefix} - плагины`
    case 'maps':
    case 'free-maps':
      return `${prefix} - карты`
    default:
      return prefix
  }
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

export const ServicesList: FC<ServicesListProps> = ({ category, type }) => {
  const { services, loading, hasServices } = useServices(category, type)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <span className="text-white text-xl">Загрузка...</span>
      </div>
    )
  }

  if (!hasServices) {
    const categoryNames = {
      builds: 'сборках',
      plugins: 'плагинах',
      maps: 'картах'
    }
    
    return (
      <div className="flex justify-center items-center h-[400px]">
        <span className="text-white text-xl">
          {`В ${categoryNames[category as keyof typeof categoryNames]} пока нет ${type === 'paid' ? 'платных' : 'бесплатных'} сервисов`}
        </span>
      </div>
    )
  }

  return (
    <motion.div 
      className="space-y-8"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Заголовок */}
      <motion.h1 
        className="font-unbounded font-semibold text-[64px] leading-[79px] text-white px-8"
        variants={item}
      >
        {getCategoryTitle(category, type)}
      </motion.h1>

      {/* Сетка сервисов */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
        variants={container}
      >
        {services.map((service) => (
          <motion.div 
            key={service.id}
            variants={item}
          >
            <ServiceCard 
              {...service}
              type={type}
              onAction={() => {
                if (type === 'paid') {
                  console.log('Покупка:', service.id)
                } else {
                  console.log('Скачивание:', service.id)
                }
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
} 
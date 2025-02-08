'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { FreeServiceCard } from './FreeServiceCard'
import { useFreeServices } from '@/hooks/useFreeServices'

export const FreeServicesList: FC = () => {
  const { services } = useFreeServices()



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map(service => (
        <FreeServiceCard key={service.id} {...service} />
      ))}
    </div>
  )
} 
'use client'

import { FC } from 'react'
import { ServicesList } from '@/components/account/services/ServicesList'

interface ServicesPageProps {
  params: {
    category?: string
  }
}

const ServicesPage: FC<ServicesPageProps> = ({ params }) => {
  // Определяем текущую категорию из URL или используем значение по умолчанию
  const category = params.category || 'builds'

  return (
    <div>
      <ServicesList 
        category={category} 
        type="paid" // Для раздела "Покупка услуг" всегда paid
      />
    </div>
  )
}

export default ServicesPage 
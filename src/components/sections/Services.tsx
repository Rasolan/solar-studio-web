'use client'

import { FC } from 'react'
import { ServicesIconH } from '@/components/icons'
import { ServicesCard } from '@/components/ui/ServicesCard'
import type { ImageStyles } from '../ui/types'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface Service {
  id: number
  title: string
  price: number
  description: string
  image: string
  imageStyles?: ImageStyles
}

// Список всех услуг
export const services: Service[] = [
  {
    id: 1,
    title: 'Написание плагина',
    price: 200,
    description: 'Создание уникальных плагинов с учетом ваших требований и идей.',
    image: '/services/s-1.png',
    imageStyles: {
      width: '198px',
      height: '354px',
      top: '70px',
      left: '160px'
    }
  },
  {
    id: 2,
    title: 'Разработка сборки',
    price: 500,
    description: 'Создание готовых Minecraft серверов с уникальными механиками и настройками.',
    image: '/services/s-2.png',
    imageStyles: {
      width: '244px',
      height: '436px',
      top: '-3px',
      left: '145px'
    }
  },
  {
    id: 3,
    title: 'Проект под ключ',
    price: 2000,
    description: 'Комплексная разработка Minecraft сервера с нуля до полной готовности.',
    image: '/services/s-3.png',
    imageStyles: {
      width: '193px',
      height: '309px',
      top: '120px',
      left: '165px'
    }
  },
  {
    id: 4,
    title: 'Сайт под ключ',
    price: 5000,
    description: 'Создание удобного и стильного сайта для вашего проекта.',
    image: '/services/s-4.png',
    imageStyles: {
      width: '249px',
      height: '243px',
      top: '173px',
      left: '90px'
    }
  },
  {
    id: 5,
    title: 'Разработка дизайна',
    price: 500,
    description: 'Индивидуальные дизайнерские решения для серверов и сайтов.',
    image: '/services/s-5.png',
    imageStyles: {
      width: '242px',
      height: '212px',
      top: '205px',
      left: '115px'
    }
  },
  {
    id: 6,
    title: 'Постройка локации',
    price: 2000,
    description: 'Проектирование уникальных игровых миров и арен.',
    image: '/services/s-6.png',
    imageStyles: {
      width: '268px',
      height: '266px',
      top: '155px',
      left: '50px'
    }
  }
]

export const Services: FC = () => {
  return (
    <motion.section 
      id="services-section"
      className="relative w-full pt-[69px] pb-[69px] bg-black overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full">
        {/* изображение справа */}
        <div className="absolute w-[200px] sm:w-[280px] lg:w-[337px] h-[300px] sm:h-[400px] lg:h-[482px] right-[400px] sm:right-[200px] lg:right-[200px] top-[380px] sm:top-[480px] lg:top-[580px] opacity-50 sm:opacity-100">
          {/* Контейнер */}
          
          <div className="absolute w-[400px] sm:w-[500px] lg:w-[622.75px] h-[400px] sm:h-[500px] lg:h-[623.11px] -right-[200px] sm:-right-[250px] lg:-right-[316px] top-0">
          
            <Image
              src="/prog-b-l.png"
              alt="Декоративное изображение"
              width={622}
              height={623}
              className="absolute w-full h-full object-contain transform matrix-[-0.95,0.31,0.31,0.95,0,0]"
              priority
            />
          </div>
          {/* Свечение */}
          <div className="absolute w-[200px] sm:w-[300px] lg:w-[375px] h-[200px] sm:h-[300px] lg:h-[375px] -right-[262px] sm:-right-[312px] lg:-right-[362px] top-[65px] sm:top-[85px] lg:top-[105px] bg-[rgba(130,21,182,0.49)] blur-[80px] sm:blur-[100px] lg:blur-[121.75px]" />
        </div>

        {/* Заголовок с иконкой */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative flex items-center justify-center gap-2 sm:gap-4">
            <ServicesIconH className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[79px] lg:h-[79px]" />
            <h2 className="font-unbounded font-semibold text-[32px] sm:text-[48px] lg:text-[64px] leading-tight lg:leading-[79px] bg-gradient-to-r from-white to-[#E3D6FF] bg-clip-text text-transparent">
              Наши услуги
            </h2>
          </div>
        </motion.div>

        {/* Сетка услуг */}
        <motion.div 
          className="relative max-w-[1200px] mx-auto mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <ServicesCard {...service} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
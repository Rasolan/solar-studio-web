import { FC } from 'react'
import { ServicesIconH } from '@/components/icons'
import { ServicesCard } from '../ui/ServicesCard'
import type { ImageStyles } from '../ui/types'
import Image from 'next/image'

interface Service {
  id: number
  title: string
  price: number
  description: string
  image: string
  imageStyles?: ImageStyles
}

// Список всех услуг
const services: Service[] = [
  {
    id: 1,
    title: 'Написание плагина',
    price: 200,
    description: 'Создание уникальных плагинов с учетом ваших требований и идей.',
    image: '/services/s-1.png',
    imageStyles: {
      width: '179px',
      height: '243px',
      top: '173px',
      left: '90px'
    }
  },
  {
    id: 2,
    title: 'Разработка сборки',
    price: 500,
    description: 'Создание готовых Minecraft серверов с уникальными механиками и настройками.',
    image: '/services/s-2.png',
    imageStyles: {
      width: '283px',
      height: '261px',
      top: '160px',
      left: '45px'
    }
  },
  {
    id: 3,
    title: 'Проект под ключ',
    price: 2000,
    description: 'Комплексная разработка Minecraft сервера с нуля до полной готовности.',
    image: '/services/s-3.png',
    imageStyles: {
      width: '173px',
      height: '243px',
      top: '173px',
      left: '90px'
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
      width: '179px',
      height: '243px',
      top: '173px',
      left: '90px'
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
    <section id="services-section" className="relative w-full bg-black overflow-hidden">
      {/* Основной контейнер */}
      <div className="relative w-full min-h-[506px] pb-32">
        {/* изображение справа */}
        <div className="absolute w-[337px] h-[482px] right-0 right-[220px] top-[621px]">
          {/* Контейнер */}
          <div className="absolute w-[622.75px] h-[623.11px] -right-[316px] top-0">
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
          <div className="absolute w-[375px] h-[375px] -right-[362px] top-[105px] bg-[rgba(130,21,182,0.49)] blur-[121.75px]" />
        </div>

        {/* Заголовок с иконкой */}
        <div className="relative pt-24">
          <div className="relative flex items-center justify-center gap-4">
            <ServicesIconH className="w-[79px] h-[79px]" />
            <h2 className="font-unbounded font-semibold text-[64px] leading-[79px] bg-gradient-to-r from-white to-[#E3D6FF] bg-clip-text text-transparent">
              Наши услуги
            </h2>
          </div>
        </div>

        {/* Сетка услуг */}
        <div className="relative max-w-[1200px] mx-auto mt-24 px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service) => (
              <ServicesCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
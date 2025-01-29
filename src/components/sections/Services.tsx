import { FC } from 'react'
import { ServicesIconH } from '@/components/icons'
import { ProductCard, ProductCardProps } from '@/components/ui/ProductCard'

// Список всех услуг
const services: Omit<ProductCardProps, 'variant'>[] = [
  {
    id: 1,
    title: 'Разработка плагина',
    price: 200,
    description: 'Создание уникальных плагинов с учетом ваших требований и идей.',
    image: '/services/s-1.png',
    pricePrefix: 'от ',
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
    pricePrefix: 'от ',
    imageStyles: {
      width: '179px',
      height: '243px',
      top: '173px',
      left: '90px'
    }
  },
  {
    id: 3,
    title: 'Проект под ключ',
    price: 2000,
    description: 'Комплексная разработка Minecraft сервера с нуля до полной готовности.',
    image: '/services/s-3.png',
    pricePrefix: 'от ',
    imageStyles: {
      width: '179px',
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
    pricePrefix: 'от ',
    imageStyles: {
      width: '179px',
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
    pricePrefix: 'от ',
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
    pricePrefix: 'от ',
    imageStyles: {
      width: '179px',
      height: '243px',
      top: '173px',
      left: '90px'
    }
  }
]

export const Services: FC = () => {
  return (
    <section className="relative w-full min-h-[1190px] bg-black">
      {/* Заголовок с иконкой */}
      <div className="relative max-w-[1920px] mx-auto pt-24">
        <div className="relative flex items-center justify-center gap-4">
          <ServicesIconH className="w-[79px] h-[79px]" />
          <h2 className="font-unbounded font-semibold text-[64px] leading-[79px] bg-gradient-to-r from-white to-[#E3D6FF] bg-clip-text text-transparent">
            Наши услуги
          </h2>
        </div>
      </div>

      {/* Сетка услуг */}
      <div className="relative max-w-[1200px] mx-auto mt-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
          {services.map((service) => (
            <ProductCard 
              key={service.id} 
              {...service} 
              variant="service"
            />
          ))}
        </div>
      </div>
    </section>
  )
} 
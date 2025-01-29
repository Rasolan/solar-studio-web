import { FC } from 'react'
import { ServicesIconH } from '@/components/icons'
import Image from 'next/image'

interface ServiceCardProps {
  id: number
  title: string
  price: number
  description: string
  image: string
}

const ServiceCard: FC<ServiceCardProps> = ({ title, price, description, image }) => {
  return (
    <div className="relative w-[360px] h-[416px] group">
      {/* Основной фон с градиентом и тенью */}
      <div className="absolute w-full h-full rounded-[25px] bg-gradient-to-b from-[#7F01D2] to-[#4000FF] filter drop-shadow-[0_0_29.9px_rgba(162,0,255,0.5)]">
        {/* Заголовок */}
        <h3 className="absolute left-3 top-5 w-[185px] font-unbounded font-bold text-[24px] leading-[30px] tracking-[-0.01em] text-white text-shadow-white">
          {title}
        </h3>

        {/* Блок с ценой */}
        <div className="absolute left-[231px] top-5 w-[113px] h-[30px] bg-white rounded-br-[10px]">
          <span 
            className="absolute left-[6px] top-[5px] w-[102px] h-[20px] font-unbounded font-bold text-[16px] leading-[20px]"
            style={{
              background: 'linear-gradient(91.87deg, #5500FF 2.8%, #7300FF 99.41%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            от {price} ₽
          </span>
        </div>

        {/* Описание */}
        <p className="absolute left-3 top-[98px] w-[304px] h-[72px] font-['Actay_Wide'] font-bold text-[20px] leading-[25px] text-white">
          {description}
        </p>

        {/* Фоновый логотип */}
        <div className="absolute left-[-11px] top-[84px] w-[365px] h-[365px] overflow-hidden">
          <Image
            src="/SolarStudioLogobg.png"
            alt="Фоновый логотип"
            width={365}
            height={365}
            className="w-full h-full object-contain mix-blend-soft-light opacity-10"
            priority
          />
        </div>

        {/* Изображение услуги */}
        <div className="absolute left-[90px] top-[173px] w-[179px] h-[243px]">
          <Image
            src={image}
            alt={title}
            width={179}
            height={243}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

// Список всех услуг
const services: ServiceCardProps[] = [
  {
    id: 1,
    title: 'Разработка плагина',
    price: 200,
    description: 'Создание уникальных плагинов с учетом ваших требований и идей.',
    image: '/services/s-1.png'
  },
  {
    id: 2,
    title: 'Разработка сборки',
    price: 500,
    description: 'Создание готовых Minecraft серверов с уникальными механиками и настройками.',
    image: '/services/s-2.png'
  },
  {
    id: 3,
    title: 'Проект под ключ',
    price: 2000,
    description: 'Комплексная разработка Minecraft сервера с нуля до полной готовности.',
    image: '/services/s-3.png'
  },
  {
    id: 4,
    title: 'Сайт под ключ',
    price: 5000,
    description: 'Создание удобного и стильного сайта для вашего проекта.',
    image: '/services/s-4.png'
  },
  {
    id: 5,
    title: 'Разработка дизайна',
    price: 500,
    description: 'Индивидуальные дизайнерские решения для серверов и сайтов.',
    image: '/services/s-5.png'
  },
  {
    id: 6,
    title: 'Постройка локации',
    price: 2000,
    description: 'Проектирование уникальных игровых миров и арен.',
    image: '/services/s-6.png'
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
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
} 
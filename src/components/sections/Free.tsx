import { FC } from 'react'
import Image from 'next/image'
import { ServicesIconH } from '@/components/icons'

// Интерфейс для карточки
interface FreeCardProps {
  id: number
  title: string
  image: string
  fontSize?: string
}

// Интерфейс для партнера
interface Partner {
  id: number
  image: string
  alt: string
  hasRadius?: boolean
}

// Массив бесплатных ресурсов
const freeItems: FreeCardProps[] = [
  {
    id: 1,
    title: 'Сборки',
    image: '/free/f-1.jpg',
    fontSize: '32px'
  },
  {
    id: 2,
    title: 'Плагины',
    image: '/free/f-2.jpg',
    fontSize: '32px'
  },
  {
    id: 3,
    title: 'Карты и схемы',
    image: '/free/f-3.jpg',
    fontSize: '24px'
  },
  {
    id: 4,
    title: 'Конфигурации',
    image: '/free/f-4.jpg',
    fontSize: '22px'
  },
  {
    id: 5,
    title: 'Остальное',
    image: '/free/f-5.jpg',
    fontSize: '32px'
  }
]

// Массив партнеров
const partners: Partner[] = [
  {
    id: 1,
    image: '/partners/p-1.jpg',
    alt: 'Партнер 1',
  },
  {
    id: 2,
    image: '/partners/p-2.png',
    alt: 'Партнер 2'
  },
  {
    id: 3,
    image: '/partners/p-3.jpg',
    alt: 'Партнер 3',
  }
]

// Компонент карточки бесплатного предложения
const FreeCard: FC<FreeCardProps> = ({ title, image, fontSize = '32px' }) => {
  return (
    <div className="group relative w-[340px] h-[240px] transition-transform duration-300 hover:scale-[1.02] overflow-hidden">
      {/* Фон карточки */}
      <div className="absolute inset-0 bg-[linear-gradient(116.49deg,#17013E_0%,#8300DA_100%)] rounded-[25px] shadow-lg transition-all duration-300 group-hover:shadow-purple-500/20" />

      {/* Фоновый логотип */}
      <div className="absolute w-[365px] h-[365px] left-[-12px] top-[-62px] mix-blend-soft-light opacity-40">
        <Image
          src="/SolarStudioLogobg.png"
          alt="Фоновый логотип"
          width={365}
          height={365}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Заголовок */}
      <h3 
        className="absolute left-[26px] top-[20px] font-unbounded font-semibold text-white z-10"
        style={{ 
          fontSize, 
          lineHeight: '40px',
          textShadow: '0px 0px 10px rgba(255, 255, 255, 0.3)'
        }}
      >
        {title}
      </h3>

      {/* Блок с ценой */}
      <div className="absolute right-[25px] top-[26px] w-[53px] h-[32px] bg-white rounded-[0px_10px] flex items-center justify-center z-10">
        <span className="font-unbounded font-bold text-[20px] leading-[25px] tracking-[0.01em] bg-gradient-to-r from-[#5500FF] to-[#7300FF] bg-clip-text text-transparent">
          0 ₽
        </span>
      </div>

      {/* Изображение */}
      <div className="absolute left-[33px] top-[70px] w-[274px] h-[154px] rounded-[25px] overflow-hidden z-10">
        <Image
          src={image}
          alt={title}
          width={274}
          height={154}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  )
}

export const Free: FC = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Секция бесплатных предложений */}
      <div className="relative w-full py-32">
        {/* Заголовок с иконкой */}
        <div className="relative w-full mx-auto">
          <div className="relative flex items-center justify-center gap-4 mb-16">
            <ServicesIconH className="w-[79px] h-[79px]" />
            <h2 className="font-unbounded font-semibold text-[64px] leading-[79px] bg-gradient-to-r from-white to-[#E3D6FF] bg-clip-text text-transparent">
              Бесплатно
            </h2>
          </div>

          {/* Сетка карточек */}
          <div className="relative w-full max-w-[1920px] mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 mb-[102px]">
              {freeItems.map((item) => (
                <FreeCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Секция партнеров */}
      <div className="relative w-full min-h-[600px]">
        {/* Фоновое свечение */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-[1514px] h-[250px] top-0"
          style={{
            background: 'rgba(47, 0, 255, 0.3)',
            filter: 'blur(140.4px)'
          }}
        />

        {/* Иконка */}
        <div className="relative flex justify-center mt-4">
          <Image
            src="/collaboration.png"
            alt="Иконка сотрудничества"
            width={96}
            height={96}
            className="mb-4"
          />
        </div>

        {/* Заголовок */}
        <div className="relative max-w-[1550px] mx-auto text-center mt-4">
          <h2 className="font-unbounded font-semibold text-[60px] leading-[74px] bg-gradient-to-b from-white to-[#ADB4FF] bg-clip-text text-transparent">
            Мы работаем вместе с популярными проектами!
          </h2>
        </div>

        {/* Логотипы партнеров */}
        <div className="relative flex justify-center items-center gap-11 mt-16">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="w-[147px] h-[147px] overflow-hidden transition-transform duration-300 hover:scale-105"
              style={{ borderRadius: partner.hasRadius ? '25px' : '0' }}
            >
              <Image
                src={partner.image}
                alt={partner.alt}
                width={147}
                height={147}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
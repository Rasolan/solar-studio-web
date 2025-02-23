'use client'

import { FC } from 'react'
import Image from 'next/image'
import { ServicesIconH } from '@/components/icons'
import { motion } from 'framer-motion'

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
  name: string
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
    title: 'Карты',
    image: '/free/f-3.jpg',
    fontSize: '24px'
  },
  {
    id: 4,
    title: 'Конфиги',
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
    name: 'Партнер 1'
  },
  {
    id: 2,
    image: '/partners/p-2.png',
    alt: 'Партнер 2',
    name: 'Партнер 2'
  },
  {
    id: 3,
    image: '/partners/p-3.jpg',
    alt: 'Партнер 3',
    name: 'Партнер 3'
  }
]

// Компонент карточки бесплатного предложения
const FreeCard: FC<FreeCardProps> = ({ title, image, fontSize = '32px' }) => {
  return (
    <div className="group relative w-[300px] sm:w-[340px] h-[220px] sm:h-[240px] transition-transform duration-300 hover:scale-[1.02] overflow-hidden">
      {/* Фон карточки */}
      <div className="absolute inset-0 bg-[linear-gradient(116.49deg,#17013E_0%,#8300DA_100%)] rounded-[20px] sm:rounded-[25px] shadow-lg transition-all duration-300 group-hover:shadow-purple-500/20" />

      {/* Фоновый логотип */}
      <div className="absolute w-[320px] sm:w-[365px] h-[320px] sm:h-[365px] left-[-12px] top-[-62px] mix-blend-soft-light opacity-40">
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
        className="absolute left-[20px] sm:left-[26px] top-[16px] sm:top-[20px] font-unbounded font-semibold text-[32px] leading-[40px] text-white z-10"
        style={{ 
          textShadow: '0px 0px 10px rgba(255, 255, 255, 0.3)'
        }}
      >
        {title}
      </h3>

      {/* Блок с ценой */}
      <div className="absolute right-[20px] sm:right-[25px] top-[20px] sm:top-[26px] w-[45px] sm:w-[53px] h-[28px] sm:h-[32px] bg-white rounded-[0px_8px] sm:rounded-[0px_10px] flex items-center justify-center z-10">
        <span className="font-unbounded font-bold text-[18px] sm:text-[20px] leading-[22px] sm:leading-[25px] tracking-[0.01em] bg-gradient-to-r from-[#5500FF] to-[#7300FF] bg-clip-text text-transparent">
          0 ₽
        </span>
      </div>

      {/* Изображение */}
      <div className="absolute left-[25px] sm:left-[33px] top-[70px] sm:top-[70px] w-[250px] sm:w-[274px] h-[140px] sm:h-[154px] rounded-[20px] sm:rounded-[25px] overflow-hidden z-10">
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
    <motion.section 
      className="relative w-full pt-[69px] pb-[69px] bg-black overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Секция бесплатных предложений */}
      <div className="relative w-full">
        {/* Заголовок с иконкой */}
        <motion.div 
          className="relative w-full mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative flex items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 lg:mb-24">
            <ServicesIconH className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[79px] lg:h-[79px]" />
            <h2 className="font-unbounded font-semibold text-[32px] sm:text-[48px] lg:text-[64px] leading-tight lg:leading-[79px] bg-gradient-to-r from-white to-[#E3D6FF] bg-clip-text text-transparent">
              Бесплатно
            </h2>
          </div>

          {/* Сетка карточек */}
          <motion.div 
            className="relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              {freeItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <FreeCard {...item} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Секция партнеров */}
        <motion.div 
          className="relative w-full mt-16 sm:mt-24 lg:mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Фоновое свечение */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-full sm:w-[80%] lg:w-[1514px] h-[150px] sm:h-[200px] lg:h-[250px] top-0"
            style={{
              background: 'rgba(47, 0, 255, 0.3)',
              filter: 'blur(140.4px)'
            }}
          />

          {/* Иконка */}
          <div className="relative flex justify-center">
            <Image
              src="/collaboration.png"
              alt="Иконка сотрудничества"
              width={96}
              height={96}
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[96px] lg:h-[96px]"
            />
          </div>

          {/* Заголовок */}
          <div className="relative max-w-[1550px] mx-auto text-center mt-6 sm:mt-8 lg:mt-12 px-4 sm:px-6 lg:px-8">
            <h2 className="font-unbounded font-semibold text-[32px] sm:text-[48px] lg:text-[60px] leading-tight sm:leading-[1.2] lg:leading-[74px] bg-gradient-to-b from-white to-[#ADB4FF] bg-clip-text text-transparent">
              Мы работаем вместе с популярными проектами!
            </h2>
          </div>

          {/* Логотипы партнеров */}
          <div className="relative flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-11 mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-8">
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div 
                  className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[147px] lg:h-[147px] overflow-hidden transition-transform duration-300 hover:scale-105"
                  style={{ 
                    borderRadius: partner.hasRadius ? '50%' : '0' 
                  }}
                >
                  <Image
                    src={partner.image}
                    alt={partner.alt}
                    width={147}
                    height={147}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
'use client'

import { FC, useRef } from 'react'
import { CartIconTwo } from '@/components/icons'
import { ProductCard, ProductCardProps } from '@/components/ui/ProductCard'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Список всех товаров с их данными
const products: ProductCardProps[] = [
  {
    id: 1,                      
    title: 'SolarTime v1',      
    price: 500,                 
    description: 'Готовая сборка анархического сервера на основе популярного проекта FunTime для Minecraft 1.16.5+. ',
    image: '/products/p-1.png', 
    imageStyles: {                  
      width: '247px',               
      height: '367px',              
      bottom: '0px',                  
      left: '110px',                
      right: '50px'                 
    }
  },
  {
    id: 2,
    title: 'SolarAnarchy v1',
    price: 5000,
    description: 'Сборка анархического сервера для Minecraft 1.16.5+ с множеством уникальных механик. ',
    image: '/products/p-2.png',
    imageStyles: {
      width: '417px',
      height: '487px',
      bottom: '0px',
      transform: 'rotate(5deg)',
      left: '-60px',
      right: '10px'
    }
  },
  {
    id: 3,
    title: 'SolarEasyGrief v3',
    price: 1500,
    description: 'Гриферская сборка для Minecraft 1.16.5+ с захватывающими ивентами и уникальными механиками, делающими игру еще интереснее. ',
    image: '/products/p-3.png',
    imageStyles: {
      width: '332px',
      height: '239px',
      bottom: '10px',
      left: '24px',
      right: '15px',
      top: '175px'
    }
  },
  {
    id: 4,
    title: 'SolarEasyGrief v2',
    price: 500,
    description: 'Сборка гриферского сервера для Minecraft 1.16.5+ с продуманным стилем и качественными самописными плагинами.',
    image: '/products/p-4.png',
    imageStyles: {
      width: '230px',
      height: '368px',
      bottom: '0px',
      transform: 'rotate(3deg)',
      left: '130px'
    }
  },
  {
    id: 5,
    title: 'SolarEasyGrief v1',
    price: 300,
    description: 'Готовая сборка гриферского сервера для Minecraft 1.16.5+, идеально подходящая для новичков, желающих запустить свой сервер.',
    image: '/products/p-5.png',
    imageStyles: {
      width: '262px',
      height: '319px',
      bottom: '0px',
      transform: 'rotate(0deg)',
      left: '100px',
      right: '45px'
    }
  },
  {
    id: 6,
    title: 'SolarBoxPVP v1',
    price: 500,
    description: 'Гриферская сборка для Minecraft 1.16.5+ с захватывающими ивентами и уникальными механиками, делающими игру еще интереснее.',
    image: '/products/p-6.png',
    imageStyles: {
      width: '237px',
      height: '331px',
      bottom: '0px',
      left: '120px',
      right: '40px'
    }
  }
]

export const Products: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <motion.section 
      id="products-section"
      ref={sectionRef}
      className="relative w-full pt-[69px] pb-[69px] bg-black overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full">
        {/* Декоративное изображение слева */}
        <div className="absolute w-[200px] sm:w-[280px] lg:w-[338px] h-[300px] sm:h-[400px] lg:h-[534px] left-[140px] sm:left-[200px] lg:left-[280px] -top-10 opacity-50 sm:opacity-100">
          {/* Контейнер */}
          <div className="absolute w-[400px] sm:w-[500px] lg:w-[624.6px] h-[400px] sm:h-[500px] lg:h-[624.32px] -left-[300px] sm:-left-[350px] lg:-left-[440px] -top-[-100px] sm:-top-[-120px] lg:-top-[-140px]">
            <Image
              src="/prog-b-p.png"
              alt="Декоративное изображение"
              width={624}
              height={624}
              className="absolute w-full h-full object-contain transform"
              priority
            />
          </div>
          {/* Свечение */}
          <div className="absolute w-[600px] sm:w-[400px] lg:w-[275px] h-[600px] sm:h-[300px] lg:h-[375px] -left-[262px] sm:-left-[312px] lg:-left-[362px] top-[165px] sm:top-[185px] lg:top-[205px] bg-[rgba(130,21,182,0.49)] blur-[80px] sm:blur-[100px] lg:blur-[121.75px]" />
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
            <CartIconTwo className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[79px] lg:h-[79px]" />
            <h2 className="font-unbounded font-semibold text-[32px] sm:text-[48px] lg:text-[64px] leading-tight lg:leading-[79px] bg-gradient-to-r from-white to-[#E3D6FF] bg-clip-text text-transparent">
              Наши продукты
            </h2>
          </div>
        </motion.div>

        {/* Сетка продуктов */}
        <motion.div 
          className="relative max-w-[1200px] mx-auto mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <ProductCard {...product} sectionRef={sectionRef} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Контейнер для модальных окон */}
        <div id="products-modal-root" className="relative" style={{ height: 0 }} />
      </div>
    </motion.section>
  )
} 
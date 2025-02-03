'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/ProductModal'

// Интерфейс для стилей изображения
interface ImageStyles {
  width: string
  height: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  transform?: string
}

// Интерфейс для пропсов компонента
export interface ProductCardProps {
  id: number
  title: string
  price: number
  description: string
  image: string
  modalImage?: string // Добавляем опциональное изображение для модального окна
  imageStyles?: ImageStyles
  variant?: 'product' | 'service'
  pricePrefix?: string
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  price,
  description,
  image,
  modalImage, // Получаем изображение для модального окна
  imageStyles = {
    width: '357px',
    height: '416px',
  },
  variant = 'product',
  pricePrefix = ''
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Определяем изображение для модального окна на основе id
  const getModalImage = () => {
    if (modalImage) return modalImage
    return `/productmodal/pm-${id}.png`
  }

  return (
    <>
      <div 
        className="group relative w-[357.07px] h-[416px] transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1"
        style={{
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        }}
      >
        {/* Маска с фоном */}
        <div className="absolute inset-0 w-[357.07px] h-[416px] rounded-[24px] overflow-hidden">
          {/* Задний фон */}
          <div 
            className="absolute inset-0 w-[357.07px] h-[416px] transition-all duration-500"
            style={{
              background: `url(/SolarStudioLogobg.png), linear-gradient(179.84deg, rgba(21, 18, 24, 0.52) 10.64%, rgba(21, 18, 24, 0.72) 39.56%, rgba(85, 2, 167, 0.44) 103.69%, #151218 104.24%, #270D59 108.4%), linear-gradient(180deg, #A801D2 0%, #7B00FF 100%)`,
              backgroundBlendMode: 'soft-light, normal, normal',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              borderRadius: '24px',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
              transition: 'all 0.5s ease-out',
            }}
          />

          {/* Изображение */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute transition-all duration-500 ease-out opacity-0 animate-fadeIn group-hover:scale-[1.04]"
              style={{
                width: imageStyles.width,
                height: imageStyles.height,
                top: imageStyles.top,
                bottom: imageStyles.bottom,
                left: imageStyles.left,
                right: imageStyles.right,
                transform: variant === 'service' ? `${imageStyles.transform || ''} rotate(6.14deg)` : imageStyles.transform,
                transformOrigin: 'center center',
                willChange: 'transform'
              }}
            >
              <Image
                src={image}
                alt={title}
                width={parseInt(imageStyles.width)}
                height={parseInt(imageStyles.height)}
                className="w-full h-full object-contain transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>

        {/* Контент */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Заголовок */}
          <h3 
            className="absolute left-6 top-6 w-[280px] h-[30px] font-unbounded font-bold text-[24px] leading-[30px] text-white opacity-0 animate-fadeSlideDown whitespace-nowrap overflow-hidden text-ellipsis group-hover:opacity-100"
            style={{
              textShadow: '0px 0px 10px rgba(255, 255, 255, 0.3)',
              transform: 'translateY(-10px)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {title}
          </h3>

          {/* Описание */}
          <p 
            className="absolute left-6 top-[60px] w-[223px] h-[137px] font-['Actay_Wide'] font-bold text-[18px] leading-[23px] text-white flex items-start opacity-0 animate-fadeSlideDown group-hover:opacity-100"
            style={{ 
              animationDelay: '0.1s',
              marginTop: '24px',
              transform: 'translateY(-10px)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
              textShadow: '0px 0px 10px rgba(255, 255, 255, 0.2)'
            }}
          >
            {description}
          </p>

          {/* Кнопка */}
          <div 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[307.82px] transform transition-all duration-500 ease-out group-hover:translate-y-[-6px]"
          >
            <Button
              variant="card"
              className="w-full h-[49.25px] bg-[rgba(215,182,255,0.2)] backdrop-blur-[32.1px] rounded-[9px_44px] font-['Actay_Wide'] font-bold text-[24px] leading-[125.6%] px-0 transition-all duration-500 hover:bg-[rgba(215,182,255,0.3)] group-hover:shadow-lg"
              onClick={() => setIsModalOpen(true)}
            >
              {variant === 'product' ? 'купить' : 'от'} {price} ₽
            </Button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        price={price}
        image={getModalImage()}
        imageStyles={{
          width: '546px',
          height: '490px',
          right: '0px',
          transform: 'none'
        }}
      />
    </>
  )
}
'use client'

import { FC, useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ServicesModal } from '@/components/ui/ServicesModal'
import type { Service as BaseService } from '@/components/sections/Services'

interface ImageStyles {
  width: string
  height: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  transform?: string
}

interface ServiceCardProps extends BaseService {
  variant?: 'service' | 'product'
}

export const ServicesCard: FC<ServiceCardProps> = ({
  id,
  title,
  price,
  description,
  image,
  imageStyles = {
    width: '357px',
    height: '416px',
    transform: 'rotate(6.14deg)'
  },
  variant = 'service'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [titleHeight, setTitleHeight] = useState(0)
  const [descriptionTop, setDescriptionTop] = useState(120)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isModalOpen) {
        const modal = document.querySelector('.modal-content')
        if (modal && !modal.contains(event.target as Node)) {
          setIsModalOpen(false)
        }
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  useEffect(() => {
    const updateTitleHeight = () => {
      if (titleRef.current) {
        const height = titleRef.current.offsetHeight
        setTitleHeight(height)
        setDescriptionTop(56 + height)
      }
    }

    updateTitleHeight()
    window.addEventListener('resize', updateTitleHeight)

    return () => {
      window.removeEventListener('resize', updateTitleHeight)
    }
  }, [title])

  return (
    <>
      <div 
        className="group relative w-[300px] sm:w-[330px] lg:w-[357.07px] h-[350px] sm:h-[380px] lg:h-[416px] mx-auto cursor-pointer hover:scale-[1.02] transition-all duration-300 ease-in-out"
        style={{
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
          willChange: 'transform'
        }}
      >
        {/* Маска с фоном */}
        <div className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 ease-in-out">
          {/* Новый градиентный фон */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'linear-gradient(179.84deg, rgba(21, 18, 24, 0.25) -6.41%, rgba(21, 18, 24, 0.38) 39.56%, rgba(75, 0, 149, 0.582539) 80.15%, rgba(85, 2, 167, 0.74) 103.69%, #151218 103.71%, #5800FF 112.6%), linear-gradient(180deg, #8900FF 0%, #4600FB 100%)'
            }}
          />

          {/* Фон с логотипом */}
          <div 
            className="absolute inset-0 w-full h-full mix-blend-soft-light"
            style={{
              background: 'url(/SolarStudioLogobg.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              transform: 'translate3d(0, 0, 0)',
              willChange: 'transform'
            }}
          />

          {/* Изображение */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute transition-all duration-300 ease-in-out"
              style={{
                width: imageStyles.width,
                height: imageStyles.height,
                top: imageStyles.top,
                bottom: imageStyles.bottom,
                left: imageStyles.left,
                right: imageStyles.right,
                transform: variant === 'service' ? `${imageStyles.transform || ''} rotate(6.14deg) translate3d(0, 0, 0)` : `${imageStyles.transform} translate3d(0, 0, 0)`,
                transformOrigin: 'center center',
                willChange: 'transform'
              }}
            >
              <Image
                src={image}
                alt={title}
                width={parseInt(imageStyles.width)}
                height={parseInt(imageStyles.height)}
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-[1.04]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Контент */}
        <div className="relative z-10 h-full flex flex-col p-5 sm:p-6">
          {/* Заголовок */}
          <div className="w-[240px] sm:w-[280px]">
            <h3 
              ref={titleRef}
              className="font-unbounded font-bold text-[20px] sm:text-[24px] leading-[26px] sm:leading-[30px] text-white transition-transform duration-300 ease-in-out group-hover:-translate-y-1"
              style={{
                textShadow: '0px 0px 10px rgba(255, 255, 255, 0.3)'
              }}
            >
              {title}
            </h3>
          </div>

          {/* Описание */}
          <div className="mt-4 sm:mt-6 w-[200px] sm:w-[223px]">
            <p 
              className="font-['Actay_Wide'] font-bold text-[16px] sm:text-[18px] leading-[20px] sm:leading-[23px] text-white transition-transform duration-300 ease-in-out group-hover:-translate-y-1"
              style={{ 
                textShadow: '0px 0px 10px rgba(255, 255, 255, 0.2)'
              }}
            >
              {description}
            </p>
          </div>

          {/* Кнопка */}
          <div className="mt-auto flex justify-center w-full">
            <Button
              variant="card"
              onClick={() => setIsModalOpen(true)}
              className="w-[260px] sm:w-[307.82px] h-[42px] sm:h-[49.25px] bg-[rgba(215,182,255,0.2)] backdrop-blur-[32.1px] rounded-[9px_44px] font-['Actay_Wide'] font-bold text-[20px] sm:text-[24px] leading-[125.6%] px-0 transition-all duration-300 ease-in-out hover:bg-[rgba(215,182,255,0.3)] group-hover:-translate-y-2 group-hover:shadow-lg"
            >
              от {price} ₽
            </Button>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      <ServicesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        id={id}
        title={title}
        description={description}
        price={price}
        image={image}
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

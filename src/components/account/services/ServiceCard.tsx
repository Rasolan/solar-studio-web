'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ServiceCardProps } from '@/types/services'

export const ServiceCard: FC<ServiceCardProps> = ({
  title,
  price,
  downloads,
  description,
  image,
  type,
  onAction
}) => { 
  const [imageError, setImageError] = useState(false)

  return (
    <div 
      className="group relative w-[300px] sm:w-[330px] lg:w-[357.07px] h-[350px] sm:h-[380px] lg:h-[416px] mx-auto hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        willChange: 'transform'
      }}
    >
      {/* Badge */}
      <div className="absolute top-[25px] right-6 z-20">
        <div className="flex justify-center items-center min-w-[65px] h-[26px] px-[8px] py-[4px] bg-white rounded-[6px_16px] shadow-sm">
          <div className="font-unbounded font-bold text-[14px] leading-[18px] text-center whitespace-nowrap text-[#5A0973]">
            {type === 'paid' ? `${price} ₽` : `free`}
          </div>
        </div>
      </div>

      {/* Маска с фоном */}
      <div className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
        {/* Задний фон */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: `url(/SolarStudioLogobg.png), linear-gradient(179.84deg, rgba(21, 18, 24, 0.52) 10.64%, rgba(21, 18, 24, 0.72) 39.56%, rgba(85, 2, 167, 0.44) 103.69%, #151218 104.24%, #270D59 108.4%), linear-gradient(180deg, #A801D2 0%, #7B00FF 100%)`,
            backgroundBlendMode: 'soft-light, normal, normal',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            borderRadius: '24px',
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform'
          }}
        />

        {/* Изображение */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              width: '357px',
              height: '416px',
              top: '0',
              right: '0',
              transform: 'translate3d(0, 0, 0)',
              transformOrigin: 'center center',
              willChange: 'transform'
            }}
          >
            {!imageError ? (
              <Image
                src={image}
                alt={title}
                width={357}
                height={416}
                className="w-full h-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[rgba(11,9,78,0.4)]">
                <span className="text-[#F4E7FF]">Изображение недоступно</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Контент */}
      <div className="relative z-10 h-full flex flex-col p-5 sm:p-6">
        {/* Заголовок */}
        <div className="w-[220px] sm:w-[280px]">
          <h3 
            className="font-unbounded font-bold text-[18px] sm:text-[20px] lg:text-[24px] leading-[26px] sm:leading-[30px] text-white transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-1"
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
            className="font-['Actay_Wide'] font-bold text-[16px] sm:text-[18px] leading-[20px] sm:leading-[23px] text-white transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-1"
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
            className="w-[260px] sm:w-[280px] lg:w-[307.82px] h-[39px] sm:h-[44px] lg:h-[49.25px] backdrop-blur-[32.1px] rounded-[9px_44px] font-['Actay_Wide'] font-bold text-[16px] sm:text-[20px] lg:text-[24px] leading-[125.6%] px-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[rgba(215,182,255,0.3)] group-hover:-translate-y-2 group-hover:shadow-lg"
            onClick={onAction}
          >
            {type === 'paid' ? 'Купить' : 'Скачать'}
          </Button>
        </div>
      </div>
    </div>
  )
} 
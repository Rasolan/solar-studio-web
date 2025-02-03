'use client'

import { FC, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from './Button'
import { cn } from '@/lib/utils'

interface ImageStyles {
  width: string
  height: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  transform?: string
}

interface ServicesCardProps {
  id: number
  title: string
  price: number
  description: string
  image: string
  imageStyles?: ImageStyles
}

export const ServicesCard: FC<ServicesCardProps> = ({
  title,
  price,
  description,
  image,
  imageStyles = {
    width: '357px',
    height: '416px',
  },
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleHeight, setTitleHeight] = useState(30); // Дефолтная высота заголовка

  useEffect(() => {
    const updateTitleHeight = () => {
      if (titleRef.current) {
        const height = titleRef.current.offsetHeight;
        setTitleHeight(height);
      }
    };

    updateTitleHeight();
    window.addEventListener('resize', updateTitleHeight);
    
    return () => window.removeEventListener('resize', updateTitleHeight);
  }, [title]); // Пересчитываем при изменении заголовка

  return (
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
              transform: `${imageStyles.transform || ''} rotate(6.14deg)`,
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

      {/* Контент (поверх всего) */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Заголовок */}
        <h3 
          ref={titleRef}
          className="absolute left-6 top-6 w-[280px] font-unbounded font-bold text-[24px] leading-[30px] text-white opacity-0 animate-fadeSlideDown break-words group-hover:opacity-100"
          style={{
            textShadow: '0px 0px 10px rgba(255, 255, 255, 0.3)',
            transform: 'translateY(-10px)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            minHeight: '30px',
            maxHeight: '60px',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {title}
        </h3>

        {/* Описание */}
        <div 
          className="absolute left-6 w-[223px]"
          style={{
            top: `${titleHeight + 48}px` // Увеличенный отступ после заголовка
          }}
        >
          <p 
            className="font-['Actay_Wide'] font-bold text-[18px] leading-[23px] text-white opacity-0 animate-fadeSlideDown group-hover:opacity-100"
            style={{ 
              animationDelay: '0.1s',
              transform: 'translateY(-10px)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
              textShadow: '0px 0px 10px rgba(255, 255, 255, 0.2)',
            }}
          >
            {description}
          </p>
        </div>

        {/* Кнопка */}
        <div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[307.82px] transform transition-all duration-500 ease-out group-hover:translate-y-[-6px]"
        >
          <Button
            variant="card"
            className="w-full h-[49.25px] bg-[rgba(215,182,255,0.2)] backdrop-blur-[32.1px] rounded-[9px_44px] font-['Actay_Wide'] font-bold text-[24px] leading-[125.6%] px-0 transition-all duration-500 hover:bg-[rgba(215,182,255,0.3)] group-hover:shadow-lg"
          >
            от {price} ₽
          </Button>
        </div>
      </div>
    </div>
  )
}

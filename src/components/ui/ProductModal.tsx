'use client'

import { FC, useEffect, useRef } from 'react'
import { Button } from './Button'
import Image from 'next/image'

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

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  price: number
  image: string
  imageStyles?: ImageStyles
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  price,
  image,
  imageStyles = {
    width: '556px',
    height: '490px',
    right: '0',
    transform: 'none'
  }
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Модальное окно */}
      <div 
        ref={modalRef}
        className="relative w-[768px] h-[488px] animate-fadeScale rounded-[32px] overflow-hidden"
        style={{
          background: 'linear-gradient(179.84deg, rgba(21, 18, 24, 0.52) 10.64%, rgba(21, 18, 24, 0.72) 39.56%, rgba(85, 2, 167, 0.44) 103.69%, #151218 104.24%, #270D59 108.4%), linear-gradient(180deg, #A801D2 0%, #7B00FF 100%)'
        }}
      >
        {/* Фон с логотипом */}
        <div 
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/productmodal/bg-im.png)',
            backgroundSize: '100% auto',
            backgroundPosition: 'center calc(50% - 20px)',
            mixBlendMode: 'soft-light'
          }}
        />

        {/* Контейнер для изображения с маской */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute right-0"
            style={{
              width: imageStyles.width,
              height: imageStyles.height,
              transform: imageStyles.transform,
              bottom: '-20px'
            }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 556px) 100vw, 556px"
            />
          </div>
        </div>

        {/* Контейнер контента */}
        <div className="absolute inset-0 flex flex-col p-8 z-10">
          {/* Основной контент */}
          <div className="flex flex-col min-w-0">
            {/* Заголовок и цена */}
            <div className="flex min-w-0">
              <h2 
                className="font-unbounded font-bold text-[clamp(24px,3vw,32px)] text-white leading-tight min-w-0 break-words hyphens-auto"
                style={{ 
                  textShadow: '0px 0px 17.7px rgba(255, 255, 255, 0.43)',
                }}
              >
                {title}
              </h2>
              <div 
                className="ml-[29px] flex justify-center items-center h-[39px] px-4 bg-white rounded-[2px_12px] shrink-0"
              >
                <span 
                  className="font-unbounded font-bold text-[clamp(18px,2.5vw,24px)] whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(196.66deg, #5A0973 -9.51%, #6B077B 111.03%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {price} ₽
                </span>
              </div>
            </div>

            {/* Описание */}
            <div 
              className="mt-[59px] w-[477px] font-['Actay_Wide'] font-bold text-[clamp(18px,2.5vw,24px)] leading-[1.25] text-white"
            >
              {description}
            </div>
          </div>

          {/* Контейнер кнопок */}
          <div className="mt-auto flex gap-3 w-full">
            <Button
              variant="card"
              className="flex-1 h-[58px] flex items-center justify-center bg-[rgba(215,182,255,0.2)] backdrop-blur-[32.1px]"
            >
              <span className="font-['Actay_Wide'] font-bold text-[clamp(18px,2.5vw,24px)] text-white whitespace-nowrap">
                приобрести
              </span>
            </Button>
            <Button
              variant="card"
              className="flex-1 h-[58px] flex items-center justify-center bg-[rgba(215,182,255,0.2)] backdrop-blur-[32.1px]"
            >
              <span className="font-['Actay_Wide'] font-bold text-[clamp(18px,2.5vw,24px)] text-white whitespace-nowrap">
                видео-обзор
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

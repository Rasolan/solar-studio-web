'use client'

import { FC, useEffect, useRef } from 'react'
import { Button } from './Button'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { Service } from '@/components/sections/Services'

interface ServicesModalProps extends Pick<Service, 'id' | 'title' | 'description' | 'price' | 'image' | 'imageStyles'> {
  isOpen: boolean
  onClose: () => void
}

export const ServicesModal: FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  price,
  image,
  id,
  imageStyles = {
    width: '556px',
    height: '490px',
    right: '0',
    transform: 'none'
  }
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  // Обработчик Escape
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (modalRef.current) {
          modalRef.current.style.transform = 'scale(0.95) translateY(20px)'
          modalRef.current.style.opacity = '0'
          modalRef.current.style.transition = 'all 0.3s ease'
        }
        setTimeout(onClose, 300)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Обработчик клика вне модального окна
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (!modalRef.current?.contains(e.target as Node)) {
      if (modalRef.current) {
        modalRef.current.style.transform = 'scale(0.95) translateY(20px)'
        modalRef.current.style.opacity = '0'
        modalRef.current.style.transition = 'all 0.3s ease'
      }
      setTimeout(onClose, 300)
    }
  }

  // Обработчик клика по модальному окну
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  if (!isOpen) return null

  // Получаем изображение для модального окна
  const modalImage = id ? `/servicemodal/sm-${id}.png` : image

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
          onClick={handleOutsideClick}
        >
          {/* Затемнение фона */}
          <motion.div 
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
          />

          {/* Модальное окно */}
          <motion.div 
            ref={modalRef}
            className="relative w-full max-w-[768px] h-[488px] sm:h-[488px] rounded-[20px] sm:rounded-[32px] overflow-hidden"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring",
              duration: 0.3,
              bounce: 0.15
            }}
            onClick={handleModalClick}
            style={{
              background: 'linear-gradient(179.84deg, rgba(21, 18, 24, 0.25) -6.41%, rgba(21, 18, 24, 0.38) 39.56%, rgba(75, 0, 149, 0.582539) 80.15%, rgba(85, 2, 167, 0.74) 103.69%, #151218 103.71%, #5800FF 112.6%), linear-gradient(180deg, #8900FF 0%, #4600FB 100%)'
            }}
          >
            {/* Контент */}
            <motion.div
              className="relative h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                duration: 0.3,
                bounce: 0.1
              }}
            >
              {/* Фон с логотипом */}
              <div 
                className="absolute inset-0 w-full h-full bg-center bg-no-repeat mix-blend-soft-light"
                style={{
                  backgroundImage: 'url(/productmodal/bg-im.png)',
                  backgroundSize: '100% auto',
                  backgroundPosition: 'center calc(50% - 20px)',
                  transform: 'translate3d(0, 0, 0)',
                  willChange: 'transform'
                }}
              />

              {/* Контейнер для изображения с маской - скрыт на мобильных */}
              <div className="absolute inset-0 overflow-hidden hidden sm:block">
                <div 
                  className="absolute right-0 transition-transform duration-300"
                  style={{
                    width: imageStyles.width,
                    height: imageStyles.height,
                    transform: imageStyles.transform,
                    bottom: '-20px',
                    willChange: 'transform'
                  }}
                >
                  <Image
                    src={modalImage}
                    alt={title}
                    fill
                    className="object-contain transition-transform duration-300"
                    priority
                    sizes="(max-width: 556px) 100vw, 556px"
                  />
                </div>
              </div>

              {/* Контейнер контента */}
              <div className="absolute inset-0 flex flex-col p-6 sm:p-8 z-10">
                {/* Основной контент */}
                <div className="flex flex-col min-w-0">
                  {/* Заголовок и цена */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-0 min-w-0">
                    <h2 
                      className="font-unbounded font-bold text-[24px] sm:text-[clamp(24px,3vw,32px)] leading-tight text-white min-w-0 break-words hyphens-auto"
                      style={{ 
                        textShadow: '0px 0px 17.7px rgba(255, 255, 255, 0.43)',
                      }}
                    >
                      {title}
                    </h2>
                    <div 
                      className="flex justify-center items-center h-[39px] px-4 bg-white rounded-[2px_12px] sm:ml-[29px] shrink-0 self-start"
                    >
                      <span 
                        className="font-unbounded font-bold text-[20px] sm:text-[clamp(18px,2.5vw,24px)] whitespace-nowrap"
                        style={{
                          background: 'linear-gradient(91.87deg, #6B00DE 2.8%, #6300DE 99.41%)',
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
                    className="mt-6 sm:mt-[59px] w-full sm:w-[477px] font-['Actay_Wide'] font-bold text-[18px] sm:text-[clamp(18px,2.5vw,24px)] leading-[1.25] text-white"
                  >
                    {description}
                  </div>
                </div>

                {/* Контейнер кнопок */}
                <div className="mt-auto flex flex-col sm:flex-row gap-3 w-full">
                  <Button
                    variant="card"
                    onClick={onClose}
                  >
                    <span className="font-['Actay_Wide'] font-bold text-[18px] sm:text-[24px] leading-[125.6%] text-white tracking-[-0.01em]">
                      Написать
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
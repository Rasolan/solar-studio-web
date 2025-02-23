'use client'

import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const Hero: FC = () => {
  const fullText = "Добро пожаловать на\nсайт нашей студии!"
  const [text, setText] = useState("")
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 80 })
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 80 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseXRelative = ((e.clientX - centerX) / rect.width) * 15
    const mouseYRelative = ((e.clientY - centerY) / rect.height) * 10
    mouseX.set(mouseXRelative)
    mouseY.set(mouseYRelative)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const typeText = async () => {
      while (true) {
        // Печатаем текст
        for (let i = 0; i <= fullText.length; i++) {
          await new Promise(resolve => {
            timeoutId = setTimeout(() => {
              setText(fullText.slice(0, i))
              resolve(null)
            }, 3000 / fullText.length)
          })
        }

        // Ожидание 3 секунды 
        await new Promise(resolve => {
          timeoutId = setTimeout(resolve, 3000)
        })

        // Удаляем текст
        for (let i = fullText.length; i >= 0; i--) {
          await new Promise(resolve => {
            timeoutId = setTimeout(() => {
              setText(fullText.slice(0, i))
              resolve(null)
            }, 2000 / fullText.length)
          })
        }

        // Небольшая пауза
        await new Promise(resolve => {
          timeoutId = setTimeout(resolve, 500)
        })
      }
    }

    typeText()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section 
      className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[946px] bg-black pt-[60px] sm:pt-[80px] lg:pt-[97px] overflow-hidden"
      style={{
        '--device-pixel-ratio': window.devicePixelRatio,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Размытая линия снизу */}
      <motion.div 
        className="absolute w-full sm:w-[2030px] h-[30px] sm:h-[40px] lg:h-[49px] left-0 sm:left-[-53px] bottom-0 sm:bottom-[-20px] lg:bottom-[-30px] bg-black blur-[10px] sm:blur-[12px] lg:blur-[15px] z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Фоновая картинка */}
      <motion.div 
        className="absolute left-[-0px] bottom-[-0px] w-[280px] sm:w-[400px] md:w-[510px] h-[140px] sm:h-[180px] md:h-[230px] pointer-events-none z-[1]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image 
          src="/hero-bg.png" 
          alt="Background картинка"
          width={600}
          height={279}
          className="w-full h-full object-contain"
          priority
        />
      </motion.div> 

      {/* Градиентные круги */}
      <motion.div 
        className="absolute w-[300px] sm:w-[500px] lg:w-[809px] h-[300px] sm:h-[500px] lg:h-[666px] left-[-5%] sm:left-[-10%] lg:left-[-164px] top-[150px] sm:top-[200px] lg:top-[405px] bg-[rgba(153,0,255,0.6)] blur-[100px] sm:blur-[150px] lg:blur-[350px] pointer-events-none z-[2]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div 
        className="absolute w-[300px] sm:w-[500px] lg:w-[855px] h-[300px] sm:h-[500px] lg:h-[647px] right-[-5%] sm:right-[-10%] lg:right-[-164px] top-[50px] sm:top-[100px] lg:top-[299px] bg-[rgba(0,89,255,0.6)] blur-[100px] sm:blur-[150px] lg:blur-[350px] pointer-events-none z-[2]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      {/* Основной контейнер */}
      <div className="relative max-w-[1920px] mx-auto h-full px-4 sm:px-6 lg:px-8 xl:px-[117px] z-[3]">
        {/* Контент */}
        <div className="relative pt-[60px] sm:pt-[80px] lg:pt-[154px] flex flex-col lg:flex-row items-center">
          {/* Левая часть */}
          <motion.div 
            className="w-full lg:w-[920px] flex flex-col gap-8 sm:gap-10 lg:gap-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Заголовок */}
            <h1 className="relative font-unbounded font-semibold text-[28px] sm:text-[48px] lg:text-[64px] leading-tight lg:leading-[79px] text-white h-[80px] sm:h-[120px] lg:h-[160px]">
              {text}
              <span className="animate-pulse">|</span>
            </h1>
    
            {/* Описание */}
            <motion.div 
              className="max-w-[713px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="font-unbounded font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-normal lg:leading-[30px] text-[#BDBDBD] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <span className="inline bg-gradient-to-r from-[#7300FF] to-[#AD00CF] bg-clip-text text-transparent tracking-[0.01em]">SolarStudio</span>
                {" – это студия, которая специализируется не только на разработке Minecraft-контента, но и предоставляет широкий спектр услуг, включая дизайн и создание сайтов."}
              </p>
            </motion.div>

            {/* Кнопка */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button 
                variant="accent" 
                size="xl" 
                className="w-full sm:w-[415px] z-[10]"
                onClick={() => ('products-section')}
              >
                Сделать заказ
              </Button>
            </motion.div>
          </motion.div>

          {/* Изображение справа */}
          <motion.div 
            className="relative lg:absolute right-0 top-0 w-full sm:w-[600px] lg:w-[846px] h-[400px] sm:h-[600px] lg:h-[851px] mt-8 lg:mt-0 hidden lg:block overflow-visible -z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1 }}
            style={{ 
              x: smoothX,
              rotateX: smoothY,
              rotateY: smoothX,
              transformPerspective: 2000,
              opacity: `calc(1.2 - (var(--device-pixel-ratio, 1) - 1) * 0.3)`,
              filter: `brightness(calc(1.1 - (var(--device-pixel-ratio, 1) - 1) * 0.2))`
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 1 }
            }}
          >
            <div 
              className="relative w-full h-full transition-all duration-300 ease-out"
              style={{
                transformOrigin: 'center center',
                transform: `scale(calc(1 + (var(--device-pixel-ratio, 1) - 1) * 0.1))`,
                marginRight: 'calc((var(--device-pixel-ratio, 1) - 1) * 100px)',
                mixBlendMode: 'lighten'
              }}
            >
              <Image 
                src="/hero-image.png" 
                alt="Игрок чумба"
                width={846}
                height={970}
                className="w-full h-full object-contain transform rotate-[0.32deg] mix-blend-lighten scale-[1.02] hover:scale-[1.04] transition-all duration-300"
                style={{
                  filter: `opacity(calc(1 - (var(--device-pixel-ratio, 1) - 1) * 0.15))`
                }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
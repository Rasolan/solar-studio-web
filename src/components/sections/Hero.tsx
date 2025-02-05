'use client'

import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export const Hero: FC = () => {
  const fullText = "Добро пожаловать на\nсайт нашей студии!"
  const [text, setText] = useState("")

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const typeText = async () => {
      while (true) {
        // Печатаем текст x)
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
    >
      {/* Размытая линия снизу */}
      <div className="absolute w-full sm:w-[2030px] h-[49px] left-0 sm:left-[-53px] bottom-0 sm:top-[920px] bg-black blur-[15px] z-[5]" />

      {/* Фоновая картинка */}
      <div className="absolute left-[-0px] bottom-[-0px] w-[280px] sm:w-[400px] md:w-[510px] h-[140px] sm:h-[180px] md:h-[230px] pointer-events-none z-[1]">
        <Image 
          src="/hero-bg.png" 
          alt="Background картинка"
          width={600}
          height={279}
          className="w-full h-full object-contain"
          priority
        />
      </div> 

      {/* Градиентные круги */}
      <div className="absolute w-[40%] sm:w-[50%] lg:w-[809px] h-[400px] sm:h-[500px] lg:h-[666px] left-[-10%] lg:left-[-164px] top-[305px] sm:top-[355px] lg:top-[405px] bg-[rgba(153,0,255,0.6)] blur-[200px] sm:blur-[250px] lg:blur-[350px] pointer-events-none z-[2]" />
      <div className="absolute w-[40%] sm:w-[50%] lg:w-[855px] h-[400px] sm:h-[500px] lg:h-[647px] right-[-10%] lg:right-[-164px] top-[199px] sm:top-[249px] lg:top-[299px] bg-[rgba(0,89,255,0.6)] blur-[200px] sm:blur-[250px] lg:blur-[350px] pointer-events-none z-[2]" />

      {/* Основной контейнер */}
      <div className="relative max-w-[1920px] mx-auto h-full px-4 sm:px-6 lg:px-8 xl:px-[117px] z-[3]">
        {/* Контент */}
        <div className="relative pt-[80px] sm:pt-[100px] lg:pt-[154px] flex flex-col lg:flex-row items-center">
          {/* Левая часть */}
          <div className="w-full lg:w-[920px] space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Заголовок */}
            <h1 className="relative font-unbounded font-semibold text-[28px] sm:text-[48px] lg:text-[64px] leading-tight lg:leading-[79px] text-white h-[60px] sm:h-[120px] lg:h-[158px] flex items-start">
              <span className="absolute top-0 left-0 whitespace-pre-line">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
    
            {/* Описание */}
            <div className="max-w-[713px]">
              <p className="font-unbounded font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-normal lg:leading-[30px] text-[#BDBDBD] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <span className="inline bg-gradient-to-r from-[#7300FF] to-[#AD00CF] bg-clip-text text-transparent tracking-[0.01em]">SolarStudio</span>
                {" – это студия, которая специализируется не только на разработке Minecraft-контента, но и предоставляет широкий спектр услуг, включая дизайн и создание сайтов."}
              </p>
            </div>

            {/* Кнопка */}
            <Button 
              variant="accent" 
              size="xl" 
              className="w-full sm:w-[415px] z-[10]"
              onClick={() => ('products-section')}
            >
              Сделать заказ
            </Button>
          </div>

          {/* Изображение справа */}
          <div className="relative lg:absolute right-0 top-0 w-full sm:w-[600px] lg:w-[846px] h-[400px] sm:h-[600px] lg:h-[851px] mt-8 lg:mt-0 hidden lg:block overflow-visible -z-10">
            <div 
              className="relative w-full h-full"
              style={{
                transform: `translateX(calc((var(--device-pixel-ratio, 1) - 1) * 100px))`,
                transformOrigin: 'right center',
                marginRight: 'calc((var(--device-pixel-ratio, 1) - 1) * -50px)'
              }}
            >
              <Image 
                src="/hero-image.png" 
                alt="Игрок чумба"
                width={846}
                height={970}
                className="w-full h-full object-contain transform rotate-[0.32deg] mix-blend-lighten"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
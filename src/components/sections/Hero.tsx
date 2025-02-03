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
    <section className="relative w-full min-h-[946px] bg-black pt-[97px] overflow-hidden">
      {/* Размытая линия снизу */}
      <div className="absolute w-[2030px] h-[49px] left-[-53px] top-[920px] bg-black blur-[15px] z-[5]" />

      {/* Фоновая картинка */}
      <div className="absolute left-[-0px] bottom-[-0px] w-[510px] h-[230px] pointer-events-none z-[1]">
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
      <div className="absolute w-[40%] sm:w-[50%] lg:w-[809px] h-[666px] left-[-10%] lg:left-[-164px] top-[405px] bg-[rgba(153,0,255,0.6)] blur-[350px] pointer-events-none z-[2]" />
      <div className="absolute w-[40%] sm:w-[50%] lg:w-[855px] h-[647px] right-[-10%] lg:right-[-164px] top-[299px] bg-[rgba(0,89,255,0.6)] blur-[350px] pointer-events-none z-[2]" />

      {/* Основной контейнер */}
      <div className="relative max-w-[1920px] mx-auto h-full px-4 lg:px-8 xl:px-[117px] z-[3]">
        {/* Контент */}
        <div className="relative pt-[154px] lg:pt-[154px] flex flex-col lg:flex-row items-center">
          {/* Левая часть */}
          <div className="w-full lg:w-[920px] space-y-8 lg:space-y-12">
            {/* Заголовок */}
            <h1 className="relative font-unbounded font-semibold text-[32px] sm:text-[48px] lg:text-[64px] leading-tight lg:leading-[79px] text-white h-[80px] sm:h-[120px] lg:h-[158px] flex items-start">
              <span className="absolute top-0 left-0 whitespace-pre-line">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
    
            {/* Описание */}
            <div className="max-w-[713px]">
              <p className="font-unbounded font-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-normal lg:leading-[30px] text-[#BDBDBD] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <span className="inline bg-gradient-to-r from-[#7300FF] to-[#AD00CF] bg-clip-text text-transparent tracking-[0.01em]">SolarStudio</span>
                {" – это студия, которая специализируется не только на разработке Minecraft-контента, но и предоставляет широкий спектр услуг, включая дизайн и создание сайтов."}
              </p>
            </div>

            {/* Кнопка */}
            <Button 
              variant="accent" 
              size="xl" 
              className="sm:w-[415px] w-full z-[10]"
            >
              Сделать заказ
            </Button>
          </div>

          {/* Изображение справа */}
          <div className="absolute right-0 top-0 w-[846px] h-[851px] lg:block hidden ">
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
    </section>
  )
} 
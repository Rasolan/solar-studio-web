'use client'

import { FC, useEffect, useState, useRef } from 'react'
import Image from 'next/image'

interface StatItem {
  count: number
  text: string
  left: string
}

const stats: StatItem[] = [
  {
    count: 100,
    text: 'выполненных заказов',
    left: 'lg:left-[252px] left-1/2 -translate-x-1/2 lg:translate-x-0'
  },
  {
    count: 300,
    text: 'клиентов',
    left: 'lg:left-[811px] left-1/2 -translate-x-1/2 lg:translate-x-0'
  },
  {
    count: 200,
    text: 'отзывов',
    left: 'lg:left-[1400px] left-1/2 -translate-x-1/2 lg:translate-x-0'
  }
]

export const Statistics: FC = () => {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const countsRef = useRef<number[]>(counts)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('statistics-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const startCounting = () => {
    const duration = 2000 // 2 секунды
    const steps = 60
    const interval = duration / steps
    let step = 0

    const animate = () => {
      step++
      const progress = step / steps
      const newCounts = stats.map((stat) => 
        Math.min(Math.floor(stat.count * progress), stat.count)
      )
      setCounts(newCounts)
      countsRef.current = newCounts

      if (step < steps) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animate()
  }

  return (
    <section 
      id="statistics-section" 
      className="relative w-full py-20 sm:py-28 lg:py-32 mt-20 sm:mt-28 lg:mt-32 bg-[#2A0057] overflow-hidden shadow-[inset_0px_0px_40px_#000000] mb-20 sm:mb-28 lg:mb-32"
    >
      {/* Фоновый логотип */}
      <div className="absolute inset-0 mix-blend-soft-light">
        <Image
          src="/SolarStudioLogobgv2.png"
          alt="Фоновый логотип"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Фоновые свечения */}
      <div 
        className="absolute w-[500px] sm:w-[700px] lg:w-[859px] h-[250px] sm:h-[300px] lg:h-[393px] -left-[50px] sm:-left-[70px] lg:-left-[89px] -top-[100px] sm:-top-[150px] lg:-top-[207px]"
        style={{
          background: '#BF00FF',
          filter: 'blur(293.3px)'
        }}
      />
      <div 
        className="absolute w-[300px] sm:w-[400px] lg:w-[529px] h-[200px] sm:h-[250px] lg:h-[367px] right-0 sm:right-[50px] lg:right-[100px] top-[150px] sm:top-[200px] lg:top-[296px]"
        style={{
          background: '#0015FF',
          filter: 'blur(293.3px)'
        }}
      />

      {/* Статистика */}
      <div className="relative max-w-[1920px] mx-auto min-h-[400px] sm:min-h-[200px] lg:min-h-[200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-20 lg:gap-32">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center transform transition-all duration-300 hover:scale-105"
            >
              {/* Число */}
              <h3 
                className="font-unbounded font-semibold text-[40px] sm:text-[60px] lg:text-[100px] leading-tight sm:leading-[1.1] lg:leading-[124px] text-transparent bg-clip-text w-[250px] sm:w-[300px] lg:w-[400px] flex items-center justify-center"
                style={{
                  background: 'linear-gradient(281.11deg, #A8A2FF 3.2%, #BA7AFF 76.73%)',
                  WebkitBackgroundClip: 'text'
                }}
              >
                <span>{counts[index]}</span>
                <span className="ml-2 sm:ml-3 lg:ml-4">+</span>
              </h3>
              {/* Подпись */}
              <p className="font-unbounded font-semibold text-[14px] sm:text-[16px] lg:text-[20px] leading-tight sm:leading-[1.2] lg:leading-[25px] text-[#C6C6C6] mt-2 sm:mt-3 lg:mt-4 whitespace-nowrap">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
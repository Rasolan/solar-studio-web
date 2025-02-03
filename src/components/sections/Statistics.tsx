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
    left: 'left-[252px]'
  },
  {
    count: 300,
    text: 'клиентов',
    left: 'left-[811px]'
  },
  {
    count: 200,
    text: 'отзывов',
    left: 'left-[1400px]'
  }
]

export const Statistics: FC = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))
  const animationStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted.current) {
          animationStarted.current = true
          
          stats.forEach((stat, index) => {
            const duration = 2000 
            const steps = 60
            const increment = stat.count / steps
            let current = 0
            let step = 0

            const interval = setInterval(() => {
              if (step < steps) {
                current += increment
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = Math.round(current)
                  return newCounts
                })
                step++
              } else {
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = stat.count
                  return newCounts
                })
                clearInterval(interval)
              }
            }, duration / steps)
          })
        }
      },
      { threshold: 0.5 }
    )

    const section = document.getElementById('statistics-section')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="statistics-section" className="relative w-full h-[400px] bg-[#2A0057] overflow-hidden shadow-[inset_0px_0px_40px_#000000] mb-[102px]">
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
        className="absolute w-[859px] h-[393px] left-[-89px] top-[-207px]"
        style={{
          background: '#BF00FF',
          filter: 'blur(293.3px)'
        }}
      />
      <div 
        className="absolute w-[529px] h-[367px] left-[1427px] top-[296px]"
        style={{
          background: '#0015FF',
          filter: 'blur(293.3px)'
        }}
      />

      {/* Статистика */}
      <div className="relative max-w-[1920px] h-full mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className={`absolute top-[116px] ${stat.left}`}>
            {/* Число */}
            <h3 
              className={`font-unbounded font-semibold text-[100px] leading-[124px] text-transparent bg-clip-text text-center ${
                stat.count >= 200 ? 'w-[350px]' : 'w-[300px]'
              }`}
              style={{
                background: 'linear-gradient(281.11deg, #A8A2FF 3.2%, #BA7AFF 76.73%)',
                WebkitBackgroundClip: 'text'
              }}
            >
              {counts[index]}+
            </h3>
            {/* Подпись */}
            <p className="absolute font-unbounded font-semibold text-[20px] leading-[25px] text-[#C6C6C6] mt-[10px] left-1/2 -translate-x-1/2 whitespace-nowrap">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
} 
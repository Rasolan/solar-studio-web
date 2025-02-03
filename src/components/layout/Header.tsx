'use client'

import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { CartIcon, ServicesIcon, ReviewsIcon, AgreementIcon } from '@/components/icons'
import { Button } from '@/components/ui/Button'

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const router = useRouter()

  const navItems = [
    { href: '#reviews', icon: ReviewsIcon, text: 'Отзывы', sectionId: 'reviews-section' },
    { href: '#products', icon: CartIcon, text: 'Товары', sectionId: 'products-section' },
    { href: '#services', icon: ServicesIcon, text: 'Услуги', sectionId: 'services-section' },
    { href: '/agreement', icon: AgreementIcon, text: 'Пользовательское соглашение' },
  ]

  const isActive = (path: string) => {
    if (pathname !== '/') return pathname === path
    return activeSection === path.replace('#', '')
  }

  // Обработчик плавной прокрутки
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== '/' || !href.startsWith('#')) return

    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(`${targetId}-section`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Отслеживаем видимые секции
  useEffect(() => {
    if (pathname !== '/') return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id.replace('-section', '')
        if (entry.isIntersecting) {
          setActiveSection(sectionId)
        } else if (activeSection === sectionId) {
          // Если секция покидает viewport и была активной, проверяем другие видимые секции
          const visibleSections = Array.from(document.querySelectorAll('[id$="-section"]')).filter(
            (section) => {
              const rect = section.getBoundingClientRect()
              return rect.top >= 0 && rect.bottom <= window.innerHeight
            }
          )
          if (visibleSections.length > 0) {
            setActiveSection(visibleSections[0].id.replace('-section', ''))
          } else {
            setActiveSection('')
          }
        }
      })
    }, {
      threshold: [0, 0.5, 1],
      rootMargin: '-50% 0px -50% 0px' // Активация только когда секция в центре viewport
    })

    navItems.forEach((item) => {
      if (item.sectionId) {
        const element = document.getElementById(item.sectionId)
        if (element) observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [pathname, activeSection])

  // Отслеживаем скролл для прозрачности хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Блокируем скролл при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Имитация прогресса загрузки
  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isLoading) {
      setLoadingProgress(0)
      interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 70) {
            clearInterval(interval)
            return 70
          }
          return prev + 2
        })
      }, 300)
    } else {
      setLoadingProgress(100)
      setTimeout(() => {
        setLoadingProgress(0)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isLoading])

  // Отслеживание событий навигации
  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
    }

    const handleComplete = () => {
      setIsLoading(false)
    }

    window.addEventListener('beforeunload', handleStart)
    document.addEventListener('DOMContentLoaded', handleComplete)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      document.removeEventListener('DOMContentLoaded', handleComplete)
    }
  }, [])

  return (
    <header className={`fixed w-full h-[70px] md:h-[80px] lg:h-[90px] xl:h-[97px] bg-black z-50 transition-all duration-300 ${
      isScrolled ? 'bg-opacity-95 backdrop-blur-sm' : ''
    }`}>
      {/* Полоска загрузки сайта */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#1E0242] z-[60]">
        <div 
          className={`h-full bg-gradient-to-r from-[#7F01D2] to-[#AA01D2] transition-all duration-700 ease-out ${
            loadingProgress > 0 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            width: `${loadingProgress}%`,
            transition: loadingProgress === 100 ? 'all 1s ease-out' : 'all 0.7s ease-out' 
          }}
        />
      </div>

      {/* Нижняя полоса */}
      <div className="absolute w-full h-[3px] md:h-[4px] left-0 bottom-0 bg-[#0B0B0B]" />

      <div className="max-w-[1920px] mx-auto relative h-full px-4 lg:px-8 xl:px-[178px]">
        {/* Логотип */}
        <Link 
          href="/" 
          className="absolute left-4 md:left-6 lg:left-[50px] xl:left-[178px] top-1/2 -translate-y-1/2 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/SolarStudioDark.png"
            alt="Solar Studio" 
            width={173} 
            height={63}
            className="w-[100px] h-[37px] md:w-[120px] md:h-[44px] lg:w-[140px] lg:h-[51px] xl:w-[173px] xl:h-[63px]"
            priority
          />
        </Link>

        {/* Навигация - Десктоп */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-[40px] xl:gap-[60px]">
          {navItems.map((item) => {
            const Icon = item.icon
            const isCurrentPage = isActive(item.href)
            return (
              <Link 
                key={item.href}
                href={item.href} 
                onClick={(e) => handleScroll(e, item.href)}
                className="flex items-center group relative py-2"
              >
                <div className="relative">
                  {/* Иконка */}
                  <Icon className={`w-4 h-4 lg:w-[18px] lg:h-[18px] xl:w-5 xl:h-5 relative transition-all duration-300 ${
                    isCurrentPage 
                      ? 'text-[#7F01D2]' 
                      : 'text-[#B6B6B6] group-hover:text-[#7F01D2]'
                  }`} />
                  {/* Индикатор активной страницы */}
                  <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#7F01D2] rounded-full transition-opacity duration-300 ${
                    isCurrentPage ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
                {/* Текст */}
                <span className={`ml-[15px] lg:ml-[18px] xl:ml-[20px] font-montserrat text-[14px] lg:text-[16px] xl:text-[20px] leading-[20px] lg:leading-[24px] transition-all duration-300 ${
                  isCurrentPage 
                    ? 'text-[#7F01D2] font-semibold' 
                    : 'text-[#B6B6B6] font-medium group-hover:text-[#7F01D2] group-hover:font-semibold'
                } whitespace-nowrap`}>
                  {item.text}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* Кнопка входа - Десктоп */}
        <div className="hidden lg:block absolute right-4 lg:right-[50px] xl:right-[178px] top-1/2 -translate-y-1/2">
          <Button variant="header">
            Войти
          </Button>
        </div>

        {/* Мобильное меню */}
        <div className="lg:hidden">
          {/* Мобильная кнопка входа */}
          <div className="lg:hidden absolute right-16 md:right-20 top-1/2 -translate-y-1/2">
            <Button variant="header">
              Войти
            </Button>
          </div>

          {/* Бургер кнопка */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex flex-col justify-center items-center gap-[6px] z-50"
          >
            <span className={`w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
            }`} />
            <span className={`w-6 h-[2px] bg-white rounded-full transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
            }`} />
          </button>

          {/* Мобильное меню */}
          <div className={`fixed inset-0 bg-black transition-all duration-300 ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100 visible pointer-events-auto' 
              : '-translate-y-full opacity-0 invisible pointer-events-none'
          }`}>
            <div className="pt-[100px] px-4">
              <nav className="flex flex-col gap-8">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isCurrentPage = isActive(item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center group"
                    >
                      <div className="relative">
                        <Icon className={`w-5 h-5 transition-all duration-300 ${
                          isCurrentPage 
                            ? 'text-[#7F01D2]' 
                            : 'text-[#B6B6B6] group-hover:text-[#7F01D2]'
                        }`} />
                      </div>
                      <span className={`ml-4 font-montserrat text-[18px] leading-[22px] transition-all duration-300 ${
                        isCurrentPage 
                          ? 'text-[#7F01D2] font-semibold' 
                          : 'text-[#B6B6B6] font-medium group-hover:text-[#7F01D2] group-hover:font-semibold'
                      }`}>
                        {item.text}
                      </span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 
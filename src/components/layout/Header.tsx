'use client'

import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CartIcon, ServicesIcon, ReviewsIcon, AgreementIcon } from '@/components/icons'
import { Button } from '@/components/ui/Button'

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { href: '/products', icon: CartIcon, text: 'Товары' },
    { href: '/services', icon: ServicesIcon, text: 'Услуги' },
    { href: '/reviews', icon: ReviewsIcon, text: 'Отзывы' },
    { href: '/agreement', icon: AgreementIcon, text: 'Пользовательское соглашение' },
  ]

  const isActive = (path: string) => pathname === path

  // Отслеживаем скролл
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
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

  return (
    <header className={`fixed w-full h-[70px] md:h-[80px] lg:h-[90px] xl:h-[97px] bg-black z-50 transition-all duration-300 ${
      isScrolled ? 'bg-opacity-95 backdrop-blur-sm' : ''
    }`}>
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
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isCurrentPage = isActive(item.href)
            return (
              <Link 
                key={item.href}
                href={item.href} 
                className="flex items-center group relative py-2"
              >
                <div className="relative">
                  {/* Иконка */}
                  <Icon className={`w-4 h-4 lg:w-[18px] lg:h-[18px] xl:w-5 xl:h-5 relative transition-colors duration-300 ${
                    isCurrentPage 
                      ? 'text-white' 
                      : 'text-[#B6B6B6] group-hover:text-white'
                  }`} />
                  {/* Индикатор активной страницы */}
                  <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full transition-opacity duration-300 ${
                    isCurrentPage ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
                {/* Текст */}
                <span className={`ml-[15px] lg:ml-[18px] xl:ml-[20px] font-montserrat font-medium text-[14px] lg:text-[16px] xl:text-[20px] leading-[20px] lg:leading-[24px] transition-colors duration-300 ${
                  isCurrentPage 
                    ? 'text-white' 
                    : 'text-[#B6B6B6] group-hover:text-white'
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
                        <Icon className={`w-5 h-5 transition-colors duration-300 ${
                          isCurrentPage 
                            ? 'text-white' 
                            : 'text-[#B6B6B6] group-hover:text-white'
                        }`} />
                      </div>
                      <span className={`ml-4 font-montserrat font-medium text-[18px] leading-[22px] transition-colors duration-300 ${
                        isCurrentPage 
                          ? 'text-white' 
                          : 'text-[#B6B6B6] group-hover:text-white'
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
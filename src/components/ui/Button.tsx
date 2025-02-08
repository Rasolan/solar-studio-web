'use client'

import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import './Button.styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'header' | 'card' | 'accent' | 'modal'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  price?: string
  href?: string
  isExternal?: boolean
}

export const Button: FC<ButtonProps> = ({
  variant = 'accent',
  size = 'md',
  className = '',
  fullWidth = false,
  children,
  price,
  href,
  isExternal,
  ...props
}) => {
  const buttonClasses = cn(
    "relative group overflow-hidden rounded-[12px_36px] sm:rounded-[18px_54px] transition-all duration-300",
    {
      'relative flex flex-row justify-center items-center w-full sm:w-[140px] md:w-[150px] lg:w-[160px] h-[45px] sm:h-[50px] md:h-[55px] lg:h-[59px] px-4 sm:px-[25px] py-2 sm:py-[12px] gap-2 sm:gap-[10px] bg-[#6E0CA9] rounded-[14px] sm:rounded-[20px] hover:bg-[#8110CC] active:bg-[#5A0A8A] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6E0CA9]/20 active:scale-[0.98] active:shadow-none': variant === 'header',
      
      'flex items-center justify-center w-full sm:w-[307.82px] h-[45px] sm:h-[49.25px] bg-[rgba(215,182,255,0.2)] backdrop-blur-[32.1px] rounded-[8px_32px] sm:rounded-[9px_44px] hover:bg-[rgba(215,182,255,0.3)] active:scale-[0.98] hover:shadow-lg hover:shadow-purple-500/20 card-glow': variant === 'card',
      
      'group flex flex-row justify-center items-center w-full sm:w-[415px] h-[70px] sm:h-[85px] lg:h-[105px] px-4 sm:px-[203px] py-4 sm:py-[24px] gap-2 sm:gap-[10px] bg-[linear-gradient(90deg,rgba(88,0,255,0.2)_1%,rgba(197,0,255,0.2)_100%)] backdrop-blur-[32.1px] hover:bg-[rgba(215,182,255,0.3)] hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-purple-500/20 before:absolute before:inset-0 before:rounded-[12px_36px] sm:before:rounded-[18px_54px] before:p-[1px] before:bg-gradient-to-r before:from-[#5800FF] before:to-[#C500FF] before:opacity-20 before:transition-opacity before:group-hover:opacity-40': variant === 'accent',
      
      'flex items-center justify-center w-full sm:w-[200px] h-[45px] sm:h-[50px] bg-[rgba(215,182,255,0.2)] backdrop-blur-[32.1px] rounded-[8px_32px] sm:rounded-[9px_44px] hover:bg-[rgba(215,182,255,0.3)] active:scale-[0.98] hover:shadow-lg hover:shadow-purple-500/20': variant === 'modal',
    },
    {
      'w-full sm:w-[415px] h-[70px] sm:h-[85px] lg:h-[105px]': size === 'xl',
    },
    {
      'w-full': fullWidth,
    },
    className
  )

  const content = (
    <>
      {variant === 'header' ? (
        <span className="button-text w-full sm:w-[100px] lg:w-[110px] h-[20px] sm:h-[30px] lg:h-[35px] font-unbounded font-medium text-[14px] sm:text-[22px] lg:text-[28px] leading-[18px] sm:leading-[28px] lg:leading-[35px] text-white flex items-center justify-center">
          {children}
        </span>
      ) : variant === 'card' ? (
        <div className="relative z-10 flex items-center gap-2">
          <span className="button-text font-['Actay_Wide'] font-bold text-[18px] sm:text-[24px] leading-[125.6%] text-white tracking-[-0.01em] transition-all duration-300 group-hover:scale-105 group-hover:text-opacity-90">
            {children}
          </span>
          {price && (
            <span className="button-text font-['Actay_Wide'] font-bold text-[18px] sm:text-[24px] leading-[125.6%] text-white tracking-[-0.01em] transition-all duration-300 group-hover:scale-105 group-hover:text-opacity-90">
              {price}
            </span>
          )}
        </div>
      ) : variant === 'modal' ? (
        <span className="button-text font-['Actay_Wide'] font-bold text-[18px] sm:text-[24px] leading-[125.6%] text-white tracking-[-0.01em] transition-all duration-300 group-hover:scale-105 group-hover:text-opacity-90">
          {children}
        </span>
      ) : (
        <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-[10px]">
          <span className="w-full sm:w-[343px] h-[30px] sm:h-[37px] font-['Actay_Wide'] font-bold text-[24px] sm:text-[40px] leading-[30px] sm:leading-[51px] text-white flex items-center transition-transform duration-300 group-hover:scale-105">
            {children}
          </span>
          {price && (
            <span className="w-[80px] sm:w-[117px] h-[30px] sm:h-[38px] font-['Actay_Wide'] font-bold text-[20px] sm:text-[30px] leading-[125.6%] text-white flex items-center opacity-0 transform translate-x-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              {price}
            </span>
          )}
        </div>
      )}
    </>
  )

  if (href) {
    if (isExternal) {
      return (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {content}
        </a>
      )
    }
    return (
      <Link 
        href={href}
        className={buttonClasses}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {content}
    </button>
  )
}
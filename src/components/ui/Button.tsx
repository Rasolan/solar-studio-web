'use client'

import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/lib/utils'
import './Button.styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'header' | 'card'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  price?: string
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  price,
  ...props
}) => {
  return (
    <button
      className={cn(
        "relative group overflow-hidden rounded-[18px_54px] transition-all duration-300",
        {
          'bg-primary text-white hover:opacity-90 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] active:shadow-none rounded-[35px]': variant === 'primary',
          'bg-secondary text-white hover:opacity-90 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98] active:shadow-none rounded-[35px]': variant === 'secondary',
          'border-2 border-primary text-primary hover:bg-primary/5 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] active:shadow-none rounded-[35px]': variant === 'outline',
          'relative flex flex-row justify-center items-center w-[160px] h-[59px] px-[25px] py-[12px] gap-[10px] bg-[#6E0CA9] rounded-[20px] hover:bg-[#8110CC] active:bg-[#5A0A8A] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6E0CA9]/20 active:scale-[0.98] active:shadow-none sm:w-[140px] sm:h-[50px] md:w-[150px] md:h-[55px] lg:w-[160px] lg:h-[59px]': variant === 'header',
          'flex items-center justify-center w-[307.82px] h-[49.25px] bg-[rgba(215,182,255,0.2)] backdrop-blur-[32.1px] rounded-[9px_44px] hover:bg-[rgba(215,182,255,0.3)] active:scale-[0.98] hover:shadow-lg hover:shadow-purple-500/20 card-glow': variant === 'card',
          'group flex flex-row justify-center items-center w-[415px] h-[105px] px-[203px] py-[24px] gap-[10px] bg-[linear-gradient(90deg,rgba(88,0,255,0.2)_1%,rgba(197,0,255,0.2)_100%)] backdrop-blur-[32.1px] hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-purple-500/20 before:absolute before:inset-0 before:rounded-[18px_54px] before:p-[1px] before:bg-gradient-to-r before:from-[#5800FF] before:to-[#C500FF] before:opacity-20 before:transition-opacity before:group-hover:opacity-40': variant === 'accent',
        },
        {
          'w-full sm:w-[415px] h-[70px] sm:h-[85px] lg:h-[105px]': size === 'xl',
        },
        {
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {variant === 'header' ? (
        <span className="button-text w-[80px] sm:w-[100px] lg:w-[110px] h-[25px] sm:h-[30px] lg:h-[35px] font-unbounded font-medium text-[16px] sm:text-[22px] lg:text-[28px] leading-[20px] sm:leading-[28px] lg:leading-[35px] text-white flex items-center justify-center">
          {children}
        </span>
      ) : variant === 'card' ? (
        <div className="relative z-10 flex items-center gap-2">
          <span className="button-text font-['Actay_Wide'] font-bold text-[24px] leading-[125.6%] text-white tracking-[-0.01em] transition-all duration-300 group-hover:scale-105 group-hover:text-opacity-90">
            {children}
          </span>
          <span className="button-text font-['Actay_Wide'] font-bold text-[24px] leading-[125.6%] text-white tracking-[-0.01em] transition-all duration-300 group-hover:scale-105 group-hover:text-opacity-90">
            {price}
          </span>
        </div>
      ) : variant === 'accent' ? (
        <div className="relative z-10 flex items-center justify-center gap-[10px]">
          <span className="w-[343px] h-[37px] font-['Actay_Wide'] font-bold text-[40px] leading-[51px] text-white flex items-center transition-transform duration-300 group-hover:scale-105">
            {children}
          </span>
          {price && (
            <span className="w-[117px] h-[38px] font-['Actay_Wide'] font-bold text-[30px] leading-[125.6%] text-white flex items-center opacity-0 transform translate-x-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              {price}
            </span>
          )}
        </div>
      ) : (
        <span className="button-text relative z-10 transition-transform duration-300 group-hover:scale-105">
          {children}
        </span>
      )}
    </button>
  )
} 
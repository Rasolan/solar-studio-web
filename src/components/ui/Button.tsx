import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient' | 'outline' | 'header'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        'relative font-medium transition-all duration-300 overflow-hidden flex items-center justify-center group',
        {
          'bg-primary text-white hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 rounded-[35px]': variant === 'primary',
          'bg-secondary text-white hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 rounded-[35px]': variant === 'secondary',
          'bg-gradient-to-r from-[#5E0EFF] to-[#7A0099] text-white hover:-translate-y-1 active:translate-y-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#7A0099] before:to-[#5E0EFF] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500 active:scale-[0.98] active:before:opacity-80 active:from-[#4B0BCC] active:to-[#610077] rounded-[35px]': variant === 'gradient',
          'border-2 border-primary text-primary hover:bg-primary/10 hover:-translate-y-0.5 active:translate-y-0 rounded-[35px]': variant === 'outline',
          'bg-[linear-gradient(94.94deg,#8800FF_0%,#A200FF_100%)] text-white hover:-translate-y-1 active:translate-y-0 before:absolute before:inset-0 before:bg-[linear-gradient(94.94deg,#A200FF_0%,#8800FF_100%)] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500 active:scale-[0.98] active:before:opacity-80 active:bg-[linear-gradient(94.94deg,#6600CC_0%,#8000CC_100%)] rounded-[20px]': variant === 'header',
        },
        {
          'px-4 py-2 text-base': size === 'sm',
          'px-6 py-3 text-lg': size === 'md',
          'px-8 py-4 text-xl': size === 'lg',
          'w-[100px] h-[37px] sm:w-[134px] sm:h-[50px] lg:w-[167px] lg:h-[62px]': variant === 'header',
          'w-full sm:w-[415px] h-[70px] sm:h-[85px] lg:h-[105px]': size === 'xl' && variant !== 'header',
        },
        {
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {variant === 'header' ? (
        <span className="relative z-10 font-unbounded font-medium text-[16px] sm:text-[22px] lg:text-[28px] leading-[20px] sm:leading-[28px] lg:leading-[35px] text-center">
          {children}
        </span>
      ) : size === 'xl' ? (
        <span className="relative z-10 font-[Actay Wide] font-bold text-[24px] sm:text-[32px] lg:text-[40px] leading-tight lg:leading-[51px] text-center">
          {children}
        </span>
      ) : (
        <span className="relative z-10">
          {children}
        </span>
      )}
    </button>
  )
} 
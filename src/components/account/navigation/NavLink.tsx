import { FC, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  icon: (props: { isActive: boolean }) => ReactNode
  label: string
  isActive?: boolean
  onClick?: () => void
}

export const NavLink: FC<NavLinkProps> = ({ 
  href, 
  icon, 
  label, 
  isActive = false,
  onClick 
}) => {
  return (
    <Link 
      href={href}
      className={cn(
        "flex items-center gap-6 py-3 transition-colors duration-300",
        isActive 
          ? "text-[#F4E7FF]" 
          : "text-[#5D5D5D] hover:text-[#F4E7FF]"
      )}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
      }}
    >
      {icon({ isActive })}
      <span className="font-unbounded font-semibold text-[20px] leading-[25px] whitespace-nowrap">
        {label}
      </span>
    </Link>
  )
} 
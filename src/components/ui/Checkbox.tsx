'use client'

import { FC, InputHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string | React.ReactNode
  error?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  error,
  className,
  disabled,
  checked,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <label className="relative flex items-start gap-3 cursor-pointer group">
        <div className="relative shrink-0 w-5 h-5">
          <input
            type="checkbox"
            className="peer sr-only"
            disabled={disabled}
            checked={checked}
            {...props}
          />
          <div className={cn(
            "absolute inset-0 rounded-[4px] border transition-all duration-200",
            "bg-[rgba(215,182,255,0.1)] backdrop-blur-[32.1px]",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-[#7F01D2]/20",
            "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
            error 
              ? "border-red-500/50" 
              : "border-[rgba(215,182,255,0.2)] group-hover:border-[rgba(215,182,255,0.3)]",
            checked && "border-[#7F01D2] bg-[#7F01D2]/10"
          )} />
          {checked && (
            <motion.svg
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 w-5 h-5 text-[#7F01D2] transition-colors duration-200"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10L8.5 13.5L15 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </div>
        <span className="font-unbounded text-[14px] sm:text-[16px] text-[#B6B6B6] group-hover:text-white transition-colors duration-200">
          {label}
        </span>
      </label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-[12px] font-unbounded"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
} 
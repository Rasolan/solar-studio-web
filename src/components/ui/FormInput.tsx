'use client'

import { FC, InputHTMLAttributes, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  success?: boolean
  showPasswordToggle?: boolean
}

export const FormInput: FC<FormInputProps> = ({
  label,
  error,
  success,
  className,
  showPasswordToggle,
  type = 'text',
  disabled,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  useEffect(() => {
    setHasValue(Boolean(value))
  }, [value])

  const inputType = showPasswordToggle 
    ? (showPassword ? 'text' : 'password')
    : type

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="block font-unbounded text-[14px] sm:text-[16px] text-[#B6B6B6] transition-colors duration-200">
          {label}
        </label>
        <AnimatePresence mode="wait">
          {hasValue && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-2"
            >
              {error ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF4B4B" strokeWidth="2"/>
                  <path d="M15 9L9 15M9 9L15 15" stroke="#FF4B4B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : success ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4BB543" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="#4BB543" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="relative">
        <input
          type={inputType}
          disabled={disabled}
          value={value}
          className={cn(
            "w-full h-[50px] px-4 rounded-[12px] bg-[rgba(215,182,255,0.1)] backdrop-blur-[32.1px] border font-unbounded text-[16px] text-white transition-all duration-200",
            "focus:outline-none focus:border-[#7F01D2] focus:ring-2 focus:ring-[#7F01D2]/20",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "placeholder:text-[#B6B6B6]/50",
            error 
              ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20" 
              : success && hasValue
                ? "border-[#4BB543]/50 focus:border-[#4BB543] focus:ring-[#4BB543]/20"
                : isFocused
                  ? "border-[#7F01D2]"
                  : "border-[rgba(215,182,255,0.2)] hover:border-[rgba(215,182,255,0.3)]",
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {showPasswordToggle && (
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B6B6B6] hover:text-white transition-colors duration-200"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15Z" fill="currentColor"/>
                <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        )}

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full mt-2 w-full"
            >
              <div className="flex items-start gap-2 text-red-500">
                <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM8 4v4M8 12h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="font-unbounded text-[12px] leading-5">{error}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
} 
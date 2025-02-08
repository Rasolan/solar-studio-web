'use client'

import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { FormInput } from '@/components/ui/FormInput'
import Link from 'next/link'
import { validateLoginForm, validateLogin, validatePassword, type LoginFormData, type ValidationErrors } from '@/lib/validation'

export const LoginForm: FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    login: '',
    password: ''
  })
  
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [validFields, setValidFields] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string) => {
    let fieldError: string | undefined

    switch (name) {
      case 'login':
        fieldError = validateLogin(value)
        break
      case 'password':
        fieldError = validatePassword(value)
        break
    }

    setErrors(prev => ({
      ...prev,
      [name]: fieldError
    }))

    setValidFields(prev => ({
      ...prev,
      [name]: !fieldError && value.length > 0
    }))

    return !fieldError
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Валидация формы
    const validationErrors = validateLoginForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsLoading(true)
    
    try {
      // Здесь будет логика авторизации
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Авторизация успешна:', formData)
    } catch (error) {
      setErrors({
        general: 'Произошла ошибка при авторизации'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    validateField(name, value)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    validateField(name, value)
  }

  return (
    <motion.form 
      className="space-y-6 w-full"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
    >
      {/* Кнопка возврата */}
      <Link href="/" className="flex justify-center mb-6">
        <motion.div
          className="flex items-center gap-2 text-[#B6B6B6] hover:text-white transition-colors group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45">
            <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-unbounded text-[14px] sm:text-[16px]">вернуться на главную</span>
        </motion.div>
      </Link>

      {/* Общая ошибка */}
      {errors.general && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-[12px] bg-red-500/10 border border-red-500/20"
        >
          <p className="text-red-500 text-[14px] text-center font-montserrat">{errors.general}</p>
        </motion.div>
      )}

      {/* Логин */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <FormInput
          label="Логин"
          name="login"
          value={formData.login}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isLoading}
          error={errors.login}
          success={validFields.login}
          placeholder="Введите логин"
        />
      </motion.div>

      {/* Пароль */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <FormInput
          label="Пароль"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isLoading}
          error={errors.password}
          success={validFields.password}
          placeholder="Введите пароль"
          showPasswordToggle
        />
      </motion.div>

      {/* Кнопка */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex justify-center"
      >
        <Button 
          variant="accent"
          className="!h-[60px] sm:!h-[65px] !text-[20px] sm:!text-[24px] w-full !px-6 flex items-center justify-center text-center font-['Actay_Wide'] font-bold"
          type="submit"
          disabled={isLoading}
        >
          <span className="flex items-center justify-center w-full whitespace-nowrap sm:scale-[0.6] font-['Actay_Wide']">
            {isLoading ? 'Вход...' : 'Войти'}
          </span>
        </Button>
      </motion.div>

      {/* Забыли пароль */}
      <motion.div 
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button 
          type="button"
          disabled={isLoading}
          className="font-unbounded text-[14px] sm:text-[16px] text-[#B6B6B6] hover:text-white transition-colors hover:scale-105 active:scale-95 transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Забыли пароль?
        </button>
      </motion.div>
    </motion.form>
  )
} 
'use client'

import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { FormInput } from '@/components/ui/FormInput'
import { Checkbox } from '@/components/ui/Checkbox'
import Link from 'next/link'
import { 
  validateRegisterForm, 
  validateLogin,
  validatePassword,
  validateConfirmPassword,
  type RegisterFormData, 
  type ValidationErrors 
} from '@/lib/validation'

export const RegisterForm: FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    login: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [validFields, setValidFields] = useState<Record<string, boolean>>({})
  const [acceptTerms, setAcceptTerms] = useState(false)

  const validateField = (name: string, value: string) => {
    let fieldError: string | undefined

    switch (name) {
      case 'login':
        fieldError = validateLogin(value)
        break
      case 'password':
        fieldError = validatePassword(value)
        break
      case 'confirmPassword':
        fieldError = validateConfirmPassword(formData.password, value)
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
    
    if (!acceptTerms) {
      setErrors(prev => ({
        ...prev,
        terms: 'Необходимо принять условия договора оферты'
      }))
      return
    }

    // Валидация формы
    const validationErrors = validateRegisterForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsLoading(true)
    
    try {
      // Здесь будет логика регистрации
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Регистрация успешна:', formData)
    } catch (error) {
      setErrors({
        general: 'Произошла ошибка при регистрации'
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

      {/* Подтверждение пароля */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <FormInput
          label="Повторите пароль"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isLoading}
          error={errors.confirmPassword}
          success={validFields.confirmPassword}
          placeholder="Повторите пароль"
          showPasswordToggle
        />
      </motion.div>

      {/* Капча */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 rounded-[12px] border border-[rgba(215,182,255,0.2)] bg-[rgba(215,182,255,0.1)] backdrop-blur-[32.1px]"
      >
        <p className="font-unbounded text-[14px] sm:text-[16px] text-[#B6B6B6] text-center">
          Здесь будет капча
        </p>
      </motion.div>

      {/* Согласие с условиями */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Checkbox
          checked={acceptTerms}
          onChange={(e) => {
            setAcceptTerms(e.target.checked)
            if (e.target.checked) {
              setErrors(prev => ({ ...prev, terms: undefined }))
            }
          }}
          error={errors.terms}
          label={
            <span>
              Я подтверждаю, что полностью ознакомился (-лась) с{' '}
              <Link 
                href="/agreement" 
                className="text-[#7F01D2] hover:text-[#9B01FF] transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                договором оферты
              </Link>
            </span>
          }
        />
      </motion.div>

      {/* Кнопка */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex justify-center"
      >
        <Button 
          variant="accent"
          className="!h-[60px] sm:!h-[65px] !text-[20px] sm:!text-[24px] w-full !px-6 flex items-center justify-center text-center font-['Actay_Wide'] font-bold"
          type="submit"
          disabled={isLoading}
        >
          <span className="flex items-center justify-center w-full whitespace-nowrap sm:scale-[0.6] font-['Actay_Wide']">
            {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
          </span>
        </Button>
      </motion.div>
    </motion.form>
  )
}

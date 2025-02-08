'use client'

import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { FormInput } from '@/components/ui/FormInput'
import { Button } from '@/components/ui/Button'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

interface SettingsSectionProps {
  username: string
  email: string
}

export const SettingsSection: FC<SettingsSectionProps> = ({ username = 'm1ghty', email = 'm1ghty@gmail.com' }) => {
  const [formData, setFormData] = useState({
    username,
    email,
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <motion.div 
      className="flex-1 pl-[80px] pt-[27px] pb-[72px] h-full"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Заголовок */}
      <motion.h1 
        className="font-unbounded font-semibold text-[64px] leading-[79px] text-white mb-[55px]"
        variants={item}
      >
        Настройки аккаунта
      </motion.h1>

      <motion.div className="space-y-[74px]" variants={container}>
        {/* Никнейм */}
        <motion.div variants={item}>
          <label className="block font-unbounded font-semibold text-[20px] leading-[25px] text-[#676767] mb-[12px]">
            Никнейм
          </label>
          <div className="w-[857px] h-[89px] bg-[#1F1F1F] border-2 border-[#343434] rounded-[20px] flex items-center px-[31px]">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full bg-transparent font-unbounded font-light text-[24px] leading-[30px] text-white focus:outline-none"
            />
          </div>
        </motion.div>

        {/* Почта */}
        <motion.div variants={item}>
          <label className="block font-unbounded font-semibold text-[20px] leading-[25px] text-[#676767] mb-[12px]">
            Почта
          </label>
          <div className="w-[857px] h-[89px] bg-[#1F1F1F] border-2 border-[#343434] rounded-[20px] flex items-center px-[31px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent font-unbounded font-light text-[24px] leading-[30px] text-white focus:outline-none"
            />
          </div>
        </motion.div>

        {/* Пароль */}
        <motion.div variants={item}>
          <label className="block font-unbounded font-semibold text-[20px] leading-[25px] text-[#676767] mb-[12px]">
            Пароль
          </label>
          <div className="w-[857px] h-[89px] bg-[#1F1F1F] border-2 border-[#343434] rounded-[20px] flex items-center px-[31px]">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Введите новый пароль"
              className="w-full bg-transparent font-unbounded font-light text-[24px] leading-[30px] text-[#414141] focus:outline-none placeholder:text-[#414141]"
            />
          </div>
        </motion.div>

        {/* Кнопки */}
        <motion.div className="flex gap-[48px]" variants={item}>
          <button className="w-[212px] h-[74px] bg-[#131313] border-2 border-[#1D1D1D] rounded-[20px] font-unbounded font-light text-[24px] leading-[30px] text-white hover:bg-[#1a1a1a] transition-colors">
            Сохранить
          </button>
          <button className="w-[319px] h-[74px] bg-[#131313] border-2 border-[#1D1D1D] rounded-[20px] font-unbounded font-light text-[24px] leading-[30px] text-white hover:bg-[#1a1a1a] transition-colors">
            Сбросить пароль
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 
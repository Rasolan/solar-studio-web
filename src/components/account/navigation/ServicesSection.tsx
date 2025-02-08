'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from './NavLink'
import { CartAddIcon, BagTickIcon } from '@/components/icons/account'

interface ServicesSectionProps {
  onSectionChange: (section: string) => void
  activeSection: string
  onShowPaid: () => void
  onShowFree: () => void
}

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

const paidCategories = [
  { id: 1, title: 'Сборки', section: 'builds' },
  { id: 2, title: 'Плагины', section: 'plugins' },
  { id: 3, title: 'Карты', section: 'maps' },
]

export const ServicesSection: FC<ServicesSectionProps> = ({ 
  onSectionChange, 
  activeSection,
  onShowPaid,
  onShowFree
}) => {
  const handlePaidClick = () => {
    onShowPaid()
    // Автоматически активируем первую подкатегорию
    onSectionChange(paidCategories[0].section)
  }

  const handleFreeClick = () => {
    onShowFree()
    // Автоматически активируем первую подкатегорию для бесплатных услуг
    onSectionChange('free-builds')
  }

  return (
    <motion.div 
      className="space-y-6"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.h2 
        variants={item}
        className="font-unbounded font-semibold text-[32px] leading-[40px] bg-gradient-to-r from-[#C881FF] to-[#783DA5] bg-clip-text text-transparent"
      >
        Наши услуги
      </motion.h2>

      <motion.div className="space-y-4" variants={container}>
        <motion.div variants={item}>
          <NavLink 
            href="#"
            icon={({ isActive }) => <CartAddIcon className="w-[39px] h-[39px]" isActive={isActive} />}
            label="Покупка услуг"
            isActive={paidCategories.some(cat => activeSection === cat.section)}
            onClick={handlePaidClick}
          />
        </motion.div>

        <motion.div variants={item}>
          <NavLink 
            href="#"
            icon={({ isActive }) => <BagTickIcon className="w-[39px] h-[39px] stroke-[3]" isActive={isActive} />}
            label="Бесплатно"
            isActive={activeSection.startsWith('free-')}
            onClick={handleFreeClick}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 
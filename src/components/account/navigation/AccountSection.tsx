'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from './NavLink'
import { WalletIcon, SettingsIcon } from '@/components/icons/account'

interface AccountSectionProps {
  onSectionChange: (section: string) => void
  activeSection: string
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

export const AccountSection: FC<AccountSectionProps> = ({ onSectionChange, activeSection }) => {
  return (
    <motion.div 
      className="space-y-6"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.h2 
        className="font-unbounded font-semibold text-[32px] leading-[40px] bg-gradient-to-r from-[#C881FF] to-[#783DA5] bg-clip-text text-transparent"
        variants={item}
      >
        Аккаунт
      </motion.h2>
      <motion.div 
        className="space-y-4"
        variants={container}
      >
        <motion.div variants={item}>
          <NavLink 
            href="#"
            icon={({ isActive }) => <WalletIcon className="w-[37px] h-[37px]" isActive={isActive} />}
            label="Финансы"
            isActive={activeSection === 'finances'}
            onClick={() => onSectionChange('finances')}
          />
        </motion.div>
        <motion.div variants={item}>
          <NavLink 
            href="#"
            icon={({ isActive }) => <SettingsIcon className="w-[40px] h-[40px] stroke-[3]" isActive={isActive} />}
            label="Настройки"
            isActive={activeSection === 'settings'}
            onClick={() => onSectionChange('settings')}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 
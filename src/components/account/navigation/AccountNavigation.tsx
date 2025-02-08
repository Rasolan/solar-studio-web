'use client'

import { FC, useState } from 'react'
import { AccountSection } from './AccountSection'
import { PurchasesSection } from './PurchasesSection'
import { ServicesSection } from './ServicesSection'
import { motion } from 'framer-motion'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { FinancesSection } from '../finances/FinancesSection'
import { SettingsSection } from '../settings/SettingsSection'
import { UserProfile } from './UserProfile'

interface AccountNavigationProps {
  onSectionChange: (section: string) => void
  activeSection: string
}

const paidCategories = [
  { id: 1, title: 'Сборки', section: 'builds' },
  { id: 2, title: 'Плагины', section: 'plugins' },
  { id: 3, title: 'Карты', section: 'maps' },
]

const freeCategories = [
  { id: 1, title: 'Сборки', section: 'free-builds' },
  { id: 2, title: 'Плагины', section: 'free-plugins' },
  { id: 3, title: 'Карты', section: 'free-maps' },
]

// Общие анимации для всех компонентов
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

export const AccountNavigation: FC<AccountNavigationProps> = ({ onSectionChange, activeSection }) => {
  const [showCategories, setShowCategories] = useState<'none' | 'paid' | 'free'>('none')

  const handleShowCategories = (type: 'paid' | 'free') => {
    setShowCategories(type)
    if (type === 'paid') {
      onSectionChange('builds')
    } else {
      onSectionChange('free-builds')
    }
  }

  const handleBackToCategories = () => {
    setShowCategories('none')
    onSectionChange('purchases') // Возвращаемся к покупкам по умолчанию
  }

  const shouldShowPaidCategories = paidCategories.some(cat => activeSection === cat.section)
  const shouldShowFreeCategories = activeSection.startsWith('free-')

  if (shouldShowPaidCategories || shouldShowFreeCategories) {
    const categories = shouldShowPaidCategories ? paidCategories : freeCategories
    
    return (
      <motion.nav 
        className="w-[360px] h-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="p-8 space-y-8">
          <motion.div variants={item}>
            <UserProfile username="m1ghty" balance={0} />
          </motion.div>
          
          <div className="space-y-16">
            <div>
              <div className="space-y-[44px]">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    variants={item}
                  >
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        onSectionChange(category.section)
                      }}
                      className={`
                        box-border
                        block
                        ${category.section.includes('builds') && 'w-[184px]'}
                        ${category.section.includes('plugins') && 'w-[212px]'}
                        ${category.section.includes('maps') && 'w-[165px]'}
                        h-[62px]
                        rounded-[20px]
                        border-2
                        border-[#C881FF]
                        relative
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.4,0,0.2,1)]
                        hover:scale-[1.02]
                        hover:shadow-lg
                        hover:bg-[rgba(200,129,255,0.1)]
                      `}
                    >
                      <span 
                        className={`
                          absolute
                          left-1/2
                          top-1/2
                          -translate-x-1/2
                          -translate-y-1/2
                          font-unbounded
                          font-semibold
                          text-[32px]
                          leading-[40px]
                          ${category.section.includes('builds') && 'w-[156px]'}
                          ${category.section.includes('plugins') && 'w-[182px]'}
                          ${category.section.includes('maps') && 'w-[130px]'}
                          bg-gradient-to-r
                          from-[#C881FF]
                          to-[#783DA5]
                          bg-clip-text
                          text-transparent
                          text-center
                          transition-transform
                          duration-500
                          ease-[cubic-bezier(0.4,0,0.2,1)]
                          group-hover:-translate-y-1
                        `}
                      >
                        {category.title}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={item}
                className="mt-8"
              >
                <button 
                  onClick={handleBackToCategories}
                  className="inline-flex items-center gap-[14px] group"
                >
                  <ChevronLeftIcon className="w-7 h-7 text-[#5E5E5E] transform rotate-90 group-hover:text-[#C881FF] transition-colors duration-300" />
                  <span className="font-unbounded font-semibold text-base leading-5 text-[#5E5E5E] group-hover:text-[#C881FF] transition-colors duration-300">
                    Вернуться в категории
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>
    )
  }

  return (
    <div className="flex relative">
      <motion.nav 
        className="w-[360px] h-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="p-8 space-y-8">
          <motion.div variants={item}>
            <UserProfile username="m1ghty" balance={0} />
          </motion.div>
          
          <motion.div className="space-y-16" variants={container}>
            <motion.div variants={item}>
              <PurchasesSection 
                onSectionChange={onSectionChange} 
                activeSection={activeSection} 
              />
            </motion.div>
            <motion.div variants={item}>
              <ServicesSection 
                onSectionChange={onSectionChange} 
                activeSection={activeSection}
                onShowPaid={() => handleShowCategories('paid')}
                onShowFree={() => handleShowCategories('free')}
              />
            </motion.div>
            <motion.div variants={item}>
              <AccountSection 
                onSectionChange={onSectionChange} 
                activeSection={activeSection} 
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.nav>

      <div className="absolute w-[1px] h-[800px] left-[340px] top-[27px] bg-[#5E5E5E]" />

      {activeSection === 'finances' && <FinancesSection balance={0} />}
      {activeSection === 'settings' && <SettingsSection username="m1ghty" email="m1ghty@gmail.com" />}
    </div>
  )
} 
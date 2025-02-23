'use client'

import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { AccountNavigation } from '@/components/account/navigation/AccountNavigation'
import { PurchasesList } from '@/components/account/purchases/PurchasesList'
import { ServicesList } from '@/components/account/services/ServicesList'

const AccountPage: FC = () => {
  const [activeSection, setActiveSection] = useState('purchases')

  console.log('AccountPage render:', { activeSection })

  const renderContent = () => {
    // Определяем тип контента (paid/free) на основе секции
    const isPaidService = ['builds', 'plugins', 'maps'].includes(activeSection)
    const isFreeService = ['free-builds', 'free-plugins', 'free-maps'].includes(activeSection)

    if (isPaidService) {
      return (
        <ServicesList 
          category={activeSection}
          type="paid"
        />
      )
    }

    if (isFreeService) {
      return (
        <ServicesList 
          category={activeSection.replace('free-', '')}
          type="free"
        />
      )
    }

    console.log('Rendering content for section:', activeSection)

    switch (activeSection) {
      case 'purchases':
        return <PurchasesList />
      default:
        return null
    }
  }

  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden pt-[120px] lg:pt-[140px] xl:pt-[160px]">
      {/* Декоративные элементы */}
      <motion.div 
        className="absolute w-[809px] h-[924px] left-[-237px] top-[389px] bg-[rgba(153,0,255,0.3)] blur-[350px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute w-[855px] h-[1002px] left-[1153px] top-[218px] bg-[rgba(0,89,255,0.3)] blur-[350px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Контент */}
      <div className="relative max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 xl:px-[178px]">
        <div className="flex gap-8">
          <AccountNavigation onSectionChange={setActiveSection} activeSection={activeSection} />
          <div className="flex-grow">
            {renderContent()}
          </div>
        </div>
      </div>
    </main>
  )
}

export default AccountPage 
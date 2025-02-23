'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePurchases } from '@/hooks/usePurchases'
import { PurchaseCard } from './PurchaseCard'

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

export const PurchasesList: FC = () => {
  const { purchases, loading, hasPurchases } = usePurchases()

  return (
    <motion.div 
      className="w-full relative min-h-[800px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.h1 
        className="font-unbounded font-semibold text-[48px] sm:text-[56px] lg:text-[64px] leading-[1.2] text-white mb-12 sm:mb-16"
        variants={item}
      >
        Мои покупки
      </motion.h1>

      {loading ? (
        <motion.div 
          className="flex items-center justify-center h-[400px]"
          variants={item}
        >
          <p className="text-white">Загрузка...</p>
        </motion.div>
      ) : hasPurchases ? (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          {purchases.map((purchase) => (
            <motion.div 
              key={purchase.id}
              variants={item}
            >
              <PurchaseCard {...purchase} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          className="absolute w-full flex items-start justify-between"
          style={{ top: '201px' }}
          variants={container}
        >
          <motion.div variants={item}>
            <Image
              src="/not-sell.png"
              alt="No purchases"
              width={470}
              height={420}
              className="object-contain"
            />
          </motion.div>
          
          <motion.h2 
            className="font-unbounded font-semibold text-[64px] leading-[79px] text-white max-w-[600px] relative top-[130px]"
            variants={item}
          >
            У Вас нет покупок :(
          </motion.h2>
        </motion.div>
      )}
    </motion.div>
  )
} 
'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { WalletIcon } from '@/components/icons/account'

interface FinancesSectionProps {
  balance: number
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

interface Transaction {
  id: number
  description: string
  date: string
  amount: number
}

const transactions: Transaction[] = [
  {
    id: 1,
    description: 'Приобретение услуги - Разработка плагина',
    date: '12.12.2024',
    amount: 2400
  },
  {
    id: 2,
    description: 'Приобретение сборки - SolarTime v1',
    date: '11.12.2024',
    amount: 500
  },
  {
    id: 3,
    description: 'Приобретение сборки - SolarTime v4',
    date: '11.12.2024',
    amount: 5700
  }  
]

export const FinancesSection: FC<FinancesSectionProps> = ({ balance = 0 }) => {
  return (
    <motion.div 
      className="flex-1 pl-[80px] pt-[27px] pb-[72px] h-full"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Заголовок */}
      <motion.h1 
        className="font-unbounded font-semibold text-[64px] leading-[79px] text-white mb-[40px]"
        variants={item}
      >
        Финансы
      </motion.h1>

      {/* Баланс */}
      <motion.div 
        className="w-[595px] h-[225px] bg-[#1F1F1F] border border-[#343434] rounded-[35px] relative mb-[32px]"
        variants={item}
      >
        <div className="absolute left-[168px] top-[52px] w-[121px] h-[121px]">
          <WalletIcon className="w-full h-full" />
        </div>
        <span className="absolute left-[308px] top-[70px] font-unbounded text-[70px] leading-[87px] text-white">
          {balance}₽
        </span>
      </motion.div>

      {/* Кнопка пополнения */}
      <motion.button 
        className="w-[595px] h-[79px] border-2 border-[#1F1F1F] rounded-[20px] flex items-center justify-center gap-3 group hover:border-[#343434] transition-colors mb-[49px]"
        variants={item}
      >
        <svg className="w-6 h-6 text-[#777777] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
        </svg>
        <span className="font-unbounded text-[20px] leading-[25px] text-[#777777] group-hover:text-white transition-colors">
          Пополнить баланс
        </span>
      </motion.button>

      {/* История операций */}
      <motion.div variants={container} className="mb-[72px]">
        <motion.h2 
          className="font-unbounded font-semibold text-[64px] leading-[79px] text-white mb-[25px]"
          variants={item}
        >
          История операций
        </motion.h2>

        <motion.div 
          className="w-[776px] bg-[#1F1F1F] border border-[#343434] rounded-[35px] p-6"
          variants={container}
        >
          {transactions.map((transaction) => (
            <motion.div 
              key={transaction.id}
              className="flex justify-between items-center mb-[18px] last:mb-0"
              variants={item}
            >
              <span className="font-unbounded text-[15px] leading-[19px] tracking-[-0.02em] text-white">
                {transaction.description}
              </span>
              <div className="flex gap-8">
                <span className="font-unbounded text-[15px] leading-[19px] tracking-[-0.02em] text-[#777777]">
                  {transaction.date}
                </span>
                <span className="font-unbounded text-[15px] leading-[19px] tracking-[-0.02em] text-white w-[62px] text-right">
                  {transaction.amount}₽
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 
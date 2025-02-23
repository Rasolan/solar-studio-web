'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { WalletIcon } from '@/components/icons/account'

interface UserProfileProps {
  username: string
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

export const UserProfile: FC<UserProfileProps> = ({ username, balance }) => {
  return (
    <motion.div 
      className="relative h-[120px]"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Аватар с иконкой пользователя */}
      <motion.div 
        variants={item}
        className="absolute w-[80px] h-[80px] left-0 top-0 bg-[#141414] border border-[#212121] rounded-[15px] flex items-center justify-center"
      >
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.875 28C8.54754 27.2468 11.6974 23.7806 12.6204 23.7806H22.3802C23.7178 23.7806 26.4483 26.6538 27.125 27.6666M31.5 17.5C31.5 25.232 25.232 31.5 17.5 31.5C9.76801 31.5 3.5 25.232 3.5 17.5C3.5 9.76801 9.76801 3.5 17.5 3.5C25.232 3.5 31.5 9.76801 31.5 17.5ZM22.515 12.7283C22.515 10.0573 20.2602 7.875 17.5004 7.875C14.7407 7.875 12.4859 10.0573 12.4859 12.7283C12.4859 15.3992 14.7407 17.5815 17.5004 17.5815C20.2601 17.5815 22.515 15.3992 22.515 12.7283Z" 
            stroke="#585858" 
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Имя пользователя и иконка разлогина */}
      <motion.div 
        variants={item}
        className="absolute left-[100px] top-[8px] flex items-center gap-4"
      >
        <span className="font-unbounded font-light text-[24px] leading-[30px] text-white">
          {username}
        </span>
        
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.13846 6.60654C9.5041 2.62556 11.6862 1 16.4631 1H16.6164C21.8887 1 24 2.97943 24 7.92247V15.1325C24 20.0755 21.8887 22.0549 16.6164 22.0549H16.4631C11.7215 22.0549 9.53949 20.4515 9.15026 16.5369M1 11.5164H16.1918M13.5615 7.81189L17.5128 11.5164L13.5615 15.2209" 
            stroke="#5E5E5E" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Баланс */}
      <motion.div 
        variants={item}
        className="absolute left-[100px] top-[48px] flex items-center gap-[14px]"
      >
        <WalletIcon className="w-6 h-6 text-[#7A7A7A]" />
        <span className="font-unbounded font-normal text-[16px] leading-[20px] text-[#999999]">
          {balance}₽
        </span>
      </motion.div>
    </motion.div>
  )
} 
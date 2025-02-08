'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { LoginForm } from '@/components/forms/LoginForm'
import { RegisterForm } from '@/components/forms/RegisterForm'

export default function Page() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <main className="w-full min-h-screen bg-black overflow-hidden">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-20">
        {/* Градиентные круги */}
        <motion.div 
          className="absolute w-[40%] sm:w-[50%] lg:w-[809px] h-[400px] sm:h-[500px] lg:h-[666px] left-[-10%] lg:left-[-164px] top-[305px] sm:top-[355px] lg:top-[405px] bg-[rgba(153,0,255,0.6)] blur-[200px] sm:blur-[250px] lg:blur-[350px] pointer-events-none z-[2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute w-[40%] sm:w-[50%] lg:w-[855px] h-[400px] sm:h-[500px] lg:h-[647px] right-[-10%] lg:right-[-164px] top-[199px] sm:top-[249px] lg:top-[299px] bg-[rgba(0,89,255,0.6)] blur-[200px] sm:blur-[250px] lg:blur-[350px] pointer-events-none z-[2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Контейнер формы */}
        <motion.div 
          className="relative w-full max-w-[500px] mx-auto px-4 z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Логотип */}
          <motion.div 
            className="w-[200px] h-[73px] mx-auto mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/">
              <Image
                src="/SolarStudioDark.png"
                alt="Solar Studio"
                width={200}
                height={73}
                className="w-full h-full object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Переключатель */}
          <div className="flex items-center justify-center gap-4 mb-8 w-full text-center">
            <motion.button
              onClick={() => setIsLogin(true)}
              className={`font-unbounded font-semibold text-[18px] sm:text-[20px] leading-tight transition-colors ${
                isLogin 
                  ? 'bg-gradient-to-r from-white to-[#E3D6FF] bg-clip-text text-transparent'
                  : 'text-[#B6B6B6] hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Вход
            </motion.button>
            <span className="w-[2px] h-[20px] bg-[#B6B6B6]" />
            <motion.button
              onClick={() => setIsLogin(false)}
              className={`font-unbounded font-semibold text-[18px] sm:text-[20px] leading-tight transition-colors ${
                !isLogin 
                  ? 'bg-gradient-to-r from-white to-[#E3D6FF] bg-clip-text text-transparent'
                  : 'text-[#B6B6B6] hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Регистрация
            </motion.button>
          </div>

          {/* Формы */}
          <AnimatePresence mode="wait">
            {isLogin ? <LoginForm key="login" /> : <RegisterForm key="register" />}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  )
} 
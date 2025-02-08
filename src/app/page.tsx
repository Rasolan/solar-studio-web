'use client'

import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/components/sections/Hero'
import { Products } from '@/components/sections/Products'
import { Services } from '@/components/sections/Services'
import { Free } from '@/components/sections/Free'
import { Statistics } from '@/components/sections/Statistics'
import { Reviews } from '@/components/sections/Reviews'
import { useNotifications } from '@/hooks/useNotifications'

export default function Home() {
  // Инициализируем показ уведомлений
  useNotifications()

  return (
    <Layout>
      <main className="w-full bg-black overflow-x-hidden">
        <Hero />
        <Reviews />
        <Products />
        <Services />
        <Free />
        <Statistics />
      </main>
    </Layout>
  )
}


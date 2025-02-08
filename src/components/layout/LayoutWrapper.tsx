'use client'

import { FC, PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Footer } from './Footer'

export const LayoutWrapper: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'

  if (isLoginPage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        {children}
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
} 
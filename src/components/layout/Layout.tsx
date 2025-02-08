import { FC, PropsWithChildren } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { NotificationsProvider } from '../providers/NotificationsProvider'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <NotificationsProvider />
    </div>
  )
} 
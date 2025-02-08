import { Layout } from '@/components/layout/Layout'

export const metadata = {
  title: 'Solar Studio - Личный кабинет',
}

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      {children}
    </Layout>
  )
} 
import { Layout } from '@/components/layout/Layout'

export const metadata = {
  title: 'Solar Studio - Пользовательское соглашение',
}

export default function AgreementLayout({
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
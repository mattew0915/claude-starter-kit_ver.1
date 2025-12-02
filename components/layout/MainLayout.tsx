import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Container } from './Container'
import { SITE_CONFIG } from '@/lib/constants'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 헤더 */}
      <Header navItems={SITE_CONFIG.navItems} brandName={SITE_CONFIG.name} />

      {/* 메인 콘텐츠 */}
      <main className="flex-1">
        <Container>{children}</Container>
      </main>

      {/* 푸터 */}
      <Footer footerLinks={SITE_CONFIG.footerLinks} />
    </div>
  )
}

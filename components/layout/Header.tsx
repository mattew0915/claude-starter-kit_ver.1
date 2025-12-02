import Link from 'next/link'
import { Container } from './Container'
import { Navigation } from './Navigation'
import { MobileMenu } from './MobileMenu'
import { ThemeToggle } from '@/components/ThemeToggle'
import type { NavItem } from '@/types'

interface HeaderProps {
  navItems: NavItem[]
  brandName?: string
}

export function Header({ navItems, brandName = 'Modern Kit' }: HeaderProps) {
  return (
    <header className="border-b bg-background">
      <Container className="flex items-center justify-between py-4">
        {/* 로고/브랜드명 */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600" />
          <span className="hidden font-bold sm:inline-block">{brandName}</span>
        </Link>

        {/* 우측 컨트롤 (네비게이션 + 다크모드 버튼 + 모바일 메뉴) */}
        <div className="flex items-center gap-4">
          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:block">
            <Navigation items={navItems} direction="horizontal" />
          </div>

          <ThemeToggle />
          <MobileMenu navItems={navItems} />
        </div>
      </Container>
    </header>
  )
}

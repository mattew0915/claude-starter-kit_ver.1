import type { NavItem, SiteConfig } from '@/types'

// 사이트 기본 정보
export const SITE_NAME = 'Modern Starter Kit'
export const SITE_DESCRIPTION =
  '모던 웹 개발을 빠르게 시작하기 위한 Next.js 스타터킷입니다. shadcn/ui, Tailwind CSS, TypeScript를 활용한 프로덕션 레벨 예제를 제공합니다.'

// 네비게이션 항목
export const NAVIGATION_ITEMS: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Blog', href: '/blog' },
  { title: 'About', href: '#' },
  { title: 'Contact', href: '#' },
]

// 푸터 링크
export const FOOTER_LINKS: Record<string, NavItem[]> = {
  Product: [
    { title: 'Features', href: '#' },
    { title: 'Pricing', href: '#' },
    { title: 'Security', href: '#' },
    { title: 'Team', href: '#' },
  ],
  Company: [
    { title: 'About', href: '#' },
    { title: 'Blog', href: '/blog' },
    { title: 'Careers', href: '#' },
    { title: 'Press', href: '#' },
  ],
  Resources: [
    { title: 'Documentation', href: '#' },
    { title: 'Community', href: '#' },
    { title: 'Help Center', href: '#' },
    { title: 'Contact', href: '#' },
  ],
}

// 사이트 설정
export const SITE_CONFIG: SiteConfig = {
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  navItems: NAVIGATION_ITEMS,
  footerLinks: FOOTER_LINKS,
}

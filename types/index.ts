// 블로그 포스트 타입
export interface Post {
  id: string
  slug: string
  title: string
  description: string
  content: string
  author: string
  date: string
  category: string
  image?: string
  tags?: string[]
}

// 네비게이션 항목 타입
export interface NavItem {
  title: string
  href: string
}

// 사이트 설정 타입
export interface SiteConfig {
  name: string
  description: string
  navItems: NavItem[]
  footerLinks: Record<string, NavItem[]>
}

// 피처 항목 타입
export interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

// 버튼 속성 타입
export interface ButtonProps {
  label: string
  href: string
  variant?: 'default' | 'secondary' | 'outline'
}

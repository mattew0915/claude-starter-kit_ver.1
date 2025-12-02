import Link from 'next/link'
import { Container } from './Container'
import { Separator } from '@/components/ui/separator'
import type { NavItem } from '@/types'

interface FooterProps {
  footerLinks: Record<string, NavItem[]>
  copyrightText?: string
}

export function Footer({
  footerLinks,
  copyrightText = '© 2024 Modern Starter Kit. All rights reserved.',
}: FooterProps) {
  return (
    <footer className="border-t bg-background">
      <Container className="py-12">
        {/* 링크 섹션 */}
        <div className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-4 font-semibold">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 구분선 */}
        <Separator className="my-8" />

        {/* 저작권 정보 */}
        <div className="text-center text-sm text-muted-foreground">
          {copyrightText}
        </div>
      </Container>
    </footer>
  )
}

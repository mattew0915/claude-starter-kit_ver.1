'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavItem } from '@/types'
import { cn } from '@/lib/utils'

interface NavigationProps {
  items: NavItem[]
  direction?: 'horizontal' | 'vertical'
}

export function Navigation({ items, direction = 'horizontal' }: NavigationProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const baseStyles = cn('font-medium transition-colors hover:text-primary')
  const containerStyles =
    direction === 'horizontal'
      ? 'flex items-center gap-6'
      : 'flex flex-col gap-3'

  return (
    <nav className={containerStyles}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            baseStyles,
            isActive(item.href)
              ? 'text-primary font-semibold'
              : 'text-muted-foreground'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

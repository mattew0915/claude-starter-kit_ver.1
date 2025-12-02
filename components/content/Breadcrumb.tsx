'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { NavItem } from '@/types'

interface BreadcrumbProps {
  items: (NavItem & { current?: boolean })[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="브레드크럼" className="flex items-center gap-2">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          {/* 링크 또는 텍스트 */}
          {item.current ? (
            <span className="text-sm font-medium text-foreground">{item.title}</span>
          ) : (
            <Link
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          )}

          {/* 구분자 */}
          {index < items.length - 1 && (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      ))}
    </nav>
  )
}

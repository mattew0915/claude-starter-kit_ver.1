'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import { Navigation } from './Navigation'
import { ThemeToggle } from '@/components/ThemeToggle'
import type { NavItem } from '@/types'

interface MobileMenuProps {
  navItems: NavItem[]
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setOpen(true)}
        aria-label="메뉴 열기"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle>메뉴</SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-6">
          <Navigation items={navItems} direction="vertical" />

          <div className="border-t pt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">테마</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

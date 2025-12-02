import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { ButtonProps } from '@/types'

interface HeroSectionProps {
  title: string
  subtitle: string
  buttons?: ButtonProps[]
}

export function HeroSection({ title, subtitle, buttons }: HeroSectionProps) {
  return (
    <section className="mx-auto max-w-3xl space-y-8 py-20 text-center md:py-32">
      {/* 제목 */}
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>

      {/* 부제목 */}
      <p className="text-lg text-muted-foreground md:text-xl">{subtitle}</p>

      {/* CTA 버튼 */}
      {buttons && buttons.length > 0 && (
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          {buttons.map((button) => (
            <Link key={button.label} href={button.href}>
              <Button
                size="lg"
                variant={button.variant || 'outline'}
              >
                {button.label}
              </Button>
            </Link>
          ))}
        </div>
      )}

      {/* 철학 메시지 */}
      <div className="mt-16 space-y-4 text-center">
        <div className="text-2xl font-bold md:text-3xl">
          explore → plan → code → commit
        </div>
        <div className="text-xl font-semibold text-muted-foreground md:text-2xl">
          Do not reinvent the wheel
        </div>
      </div>
    </section>
  )
}

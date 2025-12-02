import { Zap, Code2, Palette } from 'lucide-react'
import { MainLayout } from '@/components/layout/MainLayout'
import { HeroSection } from '@/components/content/HeroSection'
import { FeatureGrid } from '@/components/content/FeatureGrid'
import type { Feature } from '@/types'

const features: Feature[] = [
  {
    icon: <Code2 className="h-6 w-6 text-primary" />,
    title: 'TypeScript 완벽 지원',
    description: '완벽한 타입 안정성으로 안전한 개발을 경험하세요.',
  },
  {
    icon: <Palette className="h-6 w-6 text-primary" />,
    title: 'Tailwind CSS + shadcn/ui',
    description: '아름다운 UI를 빠르게 구성할 수 있는 컴포넌트 라이브러리.',
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: '성능 최적화',
    description: 'Next.js의 최신 기능으로 빠른 성능을 보장합니다.',
  },
]

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        title="Modern Starter Kit"
        subtitle="Next.js + TypeScript + Tailwind CSS + shadcn/ui로 빠르게 웹 개발을 시작하세요."
        buttons={[
          { label: 'Get Started', href: '/blog', variant: 'default' },
          { label: 'Learn More', href: '/about', variant: 'outline' },
        ]}
      />

      {/* Features Section */}
      <FeatureGrid
        title="핵심 기능"
        features={features}
      />

      {/* Additional Info Section */}
      <section className="space-y-8 py-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">즉시 시작할 수 있습니다</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            이 스타터킷에는 모든 웹사이트에서 필요한 필수 컴포넌트와 레이아웃이 포함되어 있습니다.
            프로덕션 레벨의 코드를 바탕으로 당신의 프로젝트를 시작하세요.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2 rounded-lg border bg-card p-6">
            <h3 className="font-semibold">컴포넌트 시스템</h3>
            <p className="text-sm text-muted-foreground">
              재사용 가능한 UI 컴포넌트로 빠르게 페이지를 구성할 수 있습니다.
            </p>
          </div>

          <div className="space-y-2 rounded-lg border bg-card p-6">
            <h3 className="font-semibold">다크모드 지원</h3>
            <p className="text-sm text-muted-foreground">
              next-themes로 완벽한 다크모드를 즉시 사용할 수 있습니다.
            </p>
          </div>

          <div className="space-y-2 rounded-lg border bg-card p-6">
            <h3 className="font-semibold">반응형 디자인</h3>
            <p className="text-sm text-muted-foreground">
              모바일부터 데스크톱까지 모든 기기에 최적화된 디자인입니다.
            </p>
          </div>

          <div className="space-y-2 rounded-lg border bg-card p-6">
            <h3 className="font-semibold">블로그 시스템</h3>
            <p className="text-sm text-muted-foreground">
              샘플 블로그 시스템으로 콘텐츠 관리를 시작하세요.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

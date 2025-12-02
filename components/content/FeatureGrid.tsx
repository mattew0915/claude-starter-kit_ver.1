import type { Feature } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface FeatureGridProps {
  title?: string
  features: Feature[]
}

export function FeatureGrid({ title, features }: FeatureGridProps) {
  return (
    <section className="space-y-8 py-12">
      {/* 섹션 제목 */}
      {title && <h2 className="text-center text-3xl font-bold">{title}</h2>}

      {/* 피처 그리드 */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="transition-all hover:shadow-md">
            <CardHeader>
              {/* 아이콘 */}
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                {feature.icon}
              </div>

              {/* 제목 */}
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>

            <CardContent>
              {/* 설명 */}
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

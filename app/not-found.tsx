import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <div className="space-y-4">
          {/* 404 숫자 */}
          <div className="text-6xl font-bold text-muted-foreground/30">404</div>

          {/* 제목 */}
          <h1 className="text-4xl font-bold">페이지를 찾을 수 없습니다</h1>

          {/* 설명 */}
          <p className="text-lg text-muted-foreground">
            죄송합니다. 찾으신 페이지가 존재하지 않습니다.
          </p>

          {/* 버튼 */}
          <div className="pt-4">
            <Link href="/">
              <Button size="lg">홈으로 돌아가기</Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

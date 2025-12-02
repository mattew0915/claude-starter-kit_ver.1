'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/layout/Container'

export default function AboutPage() {
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3 | 4>(1)

  const scrollToSection = (level: 1 | 2 | 3 | 4) => {
    setActiveLevel(level)
    const sectionId = `lv${level}`
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <MainLayout>
      <div className="space-y-12 py-8">
        {/* 제목 */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            웹 개발 기술 스택 선택 가이드
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            프로젝트의 복잡도와 목표에 따라 최적의 기술 스택을 선택하세요.
            초급부터 고급까지 4가지 레벨로 구분된 가이드입니다.
          </p>
        </div>

        {/* 네비게이션 버튼 */}
        <div className="flex flex-wrap gap-2 justify-center sticky top-20 bg-background/95 backdrop-blur py-4 z-10">
          <Button
            variant={activeLevel === 1 ? 'default' : 'outline'}
            onClick={() => scrollToSection(1)}
          >
            LV1: 기본 페이지
          </Button>
          <Button
            variant={activeLevel === 2 ? 'default' : 'outline'}
            onClick={() => scrollToSection(2)}
          >
            LV2: Read 전용 (초급)
          </Button>
          <Button
            variant={activeLevel === 3 ? 'default' : 'outline'}
            onClick={() => scrollToSection(3)}
          >
            LV3: 인증 + 폼 (중급)
          </Button>
          <Button
            variant={activeLevel === 4 ? 'default' : 'outline'}
            onClick={() => scrollToSection(4)}
          >
            LV4: DB (고급)
          </Button>
        </div>

        {/* LV1 섹션 */}
        <section id="lv1" className="scroll-mt-20 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-600">LV1</Badge>
              <h2 className="text-3xl font-bold">
                기본 페이지 - 회원가입
              </h2>
            </div>
            <p className="text-muted-foreground">
              회원가입 및 특정 콘텐츠만 보는 기능을 제공하는 정적 페이지
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 기술스택 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">기술 스택</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    구조
                  </h4>
                  <p>HTML5</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    언어
                  </h4>
                  <p>JavaScript</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    스타일링
                  </h4>
                  <p>CSS3 + Tailwind CSS (CDN)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    UI 프레임워크
                  </h4>
                  <p>Tailwind CSS (CDN)</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    유틸리티 클래스 조합 기반 UI 프레임워크로 디자인을 쉽게 만들 수 있습니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    개발환경
                  </h4>
                  <p>VS Code + Live Server Extension</p>
                </div>
              </CardContent>
            </Card>

            {/* 용도, 배포, 장점 */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">주요 용도</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 개인/회사 포트폴리오</li>
                    <li>• 랜딩 페이지</li>
                    <li>• 이벤트 소개 페이지</li>
                    <li>• 간단한 브로셔 사이트</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">배포</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Netlify (드래그 앤 드롭)</li>
                    <li>• GitHub Pages</li>
                    <li>• Vercel</li>
                    <li>• Firebase Hosting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">장점</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ 30분~2시간 내 완성 가능</li>
                    <li>✓ 학습 곡선이 매우 낮음</li>
                    <li>✓ 빌드 과정 없이 즉시 확인</li>
                    <li>✓ 모든 웹 서버에서 동작</li>
                    <li>✓ 무료 호스팅 다수 지원</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* LV2 섹션 */}
        <section id="lv2" className="scroll-mt-20 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-600">LV2</Badge>
              <h2 className="text-3xl font-bold">
                Read 전용 애플리케이션 (초급)
              </h2>
            </div>
            <p className="text-muted-foreground">
              콘텐츠를 동적으로 보여주는 애플리케이션. 기본 페이지와 달리 데이터를 동적으로 렌더링합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">기술 스택</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    프레임워크
                  </h4>
                  <p>Next.js 15 (App Router)</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    React 기반이며 사용자가 많습니다. 커뮤니티가 활발하여 라이브러리 자료가 풍부합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    언어
                  </h4>
                  <p>TypeScript</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    스타일링
                  </h4>
                  <p>Tailwind CSS + shadcn/ui</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    shadcn/ui
                  </h4>
                  <p className="text-sm">
                    Tailwind 기반 UI 프레임워크로 자주 사용하는 UI를 조합해둔 형태입니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    데이터
                  </h4>
                  <p>JSON 파일 / Headless CMS / Notion API / Airtable API</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    상태관리
                  </h4>
                  <p>없음 (서버 컴포넌트 활용)</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">주요 용도</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 개인/기업 블로그</li>
                    <li>• 뉴스 웹사이트</li>
                    <li>• 제품 카탈로그</li>
                    <li>• 문서화 사이트</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">배포</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Vercel (권장)</li>
                    <li>• Netlify</li>
                    <li>• Cloudflare Pages</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">장점</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ SEO 최적화 자동 처리</li>
                    <li>✓ 빠른 페이지 로딩 (SSG/SSR)</li>
                    <li>✓ Git 연동 자동 배포</li>
                    <li>✓ 무료 계정으로 충분한 성능</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* LV3 섹션 */}
        <section id="lv3" className="scroll-mt-20 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-orange-600">LV3</Badge>
              <h2 className="text-3xl font-bold">
                인증 + 폼 기능 애플리케이션 (중급)
              </h2>
            </div>
            <p className="text-muted-foreground">
              로그인 및 폼 기능이 있어 페이지 접근에 제한을 둘 수 있는 애플리케이션
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">기술 스택</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    프레임워크
                  </h4>
                  <p>Next.js 15 (App Router)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    언어
                  </h4>
                  <p>TypeScript</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    스타일링
                  </h4>
                  <p>Tailwind CSS + shadcn/ui</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    인증
                  </h4>
                  <p>Supabase Auth (권장) / NextAuth.js / Clerk / Firebase Auth</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Clerk는 개발 속도가 빠르고 완성된 디자인을 제공합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    폼 관리
                  </h4>
                  <p>React Hook Form + Zod (유효성 검사)</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    이 조합으로 코드를 효율적으로 작성할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    상태관리
                  </h4>
                  <p>Zustand (필요시)</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">주요 용도</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 회원가입/로그인 사이트</li>
                    <li>• 문의폼 및 설문조사</li>
                    <li>• 예약 시스템</li>
                    <li>• 개인 대시보드</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">배포</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 프론트엔드: Vercel</li>
                    <li>• 백엔드: Supabase</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">장점</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ 빠른 인증 시스템 구축</li>
                    <li>✓ 폼 유효성 검사 자동화</li>
                    <li>✓ 반응형 UI 컴포넌트 제공</li>
                    <li>✓ 실시간 폼 상태 관리</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* LV4 섹션 */}
        <section id="lv4" className="scroll-mt-20 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-red-600">LV4</Badge>
              <h2 className="text-3xl font-bold">
                데이터베이스 사용 애플리케이션 (고급)
              </h2>
            </div>
            <p className="text-muted-foreground">
              데이터베이스와 실시간 기능이 포함된 완전한 웹 애플리케이션
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">기술 스택</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    프론트엔드
                  </h4>
                  <p>Next.js 15 + TypeScript</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    스타일링
                  </h4>
                  <p>Tailwind CSS + shadcn/ui</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    백엔드
                  </h4>
                  <p>Supabase (PostgreSQL + Auth + Storage + Realtime)</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    데이터베이스 관리, 인증, 스토리지, 서버없이 로직 실행, 실시간 기능 구현 가능합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    상태관리
                  </h4>
                  <p>Zustand</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    폼 관리
                  </h4>
                  <p>React Hook Form + Zod</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    API 및 파일
                  </h4>
                  <p>Supabase Client + Next.js API Routes</p>
                  <p>Supabase Storage</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">주요 용도</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 소셜 미디어 앱</li>
                    <li>• 전자상거래 사이트</li>
                    <li>• 협업 도구</li>
                    <li>• SaaS 제품</li>
                    <li>• 실시간 채팅 앱</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">배포</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 프론트엔드: Vercel</li>
                    <li>• 데이터베이스: Supabase</li>
                    <li>• 파일 저장소: Supabase Storage</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">장점</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ 완전한 백엔드 솔루션 제공</li>
                    <li>✓ 실시간 데이터 동기화</li>
                    <li>✓ 확장 가능한 PostgreSQL DB</li>
                    <li>✓ 파일 업로드/다운로드 지원</li>
                    <li>✓ Row Level Security 보안</li>
                    <li>✓ 개발자 친화적 대시보드</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 기타 유용한 기술 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">기타 유용한 기술 스택</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">코드 품질 관리</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">ESLint</h4>
                  <p className="text-sm text-muted-foreground">
                    JavaScript/TypeScript 코드 품질 검사
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Prettier</h4>
                  <p className="text-sm text-muted-foreground">
                    코드 포맷팅 자동화
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">TypeScript</h4>
                  <p className="text-sm text-muted-foreground">
                    타입 안정성 제공
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">UI/UX 라이브러리</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Lucide React</h4>
                  <p className="text-sm text-muted-foreground">
                    아이콘 라이브러리 (무료, 경량)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Framer Motion</h4>
                  <p className="text-sm text-muted-foreground">
                    애니메이션 라이브러리
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

import { notFound } from 'next/navigation'
import { MainLayout } from '@/components/layout/MainLayout'
import { Breadcrumb } from '@/components/content/Breadcrumb'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { formatDate } from '@/lib/utils'
import posts from '@/data/blog.json'
import type { Post } from '@/types'

interface PostDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

async function getPost(slug: string): Promise<Post | null> {
  const post = posts.find((p) => p.slug === slug)
  return post || null
}

export async function generateMetadata({ params }: PostDetailPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post not found',
    }
  }

  return {
    title: `${post.title} | Modern Starter Kit`,
    description: post.description,
  }
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <MainLayout>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { title: 'Home', href: '/' },
          { title: 'Blog', href: '/blog' },
          { title: post.title, href: `/blog/${post.slug}`, current: true },
        ]}
      />

      {/* Post Header */}
      <article className="mx-auto max-w-2xl py-12">
        {/* Category */}
        <Badge>{post.category}</Badge>

        {/* Title */}
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">{post.title}</h1>

        {/* Meta Information */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>By {post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.content.split(' ').length} words</span>
        </div>

        <Separator className="my-8" />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none">
          {post.content.split('\n').map((line, index) => {
            // 제목 처리
            if (line.startsWith('# ')) {
              return (
                <h2 key={index} className="mt-6 text-3xl font-bold first:mt-0">
                  {line.slice(2)}
                </h2>
              )
            }
            if (line.startsWith('## ')) {
              return (
                <h3 key={index} className="mt-4 text-2xl font-bold">
                  {line.slice(3)}
                </h3>
              )
            }

            // 리스트 처리
            if (line.startsWith('- ')) {
              return (
                <li key={index} className="ml-6 list-disc">
                  {line.slice(2)}
                </li>
              )
            }

            // 일반 텍스트
            if (line.trim() !== '') {
              return (
                <p key={index} className="my-4 leading-7">
                  {line}
                </p>
              )
            }

            // 빈 줄
            return <br key={index} />
          })}
        </div>

        {/* Post Footer */}
        <Separator className="my-12" />
        <div className="rounded-lg bg-muted p-6 text-center">
          <p className="text-sm text-muted-foreground">
            궁금한 점이나 제안이 있으신가요? GitHub에서 이슈를 등록해주세요.
          </p>
        </div>
      </article>
    </MainLayout>
  )
}

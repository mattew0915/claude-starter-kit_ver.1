import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import type { Post } from '@/types'

interface ArticleCardProps {
  post: Post
}

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
        <CardHeader>
          {/* 카테고리 배지 */}
          <Badge className="w-fit">{post.category}</Badge>

          {/* 제목 */}
          <CardTitle className="mt-3 line-clamp-2">{post.title}</CardTitle>

          {/* 메타정보 */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </CardHeader>

        <CardContent>
          {/* 설명 */}
          <CardDescription className="line-clamp-2">{post.description}</CardDescription>

          {/* 태그 */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* 더보기 아이콘 */}
          <div className="mt-6 flex items-center text-sm font-medium text-primary">
            더 읽기 <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

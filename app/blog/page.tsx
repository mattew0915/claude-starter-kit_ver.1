import { MainLayout } from '@/components/layout/MainLayout'
import { ArticleCard } from '@/components/content/ArticleCard'
import { Breadcrumb } from '@/components/content/Breadcrumb'
import posts from '@/data/blog.json'
import type { Post } from '@/types'

export const metadata = {
  title: 'Blog | Modern Starter Kit',
  description: 'Latest articles and tutorials about web development.',
}

export default function BlogPage() {
  const blogPosts = posts as Post[]

  return (
    <MainLayout>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { title: 'Home', href: '/' },
          { title: 'Blog', href: '/blog', current: true },
        ]}
      />

      {/* Header */}
      <div className="space-y-4 py-12">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Latest articles and tutorials about web development.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-12">
        {blogPosts.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </MainLayout>
  )
}

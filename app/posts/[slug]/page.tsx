// app/posts/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '@/lib/cosmic'
import { Post } from '@/types'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import AuthorCard from '@/components/AuthorCard'
import ShareButtons from '@/components/ShareButtons'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug) as Post

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="mb-4">
          {post.metadata.category && (
            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.metadata.category.metadata?.name || post.metadata.category.title}
            </span>
          )}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.metadata.headline || post.title}
        </h1>
        
        {post.metadata.subtitle && (
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {post.metadata.subtitle}
          </p>
        )}
        
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            {post.metadata.author?.metadata?.profile_photo && (
              <img
                src={`${post.metadata.author.metadata.profile_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                alt={post.metadata.author.metadata.name || post.metadata.author.title}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div>
              <p className="font-medium text-gray-900">
                {post.metadata.author?.metadata?.name || post.metadata.author?.title}
              </p>
              <p className="text-gray-600 text-sm">{formattedDate}</p>
            </div>
          </div>
          <ShareButtons post={post} />
        </div>
      </header>

      {/* Featured image */}
      {post.metadata.featured_image && (
        <div className="mb-8">
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={post.metadata.headline || post.title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: post.metadata.content }} />
      </div>

      {/* Author info */}
      {post.metadata.author && (
        <AuthorCard author={post.metadata.author} />
      )}
    </article>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts() as Post[]
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug) as Post

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.metadata.headline || post.title,
    description: post.metadata.subtitle || 'Read this article on our newsletter platform',
    openGraph: {
      title: post.metadata.headline || post.title,
      description: post.metadata.subtitle || 'Read this article on our newsletter platform',
      images: post.metadata.featured_image ? [post.metadata.featured_image.imgix_url] : [],
    },
  }
}
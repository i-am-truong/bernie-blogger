import Link from 'next/link'
import { Post } from '@/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`}>
        {post.metadata.featured_image && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <img
              src={`${post.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
              alt={post.metadata.headline || post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div>
          {post.metadata.category && (
            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium mb-2">
              {post.metadata.category.metadata?.name || post.metadata.category.title}
            </span>
          )}
          
          <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {post.metadata.headline || post.title}
          </h2>
          
          {post.metadata.subtitle && (
            <p className="text-gray-600 mb-4 leading-relaxed">
              {post.metadata.subtitle}
            </p>
          )}
          
          <div className="flex items-center gap-3 text-sm text-gray-500">
            {post.metadata.author?.metadata?.profile_photo && (
              <img
                src={`${post.metadata.author.metadata.profile_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                alt={post.metadata.author.metadata.name || post.metadata.author.title}
                width={24}
                height={24}
                className="rounded-full"
              />
            )}
            <span className="font-medium">
              {post.metadata.author?.metadata?.name || post.metadata.author?.title}
            </span>
            <span>•</span>
            <span>{formattedDate}</span>
            {post.metadata.newsletter_only && (
              <>
                <span>•</span>
                <span className="bg-primary text-white px-2 py-1 rounded text-xs">
                  Newsletter Only
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}
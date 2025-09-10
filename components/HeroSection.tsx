import Link from 'next/link'
import { Post } from '@/types'

interface HeroSectionProps {
  post: Post
}

export default function HeroSection({ post }: HeroSectionProps) {
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {post.metadata.category && (
              <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.metadata.category.metadata?.name || post.metadata.category.title}
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.metadata.headline || post.title}
            </h1>
            
            {post.metadata.subtitle && (
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {post.metadata.subtitle}
              </p>
            )}
            
            <div className="flex items-center gap-4 mb-6">
              {post.metadata.author?.metadata?.profile_photo && (
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={`${post.metadata.author.metadata.profile_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                    alt={post.metadata.author.metadata.name || post.metadata.author.title}
                    width={50}
                    height={50}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-medium text-gray-900">
                  {post.metadata.author?.metadata?.name || post.metadata.author?.title}
                </p>
                <p className="text-gray-600 text-sm">{formattedDate}</p>
              </div>
            </div>
            
            <Link
              href={`/posts/${post.slug}`}
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Read Full Article
            </Link>
          </div>
          
          {post.metadata.featured_image && (
            <div>
              <img
                src={`${post.metadata.featured_image.imgix_url}?w=1000&h=600&fit=crop&auto=format,compress`}
                alt={post.metadata.headline || post.title}
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
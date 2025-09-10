import { Author } from '@/types'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="flex items-start gap-4">
        {author.metadata?.profile_photo && (
          <img
            src={`${author.metadata.profile_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={author.metadata.name || author.title}
            width={80}
            height={80}
            className="rounded-full flex-shrink-0"
          />
        )}
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {author.metadata?.name || author.title}
          </h3>
          
          {author.metadata?.bio && (
            <p className="text-gray-600 mb-4 leading-relaxed">
              {author.metadata.bio}
            </p>
          )}
          
          <div className="flex flex-wrap gap-4 text-sm">
            {author.metadata?.email && (
              <a
                href={`mailto:${author.metadata.email}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Email
              </a>
            )}
            
            {author.metadata?.website && (
              <a
                href={author.metadata.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Website
              </a>
            )}
            
            {author.metadata?.twitter_handle && (
              <a
                href={`https://twitter.com/${author.metadata.twitter_handle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
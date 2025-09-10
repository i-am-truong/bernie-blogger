import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import { Post, Category } from '@/types'
import HeroSection from '@/components/HeroSection'
import PostCard from '@/components/PostCard'
import CategoryFilter from '@/components/CategoryFilter'

export default async function HomePage() {
  const posts = await getAllPosts() as Post[]
  const categories = await getAllCategories() as Category[]

  // Get featured post (most recent)
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 7) // Show 6 recent posts

  return (
    <div className="min-h-screen">
      {featuredPost && <HeroSection post={featuredPost} />}
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No posts available yet.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80">
            <CategoryFilter categories={categories} />
            
            {/* Newsletter signup */}
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
              <p className="text-gray-600 mb-4">Get the latest articles delivered directly to your inbox.</p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
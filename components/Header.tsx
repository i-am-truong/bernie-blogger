import Link from 'next/link'
import { getAllCategories } from '@/lib/cosmic'
import { Category } from '@/types'
import Navigation from '@/components/Navigation'

export default async function Header() {
  const categories = await getAllCategories() as Category[]

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors">
            Newsletter
          </Link>
          
          <Navigation categories={categories} />
        </div>
      </div>
    </header>
  )
}
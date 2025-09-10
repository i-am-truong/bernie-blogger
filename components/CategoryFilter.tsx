import Link from 'next/link'
import { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  if (categories.length === 0) {
    return null
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                  {category.metadata?.name || category.title}
                </h4>
                {category.metadata?.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {category.metadata.description}
                  </p>
                )}
              </div>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bernie Blogger - A Modern Newsletter Platform',
  description: 'A modern newsletter platform for writers, journalists, and content creators',
  keywords: 'newsletter, substack, blog, writing, journalism, content creation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <script src="/dashboard-console-capture.js" />
        {/* Console capture script for dashboard debugging */}
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
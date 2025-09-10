# Substack Clone Newsletter Platform

![App Preview](https://imgix.cosmicjs.com/c0e203f0-8e79-11f0-aa3f-8b3701190189-photo-1460925895917-afdab827c52f-1757531402519.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern newsletter platform built with Next.js and Cosmic, inspired by Substack's clean design and functionality. Perfect for writers, journalists, and content creators who want to build an audience through subscription-based content.

## Features

- **Modern Newsletter Design**: Clean, typography-focused interface prioritizing readability
- **Article Publishing**: Rich HTML content with featured images and author attribution
- **Author Profiles**: Complete author management with bios, photos, and social links
- **Category System**: Organized content categorization with filtering capabilities
- **Newsletter Content**: Special designation for newsletter-only articles
- **Responsive Layout**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags and structured content for search engines
- **Fast Performance**: Built with Next.js 15 and optimized images

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68c1ccaa2bc0a45649cdb661&clone_repository=68c1dbd92bc0a45649cdb6b2)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Build a substack clone"

### Code Generation Prompt

> Build a substack clone

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **CMS**: Cosmic Headless CMS
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Runtime**: Bun
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up your environment variables:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Posts
```typescript
import { cosmic } from '@/lib/cosmic'

const posts = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Getting Single Post
```typescript
const post = await cosmic.objects
  .findOne({ type: 'posts', slug: 'your-post-slug' })
  .depth(1)
```

### Fetching by Category
```typescript
const techPosts = await cosmic.objects
  .find({ 
    type: 'posts',
    'metadata.category': 'category-id'
  })
  .depth(1)
```

## Cosmic CMS Integration

This application leverages your existing Cosmic content structure:

- **Posts**: Articles with headline, subtitle, content, featured images, and author/category relationships
- **Authors**: Writer profiles with names, bios, photos, and social links
- **Categories**: Content organization with names and descriptions

The app uses Cosmic's powerful relationship features to connect posts with their authors and categories, providing a seamless content management experience.

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add your environment variables in the Vercel dashboard
3. Deploy with automatic builds on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in site settings

### Other Platforms
This Next.js application can be deployed on any platform that supports Node.js applications.

<!-- README_END -->
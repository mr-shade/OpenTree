import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export const metadata = {
  title: 'Blog | OpenTree',
  description: 'Tips, tutorials, and insights to help you make the most of your OpenTree page.',
};

const featuredPost = {
  title: 'How to Increase Your Click-Through Rate by 200%',
  excerpt: 'Learn the proven strategies that helped our top users triple their click-through rates and drive more traffic to their content.',
  image: '/blog/featured-post.jpg',
  author: {
    name: 'Alex Johnson',
    role: 'Growth Marketing Lead',
    image: '/team/alex.jpg',
  },
  date: 'May 2, 2024',
  readTime: '8 min',
  category: 'Marketing',
  slug: 'increase-click-through-rate',
};

const posts = [
  {
    title: '10 OpenTree Templates for Content Creators',
    excerpt: 'Discover beautiful templates designed specifically for content creators to showcase their work.',
    image: '/blog/templates-post.jpg',
    author: {
      name: 'Sarah Chen',
      role: 'Design Lead',
      image: '/team/sarah.jpg',
    },
    date: 'April 28, 2024',
    readTime: '6 min',
    category: 'Design',
    slug: 'templates-for-creators',
  },
  {
    title: 'The Ultimate Guide to Link Analytics',
    excerpt: 'Learn how to interpret your link analytics and use data to optimize your page performance.',
    image: '/blog/analytics-post.jpg',
    author: {
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      image: '/team/michael.jpg',
    },
    date: 'April 22, 2024',
    readTime: '10 min',
    category: 'Analytics',
    slug: 'link-analytics-guide',
  },
  {
    title: 'How to Monetize Your OpenTree Page',
    excerpt: 'Explore different strategies to earn money through your OpenTree links and grow your business.',
    image: '/blog/monetize-post.jpg',
    author: {
      name: 'Emma Wilson',
      role: 'Business Development',
      image: '/team/emma.jpg',
    },
    date: 'April 15, 2024',
    readTime: '7 min',
    category: 'Business',
    slug: 'monetize-your-page',
  },
  {
    title: 'Building Your Personal Brand with OpenTree',
    excerpt: 'Tips and strategies to create a cohesive personal brand using your OpenTree page.',
    image: '/blog/branding-post.jpg',
    author: {
      name: 'David Kim',
      role: 'Brand Strategist',
      image: '/team/david.jpg',
    },
    date: 'April 10, 2024',
    readTime: '5 min',
    category: 'Branding',
    slug: 'personal-branding',
  },
  {
    title: 'New Features: Dark Mode and Custom Domains',
    excerpt: 'Introducing our latest features to help you customize your OpenTree experience.',
    image: '/blog/features-post.jpg',
    author: {
      name: 'Lisa Patel',
      role: 'Product Manager',
      image: '/team/lisa.jpg',
    },
    date: 'April 5, 2024',
    readTime: '4 min',
    category: 'Product Updates',
    slug: 'new-features-april',
  },
  {
    title: 'SEO Best Practices for Your Link Page',
    excerpt: 'Optimize your OpenTree page for search engines to increase visibility and traffic.',
    image: '/blog/seo-post.jpg',
    author: {
      name: 'James Wilson',
      role: 'SEO Specialist',
      image: '/team/james.jpg',
    },
    date: 'March 30, 2024',
    readTime: '9 min',
    category: 'SEO',
    slug: 'seo-best-practices',
  },
];

const categories = ['All', 'Marketing', 'Design', 'Analytics', 'Business', 'Branding', 'Product Updates', 'SEO'];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-950 z-0"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6">
                OpenTree Blog
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Tips, tutorials, and insights to help you make the most of your OpenTree page.
              </p>
              
              <div className="relative max-w-2xl mx-auto mb-10">
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full h-14 pl-12 pr-4 rounded-full border-gray-300 dark:border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <svg className="w-6 h-6 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button 
                    key={category} 
                    variant={category === 'All' ? 'default' : 'outline'} 
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Article</h2>
              
              <Card className="overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 hover:bg-blue-700">Featured</Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center mb-4">
                      <Badge variant="outline" className="text-xs">{featuredPost.category}</Badge>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{featuredPost.readTime} read</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                          <Image 
                            src={featuredPost.author.image} 
                            alt={featuredPost.author.name} 
                            fill
                            className="object-cover" 
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{featuredPost.author.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{featuredPost.date}</div>
                        </div>
                      </div>
                      <Button asChild>
                        <Link href={`/blog/${featuredPost.slug}`}>Read Article</Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Latest Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.slug} className="overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-white/90 dark:bg-gray-900/90 text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                          <Image 
                            src={post.author.image} 
                            alt={post.author.name} 
                            fill
                            className="object-cover" 
                          />
                        </div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</div>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        <Link href={`/blog/${post.slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Load More
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Subscribe to our newsletter
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Get the latest articles, tutorials, and updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="h-12 rounded-full"
                />
                <Button className="h-12 rounded-full px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to create your OpenTree page?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Put these tips into practice by creating your own customized link page.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link href="/signup">Get Started for Free</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

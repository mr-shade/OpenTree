import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export const metadata = {
  title: 'Guides | OpenTree',
  description: 'Helpful guides and tutorials to get the most out of your OpenTree page.',
};

const guides = [
  {
    title: 'Getting Started with OpenTree',
    excerpt: 'Learn the basics of setting up your OpenTree page and adding your first links.',
    image: '/guides/getting-started.jpg',
    category: 'Beginner',
    readTime: '5 min',
    slug: 'getting-started',
  },
  {
    title: 'Customizing Your Page Design',
    excerpt: 'Discover how to personalize your page with custom colors, fonts, and layouts.',
    image: '/guides/customizing.jpg',
    category: 'Design',
    readTime: '8 min',
    slug: 'customizing-design',
  },
  {
    title: 'Optimizing for Conversions',
    excerpt: 'Tips and strategies to increase click-through rates and engagement on your page.',
    image: '/guides/conversions.jpg',
    category: 'Marketing',
    readTime: '10 min',
    slug: 'optimizing-conversions',
  },
  {
    title: 'Using Analytics to Grow Your Audience',
    excerpt: 'How to interpret your analytics data and use insights to expand your reach.',
    image: '/guides/analytics.jpg',
    category: 'Analytics',
    readTime: '7 min',
    slug: 'using-analytics',
  },
  {
    title: 'Setting Up Custom Domains',
    excerpt: 'Step-by-step instructions for connecting your own domain to your OpenTree page.',
    image: '/guides/domains.jpg',
    category: 'Advanced',
    readTime: '6 min',
    slug: 'custom-domains',
  },
  {
    title: 'Creating a Bio Link for Instagram',
    excerpt: 'How to create the perfect Instagram bio link to drive traffic to your content.',
    image: '/guides/instagram.jpg',
    category: 'Social Media',
    readTime: '5 min',
    slug: 'instagram-bio',
  },
  {
    title: 'Monetizing Your OpenTree Page',
    excerpt: 'Explore different ways to earn money through your OpenTree links.',
    image: '/guides/monetizing.jpg',
    category: 'Business',
    readTime: '12 min',
    slug: 'monetizing',
  },
  {
    title: 'SEO Best Practices for OpenTree',
    excerpt: 'Optimize your page for search engines to increase visibility and traffic.',
    image: '/guides/seo.jpg',
    category: 'Marketing',
    readTime: '9 min',
    slug: 'seo-best-practices',
  },
];

const categories = ['All', 'Beginner', 'Design', 'Marketing', 'Analytics', 'Business', 'Advanced', 'Social Media'];

export default function GuidesPage() {
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
                Guides & Tutorials
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Learn how to make the most of your OpenTree page with our comprehensive guides.
              </p>
              
              <div className="relative max-w-2xl mx-auto mb-10">
                <Input 
                  type="text" 
                  placeholder="Search guides..." 
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

        {/* Featured Guide */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/guides/featured-guide.jpg"
                      alt="Ultimate Guide to Link-in-Bio Pages"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Featured Guide</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      The Ultimate Guide to Link-in-Bio Pages
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Everything you need to know about creating, optimizing, and promoting your link-in-bio page to maximize your online presence.
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <span className="mr-4">15 min read</span>
                      <span>Updated 2 weeks ago</span>
                    </div>
                    <Button asChild size="lg">
                      <Link href="/guides/ultimate-link-in-bio-guide">Read Guide</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">All Guides</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {guides.map((guide) => (
                <Card key={guide.slug} className="overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">{guide.category}</Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{guide.readTime} read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{guide.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{guide.excerpt}</p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={`/guides/${guide.slug}`}>Read Guide</Link>
                    </Button>
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
                Get the latest guides in your inbox
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Subscribe to our newsletter to receive new guides, tips, and updates.
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
              Put these guides into practice by creating your own customized link page.
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

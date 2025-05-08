import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata = {
  title: 'Documentation | OpenTree',
  description: 'Comprehensive documentation for OpenTree - learn how to create and customize your link page.',
};

const categories = [
  {
    title: 'Getting Started',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    articles: [
      { title: 'Creating your account', slug: 'creating-account' },
      { title: 'Setting up your profile', slug: 'profile-setup' },
      { title: 'Adding your first links', slug: 'adding-links' },
      { title: 'Customizing your page', slug: 'customization' },
      { title: 'Sharing your OpenTree page', slug: 'sharing' },
    ],
  },
  {
    title: 'Customization',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    articles: [
      { title: 'Choosing a theme', slug: 'themes' },
      { title: 'Custom colors and fonts', slug: 'colors-fonts' },
      { title: 'Adding a profile picture', slug: 'profile-picture' },
      { title: 'Custom backgrounds', slug: 'backgrounds' },
      { title: 'Button styles', slug: 'button-styles' },
    ],
  },
  {
    title: 'Advanced Features',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    articles: [
      { title: 'Analytics dashboard', slug: 'analytics' },
      { title: 'Link scheduling', slug: 'scheduling' },
      { title: 'Custom domains', slug: 'custom-domains' },
      { title: 'Password protection', slug: 'password-protection' },
      { title: 'SEO optimization', slug: 'seo' },
    ],
  },
  {
    title: 'Integrations',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    articles: [
      { title: 'Google Analytics', slug: 'google-analytics' },
      { title: 'Social media integrations', slug: 'social-media' },
      { title: 'Payment processors', slug: 'payments' },
      { title: 'Email marketing tools', slug: 'email-marketing' },
      { title: 'API documentation', slug: 'api' },
    ],
  },
];

const popularArticles = [
  { title: 'How to customize your OpenTree theme', slug: 'customize-theme' },
  { title: 'Setting up Google Analytics', slug: 'setup-analytics' },
  { title: 'Using custom domains with OpenTree', slug: 'custom-domains' },
  { title: 'Understanding your analytics dashboard', slug: 'analytics-dashboard' },
];

export default function DocumentationPage() {
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
                OpenTree Documentation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Everything you need to know about creating and customizing your OpenTree page.
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <Input 
                  type="text" 
                  placeholder="Search documentation..." 
                  className="w-full h-14 pl-12 pr-4 rounded-full border-gray-300 dark:border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <svg className="w-6 h-6 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 text-blue-600 dark:text-blue-400">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {category.articles.map((article, i) => (
                        <li key={i}>
                          <Link 
                            href={`/documentation/${article.slug}`}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={`/documentation/category/${category.title.toLowerCase().replace(' ', '-')}`}>
                        View All
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Popular Articles</h2>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                  {popularArticles.map((article, index) => (
                    <Link 
                      key={index}
                      href={`/documentation/${article.slug}`}
                      className="block p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{article.title}</h3>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Documentation Preview */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">API Documentation</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Build custom integrations with our powerful and flexible API.
                </p>
              </div>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-6">
                  <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                  <TabsTrigger value="authentication" className="flex-1">Authentication</TabsTrigger>
                  <TabsTrigger value="endpoints" className="flex-1">Endpoints</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">API Overview</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        The OpenTree API allows you to programmatically create, read, update, and delete links and pages. 
                        Our RESTful API uses standard HTTP methods and returns JSON responses.
                      </p>
                      <Button asChild>
                        <Link href="/documentation/api">Full API Documentation</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="authentication" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Authentication</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        All API requests require authentication using an API key. You can generate an API key in your account settings.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-6">
                        <code className="text-gray-800 dark:text-gray-300">
                          Authorization: Bearer YOUR_API_KEY
                        </code>
                      </div>
                      <Button asChild>
                        <Link href="/documentation/api/authentication">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="endpoints" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">API Endpoints</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        The OpenTree API provides endpoints for managing links, pages, analytics, and more.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-6">
                        <code className="text-gray-800 dark:text-gray-300">
                          GET /api/v1/links<br />
                          POST /api/v1/links<br />
                          GET /api/v1/links/:id<br />
                          PUT /api/v1/links/:id<br />
                          DELETE /api/v1/links/:id
                        </code>
                      </div>
                      <Button asChild>
                        <Link href="/documentation/api/endpoints">View All Endpoints</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Need more help?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our support team is ready to assist you with any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white/10">
                <Link href="/community">Join Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

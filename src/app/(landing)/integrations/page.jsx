import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata = {
  title: 'Integrations | OpenTree',
  description: 'Connect OpenTree with your favorite tools and platforms to streamline your workflow.',
};

const integrations = [
  {
    name: 'Google Analytics',
    description: 'Track detailed metrics and user behavior on your OpenTree page.',
    image: '/integrations/google-analytics.svg',
    category: 'Analytics',
  },
  {
    name: 'Mailchimp',
    description: 'Grow your email list by connecting your newsletter signup form.',
    image: '/integrations/mailchimp.svg',
    category: 'Marketing',
  },
  {
    name: 'Zapier',
    description: 'Connect OpenTree to 3,000+ apps and automate your workflow.',
    image: '/integrations/zapier.svg',
    category: 'Automation',
  },
  {
    name: 'Stripe',
    description: 'Accept payments directly through your OpenTree page.',
    image: '/integrations/stripe.svg',
    category: 'Payments',
  },
  {
    name: 'Shopify',
    description: 'Showcase and sell your products from your Shopify store.',
    image: '/integrations/shopify.svg',
    category: 'E-commerce',
  },
  {
    name: 'YouTube',
    description: 'Embed your latest videos directly on your page.',
    image: '/integrations/youtube.svg',
    category: 'Content',
  },
  {
    name: 'Spotify',
    description: 'Share your music, podcasts, and playlists with your audience.',
    image: '/integrations/spotify.svg',
    category: 'Content',
  },
  {
    name: 'Instagram',
    description: 'Display your Instagram feed with automatic updates.',
    image: '/integrations/instagram.svg',
    category: 'Social',
  },
  {
    name: 'Twitter',
    description: 'Show your latest tweets and increase your followers.',
    image: '/integrations/twitter.svg',
    category: 'Social',
  },
  {
    name: 'Google Calendar',
    description: 'Let visitors book appointments directly on your page.',
    image: '/integrations/google-calendar.svg',
    category: 'Productivity',
  },
  {
    name: 'Typeform',
    description: 'Create beautiful forms and surveys for your audience.',
    image: '/integrations/typeform.svg',
    category: 'Forms',
  },
  {
    name: 'Gumroad',
    description: 'Sell digital products directly through your links.',
    image: '/integrations/gumroad.svg',
    category: 'E-commerce',
  },
];

const categories = ['All', 'Analytics', 'Marketing', 'Automation', 'Payments', 'E-commerce', 'Content', 'Social', 'Productivity', 'Forms'];

export default function IntegrationsPage() {
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
                Connect with Your Favorite Tools
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Enhance your OpenTree experience by integrating with the platforms you already use.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
                  {categories.slice(0, 5).map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="rounded-full px-4 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                  <TabsTrigger 
                    value="More"
                    className="rounded-full px-4 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                  >
                    More
                  </TabsTrigger>
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {integrations
                      .filter(integration => category === 'All' || integration.category === category)
                      .map((integration) => (
                        <Card key={integration.name} className="border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                              <div className="w-12 h-12 mr-4 flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                                <Image 
                                  src={integration.image} 
                                  alt={integration.name} 
                                  width={32} 
                                  height={32}
                                />
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{integration.name}</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{integration.description}</p>
                            <Button asChild variant="outline" size="sm" className="w-full">
                              <Link href={`/integrations/${integration.name.toLowerCase().replace(' ', '-')}`}>
                                Learn More
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}

              <TabsContent value="More" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {integrations
                    .filter(integration => !['Analytics', 'Marketing', 'Automation', 'Payments'].includes(integration.category))
                    .map((integration) => (
                      <Card key={integration.name} className="border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 mr-4 flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                              <Image 
                                src={integration.image} 
                                alt={integration.name} 
                                width={32} 
                                height={32}
                              />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{integration.name}</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">{integration.description}</p>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={`/integrations/${integration.name.toLowerCase().replace(' ', '-')}`}>
                              Learn More
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* API Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Developer API</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Build custom integrations with our powerful and flexible API.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">RESTful API</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our comprehensive API allows you to programmatically create, update, and manage your OpenTree pages and links.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-6">
                    <code className="text-gray-800 dark:text-gray-300">
                      GET /api/v1/links<br />
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                  </div>
                  <div className="flex space-x-4">
                    <Button asChild variant="outline">
                      <Link href="/documentation/api">API Documentation</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/signup">Get API Key</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to connect your tools?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Create your OpenTree page today and start integrating with your favorite platforms.
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

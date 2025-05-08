import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Templates | OpenTree',
  description: 'Browse beautiful templates for your OpenTree link page.',
};

const templates = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean and simple design focusing on your content.',
    image: '/templates/minimal.jpg',
    category: 'Popular',
    isNew: false,
  },
  {
    id: 'gradient',
    name: 'Gradient',
    description: 'Beautiful gradient backgrounds that make your page pop.',
    image: '/templates/gradient.jpg',
    category: 'Creative',
    isNew: true,
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    description: 'Sleek dark theme for a modern look.',
    image: '/templates/dark.jpg',
    category: 'Popular',
    isNew: false,
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Professional template for businesses and entrepreneurs.',
    image: '/templates/business.jpg',
    category: 'Professional',
    isNew: false,
  },
  {
    id: 'creator',
    name: 'Creator',
    description: 'Showcase your creative work with this artistic template.',
    image: '/templates/creator.jpg',
    category: 'Creative',
    isNew: false,
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Stand out with vibrant neon accents and dark background.',
    image: '/templates/neon.jpg',
    category: 'Creative',
    isNew: true,
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Ultra-clean design with focus on typography.',
    image: '/templates/minimalist.jpg',
    category: 'Popular',
    isNew: false,
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Perfect for showcasing your work and projects.',
    image: '/templates/portfolio.jpg',
    category: 'Professional',
    isNew: false,
  },
];

const categories = ['All', 'Popular', 'Creative', 'Professional'];

export default function TemplatesPage() {
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
                Beautiful Templates for Your Links
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Choose from our collection of professionally designed templates to make your page stand out.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
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

        {/* Templates Grid */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {templates.map((template) => (
                <Card key={template.id} className="overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={template.image}
                      alt={template.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {template.isNew && (
                      <Badge className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700">New</Badge>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{template.name}</h3>
                      <Badge variant="outline" className="text-xs">{template.category}</Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{template.description}</p>
                  </CardContent>
                  <CardFooter className="p-5 pt-0 flex justify-between">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/templates/${template.id}`}>Preview</Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={`/signup?template=${template.id}`}>Use Template</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Template Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Can't find what you're looking for?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Create your own custom template with our easy-to-use editor. No design skills required!
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/signup">Create Custom Template</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to create your OpenTree page?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of creators, businesses, and influencers who use OpenTree to share their content.
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

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Features | OpenTree',
  description: 'Discover all the powerful features that make OpenTree the best Linktree alternative.',
};

const features = [
  {
    title: 'Unlimited Links',
    description: 'Add as many links as you want to your profile without any restrictions.',
    icon: '/icons/link.svg',
  },
  {
    title: 'Custom Themes',
    description: 'Personalize your page with custom colors, fonts, and layouts to match your brand.',
    icon: '/icons/palette.svg',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track clicks, views, and engagement with detailed analytics for all your links.',
    icon: '/icons/chart.svg',
  },
  {
    title: 'Social Icons',
    description: 'Add your social media profiles with beautiful icons for easy access.',
    icon: '/icons/social.svg',
  },
  {
    title: 'Custom Domains',
    description: 'Use your own domain name for a more professional and branded experience.',
    icon: '/icons/globe.svg',
  },
  {
    title: 'Mobile Optimization',
    description: 'Your page looks great on all devices with responsive design built-in.',
    icon: '/icons/mobile.svg',
  },
];

const advancedFeatures = [
  {
    title: 'Dark Mode Support',
    description: 'Automatically switch between light and dark themes based on user preferences.',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your visibility with built-in SEO tools and meta tags.',
  },
  {
    title: 'Password Protection',
    description: 'Secure your links with optional password protection for private content.',
  },
  {
    title: 'Scheduled Links',
    description: 'Set links to appear or disappear at specific dates and times.',
  },
  {
    title: 'Link Categories',
    description: 'Organize your links into categories for better navigation.',
  },
  {
    title: 'Custom CSS',
    description: 'Advanced users can add custom CSS for unlimited customization options.',
  },
];

export default function FeaturesPage() {
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
                Powerful Features for Your Digital Presence
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Everything you need to create, share, and grow with your audience - all in one place.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg">
                <Link href="/signup">Get Started for Free</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Core Features</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                OpenTree provides all the tools you need to create a beautiful link page.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                      <Image 
                        src={feature.icon} 
                        alt={feature.title} 
                        width={28} 
                        height={28}
                        className="text-blue-600 dark:text-blue-400" 
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Advanced Features</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Take your link page to the next level with these powerful capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {advancedFeatures.map((feature, index) => (
                <div key={index} className="flex items-start p-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to get started with OpenTree?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of creators, businesses, and influencers who use OpenTree to share their content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link href="/signup">Create Free Account</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white/10">
                <Link href="/templates">See Templates</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

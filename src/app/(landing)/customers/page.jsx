import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const metadata = {
  title: 'Customers | OpenTree',
  description: 'See how creators, businesses, and influencers are using OpenTree to grow their audience.',
};

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Content Creator',
    image: '/testimonials/sarah.jpg',
    quote: 'OpenTree has completely transformed how I share content with my audience. The customization options are incredible, and I\'ve seen a 40% increase in click-through rates since switching!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Entrepreneur',
    image: '/testimonials/michael.jpg',
    quote: 'As a business owner, I needed a professional solution for my link page. OpenTree delivers with its clean design and powerful analytics. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Digital Artist',
    image: '/testimonials/emma.jpg',
    quote: 'The templates are beautiful and I love how easy it is to customize everything. OpenTree helps me showcase my portfolio in a way that matches my artistic style.',
    rating: 4,
  },
  {
    name: 'David Kim',
    role: 'Fitness Coach',
    image: '/testimonials/david.jpg',
    quote: 'I use OpenTree to organize all my workout programs, nutrition guides, and social media. My clients love how easy it is to find everything in one place.',
    rating: 5,
  },
];

const caseStudies = [
  {
    title: 'How TechStart Increased Conversions by 75%',
    company: 'TechStart',
    image: '/case-studies/techstart.jpg',
    category: 'Business',
    excerpt: 'Learn how this tech startup used OpenTree to streamline their product offerings and saw a dramatic increase in conversion rates.',
  },
  {
    title: 'Building a Community of 500,000+ Followers',
    company: 'GreenLife',
    image: '/case-studies/greenlife.jpg',
    category: 'Creator',
    excerpt: 'Discover the strategies that helped this sustainability influencer grow their audience and increase engagement using OpenTree.',
  },
  {
    title: 'Simplifying the Customer Journey',
    company: 'StyleBox',
    image: '/case-studies/stylebox.jpg',
    category: 'E-commerce',
    excerpt: 'See how this fashion brand organized their product collections and simplified their customer journey with OpenTree.',
  },
];

const stats = [
  { value: '10M+', label: 'Monthly Visitors' },
  { value: '500K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '150+', label: 'Countries' },
];

export default function CustomersPage() {
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
                Trusted by Creators and Businesses Worldwide
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Join thousands of satisfied customers who use OpenTree to connect with their audience.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it - hear from the people who use OpenTree every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          fill
                          className="object-cover" 
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore how our customers are achieving their goals with OpenTree.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{study.category}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{study.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{study.excerpt}</p>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/case-studies/${study.company.toLowerCase()}`}>Read Case Study</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join our growing community</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Start creating your OpenTree page today and see why thousands of users love our platform.
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

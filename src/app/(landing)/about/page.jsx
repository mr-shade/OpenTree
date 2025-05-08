import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'About | OpenTree',
  description: 'Learn about OpenTree, our mission, and the team behind the platform.',
};

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Co-Founder & CEO',
    bio: 'Former product lead at a major tech company with a passion for helping creators succeed online.',
    image: '/team/alex.jpg',
    social: {
      twitter: 'alexjohnson',
      linkedin: 'alexjohnson',
    },
  },
  {
    name: 'Sarah Chen',
    role: 'Co-Founder & CTO',
    bio: 'Full-stack developer with 10+ years of experience building scalable web applications.',
    image: '/team/sarah.jpg',
    social: {
      twitter: 'sarahchen',
      linkedin: 'sarahchen',
    },
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Product',
    bio: 'Product strategist focused on creating intuitive user experiences that solve real problems.',
    image: '/team/michael.jpg',
    social: {
      twitter: 'michaelrodriguez',
      linkedin: 'michaelrodriguez',
    },
  },
  {
    name: 'Emma Wilson',
    role: 'Head of Design',
    bio: 'Award-winning designer with a background in both digital and print media.',
    image: '/team/emma.jpg',
    social: {
      twitter: 'emmawilson',
      linkedin: 'emmawilson',
    },
  },
  {
    name: 'David Kim',
    role: 'Head of Marketing',
    bio: 'Growth marketing expert who has helped scale multiple startups from zero to millions of users.',
    image: '/team/david.jpg',
    social: {
      twitter: 'davidkim',
      linkedin: 'davidkim',
    },
  },
  {
    name: 'Lisa Patel',
    role: 'Head of Customer Success',
    bio: 'Customer-focused leader dedicated to helping users get the most out of OpenTree.',
    image: '/team/lisa.jpg',
    social: {
      twitter: 'lisapatel',
      linkedin: 'lisapatel',
    },
  },
];

const values = [
  {
    title: 'Simplicity',
    description: 'We believe in making complex things simple. Our platform is intuitive and easy to use, allowing creators to focus on what they do best.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Creativity',
    description: 'We empower creators to express themselves authentically. Our platform provides the tools to showcase your unique brand and content.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Community',
    description: 'We believe in the power of connection. Our platform helps creators build and nurture their communities across the digital landscape.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'We're constantly evolving and improving. We listen to our users and develop features that help them stay ahead in a changing digital world.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const milestones = [
  {
    year: '2021',
    title: 'OpenTree Founded',
    description: 'Alex Johnson and Sarah Chen founded OpenTree with a vision to create the best link-in-bio platform for creators.',
  },
  {
    year: '2022',
    title: 'First 10,000 Users',
    description: 'OpenTree reached its first major milestone of 10,000 active users on the platform.',
  },
  {
    year: '2022',
    title: 'Seed Funding',
    description: 'Secured $2M in seed funding to accelerate growth and product development.',
  },
  {
    year: '2023',
    title: 'Major Platform Redesign',
    description: 'Launched a complete redesign of the platform with new features and improved user experience.',
  },
  {
    year: '2023',
    title: 'Reached 100,000 Users',
    description: 'Celebrated reaching 100,000 active users across 150+ countries.',
  },
  {
    year: '2024',
    title: 'Series A Funding',
    description: 'Raised $10M in Series A funding to expand the team and develop new innovative features.',
  },
];

export default function AboutPage() {
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
                About OpenTree
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                We're on a mission to help creators connect with their audience and simplify their online presence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  OpenTree was founded in 2021 by Alex Johnson and Sarah Chen, who recognized a need for a better way for creators to share their content across multiple platforms. As creators themselves, they understood the challenges of managing an online presence across various social media sites and content platforms.
                </p>
                <p>
                  What started as a simple tool for sharing links has evolved into a comprehensive platform that helps creators, businesses, and influencers connect with their audience, showcase their work, and grow their online presence.
                </p>
                <p>
                  Today, OpenTree is used by hundreds of thousands of creators in over 150 countries. Our team has grown from two founders working out of a coffee shop to a diverse group of talented individuals dedicated to building the best link-in-bio platform on the web.
                </p>
                <p>
                  We're proud of what we've built, but we're even more excited about what's to come. Our mission remains the same: to empower creators to share their work with the world in the simplest, most effective way possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                These core principles guide everything we do at OpenTree.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="text-blue-600 dark:text-blue-400 mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The talented people behind OpenTree who are passionate about helping creators succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill
                        className="object-cover" 
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                    <div className="text-blue-600 dark:text-blue-400 text-sm mb-3">{member.role}</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a 
                        href={`https://twitter.com/${member.social.twitter}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a 
                        href={`https://linkedin.com/in/${member.social.linkedin}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Key milestones in the OpenTree story.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="md:w-1/2 mb-8 md:mb-0">
                        <div className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                          <div className="text-blue-600 dark:text-blue-400 font-bold mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="md:w-1/2 relative">
                        <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-800 z-10"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join us on our journey</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Create your OpenTree page today and be part of our growing community of creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link href="/signup">Get Started for Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white/10">
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

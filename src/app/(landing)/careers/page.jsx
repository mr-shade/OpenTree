import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Careers | OpenTree',
  description: 'Join the OpenTree team and help build the future of link-in-bio pages for creators worldwide.',
};

const benefits = [
  {
    title: 'Remote-First Culture',
    description: 'Work from anywhere in the world. We believe in hiring the best talent regardless of location.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Hours',
    description: 'We focus on results, not hours worked. Set your own schedule and work when you're most productive.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Competitive Compensation',
    description: 'We offer competitive salaries, equity options, and performance bonuses to reward your contributions.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, wellness stipends, and mental health support for you and your family.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Professional Development',
    description: 'Learning stipends, conference budgets, and dedicated time for professional growth and skill development.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    title: 'Unlimited PTO',
    description: 'Take the time you need to rest, recharge, and enjoy life outside of work. We trust our team to manage their time.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const openPositions = [
  {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We're looking for a Senior Frontend Engineer to help build and improve our user-facing features using React, Next.js, and modern web technologies.',
    slug: 'senior-frontend-engineer',
  },
  {
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our backend team to build scalable APIs and services that power the OpenTree platform using Node.js, MongoDB, and AWS.',
    slug: 'backend-engineer',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'We're seeking a talented Product Designer to create beautiful, intuitive interfaces and experiences for our users.',
    slug: 'product-designer',
  },
  {
    title: 'Growth Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Drive user acquisition and retention through data-driven marketing strategies and campaigns.',
    slug: 'growth-marketing-manager',
  },
  {
    title: 'Customer Success Specialist',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help our users get the most out of OpenTree by providing exceptional support and guidance.',
    slug: 'customer-success-specialist',
  },
  {
    title: 'Content Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create engaging content that educates and inspires our users while driving organic growth.',
    slug: 'content-marketing-specialist',
  },
];

const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Customer Success', 'Operations'];

const testimonials = [
  {
    quote: "Joining OpenTree was one of the best decisions of my career. The team is incredibly talented and supportive, and I love the flexibility of remote work.",
    name: "David Chen",
    role: "Frontend Engineer",
    image: "/team/david-chen.jpg",
  },
  {
    quote: "I've never worked at a company that cares so much about both its users and its employees. The culture here is truly special.",
    name: "Maria Rodriguez",
    role: "Product Designer",
    image: "/team/maria.jpg",
  },
  {
    quote: "The growth opportunities at OpenTree are amazing. In just one year, I've learned so much and taken on new responsibilities that have accelerated my career.",
    name: "James Wilson",
    role: "Growth Marketing",
    image: "/team/james-w.jpg",
  },
];

export default function CareersPage() {
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
                Join Our Team
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Help us build the future of link-in-bio pages for creators worldwide.
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#open-positions">View Open Positions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Join OpenTree?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We're building a company where talented people can thrive, grow, and make an impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="text-blue-600 dark:text-blue-400 mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Culture */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Culture</h2>
                  <div className="prose prose-lg dark:prose-invert">
                    <p>
                      At OpenTree, we believe that great products are built by great teams. We've created a culture that values:
                    </p>
                    <ul>
                      <li><strong>Autonomy</strong> - We trust our team to make decisions and own their work.</li>
                      <li><strong>Transparency</strong> - We share information openly and honestly, from company metrics to decision-making.</li>
                      <li><strong>Collaboration</strong> - We work together across teams and time zones to solve problems.</li>
                      <li><strong>Growth</strong> - We're committed to helping each team member develop professionally and personally.</li>
                      <li><strong>Impact</strong> - We focus on work that makes a meaningful difference for our users.</li>
                    </ul>
                    <p>
                      As a remote-first company, we've built our culture around asynchronous communication, documentation, and regular virtual gatherings to stay connected.
                    </p>
                  </div>
                </div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/team/team-culture.jpg" 
                    alt="OpenTree team culture" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Team Says</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Hear from the people who make OpenTree special.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="text-4xl text-blue-200 dark:text-blue-800 mb-4">"</div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-6">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          fill
                          className="object-cover" 
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Find your perfect role and join us in our mission.
              </p>
            </div>

            <Tabs defaultValue="All" className="w-full max-w-4xl mx-auto">
              <div className="flex justify-center mb-8 overflow-x-auto">
                <TabsList className="bg-white dark:bg-gray-900 p-1 rounded-full border border-gray-200 dark:border-gray-700">
                  {departments.map((department) => (
                    <TabsTrigger 
                      key={department} 
                      value={department}
                      className="rounded-full px-4 py-2 whitespace-nowrap"
                    >
                      {department}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {departments.map((department) => (
                <TabsContent key={department} value={department} className="mt-0">
                  <div className="space-y-4">
                    {openPositions
                      .filter(position => department === 'All' || position.department === department)
                      .map((position, index) => (
                        <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{position.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  <Badge variant="outline" className="text-xs">{position.department}</Badge>
                                  <Badge variant="outline" className="text-xs">{position.location}</Badge>
                                  <Badge variant="outline" className="text-xs">{position.type}</Badge>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{position.description}</p>
                              </div>
                              <div className="mt-4 md:mt-0">
                                <Button asChild>
                                  <Link href={`/careers/${position.slug}`}>View Details</Link>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    
                    {openPositions.filter(position => department === 'All' || position.department === department).length === 0 && (
                      <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">No open positions in this department at the moment.</p>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Check back soon or send us your resume for future opportunities.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Hiring Process</h2>
              
              <div className="space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-6">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Application Review</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our team reviews your application and resume. We aim to respond to all applicants within one week.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-6">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Initial Interview</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      A 30-45 minute video call with a hiring manager to discuss your experience, skills, and fit for the role.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-6">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Skills Assessment</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Depending on the role, you may be asked to complete a take-home assignment or technical interview to demonstrate your skills.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-6">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Team Interviews</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Meet with potential teammates and cross-functional partners to ensure a good fit with our team and culture.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-6">
                    <span className="text-xl font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Final Interview & Offer</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      A final conversation with a founder or executive, followed by an offer if there's a mutual fit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Don't see the right role?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We're always looking for talented people to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <Link href="mailto:careers@opentree.com">Send Your Resume</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

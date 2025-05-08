import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Community | OpenTree',
  description: 'Join the OpenTree community to connect with other creators, share tips, and get support.',
};

const communityStats = [
  { value: '50K+', label: 'Community Members' },
  { value: '100+', label: 'Countries' },
  { value: '1000+', label: 'Monthly Posts' },
  { value: '24/7', label: 'Support' },
];

const upcomingEvents = [
  {
    title: 'OpenTree Creator Workshop',
    date: 'May 15, 2024',
    time: '1:00 PM - 3:00 PM EST',
    location: 'Virtual',
    description: 'Learn how to optimize your OpenTree page for maximum engagement and conversions.',
    image: '/events/workshop.jpg',
  },
  {
    title: 'Q&A with OpenTree Founders',
    date: 'May 22, 2024',
    time: '2:00 PM - 3:00 PM EST',
    location: 'Virtual',
    description: 'Join our founders for an open Q&A session about OpenTree and the future of link-in-bio pages.',
    image: '/events/qa.jpg',
  },
  {
    title: 'Creator Spotlight: Social Media Strategy',
    date: 'June 5, 2024',
    time: '1:00 PM - 2:30 PM EST',
    location: 'Virtual',
    description: 'Top creators share their strategies for growing their audience using OpenTree.',
    image: '/events/spotlight.jpg',
  },
];

const featuredMembers = [
  {
    name: 'Jessica Williams',
    role: 'Content Creator',
    bio: 'Fashion and lifestyle creator with over 500K followers across platforms.',
    image: '/community/jessica.jpg',
    opentree: '@jessicaw',
  },
  {
    name: 'Marcus Chen',
    role: 'Entrepreneur',
    bio: 'Founder of three successful startups and mentor to early-stage founders.',
    image: '/community/marcus.jpg',
    opentree: '@marcusc',
  },
  {
    name: 'Sophia Rodriguez',
    role: 'Digital Artist',
    bio: 'Award-winning digital artist specializing in surreal and fantasy art.',
    image: '/community/sophia.jpg',
    opentree: '@sophiar',
  },
  {
    name: 'James Wilson',
    role: 'Fitness Coach',
    bio: 'Certified personal trainer helping people achieve their fitness goals for over 10 years.',
    image: '/community/james.jpg',
    opentree: '@jamesw',
  },
];

const forumCategories = [
  {
    name: 'Getting Started',
    description: 'New to OpenTree? Ask questions and get help with the basics.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    posts: 1245,
    topics: 324,
  },
  {
    name: 'Tips & Tricks',
    description: 'Share your best practices and learn from other community members.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    posts: 3567,
    topics: 892,
  },
  {
    name: 'Showcase',
    description: 'Show off your OpenTree page and get feedback from the community.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    posts: 2789,
    topics: 645,
  },
  {
    name: 'Feature Requests',
    description: 'Suggest new features and vote on ideas from other users.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    posts: 1876,
    topics: 423,
  },
];

export default function CommunityPage() {
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
                Join the OpenTree Community
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Connect with other creators, share tips, get support, and grow together.
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="https://community.opentree.com" target="_blank">Join Community</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Tabs */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="forum" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white dark:bg-gray-900 p-1 rounded-full border border-gray-200 dark:border-gray-700">
                  <TabsTrigger 
                    value="forum"
                    className="rounded-full px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Forum
                  </TabsTrigger>
                  <TabsTrigger 
                    value="events"
                    className="rounded-full px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Events
                  </TabsTrigger>
                  <TabsTrigger 
                    value="members"
                    className="rounded-full px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Members
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="forum" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {forumCategories.map((category, index) => (
                    <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-600 dark:text-blue-400">
                            {category.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{category.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{category.description}</p>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <span className="mr-4">{category.topics} Topics</span>
                              <span>{category.posts} Posts</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button asChild>
                    <Link href="https://community.opentree.com/forum" target="_blank">Visit Forum</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="events" className="mt-0">
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-4">
                        <div className="relative h-48 md:h-auto">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:col-span-3 p-6">
                          <div className="flex items-center mb-2">
                            <Badge className="bg-blue-600 hover:bg-blue-700">Upcoming</Badge>
                            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{event.date} • {event.time}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {event.location}
                            </div>
                            <Button asChild>
                              <Link href={`https://community.opentree.com/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`} target="_blank">
                                Register
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button asChild variant="outline">
                    <Link href="https://community.opentree.com/events" target="_blank">View All Events</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="members" className="mt-0">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Featured Community Members</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredMembers.map((member, index) => (
                    <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                          <Image 
                            src={member.image} 
                            alt={member.name} 
                            fill
                            className="object-cover" 
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                        <div className="text-blue-600 dark:text-blue-400 text-sm mb-2">{member.role}</div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href={`https://opentree.com/${member.opentree}`} target="_blank">
                            View OpenTree
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button asChild>
                    <Link href="https://community.opentree.com/members" target="_blank">View All Members</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Discord Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden shadow-lg">
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mr-4" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
                    </svg>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Join Our Discord</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Connect with the OpenTree team and community in real-time. Get instant support, share ideas, and collaborate with other creators.
                  </p>
                  <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    <Link href="https://discord.gg/opentree" target="_blank">
                      Join Discord Server
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to join our community?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Create your OpenTree page today and connect with thousands of creators around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link href="/signup">Get Started for Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white/10">
                <Link href="https://community.opentree.com" target="_blank">Explore Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

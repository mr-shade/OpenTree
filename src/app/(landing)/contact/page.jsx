import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export const metadata = {
  title: 'Contact Us | OpenTree',
  description: 'Get in touch with the OpenTree team for support, feedback, or partnership inquiries.',
};

export default function ContactPage() {
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
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="How can we help you?" 
                        className="min-h-[150px]" 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto">Send Message</Button>
                  </form>
                </div>
                
                <div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                          <p className="text-gray-900 dark:text-white">support@opentree.com</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                          <p className="text-gray-900 dark:text-white">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                          <p className="text-gray-900 dark:text-white">123 Tech Street<br />San Francisco, CA 94107</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">How do I reset my password?</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            You can reset your password by clicking on the "Forgot Password" link on the login page.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">How do I change my username?</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            You can change your username in your account settings after logging in.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">Is OpenTree free to use?</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Yes, OpenTree is completely free to use with all features included.
                          </p>
                        </div>
                        <div className="pt-2">
                          <Button asChild variant="outline" size="sm">
                            <Link href="/documentation">View All FAQs</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Other Ways to Get Support</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We offer multiple channels to help you get the support you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Documentation</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Browse our comprehensive documentation for guides and tutorials.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/documentation">View Documentation</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Join our community forum to connect with other users and get help.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/community">Join Community</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Live Chat</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Chat with our support team in real-time for immediate assistance.
                  </p>
                  <Button>Start Chat</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

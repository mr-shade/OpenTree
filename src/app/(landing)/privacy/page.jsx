import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Privacy Policy | OpenTree',
  description: 'Learn how OpenTree collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-950 z-0"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Last updated: May 1, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Introduction</h2>
                <p>
                  At OpenTree, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
                </p>

                <h2>Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us when you:
                </p>
                <ul>
                  <li>Register for an account</li>
                  <li>Create or edit your profile</li>
                  <li>Add links to your OpenTree page</li>
                  <li>Communicate with us</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Respond to surveys or promotions</li>
                </ul>
                <p>
                  This information may include:
                </p>
                <ul>
                  <li>Your name, email address, and profile information</li>
                  <li>Content you add to your OpenTree page</li>
                  <li>Payment information (processed securely through our payment processors)</li>
                  <li>Communications you send to us</li>
                </ul>
                <p>
                  We also automatically collect certain information when you visit our website or use our services, including:
                </p>
                <ul>
                  <li>Log information (IP address, browser type, pages visited, etc.)</li>
                  <li>Device information (hardware model, operating system, unique device identifiers)</li>
                  <li>Usage data (how you interact with our services)</li>
                  <li>Cookies and similar technologies</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative messages, updates, and security alerts</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Provide customer service and technical support</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Personalize and improve your experience</li>
                  <li>Develop new products and services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>Protect the rights and property of OpenTree and others</li>
                </ul>

                <h2>Sharing Your Information</h2>
                <p>
                  We may share your information in the following circumstances:
                </p>
                <ul>
                  <li>With service providers who perform services on our behalf</li>
                  <li>With third-party analytics providers to help us understand how users interact with our services</li>
                  <li>In response to a legal request if we believe disclosure is required by law</li>
                  <li>To protect the rights, property, and safety of OpenTree, our users, and the public</li>
                  <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition</li>
                  <li>With your consent or at your direction</li>
                </ul>
                <p>
                  We do not sell your personal information to third parties.
                </p>

                <h2>Your Choices</h2>
                <p>
                  You have several choices regarding the information we collect and how it's used:
                </p>
                <ul>
                  <li><strong>Account Information:</strong> You can update your account information at any time by logging into your account.</li>
                  <li><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject cookies.</li>
                  <li><strong>Promotional Communications:</strong> You can opt out of receiving promotional emails by following the instructions in those emails.</li>
                  <li><strong>Analytics:</strong> You can opt out of certain analytics tracking by using browser add-ons or settings.</li>
                </ul>

                <h2>Data Security</h2>
                <p>
                  We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.
                </p>

                <h2>International Data Transfers</h2>
                <p>
                  OpenTree is based in the United States, and the information we collect is governed by U.S. law. If you are accessing our services from outside the United States, please be aware that information collected through our services may be transferred to, processed, and stored in the United States and other countries where our servers are located.
                </p>

                <h2>Children's Privacy</h2>
                <p>
                  Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information as quickly as possible.
                </p>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective. We encourage you to review this Privacy Policy periodically for the latest information on our privacy practices.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <p>
                  Email: <a href="mailto:privacy@opentree.com">privacy@opentree.com</a><br />
                  Address: 123 Tech Street, San Francisco, CA 94107
                </p>
              </div>

              <div className="mt-16 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Have questions about our privacy practices?
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

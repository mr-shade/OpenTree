import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Terms of Service | OpenTree',
  description: 'Read the terms and conditions for using the OpenTree platform.',
};

export default function TermsPage() {
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
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Last updated: May 1, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Introduction</h2>
                <p>
                  Welcome to OpenTree. These Terms of Service ("Terms") govern your access to and use of the OpenTree website, services, and applications (collectively, the "Service"). Please read these Terms carefully before using the Service.
                </p>
                <p>
                  By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
                </p>

                <h2>Using OpenTree</h2>
                <h3>Account Registration</h3>
                <p>
                  To use certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                <p>
                  You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>

                <h3>Age Requirements</h3>
                <p>
                  You must be at least 13 years old to use the Service. If you are under 18, you must have permission from a parent or guardian to use the Service, and they must agree to these Terms on your behalf.
                </p>

                <h2>User Content</h2>
                <p>
                  The Service allows you to create, upload, post, send, receive, and store content, including links, text, photos, videos, and other materials (collectively, "User Content"). You retain all rights in and to your User Content.
                </p>
                <p>
                  By creating, uploading, posting, sending, receiving, storing, or otherwise making available any User Content on or through the Service, you grant OpenTree a worldwide, non-exclusive, royalty-free license to use, copy, modify, create derivative works based upon, distribute, publicly display, and publicly perform your User Content in connection with operating and providing the Service.
                </p>
                <p>
                  You are solely responsible for your User Content and the consequences of posting or publishing it. You represent and warrant that:
                </p>
                <ul>
                  <li>You own or have the necessary rights to use and authorize OpenTree to use your User Content as described in these Terms;</li>
                  <li>Your User Content does not violate the rights of any third party, including intellectual property rights and privacy rights; and</li>
                  <li>Your User Content complies with these Terms and all applicable laws and regulations.</li>
                </ul>

                <h2>Prohibited Conduct</h2>
                <p>
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <ul>
                  <li>Using the Service for any illegal purpose or in violation of any local, state, national, or international law;</li>
                  <li>Violating or encouraging others to violate the rights of third parties, including intellectual property rights;</li>
                  <li>Posting, uploading, or sharing User Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable;</li>
                  <li>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with a person or entity;</li>
                  <li>Interfering with or disrupting the Service or servers or networks connected to the Service;</li>
                  <li>Attempting to gain unauthorized access to the Service or other users' accounts;</li>
                  <li>Using the Service to distribute unsolicited promotional or commercial content or other unwanted or mass solicitations;</li>
                  <li>Collecting or harvesting any information from the Service, including user account information, without permission;</li>
                  <li>Using automated means, including spiders, robots, crawlers, or data mining tools, to download data from the Service;</li>
                  <li>Introducing any viruses, trojan horses, worms, logic bombs, or other harmful material to the Service.</li>
                </ul>

                <h2>Intellectual Property</h2>
                <p>
                  The Service and its original content, features, and functionality are owned by OpenTree and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p>
                  OpenTree respects the intellectual property rights of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us at <a href="mailto:copyright@opentree.com">copyright@opentree.com</a>.
                </p>

                <h2>Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
                </p>

                <h2>Disclaimer of Warranties</h2>
                <p>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                </p>
                <p>
                  OPENTREE DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICE OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                  IN NO EVENT WILL OPENTREE, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE SERVICE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                </p>

                <h2>Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless OpenTree, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.
                </p>

                <h2>Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>

                <h2>Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p>
                  Email: <a href="mailto:terms@opentree.com">terms@opentree.com</a><br />
                  Address: 123 Tech Street, San Francisco, CA 94107
                </p>
              </div>

              <div className="mt-16 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Have questions about our terms?
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

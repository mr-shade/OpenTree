import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5 z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-20 z-0"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2 space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-2">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                Introducing OpenTree 1.0
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                One link for <span className="text-blue-600">all</span> your content
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                OpenTree is the open-source platform that helps you share everything you create, curate and sell from one link. Used by millions of creators worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-lg rounded-xl shadow-lg shadow-blue-500/20"
                >
                  <Link href="/signup">Get Started — It's Free</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg rounded-xl border-2"
                >
                  <Link href="/login">Log In</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-blue-600">10,000+</span> creators trust OpenTree
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative w-full max-w-md mx-auto">
                {/* Phone frame */}
                <div className="relative rounded-[2.5rem] border-8 border-gray-900 shadow-xl bg-gray-800 p-2 aspect-[9/19]">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>

                  {/* Screen content */}
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
                    <div className="h-1/4 bg-gradient-to-r from-blue-600 to-blue-500 p-6 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 bg-white rounded-full shadow-lg mb-3 flex items-center justify-center">
                        <span className="text-blue-600 text-2xl font-bold">OT</span>
                      </div>
                      <h2 className="text-white text-xl font-bold">Sarah Johnson</h2>
                      <p className="text-blue-100 text-sm">Digital Creator & Influencer</p>
                    </div>

                    <div className="p-4 space-y-3 overflow-y-auto">
                      {[
                        { name: "Instagram", icon: "instagram", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
                        { name: "YouTube Channel", icon: "youtube", color: "bg-red-600" },
                        { name: "My Portfolio", icon: "link", color: "bg-blue-600" },
                        { name: "Latest Blog Post", icon: "blog", color: "bg-green-600" },
                        { name: "Podcast", icon: "podcast", color: "bg-purple-600" }
                      ].map((link, i) => (
                        <div
                          key={i}
                          className={`${link.color} text-white rounded-xl p-3 text-center shadow-md flex items-center justify-center space-x-2`}
                        >
                          <span className="text-sm font-medium">{link.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-4 border-y border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-gray-500 mb-8 text-sm font-medium uppercase tracking-wider">Trusted by creators from companies like</p>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {["Google", "Microsoft", "Spotify", "Airbnb", "Amazon", "Meta"].map((brand) => (
              <div key={brand} className="text-gray-400 text-xl font-bold">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Everything you need in one place</h2>
            <p className="text-xl text-gray-600">
              OpenTree provides all the tools you need to create, manage, and grow your online presence with just one link.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multiple Link Pages",
                description: "Create unlimited link pages for different purposes, projects, or audiences.",
                icon: "📑"
              },
              {
                title: "Custom Themes",
                description: "Choose from beautiful themes or create your own with our intuitive editor.",
                icon: "🎨"
              },
              {
                title: "Advanced Analytics",
                description: "Track views, clicks, and engagement to optimize your content strategy.",
                icon: "📊"
              },
              {
                title: "Custom Domains",
                description: "Use your own domain name for a more professional and branded experience.",
                icon: "🌐"
              },
              {
                title: "Social Integration",
                description: "Connect all your social profiles with beautiful icons and previews.",
                icon: "🔗"
              },
              {
                title: "Open Source",
                description: "100% open source. Customize it to your needs or contribute to the project.",
                icon: "⚙️"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Loved by creators worldwide</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "OpenTree has completely transformed how I share my content. It's so easy to use and looks incredibly professional.",
                author: "Alex Chen",
                role: "Content Creator"
              },
              {
                quote: "The analytics feature alone is worth it. I can finally see which links are performing best and optimize accordingly.",
                author: "Maria Rodriguez",
                role: "Digital Marketer"
              },
              {
                quote: "As a developer, I love that OpenTree is open source. I've added custom features for my specific needs.",
                author: "James Wilson",
                role: "Software Engineer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-blue-600 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-600">
              Start for free, upgrade when you need more features. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Free</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mb-6">Perfect for getting started with basic features.</p>
                <Button
                  asChild
                  className="w-full rounded-xl"
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
              <div className="px-8 pb-8 pt-2">
                <ul className="space-y-3">
                  {["1 link page", "Basic analytics", "5 custom links", "Standard themes"].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-blue-600 rounded-2xl border border-blue-500 overflow-hidden shadow-xl transform scale-105">
              <div className="p-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium mb-4">
                  Popular
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Pro</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-white">$9</span>
                  <span className="text-blue-200 ml-2">/month</span>
                </div>
                <p className="text-blue-100 mb-6">Everything you need for professional use.</p>
                <Button
                  asChild
                  variant="secondary"
                  className="w-full rounded-xl bg-white text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
              <div className="px-8 pb-8 pt-2">
                <ul className="space-y-3">
                  {["Unlimited link pages", "Advanced analytics", "Unlimited custom links", "All themes", "Custom domains", "Priority support"].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-blue-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Enterprise</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold">$29</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mb-6">Advanced features for teams and businesses.</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-xl"
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
              <div className="px-8 pb-8 pt-2">
                <ul className="space-y-3">
                  {["Everything in Pro", "Team collaboration", "API access", "Custom branding", "Dedicated account manager", "SLA guarantees"].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to simplify your online presence?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join over 10,000 creators who use OpenTree to connect with their audience and grow their brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg rounded-xl bg-white text-blue-600 hover:bg-blue-50"
            >
              <Link href="/signup">Get Started for Free</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg rounded-xl border-2 border-white text-white hover:bg-blue-700"
            >
              <Link href="/demo">See Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

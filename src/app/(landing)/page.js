import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white/80 to-white z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5 z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 z-0 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-20 z-0 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-300 rounded-full filter blur-3xl opacity-10 z-0 animate-pulse"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2 space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 text-sm font-medium mb-2 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                Introducing OpenTree 1.0
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                One link for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">all</span> your content
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                OpenTree is the premium open-source platform that helps you share everything you create, curate and sell from one beautiful link. Used by millions of creators worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-16 px-10 text-lg rounded-xl shadow-xl shadow-blue-500/20 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-0"
                >
                  <Link href="/signup">Get Started — It's Free</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-16 px-10 text-lg rounded-xl border-2 hover:bg-blue-50"
                >
                  <Link href="/login">Log In</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-4 text-gray-500 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-gray-100">
                <div className="flex -space-x-3">
                  {["A", "B", "C", "D"].map((letter, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-white flex items-center justify-center text-sm font-bold text-blue-600 shadow-sm">
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <span className="font-semibold text-blue-600">10,000+</span> creators trust OpenTree
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative w-full max-w-md mx-auto">
                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-300 rounded-full z-10 animate-bounce-slow opacity-80"></div>
                <div className="absolute -bottom-6 left-10 w-12 h-12 bg-purple-400 rounded-full z-10 animate-bounce-slow opacity-80" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/4 -left-8 w-14 h-14 bg-blue-400 rounded-full z-10 animate-bounce-slow opacity-80" style={{ animationDelay: '1s' }}></div>

                {/* Phone frame */}
                <div className="relative rounded-[2.5rem] border-8 border-gray-900 shadow-2xl bg-gray-800 p-2 aspect-[9/19] rotate-1 transform hover:rotate-0 transition-transform duration-500">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>

                  {/* Screen content */}
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
                    <div className="h-1/4 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 p-6 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 bg-white rounded-full shadow-lg mb-3 flex items-center justify-center">
                        <span className="text-blue-600 text-2xl font-bold">OT</span>
                      </div>
                      <h2 className="text-white text-xl font-bold">Sarah Johnson</h2>
                      <p className="text-blue-100 text-sm">Digital Creator & Influencer</p>
                    </div>

                    <div className="p-4 space-y-3 overflow-y-auto">
                      {[
                        { name: "Instagram", icon: "instagram", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
                        { name: "YouTube Channel", icon: "youtube", color: "bg-gradient-to-r from-red-600 to-red-500" },
                        { name: "My Portfolio", icon: "link", color: "bg-gradient-to-r from-blue-600 to-blue-500" },
                        { name: "Latest Blog Post", icon: "blog", color: "bg-gradient-to-r from-green-600 to-green-500" },
                        { name: "Podcast", icon: "podcast", color: "bg-gradient-to-r from-purple-600 to-purple-500" }
                      ].map((link, i) => (
                        <div
                          key={i}
                          className={`${link.color} text-white rounded-xl p-4 text-center shadow-md flex items-center justify-center space-x-2 hover:scale-[1.02] transition-transform cursor-pointer`}
                        >
                          <span className="text-sm font-medium">{link.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full -z-10 animate-pulse"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full -z-10 animate-pulse"></div>
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

      {/* Features Showcase Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/0 pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              100% Free & Open Source
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Everything you need, <span className="text-blue-600">completely free</span></h2>
            <p className="text-xl text-gray-600">
              OpenTree provides all premium features at no cost. No paid plans, no limitations, just an amazing open-source platform for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-xl border border-blue-100/50 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full opacity-50"></div>

              <h3 className="text-2xl font-bold mb-6 relative z-10">Everything Included</h3>

              <ul className="space-y-4 relative z-10">
                {[
                  "Unlimited link pages",
                  "Advanced analytics & insights",
                  "Custom domains support",
                  "Beautiful themes & customization",
                  "Social media integration",
                  "SEO optimization tools",
                  "Mobile-responsive designs",
                  "Scheduled links & content",
                  "Team collaboration features",
                  "API access for developers"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 relative z-10">
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-xl h-14 text-lg shadow-lg shadow-blue-500/20"
                >
                  <Link href="/signup">Get Started — It's Free Forever</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Why is OpenTree completely free?",
                  description: "We believe in the power of open source. Our mission is to provide creators with the best tools without any financial barriers. OpenTree is built by the community, for the community."
                },
                {
                  title: "How is this sustainable?",
                  description: "OpenTree is maintained by passionate developers and supported by the open-source community. We focus on building a great product first, with optional donations and community contributions to support ongoing development."
                },
                {
                  title: "Will it always be free?",
                  description: "Yes! OpenTree will always remain free and open source. We're committed to keeping all features accessible to everyone, regardless of their financial situation."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse"></span>
            Join thousands of creators today
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to <span className="text-blue-200">transform</span> your online presence?
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join over 10,000 creators who use OpenTree to connect with their audience,
            share their content, and grow their brand — all with just one link.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-xl mx-auto">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-16 px-10 text-lg rounded-xl bg-white text-blue-600 hover:bg-blue-50 shadow-xl shadow-blue-900/30 font-semibold"
            >
              <Link href="/signup">Get Started — Free Forever</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-16 px-10 text-lg rounded-xl border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm font-semibold"
            >
              <Link href="/demo">See Live Demo</Link>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Setup in minutes
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              100% open source
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

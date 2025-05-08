import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Create beautiful link pages for free
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                OpenTree is an open-source alternative to Linktree. Create multiple link pages, customize them with themes, and share them with the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center"
                >
                  Get Started — It's Free
                </Link>
                <Link
                  href="/login"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 text-center"
                >
                  Log In
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full max-w-md mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                  <div className="p-6 bg-blue-600">
                    <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-blue-600 text-2xl font-bold">OT</span>
                    </div>
                    <h2 className="text-white text-xl font-bold text-center">John Doe</h2>
                    <p className="text-blue-100 text-center mt-1">Developer & Designer</p>
                  </div>
                  <div className="p-6 space-y-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg p-4 text-center cursor-pointer"
                      >
                        Link #{item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-100 rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Everything you need to create amazing link pages</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multiple Link Pages",
                description: "Create as many link pages as you need for different purposes or audiences."
              },
              {
                title: "Custom Themes",
                description: "Choose from pre-built themes or create your own with custom colors."
              },
              {
                title: "Analytics",
                description: "Track views and clicks to understand how your audience interacts with your links."
              },
              {
                title: "Custom URLs",
                description: "Create memorable URLs for your link pages that are easy to share."
              },
              {
                title: "Social Icons",
                description: "Add icons for popular social platforms to make your links more recognizable."
              },
              {
                title: "Open Source",
                description: "OpenTree is 100% open source. Use it, modify it, and contribute to it."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create your link page?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of creators who use OpenTree to share their content.</p>
          <Link
            href="/signup"
            className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg inline-block"
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
}

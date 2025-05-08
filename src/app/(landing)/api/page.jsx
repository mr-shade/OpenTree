import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'API | OpenTree',
  description: 'Integrate with OpenTree using our powerful API. Build custom applications and automate your workflow.',
};

const endpoints = [
  {
    method: 'GET',
    path: '/api/v1/links',
    description: 'Retrieve all links for the authenticated user',
    category: 'Links',
  },
  {
    method: 'POST',
    path: '/api/v1/links',
    description: 'Create a new link',
    category: 'Links',
  },
  {
    method: 'GET',
    path: '/api/v1/links/:id',
    description: 'Retrieve a specific link by ID',
    category: 'Links',
  },
  {
    method: 'PUT',
    path: '/api/v1/links/:id',
    description: 'Update a specific link',
    category: 'Links',
  },
  {
    method: 'DELETE',
    path: '/api/v1/links/:id',
    description: 'Delete a specific link',
    category: 'Links',
  },
  {
    method: 'GET',
    path: '/api/v1/pages',
    description: 'Retrieve all pages for the authenticated user',
    category: 'Pages',
  },
  {
    method: 'GET',
    path: '/api/v1/pages/:id',
    description: 'Retrieve a specific page by ID',
    category: 'Pages',
  },
  {
    method: 'PUT',
    path: '/api/v1/pages/:id',
    description: 'Update a specific page',
    category: 'Pages',
  },
  {
    method: 'GET',
    path: '/api/v1/analytics/links',
    description: 'Retrieve analytics for all links',
    category: 'Analytics',
  },
  {
    method: 'GET',
    path: '/api/v1/analytics/links/:id',
    description: 'Retrieve analytics for a specific link',
    category: 'Analytics',
  },
  {
    method: 'GET',
    path: '/api/v1/analytics/pages/:id',
    description: 'Retrieve analytics for a specific page',
    category: 'Analytics',
  },
  {
    method: 'GET',
    path: '/api/v1/user',
    description: 'Retrieve the authenticated user\'s profile',
    category: 'User',
  },
  {
    method: 'PUT',
    path: '/api/v1/user',
    description: 'Update the authenticated user\'s profile',
    category: 'User',
  },
];

const categories = ['All', 'Links', 'Pages', 'Analytics', 'User'];

export default function ApiPage() {
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
                OpenTree API
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Build custom integrations and automate your workflow with our powerful API.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/signup">Get API Key</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                  <Link href="/documentation/api">Full Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* API Overview */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">API Overview</h2>
              
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Base URL</h3>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <code className="text-gray-800 dark:text-gray-300">
                        https://api.opentree.com/v1
                      </code>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Authentication</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      All API requests require authentication using an API key. You can generate an API key in your account settings.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <code className="text-gray-800 dark:text-gray-300">
                        Authorization: Bearer YOUR_API_KEY
                      </code>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Response Format</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      All responses are returned in JSON format. Successful requests will return a 2xx status code.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <code className="text-gray-800 dark:text-gray-300">
                        {`{
  "data": { ... },
  "meta": {
    "pagination": {
      "total": 100,
      "count": 10,
      "per_page": 10,
      "current_page": 1,
      "total_pages": 10
    }
  }
}`}
                      </code>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Error Handling</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Errors will return an appropriate HTTP status code and a JSON response with details about the error.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <code className="text-gray-800 dark:text-gray-300">
                        {`{
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid",
    "details": [ ... ]
  }
}`}
                      </code>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">API Endpoints</h2>
              
              <Tabs defaultValue="All" className="w-full">
                <TabsList className="w-full bg-white dark:bg-gray-900 p-1 rounded-lg mb-6 border border-gray-200 dark:border-gray-700">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="flex-1"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {categories.map((category) => (
                  <TabsContent key={category} value={category} className="mt-0">
                    <Card className="border border-gray-200 dark:border-gray-800">
                      <CardContent className="p-0">
                        <div className="divide-y divide-gray-200 dark:divide-gray-800">
                          {endpoints
                            .filter(endpoint => category === 'All' || endpoint.category === category)
                            .map((endpoint, index) => (
                              <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                                <div className="flex items-start">
                                  <Badge 
                                    className={`mr-3 ${
                                      endpoint.method === 'GET' 
                                        ? 'bg-green-600 hover:bg-green-700' 
                                        : endpoint.method === 'POST'
                                        ? 'bg-blue-600 hover:bg-blue-700'
                                        : endpoint.method === 'PUT'
                                        ? 'bg-yellow-600 hover:bg-yellow-700'
                                        : 'bg-red-600 hover:bg-red-700'
                                    }`}
                                  >
                                    {endpoint.method}
                                  </Badge>
                                  <div>
                                    <div className="font-mono text-sm text-gray-900 dark:text-white mb-2">
                                      {endpoint.path}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">
                                      {endpoint.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Code Examples</h2>
              
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="w-full bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-6">
                  <TabsTrigger value="javascript" className="flex-1">JavaScript</TabsTrigger>
                  <TabsTrigger value="python" className="flex-1">Python</TabsTrigger>
                  <TabsTrigger value="curl" className="flex-1">cURL</TabsTrigger>
                </TabsList>
                
                <TabsContent value="javascript" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <code className="text-gray-800 dark:text-gray-300">
                          {`// Get all links
const getLinks = async () => {
  const response = await fetch('https://api.opentree.com/v1/links', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  });
  
  const data = await response.json();
  return data;
};

// Create a new link
const createLink = async (linkData) => {
  const response = await fetch('https://api.opentree.com/v1/links', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(linkData)
  });
  
  const data = await response.json();
  return data;
};`}
                        </code>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="python" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <code className="text-gray-800 dark:text-gray-300">
                          {`import requests

API_KEY = 'YOUR_API_KEY'
BASE_URL = 'https://api.opentree.com/v1'

# Get all links
def get_links():
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    }
    
    response = requests.get(f'{BASE_URL}/links', headers=headers)
    return response.json()

# Create a new link
def create_link(link_data):
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    }
    
    response = requests.post(
        f'{BASE_URL}/links',
        headers=headers,
        json=link_data
    )
    
    return response.json()`}
                        </code>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="curl" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <code className="text-gray-800 dark:text-gray-300">
                          {`# Get all links
curl -X GET \\
  https://api.opentree.com/v1/links \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json'

# Create a new link
curl -X POST \\
  https://api.opentree.com/v1/links \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "title": "My Website",
    "url": "https://example.com",
    "active": true
  }'`}
                        </code>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to start building?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Create an account to get your API key and start integrating with OpenTree.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link href="/signup">Get Started for Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white/10">
                <Link href="/documentation/api">Read Full Documentation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

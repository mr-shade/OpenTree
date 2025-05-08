'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Eye, Link as LinkIcon, Edit, ExternalLink, Search, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TreesOverview({ trees, loading = false }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTrees = trees.filter(tree => 
    tree.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (tree.description && tree.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  if (loading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">Your Link Pages</h2>
          <div className="w-64 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="h-24 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              <CardContent className="p-4">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4 animate-pulse"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4 animate-pulse"></div>
                <div className="flex justify-between mb-4">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
                </div>
                <div className="flex space-x-2">
                  <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
                  <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">Your Link Pages</h2>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="text"
              placeholder="Search pages..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button asChild className="gap-2">
            <Link href="/dashboard/trees/new">
              <PlusCircle size={16} />
              Create New Page
            </Link>
          </Button>
        </div>
      </div>
      
      {filteredTrees.length === 0 && (
        <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          {searchQuery ? (
            <>
              <h3 className="text-xl font-semibold mb-4 dark:text-gray-100">No pages match your search</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try a different search term or clear your search
              </p>
              <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-4 dark:text-gray-100">You don't have any link pages yet</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Create your first link page to start sharing your content with the world.
              </p>
              <Button asChild>
                <Link href="/dashboard/trees/new">Create Your First Page</Link>
              </Button>
            </>
          )}
        </Card>
      )}
      
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrees.map((tree) => (
            <motion.div
              key={tree._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                <div
                  className="h-24 p-4 flex items-center justify-center"
                  style={{
                    backgroundColor: tree.backgroundColor || '#3b82f6',
                    color: tree.textColor || '#ffffff'
                  }}
                >
                  <h3 className="text-xl font-bold">{tree.title}</h3>
                </div>
                
                <CardContent className="p-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {tree.description || 'No description'}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Badge variant={tree.isPublished ? "success" : "secondary"} className="px-2 py-1 text-xs">
                      {tree.isPublished ? 'Published' : 'Draft'}
                    </Badge>
                    
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{tree.views || 0} views</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button asChild variant="default" className="flex-1 gap-1">
                      <Link href={`/dashboard/trees/${tree._id}/edit`}>
                        <Edit className="h-4 w-4" />
                        <span>Edit</span>
                      </Link>
                    </Button>
                    
                    <Button asChild variant="outline" className="flex-1 gap-1">
                      <Link href={`/${tree.slug}`} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                        <span>View</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}

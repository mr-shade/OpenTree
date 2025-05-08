import Link from 'next/link';
import dbConnect from '@/lib/db/mongoose';
import Tree from '@/models/Tree';

async function getTrees(userId) {
  await dbConnect();
  
  try {
    const trees = await Tree.find({ owner: userId }).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(trees));
  } catch (error) {
    console.error('Error fetching trees:', error);
    return [];
  }
}

export default async function TreeList({ userId }) {
  const trees = await getTrees(userId);
  
  if (trees.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <h3 className="text-xl font-semibold mb-4">You don't have any link pages yet</h3>
        <p className="text-gray-600 mb-6">
          Create your first link page to start sharing your content with the world.
        </p>
        <Link
          href="/dashboard/trees/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block"
        >
          Create Your First Page
        </Link>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trees.map((tree) => (
        <div key={tree._id} className="bg-white rounded-lg shadow overflow-hidden">
          <div 
            className="h-24 p-4 flex items-center justify-center"
            style={{ 
              backgroundColor: tree.backgroundColor || '#3b82f6',
              color: tree.textColor || '#ffffff'
            }}
          >
            <h3 className="text-xl font-bold">{tree.title}</h3>
          </div>
          
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-4">
              {tree.description || 'No description'}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>{tree.isPublished ? 'Published' : 'Draft'}</span>
              <span>{tree.views} views</span>
            </div>
            
            <div className="flex flex-col space-y-2">
              <Link
                href={`/dashboard/trees/${tree._id}/edit`}
                className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded"
              >
                Edit
              </Link>
              
              <Link
                href={`/${tree.slug}`}
                className="border border-gray-300 hover:bg-gray-50 text-gray-800 text-center py-2 px-4 rounded"
                target="_blank"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

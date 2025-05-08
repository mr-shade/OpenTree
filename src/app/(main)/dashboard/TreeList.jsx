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
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
        <h3 className="text-xl font-semibold mb-4 dark:text-gray-100">You don't have any link pages yet</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
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
        <div key={tree._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg">
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
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {tree.description || 'No description'}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className={`px-2 py-1 rounded-full text-xs ${
                tree.isPublished
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                  : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
              }`}>
                {tree.isPublished ? 'Published' : 'Draft'}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                {tree.views || 0} views
              </span>
            </div>

            <div className="flex space-x-2">
              <Link
                href={`/dashboard/trees/${tree._id}/edit`}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-md transition-colors"
              >
                Edit
              </Link>

              <Link
                href={`/${tree.slug}`}
                className="flex-1 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-center py-2 px-4 rounded-md transition-colors"
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

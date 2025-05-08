import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth/session';
import dbConnect from '@/lib/db/mongoose';
import Tree from '@/models/Tree';
import TreeEditor from './TreeEditor';

async function getTree(id, userId) {
  await dbConnect();
  
  try {
    const tree = await Tree.findById(id);
    
    if (!tree) {
      return null;
    }
    
    if (tree.owner.toString() !== userId) {
      return null;
    }
    
    return JSON.parse(JSON.stringify(tree));
  } catch (error) {
    console.error('Error fetching tree:', error);
    return null;
  }
}

export default async function EditTreePage({ params }) {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  const tree = await getTree(params.id, user.id);
  
  if (!tree) {
    redirect('/dashboard');
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Edit: {tree.title}</h1>
          <Link
            href="/dashboard"
            className="text-blue-600 hover:text-blue-800"
          >
            Back to Dashboard
          </Link>
        </div>
        
        <TreeEditor tree={tree} />
      </div>
    </div>
  );
}

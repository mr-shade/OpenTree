import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth/session';
import DashboardHeader from './DashboardHeader';
import TreeList from './TreeList';

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <DashboardHeader user={user} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Your Link Pages</h1>
          <Link
            href="/dashboard/trees/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Create New Page
          </Link>
        </div>
        
        <TreeList userId={user.id} />
      </main>
    </div>
  );
}

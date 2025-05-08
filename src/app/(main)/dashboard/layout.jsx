import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth/session';
import DashboardSidebar from './DashboardSidebar';

export default async function DashboardLayout({ children }) {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex">
        <DashboardSidebar user={user} />
        <main className="flex-1 p-6 lg:p-8 pt-24 lg:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
}

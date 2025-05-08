import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth/session';
import AnalyticsOverview from '@/components/dashboard/AnalyticsOverview';

export default async function AnalyticsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Analytics</h1>
      </div>
      
      <AnalyticsOverview userId={user.id} />
    </div>
  );
}

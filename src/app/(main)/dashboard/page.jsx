import { Suspense } from 'react';
import { getCurrentUser } from '@/lib/auth/session';
import { fetchDashboardData } from './utils/fetchDashboardData';
import StatsCard from '@/components/dashboard/StatsCard';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import TreesOverview from '@/components/dashboard/TreesOverview';
import {
  LayoutDashboard,
  Eye,
  MousePointer,
  Percent,
  FileText,
  Link2,
  TrendingUp
} from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

// Loading component for the dashboard
function DashboardLoading() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your link pages and view analytics</p>
        </div>
        <Skeleton className="h-10 w-40" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-[120px] w-full" />
        ))}
      </div>

      <Skeleton className="h-[400px] w-full mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Skeleton className="h-[300px] w-full lg:col-span-2" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    </div>
  );
}

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const dashboardData = await fetchDashboardData(user.id);

  // Calculate trends (in a real app, you would compare with previous period)
  const viewsTrend = Math.floor(Math.random() * 30) + 5;
  const clicksTrend = Math.floor(Math.random() * 30) + 5;
  const conversionTrend = Math.floor(Math.random() * 20) + 1;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your link pages and view analytics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Total Pages"
          value={dashboardData.totalTrees}
          description="All your link pages"
          icon={<FileText className="h-5 w-5" />}
          variant="default"
        />

        <StatsCard
          title="Total Views"
          value={dashboardData.totalViews.toLocaleString()}
          description="All time page views"
          icon={<Eye className="h-5 w-5" />}
          trend="up"
          trendValue={viewsTrend}
          variant="info"
        />

        <StatsCard
          title="Total Clicks"
          value={dashboardData.totalClicks.toLocaleString()}
          description="All time link clicks"
          icon={<MousePointer className="h-5 w-5" />}
          trend="up"
          trendValue={clicksTrend}
          variant="success"
        />

        <StatsCard
          title="Conversion Rate"
          value={`${dashboardData.conversionRate}%`}
          description="Clicks per view"
          icon={<Percent className="h-5 w-5" />}
          trend="up"
          trendValue={conversionTrend}
          variant="purple"
        />

        <StatsCard
          title="Published Pages"
          value={dashboardData.publishedTrees}
          description="Live pages"
          icon={<LayoutDashboard className="h-5 w-5" />}
          variant="teal"
        />

        <StatsCard
          title="Total Links"
          value={dashboardData.totalLinks}
          description="Across all pages"
          icon={<Link2 className="h-5 w-5" />}
          variant="warning"
        />
      </div>

      <div className="mb-8">
        <AnalyticsChart
          dailyData={dashboardData.dailyStats}
          weeklyData={dashboardData.weeklyStats}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
            <TreesOverview trees={dashboardData.trees} />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
            <ActivityFeed activities={dashboardData.recentActivity} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

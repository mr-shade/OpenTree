import { Suspense } from 'react';
import { getCurrentUser } from '@/lib/auth/session';
import { fetchDashboardData } from '../utils/fetchDashboardData';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import StatsCard from '@/components/dashboard/StatsCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Eye,
  MousePointer,
  Percent,
  TrendingUp,
  BarChart4,
  PieChart,
  Calendar
} from 'lucide-react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

// Loading component for the analytics page
function AnalyticsLoading() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Track the performance of your link pages</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-[120px] w-full" />
        ))}
      </div>

      <Skeleton className="h-[400px] w-full mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    </div>
  );
}

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-md shadow-md">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{label}</p>
        <div className="mt-2 space-y-1">
          {payload.map((entry, index) => (
            <p key={`item-${index}`} className="text-xs" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default async function AnalyticsPage() {
  const user = await getCurrentUser();
  const dashboardData = await fetchDashboardData(user.id);

  // Calculate trends (in a real app, you would compare with previous period)
  const viewsTrend = Math.floor(Math.random() * 30) + 5;
  const clicksTrend = Math.floor(Math.random() * 30) + 5;
  const conversionTrend = Math.floor(Math.random() * 20) + 1;

  // Prepare data for pie chart
  const pieData = [
    { name: 'Views', value: dashboardData.totalViews, color: '#3b82f6' },
    { name: 'Clicks', value: dashboardData.totalClicks, color: '#10b981' },
  ];

  // Prepare data for weekly comparison
  const weeklyComparisonData = dashboardData.weeklyStats.map(week => ({
    name: week.week,
    views: week.views,
    clicks: week.clicks,
  }));

  // Colors for pie chart
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Track the performance of your link pages</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
          title="Avg. Daily Views"
          value={(dashboardData.totalViews / 30).toFixed(0)}
          description="Last 30 days"
          icon={<BarChart4 className="h-5 w-5" />}
          variant="warning"
        />
      </div>

      <div className="mb-8">
        <AnalyticsChart
          dailyData={dashboardData.dailyStats}
          weeklyData={dashboardData.weeklyStats}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Distribution</CardTitle>
            <CardDescription>Views vs. Clicks distribution</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Comparison</CardTitle>
            <CardDescription>Views and clicks by week</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={weeklyComparisonData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                <XAxis dataKey="name" className="text-xs text-gray-600 dark:text-gray-400" />
                <YAxis className="text-xs text-gray-600 dark:text-gray-400" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="views" stroke="#3b82f6" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="clicks" stroke="#10b981" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {dashboardData.mostViewedTree && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Most Viewed Page</CardTitle>
              <CardDescription>Your most popular link page</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{dashboardData.mostViewedTree.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">/{dashboardData.mostViewedTree.slug}</p>
                </div>
                <div className="flex items-center text-blue-600 dark:text-blue-400">
                  <Eye className="h-5 w-5 mr-2" />
                  <span className="text-xl font-bold">{dashboardData.mostViewedTree.views}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {dashboardData.mostClickedLink && (
            <Card>
              <CardHeader>
                <CardTitle>Most Clicked Link</CardTitle>
                <CardDescription>Your most popular link</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{dashboardData.mostClickedLink.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{dashboardData.mostClickedLink.url}</p>
                  </div>
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <MousePointer className="h-5 w-5 mr-2" />
                    <span className="text-xl font-bold">{dashboardData.mostClickedLink.clicks}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

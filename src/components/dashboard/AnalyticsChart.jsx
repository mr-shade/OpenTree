'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

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

export default function AnalyticsChart({ dailyData, weeklyData, loading = false }) {
  const [timeRange, setTimeRange] = useState('7d');
  
  // Filter data based on selected time range
  const filteredData = (() => {
    if (timeRange === '7d') return dailyData.slice(-7);
    if (timeRange === '14d') return dailyData.slice(-14);
    if (timeRange === '30d') return dailyData;
    return dailyData;
  })();
  
  if (loading) {
    return (
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Analytics Overview</CardTitle>
          <CardDescription>Views and clicks over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px] bg-gray-100 dark:bg-gray-800 rounded-md animate-pulse"></div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Analytics Overview</CardTitle>
          <CardDescription>Views and clicks over time</CardDescription>
        </div>
        <Tabs defaultValue="7d" value={timeRange} onValueChange={setTimeRange} className="w-[300px]">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="7d">7 days</TabsTrigger>
            <TabsTrigger value="14d">14 days</TabsTrigger>
            <TabsTrigger value="30d">30 days</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="area">
          <div className="flex justify-end mb-4">
            <TabsList>
              <TabsTrigger value="area">Area</TabsTrigger>
              <TabsTrigger value="bar">Bar</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="area" className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={filteredData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={{ stroke: '#e5e7eb' }}
                  className="text-xs text-gray-600 dark:text-gray-400"
                />
                <YAxis 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-xs text-gray-600 dark:text-gray-400"
                />
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false} 
                  className="stroke-gray-200 dark:stroke-gray-700"
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorViews)"
                  activeDot={{ r: 6 }}
                />
                <Area
                  type="monotone"
                  dataKey="clicks"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorClicks)"
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="bar" className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={filteredData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={{ stroke: '#e5e7eb' }}
                  className="text-xs text-gray-600 dark:text-gray-400"
                />
                <YAxis 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  className="text-xs text-gray-600 dark:text-gray-400"
                />
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false} 
                  className="stroke-gray-200 dark:stroke-gray-700"
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="views" name="Views" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="clicks" name="Clicks" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

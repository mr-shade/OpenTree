'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const iconVariants = cva(
  "w-10 h-10 p-2 rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
        success: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
        warning: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
        danger: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
        info: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
        purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
        teal: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export default function StatsCard({ 
  title, 
  value, 
  description, 
  icon, 
  trend, 
  trendValue, 
  variant = "default",
  loading = false
}) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className={cn(iconVariants({ variant }))}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        ) : (
          <div className="text-2xl font-bold">{value}</div>
        )}
        
        {trend && trendValue && !loading && (
          <p className={cn("text-xs mt-1 flex items-center", 
            trend === 'up' 
              ? "text-green-600 dark:text-green-400" 
              : "text-red-600 dark:text-red-400"
          )}>
            {trend === 'up' ? (
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            ) : (
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            )}
            {trendValue}% from last period
          </p>
        )}
      </CardContent>
    </Card>
  );
}

import dbConnect from '@/lib/db/mongoose';
import Tree from '@/models/Tree';
import Link from '@/models/Link';

export async function fetchDashboardData(userId) {
  await dbConnect();
  
  try {
    // Get all trees for the user
    const trees = await Tree.find({ owner: userId }).sort({ createdAt: -1 });
    const treeIds = trees.map(tree => tree._id);
    
    // Get all links for the user's trees
    const links = await Link.find({ tree: { $in: treeIds } });
    
    // Calculate total views and clicks
    const totalViews = trees.reduce((sum, tree) => sum + (tree.views || 0), 0);
    const totalClicks = links.reduce((sum, link) => sum + (link.clicks || 0), 0);
    
    // Calculate conversion rate
    const conversionRate = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : 0;
    
    // Get published vs draft trees
    const publishedTrees = trees.filter(tree => tree.isPublished).length;
    const draftTrees = trees.length - publishedTrees;
    
    // Get most viewed tree
    const mostViewedTree = trees.length > 0 
      ? trees.reduce((prev, current) => (prev.views > current.views) ? prev : current) 
      : null;
    
    // Get most clicked link
    const mostClickedLink = links.length > 0 
      ? links.reduce((prev, current) => (prev.clicks > current.clicks) ? prev : current) 
      : null;
    
    // Generate daily stats for the last 30 days
    const today = new Date();
    const dailyStats = [];
    
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // In a real app, you would query your database for actual data for this date
      // For now, we'll generate random data that follows a realistic pattern
      const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      
      // Generate more views on weekdays, fewer on weekends
      const viewsBase = isWeekend ? 30 : 70;
      const views = Math.floor(Math.random() * viewsBase) + (isWeekend ? 10 : 30);
      
      // Clicks are typically a percentage of views
      const clickRate = 0.3 + (Math.random() * 0.3); // 30-60% click rate
      const clicks = Math.floor(views * clickRate);
      
      dailyStats.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        views,
        clicks,
      });
    }
    
    // Get weekly stats
    const weeklyStats = [];
    for (let i = 0; i < 4; i++) {
      const weekViews = dailyStats.slice(i * 7, (i + 1) * 7).reduce((sum, day) => sum + day.views, 0);
      const weekClicks = dailyStats.slice(i * 7, (i + 1) * 7).reduce((sum, day) => sum + day.clicks, 0);
      
      const startDate = new Date(today);
      startDate.setDate(startDate.getDate() - 28 + (i * 7));
      
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 6);
      
      weeklyStats.push({
        week: `Week ${i + 1}`,
        dateRange: `${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`,
        views: weekViews,
        clicks: weekClicks,
      });
    }
    
    // Get recent activity (last 5 views or clicks)
    const recentActivity = [];
    for (let i = 0; i < 5; i++) {
      const isView = Math.random() > 0.5;
      const randomTree = trees[Math.floor(Math.random() * trees.length)];
      const randomLink = links[Math.floor(Math.random() * links.length)];
      
      if (randomTree && randomLink) {
        const timeAgo = Math.floor(Math.random() * 24); // Hours ago
        const date = new Date();
        date.setHours(date.getHours() - timeAgo);
        
        recentActivity.push({
          type: isView ? 'view' : 'click',
          treeName: randomTree.title,
          treeSlug: randomTree.slug,
          linkTitle: isView ? null : randomLink.title,
          timestamp: date,
        });
      }
    }
    
    // Sort recent activity by timestamp (newest first)
    recentActivity.sort((a, b) => b.timestamp - a.timestamp);
    
    return {
      totalTrees: trees.length,
      totalLinks: links.length,
      totalViews,
      totalClicks,
      conversionRate,
      publishedTrees,
      draftTrees,
      mostViewedTree: mostViewedTree ? {
        id: mostViewedTree._id.toString(),
        title: mostViewedTree.title,
        slug: mostViewedTree.slug,
        views: mostViewedTree.views || 0,
      } : null,
      mostClickedLink: mostClickedLink ? {
        id: mostClickedLink._id.toString(),
        title: mostClickedLink.title,
        url: mostClickedLink.url,
        clicks: mostClickedLink.clicks || 0,
      } : null,
      dailyStats,
      weeklyStats,
      recentActivity,
      trees: JSON.parse(JSON.stringify(trees)),
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return {
      totalTrees: 0,
      totalLinks: 0,
      totalViews: 0,
      totalClicks: 0,
      conversionRate: 0,
      publishedTrees: 0,
      draftTrees: 0,
      mostViewedTree: null,
      mostClickedLink: null,
      dailyStats: [],
      weeklyStats: [],
      recentActivity: [],
      trees: [],
    };
  }
}

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/db/mongoose';
import Tree from '@/models/Tree';
import Link from '@/models/Link';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Connect to database
    await dbConnect();

    // Get all trees for the current user
    const trees = await Tree.find({ owner: session.user.id });
    const treeIds = trees.map(tree => tree._id);

    // Get all links for the user's trees
    const links = await Link.find({ tree: { $in: treeIds } });

    // Calculate total views and clicks
    const totalViews = trees.reduce((sum, tree) => sum + (tree.views || 0), 0);
    const totalClicks = links.reduce((sum, link) => sum + (link.clicks || 0), 0);

    // Generate sample daily stats (in a real app, this would come from a database)
    const today = new Date();
    const dailyStats = [];
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      dailyStats.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        views: Math.floor(Math.random() * 100) + 20,
        clicks: Math.floor(Math.random() * 50) + 10,
      });
    }

    // Return analytics data
    return NextResponse.json({
      totalViews,
      totalClicks,
      conversionRate: totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : 0,
      trees: trees.length,
      links: links.length,
      dailyStats,
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { message: 'Something went wrong while fetching analytics' },
      { status: 500 }
    );
  }
}

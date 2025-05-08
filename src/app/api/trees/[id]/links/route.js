import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/db/mongoose';
import Tree from '@/models/Tree';
import Link from '@/models/Link';
import mongoose from 'mongoose';

// Helper function to check if the user owns the tree
async function checkTreeOwnership(treeId, userId) {
  if (!mongoose.Types.ObjectId.isValid(treeId)) {
    return { error: 'Invalid tree ID', status: 400 };
  }

  const tree = await Tree.findById(treeId);

  if (!tree) {
    return { error: 'Tree not found', status: 404 };
  }

  if (tree.owner.toString() !== userId) {
    return { error: 'Unauthorized', status: 403 };
  }

  return { tree };
}

export async function GET(request, { params }) {
  try {
    // Connect to database
    await dbConnect();

    // Get all links for the tree
    const links = await Link.find({ tree: params.id }).sort({ position: 1 });

    // Return success response
    return NextResponse.json(
      {
        links,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching links:', error);
    return NextResponse.json(
      { message: 'Something went wrong while fetching links' },
      { status: 500 }
    );
  }
}

export async function POST(request, { params }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { title, url, icon } = await request.json();

    // Validate input
    if (!title || !url) {
      return NextResponse.json(
        { message: 'Title and URL are required' },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    const { tree, error, status } = await checkTreeOwnership(params.id, session.user.id);

    if (error) {
      return NextResponse.json(
        { message: error },
        { status }
      );
    }

    // Get the highest position to add the new link at the end
    const highestPositionLink = await Link.findOne({ tree: params.id }).sort({ position: -1 });
    const newPosition = highestPositionLink ? highestPositionLink.position + 1 : 0;

    // Create new link
    const link = await Link.create({
      tree: params.id,
      title,
      url,
      icon: icon || 'link',
      position: newPosition,
    });

    // Return success response
    return NextResponse.json(
      {
        message: 'Link created successfully',
        link,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Link creation error:', error);
    return NextResponse.json(
      { message: 'Something went wrong while creating the link' },
      { status: 500 }
    );
  }
}

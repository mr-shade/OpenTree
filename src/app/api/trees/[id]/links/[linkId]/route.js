import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/db/mongoose';
import Tree from '@/models/Tree';
import Link from '@/models/Link';
import mongoose from 'mongoose';

// Helper function to check if the user owns the tree and link
async function checkLinkOwnership(treeId, linkId, userId) {
  if (!mongoose.Types.ObjectId.isValid(treeId) || !mongoose.Types.ObjectId.isValid(linkId)) {
    return { error: 'Invalid ID', status: 400 };
  }

  const tree = await Tree.findById(treeId);

  if (!tree) {
    return { error: 'Tree not found', status: 404 };
  }

  if (tree.owner.toString() !== userId) {
    return { error: 'Unauthorized', status: 403 };
  }

  const link = await Link.findById(linkId);

  if (!link) {
    return { error: 'Link not found', status: 404 };
  }

  if (link.tree.toString() !== treeId) {
    return { error: 'Link does not belong to this tree', status: 400 };
  }

  return { tree, link };
}

export async function PUT(request, { params }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { title, url, icon, position, isActive } = await request.json();

    // Connect to database
    await dbConnect();

    const { link, error, status } = await checkLinkOwnership(params.id, params.linkId, session.user.id);

    if (error) {
      return NextResponse.json(
        { message: error },
        { status }
      );
    }

    // Update link
    link.title = title || link.title;
    link.url = url || link.url;
    link.icon = icon || link.icon;
    link.position = position !== undefined ? position : link.position;
    link.isActive = isActive !== undefined ? isActive : link.isActive;
    link.updatedAt = Date.now();

    await link.save();

    // Return success response
    return NextResponse.json(
      {
        message: 'Link updated successfully',
        link,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating link:', error);
    return NextResponse.json(
      { message: 'Something went wrong while updating the link' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
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

    const { link, error, status } = await checkLinkOwnership(params.id, params.linkId, session.user.id);

    if (error) {
      return NextResponse.json(
        { message: error },
        { status }
      );
    }

    // Delete link
    await Link.findByIdAndDelete(params.linkId);

    // Reorder remaining links
    const remainingLinks = await Link.find({ tree: params.id }).sort({ position: 1 });
    
    for (let i = 0; i < remainingLinks.length; i++) {
      remainingLinks[i].position = i;
      await remainingLinks[i].save();
    }

    // Return success response
    return NextResponse.json(
      {
        message: 'Link deleted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting link:', error);
    return NextResponse.json(
      { message: 'Something went wrong while deleting the link' },
      { status: 500 }
    );
  }
}

// Endpoint to track link clicks
export async function GET(request, { params }) {
  try {
    // Connect to database
    await dbConnect();

    const link = await Link.findById(params.linkId);

    if (!link) {
      return NextResponse.json(
        { message: 'Link not found' },
        { status: 404 }
      );
    }

    // Increment click count
    link.clicks += 1;
    await link.save();

    // Return success response
    return NextResponse.json(
      {
        message: 'Click tracked successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error tracking click:', error);
    return NextResponse.json(
      { message: 'Something went wrong while tracking click' },
      { status: 500 }
    );
  }
}

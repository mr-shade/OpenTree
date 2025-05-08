import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/db/mongoose';
import Tree from '@/models/Tree';
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
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
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

    // Return success response
    return NextResponse.json(
      {
        tree,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching tree:', error);
    return NextResponse.json(
      { message: 'Something went wrong while fetching the tree' },
      { status: 500 }
    );
  }
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

    const { title, description, theme, backgroundColor, textColor, buttonColor, buttonTextColor, isPublished } = await request.json();

    // Connect to database
    await dbConnect();

    const { tree, error, status } = await checkTreeOwnership(params.id, session.user.id);

    if (error) {
      return NextResponse.json(
        { message: error },
        { status }
      );
    }

    // Update tree
    tree.title = title || tree.title;
    tree.description = description !== undefined ? description : tree.description;
    tree.theme = theme || tree.theme;
    tree.backgroundColor = backgroundColor || tree.backgroundColor;
    tree.textColor = textColor || tree.textColor;
    tree.buttonColor = buttonColor || tree.buttonColor;
    tree.buttonTextColor = buttonTextColor || tree.buttonTextColor;
    tree.isPublished = isPublished !== undefined ? isPublished : tree.isPublished;
    tree.updatedAt = Date.now();

    await tree.save();

    // Return success response
    return NextResponse.json(
      {
        message: 'Tree updated successfully',
        tree,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating tree:', error);
    return NextResponse.json(
      { message: 'Something went wrong while updating the tree' },
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

    const { tree, error, status } = await checkTreeOwnership(params.id, session.user.id);

    if (error) {
      return NextResponse.json(
        { message: error },
        { status }
      );
    }

    // Delete tree
    await Tree.findByIdAndDelete(params.id);

    // Return success response
    return NextResponse.json(
      {
        message: 'Tree deleted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting tree:', error);
    return NextResponse.json(
      { message: 'Something went wrong while deleting the tree' },
      { status: 500 }
    );
  }
}

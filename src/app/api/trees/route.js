import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/db/mongoose';
import Tree from '@/models/Tree';

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { title, slug, description, theme } = await request.json();

    // Validate input
    if (!title || !slug) {
      return NextResponse.json(
        { message: 'Title and slug are required' },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Check if slug is already taken
    const slugExists = await Tree.findOne({ slug });

    if (slugExists) {
      return NextResponse.json(
        { message: 'This URL slug is already taken. Please choose another one.' },
        { status: 400 }
      );
    }

    // Create new tree
    const tree = await Tree.create({
      owner: session.user.id,
      title,
      slug,
      description,
      theme,
    });

    // Return success response
    return NextResponse.json(
      {
        message: 'Tree created successfully',
        tree: {
          _id: tree._id,
          title: tree.title,
          slug: tree.slug,
          description: tree.description,
          theme: tree.theme,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Tree creation error:', error);
    return NextResponse.json(
      { message: 'Something went wrong while creating the tree' },
      { status: 500 }
    );
  }
}

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
    const trees = await Tree.find({ owner: session.user.id }).sort({ createdAt: -1 });

    // Return success response
    return NextResponse.json(
      {
        trees,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching trees:', error);
    return NextResponse.json(
      { message: 'Something went wrong while fetching trees' },
      { status: 500 }
    );
  }
}

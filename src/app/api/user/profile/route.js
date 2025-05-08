import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/db/mongoose';
import User from '@/models/User';

export async function PUT(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { name, bio } = await request.json();

    // Connect to database
    await dbConnect();

    // Find user by email
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    // Update user
    user.name = name || user.name;
    user.bio = bio !== undefined ? bio : user.bio;
    user.updatedAt = Date.now();

    await user.save();

    // Return success response
    return NextResponse.json(
      {
        message: 'Profile updated successfully',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          bio: user.bio,
          image: user.image,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json(
      { message: 'Something went wrong while updating the profile' },
      { status: 500 }
    );
  }
}

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import dbConnect from '@/lib/db/mongoose';
import User from '@/models/User';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      await dbConnect();

      // Check if user exists in our database
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        // Create a new user if they don't exist
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
          // No password needed for OAuth
        });
      } else {
        // Update user info if needed
        existingUser.name = user.name;
        existingUser.image = user.image;
        await existingUser.save();
      }

      return true;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

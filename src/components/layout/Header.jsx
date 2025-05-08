import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth/session';

export default async function Header() {
  const user = await getCurrentUser();

  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          OpenTree
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          
          {user ? (
            <>
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
                Dashboard
              </Link>
              <Link 
                href="/api/auth/signout"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
              >
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 hover:text-blue-600">
                Login
              </Link>
              <Link 
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

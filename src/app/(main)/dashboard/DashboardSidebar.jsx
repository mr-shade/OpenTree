'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  LayoutDashboard, 
  BarChart, 
  Settings, 
  User, 
  LogOut, 
  PlusCircle,
  Menu,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function DashboardSidebar({ user }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      {/* Mobile header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 z-30 lg:hidden">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="ml-2 text-xl font-bold text-blue-600 dark:text-blue-400">
            OpenTree
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <button 
            onClick={toggleProfile}
            className="flex items-center space-x-2"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.image || ''} alt={user.name} />
              <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                {user.name?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>

      {/* Mobile profile dropdown */}
      {isProfileOpen && (
        <div className="fixed top-16 right-0 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-1 z-40 lg:hidden">
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
          </div>
          <Link 
            href="/dashboard/profile" 
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsProfileOpen(false)}
          >
            Profile
          </Link>
          <Link 
            href="/dashboard/settings" 
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsProfileOpen(false)}
          >
            Settings
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Sign out
          </button>
        </div>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-20 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              OpenTree
            </Link>
            <ThemeToggle />
          </div>

          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.image || ''} alt={user.name} />
                <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                  {user.name?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <Link 
              href="/dashboard" 
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/dashboard') && !isActive('/dashboard/analytics') && !isActive('/dashboard/settings') && !isActive('/dashboard/profile')
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>

            <Link 
              href="/dashboard/analytics" 
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/dashboard/analytics')
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <BarChart size={18} />
              <span>Analytics</span>
            </Link>

            <Link 
              href="/dashboard/profile" 
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/dashboard/profile')
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <User size={18} />
              <span>Profile</span>
            </Link>

            <Link 
              href="/dashboard/settings" 
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/dashboard/settings')
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Settings size={18} />
              <span>Settings</span>
            </Link>

            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
              <Link 
                href="/dashboard/trees/new" 
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => setIsOpen(false)}
              >
                <PlusCircle size={18} />
                <span>Create New Page</span>
              </Link>
            </div>
          </nav>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="flex items-center space-x-3 px-3 py-2 w-full rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <LogOut size={18} />
              <span>Sign out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

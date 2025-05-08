'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const logoAnimation = {
  initial: { rotate: 12, scale: 0.9 },
  hover: {
    rotate: 0,
    scale: 1.05,
    transition: { duration: 0.3 }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn('google', { callbackUrl: '/dashboard' });
    } catch (error) {
      setError('Something went wrong with Google sign in. Please try again.');
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-950 z-0"></div>

      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="absolute -top-24 left-1/2 transform -translate-x-1/2"
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          variants={logoAnimation}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center">
            <span className="text-white text-4xl font-bold">OT</span>
          </div>
        </motion.div>

        <Card className="w-full shadow-2xl border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden">
          <CardHeader className="space-y-1 text-center pt-16 pb-8">
            <CardTitle className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Welcome back</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 text-lg">
              Sign in to your OpenTree account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8 px-8">
            {error && (
              <motion.div
                className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.div>
            )}

            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/30"
              whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">One-click sign in</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Use your Google account to sign in securely to OpenTree
              </p>

              <Button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full h-14 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl transition-all duration-200"
                variant="outline"
              >
                <svg className="h-5 w-5 mr-3" aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                <span className="text-base">{isLoading ? 'Signing in...' : 'Continue with Google'}</span>
              </Button>
            </motion.div>

            <div className="flex items-center justify-center space-x-3">
              <div className="h-px bg-gray-200 dark:bg-gray-700 w-full"></div>
              <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap px-2">New to OpenTree?</span>
              <div className="h-px bg-gray-200 dark:bg-gray-700 w-full"></div>
            </div>

            <motion.div whileHover={{ y: -2 }}>
              <Button
                asChild
                variant="ghost"
                className="w-full h-14 text-base hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30 rounded-xl transition-all duration-200"
              >
                <Link href="/signup">Create an account</Link>
              </Button>
            </motion.div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 px-8 pb-8">
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              By continuing, you agree to OpenTree's{' '}
              <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                Privacy Policy
              </Link>
            </div>
          </CardFooter>
        </Card>

        <motion.div
          className="mt-8 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

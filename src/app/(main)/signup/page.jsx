'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn('google', { callbackUrl: '/dashboard' });
    } catch (error) {
      setError('Something went wrong with Google sign in. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white/80 to-white z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5 z-0"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10 z-0 animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-10 z-0 animate-pulse"></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl flex items-center justify-center rotate-12 transform hover:rotate-0 transition-transform duration-500">
            <span className="text-white text-3xl font-bold">OT</span>
          </div>
        </div>

        <Card className="w-full shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center pt-12">
            <CardTitle className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Join OpenTree</CardTitle>
            <CardDescription className="text-gray-600">
              Create your free account in seconds
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 px-8">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Get started instantly</h3>
              <p className="text-gray-600 text-sm mb-4">
                Use your Google account to create your OpenTree profile
              </p>

              <Button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full h-14 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-md rounded-xl"
                variant="outline"
              >
                <svg className="h-5 w-5 mr-2" aria-hidden="true" viewBox="0 0 24 24">
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
                {isLoading ? 'Creating account...' : 'Continue with Google'}
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <div className="h-px bg-gray-200 w-full"></div>
              <span className="text-sm text-gray-400 whitespace-nowrap px-2">Already have an account?</span>
              <div className="h-px bg-gray-200 w-full"></div>
            </div>

            <Button
              asChild
              variant="ghost"
              className="w-full h-12 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => router.push('/login')}
            >
              <Link href="/login">Sign in instead</Link>
            </Button>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 px-8 pb-8">
            <div className="text-center text-sm text-gray-500">
              By continuing, you agree to OpenTree's{' '}
              <Link href="/terms" className="underline hover:text-blue-600">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline hover:text-blue-600">
                Privacy Policy
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-500">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-blue-600">
              OpenTree
            </Link>
            <p className="text-gray-600 mt-2">
              Create beautiful link pages for free
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-600">
              Terms
            </Link>
            <a 
              href="https://github.com/sh20raj/opentree" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} OpenTree. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

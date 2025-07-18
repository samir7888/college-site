import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileX, ArrowLeft } from 'lucide-react';

export default function NewsNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <FileX className="h-24 w-24 text-gray-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">News Not Found</h1>
          <p className="text-gray-600 text-lg">
            The news article you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
        </div>
        
        <div className="space-x-4">
          <Button asChild>
            <Link href="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
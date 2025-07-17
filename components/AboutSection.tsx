import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">About Western Mega</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Building Tomorrow's Leaders Today
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Western Mega College has been a beacon of educational excellence for over two decades, 
              nurturing young minds and preparing them for successful careers. Our commitment to 
              quality education and holistic development has made us a trusted institution.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Modern Infrastructure</h4>
                  <p className="text-gray-600">State-of-the-art facilities and learning environments</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Industry Partnerships</h4>
                  <p className="text-gray-600">Strong connections with leading companies for placements</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Holistic Development</h4>
                  <p className="text-gray-600">Focus on both academic and personal growth</p>
                </div>
              </div>
            </div>
            
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide quality education that empowers students to achieve their full potential and contribute meaningfully to society.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be a leading educational institution recognized for academic excellence and innovation in teaching and learning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg sm:col-span-2">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                <Heart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <p className="text-gray-600">
                Integrity, Excellence, Innovation, Inclusivity, and Responsibility guide everything we do as we shape the future leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
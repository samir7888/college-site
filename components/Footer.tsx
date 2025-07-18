import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Western Mega</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering students with quality education and preparing them for successful careers.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
              <li><Link href="/our-team" className="text-gray-400 hover:text-white">Our Team</Link></li>
              <li><Link href="/alumni" className="text-gray-400 hover:text-white">Alumni</Link></li>
              <li><Link href="/apply" className="text-gray-400 hover:text-white">Apply Online</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link href="/courses?category=plus2" className="text-gray-400 hover:text-white">+2 Science</Link></li>
              <li><Link href="/courses?category=plus2" className="text-gray-400 hover:text-white">+2 Management</Link></li>
              <li><Link href="/courses?category=diploma" className="text-gray-400 hover:text-white">Diploma Programs</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white">Events</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white">News</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Affiliated By</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-gray-400 hover:text-white">NEB</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400 hover:text-white">Tribhuvan University</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Western Mega College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
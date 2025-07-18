import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

export function TopHeader() {
  return (
    <div className="hidden lg:block fixed top-0 z-40 w-full bg-blue-900 text-white py-2 text-sm h-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex flex-wrap items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+977-1-4567890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@westernmega.edu</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 8AM-5PM</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
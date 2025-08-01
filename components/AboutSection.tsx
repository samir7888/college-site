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
    Excellence in BHM & MBA Education
  </h2>

  <p className="text-gray-600 mb-6 leading-relaxed">
    Western Mega College stands at the forefront of higher education, offering industry-relevant programs like 
    <strong> Bachelor of Hotel Management (BHM)</strong> and <strong>Master of Business Administration (MBA)</strong>. 
    Our institution is dedicated to shaping future hospitality leaders and business professionals through innovative teaching, real-world exposure, and a focus on holistic growth.
  </p>

  <div className="space-y-4 mb-8">
    <div className="flex items-start space-x-3">
      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
      <div>
        <h4 className="font-semibold text-gray-900">Industry-Focused BHM Program</h4>
        <p className="text-gray-600">
          Hands-on learning with professional kitchen labs, hotel simulations, and internships at top hospitality brands.
        </p>
      </div>
    </div>

    <div className="flex items-start space-x-3">
      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
      <div>
        <h4 className="font-semibold text-gray-900">Globally Relevant MBA Curriculum</h4>
        <p className="text-gray-600">
          Designed for aspiring business leaders with case studies, live projects, and corporate mentorships.
        </p>
      </div>
    </div>

    <div className="flex items-start space-x-3">
      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
      <div>
        <h4 className="font-semibold text-gray-900">Career-Ready Graduates</h4>
        <p className="text-gray-600">
          Personalized career support, placement opportunities, and leadership development programs.
        </p>
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
              We a quality provide education that creates highly productive professionals who are ethical, entrepreneurial and prepared to succeed in the global economy. The college achieves this though excellence in teaching research and service engagement with the business community other stakeholders.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
              Our Vision is to empower students from diverse backgrounds to become productive and ethical business professionals who are among the best in the world.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg sm:col-span-2">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                <Heart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                  <li>• Innovation and Creativity</li>
                  <li>• Inclusivity and Diversity</li>
                  <li>• Responsibility and Service</li>
                  <li>• Professionalism and Leadership</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
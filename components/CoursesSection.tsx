import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, Users } from 'lucide-react';
import Link from 'next/link';

export function CoursesSection() {
  const courses = [
    {
      id: 1,
      category: 'undergraduate',
      title: 'Bachelor of Hotel Management (BHM)',
      description: 'Comprehensive hospitality education covering hotel operations, food & beverage management, and event planning.',
      duration: '4 Years',
      image: '/pic4.JPG',
    },
    {
      id: 2,
      category: 'postgraduate',
      title: 'Master of Business Administration (MBA)',
      description: 'Advanced business studies with specialization options, including Marketing, Finance, and Human Resource Management.',
      duration: '2 Years',
      image: '/pic5.JPG',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-blue-600"></div>
            <span className="text-blue-600 font-medium">Our Programs</span>
            <div className="w-8 h-1 bg-blue-600"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Path to Success
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our specialized BHM and MBA programs designed to prepare you for leadership roles in hospitality and business sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.category === 'undergraduate' ? 'Undergraduate' : 'Postgraduate'}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl h-16">{course.title}</CardTitle>
                <CardDescription className='h-8'>{course.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  {/* <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div> */}
                </div>
                
                <Button asChild className="w-full">
                  <Link href={`/apply?course=${course.id}`}>
                    Apply Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" asChild size="lg">
            <Link href="/courses">
              View All Courses
              <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Award, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function FacultySection() {
  const faculty = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Principal',
      department: 'Administration',
      qualification: 'Ph.D. in Education',
      experience: '15 Years',
      email: 'principal@westernmega.edu',
      phone: '+977-1-4567890',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: 'Educational Leadership'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      position: 'Head of Science Department',
      department: 'Science',
      qualification: 'M.Sc. Physics',
      experience: '12 Years',
      email: 'physics@westernmega.edu',
      phone: '+977-1-4567891',
      image: 'https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: 'Quantum Physics'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      position: 'Mathematics Professor',
      department: 'Mathematics',
      qualification: 'Ph.D. Mathematics',
      experience: '10 Years',
      email: 'math@westernmega.edu',
      phone: '+977-1-4567892',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: 'Applied Mathematics'
    },
    {
      id: 4,
      name: 'Mr. David Kumar',
      position: 'Computer Science Faculty',
      department: 'Technology',
      qualification: 'M.Tech Computer Science',
      experience: '8 Years',
      email: 'cs@westernmega.edu',
      phone: '+977-1-4567893',
      image: 'https://images.pexels.com/photos/6147366/pexels-photo-6147366.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: 'Software Engineering'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-blue-600"></div>
            <span className="text-blue-600 font-medium">Meet Our Faculty</span>
            <div className="w-8 h-1 bg-blue-600"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experienced & Dedicated Educators
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our faculty members are highly qualified professionals committed to providing 
            quality education and mentoring students for success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {faculty.map((member) => (
            <Card key={member.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="relative mb-4">
                    <Image
                    width={100}
                    height={100}
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    {/* <div className="absolute z-1 -bottom-2 -right-15 bg-blue-600 text-white p-1 rounded-full">
                      <Award className="h-4 w-4" />
                    </div> */}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.department}</p>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{member.qualification}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Experience:</span> {member.experience}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Specialization:</span> {member.specialization}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" asChild size="lg">
            <Link href="/our-team">
              Meet All Faculty Members
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Quote, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function AlumniSection() {
  const alumni = [
    {
      id: 1,
      name: 'Priya Sharma',
      graduation: 'Class of 2018',
      degree: 'Bachelor of Computer Science',
      company: 'Google',
      position: 'Senior Software Engineer',
      location: 'San Francisco, USA',
      testimonial: 'Western Mega provided me with the perfect foundation to build my career in tech. The practical approach to learning and industry connections were invaluable.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: 'https://linkedin.com/'
    },
    {
      id: 2,
      name: 'Raj Patel',
      graduation: 'Class of 2015',
      degree: 'MBA in Finance',
      company: 'Goldman Sachs',
      position: 'Investment Analyst',
      location: 'New York, USA',
      testimonial: 'The rigorous curriculum and mentorship from experienced faculty prepared me for the challenges of the financial world. I owe my success to Western Mega.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: 'https://linkedin.com/'
    },
    {
      id: 3,
      name: 'Anita Gurung',
      graduation: 'Class of 2019',
      degree: 'Bachelor of Architecture',
      company: 'Foster + Partners',
      position: 'Junior Architect',
      location: 'London, UK',
      testimonial: 'The creative environment and international exposure at Western Mega helped me develop a global perspective in design that sets my work apart.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: 'https://linkedin.com/'
    },
    {
      id: 4,
      name: 'David Chen',
      graduation: 'Class of 2017',
      degree: 'Bachelor of Medicine',
      company: 'Mayo Clinic',
      position: 'Resident Physician',
      location: 'Rochester, USA',
      testimonial: 'The hands-on clinical experience and research opportunities at Western Mega gave me a competitive edge in my medical career.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: 'https://linkedin.com/'
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      graduation: 'Class of 2016',
      degree: 'Bachelor of Business Administration',
      company: 'Amazon',
      position: 'Marketing Manager',
      location: 'Seattle, USA',
      testimonial: 'The entrepreneurial spirit fostered at Western Mega encouraged me to think outside the box, a skill that has been crucial in my marketing career.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: 'https://linkedin.com/'
    },
    {
      id: 6,
      name: 'Arun Thapa',
      graduation: 'Class of 2014',
      degree: 'Master of Environmental Science',
      company: 'United Nations',
      position: 'Environmental Specialist',
      location: 'Geneva, Switzerland',
      testimonial: 'Western Mega focus on sustainability and global issues prepared me for my role in addressing environmental challenges on an international scale.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: 'https://linkedin.com/'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-blue-600"></div>
            <span className="text-blue-600 font-medium">Alumni Testimonials</span>
            <div className="w-8 h-1 bg-blue-600"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Graduates
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our alumni are making significant contributions across various industries worldwide.
            Discover how their education at Western Mega shaped their professional journeys.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {alumni.map((person) => (
            <Card key={person.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Image
                    width={60}
                    height={60}
                    src={person.image}
                    alt={person.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{person.position}</p>
                    <p className="text-gray-600 text-sm">{person.company}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                    <Briefcase className="h-4 w-4" />
                    <span>{person.degree}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                    <MapPin className="h-4 w-4" />
                    <span>{person.location}</span>
                  </div>
                  <p className="text-sm text-gray-600">{person.graduation}</p>
                </div>
                
                <div className="relative mb-4 pt-4 pb-2 px-2 bg-gray-50 rounded-lg">
                  <Quote className="absolute top-2 left-2 h-4 w-4 text-blue-400 opacity-50" />
                  <p className="text-gray-700 text-sm pl-5 italic">
                    "{person.testimonial}"
                  </p>
                </div>
                
                <div className="text-right">
                  <Link href={person.linkedin} className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
                    <span className="mr-1">LinkedIn</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" asChild size="lg">
            <Link href="/alumni">
              View All Alumni Stories
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
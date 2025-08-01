import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Quote, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function AlumniSection() {
  const alumni = [
    {
      id: 1,
      name: 'Sanjay Koirala',
      graduation: 'Class of 2019',
      degree: 'Bachelor of Hotel Management (BHM)',
      company: 'Hotel Annapurna',
      position: 'Front Office Manager',
      location: 'Kathmandu, Nepal',
      testimonial: 'Western Mega’s practical training and industry exposure helped me land my dream job in hospitality management.',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: 'https://linkedin.com/in/sanjay-koirala',
    },
    {
      id: 2,
      name: 'Maya Sharma',
      graduation: 'Class of 2020',
      degree: 'Bachelor of Hotel Management (BHM)',
      company: 'Hyatt Regency',
      position: 'Food & Beverage Supervisor',
      location: 'Pokhara, Nepal',
      testimonial: 'The experienced faculty and hands-on learning at Western Mega gave me confidence to excel in the hospitality industry.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: 'https://linkedin.com/in/maya-sharma',
    },
    {
      id: 3,
      name: 'Ramesh Thapa',
      graduation: 'Class of 2018',
      degree: 'Master of Business Administration (MBA)',
      company: 'Nabil Bank',
      position: 'Branch Manager',
      location: 'Kathmandu, Nepal',
      testimonial: 'The MBA program’s focus on leadership and strategic thinking prepared me well for managing teams and operations.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: 'https://linkedin.com/in/ramesh-thapa',
    },
    {
      id: 4,
      name: 'Anita Khatri',
      graduation: 'Class of 2021',
      degree: 'Master of Business Administration (MBA)',
      company: 'Unilever Nepal',
      position: 'Marketing Executive',
      location: 'Kathmandu, Nepal',
      testimonial: 'Western Mega’s MBA program equipped me with the skills needed to succeed in the competitive marketing industry.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: 'https://linkedin.com/in/anita-khatri',
    },
    {
      id: 5,
      name: 'Sujan Basnet',
      graduation: 'Class of 2017',
      degree: 'Bachelor of Hotel Management (BHM)',
      company: 'Crowne Plaza',
      position: 'Event Coordinator',
      location: 'Kathmandu, Nepal',
      testimonial: 'The event management skills and internship opportunities at Western Mega made my transition into the industry seamless.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: 'https://linkedin.com/in/sujan-basnet',
    },
    {
      id: 6,
      name: 'Rita Magar',
      graduation: 'Class of 2019',
      degree: 'Master of Business Administration (MBA)',
      company: 'Standard Chartered Bank',
      position: 'Financial Analyst',
      location: 'Kathmandu, Nepal',
      testimonial: 'The comprehensive finance courses and case studies in the MBA program helped me succeed as a financial analyst.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: 'https://linkedin.com/in/rita-magar',
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
            Success Stories from Our BHM & MBA Graduates
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our alumni are excelling in hospitality and business sectors worldwide. Discover how Western Mega College shaped their careers.
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
                  <p className="text-gray-700 text-sm italic">
                    "{person.testimonial}"
                  </p>
                </div>
                
                <div className="text-right">
                  <Link href={person.linkedin} className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
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

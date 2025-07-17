import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'New Science Laboratory Inaugurated',
      excerpt: 'State-of-the-art physics and chemistry labs equipped with modern instruments.',
      date: 'March 15, 2024',
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Infrastructure'
    },
    {
      id: 2,
      title: 'Annual Sports Day Celebration',
      excerpt: 'Students showcase their athletic talents in various sports competitions.',
      date: 'March 10, 2024',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Events'
    },
    {
      id: 3,
      title: 'Scholarship Program Launched',
      excerpt: 'Merit-based scholarships for deserving students from all backgrounds.',
      date: 'March 5, 2024',
      image: 'https://images.pexels.com/photos/5905895/pexels-photo-5905895.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Academic'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-blue-600"></div>
            <span className="text-blue-600 font-medium">Latest News</span>
            <div className="w-8 h-1 bg-blue-600"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Campus Updates & Events
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and achievements from Western Mega College.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600">{item.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/news/${item.id}`}>
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" asChild size="lg">
            <Link href="/news">
              View All News
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
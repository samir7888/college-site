import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

export default function NewsPage() {
  const allNews = [
    {
      id: 1,
      title: 'New Science Laboratory Inaugurated',
      excerpt: 'State-of-the-art physics and chemistry labs equipped with modern instruments to enhance practical learning experience for our students.',
      content: 'Western Mega College proudly announces the inauguration of our new science laboratory complex...',
      date: 'March 15, 2024',
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Infrastructure',
      author: 'Admin',
      featured: true
    },
    {
      id: 2,
      title: 'Annual Sports Day Celebration',
      excerpt: 'Students showcase their athletic talents in various sports competitions including football, basketball, and track events.',
      content: 'The annual sports day was a grand celebration of athleticism and team spirit...',
      date: 'March 10, 2024',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Events',
      author: 'Sports Department',
      featured: false
    },
    {
      id: 3,
      title: 'Scholarship Program Launched',
      excerpt: 'Merit-based scholarships for deserving students from all backgrounds to promote inclusive education.',
      content: 'We are excited to announce our new scholarship program aimed at supporting talented students...',
      date: 'March 5, 2024',
      image: 'https://images.pexels.com/photos/5905895/pexels-photo-5905895.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Academic',
      author: 'Academic Office',
      featured: true
    },
    {
      id: 4,
      title: 'Guest Lecture on Digital Marketing',
      excerpt: 'Industry expert shares insights on modern digital marketing strategies and career opportunities.',
      content: 'Students attended an enlightening session on digital marketing trends...',
      date: 'February 28, 2024',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Academic',
      author: 'Business Department',
      featured: false
    },
    {
      id: 5,
      title: 'Cultural Festival 2024',
      excerpt: 'Three-day cultural extravaganza featuring music, dance, drama, and art exhibitions by talented students.',
      content: 'The annual cultural festival brought together creativity and tradition...',
      date: 'February 20, 2024',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Events',
      author: 'Cultural Committee',
      featured: false
    },
    {
      id: 6,
      title: 'New Computer Lab Setup',
      excerpt: 'Latest computer systems and software installed to support IT and computer science programs.',
      content: 'Our commitment to providing cutting-edge technology continues with the new computer lab...',
      date: 'February 15, 2024',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Infrastructure',
      author: 'IT Department',
      featured: false
    }
  ];

  const categories = ['All', 'Infrastructure', 'Events', 'Academic'];
  const featuredNews = allNews.filter(news => news.featured);
  const regularNews = allNews.filter(news => !news.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Latest News & Updates
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Stay informed about the latest happenings, achievements, and events at Western Mega College
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search news..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured News</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <Card key={news.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      <Link href={`/news/${news.id}`}>
                        {news.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{news.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{news.date}</span>
                        </div>
                        <span>By {news.author}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/news/${news.id}`}>
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All News */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((news) => (
              <Card key={news.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    <Link href={`/news/${news.id}`}>
                      {news.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{news.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{news.date}</span>
                    </div>
                    
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/news/${news.id}`}>
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More News
          </Button>
        </div>
      </div>
    </div>
  );
}
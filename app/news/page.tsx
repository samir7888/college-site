import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { newsData, getFeaturedNews, getRegularNews } from "@/lib/newsData";

export default function NewsPage() {
  const allNews = newsData;
  const categories = ["All", "BHM Event", "MBA Seminar", "Scholarships"];
  const featuredNews = getFeaturedNews();
  const regularNews = getRegularNews();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="min-h-[500px] text-white py-16 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl text-orange-500 md:text-5xl font-bold mb-4">
            Latest News & Updates
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Stay informed about the latest happenings, achievements, and events
            at Western Mega College
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search news..." className="pl-10" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Featured News
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <Card
                  key={news.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
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
                      <Link href={`/news/${news.id}`}>{news.title}</Link>
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
              <Card
                key={news.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
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
                    <Link href={`/news/${news.id}`}>{news.title}</Link>
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

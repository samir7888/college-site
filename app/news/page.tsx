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
        className="flex min-h-[500px] items-center justify-center py-16 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-orange-500 md:text-5xl">
            Latest News & Updates
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-blue-100">
            Stay informed about the latest happenings, achievements, and events
            at Western Mega College
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <Input placeholder="Search news..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
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
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Featured News
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {featuredNews.map((news) => (
                <Card
                  key={news.id}
                  className="group overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-medium text-white">
                        Featured
                      </span>
                    </div>
                    <div className="absolute right-4 top-4">
                      <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl transition-colors group-hover:text-blue-600">
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
          <h2 className="mb-6 text-2xl font-bold text-gray-900">All News</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularNews.map((news) => (
              <Card
                key={news.id}
                className="group transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                      {news.category}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg transition-colors group-hover:text-blue-600">
                    <Link href={`/news/${news.id}`}>{news.title}</Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{news.excerpt}</p>

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
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More News
          </Button>
        </div>
      </div>
    </div>
  );
}

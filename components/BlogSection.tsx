import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/lib/blogData";

export function BlogSection() {
  // Get the first 3 blogs for the home page
  const blogs = blogData.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-orange-500"></div>
            <span className="text-orange-500 font-medium">Our Stories</span>
            <div className="w-8 h-1 bg-orange-500"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the exciting journeys, educational experiences, and
            memorable moments from our college community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.images[0]}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 hover:bg-orange-600">
                    {blog.category}
                  </Badge>
                </div>
                {blog.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    +{blog.images.length - 1} photos
                  </div>
                )}
              </div>

              <CardHeader className="flex-grow">
                <CardTitle className="text-lg group-hover:text-orange-600 transition-colors line-clamp-2">
                  {blog.title}
                </CardTitle>
                <div className="flex items-center space-x-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span className="truncate">{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{blog.readTime}</span>
                  </div>

                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blogs/${blog.slug}`}>
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild size="lg">
            <Link href="/blogs">View All Blog Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

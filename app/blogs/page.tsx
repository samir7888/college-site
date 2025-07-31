"use client";

import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  Eye,
  ArrowRight,
  BookOpen,
  Users,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BlogsContent() {
  // Static blog posts based on college activities
  const blogPosts = [
    {
      id: 1,
      title: "Trek to Kenjing Gumba: An 8-Day Cultural & Educational Journey",
      slug: "trek-to-kenjing-gumba",
      excerpt:
        "Students embarked on a multi-day trek to Kenjing Gumba, immersing in nature, culture and learning in Chitlang.",
      content:
        "Beginning on December 6, 2021, the 6th‑semester BHM students undertook an eight‑day trek to Kenjing Gumba in Chitlang. The journey blended cultural exploration, academic enrichment, and physical challenge, with visits to local homestays, goat‑cheese facilities, and wine processing units.",
      image:
        "https://westernmegacollege.edu.np/wp-content/uploads/2022/01/265953756_2738125833000588_4772341212623859313_n-1024x768.jpg",
      author: "Adventure Club / Students",
      date: "2021-12-06",
      readTime: "6 min read",
      views: 800,
      category: "Adventure",
      tags: ["Trek", "Chitlang", "Cultural Learning", "BHM"],
      featured: false,
    },
    {
      id: 2,
      title:
        "Academic Industrial Visit: Wine Processing, Goat Cheese & Homestay in Chitlang",
      slug: "academic-visit-chitlang-wine-cheese-homestay",
      excerpt:
        "A 4th‑semester industrial visit gave in-depth insights into wine, cheese processing, and local homestay operations in Chitlang.",
      content:
        "Fourth‑semester BHM students visited Chitlang after theoretical coursework to explore real‑world operations in wine processing, goat cheese production, and community homestay enterprises. This immersive visit connected students with the local tourism and hospitality industries.",
      image:
        "https://westernmegacollege.edu.np/wp-content/uploads/2021/02/261393449_1353180225119447_3178589903578193490_n-1536x1152.jpg",
      author: "Academic Department",
      date: "2021-12-07",
      readTime: "5 min read",
      views: 680,
      category: "Academic",
      tags: ["Industrial Visit", "Chitlang", "Wine", "Cheese"],
      featured: false,
    },
    {
      id: 3,
      title: "Industrial Visit to Unnati Cultural Village, Chitwan",
      slug: "industrial-visit-unnati-cultural-village-chitwan",
      excerpt:
        "Students visited Unnati Cultural Village in Chitwan for hospitality industry orientation and cultural exposure.",
      content:
        "On December 12, 2021, second‑semester BHM students and faculty conducted an industrial visit to Unnati Cultural Village in Harkapur, Chitwan. The visit featured a seminar on cultural heritage preservation, traditional hospitality, art & craft, and insights into local community-driven tourism initiatives.",
      image:
        "https://westernmegacollege.edu.np/wp-content/uploads/2021/12/267593289_1077396386412802_3633348452218638298_n.jpg",
      author: "Industry Relations / College",
      date: "2021-12-12",
      readTime: "4 min read",
      views: 550,
      category: "Academic",
      tags: ["Industrial Visit", "Chitwan", "Culture", "Heritage"],
      featured: false,
    },
  ];

  const categories = ["All", "Academic", "Adventure", "Events"];

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="min-h-[500px] text-white py-16 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-16 w-16 text-blue-200" />
          </div>
          <h1 className="text-4xl text-orange-500 md:text-5xl font-bold mb-4">
            College Blogs
          </h1>
          <p className="text-xl tracking-wider text-blue-100 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and stories from Western
            Mega College
          </p>
        </div>
      </section>

      {/* Featured Posts Section */}
      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Stories
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Eye className="h-4 w-4" />
                      <span>{post.views} views</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/blogs/${post.slug}`}>
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Posts Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Posts
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-gray-800"
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blogs/${post.slug}`}>
                        Read More <ArrowRight className="h-3 w-3 ml-1" />
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
          <Button size="lg" variant="outline">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="min-h-[500px] text-white py-16 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-16 w-16 text-blue-200 animate-pulse" />
          </div>
          <h1 className="text-4xl text-orange-500 md:text-5xl font-bold mb-4">
            College Blogs
          </h1>
          <p className="text-xl tracking-wider text-blue-100 max-w-2xl mx-auto">
            Loading latest stories...
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-full h-96 bg-gray-200 animate-pulse rounded-lg"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlogsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BlogsContent />
    </Suspense>
  );
}

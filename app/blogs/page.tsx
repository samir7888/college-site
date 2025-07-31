"use client";

import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Eye, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BlogsContent() {
  // Static blog posts based on college activities
  const blogPosts = [
    {
      id: 1,
      title:
        "Trek to Kenjing Gumba: Cultural & Educational Expedition (Dec 2021)",
      slug: "trek-to-kenjing-gumba-2021",
      excerpt:
        "An 8‑day trek undertaken by 50 BHM students, exploring Himalayan routes and cultural landscapes from Butwal to Kenjing Gumba.",
      content: `**Introduction & Itinerary:**  Started on December 6, 2021, students and faculty traveled overnight from Butwal to Galchi, then trekked through Syafru Besi, Lama Hotel, Langtang Valley and finally reached Kenjing Gumba, camping along the way. Some students even summit Kenjing Ri and Tsergo Ri. **Experience & Insights:**  This trek combined physical challenge and cultural immersion—passing through Terai plains, mid‑hills, and high valleys, encountering rivers, birdsong, and Himalayan views. It fostered team bonding, leadership and deeper appreciation for Nepal's geography. **Participants:**  50 students and faculty including the Principal and Vice‑Principal took part in the journey.`,
      images: [
        "https://westernmegacollege.edu.np/wp-content/uploads/2022/01/265953756_2738125833000588_4772341212623859313_n-1536x1152.jpg",
        "https://westernmegacollege.edu.np/wp-content/uploads/2022/01/265583684_2738123649667473_3400031873036968517_n-1152x1536.jpg",
        "https://westernmegacollege.edu.np/wp-content/uploads/2022/01/265611869_2738126333000538_7376264117299643935_n-1-1536x1152.jpg",
        "https://westernmegacollege.edu.np/wp-content/uploads/2022/01/265805298_2738123423000829_2134421471523741109_n-1536x1152.jpg",
      ],
      author: "Students of Western Mega College",
      date: "2021-12-06",
      readTime: "8 min read",
      views: 820,
      category: "Adventure",
      tags: ["Trek", "Kenjing Gumba", "Himalayas", "Education"],
      featured: true,
    },
    {
      id: 2,
      title:
        "Academic Visit to Chitlang: Wine, Cheese & Community Homestay (Dec 2021)",
      slug: "academic-visit-chitlang-2021",
      excerpt:
        "A structured industrial visit for fourth‑semester students to Chitlang's goat‑cheese and wine production units and local homestays.",
      content: `Fourth‑semester BHM students (≈70 participants) traveled from Butwal to Chitlang to explore the operations of a local goat cheese farm, winery, and homestay environment. The visit included seminar sessions and cultural interactions with the host community. **Learning Outcomes:**  Students gained first‑hand understanding of machinery, safety practices, raw‑material handling, and hospitality management in rural settings. The visit bridged classroom theory with real-world industry practices.`,
      images: [
        "https://westernmegacollege.edu.np/wp-content/uploads/2021/02/261393449_1353180225119447_3178589903578193490_n-1536x1152.jpg",
        "https://westernmegacollege.edu.np/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-23-at-10.29.20-AM-1.jpeg",
        "https://westernmegacollege.edu.np/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-23-at-10.29.18-AM-1.jpeg",
        "https://westernmegacollege.edu.np/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-23-at-10.29.17-AM.jpeg",
      ],
      author: "Academic Department – Western Mega College",
      date: "2021-12-07",
      readTime: "6 min read",
      views: 690,
      category: "Academic",
      tags: ["Chitlang", "Industrial Visit", "Wine Processing", "Homestay"],
      featured: false,
    },
    {
      id: 3,
      title:
        "Industrial Visit – CG Unnati Cultural Village, Chitwan (Dec 2021)",
      slug: "industrial-visit-unnati-village-2021",
      excerpt:
        "A full‑day visit to Unnati Cultural Village for second‑semester BHM students to explore hospitality, culture, art & organic farming.",
      content: `On December 12, 2021, 65 students and staff visited CG Unnati Cultural Village in Gaidakot, Chitwan. Over 104 km from Butwal, the team attended a seminar led by the manager and learned about Tharu culture, art & craft, heritage tourism and charity‑supported hospitality operations. **Highlights & Structure:**  The venue spans over 6 bighas and includes pottery units, organic farms, cultural performance spaces, and uniquely named guest rooms reflecting local festivals. The entire trip was conducted in a well‑organized itinerary.`,
      images: [
        "https://westernmegacollege.edu.np/wp-content/uploads/2021/12/267593289_1077396386412802_3633348452218638298_n.jpg",
        "https://westernmegacollege.edu.np/wp-content/uploads/2021/12/267562766_1077348903084217_5332749850656016033_n-1536x1152.jpg",
        "https://westernmegacollege.edu.np/wp-content/uploads/2021/12/267982769_1077349059750868_8354554835018357938_n-1536x1152.jpg",
      ],
      author: "Industry Relations – Western Mega College",
      date: "2021-12-12",
      readTime: "7 min read",
      views: 560,
      category: "Academic",
      tags: [
        "Unnati Cultural Village",
        "Chitwan",
        "Hospitality",
        "Cultural Heritage",
      ],
      featured: false,
    },
  ];

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
                {/* Image Gallery for Featured Posts */}
                <div className="relative h-64 overflow-hidden">
                  {post.images && post.images.length > 1 ? (
                    <div className="grid grid-cols-2 gap-1 h-full">
                      <div className="relative">
                        <Image
                          src={post.images[0]}
                          alt={`${post.title} - Image 1`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="grid grid-rows-2 gap-1">
                        <div className="relative">
                          <Image
                            src={post.images[1]}
                            alt={`${post.title} - Image 2`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="relative">
                          <Image
                            src={post.images[2] || post.images[0]}
                            alt={`${post.title} - Image 3`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {post.images.length > 3 && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <span className="text-white font-semibold text-lg">
                                +{post.images.length - 3} more
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={post.images?.[0] || "/placeholder-image.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
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
                {/* Image Display for Regular Posts */}
                <div className="relative h-48 overflow-hidden">
                  {post.images && post.images.length > 1 ? (
                    <div className="relative h-full">
                      <Image
                        src={post.images[0]}
                        alt={post.title}  
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                        +{post.images.length - 1} photos
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={post.images?.[0] || "/placeholder-image.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
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

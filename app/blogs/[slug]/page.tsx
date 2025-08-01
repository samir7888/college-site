import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Eye, ArrowLeft, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogData, getBlogBySlug } from "@/lib/blogData";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogData
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <Image
          src={post.images?.[0] || "/placeholder-image.jpg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Badge className="mb-3 sm:mb-4 bg-orange-500 hover:bg-orange-600 text-xs sm:text-sm">
              {post.category}
            </Badge>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-tight">
              {post.title}
            </h1>

            {/* Meta Information - Responsive Layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <User className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="truncate max-w-32 sm:max-w-none">
                  {post.author}
                </span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{post.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6 sm:mb-8">
            <Button
              variant="outline"
              asChild
              size="sm"
              className="sm:size-default"
            >
              <Link href="/blogs">
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">Back to Blogs</span>
              </Link>
            </Button>
          </div>

          {/* Main Content */}
          <Card className="mb-8 sm:mb-12 shadow-sm sm:shadow-md">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div
                className="prose prose-sm sm:prose-base lg:prose-lg max-w-none 
                           prose-headings:text-gray-900 prose-headings:font-bold
                           prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:md:text-3xl prose-h2:mt-8 prose-h2:mb-4
                           prose-h3:text-lg prose-h3:sm:text-xl prose-h3:md:text-2xl prose-h3:mt-6 prose-h3:mb-3
                           prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                           prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic
                           prose-ul:space-y-2 prose-ol:space-y-2
                           prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Image Gallery */}
              {post.images && post.images.length > 1 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-900">
                    Photo Gallery ({post.images.length} photos)
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {post.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer bg-gray-100"
                      >
                        <Image
                          src={image}
                          alt={`${post.title} - Photo ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs sm:text-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share Button */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-sm sm:text-base"
                >
                  <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Share this post
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                Related Posts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                  >
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <Image
                        src={
                          relatedPost.images?.[0] || "/placeholder-image.jpg"
                        }
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-3 sm:p-4 flex-grow flex flex-col">
                      <h4 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-orange-600 transition-colors line-clamp-2 flex-grow">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="mt-auto self-start"
                      >
                        <Link href={`/blogs/${relatedPost.slug}`}>
                          <span className="text-xs sm:text-sm">Read More</span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

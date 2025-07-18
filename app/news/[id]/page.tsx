import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data - in a real app, this would come from a database or API
const newsData = {
  1: {
    id: 1,
    title: "New Science Laboratory Inaugurated",
    excerpt:
      "State-of-the-art physics and chemistry labs equipped with modern instruments to enhance practical learning experience for our students.",
    content: `
      <p>Western Mega College proudly announces the inauguration of our new science laboratory complex, marking a significant milestone in our commitment to providing world-class education facilities to our students.</p>
      
      <p>The new laboratory complex spans over 2,000 square feet and houses state-of-the-art equipment for physics, chemistry, and biology experiments. The facility has been designed with modern safety standards and includes:</p>
      
      <ul>
        <li>Advanced microscopy equipment for detailed biological studies</li>
        <li>Modern chemistry fume hoods and safety equipment</li>
        <li>Digital physics apparatus for precise measurements</li>
        <li>Computer-integrated data collection systems</li>
        <li>Specialized storage for chemicals and specimens</li>
      </ul>
      
      <p>The inauguration ceremony was attended by distinguished guests including local education officials, faculty members, and student representatives. Dr. Sarah Johnson, Head of the Science Department, expressed her excitement about the new facilities.</p>
      
      <blockquote>
        "These new laboratories will revolutionize how our students learn and conduct experiments. The hands-on experience they'll gain here will prepare them excellently for their future academic and professional endeavors."
      </blockquote>
      
      <p>The project was completed with an investment of $500,000 and represents our ongoing commitment to providing the best possible learning environment for our students. The laboratories will be available for use starting from the next academic session.</p>
      
      <p>Students from the science programs have already expressed their enthusiasm about the new facilities, with many looking forward to conducting advanced experiments that were previously not possible with the older equipment.</p>
    `,
    date: "March 15, 2024",
    image:
      "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Infrastructure",
    author: "Admin",
    readTime: "5 min read",
  },
  2: {
    id: 2,
    title: "Annual Sports Day Celebration",
    excerpt:
      "Students showcase their athletic talents in various sports competitions including football, basketball, and track events.",
    content: `
      <p>The annual sports day at Western Mega College was a spectacular celebration of athleticism, teamwork, and college spirit. The three-day event brought together students, faculty, and families for an unforgettable sporting extravaganza.</p>
      
      <p>This year's sports day featured a wide range of competitions across multiple categories:</p>
      
      <h3>Track and Field Events</h3>
      <ul>
        <li>100m, 200m, and 400m sprints</li>
        <li>Long jump and high jump competitions</li>
        <li>Shot put and discus throw</li>
        <li>Relay races for both men and women</li>
      </ul>
      
      <h3>Team Sports</h3>
      <ul>
        <li>Football tournaments</li>
        <li>Basketball championships</li>
        <li>Volleyball competitions</li>
        <li>Cricket matches</li>
      </ul>
      
      <p>The highlight of the event was the inter-department competition, where students competed not just for individual glory but for their respective departments. The Business Department emerged as the overall champion, followed closely by the Science Department.</p>
      
      <p>Principal Dr. Michael Roberts congratulated all participants and emphasized the importance of sports in overall student development. "Sports teach us valuable life lessons about teamwork, perseverance, and healthy competition," he noted during the closing ceremony.</p>
      
      <p>The event concluded with an awards ceremony where medals and trophies were distributed to winners and participants. The college also announced plans to upgrade the sports facilities further to support student athletes.</p>
    `,
    date: "March 10, 2024",
    image:
      "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Events",
    author: "Sports Department",
    readTime: "4 min read",
  },
  3: {
    id: 3,
    title: "Scholarship Program Launched",
    excerpt:
      "Merit-based scholarships for deserving students from all backgrounds to promote inclusive education.",
    content: `
      <p>Western Mega College is proud to announce the launch of our comprehensive scholarship program, designed to make quality education accessible to talented students regardless of their financial background.</p>
      
      <p>The scholarship program offers multiple categories of financial assistance:</p>
      
      <h3>Merit-Based Scholarships</h3>
      <ul>
        <li>Academic Excellence Awards - Up to 100% tuition coverage</li>
        <li>Subject-Specific Scholarships for outstanding performance</li>
        <li>Leadership Awards for student leaders and community contributors</li>
      </ul>
      
      <h3>Need-Based Scholarships</h3>
      <ul>
        <li>Financial Assistance Program for economically disadvantaged students</li>
        <li>Rural Student Support Initiative</li>
        <li>First-Generation College Student Scholarships</li>
      </ul>
      
      <h3>Special Category Scholarships</h3>
      <ul>
        <li>Sports Excellence Scholarships</li>
        <li>Arts and Culture Scholarships</li>
        <li>Technology Innovation Awards</li>
      </ul>
      
      <p>The scholarship program has been made possible through generous contributions from alumni, local businesses, and educational foundations. The college has allocated $2 million for the first year of the program.</p>
      
      <p>"Education should never be limited by financial constraints," said Dr. Emily Chen, Director of Student Affairs. "This scholarship program reflects our commitment to nurturing talent and creating opportunities for all deserving students."</p>
      
      <p>Applications for the scholarship program are now open and will be accepted until April 30, 2024. Interested students can apply through the college website or visit the Student Affairs office for assistance with the application process.</p>
      
      <p>The selection process will be conducted by a committee of faculty members and external experts, ensuring transparency and fairness in the evaluation process.</p>
    `,
    date: "March 5, 2024",
    image:
      "https://images.pexels.com/photos/5905895/pexels-photo-5905895.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Academic",
    author: "Academic Office",
    readTime: "6 min read",
  },
};

interface NewsDetailPageProps {
  params: Promise<{ id: string }>;
}
export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;
  const newsId = parseInt(id);
  const news = newsData[newsId as keyof typeof newsData];

  if (!news) {
    notFound();
  }

  // Related news (excluding current news)
  const relatedNews = Object.values(newsData)
    .filter((item) => item.id !== newsId)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {news.category}
              </span>
              <span className="text-white text-sm">{news.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {news.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardContent className="p-8">
                  {/* Article Meta */}
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6 pb-6 border-b">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>By {news.author}</span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: news.content }}
                  />

                  {/* Share Section */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Share this article
                      </h3>
                      <div className="flex space-x-3">
                        <Button size="sm" variant="outline">
                          Share on Facebook
                        </Button>
                        <Button size="sm" variant="outline">
                          Share on Twitter
                        </Button>
                        <Button size="sm" variant="outline">
                          Share on LinkedIn
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Related News */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Related News
                  </h3>
                  <div className="space-y-6">
                    {relatedNews.map((relatedItem) => (
                      <div key={relatedItem.id} className="group">
                        <Link href={`/news/${relatedItem.id}`}>
                          <div className="flex space-x-4">
                            <img
                              src={relatedItem.image}
                              alt={relatedItem.title}
                              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm leading-tight mb-2">
                                {relatedItem.title}
                              </h4>
                              <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <Calendar className="h-3 w-3" />
                                <span>{relatedItem.date}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full"
                    >
                      <Link href="/news">View All News</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Subscribe to our newsletter to get the latest news and
                    updates from Western Mega College.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // In a real app, you'd fetch this from your data source
  return Object.keys(newsData).map((id) => ({
    id: id,
  }));
}

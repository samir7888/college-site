import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Eye, ArrowLeft, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Static blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Trek to Kenjing Gumba: An 8-Day Cultural & Educational Journey",
    slug: "trek-to-kenjing-gumba",
    excerpt:
      "Students embarked on a multi-day trek to Kenjing Gumba, immersing in nature, culture and learning in Chitlang.",
    content: `
      <p>Beginning on <strong>December 6, 2021</strong>, the 6th‑semester BHM students undertook an extraordinary eight‑day trek to Kenjing Gumba in Chitlang. This transformative journey masterfully blended cultural exploration, academic enrichment, and physical challenge, featuring immersive visits to local homestays, traditional goat‑cheese facilities, and authentic wine processing units.</p>

      <blockquote>
        <p>"This trek was more than just an adventure – it was a journey of discovery that connected our students with Nepal's rich cultural heritage while providing invaluable hands-on learning experiences in hospitality management."</p>
        <cite>— Adventure Club Coordinator</cite>
      </blockquote>

      <h2>🏔️ The Eight-Day Journey Experience</h2>
      
      <p>This comprehensive trek was meticulously designed to provide students with <em>hands-on experience</em> in hospitality management while exploring the breathtaking natural beauty and rich cultural tapestry of the Chitlang region.</p>

      <h3>Daily Itinerary Highlights:</h3>
      <ul>
        <li><strong>Days 1-2:</strong> Cultural immersion through authentic local homestay experiences</li>
        <li><strong>Days 3-4:</strong> Educational visits to traditional goat cheese production facilities</li>
        <li><strong>Days 5-6:</strong> Learning about wine processing techniques from local artisan producers</li>
        <li><strong>Days 7-8:</strong> Spiritual exploration at the historic Kenjing Gumba monastery</li>
        <li><strong>Throughout:</strong> Networking with local tourism and hospitality entrepreneurs</li>
      </ul>

      <h2>📚 Academic Integration & Learning Outcomes</h2>
      
      <p>The trek served as a <strong>practical extension of classroom learning</strong> for BHM students. They observed real-world applications of hospitality management principles, sustainable tourism practices, community-based tourism models, and cultural preservation through tourism development.</p>

      <p>Students meticulously documented their experiences and prepared comprehensive reports on local business operations, creating a valuable resource for future academic reference.</p>

      <h2>🌱 Cultural Learning and Personal Growth</h2>
      
      <p>Beyond the academic objectives, this trek provided <em>invaluable opportunities for personal development</em>. Students discovered new dimensions of themselves through challenging mountain terrain, unfamiliar environments, and meaningful community interactions.</p>

      <p>The experience fostered a deeper appreciation for Nepal's diverse cultural heritage and the importance of preserving traditional ways of life. Students developed resilience, teamwork skills, cultural sensitivity, and leadership qualities that will serve them throughout their careers.</p>

      <h2>🌍 Sustainable Tourism Awareness</h2>
      
      <blockquote>
        <p>"We learned that tourism isn't just about bringing visitors to a place – it's about creating meaningful connections while preserving the environment and culture for future generations."</p>
        <cite>— 6th Semester BHM Student</cite>
      </blockquote>

      <p>The program placed special emphasis on <strong>responsible tourism practices</strong> and environmental conservation. Students gained crucial insights into the delicate balance between tourism development and environmental preservation, community involvement in tourism planning, and the economic benefits of sustainable tourism for local communities.</p>

      <p>They also learned about environmental impact assessment and mitigation strategies that are essential for responsible tourism development in sensitive mountain ecosystems.</p>

      <h2>🎓 A Transformative Educational Experience</h2>
      
      <p>This eight-day adventure perfectly exemplified <strong>Western Mega College's commitment to experiential learning</strong> and holistic education. The trek successfully prepared students for careers in hospitality management while fostering cultural awareness, environmental responsibility, professional skills, and personal growth.</p>

      <p><em>This trek stands as a testament to the power of experiential learning in shaping well-rounded hospitality professionals who are culturally aware, environmentally conscious, and academically prepared for the challenges of the modern tourism industry.</em></p>
    `,
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
    content: `
      <p>Fourth‑semester BHM students embarked on an <strong>immersive industrial visit to Chitlang</strong> following their theoretical coursework, diving deep into the real‑world operations of wine processing, artisanal goat cheese production, and authentic community homestay enterprises. This transformative experience created vital connections between academic learning and the thriving local tourism and hospitality industries.</p>

      <blockquote>
        <p>"Seeing theory come to life in the beautiful hills of Chitlang was an eye-opening experience that changed how we view hospitality management."</p>
        <cite>— 4th Semester BHM Student</cite>
      </blockquote>

      <h2>🍷 Wine Processing Insights: From Vine to Bottle</h2>
      
      <p>Students had the unique opportunity to observe both <em>traditional and modern wine-making techniques</em> at local vineyards, gaining comprehensive insights into the entire production process.</p>

      <p>The wine production learning experience covered four key areas: grape cultivation and harvesting (understanding soil conditions, climate factors, and optimal timing), fermentation and quality control (observing processes, temperature control, and testing procedures), bottling and marketing (packaging, labeling strategies, and market positioning), and sustainable practices (eco-friendly production methods and environmental conservation).</p>

      <h2>🧀 Artisanal Goat Cheese Production</h2>
      
      <p>The visit to local cheese production facilities provided <strong>hands-on learning experiences</strong> in dairy processing, quality standards, and small-scale food production management.</p>

      <p>Students observed the complete production process from milk collection (quality standards and freshness requirements) through processing techniques (traditional methods with modern hygiene standards), aging and storage (climate control for optimal flavor development), to quality assurance (food safety protocols and artisanal methods).</p>

      <blockquote>
        <p>"The cheese-making process taught us that hospitality isn't just about service – it's about understanding and appreciating the entire supply chain that brings quality products to our guests."</p>
        <cite>— Student Reflection</cite>
      </blockquote>

      <h2>🏠 Community Homestay Operations</h2>
      
      <p>Students experienced <em>authentic community-based tourism</em> by staying with local families, gaining invaluable insights into grassroots hospitality service delivery.</p>

      <p>The homestay experience provided learning in service excellence through personalized hospitality in intimate settings, cultural exchange facilitation, sustainable eco-friendly tourism practices, economic impact observation, and authentic experience creation through genuine cultural immersion.</p>

      <h2>💡 Industry Connections & Networking</h2>
      
      <p>Throughout the visit, students engaged with <strong>local entrepreneurs and industry professionals</strong>, building valuable networks and gaining insights into small-scale business management, marketing strategies, community-based tourism challenges and opportunities, innovation in traditional industries, and sustainable business practices.</p>

      <h2>🎯 Academic Integration & Career Preparation</h2>
      
      <p>This industrial visit successfully <strong>reinforced classroom learning with practical experience</strong>, creating a comprehensive educational foundation for students' future careers in hospitality management.</p>

      <p>Key achievements included practical application of theory in real business environments, direct industry exposure with successful local entrepreneurs, deep cultural appreciation and understanding, development of a sustainable mindset for responsible tourism, and building professional networks for future career opportunities.</p>

      <p><em>This immersive experience perfectly demonstrated how academic learning can be enhanced through direct industry engagement, preparing our students to become thoughtful, culturally-aware hospitality professionals who appreciate both tradition and innovation in their field.</em></p>
    `,
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
    content: `
      <p>On <strong>December 12, 2021</strong>, second‑semester BHM students and faculty embarked on an enlightening industrial visit to the renowned <em>Unnati Cultural Village</em> in Harkapur, Chitwan. This comprehensive educational experience featured an intensive seminar on cultural heritage preservation, traditional hospitality practices, authentic art & craft workshops, and valuable insights into successful community-driven tourism initiatives.</p>

      <blockquote>
        <p>"Unnati Cultural Village showed us how tourism can be a powerful force for cultural preservation while providing sustainable livelihoods for local communities."</p>
        <cite>— Faculty Coordinator</cite>
      </blockquote>

      <h2>🏛️ Cultural Heritage Preservation: Keeping Traditions Alive</h2>
      
      <p>Students participated in comprehensive seminars that explored the <strong>critical importance of cultural heritage preservation</strong> in the modern tourism landscape.</p>

      <p>The seminar covered four main focus areas: Traditional Tharu culture and customs (including their unique social structures, festivals, and daily life practices preserved for generations), heritage conservation techniques (modern methods and traditional approaches for preserving cultural artifacts and buildings), community involvement strategies (empowering local communities to take ownership of preservation efforts while benefiting economically), and culture-tourism integration (successful models of integrating authentic cultural experiences with sustainable tourism development).</p>

      <h2>🤝 Traditional Hospitality Practices: Ancient Wisdom, Modern Application</h2>
      
      <p>The visit provided <em>invaluable insights into indigenous hospitality traditions</em>, demonstrating how centuries-old practices can enhance modern hospitality services.</p>

      <p>Students observed traditional Tharu greeting rituals that create immediate emotional connections with guests, authentic farm-to-table cuisine preparation using traditional recipes and local ingredients, cultural entertainment programs featuring traditional music, dance, and storytelling, and traditional building designs that provide comfort while showcasing cultural identity.</p>

      <blockquote>
        <p>"We learned that true hospitality isn't just about service – it's about sharing your culture, your stories, and your heart with your guests."</p>
        <cite>— 2nd Semester BHM Student</cite>
      </blockquote>

      <h2>🎨 Art & Craft Workshops: Hands-On Cultural Learning</h2>
      
      <p>Students participated in <strong>immersive hands-on workshops</strong> in traditional art and craft making, gaining practical experience in cultural tourism activities that serve dual purposes as preservation tools and visitor attractions.</p>

      <p>Workshop activities included traditional pottery (learning ancient clay-working techniques and understanding artistic and functional aspects), traditional weaving (hands-on experience with looms and patterns that tell stories of cultural identity), natural dye making (creating vibrant colors from local plants and minerals using sustainable centuries-old practices), and wood carving (traditional techniques for architectural decoration and functional items with spiritual significance).</p>

      <h2>🌱 Community-Driven Tourism: A Sustainable Model</h2>
      
      <p>Students gained <em>valuable insights into successful community-based tourism models</em>, learning how local communities can harness tourism as a tool for economic development while maintaining their cultural integrity.</p>

      <p>Key learning outcomes included understanding economic empowerment (how tourism revenue directly benefits local families and community development), cultural preservation (using tourism as an incentive to maintain traditional practices), environmental conservation (community-led efforts to protect natural resources), authentic experience creation (genuine cultural exchanges benefiting visitors and hosts), and sustainable practices (long-term planning ensuring continued benefits for future generations).</p>

      <h2>📊 Impact Assessment & Success Metrics</h2>
      
      <p>The visit revealed significant community benefits including a 70% increase in household income through tourism activities, tourism revenue funding local school improvements, community health programs supported by tourism profits, increased forest conservation efforts, and young people staying in the community instead of migrating to cities.</p>

      <h2>🎓 Academic Integration & Future Applications</h2>
      
      <p>This visit perfectly exemplified <strong>Western Mega College's commitment</strong> to providing students with comprehensive understanding of Nepal's diverse cultural landscape and its successful integration with sustainable tourism practices.</p>

      <p>Student takeaways included developing cultural sensitivity and deep appreciation for preserving local traditions, understanding how tourism can be a force for positive change, gaining skills in working with local communities as partners, learning to create meaningful cultural exchanges, and acquiring knowledge of integrating heritage conservation with tourism development.</p>

      <p><em>This transformative visit demonstrated that the most successful tourism initiatives are those that emerge from and benefit the communities themselves, creating a sustainable cycle of cultural preservation, economic development, and authentic visitor experiences that honor the past while building for the future.</em></p>
    `,
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

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <Image
          src={post.image}
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
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-3 sm:p-4 flex-grow flex flex-col">
                      <h4 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 flex-grow">
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

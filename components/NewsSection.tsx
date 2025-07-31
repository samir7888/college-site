import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export function NewsSection() {
  const news = [
    {
      id: 1,
      title:
        "Trek to Kenjing Gumba: Cultural & Educational Expedition (Dec 2021)",
      excerpt:
        "An 8‑day trek undertaken by 50 BHM students, exploring Himalayan routes and cultural landscapes from Butwal to Kenjing Gumba.",
      date: "December 6, 2021",
      image:
        "https://westernmegacollege.edu.np/wp-content/uploads/2022/01/265953756_2738125833000588_4772341212623859313_n-1536x1152.jpg",
      category: "Adventure",
      slug: "trek-to-kenjing-gumba-2021",
    },
    {
      id: 2,
      title:
        "Academic Visit to Chitlang: Wine, Cheese & Community Homestay (Dec 2021)",
      excerpt:
        "A structured industrial visit for fourth‑semester students to Chitlang's goat‑cheese and wine production units and local homestays.",
      date: "December 7, 2021",
      image:
        "https://westernmegacollege.edu.np/wp-content/uploads/2021/02/261393449_1353180225119447_3178589903578193490_n-1536x1152.jpg",
      category: "Academic",
      slug: "academic-visit-chitlang-2021",
    },
    {
      id: 3,
      title:
        "Industrial Visit – CG Unnati Cultural Village, Chitwan (Dec 2021)",
      excerpt:
        "A full‑day visit to Unnati Cultural Village for second‑semester BHM students to explore hospitality, culture, art & organic farming.",
      date: "December 12, 2021",
      image:
        "https://westernmegacollege.edu.np/wp-content/uploads/2021/12/267593289_1077396386412802_3633348452218638298_n.jpg",
      category: "Academic",
      slug: "industrial-visit-unnati-village-2021",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-blue-600"></div>
            <span className="text-blue-600 font-medium">Latest Stories</span>
            <div className="w-8 h-1 bg-blue-600"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Campus Life & Activities
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the vibrant life at Western Mega College through our latest
            blog posts and stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
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
                    <Link href={`/blogs/${item.slug}`}>
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
            <Link href="/blogs">View All Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

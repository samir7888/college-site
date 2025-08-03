import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  BookOpen,
  Building,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const milestones = [
    {
      year: "2013",
      event:
        "Western Mega College Established with a focus on Management Education",
    },
    {
      year: "2015",
      event: "Bachelor of Hotel Management (BHM) Program Launched",
    },
    { year: "2018", event: "First Batch of BHM Students Graduated" },
    {
      year: "2020",
      event: "Master of Business Administration (MBA) Program Introduced",
    },
    {
      year: "2022",
      event:
        "Collaboration with Industry Partners for Internship and Placement",
    },
    {
      year: "2024",
      event:
        "Celebrating 11 Years of Excellence in Hospitality and Business Education",
    },
  ];

  const features = [
    {
      icon: Building,
      title: "Modern Infrastructure",
      description:
        "Fully-equipped training kitchens, mock bars, and business labs to support hands-on learning in BHM and MBA programs.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "Industry-experienced chefs, hospitality professionals, and business leaders guiding students toward academic and professional excellence.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "A perfect blend of academic theory and real-world application designed to meet the global standards of hospitality and business education.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Programs recognized by top hospitality and corporate sectors, with strong placement support and university affiliations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex min-h-[500px] items-center justify-center py-16 text-white">
        {/* Background image */}
        <Image
          src="/pic3.JPG"
          alt="Campus Background"
          fill
          className="z-0 object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/60" />

        {/* Content */}
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            About Western Mega College
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-blue-100">
            Over a decade of educational excellence, nurturing minds and shaping
            futures
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Shaping Future Leaders in Hospitality & Business
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                Since its establishment in 2013, Western Mega College has been
                dedicated to delivering specialized education in Hotel
                Management and Business Administration. With a focus on
                practical learning and leadership development, we empower
                students to thrive in dynamic global industries.
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                From professional kitchens to case-based MBA classes, our
                curriculum blends real-world training with academic excellence.
                We are proud to support the career paths of aspiring hoteliers
                and business professionals through quality education, expert
                mentorship, and industry collaboration.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-blue-600">
                    800+
                  </div>
                  <p className="text-gray-600">Successful Graduates</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-green-600">
                    40+
                  </div>
                  <p className="text-gray-600">Dedicated Faculty</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-orange-600">
                    11
                  </div>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-purple-600">
                    90%
                  </div>
                  <p className="text-gray-600">Placement Success</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/pic1.JPG"
                alt="Western Mega College Campus"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Message from Principal's Desk */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Message from Principal's Desk
            </h2>
            <div className="mx-auto h-1 w-24 bg-blue-600"></div>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
              {/* Principal's Image and Info */}
              <div className="lg:col-span-1">
                <Card className="text-center shadow-lg">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <Image
                        src="/principal.JPG"
                        alt="Dr. Sarah Johnson - Principal"
                        width={200}
                        height={200}
                        className="mx-auto h-48 w-48 rounded-full border-4 border-blue-100 object-cover"
                      />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
                        Principal
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      Kishu Sharma
                    </h3>
                    {/* <p className="text-blue-600 font-medium mb-2">
                      Principal & Chief Academic Officer
                    </p>
                    <p className="text-sm text-gray-600">
                      Ph.D. in Education | 15+ Years Experience
                    </p> */}
                  </CardContent>
                </Card>
              </div>

              {/* Principal's Message */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="prose prose-lg max-w-none text-gray-700">
                      <p className="mb-6 text-lg leading-relaxed">
                        Welcome to Western Mega College (WMC)—a place where your
                        dreams meet incredible opportunities.
                      </p>

                      <p className="mb-6 leading-relaxed">
                        As the Principal, I’m truly proud to lead this lively
                        community filled with passionate educators, driven
                        students, and supportive families, all working together
                        towards a common goal of excellence. It brings me great
                        joy to welcome you to WMC, a college dedicated to not
                        just raising the bar in education, but also in launching
                        successful careers. For more than a decade, Western Mega
                        College has been a shining example of quality education,
                        grounded in holistic development. We believe that real
                        learning goes beyond just textbooks; it’s about
                        nurturing critical thinking, encouraging deep
                        understanding, and instilling ethical values that shape
                        character. Our mission is to empower you with a degree
                        that truly reflects your capabilities, giving you and
                        your parents confidence that your trust in us is
                        well-placed. Our faculty members are more than just
                        teachers; they are a mix of respected academics and
                        experienced industry professionals who bring valuable
                        insights and connections right into the classroom. They
                        are your mentors, committed to helping you succeed.
                      </p>

                      <p className="mb-6 leading-relaxed">
                        At WMC, we offer two distinct pathways to leadership:
                      </p>

                      <ul className="mb-6 space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>
                            <b>For Future Hospitality Leaders:</b> We are
                            revolutionizing hospitality education with SCHOTEL,
                            our industry-aligned BHM program. This dynamic model
                            ensures you gain the practical expertise needed to
                            thrive in a global hospitality environment.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>
                            <b>For Aspiring Business Executives:</b> Our Master
                            of Business Administration (MBA) program is
                            engineered to equip you with the strategic insights
                            and leadership skills required to succeed in the
                            complex world of modern business.
                          </span>
                        </li>
                      </ul>

                      <blockquote className="mb-6 rounded-r-lg border-l-4 border-blue-600 bg-blue-50 py-4 pl-6">
                        <p className="mb-2 text-lg italic text-blue-800">
                          "At Western Mega College, we are committed to
                          delivering practical, career-focused education through
                          our MBA and BHM programs—shaping future leaders in
                          business and hospitality."
                        </p>
                      </blockquote>

                      <p className="mb-6 leading-relaxed">
                        Your experience here goes well beyond the classroom. We
                        cultivate a vibrant campus life filled with in-class
                        activities, cultural festivals, CSR activities and
                        leadership opportunities, creating a space where you can
                        forge lifelong friendships and grow as an individual.
                        The success of this approach is evident in our
                        impressive placement record and a dynamic alumni network
                        of leaders who are making a difference.
                      </p>

                      <p className="mb-6 leading-relaxed">
                        Having spent my career leading educational institutions
                        and understanding the dynamics between the academic and
                        business worlds, I know what it takes to build a bridge
                        to success. It is this experience that fuels my passion
                        for creating an education that is both intellectually
                        rigorous and intensely practical. Nothing gives me more
                        pride than seeing our graduates leave not just with a
                        degree, but with the confidence and character to achieve
                        their dreams.
                      </p>

                      <p className="text-base font-medium text-gray-800">
                        My door is always open! I warmly invite you to come
                        visit our campus, meet our amazing faculty, and discover
                        for yourself what makes the Western Mega College family
                        so unique. I can’t wait to personally welcome you as you
                        embark on your academic adventure!
                      </p>

                      <div className="mt-8 border-t border-gray-200 pt-6">
                        <p className="italic text-gray-600">
                          Warm regards,
                          <br />
                          <span className="font-semibold text-gray-800">
                            Kishu Sharma
                          </span>
                          <br />
                          <span className="text-sm">
                            Principal, Western Mega College
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our Foundation
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Our mission, vision, and values guide everything we do as we work
              to shape the future leaders of tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-100 p-4">
                  <Target className="mx-auto h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We a quality provide education that creates highly productive
                  professionals who are ethical, entrepreneurial and prepared to
                  succeed in the global economy. The college achieves this
                  though excellence in teaching research and service engagement
                  with the business community other stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 p-4">
                  <Eye className="mx-auto h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our Vision is to empower students from diverse backgrounds to
                  become productive and ethical business professionals who are
                  among the best in the world.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-orange-100 p-4">
                  <Heart className="mx-auto h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Innovation and Creativity</li>
                  <li>• Inclusivity and Diversity</li>
                  <li>• Responsibility and Service</li>
                  <li>• Professionalism and Leadership</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Why Choose Western Mega?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We offer a comprehensive educational experience that goes beyond
              traditional learning.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-100 p-4">
                    <feature.icon className="mx-auto h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones in our journey of educational excellence over the
              past two decades.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""
                    }`}
                >
                  <div className="w-1/2 px-4">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          {milestone.year}
                        </div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

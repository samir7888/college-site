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
    { year: "2000", event: "Western Mega College Established" },
    { year: "2005", event: "First Batch of +2 Students Graduated" },
    { year: "2010", event: "Diploma Programs Launched" },
    { year: "2015", event: "New Campus Building Inaugurated" },
    { year: "2020", event: "Digital Learning Platform Introduced" },
    { year: "2024", event: "Celebrating 24 Years of Excellence" },
  ];

  const features = [
    {
      icon: Building,
      title: "Modern Infrastructure",
      description:
        "State-of-the-art classrooms, laboratories, and facilities equipped with the latest technology.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "Highly qualified and experienced teachers committed to student success.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "Well-designed programs that balance theoretical knowledge with practical skills.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Accredited programs recognized by leading universities and employers.",
    },
  ];

  return (
    <div className="min-h-screen mt-28  bg-gray-50">
      {/* Hero Section */}

      <section
        className="min-h-[500px] text-white py-16 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Western Mega College
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Over two decades of educational excellence, nurturing minds and
            shaping futures
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Building Tomorrow Leaders Today
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Western Mega College has been at the forefront of educational
                excellence for over two decades. Founded in 2000, we have
                consistently maintained our commitment to providing quality
                education that prepares students for successful careers and
                meaningful contributions to society.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our institution has grown from a small college with a handful of
                students to a recognized educational hub serving hundreds of
                students across various programs. We take pride in our holistic
                approach to education, combining academic rigor with character
                development and practical skills training.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    2000+
                  </div>
                  <p className="text-gray-600">Graduates</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    50+
                  </div>
                  <p className="text-gray-600">Faculty Members</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    24
                  </div>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    95%
                  </div>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="College Campus"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our mission, vision, and values guide everything we do as we work
              to shape the future leaders of tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To provide quality education that empowers students to achieve
                  their full potential, develop critical thinking skills, and
                  contribute meaningfully to society through innovative teaching
                  methods and holistic development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Eye className="h-8 w-8 text-green-600 mx-auto" />
                </div>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be a leading educational institution recognized for
                  academic excellence, innovation in teaching and learning, and
                  for producing graduates who are well-prepared for the
                  challenges of the modern world.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Heart className="h-8 w-8 text-orange-600 mx-auto" />
                </div>
                <CardTitle className="text-xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Integrity and Excellence</li>
                  <li>• Innovation and Creativity</li>
                  <li>• Inclusivity and Diversity</li>
                  <li>• Responsibility and Service</li>
                  <li>• Continuous Learning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Western Mega?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive educational experience that goes beyond
              traditional learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mx-auto" />
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
      <section className="py-16 bg-gray-50">
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
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-8 ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
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
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

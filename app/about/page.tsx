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
    <div className="min-h-screen  bg-gray-50">
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

      {/* Message from Principal's Desk */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Message from Principal's Desk
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Principal's Image and Info */}
              <div className="lg:col-span-1">
                <Card className="text-center shadow-lg">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <Image
                        src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Dr. Sarah Johnson - Principal"
                        width={200}
                        height={200}
                        className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-100"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Principal
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Dr. Sarah Johnson
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      Principal & Chief Academic Officer
                    </p>
                    <p className="text-sm text-gray-600">
                      Ph.D. in Education | 15+ Years Experience
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Principal's Message */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="prose prose-lg max-w-none text-gray-700">
                      <p className="text-lg leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                        Welcome to Western Mega College, where we believe that
                        education is not just about acquiring knowledge, but
                        about transforming lives and building character. As the
                        Principal of this esteemed institution, I am honored to
                        lead a community of dedicated educators, ambitious
                        students, and supportive families who share our vision
                        of excellence.
                      </p>

                      <p className="mb-6 leading-relaxed">
                        Over the past two decades, Western Mega College has
                        established itself as a beacon of quality education in
                        our region. We have consistently maintained our
                        commitment to providing{" "}
                        <strong>holistic education</strong> that nurtures not
                        only academic excellence but also personal growth,
                        critical thinking, and ethical values.
                      </p>

                      <p className="mb-6 leading-relaxed">
                        Our approach to education is{" "}
                        <em>student-centered and future-focused</em>. We
                        understand that today's students will be tomorrow's
                        leaders, innovators, and change-makers. Therefore, we
                        have designed our curriculum and teaching methodologies
                        to:
                      </p>

                      <ul className="mb-6 space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>
                            Foster creativity and innovation in every student
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>
                            Develop strong analytical and problem-solving skills
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Build confidence and leadership qualities</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>
                            Instill values of integrity, respect, and social
                            responsibility
                          </span>
                        </li>
                      </ul>

                      <blockquote className="border-l-4 border-blue-600 pl-6 py-4 mb-6 bg-blue-50 rounded-r-lg">
                        <p className="text-lg italic text-blue-800 mb-2">
                          "Education is the most powerful weapon which you can
                          use to change the world. At Western Mega College, we
                          are committed to empowering our students with this
                          weapon of knowledge, wisdom, and character."
                        </p>
                      </blockquote>

                      <p className="mb-6 leading-relaxed">
                        Our faculty members are not just teachers; they are{" "}
                        <strong>mentors, guides, and inspirers</strong> who go
                        above and beyond to ensure that every student reaches
                        their full potential. With state-of-the-art facilities,
                        modern teaching methodologies, and a supportive learning
                        environment, we provide our students with the best
                        possible foundation for their future endeavors.
                      </p>

                      <p className="mb-6 leading-relaxed">
                        As we look towards the future, we remain committed to
                        continuous improvement and innovation in education. We
                        are constantly updating our programs, enhancing our
                        facilities, and adopting new technologies to ensure that
                        our students are well-prepared for the challenges and
                        opportunities of the 21st century.
                      </p>

                      <p className="text-lg font-medium text-gray-800">
                        I invite you to join our Western Mega College family and
                        embark on a journey of discovery, growth, and success.
                        Together, we will build a brighter future for our
                        students and our society.
                      </p>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-gray-600 italic">
                          Warm regards,
                          <br />
                          <span className="font-semibold text-gray-800">
                            Dr. Sarah Johnson
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

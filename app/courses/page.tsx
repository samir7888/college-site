"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Users,
  Calendar,
  BookOpen,
  Award,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  const courseCategories = [
    { id: "all", label: "All Courses", icon: BookOpen },
    { id: "plus2", label: "+2 Programs", icon: GraduationCap },
    { id: "diploma", label: "Diploma Programs", icon: Award },
  ];

  const courses = [
    {
      id: 1,
      slug: "plus-two-science",
      title: "+2 Science",
      category: "plus2",
      description:
        "Comprehensive science education covering Physics, Chemistry, Biology, and Mathematics",
      duration: "2 Years",
      intake: "150 Students",
      image:
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      id: 2,
      slug: "plus-two-management",
      title: "+2 Management",
      category: "plus2",
      description:
        "Business-focused education with emphasis on management principles and practices",
      duration: "2 Years",
      intake: "120 Students",
      image:
        "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      id: 3,
      slug: "diploma-computer-engineering",
      title: "Diploma in Computer Engineering",
      category: "diploma",
      description:
        "Practical computer engineering education with hands-on programming and system design",
      duration: "3 Years",
      intake: "80 Students",
      image:
        "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      id: 4,
      slug: "diploma-civil-engineering",
      title: "Diploma in Civil Engineering",
      category: "diploma",
      description:
        "Comprehensive civil engineering program covering construction, design, and project management",
      duration: "3 Years",
      intake: "60 Students",
      image:
        "https://images.pexels.com/photos/8761431/pexels-photo-8761431.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      id: 5,
      slug: "diploma-electrical-engineering",
      title: "Diploma in Electrical Engineering",
      category: "diploma",
      description:
        "Electrical engineering fundamentals with focus on power systems and electronics",
      duration: "3 Years",
      intake: "50 Students",
      image:
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      id: 6,
      slug: "diploma-mechanical-engineering",
      title: "Diploma in Mechanical Engineering",
      category: "diploma",
      description:
        "Mechanical engineering program covering design, manufacturing, and maintenance",
      duration: "3 Years",
      intake: "45 Students",
      image:
        "https://images.pexels.com/photos/159751/turning-lathe-machine-tool-metal-159751.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
  ];

  const filteredCourses =
    category === "all"
      ? courses
      : courses.filter((course) => course.category === category);

  const currentCategory = courseCategories.find((cat) => cat.id === category);
  const IconComponent = currentCategory?.icon || BookOpen;

  return (
    <div className="min-h-screen mt-24">
        {/* Hero Section */}
        <section className="min-h-[500px] text-white py-16 flex items-center justify-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl text-orange-500 md:text-5xl  font-bold mb-4">
              {currentCategory?.label || "Our Courses"}
            </h1>
            <p className="text-2xl tracking-wide  text-white max-w-2xl mx-auto">
              Discover our comprehensive range of academic programs designed to
              prepare you for success
            </p>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {courseCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Button
                    key={cat.id}
                    variant={category === cat.id ? "default" : "outline"}
                    className="flex items-center space-x-2 text-black bg-white border-gray-200 hover:bg-gray-300"
                    onClick={() => {
                      const url =
                        cat.id === "all"
                          ? "/courses"
                          : `/courses?category=${cat.id}`;
                      window.location.href = url;
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{cat.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="group bg-white bg-opacity-80 border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                    width={500}
                    height={300}
                    src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">
                        {course.category === "plus2"
                          ? "+2 Program"
                          : "Diploma Program"}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-mono">{course.title}</CardTitle>
                    <p className="text-neutral-foreground">{course.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{course.intake}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                        <Link href={`/courses/${course.slug}`}>
                          View Course
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        </div>
      );
}

"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function CoursesContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  // Updated course categories to BHM and MBA
  const courseCategories = [
    { id: "all", label: "All Programs", icon: BookOpen },
    { id: "bachelor", label: "Bachelor Programs (BHM)", icon: GraduationCap },
    { id: "masters", label: "Master Programs (MBA)", icon: Award },
  ];

  // Updated courses list
  const courses = [
    {
      id: 1,
      slug: "bachelor-of-science-in-hospitality-management",
      title: "Bachelor of Science (Hons) in Hospitality Management (BHM)",
      category: "bachelor",
      description:
        "Comprehensive hospitality management program focusing on hotel operations, event planning, and customer service excellence.",
      duration: "4 Years",
      intake: "200 Students",
      image: "/image3.JPG",
    },
    {
      id: 2,
      slug: "master-of-business-administration",
      title: "Master of Business Administration (MBA)",
      category: "masters",
      description:
        "Advanced business administration program covering leadership, marketing, finance, and strategic management.",
      duration: "2 Years",
      intake: "100 Students",
      image: "/image2.JPG",
    },
  ];

  // Filter courses by selected category
  const filteredCourses =
    category === "all"
      ? courses
      : courses.filter((course) => course.category === category);

  const currentCategory = courseCategories.find((cat) => cat.id === category);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden py-16 text-white">
        {/* Background Image */}
        <Image
          src="/pic2.JPG"
          alt="Western Mega Programs"
          fill
          className="z-0 object-cover object-top"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/50" />

        {/* Content */}
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {currentCategory?.label || "Our Programs"}
          </h1>
          <p className="mx-auto max-w-2xl text-2xl tracking-wide text-white">
            Discover our specialized academic programs designed to prepare you
            for success.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {courseCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Button
                  key={cat.id}
                  variant={category === cat.id ? "default" : "outline"}
                  className="flex items-center space-x-2 border-gray-200 bg-white text-black hover:bg-gray-300"
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="group border-gray-200 bg-white bg-opacity-80 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    width={500}
                    height={300}
                    src={course.image}
                    alt={course.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <Badge className="bg-blue-600 text-white">
                      {course.category === "bachelor"
                        ? "Bachelor Program"
                        : "Master Program"}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <p className="text-neutral-foreground">
                    {course.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    {/* <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{course.intake}</span>
                    </div> */}
                  </div>

                  <div className="space-y-3 border-t border-gray-700 pt-4">
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Link href={`/courses/${course.slug}`}>
                        View Course
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-orange-500 text-orange-600 hover:bg-orange-50"
                    >
                      <Link href={`/apply?course=${course.id}`}>Apply Now</Link>
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

function LoadingFallback() {
  return (
    <div className="min-h-screen">
      <section
        className="flex min-h-[500px] items-center justify-center py-16 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="mx-auto mb-4 h-16 w-16 animate-pulse text-white" />
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Programs</h1>
          <p className="mx-auto max-w-2xl text-2xl tracking-wide text-white">
            Loading courses...
          </p>
        </div>
      </section>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CoursesContent />
    </Suspense>
  );
}

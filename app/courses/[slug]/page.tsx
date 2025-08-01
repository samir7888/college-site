export async function generateStaticParams() {
  const courses = [
    {
      id: 1,
      slug: "bachelor-of-science-in-hospitality-management",
    },
    {
      id: 2,
      slug: "master-of-business-administration",
    },
  ];

  return courses.map((course) => ({
    slug: course.slug,
  }));
}


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Clock,
  Users,
  Calendar,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Briefcase,
  User,
} from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: 1,
    slug: "bachelor-of-science-in-hospitality-management",
    title: "Bachelor of Science (Hons) in Hospitality Management (BHM)",
    category: "bachelor",
    description:
      "Comprehensive hospitality management program focusing on hotel operations, event planning, and customer service excellence.",
    duration: "4 Years",
    intake: "May/Nov",
    // fee: "NPR 200,000/year",
    subjects: [
      "Hotel Operations",
      "Event Planning",
      "Food & Beverage Management",
      "Customer Service",
      "Business Communication",
    ],
    image:
      "/image3.JPG",
    eligibility:
      "10+2, PCL or Equivalent in any discipline or as per minimum criteria for a Bachelor from the ministry of Higher education, Nepal.",
    careerPaths: [
      "Hotel Manager",
      "Event Coordinator",
      "Food and Beverage Manager",
      "Tourism Consultant",
    ],
    faculty: [
      {
        name: "Chef Bikash Khatri Thapa",
        subject: "Practical Incharge",
        qualification: "Ph.D. in Hospitality",
      },
      {
        name: "Kabi Raj Giri",
        subject: "Practical Instructure",
        qualification: "Ph.D. in Business",
      },
    ],
  },
  {
    id: 2,
    slug: "master-of-business-administration",
    title: "Master of Business Administration (MBA)",
    category: "masters",
    description:
      "Advanced business administration program covering leadership, marketing, finance, and strategic management.",
    duration: "2 Years",
    intake: "May/Nov",
    // fee: "NPR 300,000/year",
    subjects: [
      "Leadership and Management",
      "Financial Accounting",
      "Marketing Strategies",
      "Strategic Management",
      "Business Analytics",
    ],
    image:
      "/image2.JPG",
    eligibility:
      "Minimum score of second division marks in Bachelors Degree, or as per the guidelines of Ministry of Education, Nepal.",
    careerPaths: [
      "Business Manager",
      "Marketing Executive",
      "Financial Analyst",
      "Operations Manager",
    ],
    faculty: [
      {
        name: "Dr. Bhagwati Prasad Chaudhary",
        subject: "Business and Management Studies",
        qualification: "Ph.D. in Marketing",
      },
      {
        name: "Lalitman Shrestha",
        subject: "Banking and Accountancy",
        qualification: "Ph.D. in Finance",
      },
    ],
  },
];


interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-hero-background bg-cover bg-center font-sans text-white">
        <div className="bg-black bg-opacity-70 min-h-screen w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Course Not Found</h1>
            <p className="mt-4">
              The course you are looking for does not exist.
            </p>
            <Button asChild className="mt-8">
              <Link href="/courses">Back to Courses</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hero-background bg-cover bg-center font-sans text-white">
      <div className="bg-white  min-h-screen">
        {/* Hero Section */}
        <section
          className="min-h-[500px] text-white py-16 flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${course.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 text-center">
            {/* <Badge className="bg-blue-600 tracking-widest font-light text-white mb-4">
              {course.category === "plus2" ? "+2 Program" : "Diploma Program"}
            </Badge> */}
            <h1 className="text-4xl  md:text-5xl font-bold mb-4">
              {course.title}
            </h1>
            <p className="text-xl tracking-wider text-white max-w-3xl mx-auto">
              {course.description}
            </p>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-white bg-opacity-80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl font-mono">
                      Course Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center  w-2/3 mx-auto">
                      <div className="p-4   rounded-lg">
                        <Clock className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                        <h4 className="font-bold">Duration</h4>
                        <p>{course.duration}</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg">
                        <Users className="h-8 w-8 mx-auto mb-2 text-green-400" />
                        <h4 className="font-bold">Intake</h4>
                        <p>{course.intake}</p>
                      </div>
                      
                    </div>

                    <div>
                      <h3 className="text-xl font-mono font-bold mb-4">
                        Subjects
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {course.subjects.map((subject) => (
                          <div
                            key={subject}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-mono font-bold mb-4">
                        Career Paths
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {course.careerPaths.map((path) => (
                          <Badge
                            key={path}
                            variant="secondary"
                            className="bg-gray-10a0 text-gray-800 p-2"
                          >
                            <Briefcase className="h-4 w-4 mr-2" />
                            {path}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="bg-gray-200 bg-opacity-80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl font-mono">
                      Eligibility
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-6">
                      {/* <GraduationCap className="h-16 w-16 text-blue-400" /> */}
                      <p>{course.eligibility}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-200 bg-opacity-80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl font-mono">
                      Faculty
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {course.faculty.map((faculty) => (
                      <div
                        key={faculty.name}
                        className="flex items-center space-x-4"
                      >
                        <User className="h-8 w-8 text-gray-400" />
                        <div>
                          <h4 className="font-bold">{faculty.name}</h4>
                          <p className="text-sm text-gray-400">
                            {faculty.subject} 
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <Link href={`/apply?course=${course.id}`}>
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

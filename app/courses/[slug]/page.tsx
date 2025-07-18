 
 export async function generateStaticParams() {
  const courses = [
    {
      id: 1,
      slug: "plus-two-science",
    },
    {
      id: 2,
      slug: "plus-two-management",
    },
    {
      id: 3,
      slug: "diploma-computer-engineering",
    },
    {
      id: 4,
      slug: "diploma-civil-engineering",
    },
    {
      id: 5,
      slug: "diploma-electrical-engineering",
    },
    {
      id: 6,
      slug: "diploma-mechanical-engineering",
    },
  ];

  return courses.map((course) => ({
    slug: course.slug,
  }));
}




import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Calendar, BookOpen, Award, GraduationCap, ArrowRight, CheckCircle, Briefcase, User, Star } from 'lucide-react';
import Link from 'next/link';

const courses = [
    {
      id: 1,
      slug: "plus-two-science",
      title: "+2 Science",
      category: "plus2",
      description:
        "A comprehensive science education covering Physics, Chemistry, Biology, and Mathematics, preparing students for careers in medicine, engineering, and technology.",
      duration: "2 Years",
      intake: "150 Students",
      fee: "NPR 120,000/year",
      subjects: [
        "Physics",
        "Chemistry",
        "Biology",
        "Mathematics",
        "English",
        "Nepali",
      ],
      image:
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=500",
      eligibility: "SEE passed with a minimum of 60% marks, with compulsory Mathematics and Science.",
      careerPaths: ["Medicine", "Engineering", "Biotechnology", "Pharmacy", "Research"],
      faculty: [
        { name: "Dr. Ram Sharma", subject: "Physics", qualification: "Ph.D. in Physics" },
        { name: "Dr. Sita Devi", subject: "Chemistry", qualification: "Ph.D. in Chemistry" },
      ],
    },
    {
      id: 2,
      slug: "plus-two-management",
      title: "+2 Management",
      category: "plus2",
      description:
        "A business-focused education with an emphasis on management principles, financial accounting, and marketing strategies to prepare students for the corporate world.",
      duration: "2 Years",
      intake: "120 Students",
      fee: "NPR 100,000/year",
      subjects: [
        "Business Studies",
        "Economics",
        "Accounting",
        "Marketing",
        "English",
        "Nepali",
      ],
      image:
        "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=500",
      eligibility: "SEE passed with a minimum of 50% marks.",
      careerPaths: ["BBA", "BBS", "Hotel Management", "Banking", "Entrepreneurship"],
      faculty: [
        { name: "Mr. Hari Bahadur", subject: "Business Studies", qualification: "MBA" },
        { name: "Mrs. Gita Thapa", subject: "Economics", qualification: "M.A. in Economics" },
      ],
    },
    {
      id: 3,
      slug: "diploma-computer-engineering",
      title: "Diploma in Computer Engineering",
      category: "diploma",
      description:
        "A practical computer engineering education with hands-on programming, system design, and networking skills for a career in the IT industry.",
      duration: "3 Years",
      intake: "80 Students",
      fee: "NPR 150,000/year",
      subjects: [
        "Programming",
        "Database Management",
        "Computer Networks",
        "Software Engineering",
        "Web Development",
      ],
      image:
        "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=500",
      eligibility: "SEE passed with a minimum of 55% marks, with compulsory Mathematics and Science.",
      careerPaths: [
        "Software Developer",
        "System Administrator",
        "Web Developer",
        "Database Admin",
      ],
      faculty: [
        { name: "Mr. Ramesh Kumar", subject: "Programming", qualification: "M.Tech in CS" },
        { name: "Ms. Sunita Rai", subject: "Database Management", qualification: "MCA" },
      ],
    },
    {
      id: 4,
      slug: "diploma-civil-engineering",
      title: "Diploma in Civil Engineering",
      category: "diploma",
      description:
        "A comprehensive civil engineering program covering construction, design, and project management to build the infrastructure of tomorrow.",
      duration: "3 Years",
      intake: "60 Students",
      fee: "NPR 140,000/year",
      subjects: [
        "Construction Technology",
        "Structural Engineering",
        "Surveying",
        "Building Materials",
        "Project Management",
      ],
      image:
        "https://images.pexels.com/photos/8761431/pexels-photo-8761431.jpeg?auto=compress&cs=tinysrgb&w=500",
      eligibility: "SEE passed with a minimum of 55% marks, with compulsory Mathematics and Science.",
      careerPaths: [
        "Construction Engineer",
        "Project Manager",
        "Site Supervisor",
        "Design Engineer",
      ],
      faculty: [
        { name: "Mr. Bimal Shah", subject: "Construction Technology", qualification: "M.E. in Civil" },
        { name: "Mr. Suman Lama", subject: "Structural Engineering", qualification: "M.E. in Structures" },
      ],
    },
    {
      id: 5,
      slug: "diploma-electrical-engineering",
      title: "Diploma in Electrical Engineering",
      category: "diploma",
      description:
        "A program focused on electrical engineering fundamentals, including power systems, electronics, and control systems for a career in the power and automation industry.",
      duration: "3 Years",
      intake: "50 Students",
      fee: "NPR 145,000/year",
      subjects: [
        "Circuit Analysis",
        "Power Systems",
        "Electronics",
        "Control Systems",
        "Instrumentation",
      ],
      image:
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=500",
      eligibility: "SEE passed with a minimum of 55% marks, with compulsory Mathematics and Science.",
      careerPaths: [
        "Electrical Engineer",
        "Power Plant Technician",
        "Maintenance Engineer",
        "Design Engineer",
      ],
      faculty: [
        { name: "Mr. Rajesh Gupta", subject: "Power Systems", qualification: "M.E. in Electrical" },
        { name: "Mrs. Anita KC", subject: "Electronics", qualification: "M.Tech in Electronics" },
      ],
    },
    {
      id: 6,
      slug: "diploma-mechanical-engineering",
      title: "Diploma in Mechanical Engineering",
      category: "diploma",
      description:
        "A mechanical engineering program covering design, manufacturing, and maintenance of mechanical systems for a career in the manufacturing and automotive industry.",
      duration: "3 Years",
      intake: "45 Students",
      fee: "NPR 140,000/year",
      subjects: [
        "Mechanics",
        "Thermodynamics",
        "Machine Design",
        "Manufacturing Processes",
        "CAD/CAM",
      ],
      image:
        "https://images.pexels.com/photos/159751/turning-lathe-machine-tool-metal-159751.jpeg?auto=compress&cs=tinysrgb&w=500",
      eligibility: "SEE passed with a minimum of 55% marks, with compulsory Mathematics and Science.",
      careerPaths: [
        "Mechanical Engineer",
        "Production Engineer",
        "Quality Control",
        "Maintenance Engineer",
      ],
      faculty: [
        { name: "Mr. Pradeep Yadav", subject: "Mechanics", qualification: "M.E. in Mechanical" },
        { name: "Mr. Bikash Shrestha", subject: "Thermodynamics", qualification: "M.Tech in Thermal" },
      ],
    },
  ];

export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-hero-background bg-cover bg-center font-sans text-white">
        <div className="bg-black bg-opacity-70 min-h-screen w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Course Not Found</h1>
            <p className="mt-4">The course you are looking for does not exist.</p>
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
        <section className="min-h-[500px] text-white py-16 flex items-center justify-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${course.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-blue-600 tracking-widest font-light text-white mb-4">
              {course.category === "plus2" ? "+2 Program" : "Diploma Program"}
            </Badge>
            <h1 className="text-4xl  md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl tracking-wider text-white max-w-3xl mx-auto">{course.description}</p>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-white bg-opacity-80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl font-mono">Course Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">{course.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
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
                      <div className="p-4 bg-white rounded-lg">
                        <Calendar className="h-8 w-8 mx-auto mb-2 text-orange-400" />
                        <h4 className="font-bold">Fee</h4>
                        <p>{course.fee}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-mono font-bold mb-4">Subjects</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {course.subjects.map((subject) => (
                          <div key={subject} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-mono font-bold mb-4">Career Paths</h3>
                      <div className="flex flex-wrap gap-2">
                        {course.careerPaths.map((path) => (
                          <Badge key={path} variant="secondary" className="bg-gray-10a0 text-gray-800 p-2">
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
                    <CardTitle className="text-2xl font-mono">Eligibility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="h-6 w-6 mt-1 text-blue-400" />
                      <p>{course.eligibility}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-200 bg-opacity-80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl font-mono">Faculty</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {course.faculty.map((faculty) => (
                      <div key={faculty.name} className="flex items-center space-x-4">
                        <User className="h-8 w-8 text-gray-400" />
                        <div>
                          <h4 className="font-bold">{faculty.name}</h4>
                          <p className="text-sm text-gray-400">{faculty.subject} - {faculty.qualification}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700">
                  <Link href={`/apply?course=${course.slug}`}>
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

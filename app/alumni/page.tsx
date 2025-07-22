import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Calendar, Award, Search } from "lucide-react";
import Link from "next/link";

export default function AlumniPage() {
  const alumni = [
    {
      id: 1,
      name: "Rajesh Sharma",
      batch: "2020",
      course: "+2 Science",
      currentPosition: "Software Engineer",
      company: "Tech Solutions Ltd.",
      location: "Kathmandu, Nepal",
      image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300",
      achievements: "Outstanding Academic Performance",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Priya Thapa",
      batch: "2019",
      course: "+2 Management",
      currentPosition: "Marketing Manager",
      company: "Global Marketing Inc.",
      location: "Pokhara, Nepal",
      image:
        "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=300",
      achievements: "Best Business Plan Award",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Amit Kumar",
      batch: "2021",
      course: "Diploma in Computer Engineering",
      currentPosition: "Web Developer",
      company: "Digital Nepal",
      location: "Lalitpur, Nepal",
      image:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300",
      achievements: "Best Project Award",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Sita Poudel",
      batch: "2018",
      course: "+2 Science",
      currentPosition: "Medical Student",
      company: "Tribhuvan University",
      location: "Kathmandu, Nepal",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300",
      achievements: "Merit Scholarship Recipient",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Deepak Maharjan",
      batch: "2020",
      course: "Diploma in Civil Engineering",
      currentPosition: "Project Engineer",
      company: "Construction Corp.",
      location: "Bhaktapur, Nepal",
      image:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300",
      achievements: "Excellence in Technical Skills",
      linkedin: "#",
    },
    {
      id: 6,
      name: "Anita Rai",
      batch: "2019",
      course: "+2 Management",
      currentPosition: "Financial Analyst",
      company: "Finance Solutions",
      location: "Kathmandu, Nepal",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300",
      achievements: "Top Performer in Finance",
      linkedin: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="min-h-[500px] text-white py-16 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Alumni</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Celebrating the success stories of our graduates who are making a
            difference in their fields
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search alumni by name or company..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by batch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Batches</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
                <SelectItem value="2018">2018</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="plus2-science">+2 Science</SelectItem>
                <SelectItem value="plus2-management">+2 Management</SelectItem>
                <SelectItem value="diploma-computer">
                  Diploma Computer
                </SelectItem>
                <SelectItem value="diploma-civil">Diploma Civil</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Alumni Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((alumnus) => (
              <Card
                key={alumnus.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={alumnus.image}
                      alt={alumnus.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute -top-2 -right-2">
                      <Badge variant="secondary">{alumnus.batch}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{alumnus.name}</CardTitle>
                  <p className="text-blue-600 font-medium">
                    {alumnus.currentPosition}
                  </p>
                  <p className="text-gray-600">{alumnus.company}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Graduated: {alumnus.batch}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Award className="h-4 w-4" />
                      <span>Course: {alumnus.course}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{alumnus.location}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Achievement:</strong> {alumnus.achievements}
                    </p>
                  </div>

                  <Button variant="outline" className="w-full">
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Are You Our Alumni?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our alumni network and stay connected with your alma mater and
            fellow graduates
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600"
            asChild
          >
            <Link href="/alumni/register">Register as Alumni</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

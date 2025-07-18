"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Award,
  BookOpen,
  Users,
  Building,
  Settings,
  HeartHandshake,
} from "lucide-react";
import Image from "next/image";

function OurTeamContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  const teamCategories = [
    { id: "all", label: "All Members", icon: Users },
    { id: "bods", label: "Board of Directors", icon: Building },
    { id: "principle", label: "Principal", icon: Award },
    { id: "academics", label: "Academic Staff", icon: BookOpen },
    { id: "admins", label: "Administration", icon: Settings },
    { id: "support", label: "Support Staff", icon: HeartHandshake },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Mr. John Smith",
      position: "Chairman",
      department: "Board of Directors",
      category: "bods",
      qualification: "MBA, Finance",
      experience: "20 Years",
      email: "chairman@westernmega.edu",
      phone: "+977-1-4567890",
      image:
        "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Educational Leadership",
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      position: "Principal",
      department: "Administration",
      category: "principle",
      qualification: "Ph.D. in Education",
      experience: "15 Years",
      email: "principal@westernmega.edu",
      phone: "+977-1-4567891",
      image:
        "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Educational Administration",
    },
    {
      id: 3,
      name: "Prof. Michael Chen",
      position: "Head of Science Department",
      department: "Science",
      category: "academics",
      qualification: "M.Sc. Physics",
      experience: "12 Years",
      email: "physics@westernmega.edu",
      phone: "+977-1-4567892",
      image:
        "https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Quantum Physics",
    },
    {
      id: 4,
      name: "Dr. Emily Rodriguez",
      position: "Mathematics Professor",
      department: "Mathematics",
      category: "academics",
      qualification: "Ph.D. Mathematics",
      experience: "10 Years",
      email: "math@westernmega.edu",
      phone: "+977-1-4567893",
      image:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Applied Mathematics",
    },
    {
      id: 5,
      name: "Mr. David Kumar",
      position: "Computer Science Faculty",
      department: "Technology",
      category: "academics",
      qualification: "M.Tech Computer Science",
      experience: "8 Years",
      email: "cs@westernmega.edu",
      phone: "+977-1-4567894",
      image:
        "https://images.pexels.com/photos/6147366/pexels-photo-6147366.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Software Engineering",
    },
    {
      id: 6,
      name: "Ms. Lisa Anderson",
      position: "Registrar",
      department: "Administration",
      category: "admins",
      qualification: "M.A. Education",
      experience: "12 Years",
      email: "registrar@westernmega.edu",
      phone: "+977-1-4567895",
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Academic Administration",
    },
    {
      id: 7,
      name: "Mr. Robert Wilson",
      position: "Accountant",
      department: "Finance",
      category: "admins",
      qualification: "B.Com, CA",
      experience: "10 Years",
      email: "accounts@westernmega.edu",
      phone: "+977-1-4567896",
      image:
        "https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Financial Management",
    },
    {
      id: 8,
      name: "Ms. Maria Garcia",
      position: "Librarian",
      department: "Library",
      category: "support",
      qualification: "M.Lib.Sc",
      experience: "8 Years",
      email: "library@westernmega.edu",
      phone: "+977-1-4567897",
      image:
        "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Information Management",
    },
    {
      id: 9,
      name: "Mr. James Thompson",
      position: "IT Support",
      department: "Technical",
      category: "support",
      qualification: "B.Sc. IT",
      experience: "6 Years",
      email: "it@westernmega.edu",
      phone: "+977-1-4567898",
      image:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Network Administration",
    },
  ];

  const filteredMembers =
    category === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.category === category);

  const currentCategory = teamCategories.find((cat) => cat.id === category);
  const IconComponent = currentCategory?.icon || Users;

  return (
    <div className="min-h-screen  bg-gray-50">
      {/* Hero Section */}
      <section
        className="min-h-[500px] text-white py-16 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <IconComponent className="h-16 w-16 text-blue-200" />
          </div>
          <h1 className="text-4xl text-orange-500 md:text-5xl font-bold mb-4">
            {currentCategory?.label || "Our Team"}
          </h1>
          <p className="text-xl tracking-wider text-blue-100 max-w-2xl mx-auto">
            Meet the dedicated professionals who make Western Mega College a
            center of excellence
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {teamCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Button
                  key={cat.id}
                  variant={category === cat.id ? "default" : "outline"}
                  className="flex items-center space-x-2"
                  onClick={() => {
                    const url =
                      cat.id === "all"
                        ? "/our-team"
                        : `/our-team?category=${cat.id}`;
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

      {/* Team Members Grid */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <Card
                key={member.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="relative mb-4">
                      <Image
                        width={24}
                        height={24}
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                    </div>

                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-blue-600 font-medium mb-2">
                      {member.position}
                    </p>
                    <Badge variant="secondary">{member.department}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <BookOpen className="h-4 w-4" />
                      <span>{member.qualification}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Experience:</span>{" "}
                      {member.experience}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Specialization:</span>{" "}
                      {member.specialization}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Contact
                  </Button>
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
    <div className="min-h-screen bg-gray-50">
      <section
        className="min-h-[500px] text-white py-16 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Users className="h-16 w-16 text-blue-200 animate-pulse" />
          </div>
          <h1 className="text-4xl text-orange-500 md:text-5xl font-bold mb-4">
            Our Team
          </h1>
          <p className="text-xl tracking-wider text-blue-100 max-w-2xl mx-auto">
            Loading team members...
          </p>
        </div>
      </section>
    </div>
  );
}

export default function OurTeamPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <OurTeamContent />
    </Suspense>
  );
}

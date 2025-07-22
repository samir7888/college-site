"use client";

import { Suspense } from "react";
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
  // Team members organized by category
  const teamMembers = [
    // Chairman
    {
      id: 1,
      name: "Mr. John Smith",
      position: "Chairman",
      department: "Board of Directors",
      category: "chairman",
      qualification: "MBA, Finance",
      experience: "20 Years",
      email: "chairman@westernmega.edu",
      phone: "+977-1-4567890",
      image:
        "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Educational Leadership",
    },
    // Board of Directors
    {
      id: 2,
      name: "Ms. Patricia Lee",
      position: "Vice Chairman",
      department: "Board of Directors",
      category: "bods",
      qualification: "Ph.D. Business Administration",
      experience: "18 Years",
      email: "vicechairman@westernmega.edu",
      phone: "+977-1-4567891",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Strategic Management",
    },
    {
      id: 3,
      name: "Mr. Richard Brown",
      position: "Board Member",
      department: "Board of Directors",
      category: "bods",
      qualification: "MBA, International Business",
      experience: "15 Years",
      email: "rbrown@westernmega.edu",
      phone: "+977-1-4567892",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Corporate Governance",
    },
    {
      id: 4,
      name: "Dr. Anita Sharma",
      position: "Board Member",
      department: "Board of Directors",
      category: "bods",
      qualification: "Ph.D. Economics",
      experience: "16 Years",
      email: "asharma@westernmega.edu",
      phone: "+977-1-4567893",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Educational Policy",
    },
    // Principal
    {
      id: 5,
      name: "Dr. Sarah Johnson",
      position: "Principal",
      department: "Administration",
      category: "principal",
      qualification: "Ph.D. in Education",
      experience: "15 Years",
      email: "principal@westernmega.edu",
      phone: "+977-1-4567894",
      image:
        "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Educational Administration",
    },
    // Academic Staff
    {
      id: 6,
      name: "Prof. Michael Chen",
      position: "Head of Science Department",
      department: "Science",
      category: "academics",
      qualification: "M.Sc. Physics",
      experience: "12 Years",
      email: "physics@westernmega.edu",
      phone: "+977-1-4567895",
      image:
        "https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Quantum Physics",
    },
    {
      id: 7,
      name: "Dr. Emily Rodriguez",
      position: "Mathematics Professor",
      department: "Mathematics",
      category: "academics",
      qualification: "Ph.D. Mathematics",
      experience: "10 Years",
      email: "math@westernmega.edu",
      phone: "+977-1-4567896",
      image:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Applied Mathematics",
    },
    {
      id: 8,
      name: "Mr. David Kumar",
      position: "Computer Science Faculty",
      department: "Technology",
      category: "academics",
      qualification: "M.Tech Computer Science",
      experience: "8 Years",
      email: "cs@westernmega.edu",
      phone: "+977-1-4567897",
      image:
        "https://images.pexels.com/photos/6147366/pexels-photo-6147366.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Software Engineering",
    },
    {
      id: 9,
      name: "Dr. Sophia Williams",
      position: "English Professor",
      department: "Humanities",
      category: "academics",
      qualification: "Ph.D. English Literature",
      experience: "11 Years",
      email: "english@westernmega.edu",
      phone: "+977-1-4567898",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Modern Literature",
    },
    // Administration
    {
      id: 10,
      name: "Ms. Lisa Anderson",
      position: "Registrar",
      department: "Administration",
      category: "admins",
      qualification: "M.A. Education",
      experience: "12 Years",
      email: "registrar@westernmega.edu",
      phone: "+977-1-4567899",
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Academic Administration",
    },
    {
      id: 11,
      name: "Mr. Robert Wilson",
      position: "Accountant",
      department: "Finance",
      category: "admins",
      qualification: "B.Com, CA",
      experience: "10 Years",
      email: "accounts@westernmega.edu",
      phone: "+977-1-4567900",
      image:
        "https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Financial Management",
    },
    {
      id: 12,
      name: "Ms. Jennifer Lopez",
      position: "HR Manager",
      department: "Human Resources",
      category: "admins",
      qualification: "MBA, HR",
      experience: "9 Years",
      email: "hr@westernmega.edu",
      phone: "+977-1-4567901",
      image:
        "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Talent Management",
    },
    // Support Staff
    {
      id: 13,
      name: "Ms. Maria Garcia",
      position: "Librarian",
      department: "Library",
      category: "support",
      qualification: "M.Lib.Sc",
      experience: "8 Years",
      email: "library@westernmega.edu",
      phone: "+977-1-4567902",
      image:
        "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Information Management",
    },
    {
      id: 14,
      name: "Mr. James Thompson",
      position: "IT Support",
      department: "Technical",
      category: "support",
      qualification: "B.Sc. IT",
      experience: "6 Years",
      email: "it@westernmega.edu",
      phone: "+977-1-4567903",
      image:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Network Administration",
    },
    {
      id: 15,
      name: "Mr. Raj Patel",
      position: "Facilities Manager",
      department: "Maintenance",
      category: "support",
      qualification: "Diploma in Facility Management",
      experience: "7 Years",
      email: "facilities@westernmega.edu",
      phone: "+977-1-4567904",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Campus Maintenance",
    },
  ];

  // Group members by category for ordered display
  const chairman = teamMembers.filter(
    (member) => member.category === "chairman"
  );
  const boardOfDirectors = teamMembers.filter(
    (member) => member.category === "bods"
  );
  const principal = teamMembers.filter(
    (member) => member.category === "principal"
  );
  const academics = teamMembers.filter(
    (member) => member.category === "academics"
  );
  const administration = teamMembers.filter(
    (member) => member.category === "admins"
  );
  const supportStaff = teamMembers.filter(
    (member) => member.category === "support"
  );

  // Combine all groups in the specified order
  const orderedMembers = [
    ...chairman,
    ...boardOfDirectors,
    ...principal,
    ...academics,
    ...administration,
    ...supportStaff,
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
            <Users className="h-16 w-16 text-blue-200" />
          </div>
          <h1 className="text-4xl text-orange-500 md:text-5xl font-bold mb-4">
            Our Team
          </h1>
          <p className="text-xl tracking-wider text-blue-100 max-w-2xl mx-auto">
            Meet the dedicated professionals who make Western Mega College a
            center of excellence
          </p>
        </div>
      </section>

      {/* Team Members Sections */}
      <div className="container mx-auto px-4 py-16">
        {/* Chairman Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Chairman</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="flex justify-center">
            {chairman.map((member) => (
              <Card
                key={member.id}
                className="group hover:shadow-lg transition-shadow duration-300 w-full max-w-2xl"
              >
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="relative mb-4">
                      <Image
                        width={160}
                        height={160}
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-40 rounded-full mx-auto object-cover"
                      />
                    </div>

                    <CardTitle className="text-3xl">{member.name}</CardTitle>
                    <p className="text-blue-600 font-medium text-xl mb-2">
                      {member.position}
                    </p>
                    <Badge variant="secondary" className="text-base px-4 py-1">
                      {member.department}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 px-8">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-base text-gray-600">
                      <BookOpen className="h-5 w-5" />
                      <span>{member.qualification}</span>
                    </div>
                    <div className="text-base text-gray-600">
                      <span className="font-medium">Experience:</span>{" "}
                      {member.experience}
                    </div>
                    <div className="text-base text-gray-600">
                      <span className="font-medium">Specialization:</span>{" "}
                      {member.specialization}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-base text-gray-600">
                      <Mail className="h-5 w-5" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-base text-gray-600">
                      <Phone className="h-5 w-5" />
                      <span>{member.phone}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full text-base py-6">
                    Contact
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Board of Directors Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Board of Directors
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardOfDirectors.map((member) => (
              <Card
                key={member.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="relative mb-4">
                      <Image
                        width={96}
                        height={96}
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
        </section>

        {/* Principal Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Principal</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="flex justify-center">
            {principal.map((member) => (
              <Card
                key={member.id}
                className="group hover:shadow-lg transition-shadow duration-300 w-full max-w-2xl"
              >
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="relative mb-4">
                      <Image
                        width={160}
                        height={160}
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-40 rounded-full mx-auto object-cover"
                      />
                    </div>

                    <CardTitle className="text-3xl">{member.name}</CardTitle>
                    <p className="text-blue-600 font-medium text-xl mb-2">
                      {member.position}
                    </p>
                    <Badge variant="secondary" className="text-base px-4 py-1">
                      {member.department}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 px-8">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-base text-gray-600">
                      <BookOpen className="h-5 w-5" />
                      <span>{member.qualification}</span>
                    </div>
                    <div className="text-base text-gray-600">
                      <span className="font-medium">Experience:</span>{" "}
                      {member.experience}
                    </div>
                    <div className="text-base text-gray-600">
                      <span className="font-medium">Specialization:</span>{" "}
                      {member.specialization}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-base text-gray-600">
                      <Mail className="h-5 w-5" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-base text-gray-600">
                      <Phone className="h-5 w-5" />
                      <span>{member.phone}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full text-base py-6">
                    Contact
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Staff Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Academic Staff</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academics.map((member) => (
              <Card
                key={member.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="relative mb-4">
                      <Image
                        width={96}
                        height={96}
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
        </section>

        {/* Administration Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Administration</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {administration.map((member) => (
              <Card
                key={member.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="relative mb-4">
                      <Image
                        width={96}
                        height={96}
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
        </section>

        {/* Support Staff Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Support Staff</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportStaff.map((member) => (
              <Card
                key={member.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="relative mb-4">
                      <Image
                        width={96}
                        height={96}
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
        </section>
      </div>
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

      <div className="container mx-auto px-4 py-16">
        {/* Loading placeholders for each section */}
        {[
          "Chairman",
          "Board of Directors",
          "Principal",
          "Academic Staff",
          "Administration",
          "Support Staff",
        ].map((section) => (
          <section key={section} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">{section}</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="flex justify-center">
              <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
            </div>
          </section>
        ))}
      </div>
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

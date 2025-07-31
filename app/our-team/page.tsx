"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Mail,
  Users,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

function OurTeamContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  // Team members organized by category
  const teamMembers = [
    // Chairman
    {
      id: 1,
      name: "Mr. John Smith",
      position: "Chairman",
      department: "Board of Directors",
      category: "bods",
      email: "chairman@westernmega.edu",
      image:
        "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=300",
      socialLinks: {
        facebook: "https://facebook.com/johnsmith",
        twitter: "https://twitter.com/johnsmith",
        linkedin: "https://linkedin.com/in/johnsmith",
        instagram: "https://instagram.com/johnsmith",
      },
    },
    // Board of Directors
    {
      id: 2,
      name: "Ms. Patricia Lee",
      position: "Vice Chairman",
      department: "Board of Directors",
      category: "bods",
      email: "vicechairman@westernmega.edu",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      socialLinks: {
        facebook: "https://facebook.com/patricialee",
        twitter: "https://twitter.com/patricialee",
        linkedin: "https://linkedin.com/in/patricialee",
        instagram: "https://instagram.com/patricialee",
      },
    },
    {
      id: 3,
      name: "Mr. Richard Brown",
      position: "Board Member",
      department: "Board of Directors",
      category: "bods",
      email: "rbrown@westernmega.edu",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      socialLinks: {
        facebook: "https://facebook.com/richardbrown",
        twitter: "https://twitter.com/richardbrown",
        linkedin: "https://linkedin.com/in/richardbrown",
        instagram: "https://instagram.com/richardbrown",
      },
    },
    {
      id: 4,
      name: "Dr. Anita Sharma",
      position: "Board Member",
      department: "Board of Directors",
      category: "bods",
      email: "asharma@westernmega.edu",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      socialLinks: {
        facebook: "https://facebook.com/anitasharma",
        twitter: "https://twitter.com/anitasharma",
        linkedin: "https://linkedin.com/in/anitasharma",
        instagram: "https://instagram.com/anitasharma",
      },
    },
    // Principal
    {
      id: 5,
      name: "Dr. Sarah Johnson",
      position: "Principal",
      department: "Administration",
      category: "principal",
      email: "principal@westernmega.edu",
      image:
        "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Educational Administration & Leadership",
      socialLinks: {
        facebook: "https://facebook.com/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
        linkedin: "https://linkedin.com/in/sarahjohnson",
        instagram: "https://instagram.com/sarahjohnson",
      },
    },
    // Staff (Academic, Administration, Support)
    {
      id: 6,
      name: "Prof. Michael Chen",
      position: "Head of Science Department",
      department: "Science",
      category: "staff",
      email: "physics@westernmega.edu",
      image:
        "https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Quantum Physics & Advanced Materials",
      socialLinks: {
        facebook: "https://facebook.com/michaelchen",
        twitter: "https://twitter.com/michaelchen",
        linkedin: "https://linkedin.com/in/michaelchen",
        instagram: "https://instagram.com/michaelchen",
      },
    },
    {
      id: 7,
      name: "Dr. Emily Rodriguez",
      position: "Mathematics Professor",
      department: "Mathematics",
      category: "staff",
      email: "math@westernmega.edu",
      image:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Applied Mathematics & Statistics",
      socialLinks: {
        facebook: "https://facebook.com/emilyrodriguez",
        twitter: "https://twitter.com/emilyrodriguez",
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        instagram: "https://instagram.com/emilyrodriguez",
      },
    },
    {
      id: 8,
      name: "Mr. David Kumar",
      position: "Computer Science Faculty",
      department: "Technology",
      category: "staff",
      email: "cs@westernmega.edu",
      image:
        "https://images.pexels.com/photos/6147366/pexels-photo-6147366.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Software Engineering & AI",
      socialLinks: {
        facebook: "https://facebook.com/davidkumar",
        twitter: "https://twitter.com/davidkumar",
        linkedin: "https://linkedin.com/in/davidkumar",
        instagram: "https://instagram.com/davidkumar",
      },
    },
    {
      id: 9,
      name: "Dr. Sophia Williams",
      position: "English Professor",
      department: "Humanities",
      category: "staff",
      email: "english@westernmega.edu",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialization: "Modern Literature & Creative Writing",
      socialLinks: {
        facebook: "https://facebook.com/sophiawilliams",
        twitter: "https://twitter.com/sophiawilliams",
        linkedin: "https://linkedin.com/in/sophiawilliams",
        instagram: "https://instagram.com/sophiawilliams",
      },
    },
    {
      id: 10,
      name: "Ms. Lisa Anderson",
      position: "Registrar",
      department: "Administration",
      category: "staff",
      email: "registrar@westernmega.edu",
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=300",
      socialLinks: {
        facebook: "https://facebook.com/lisaanderson",
        twitter: "https://twitter.com/lisaanderson",
        linkedin: "https://linkedin.com/in/lisaanderson",
        instagram: "https://instagram.com/lisaanderson",
      },
    },
    {
      id: 11,
      name: "Mr. Robert Wilson",
      position: "Accountant",
      department: "Finance",
      category: "staff",
      email: "accounts@westernmega.edu",
      image:
        "https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&w=300",
      socialLinks: {
        facebook: "https://facebook.com/robertwilson",
        twitter: "https://twitter.com/robertwilson",
        linkedin: "https://linkedin.com/in/robertwilson",
        instagram: "https://instagram.com/robertwilson",
      },
    },
    {
      id: 12,
      name: "Ms. Jennifer Lopez",
      position: "HR Manager",
      department: "Human Resources",
      category: "staff",
      email: "hr@westernmega.edu",
      image:
        "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=300",
      socialLinks: {
        facebook: "https://facebook.com/jenniferlopez",
        twitter: "https://twitter.com/jenniferlopez",
        linkedin: "https://linkedin.com/in/jenniferlopez",
        instagram: "https://instagram.com/jenniferlopez",
      },
    },
    {
      id: 13,
      name: "Ms. Maria Garcia",
      position: "Librarian",
      department: "Library",
      category: "staff",
      email: "library@westernmega.edu",
      image:
        "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=300",
      socialLinks: {
        facebook: "https://facebook.com/mariagarcia",
        twitter: "https://twitter.com/mariagarcia",
        linkedin: "https://linkedin.com/in/mariagarcia",
        instagram: "https://instagram.com/mariagarcia",
      },
    },
    {
      id: 14,
      name: "Mr. James Thompson",
      position: "IT Support",
      department: "Technical",
      category: "staff",
      email: "it@westernmega.edu",
      image:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300",
      socialLinks: {
        facebook: "https://facebook.com/jamesthompson",
        twitter: "https://twitter.com/jamesthompson",
        linkedin: "https://linkedin.com/in/jamesthompson",
        instagram: "https://instagram.com/jamesthompson",
      },
    },
    {
      id: 15,
      name: "Mr. Raj Patel",
      position: "Facilities Manager",
      department: "Maintenance",
      category: "staff",
      email: "facilities@westernmega.edu",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      socialLinks: {
        facebook: "https://facebook.com/rajpatel",
        twitter: "https://twitter.com/rajpatel",
        linkedin: "https://linkedin.com/in/rajpatel",
        instagram: "https://instagram.com/rajpatel",
      },
    },
  ];

  // Filter members based on URL parameter
  const filteredMembers = category
    ? teamMembers.filter((member) => member.category === category)
    : teamMembers;

  // Group members by category for ordered display
  const boardOfDirectors = filteredMembers.filter(
    (member) => member.category === "bods"
  );
  const principal = filteredMembers.filter(
    (member) => member.category === "principal"
  );
  const staff = filteredMembers.filter((member) => member.category === "staff");

  // Get page title based on category
  const getPageTitle = () => {
    switch (category) {
      case "principal":
        return "Principal";
      case "bods":
        return "Board of Directors";
      case "staff":
        return "Staff Members";
      default:
        return "Our Team";
    }
  };

  const getSectionTitle = () => {
    switch (category) {
      case "principal":
        return "Meet Our Principal";
      case "bods":
        return "Board of Directors";
      case "staff":
        return "Our Dedicated Staff";
      default:
        return "Meet Our Team";
    }
  };

  // Helper function to check if member is faculty (has specialization)
  const isFaculty = (member: any) => {
    return (
      member.specialization &&
      (member.department === "Science" ||
        member.department === "Mathematics" ||
        member.department === "Technology" ||
        member.department === "Humanities" ||
        member.category === "principal")
    );
  };

  // Component for rendering team member cards
  const TeamMemberCard = ({
    member,
    isLarge = false,
  }: {
    member: any;
    isLarge?: boolean;
  }) => (
    <Card
      className={`group hover:shadow-lg transition-shadow duration-300 ${
        isLarge ? "h-auto" : "h-full"
      } flex flex-col`}
    >
      <CardHeader className="pb-4">
        <div className="text-center">
          <div className="relative mb-4">
            <Image
              width={isLarge ? 160 : 96}
              height={isLarge ? 160 : 96}
              src={member.image}
              alt={member.name}
              className={`${
                isLarge ? "w-40 h-40" : "w-24 h-24"
              } rounded-full mx-auto object-cover border-4 border-gray-100`}
            />
          </div>

          <CardTitle
            className={`${isLarge ? "text-3xl" : "text-xl"} mb-2 text-gray-900`}
          >
            {member.name}
          </CardTitle>
          <p
            className={`text-blue-600 font-semibold ${
              isLarge ? "text-xl" : "text-base"
            } mb-3`}
          >
            {member.position}
          </p>
          {/* <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {member.department}
          </div> */}
        </div>
      </CardHeader>

      <CardContent
        className={`flex-grow flex flex-col justify-between ${
          isLarge ? "px-8 space-y-6" : "px-4 space-y-4"
        }`}
      >
        <div className="space-y-3">
          {/* Email */}
          <div
            className={`flex items-start space-x-3 ${
              isLarge ? "text-base" : "text-sm"
            } text-gray-600`}
          >
            <Mail
              className={`${
                isLarge ? "h-5 w-5" : "h-4 w-4"
              } mt-0.5 flex-shrink-0`}
            />
            <span className="break-all">{member.email}</span>
          </div>

          {/* Specialization for faculty members */}
          {isFaculty(member) && (
            <div
              className={`flex items-start space-x-3 ${
                isLarge ? "text-base" : "text-sm"
              } text-gray-600`}
            >
              <BookOpen
                className={`${
                  isLarge ? "h-5 w-5" : "h-4 w-4"
                } mt-0.5 flex-shrink-0`}
              />
              <div>
                <span className="font-semibold text-gray-700">
                  Specialization:{" "}
                </span>
                <span className="text-gray-600">{member.specialization}</span>
              </div>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
          <a
            href={member.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200"
            title="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href={member.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100 hover:text-sky-700 transition-all duration-200"
            title="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href={member.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900 transition-all duration-200"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={member.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 hover:text-pink-800 transition-all duration-200"
            title="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );

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
            {getPageTitle()}
          </h1>
          <p className="text-xl tracking-wider text-blue-100 max-w-2xl mx-auto">
            {category
              ? `Meet our ${getPageTitle().toLowerCase()} who contribute to Western Mega College's excellence`
              : "Meet the dedicated professionals who make Western Mega College a center of excellence"}
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {getSectionTitle()}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          {/* Principal Section - Single large card */}
          {category === "principal" && principal.length > 0 && (
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <TeamMemberCard member={principal[0]} isLarge={true} />
              </div>
            </div>
          )}

          {/* Board of Directors Section - Grid layout */}
          {category === "bods" && boardOfDirectors.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardOfDirectors.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          )}

          {/* Staff Section - Grid layout */}
          {category === "staff" && staff.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staff.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          )}

          {/* All Team Members - Show all categories */}
          {!category && (
            <div className="space-y-16">
              {/* Board of Directors */}
              {boardOfDirectors.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                    Board of Directors
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {boardOfDirectors.map((member) => (
                      <TeamMemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              )}

              {/* Principal */}
              {principal.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                    Principal
                  </h3>
                  <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                      <TeamMemberCard member={principal[0]} isLarge={true} />
                    </div>
                  </div>
                </div>
              )}

              {/* Staff */}
              {staff.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                    Staff Members
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staff.map((member) => (
                      <TeamMemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* No members found message */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No team members found for this category.
              </p>
            </div>
          )}
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
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Loading...</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"
              ></div>
            ))}
          </div>
        </section>
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

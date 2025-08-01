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
  Phone,
} from "lucide-react";
import Image from "next/image";
import {
  teamData,
  getTeamByCategory,
  getBoardOfDirectors,
  getPrincipal,
  getFaculty,
  getStaff,
} from "@/lib/teamData";

function OurTeamContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  // Filter members based on URL parameter
  const filteredMembers = category ? getTeamByCategory(category) : teamData;

  // Group members by category for ordered display
  const boardOfDirectors = getBoardOfDirectors();
  const principal = getPrincipal();
  const faculty = getFaculty();
  const staff = getStaff();

  // Get page title based on category
  const getPageTitle = () => {
    switch (category) {
      case "principal":
        return "Our Principal";
      case "bods":
        return "Board of Directors";
      case "faculty":
        return "Faculty Members";
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
      case "faculty":
        return "Our Dedicated Faculty";
      case "staff":
        return "Our Support Staff";
      default:
        return "Meet Our Team";
    }
  };

  // Helper function to check if member is faculty (has specialization)
  const isFaculty = (member: any) => {
    return (
      member.specialization &&
      (member.category === "faculty" || member.category === "principal")
    );
  };

  // Helper function to check if member has courses
  const hasCourses = (member: any) => {
    return member.courses && member.courses.length > 0;
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
                isLarge ? "w-40 h-40 object-cover" : "w-28 h-28 object-top"
              } rounded-full mx-auto  border-4 border-gray-100`}
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

          {/* Courses for faculty members */}
          {hasCourses(member) && (
            <div
              className={`flex items-center justify-center space-x-3 ${
                isLarge ? "text-base" : "text-sm"
              } text-gray-600`}
            >
              <div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {member.courses.map((course: string, index: number) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent
        className={`flex-grow flex flex-col justify-between ${
          isLarge ? "px-8 space-y-6" : "px-4 space-y-4"
        }`}
      >
        <div className="space-y-3">
          {/* Email */}
          {member.email && (
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
          )}

          {/* Phone */}
          {member.phone && (
            <div
              className={`flex items-start space-x-3 ${
                isLarge ? "text-base" : "text-sm"
              } text-gray-600`}
            >
              <Phone
                className={`${
                  isLarge ? "h-5 w-5" : "h-4 w-4"
                } mt-0.5 flex-shrink-0`}
              />
              <span className="break-all">{member.phone}</span>
            </div>
          )}

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
          {member.socialLinks?.facebook &&
            member.socialLinks.facebook !== "#" && (
              <a
                href={member.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200"
                title="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            )}
          {member.socialLinks?.twitter &&
            member.socialLinks.twitter !== "#" && (
              <a
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100 hover:text-sky-700 transition-all duration-200"
                title="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
          {member.socialLinks?.linkedin &&
            member.socialLinks.linkedin !== "#" && (
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900 transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          {member.socialLinks?.instagram &&
            member.socialLinks.instagram !== "#" && (
              <a
                href={member.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 hover:text-pink-800 transition-all duration-200"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
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

          {/* Faculty Section - Grid layout */}
          {category === "faculty" && faculty.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faculty.map((member) => (
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

              {/* Faculty */}
              {faculty.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                    Faculty Members
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {faculty.map((member) => (
                      <TeamMemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              )}

              {/* Staff */}
              {staff.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                    Support Staff
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

"use client";

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
import {
  MapPin,
  Calendar,
  Award,
  Search,
  Linkedin,
  Quote,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  testimonialsData,
  getMBATestimonials,
  getBHMTestimonials,
} from "@/lib/testimonialsData";
import { useState } from "react";

export default function AlumniPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("all");

  // Filter alumni based on search and program
  const filteredAlumni = testimonialsData.filter((alumni) => {
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.designation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProgram =
      selectedProgram === "all" || alumni.program === selectedProgram;
    return matchesSearch && matchesProgram;
  });

  const mbaAlumni = getMBATestimonials();
  const bhmAlumni = getBHMTestimonials();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="min-h-[500px] text-white py-16 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Users className="h-16 w-16 text-blue-200" />
          </div>
          <h1 className="text-4xl text-orange-500 md:text-5xl font-bold mb-4">
            Our Alumni
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Celebrating the success stories of our graduates who are making a
            difference in the hospitality and business world
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">
                {testimonialsData.length}+
              </div>
              <div className="text-gray-600">Successful Alumni</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-500">
                {mbaAlumni.length}
              </div>
              <div className="text-gray-600">MBA Graduates</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">
                {bhmAlumni.length}
              </div>
              <div className="text-gray-600">BHM Graduates</div>
            </div>
          </div>
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedProgram} onValueChange={setSelectedProgram}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Programs</SelectItem>
                <SelectItem value="MBA">MBA</SelectItem>
                <SelectItem value="BHM">BHM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Alumni Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories from Our Alumni
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map((alumni) => (
              <Card
                key={alumni.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={alumni.image}
                        alt={alumni.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <Badge className="bg-orange-500 hover:bg-orange-600">
                        {alumni.program}
                      </Badge>
                    </div>
                    <div className="absolute -bottom-2 -left-2 bg-blue-500 rounded-full p-2">
                      <Quote className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {alumni.name}
                  </CardTitle>
                  <p className="text-blue-600 min-h-10 font-medium text-sm line-clamp-2">
                    {alumni.designation}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Award className="h-4 w-4 flex-shrink-0" />
                      <span>Program: {alumni.program}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="line-clamp-1">{alumni.designation}</span>
                    </div>
                  </div>

                  {/* Testimonial Preview */}
                  <div className="bg-gradient-to-br min-h-64 from-blue-50 to-orange-50 p-4 rounded-lg">
                    <blockquote className="text-sm text-gray-700 italic">
                      "{alumni.testimonial}"
                    </blockquote>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {alumni.linkedin && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={alumni.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          Connect on LinkedIn
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredAlumni.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Users className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No alumni found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Program Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* MBA Alumni */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  MBA Alumni
                </h3>
                <p className="text-gray-600">
                  Our MBA graduates leading in business and management
                </p>
                <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
              </div>
              <div className="space-y-4">
                {mbaAlumni.slice(0, 3).map((alumni) => (
                  <Card
                    key={alumni.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={alumni.image}
                            alt={alumni.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 truncate">
                            {alumni.name}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-1">
                            {alumni.designation}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          MBA
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* BHM Alumni */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  BHM Alumni
                </h3>
                <p className="text-gray-600">
                  Our BHM graduates excelling in hospitality industry
                </p>
                <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
              </div>
              <div className="space-y-4">
                {bhmAlumni.slice(0, 3).map((alumni) => (
                  <Card
                    key={alumni.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={alumni.image}
                            alt={alumni.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 truncate">
                            {alumni.name}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-1">
                            {alumni.designation}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-xs bg-orange-50 text-orange-700"
                        >
                          BHM
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Are You Our Alumni?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our alumni network and stay connected with your alma mater and
            fellow graduates. Share your success story with us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-500 text-white hover:text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/alumni/register">Register as Alumni</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-400 hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/contact">Share Your Story</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

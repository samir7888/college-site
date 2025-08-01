import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users, Globe } from "lucide-react";
import Link from "next/link";

export function UniversitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Established Legacy</h3>
                <p className="text-gray-600">
                  Founded in 2002, LUC has steadily grown into one of Malaysia’s most respected higher education institutions.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accredited Programs</h3>
                <p className="text-gray-600">
                  Offers a wide range of accredited programs from diploma to PhD levels, recognized by the Malaysian Qualifications Agency (MQA).
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Top Rankings</h3>
                <p className="text-gray-600">
                 QS World University Ranking (2025/20), LVC ranked<br/>
                 638 in World UNU, 165 in Asia <br/>
                 87th Quality Education 2025
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <div className="bg-amber-100 p-3 rounded-lg w-fit mb-4">
                  <Globe className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Recognition</h3>
                <p className="text-gray-600">
                 11+ Affilicated Colleges in Nepal and 180+ Globally
                </p>
              </div>
            </div>

          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">
                About University
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Legacy of Excellence in Higher Education
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Lincoln University College (LUC), located at Petaling Jaya, Malaysia was established in the year 2002 as Lincoln College (LC) and later upgraded to Lincoln University College in the year 2011. Lincoln University College is one of the premier private institutions of higher education approved by the Ministry of Higher Education and Malaysian Qualifications Agency (MQA- National Accreditation Board).
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              The University College is also crowned with a 5 Star ranking by the Ministry of Higher Education, Malaysia in 2017. Lincoln University College is listed among the top nine Malaysian universities according to the Times Higher Education (THE) University Impact Rankings 2019.
            </p>

            <Button asChild>
            <Link href="https://www.lincoln.edu.my/">Discover Our University</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

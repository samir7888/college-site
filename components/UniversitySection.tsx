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
                <h3 className="text-xl font-semibold mb-3">Rich History</h3>
                <p className="text-gray-600">
                  Founded in 1965 with a legacy of academic excellence spanning
                  over five decades.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Top Rankings</h3>
                <p className="text-gray-600">
                  Consistently ranked among the top 50 universities nationwide
                  for educational quality.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Alumni Network</h3>
                <p className="text-gray-600">
                  Over 50,000 alumni making significant contributions across
                  various industries globally.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <div className="bg-amber-100 p-3 rounded-lg w-fit mb-4">
                  <Globe className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
                <p className="text-gray-600">
                  International partnerships with 75+ universities across 30
                  countries worldwide.
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
              Western Mega University stands as a beacon of academic excellence
              and innovation, dedicated to fostering intellectual growth and
              preparing students for the challenges of a rapidly evolving global
              landscape. With a rich history spanning over five decades, we have
              established ourselves as a premier institution for higher
              learning.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our university offers a diverse range of undergraduate, graduate,
              and doctoral programs across multiple disciplines, taught by
              distinguished faculty who are leaders in their respective fields.
              We pride ourselves on our cutting-edge research facilities,
              comprehensive student support services, and vibrant campus life.
            </p>

            <Button asChild>
              <Link href="/about">Discover Our University</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

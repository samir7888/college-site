import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Star,
  GraduationCap,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          width={1920}
          height={1080}
          src="/college.JPG"
          alt="College Campus"
          className="w-full h-full object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-orange-500/20 backdrop-blur-sm border border-orange-300/30 rounded-full px-6 py-3">
              <Star className="h-5 w-5 text-orange-400 fill-current" />
              <span className="text-orange-200 font-medium text-sm">
                Hospitality & Management Excellence Since 2013
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Build Your
                <span className="block text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text">
                  Career in BHM & MBA
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-blue-200 mt-2">
                  at Western Mega College
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              Join a decade-strong legacy in hospitality and management education.
              Our BHM and MBA programs blend academic excellence with hands-on experience,
              preparing you for global careers in business and hospitality industries.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">1200+</div>
                <div className="text-sm text-gray-300">BHM & MBA Graduates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">40+</div>
                <div className="text-sm text-gray-300">Industry-Expert Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">90%</div>
                <div className="text-sm text-gray-300">Placement Rate</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white/80 hover:bg-black text-gray-900 text-lg px-8 py-4 h-auto backdrop-blur-sm transition-all hover:text-gray-100 duration-300"
              >
                <Link href="/programs">
                  Explore Programs
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:block space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-xl">
                    <GraduationCap className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Specialized BHM & MBA
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Tailored programs that blend theory with real-world hospitality and business skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500/20 p-3 rounded-xl">
                    <Users className="h-8 w-8 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Industry Mentorship</h3>
                    <p className="text-gray-300 text-sm">
                      Learn directly from hospitality leaders and business professionals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500/20 p-3 rounded-xl">
                    <Trophy className="h-8 w-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Global Career Pathways</h3>
                    <p className="text-gray-300 text-sm">
                      Excellent placement support and internship opportunities in leading global companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
    </section>
  );
}

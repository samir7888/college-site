import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          width={1920}
          height={1080}
          src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="College Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50"></div>
      </div>

      <div className="relative container mx-auto px-4 ">
        <div className="max-w-4xl  h-full  space-y-28">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-1 bg-orange-500"></div>
              <span className="text-orange-300 font-medium text-lg">
                Excellence in Education Since 2000
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Shape Your Future at
              <span className="block text-orange-400 mt-2">
                Western Mega College
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              Empowering students with quality education in +2 and diploma
              programs. Join our legacy of academic excellence and innovation
              that has been transforming lives for over two decades.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button
              size="lg"
              asChild
              className="bg-[#084887] hover:bg-orange-600 text-lg px-8 py-4 h-auto"
            >
              <Link href="/apply">
                Apply Online
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white  hover:bg-white text-blue-900 text-lg px-8 py-4 h-auto"
            >
              <Link href="/courses">
                Explore Courses
                <BookOpen className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

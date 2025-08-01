"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, Linkedin, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  testimonialsData,
  getFeaturedTestimonials,
} from "@/lib/testimonialsData";
import { useState, useEffect } from "react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredTestimonials = getFeaturedTestimonials();

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === featuredTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredTestimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-orange-500"></div>
            <span className="text-orange-500 font-medium">Success Stories</span>
            <div className="w-8 h-1 bg-orange-500"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Alumni Say
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our successful graduates who are making their mark in the
            hospitality and business world.
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Image */}
                        <div className="relative flex-shrink-0">
                          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={160}
                              height={160}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 bg-orange-500 rounded-full p-2">
                            <Quote className="h-4 w-4 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                          <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                            "{testimonial.testimonial.split("\n")[0]}"
                          </blockquote>

                          <div className="space-y-2">
                            <h4 className="text-xl font-bold text-gray-900">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 font-medium">
                              {testimonial.designation}
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-blue-800"
                              >
                                {testimonial.program}
                              </Badge>
                              {testimonial.linkedin && (
                                <a
                                  href={testimonial.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                                  title="LinkedIn Profile"
                                >
                                  <Linkedin className="h-4 w-4" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonialsData.slice(0, 6).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm border-0"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 bg-orange-500 rounded-full p-1">
                      <Quote className="h-3 w-3 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {testimonial.designation}
                    </p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {testimonial.program}
                    </Badge>
                  </div>
                </div>

                <blockquote className="text-sm text-gray-700 line-clamp-4 mb-4 italic">
                  "{testimonial.testimonial}"
                </blockquote>

                <div className="flex items-center justify-end">
                  {testimonial.linkedin && (
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors opacity-0 group-hover:opacity-100"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful alumni who have transformed their
              careers with our world-class BHM and MBA programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="border-blue-500 bg-blue-500 hover:text-blue-600 text-white hover:bg-gray-100"
              >
                <Link href="/admission">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className=" hover:bg-white text-blue-400 hover:text-blue-600"
              >
                <Link href="/courses">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

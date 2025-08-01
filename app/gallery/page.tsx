"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Calendar, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Annual Sports Day 2024",
      category: "Events",
      date: "March 15, 2024",
      image: "/pic2.JPG",
      description:
        "Students participating in various sports activities during our annual sports day celebration.",
    },
    {
      id: 2,
      title: "Science Laboratory",
      category: "Infrastructure",
      date: "February 20, 2024",
      image: "/gallery2.JPG",
      description:
        "State-of-the-art science laboratory equipped with modern instruments and equipment.",
    },
    {
      id: 3,
      title: "Graduation Ceremony 2023",
      category: "Academic",
      date: "December 10, 2023",
      image: "/gallery3.JPG",
      description:
        "Proud graduates receiving their certificates at the annual graduation ceremony.",
    },
    {
      id: 4,
      title: "Computer Lab",
      category: "Infrastructure",
      date: "January 15, 2024",
      image: "/gallery4.JPG",
      description:
        "Modern computer laboratory with latest hardware and software for practical learning.",
    },
    {
      id: 5,
      title: "Cultural Program",
      category: "Events",
      date: "November 25, 2023",
      image: "/gallery5.JPG",
      description:
        "Students showcasing their talents during the annual cultural program.",
    },
    {
      id: 6,
      title: "Library Facilities",
      category: "Infrastructure",
      date: "October 5, 2023",
      image: "/gallery6.JPG",
      description:
        "Well-equipped library with extensive collection of books and digital resources.",
    },
    {
      id: 7,
      title: "Workshop Session",
      category: "Academic",
      date: "September 18, 2023",
      image: "/gallery7.JPG",
      description:
        "Interactive workshop session with industry experts and professionals.",
    },
    {
      id: 8,
      title: "Campus View",
      category: "Infrastructure",
      date: "August 12, 2023",
      image: "/image2.JPG",
      description:
        "Beautiful campus view showcasing our modern infrastructure and green spaces.",
    },
    {
      id: 9,
      title: "Student Activities",
      category: "Events",
      date: "July 8, 2023",
      image: "/pic1.JPG",
      description:
        "Students engaged in various extracurricular activities and group discussions.",
    },
  ];

  const categories = ["All", "Events", "Academic", "Infrastructure"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGalleryItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen  bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[500px] text-white py-16 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/pic4.JPG"
          alt="Gallery Background"
          fill
          className="object-cover object-[0%_30%] z-0"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="flex justify-center mb-4">
            <Camera className="h-16 w-16 text-blue-200" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide font-sans">
            Gallery
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our campus life, events, and facilities through our photo
            gallery
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="flex items-center space-x-2"
              >
                <span>{category}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="masonry-grid">
            {filteredGalleryItems.map((item) => (
              <div
                key={item.id}
                className="masonry-item overflow-hidden rounded-lg shadow-sm bg-white"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

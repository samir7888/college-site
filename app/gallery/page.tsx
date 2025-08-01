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
      image:
        "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=500",
      description:
        "Students participating in various sports activities during our annual sports day celebration.",
    },
    {
      id: 2,
      title: "Science Laboratory",
      category: "Infrastructure",
      date: "February 20, 2024",
      image:
        "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=500",
      description:
        "State-of-the-art science laboratory equipped with modern instruments and equipment.",
    },
    {
      id: 3,
      title: "Graduation Ceremony 2023",
      category: "Academic",
      date: "December 10, 2023",
      image:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=500",
      description:
        "Proud graduates receiving their certificates at the annual graduation ceremony.",
    },
    {
      id: 4,
      title: "Computer Lab",
      category: "Infrastructure",
      date: "January 15, 2024",
      image:
        "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=500",
      description:
        "Modern computer laboratory with latest hardware and software for practical learning.",
    },
    {
      id: 5,
      title: "Cultural Program",
      category: "Events",
      date: "November 25, 2023",
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=500",
      description:
        "Students showcasing their talents during the annual cultural program.",
    },
    {
      id: 6,
      title: "Library Facilities",
      category: "Infrastructure",
      date: "October 5, 2023",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500",
      description:
        "Well-equipped library with extensive collection of books and digital resources.",
    },
    {
      id: 7,
      title: "Workshop Session",
      category: "Academic",
      date: "September 18, 2023",
      image:
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=500",
      description:
        "Interactive workshop session with industry experts and professionals.",
    },
    {
      id: 8,
      title: "Campus View",
      category: "Infrastructure",
      date: "August 12, 2023",
      image:
        "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=500",
      description:
        "Beautiful campus view showcasing our modern infrastructure and green spaces.",
    },
    {
      id: 9,
      title: "Student Activities",
      category: "Events",
      date: "July 8, 2023",
      image:
        "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=500",
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
      <section
        className="min-h-[500px] text-white py-16 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
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
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredGalleryItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-4 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

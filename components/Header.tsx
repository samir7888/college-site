"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        coursesRef.current &&
        !coursesRef.current.contains(event.target as Node) &&
        teamRef.current &&
        !teamRef.current.contains(event.target as Node)
      ) {
        closeDropdowns();
      }
    };
    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown, coursesRef, teamRef]);

  const plus2Courses = [
    {
      id: "science",
      label: "Science",
      href: "/courses?category=plus2&course=science",
    },
    {
      id: "management",
      label: "Management",
      href: "/courses?category=plus2&course=management",
    },
    {
      id: "humanities",
      label: "Humanities",
      href: "/courses?category=plus2&course=humanities",
    },
    { id: "law", label: "Law", href: "/courses?category=plus2&course=law" },
  ];

  const diplomaCourses = [
    {
      id: "csit",
      label: "B.Sc. CSIT",
      href: "/courses?category=diploma&course=csit",
    },
    { id: "bca", label: "BCA", href: "/courses?category=diploma&course=bca" },
    { id: "bbs", label: "BBS", href: "/courses?category=diploma&course=bbs" },
    { id: "bsw", label: "BSW", href: "/courses?category=diploma&course=bsw" },
  ];

  const teamCategories = [
    {
      id: "principal",
      label: "Principal",
      href: "/our-team?category=principal",
    },
    {
      id: "bods",
      label: "Board of Directors",
      href: "/our-team?category=bods",
    },
    {
      id: "staff",
      label: "Staff",
      href: "/our-team?category=staff",
    },
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const navbg = isHome
    ? isScrolled
      ? "bg-white shadow-lg"
      : "bg-transparent"
    : "bg-white shadow-lg";
  const textColor = isHome && !isScrolled ? "text-white" : "text-gray-800";
  return (
    <header
      className={`fixed w-full flex items-center h-32 lg:h-24 lg:top-10 z-50 transition-all duration-300 ${navbg}`}
    >
      <div className="relative container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center flex-shrink-0 space-x-3">
            <Image
              width={200}
              height={100}
              src="/logo.png"
              alt="Western Mega College"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${textColor}`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${textColor}`}
            >
              ABOUT
            </Link>

            {/* Courses Dropdown */}
            <div className="group relative" ref={coursesRef}>
              <button
                onClick={() => toggleDropdown("courses")}
                className={` flex items-center space-x-1 font-medium transition-colors ${textColor}`}
              >
                <span>COURSES</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activeDropdown === "courses" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div className="opacity-0 scale-0 group-hover:scale-100  group-hover:opacity-100  duration-400 absolute top-full left-0  w-[400px] flex justify-around bg-white rounded-md shadow-lg py-2 z-10">
                <div className="px-4 py-2">
                  <h3 className="font-bold text-gray-700">+2 Programs</h3>
                  {plus2Courses.map((course) => (
                    <Link
                      key={course.id}
                      href={course.href}
                      onClick={closeDropdowns}
                      className="block py-1 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {course.label}
                    </Link>
                  ))}
                </div>
                <div className="px-4 py-2">
                  <h3 className="font-bold text-gray-700">Diploma Programs</h3>
                  {diplomaCourses.map((course) => (
                    <Link
                      key={course.id}
                      href={course.href}
                      onClick={closeDropdowns}
                      className="block py-1 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {course.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Team Dropdown */}
            <div className="group relative" ref={teamRef}>
              <button
                onClick={() => toggleDropdown("team")}
                className={`flex items-center space-x-1 font-medium transition-colors ${textColor}`}
              >
                <span>OUR TEAMS</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activeDropdown === "team" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div className="opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-400 absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                {teamCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={category.href}
                    onClick={closeDropdowns}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/alumni"
              className={`font-medium transition-colors ${textColor}`}
            >
              ALUMINI
            </Link>
            <Link
              href="/gallery"
              className={`font-medium transition-colors ${textColor}`}
            >
              GALLERY
            </Link>
            <Link
              href="/events"
              className={`font-medium transition-colors ${textColor}`}
            >
              EVENTS
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${textColor}`}
            >
              CONTACT
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/apply">Apply Online</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${textColor}`} />
            ) : (
              <Menu className={`h-6 w-6 ${textColor}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 px-3 absolute inset-x-0 top-18 rounded-lg border-t bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/courses"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Courses
              </Link>

              {/* Mobile Team Dropdown */}
              <div className="space-y-2">
                <div className="text-gray-700 font-medium">Our Team</div>
                <div className="pl-4 space-y-2">
                  {teamCategories.map((category) => (
                    <Link
                      key={category.id}
                      href={category.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/alumni"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Alumni
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/events"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Events
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
              <Button
                asChild
                className="w-fit bg-orange-500 hover:bg-orange-600"
              >
                <Link href="/apply">Apply Online</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

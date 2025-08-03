import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <Image
                src="/logo.png"
                width={150}
                height={75}
                alt="Western Mega College"
              />
            </div>
            <p className="mb-4 text-gray-400">
              Empowering students with quality education and preparing them for
              successful careers.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer text-gray-400 hover:text-blue-400" />
              <Twitter className="h-5 w-5 cursor-pointer text-gray-400 hover:text-blue-400" />
              <Instagram className="h-5 w-5 cursor-pointer text-gray-400 hover:text-blue-400" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-gray-400 hover:text-white">
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://collaboration.lincolnedu.education/welcome.aspx"
                  className="text-gray-400 hover:text-white"
                >
                  MY LLS
                </Link>
              </li>
              <li>
                <Link href="/forms" className="text-gray-400 hover:text-white">
                  Forms
                </Link>
              </li>

              <li>
                <Link href="/apply" className="text-gray-400 hover:text-white">
                  Apply Online
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses?category=plus2"
                  className="text-gray-400 hover:text-white"
                >
                  +2 Science
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=plus2"
                  className="text-gray-400 hover:text-white"
                >
                  +2 Management
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=diploma"
                  className="text-gray-400 hover:text-white"
                >
                  Diploma Programs
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white">
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/arambharesort/"
                  className="text-gray-400 hover:text-white"
                >
                  Arambha Resort
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.lincoln.edu.my/"
                  className="text-gray-400 hover:text-white"
                >
                  Lincoln University College
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://tu.edu.np/"
                  className="text-gray-400 hover:text-white"
                >
                  Tribhuvan University
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://edusanjal.com/blog/list-foreign-university-affiliated-courses-nepal/"
                  className="text-gray-400 hover:text-white"
                >
                  Ministry of Education
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="/"
                  className="text-gray-400 hover:text-white"
                >
                  LUCAN
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Western Mega College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  FileText,
  Download,
  Clock,
  FileCheck,
  Filter,
  X,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { FormCategory, FilteredForm, FilteredCategory } from "@/types/forms";

// Define form categories and forms
const formCategories: FormCategory[] = [
  {
    id: "admission",
    name: "Admission Forms",
    description: "Forms required for admission process",
    forms: [
      {
        id: "admission-form",
        name: "Admission Application Form",
        description: "General application form for college admission",
        fileSize: "245 KB",
        fileType: "PDF",
        lastUpdated: "June 15, 2024",
        downloadUrl: "/forms/admission-application.pdf",
      },
      {
        id: "scholarship-form",
        name: "Scholarship Application Form",
        description: "Form to apply for various scholarship programs",
        fileSize: "180 KB",
        fileType: "PDF",
        lastUpdated: "May 20, 2024",
        downloadUrl: "/forms/scholarship-application.pdf",
      },
      {
        id: "hostel-form",
        name: "Hostel Accommodation Form",
        description: "Application for hostel accommodation",
        fileSize: "210 KB",
        fileType: "PDF",
        lastUpdated: "June 10, 2024",
        downloadUrl: "/forms/hostel-accommodation.pdf",
      },
    ],
  },
  {
    id: "academic",
    name: "Academic Forms",
    description: "Forms related to academic procedures",
    forms: [
      {
        id: "course-registration",
        name: "Course Registration Form",
        description: "Form for registering courses each semester",
        fileSize: "150 KB",
        fileType: "PDF",
        lastUpdated: "July 1, 2024",
        downloadUrl: "/forms/course-registration.pdf",
      },
      {
        id: "exam-application",
        name: "Examination Application Form",
        description: "Form to apply for examinations",
        fileSize: "175 KB",
        fileType: "PDF",
        lastUpdated: "June 25, 2024",
        downloadUrl: "/forms/exam-application.pdf",
      },
      {
        id: "transcript-request",
        name: "Transcript Request Form",
        description: "Form to request academic transcripts",
        fileSize: "130 KB",
        fileType: "PDF",
        lastUpdated: "May 30, 2024",
        downloadUrl: "/forms/transcript-request.pdf",
      },
    ],
  },
  {
    id: "administrative",
    name: "Administrative Forms",
    description: "Forms for administrative purposes",
    forms: [
      {
        id: "leave-application",
        name: "Leave Application Form",
        description: "Form to apply for leave of absence",
        fileSize: "120 KB",
        fileType: "PDF",
        lastUpdated: "June 5, 2024",
        downloadUrl: "/forms/leave-application.pdf",
      },
      {
        id: "id-replacement",
        name: "ID Card Replacement Form",
        description: "Form to request replacement of lost ID card",
        fileSize: "110 KB",
        fileType: "PDF",
        lastUpdated: "April 15, 2024",
        downloadUrl: "/forms/id-replacement.pdf",
      },
      {
        id: "character-certificate",
        name: "Character Certificate Request",
        description: "Form to request character certificate",
        fileSize: "135 KB",
        fileType: "PDF",
        lastUpdated: "May 12, 2024",
        downloadUrl: "/forms/character-certificate.pdf",
      },
    ],
  },
  {
    id: "financial",
    name: "Financial Forms",
    description: "Forms related to fees and payments",
    forms: [
      {
        id: "fee-installment",
        name: "Fee Installment Request Form",
        description: "Form to request payment of fees in installments",
        fileSize: "140 KB",
        fileType: "PDF",
        lastUpdated: "June 20, 2024",
        downloadUrl: "/forms/fee-installment.pdf",
      },
      {
        id: "refund-request",
        name: "Refund Request Form",
        description: "Form to request refund of fees",
        fileSize: "125 KB",
        fileType: "PDF",
        lastUpdated: "May 25, 2024",
        downloadUrl: "/forms/refund-request.pdf",
      },
      {
        id: "financial-aid",
        name: "Financial Aid Application",
        description: "Form to apply for financial assistance",
        fileSize: "190 KB",
        fileType: "PDF",
        lastUpdated: "June 15, 2024",
        downloadUrl: "/forms/financial-aid.pdf",
      },
    ],
  },
];

export default function FormsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Get all forms flattened into a single array
  const allForms = useMemo<FilteredForm[]>(() => {
    return formCategories.flatMap((category) =>
      category.forms.map((form) => ({
        ...form,
        categoryId: category.id,
        categoryName: category.name,
      }))
    );
  }, []);

  // Filter forms based on search query and selected categories
  const filteredForms = useMemo<FilteredForm[]>(() => {
    let result = allForms;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (form) =>
          form.name.toLowerCase().includes(query) ||
          form.description.toLowerCase().includes(query) ||
          form.categoryName.toLowerCase().includes(query)
      );
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      result = result.filter((form) =>
        selectedCategories.includes(form.categoryId)
      );
    }

    return result;
  }, [allForms, searchQuery, selectedCategories]);

  // Group filtered forms by category for display
  const groupedFilteredForms = useMemo<FilteredCategory[]>(() => {
    if (searchQuery || selectedCategories.length > 0) {
      // When filtering, we'll show results grouped by category
      const grouped: Record<string, FilteredCategory> = {};

      filteredForms.forEach((form) => {
        if (!grouped[form.categoryId]) {
          const category = formCategories.find((c) => c.id === form.categoryId);
          if (category) {
            grouped[form.categoryId] = {
              ...category,
              forms: [],
            };
          }
        }
        if (grouped[form.categoryId]) {
          grouped[form.categoryId].forms.push(form);
        }
      });

      return Object.values(grouped);
    } else {
      // When not filtering, show all categories
      return formCategories as FilteredCategory[];
    }
  }, [filteredForms, searchQuery, selectedCategories]);

  // Toggle category selection
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Clean Photo */}
      <section className="relative min-h-[400px] text-white">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="College forms and documents"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              College Forms
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Download all the necessary forms for admission, academics, and
              administrative purposes
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search for forms..."
                className="pl-10 py-6 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Forms Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-bold text-gray-900">
                {searchQuery || selectedCategories.length > 0
                  ? `Search Results (${filteredForms.length})`
                  : "Form Categories"}
              </h2>

              {/* Show active filters */}
              {(searchQuery || selectedCategories.length > 0) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Clear Filters
                </Button>
              )}
            </div>

            <div className="flex items-center space-x-2">
              {/* Category filter badges */}
              {selectedCategories.length > 0 && (
                <div className="flex flex-wrap gap-2 mr-2">
                  {selectedCategories.map((categoryId) => {
                    const category = formCategories.find(
                      (c) => c.id === categoryId
                    );
                    return (
                      <Badge
                        key={categoryId}
                        variant="secondary"
                        className="px-2 py-1"
                      >
                        {category?.name}
                        <button
                          className="ml-1 hover:text-red-500"
                          onClick={() => toggleCategory(categoryId)}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    );
                  })}
                </div>
              )}

              {/* Filter dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {formCategories.map((category) => (
                    <DropdownMenuCheckboxItem
                      key={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => toggleCategory(category.id)}
                    >
                      {category.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* No results message */}
          {groupedFilteredForms.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No forms found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Categories and Forms */}
          <div className="space-y-12">
            {groupedFilteredForms.map((category) => (
              <div key={category.id} className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-1 bg-blue-600"></div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.forms.map((form) => (
                    <Card
                      key={form.id}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <FileText className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span>Updated: {form.lastUpdated}</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg mt-4">
                          {form.name}
                        </CardTitle>
                        <CardDescription>{form.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <FileCheck className="h-4 w-4" />
                            <span>{form.fileType}</span>
                          </div>
                          <span>{form.fileSize}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link href={form.downloadUrl}>
                            <Download className="h-4 w-4 mr-2" />
                            Download Form
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Form Submission Instructions
            </h2>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">
                How to Submit Forms
              </h3>
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>
                  Download the required form and print it on A4 size paper.
                </li>
                <li>
                  Fill in all the required information clearly and accurately.
                </li>
                <li>
                  Attach all necessary documents as mentioned in the form.
                </li>
                <li>
                  Submit the completed form to the respective department office
                  during working hours.
                </li>
                <li>
                  Keep a photocopy of the submitted form for your records.
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-800 mb-4">
                Important Notes
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>
                  All forms must be submitted before the specified deadline.
                </li>
                <li>Incomplete forms will not be processed.</li>
                <li>
                  Forms requiring fees must be accompanied by the payment
                  receipt.
                </li>
                <li>
                  For any queries regarding form submission, please contact the
                  administrative office.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Assistance?
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions or need help with the forms, please
            contact our administrative office.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

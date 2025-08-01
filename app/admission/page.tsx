"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar, Mail, Phone, School, Send } from "lucide-react";
import { AdmissionForm, admissionFormSchema } from "@/types/admission";
import Image from "next/image";

const defaultAdmissionValues: AdmissionForm = {
  // Personal Information
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirthAD: "",
  dateOfBirthBS: "",
  religion: "",
  maritalStatus: "single",
  program: "",

  // Permanent Address
  permanentProvince: "",
  permanentDistrict: "",
  permanentVdcMunicipality: "",
  permanentWardNo: "",

  // Current Address
  currentProvince: "",
  currentDistrict: "",
  currentVdcMunicipality: "",
  currentWardNo: "",

  // Parent/Guardian Details
  fatherName: "",
  fatherOccupation: "",
  fatherContactNo: "",
  motherName: "",
  motherOccupation: "",
  motherContactNo: "",

  // Bus Facility
  busFacility: false,
  busStation: "",

  // Academic Qualifications
  academic1Level: "",
  academic1Board: "",
  academic1Year: "",
  academic1SymbolNo: "",
  academic1Institute: "",
  academic1CgpaPercentage: "",

  academic2Level: "",
  academic2Board: "",
  academic2Year: "",
  academic2SymbolNo: "",
  academic2Institute: "",
  academic2CgpaPercentage: "",

  academic3Level: "",
  academic3Board: "",
  academic3Year: "",
  academic3SymbolNo: "",
  academic3Institute: "",
  academic3CgpaPercentage: "",
};

export default function AdmissionPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<AdmissionForm>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: defaultAdmissionValues,
    mode: "onChange",
  });

  const onSubmit = async (data: AdmissionForm) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted successfully!");
      console.log("Submitted data:", {
        ...data,
        submissionTime: new Date().toISOString(),
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      console.groupEnd();
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardContent className="pt-10 pb-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <School className="h-16 w-16 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-4">
                Pre-Registration Successful!
              </CardTitle>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in our BHM program. Your
                pre-registration has been received.
              </p>
              <p className="text-gray-600 mb-8">
                Our admission team will contact you shortly with details about
                the entrance exam and next steps.
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    form.reset();
                  }}
                >
                  Submit Another Form
                </Button>
                <Button onClick={() => (window.location.href = "/")}>
                  Return to Homepage
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[500px] py-16 flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/gallery8.JPG"
          alt="Contact Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <School className="h-16 w-16 text-yellow-200" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Admissions Open for BHM Program
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Bachelor of Hotel Management - 2024 Intake
          </p>
        </div>
      </section>

      {/* Admission Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-blue-900">
                  Admission Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-gray-700">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <School className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Eligibility:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>
                          Students from Science, Commerce, Arts & Humanities
                        </li>
                        <li>Minimum grade 'C' in all subjects of 11 and 12</li>
                        <li>
                          OR minimum second division marks in 10+2, PCL or
                          equivalent
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Entrance Exam:</p>
                      <p className="mt-1">Date: [Contact For Date]</p>
                      <p>Time: 10:00 AM - 11:00 AM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Contact Information:</p>
                      <p className="mt-1">Phone: 9857071252, 9840795433</p>
                      <p>Email: info@westernmegacollege.edu.np</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          Please keep checking our website for up-to-date
                          information about admission dates and procedures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Pre-Registration Form
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    {/* Personal Information Card */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Personal Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter your first name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="middleName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Middle Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter your middle name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter your last name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="9857071252"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="dateOfBirthAD"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Date of Birth (AD) *</FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="dateOfBirthBS"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Date of Birth (BS)</FormLabel>
                                <FormControl>
                                  <Input placeholder="YYYY/MM/DD" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="religion"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Religion *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select religion" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="hinduism">
                                      Hinduism
                                    </SelectItem>
                                    <SelectItem value="buddhism">
                                      Buddhism
                                    </SelectItem>
                                    <SelectItem value="christianity">
                                      Christianity
                                    </SelectItem>
                                    <SelectItem value="islam">Islam</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="maritalStatus"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Marital Status *</FormLabel>
                                <div className="flex flex-wrap gap-4 mt-2">
                                  {[
                                    { value: "single", label: "Single" },
                                    { value: "married", label: "Married" },
                                    { value: "divorced", label: "Divorced" },
                                    { value: "widowed", label: "Widowed" },
                                  ].map((status) => (
                                    <div
                                      key={status.value}
                                      className="flex items-center space-x-2"
                                    >
                                      <Checkbox
                                        id={status.value}
                                        checked={field.value === status.value}
                                        onCheckedChange={() =>
                                          field.onChange(status.value)
                                        }
                                      />
                                      <label
                                        htmlFor={status.value}
                                        className="text-sm font-medium"
                                      >
                                        {status.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="program"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Program Interested In *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select program" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="bhm">
                                    Bachelor of Hotel Management (BHM)
                                  </SelectItem>
                                  <SelectItem value="mba">
                                    Master of Business Administration (MBA)
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>

                    {/* Permanent Address Card */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Permanent Address
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="permanentProvince"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Province *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select province" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="province-1">
                                      Province 1
                                    </SelectItem>
                                    <SelectItem value="province-2">
                                      Madhesh Province
                                    </SelectItem>
                                    <SelectItem value="bagmati">
                                      Bagmati Province
                                    </SelectItem>
                                    <SelectItem value="gandaki">
                                      Gandaki Province
                                    </SelectItem>
                                    <SelectItem value="lumbini">
                                      Lumbini Province
                                    </SelectItem>
                                    <SelectItem value="karnali">
                                      Karnali Province
                                    </SelectItem>
                                    <SelectItem value="sudurpashchim">
                                      Sudurpashchim Province
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="permanentDistrict"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>District *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter district"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="permanentVdcMunicipality"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>VDC/Municipality *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter VDC/Municipality"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="permanentWardNo"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Ward No. *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter ward number"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Current Address Card */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Current Address
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="currentProvince"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Province *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select province" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="province-1">
                                      Province 1
                                    </SelectItem>
                                    <SelectItem value="province-2">
                                      Madhesh Province
                                    </SelectItem>
                                    <SelectItem value="bagmati">
                                      Bagmati Province
                                    </SelectItem>
                                    <SelectItem value="gandaki">
                                      Gandaki Province
                                    </SelectItem>
                                    <SelectItem value="lumbini">
                                      Lumbini Province
                                    </SelectItem>
                                    <SelectItem value="karnali">
                                      Karnali Province
                                    </SelectItem>
                                    <SelectItem value="sudurpashchim">
                                      Sudurpashchim Province
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="currentDistrict"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>District *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter district"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="currentVdcMunicipality"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>VDC/Municipality *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter VDC/Municipality"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="currentWardNo"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Ward No. *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter ward number"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Parent/Guardian Details Card */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Parent/Guardian Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <FormField
                            control={form.control}
                            name="fatherName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Father's Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter father's name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="fatherOccupation"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Father's Occupation *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter father's occupation"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="fatherContactNo"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Father's Contact No. *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="9857071252"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <FormField
                            control={form.control}
                            name="motherName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Mother's Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter mother's name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="motherOccupation"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Mother's Occupation *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter mother's occupation"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="motherContactNo"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Mother's Contact No. *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="9857071252"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Bus Facility Card */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Transportation
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <FormField
                          control={form.control}
                          name="busFacility"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Bus Facility Required</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        {form.watch("busFacility") && (
                          <FormField
                            control={form.control}
                            name="busStation"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Bus Station</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter nearest bus station"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}
                      </CardContent>
                    </Card>

                    {/* Academic Qualifications Card */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Academic Qualifications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900 w-32">
                                  Level
                                </th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900 w-32">
                                  Board
                                </th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900 w-24">
                                  Year
                                </th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900 w-32">
                                  Symbol No.
                                </th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900 w-80">
                                  Name of Academic Institute
                                </th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900 w-36">
                                  CGPA/Percentage
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* Row 1 - Required */}
                              <tr>
                                <td className="border border-gray-300 p-2 w-32">
                                  <FormField
                                    control={form.control}
                                    name="academic1Level"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                          >
                                            <SelectTrigger className="border-0 shadow-none">
                                              <SelectValue placeholder="Select level" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="slc">
                                                SLC/SEE
                                              </SelectItem>
                                              <SelectItem value="plus2">
                                                +2/Intermediate
                                              </SelectItem>
                                              <SelectItem value="bachelor">
                                                Bachelor
                                              </SelectItem>
                                              <SelectItem value="master">
                                                Master
                                              </SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2 w-32">
                                  <FormField
                                    control={form.control}
                                    name="academic1Board"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="Board"
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2 w-24">
                                  <FormField
                                    control={form.control}
                                    name="academic1Year"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="Year"
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2 w-32">
                                  <FormField
                                    control={form.control}
                                    name="academic1SymbolNo"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="Symbol No."
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2 w-80">
                                  <FormField
                                    control={form.control}
                                    name="academic1Institute"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="Institute Name"
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2 w-36">
                                  <FormField
                                    control={form.control}
                                    name="academic1CgpaPercentage"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="CGPA/Percentage"
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                              </tr>

                              {/* Row 2 - Optional */}
                              <tr>
                                <td className="border border-gray-300 p-2">
                                  <FormField
                                    control={form.control}
                                    name="academic2Level"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                          >
                                            <SelectTrigger className="border-0 shadow-none">
                                              <SelectValue placeholder="Select level" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="slc">
                                                SLC/SEE
                                              </SelectItem>
                                              <SelectItem value="plus2">
                                                +2/Intermediate
                                              </SelectItem>
                                              <SelectItem value="bachelor">
                                                Bachelor
                                              </SelectItem>
                                              <SelectItem value="master">
                                                Master
                                              </SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2">
                                  <FormField
                                    control={form.control}
                                    name="academic2Board"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="Board"
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2">
                                  <FormField
                                    control={form.control}
                                    name="academic2Year"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="Year"
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2">
                                  <FormField
                                    control={form.control}
                                    name="academic2SymbolNo"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="Symbol No."
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2">
                                  <FormField
                                    control={form.control}
                                    name="academic2Institute"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="Institute Name"
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2">
                                  <FormField
                                    control={form.control}
                                    name="academic2CgpaPercentage"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="CGPA/Percentage"
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                              </tr>

                              {/* Row 3 - Optional */}
                              <tr>
                                <td className="border border-gray-300 p-2">
                                  <FormField
                                    control={form.control}
                                    name="academic3Level"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                          >
                                            <SelectTrigger className="border-0 shadow-none">
                                              <SelectValue placeholder="Select level" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="slc">
                                                SLC/SEE
                                              </SelectItem>
                                              <SelectItem value="plus2">
                                                +2/Intermediate
                                              </SelectItem>
                                              <SelectItem value="bachelor">
                                                Bachelor
                                              </SelectItem>
                                              <SelectItem value="master">
                                                Master
                                              </SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2">
                                  <FormField
                                    control={form.control}
                                    name="academic3Board"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="Board"
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2">
                                  <FormField
                                    control={form.control}
                                    name="academic3Year"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="Year"
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2">
                                  <FormField
                                    control={form.control}
                                    name="academic3SymbolNo"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="Symbol No."
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2">
                                  <FormField
                                    control={form.control}
                                    name="academic3Institute"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="Institute Name"
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                                <td className="border border-gray-300 p-2">
                                  <FormField
                                    control={form.control}
                                    name="academic3CgpaPercentage"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Input
                                            placeholder="CGPA/Percentage"
                                            className="border-0 shadow-none"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                          * First row is required. Additional rows are optional
                          for multiple qualifications.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={form.formState.isSubmitting}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        {form.formState.isSubmitting
                          ? "Submitting..."
                          : "Submit Pre-Registration"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help With Admission?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Our admission counselors are ready to assist you with any questions
            about the BHM program or admission process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" className="gap-2">
              <Phone className="h-4 w-4" />
              Call: 9857071252
            </Button>
            <Button variant="secondary" className="gap-2">
              <Mail className="h-4 w-4" />
              Email: info@westernmegacollege.edu.np
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FileUpload } from "@/components/ui/file-upload";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle,
  Upload,
  Linkedin,
  Trophy,
  Quote,
  Users,
} from "lucide-react";
import {
  alumniRegistrationSchema,
  type AlumniRegistration,
} from "@/lib/validations/alumni";
import {
  defaultAlumniValues,
  courseOptions,
  graduationYearOptions,
} from "@/types/alumni";

export default function AlumniRegistrationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // React Hook Form setup with Zod validation
  const form = useForm<AlumniRegistration>({
    resolver: zodResolver(alumniRegistrationSchema),
    defaultValues: defaultAlumniValues,
    mode: "onChange", // Real-time validation
  });

  const onSubmit = async (data: AlumniRegistration) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Alumni registration submitted:", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl shadow-lg">
            <CardContent className="pb-10 pt-10 text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-green-100 p-4">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
              </div>
              <CardTitle className="mb-4 text-2xl">
                Registration Successful!
              </CardTitle>
              <p className="mb-6 text-gray-600">
                Thank you for registering with our alumni network. Your
                information has been submitted successfully.
              </p>
              <p className="mb-8 text-gray-600">
                We'll review your details and update our alumni directory.
                You'll receive a confirmation email shortly.
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/alumni")}
                >
                  Return to Alumni Page
                </Button>
                <Button onClick={() => (window.location.href = "/")}>
                  Go to Homepage
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
      <section
        className="flex min-h-[300px] items-center justify-center py-16 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex justify-center">
            <GraduationCap className="h-16 w-16 text-blue-200" />
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Alumni Registration
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-blue-100">
            Join our alumni network and stay connected with your alma mater
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Register as an Alumni
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <div className="mb-4 flex items-center space-x-2">
                        <div className="h-1 w-8 bg-blue-600"></div>
                        <h2 className="text-xl font-semibold">
                          Personal Information
                        </h2>
                      </div>

                      {/* Profile Photo Upload */}
                      <div className="mb-6">
                        <FormField
                          control={form.control}
                          name="profilePhoto"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Profile Photo</FormLabel>
                              <FormControl>
                                <FileUpload
                                  id="profile-photo"
                                  accept="image/*"
                                  maxSize={2}
                                  showPreview={true}
                                  previewClassName="w-32 h-32 rounded-full"
                                  buttonText="Upload Profile Photo"
                                  value={field.value}
                                  onFileChange={(file) => {
                                    field.onChange(file);
                                  }}
                                />
                              </FormControl>
                              <FormDescription>
                                Upload a professional photo for your alumni
                                profile. JPG, PNG or GIF (max. 2MB)
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                                  placeholder="+977-1-XXXXXXX"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Academic Information */}
                    <div className="space-y-6">
                      <div className="mb-4 flex items-center space-x-2">
                        <div className="h-1 w-8 bg-blue-600"></div>
                        <h2 className="text-xl font-semibold">
                          Academic Information
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="graduationYear"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Graduation Year *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select year" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {graduationYearOptions.map((option) => (
                                    <SelectItem
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="course"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Course/Program *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select course" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {courseOptions.map((option) => (
                                    <SelectItem
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="space-y-6">
                      <div className="mb-4 flex items-center space-x-2">
                        <div className="h-1 w-8 bg-blue-600"></div>
                        <h2 className="text-xl font-semibold">
                          Professional Information
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="currentCompany"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Current Company/Organization
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Where do you work?"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="currentPosition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Position/Title</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="What is your job title?"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Location</FormLabel>
                              <FormControl>
                                <Input placeholder="City, Country" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="linkedinProfile"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>LinkedIn Profile URL</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="https://linkedin.com/in/yourprofile"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-6">
                      <div className="mb-4 flex items-center space-x-2">
                        <div className="h-1 w-8 bg-blue-600"></div>
                        <h2 className="text-xl font-semibold">
                          Additional Information
                        </h2>
                      </div>

                      <FormField
                        control={form.control}
                        name="achievements"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Notable Achievements</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Share your professional achievements, awards, or recognitions..."
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="testimonial"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Testimonial</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Share your experience at Western Mega College and how it helped shape your career..."
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Your testimonial may be featured on our website or
                              promotional materials.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-4">
                        <FormField
                          control={form.control}
                          name="agreeToTerms"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm leading-relaxed">
                                  I agree to the{" "}
                                  <a
                                    href="/terms"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                  >
                                    Terms and Conditions
                                  </a>{" "}
                                  and consent to my information being displayed
                                  in the alumni directory.
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="border-t pt-6">
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <GraduationCap className="mr-2 h-5 w-5" />
                            Register as Alumni
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Benefits of Joining Our Alumni Network
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Stay connected with your alma mater and fellow graduates while
              enjoying exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 w-fit rounded-lg bg-blue-100 p-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                Networking Opportunities
              </h3>
              <p className="text-gray-600">
                Connect with fellow alumni and expand your professional network
                through exclusive events and reunions.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 w-fit rounded-lg bg-green-100 p-3">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Career Resources</h3>
              <p className="text-gray-600">
                Access job postings, career counseling, and professional
                development opportunities tailored for our alumni.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 w-fit rounded-lg bg-orange-100 p-3">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Exclusive Events</h3>
              <p className="text-gray-600">
                Participate in alumni-only events, workshops, and webinars
                featuring industry experts and thought leaders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

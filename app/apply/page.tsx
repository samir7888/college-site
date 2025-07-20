"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
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
  FileText,
  User,
  Upload,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Users,
  FileCheck,
} from "lucide-react";
import {
  stepSchemas,
  completeApplicationSchema,
  type CompleteApplication,
} from "@/lib/validations/application";
import {
  type ApplicationFormData,
  defaultFormValues,
  courseOptions,
  genderOptions,
  guardianRelationOptions,
} from "@/types/application";

function ApplyForm() {
  const searchParams = useSearchParams();
  const courseParam = searchParams.get("course");

  // Use courses from types
  const courses = courseOptions;

  // Find course by ID or slug
  const findCourseByParam = (param: string) => {
    return courses.find(
      (course) =>
        course.id === param ||
        course.slug === param ||
        course.name.toLowerCase().replace(/\s+/g, "-") === param
    );
  };

  const selectedCourse = courseParam ? findCourseByParam(courseParam) : null;

  // Step management
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // React Hook Form setup with Zod validation
  const form = useForm<CompleteApplication>({
    resolver: zodResolver(completeApplicationSchema),
    defaultValues: {
      ...defaultFormValues,
      course: selectedCourse?.id || defaultFormValues.course,
    },
    mode: "onChange", // Validate on change for real-time feedback
  });

  const {
    watch,
    trigger,
    formState: { errors, isValid },
  } = form;
  const watchedValues = watch();

  // Update course when URL parameter changes
  useEffect(() => {
    if (courseParam) {
      const course = findCourseByParam(courseParam);
      if (course) {
        form.setValue("course", course.id);
      }
    }
  }, [courseParam, form]);

  // Validate current step
  const validateCurrentStep = async (step: number) => {
    let fieldsToValidate: (keyof CompleteApplication)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = [
          "firstName",
          "lastName",
          "email",
          "phone",
          "address",
          "dateOfBirth",
          "gender",
        ];
        break;
      case 2:
        fieldsToValidate = ["course", "previousSchool", "seeGpa"];
        break;
      case 3:
        fieldsToValidate = [
          "guardianName",
          "guardianPhone",
          "guardianRelation",
        ];
        break;
      case 4:
        fieldsToValidate = ["additionalInfo"];
        break;
      case 5:
        fieldsToValidate = ["agreeToTerms"];
        break;
    }

    const result = await trigger(fieldsToValidate);
    return result;
  };

  // Check if current step is valid
  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          watchedValues.firstName?.trim() &&
          watchedValues.lastName?.trim() &&
          watchedValues.email?.trim() &&
          watchedValues.phone?.trim() &&
          watchedValues.address?.trim() &&
          watchedValues.dateOfBirth &&
          watchedValues.gender &&
          !errors.firstName &&
          !errors.lastName &&
          !errors.email &&
          !errors.phone &&
          !errors.address &&
          !errors.dateOfBirth &&
          !errors.gender
        );
      case 2:
        return (
          watchedValues.course &&
          watchedValues.previousSchool?.trim() &&
          watchedValues.seeGpa?.trim() &&
          !errors.course &&
          !errors.previousSchool &&
          !errors.seeGpa
        );
      case 3:
        return (
          watchedValues.guardianName?.trim() &&
          watchedValues.guardianPhone?.trim() &&
          watchedValues.guardianRelation &&
          !errors.guardianName &&
          !errors.guardianPhone &&
          !errors.guardianRelation
        );
      case 4:
        return !errors.additionalInfo;
      case 5:
        return watchedValues.agreeToTerms && !errors.agreeToTerms;
      default:
        return false;
    }
  };

  const nextStep = async () => {
    const isStepValid = await validateCurrentStep(currentStep);
    if (isStepValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: CompleteApplication) => {
    console.log("Form submitted with validated data:", data);
    alert("Application submitted successfully! We will contact you soon.");
  };

  // Step configuration
  const steps = [
    {
      number: 1,
      title: "Personal Information",
      icon: User,
      description: "Basic personal details",
    },
    {
      number: 2,
      title: "Academic Information",
      icon: GraduationCap,
      description: "Educational background",
    },
    {
      number: 3,
      title: "Guardian Information",
      icon: Users,
      description: "Guardian/Parent details",
    },
    {
      number: 4,
      title: "Document Upload",
      icon: Upload,
      description: "Required documents",
    },
    {
      number: 5,
      title: "Review & Submit",
      icon: FileCheck,
      description: "Final review",
    },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
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
                      <Input placeholder="Enter your last name" {...field} />
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
                        placeholder="Enter your email"
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
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth *</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {genderOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
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
        );

      case 2:
        return (
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Applied For *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="previousSchool"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous School/College *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your previous school"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="seeGpa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SEE GPA *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        min="0"
                        max="4"
                        placeholder="Enter your SEE GPA"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="guardianName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guardian Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter guardian's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="guardianPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guardian Phone *</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter guardian's phone"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="guardianRelation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relation to Guardian *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relation" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {guardianRelationOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
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
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="seeMarksheet">SEE Marksheet *</Label>
                <Input
                  id="seeMarksheet"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Upload PDF, JPG, JPEG, or PNG (Max 10MB)
                </p>
              </div>
              <div>
                <Label htmlFor="citizenship">
                  Citizenship/Birth Certificate *
                </Label>
                <Input
                  id="citizenship"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Upload PDF, JPG, JPEG, or PNG (Max 10MB)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="passport">Passport Size Photo *</Label>
                <Input
                  id="passport"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Upload JPG, JPEG, or PNG (Max 5MB)
                </p>
              </div>
              <div>
                <Label htmlFor="characterCertificate">
                  Character Certificate (Optional)
                </Label>
                <Input
                  id="characterCertificate"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Upload PDF, JPG, JPEG, or PNG (Max 10MB)
                </p>
              </div>
            </div>

            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any additional information you'd like to share..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Share any relevant information that might help with your
                    application
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            {/* Review Summary */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                Application Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Name:</strong> {watchedValues.firstName}{" "}
                  {watchedValues.lastName}
                </div>
                <div>
                  <strong>Email:</strong> {watchedValues.email}
                </div>
                <div>
                  <strong>Phone:</strong> {watchedValues.phone}
                </div>
                <div>
                  <strong>Course:</strong>{" "}
                  {courses.find((c) => c.id === watchedValues.course)?.name}
                </div>
                <div>
                  <strong>SEE GPA:</strong> {watchedValues.seeGpa}
                </div>
                <div>
                  <strong>Guardian:</strong> {watchedValues.guardianName}
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
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
                      and confirm that all information provided is accurate. I
                      understand that providing false information may result in
                      the rejection of my application.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-12 text-center bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <FileText className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Online Application
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete your application in simple steps
          </p>

          {/* Show selected course if pre-populated */}
          {selectedCourse && (
            <div className="mt-6 inline-flex items-center space-x-2 bg-green-100 border border-green-300 rounded-full px-6 py-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">
                Applying for: {selectedCourse.name}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;

                return (
                  <div key={step.number} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                          isCompleted
                            ? "bg-green-500 border-green-500 text-white"
                            : isActive
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "bg-gray-100 border-gray-300 text-gray-400"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : (
                          <Icon className="h-6 w-6" />
                        )}
                      </div>
                      <div className="mt-2 text-center">
                        <div
                          className={`text-sm font-medium ${
                            isActive ? "text-blue-600" : "text-gray-500"
                          }`}
                        >
                          {step.title}
                        </div>
                        <div className="text-xs text-gray-400 hidden md:block">
                          {step.description}
                        </div>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`flex-1 h-0.5 mx-4 ${
                          currentStep > step.number
                            ? "bg-green-500"
                            : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  {steps[currentStep - 1].title}
                </CardTitle>
                <p className="text-gray-600">
                  {steps[currentStep - 1].description}
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    {renderStepContent()}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className="flex items-center space-x-2"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Previous</span>
                      </Button>

                      {currentStep < totalSteps ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          disabled={!isCurrentStepValid()}
                          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                        >
                          <span>Next</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={!isCurrentStepValid()}
                          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
                        >
                          <span>Submit Application</span>
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-hero-background bg-cover bg-center font-sans text-white">
      <div className="bg-white min-h-screen">
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-4">
              <FileText className="h-16 w-16 text-blue-300 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-mono text-black font-bold mb-4">
              Apply Online
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Loading application form...
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ApplyForm />
    </Suspense>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FileText,
  User,
  Upload,
  CheckCircle,
} from "lucide-react";

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const courseParam = searchParams.get("course");
  
  // Course mapping - matches the courses from the courses page
  const courses = [
    { id: "1", slug: "plus-two-science", name: "+2 Science", category: "plus2" },
    { id: "2", slug: "plus-two-management", name: "+2 Management", category: "plus2" },
    { id: "3", slug: "diploma-computer-engineering", name: "Diploma in Computer Engineering", category: "diploma" },
    { id: "4", slug: "diploma-civil-engineering", name: "Diploma in Civil Engineering", category: "diploma" },
    { id: "5", slug: "diploma-electrical-engineering", name: "Diploma in Electrical Engineering", category: "diploma" },
    { id: "6", slug: "diploma-mechanical-engineering", name: "Diploma in Mechanical Engineering", category: "diploma" },
  ];

  // Find course by ID or slug
  const findCourseByParam = (param: string) => {
    return courses.find(course => 
      course.id === param || 
      course.slug === param ||
      course.name.toLowerCase().replace(/\s+/g, '-') === param
    );
  };

  const selectedCourse = courseParam ? findCourseByParam(courseParam) : null;
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    course: selectedCourse?.id || "",
    previousSchool: "",
    seeGpa: "",
    guardianName: "",
    guardianPhone: "",
    guardianRelation: "",
    additionalInfo: "",
    agreeToTerms: false,
  });

  // Update course when URL parameter changes
  useEffect(() => {
    if (courseParam) {
      const course = findCourseByParam(courseParam);
      if (course) {
        setFormData(prev => ({
          ...prev,
          course: course.id
        }));
      }
    }
  }, [courseParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Application submitted successfully! We will contact you soon.");
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-hero-background bg-cover bg-center font-sans text-white">
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-4">
              <FileText className="h-16 w-16 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-mono text-black font-bold mb-4">
              Apply Online
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Take the first step towards your bright future. Apply now to join
              Western Mega College.
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

        {/* Application Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <Card className="bg-gray-200 bg-opacity-80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 font-mono">
                      <User className="h-5 w-5" />
                      <span>Personal Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          required
                          className="bg-gray-200 border-gray-600"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          required
                          className="bg-gray-200 border-gray-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          className="bg-gray-200 border-gray-600"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                          className="bg-gray-200 border-gray-600"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        required
                        className="bg-gray-200 border-gray-600"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) =>
                            handleInputChange("dateOfBirth", e.target.value)
                          }
                          required
                          className="bg-gray-200 border-gray-600"
                        />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <Select
                          value={formData.gender}
                          onValueChange={(value) =>
                            handleInputChange("gender", value)
                          }
                        >
                          <SelectTrigger className="bg-gray-200 border-gray-600">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-300 text-white">
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Academic Information */}
                <Card className="bg-gray-300 bg-opacity-80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 font-mono">
                      <FileText className="h-5 w-5" />
                      <span>Academic Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="course">Course Applied For *</Label>
                      <Select
                        value={formData.course}
                        onValueChange={(value) =>
                          handleInputChange("course", value)
                        }
                      >
                        <SelectTrigger className="bg-gray-200 border-gray-600">
                          <SelectValue placeholder="Select course" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-300 text-white">
                          {courses.map((course) => (
                            <SelectItem key={course.id} value={course.id}>
                              {course.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="previousSchool">
                          Previous School/College *
                        </Label>
                        <Input
                          id="previousSchool"
                          value={formData.previousSchool}
                          onChange={(e) =>
                            handleInputChange("previousSchool", e.target.value)
                          }
                          required
                          className="bg-gray-200 border-gray-600"
                        />
                      </div>
                      <div>
                        <Label htmlFor="seeGpa">SEE GPA *</Label>
                        <Input
                          id="seeGpa"
                          type="number"
                          step="0.01"
                          min="0"
                          max="4"
                          value={formData.seeGpa}
                          onChange={(e) =>
                            handleInputChange("seeGpa", e.target.value)
                          }
                          required
                          className="bg-gray-200 border-gray-600"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Guardian Information */}
                <Card className="bg-gray-300 bg-opacity-80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 font-mono">
                      <User className="h-5 w-5" />
                      <span>Guardian Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="guardianName">Guardian Name *</Label>
                        <Input
                          id="guardianName"
                          value={formData.guardianName}
                          onChange={(e) =>
                            handleInputChange("guardianName", e.target.value)
                          }
                          required
                          className="bg-gray-200 border-gray-600"
                        />
                      </div>
                      <div>
                        <Label htmlFor="guardianPhone">Guardian Phone *</Label>
                        <Input
                          id="guardianPhone"
                          type="tel"
                          value={formData.guardianPhone}
                          onChange={(e) =>
                            handleInputChange("guardianPhone", e.target.value)
                          }
                          required
                          className="bg-gray-200 border-gray-600"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="guardianRelation">
                        Relation to Guardian *
                      </Label>
                      <Select
                        value={formData.guardianRelation}
                        onValueChange={(value) =>
                          handleInputChange("guardianRelation", value)
                        }
                      >
                        <SelectTrigger className="bg-gray-200 border-gray-600">
                          <SelectValue placeholder="Select relation" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-300 text-white">
                          <SelectItem value="father">Father</SelectItem>
                          <SelectItem value="mother">Mother</SelectItem>
                          <SelectItem value="uncle">Uncle</SelectItem>
                          <SelectItem value="aunt">Aunt</SelectItem>
                          <SelectItem value="brother">Brother</SelectItem>
                          <SelectItem value="sister">Sister</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Document Upload */}
                <Card className="bg-gray-300 bg-opacity-80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 font-mono">
                      <Upload className="h-5 w-5" />
                      <span>Document Upload</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="seeMarksheet">SEE Marksheet *</Label>
                        <Input
                          id="seeMarksheet"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          required
                          className="bg-gray-200 border-gray-600 "
                        />
                      </div>
                      <div>
                        <Label htmlFor="citizenship">
                          Citizenship/Birth Certificate *
                        </Label>
                        <Input
                          id="citizenship"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          required
                          className="bg-gray-200 border-gray-600 "
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="passport">Passport Size Photo *</Label>
                        <Input
                          id="passport"
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          required
                          className="bg-gray-200 border-gray-600 "
                        />
                      </div>
                      <div>
                        <Label htmlFor="characterCertificate">
                          Character Certificate
                        </Label>
                        <Input
                          id="characterCertificate"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="bg-gray-200 border-gray-600 "
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Information */}
                <Card className="bg-gray-300 bg-opacity-80 border-gray-700">
                  <CardHeader>
                    <CardTitle className="font-mono">Additional Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <Label htmlFor="additionalInfo">
                        Additional Information (Optional)
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) =>
                          handleInputChange("additionalInfo", e.target.value)
                        }
                        placeholder="Any additional information you'd like to share..."
                        rows={4}
                        className="bg-gray-200 border-gray-600"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Terms and Conditions */}
                <Card className="bg-gray-300 bg-opacity-80 border-gray-700">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) =>
                          handleInputChange("agreeToTerms", checked)
                        }
                        className="border-gray-600"
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the{" "}
                        <a
                          href="/terms"
                          className="text-blue-400 hover:underline"
                        >
                          Terms and Conditions
                        </a>{" "}
                        and confirm that all information provided is accurate.
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="px-8 bg-blue-600 hover:bg-blue-700"
                    disabled={!formData.agreeToTerms}
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Calendar, Mail, Phone, School, Send, User } from "lucide-react";
import { AdmissionForm, admissionFormSchema } from "@/types/admission";
import Image from "next/image";

export const defaultAdmissionValues: AdmissionForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
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
            await new Promise(resolve => setTimeout(resolve, 1000));
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
                                Thank you for your interest in our BHM program. Your pre-registration has been received.
                            </p>
                            <p className="text-gray-600 mb-8">
                                Our admission team will contact you shortly with details about the entrance exam and next steps.
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions Open for BHM Program</h1>
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
                                                <li>Students from Science, Commerce, Arts & Humanities</li>
                                                <li>Minimum grade 'C' in all subjects of 11 and 12</li>
                                                <li>OR minimum second division marks in 10+2, PCL or equivalent</li>
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
                                                <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-yellow-700">
                                                    Please keep checking our website for up-to-date information about admission dates and procedures.
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
                    <div className="max-w-3xl mx-auto">
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl text-center">
                                    Pre-Registration Form
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                                                onChange={(e) => {
                                                                    field.onChange(e);
                                                                    console.log("First name changed:", e.target.value);
                                                                }}
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
                                                                onChange={(e) => {
                                                                    field.onChange(e);
                                                                    console.log("Last name changed:", e.target.value);
                                                                }}
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
                                                                onChange={(e) => {
                                                                    field.onChange(e);
                                                                    console.log("Email changed:", e.target.value);
                                                                }}
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
                                                                onChange={(e) => {
                                                                    field.onChange(e);
                                                                    console.log("Phone changed:", e.target.value);
                                                                }}
                                                            />
                                                        </FormControl>
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
                                                        onValueChange={(value) => {
                                                            field.onChange(value);
                                                            console.log("Program selected:", value);
                                                        }}
                                                        value={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select program" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="bhm">Bachelor of Hotel Management (BHM)</SelectItem>
                                                            <SelectItem value="mba">Master of Business Administration (MBA)</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="pt-4">
                                            <Button
                                                type="submit"
                                                className="w-full"
                                                disabled={form.formState.isSubmitting}
                                                onClick={() => {
                                                    console.log("📋 Current form values:", form.getValues());
                                                }}
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
                        Our admission counselors are ready to assist you with any questions about the BHM program or admission process.
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
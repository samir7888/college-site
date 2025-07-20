import { z } from "zod";

// Personal Information Schema
export const personalInfoSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must not exceed 100 characters"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .regex(/^[+]?[\d\s\-()]+$/, "Please enter a valid phone number"),

  address: z
    .string()
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address must not exceed 200 characters"),

  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required")
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 15 && age <= 25;
    }, "Age must be between 15 and 25 years"),

  gender: z.enum(["male", "female", "other"] as const, {
    required_error: "Please select a gender",
    invalid_type_error: "Please select a valid gender option",
  }),
});

// Academic Information Schema
export const academicInfoSchema = z.object({
  course: z.enum(["1", "2", "3", "4", "5", "6"] as const, {
    required_error: "Please select a course",
    invalid_type_error: "Please select a valid course",
  }),

  previousSchool: z
    .string()
    .min(5, "Previous school name must be at least 5 characters")
    .max(100, "Previous school name must not exceed 100 characters"),

  seeGpa: z
    .string()
    .min(1, "SEE GPA is required")
    .refine((val) => {
      const gpa = parseFloat(val);
      return !isNaN(gpa) && gpa >= 1.0 && gpa <= 4.0;
    }, "SEE GPA must be between 1.0 and 4.0"),
});

// Guardian Information Schema
export const guardianInfoSchema = z.object({
  guardianName: z
    .string()
    .min(2, "Guardian name must be at least 2 characters")
    .max(50, "Guardian name must not exceed 50 characters")
    .regex(
      /^[a-zA-Z\s]+$/,
      "Guardian name can only contain letters and spaces"
    ),

  guardianPhone: z
    .string()
    .min(10, "Guardian phone number must be at least 10 digits")
    .max(15, "Guardian phone number must not exceed 15 digits")
    .regex(/^[+]?[\d\s\-()]+$/, "Please enter a valid phone number"),

  guardianRelation: z.enum(
    [
      "father",
      "mother",
      "uncle",
      "aunt",
      "brother",
      "sister",
      "other",
    ] as const,
    {
      required_error: "Please select your relation to guardian",
      invalid_type_error: "Please select a valid relation",
    }
  ),
});

// Document Upload Schema
export const documentUploadSchema = z.object({
  additionalInfo: z
    .string()
    .max(500, "Additional information must not exceed 500 characters")
    .optional(),
});

// Terms and Conditions Schema
export const termsSchema = z.object({
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions to proceed",
  }),
});

// Complete Application Schema
export const completeApplicationSchema = personalInfoSchema
  .merge(academicInfoSchema)
  .merge(guardianInfoSchema)
  .merge(documentUploadSchema)
  .merge(termsSchema);

// Export individual step schemas for step-by-step validation
export const stepSchemas = {
  1: personalInfoSchema,
  2: academicInfoSchema,
  3: guardianInfoSchema,
  4: documentUploadSchema,
  5: termsSchema,
} as const;

// Types
export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type AcademicInfo = z.infer<typeof academicInfoSchema>;
export type GuardianInfo = z.infer<typeof guardianInfoSchema>;
export type DocumentUpload = z.infer<typeof documentUploadSchema>;
export type Terms = z.infer<typeof termsSchema>;
export type CompleteApplication = z.infer<typeof completeApplicationSchema>;

// Validation helper function
export const validateStep = (step: number, data: any) => {
  const schema = stepSchemas[step as keyof typeof stepSchemas];
  if (!schema) {
    return { success: false, errors: { general: "Invalid step" } };
  }

  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  } else {
    const errors: Record<string, string> = {};
    result.error.errors.forEach((error) => {
      const path = error.path.join(".");
      errors[path] = error.message;
    });
    return { success: false, errors };
  }
};

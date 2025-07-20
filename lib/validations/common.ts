import { z } from "zod";

// Common validation patterns
export const commonPatterns = {
  name: /^[a-zA-Z\s]+$/,
  phone: /^[+]?[\d\s\-()]+$/,
  alphanumeric: /^[a-zA-Z0-9\s]+$/,
  noSpecialChars: /^[a-zA-Z0-9\s\-_]+$/,
};

// Common validation schemas that can be reused
export const commonSchemas = {
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must not exceed 100 characters"),

  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(commonPatterns.name, "Name can only contain letters and spaces"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .regex(commonPatterns.phone, "Please enter a valid phone number"),

  optionalPhone: z
    .string()
    .regex(commonPatterns.phone, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),

  gpa: z
    .string()
    .min(1, "GPA is required")
    .refine((val) => {
      const gpa = parseFloat(val);
      return !isNaN(gpa) && gpa >= 1.0 && gpa <= 4.0;
    }, "GPA must be between 1.0 and 4.0"),

  percentage: z
    .string()
    .min(1, "Percentage is required")
    .refine((val) => {
      const percentage = parseFloat(val);
      return !isNaN(percentage) && percentage >= 0 && percentage <= 100;
    }, "Percentage must be between 0 and 100"),

  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required")
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 15 && age <= 30;
    }, "Age must be between 15 and 30 years"),

  requiredString: (fieldName: string, minLength = 1, maxLength = 100) =>
    z
      .string()
      .min(minLength, `${fieldName} must be at least ${minLength} characters`)
      .max(maxLength, `${fieldName} must not exceed ${maxLength} characters`),

  optionalString: (maxLength = 500) =>
    z
      .string()
      .max(maxLength, `Text must not exceed ${maxLength} characters`)
      .optional(),
};

// File validation schemas
export const fileSchemas = {
  image: z
    .any()
    .refine(
      (file) => file?.size <= 5000000,
      "Image size should be less than 5MB"
    )
    .refine(
      (file) => ["image/jpeg", "image/jpg", "image/png"].includes(file?.type),
      "Only JPEG, JPG and PNG images are allowed"
    ),

  document: z
    .any()
    .refine(
      (file) => file?.size <= 10000000,
      "Document size should be less than 10MB"
    )
    .refine(
      (file) =>
        ["application/pdf", "image/jpeg", "image/jpg", "image/png"].includes(
          file?.type
        ),
      "Only PDF, JPEG, JPG and PNG files are allowed"
    ),

  optionalDocument: z
    .any()
    .refine(
      (file) => !file || file?.size <= 10000000,
      "Document size should be less than 10MB"
    )
    .refine(
      (file) =>
        !file ||
        ["application/pdf", "image/jpeg", "image/jpg", "image/png"].includes(
          file?.type
        ),
      "Only PDF, JPEG, JPG and PNG files are allowed"
    )
    .optional(),
};

// Utility function to format validation errors
export const formatValidationErrors = (errors: z.ZodError) => {
  const formattedErrors: Record<string, string> = {};

  errors.errors.forEach((error) => {
    const path = error.path.join(".");
    formattedErrors[path] = error.message;
  });

  return formattedErrors;
};

// Utility function to check if form has errors
export const hasValidationErrors = (errors: Record<string, string>) => {
  return Object.keys(errors).length > 0;
};

// Utility function to get first error message
export const getFirstError = (errors: Record<string, string>) => {
  const firstKey = Object.keys(errors)[0];
  return firstKey ? errors[firstKey] : null;
};

// Generic validation function
export const validateWithSchema = <T>(schema: z.ZodSchema<T>, data: any) => {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true as const, data: result.data };
  } else {
    return {
      success: false as const,
      errors: formatValidationErrors(result.error),
    };
  }
};

// Course validation (specific to this project)
export const courseSchema = z.object({
  id: z.string().min(1, "Course ID is required"),
  name: z.string().min(1, "Course name is required"),
  category: z.enum(["plus2", "diploma"], {
    required_error: "Course category is required",
  }),
});

// Search and filter schemas
export const searchSchema = z.object({
  query: z
    .string()
    .max(100, "Search query must not exceed 100 characters")
    .optional(),
  category: z.string().optional(),
  sortBy: z.enum(["name", "date", "relevance"]).optional(),
  page: z.number().min(1).optional(),
  limit: z.number().min(1).max(100).optional(),
});

export type Course = z.infer<typeof courseSchema>;
export type SearchParams = z.infer<typeof searchSchema>;

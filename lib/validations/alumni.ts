import * as z from "zod";

export const alumniRegistrationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  graduationYear: z.string().min(4, "Please enter a valid graduation year"),
  course: z.string().min(1, "Please select a course"),
  currentCompany: z.string().optional(),
  currentPosition: z.string().optional(),
  location: z.string().optional(),
  linkedinProfile: z
    .string()
    .url("Please enter a valid LinkedIn URL")
    .optional()
    .or(z.literal("")),
  achievements: z.string().optional(),
  testimonial: z.string().optional(),
  // We'll handle the file validation separately in the component
  profilePhoto: z.any().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export type AlumniRegistration = z.infer<typeof alumniRegistrationSchema>;

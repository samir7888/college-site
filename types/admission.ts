import { z } from "zod";

export const admissionFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(7, {
    message: "Phone number must be at least 7 digits.",
  }),
  program: z.string().min(1, {
    message: "Please select a program.",
  }),
});

export type AdmissionForm = z.infer<typeof admissionFormSchema>;
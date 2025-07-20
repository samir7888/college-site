// Contact form types
export type InquiryType =
  | "general"
  | "admission"
  | "academic"
  | "technical"
  | "support"
  | "other";

// Contact form data interface
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  inquiryType: InquiryType;
}

// Default form values
export const defaultContactValues: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  inquiryType: "general",
};

// Inquiry type options
export const inquiryTypeOptions: { value: InquiryType; label: string }[] = [
  { value: "general", label: "General Inquiry" },
  { value: "admission", label: "Admissions" },
  { value: "academic", label: "Academic Information" },
  { value: "technical", label: "Technical Support" },
  { value: "support", label: "Student Support" },
  { value: "other", label: "Other" },
];

// Newsletter subscription interface
export interface NewsletterData {
  email: string;
}

// Default newsletter values
export const defaultNewsletterValues: NewsletterData = {
  email: "",
};

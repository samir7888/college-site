// Application form types
export type Gender = "male" | "female" | "other";

export type GuardianRelation =
  | "father"
  | "mother"
  | "uncle"
  | "aunt"
  | "brother"
  | "sister"
  | "other";

export type CourseId = "1" | "2" | "3" | "4" | "5" | "6";

export interface Course {
  id: CourseId;
  slug: string;
  name: string;
  category: "plus2" | "diploma";
}

// Application form data interface
export interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  gender: Gender;
  course: CourseId;
  previousSchool: string;
  seeGpa: string;
  guardianName: string;
  guardianPhone: string;
  guardianRelation: GuardianRelation;
  additionalInfo?: string;
  agreeToTerms: boolean;
}

// Default form values
export const defaultFormValues: ApplicationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  dateOfBirth: "",
  gender: "male",
  course: "1",
  previousSchool: "",
  seeGpa: "",
  guardianName: "",
  guardianPhone: "",
  guardianRelation: "father",
  additionalInfo: "",
  agreeToTerms: false,
};

// Course options
export const courseOptions: Course[] = [
  {
    id: "1",
    slug: "plus-two-science",
    name: "+2 Science",
    category: "plus2",
  },
  {
    id: "2",
    slug: "plus-two-management",
    name: "+2 Management",
    category: "plus2",
  },
  {
    id: "3",
    slug: "diploma-computer-engineering",
    name: "Diploma in Computer Engineering",
    category: "diploma",
  },
  {
    id: "4",
    slug: "diploma-civil-engineering",
    name: "Diploma in Civil Engineering",
    category: "diploma",
  },
  {
    id: "5",
    slug: "diploma-electrical-engineering",
    name: "Diploma in Electrical Engineering",
    category: "diploma",
  },
  {
    id: "6",
    slug: "diploma-mechanical-engineering",
    name: "Diploma in Mechanical Engineering",
    category: "diploma",
  },
];

// Gender options
export const genderOptions: { value: Gender; label: string }[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

// Guardian relation options
export const guardianRelationOptions: {
  value: GuardianRelation;
  label: string;
}[] = [
  { value: "father", label: "Father" },
  { value: "mother", label: "Mother" },
  { value: "uncle", label: "Uncle" },
  { value: "aunt", label: "Aunt" },
  { value: "brother", label: "Brother" },
  { value: "sister", label: "Sister" },
  { value: "other", label: "Other" },
];

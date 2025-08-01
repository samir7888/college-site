import { z } from "zod";

export const admissionFormSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  middleName: z.string().optional(),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(7, {
    message: "Phone number must be at least 7 digits.",
  }),
  dateOfBirthAD: z.string().min(1, {
    message: "Date of birth (AD) is required.",
  }),
  dateOfBirthBS: z.string().optional(),
  religion: z.string().min(1, {
    message: "Please select your religion.",
  }),
  maritalStatus: z.enum(["single", "married", "divorced", "widowed"], {
    message: "Please select your marital status.",
  }),
  program: z.string().min(1, {
    message: "Please select a program.",
  }),

  // Permanent Address
  permanentProvince: z.string().min(1, {
    message: "Province is required.",
  }),
  permanentDistrict: z.string().min(1, {
    message: "District is required.",
  }),
  permanentVdcMunicipality: z.string().min(1, {
    message: "VDC/Municipality is required.",
  }),
  permanentWardNo: z.string().min(1, {
    message: "Ward number is required.",
  }),

  // Current Address
  currentProvince: z.string().min(1, {
    message: "Province is required.",
  }),
  currentDistrict: z.string().min(1, {
    message: "District is required.",
  }),
  currentVdcMunicipality: z.string().min(1, {
    message: "VDC/Municipality is required.",
  }),
  currentWardNo: z.string().min(1, {
    message: "Ward number is required.",
  }),

  // Parent/Guardian Details
  fatherName: z.string().min(2, {
    message: "Father's name must be at least 2 characters.",
  }),
  fatherOccupation: z.string().min(1, {
    message: "Father's occupation is required.",
  }),
  fatherContactNo: z.string().min(7, {
    message: "Father's contact number must be at least 7 digits.",
  }),
  motherName: z.string().min(2, {
    message: "Mother's name must be at least 2 characters.",
  }),
  motherOccupation: z.string().min(1, {
    message: "Mother's occupation is required.",
  }),
  motherContactNo: z.string().min(7, {
    message: "Mother's contact number must be at least 7 digits.",
  }),

  // Bus Facility
  busFacility: z.boolean().default(false),
  busStation: z.string().optional(),

  // Academic Qualifications (3 rows)
  academic1Level: z.string().min(1, { message: "Level is required." }),
  academic1Board: z.string().min(1, { message: "Board is required." }),
  academic1Year: z.string().min(1, { message: "Year is required." }),
  academic1SymbolNo: z
    .string()
    .min(1, { message: "Symbol number is required." }),
  academic1Institute: z
    .string()
    .min(1, { message: "Institute name is required." }),
  academic1CgpaPercentage: z
    .string()
    .min(1, { message: "CGPA/Percentage is required." }),

  academic2Level: z.string().optional(),
  academic2Board: z.string().optional(),
  academic2Year: z.string().optional(),
  academic2SymbolNo: z.string().optional(),
  academic2Institute: z.string().optional(),
  academic2CgpaPercentage: z.string().optional(),

  academic3Level: z.string().optional(),
  academic3Board: z.string().optional(),
  academic3Year: z.string().optional(),
  academic3SymbolNo: z.string().optional(),
  academic3Institute: z.string().optional(),
  academic3CgpaPercentage: z.string().optional(),
});

export type AdmissionForm = z.infer<typeof admissionFormSchema>;

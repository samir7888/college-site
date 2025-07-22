export const defaultAlumniValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  graduationYear: "",
  course: "",
  currentCompany: "",
  currentPosition: "",
  location: "",
  linkedinProfile: "",
  achievements: "",
  testimonial: "",
  profilePhoto: null,
  agreeToTerms: false,
};

export const courseOptions = [
  { value: "plus2-science", label: "+2 Science" },
  { value: "plus2-management", label: "+2 Management" },
  { value: "diploma-computer", label: "Diploma in Computer Engineering" },
  { value: "diploma-civil", label: "Diploma in Civil Engineering" },
  { value: "diploma-electrical", label: "Diploma in Electrical Engineering" },
];

export const graduationYearOptions = Array.from({ length: 20 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return { value: year.toString(), label: year.toString() };
});

// Shared testimonials data for consistency across the application
export const testimonialsData = [
  {
    id: 1,
    name: "Prabina Ghimire",
    designation: "Executive Director at Metals Cast Pvt Ltd",
    program: "MBA",
    testimonial:
      "What I loved most about the MBA program at WMC was how practical and thoughtfully designed it was, especially for someone like me who was already in the workforce. It gave me the flexibility to grow and learn without having to put my career on hold. Thanks to the supportive faculty and a curriculum that tackled real-world challenges, I was able to make a real and immediate impact at work.",
    linkedin: "https://www.linkedin.com/in/er-prabina-ghimire-a18034378/",
    image: "/testimonials/Prabina.png",
    featured: true,
  },
  {
    id: 2,
    name: "Samata Upadhyaya",
    designation: "Experience Manager at NIC Asia Bank (Buddhachok Branch)",
    program: "MBA",
    testimonial:
      "My time at Western Mega College was truly life-changing. Earning my MBA was so much more than just getting a degree—it was a journey that transformed me, both personally and professionally.\n\nThe practical teaching style, the flexibility of the program, and the strong emphasis on leadership, critical thinking, and communication equipped me perfectly for the banking sector. \n\nI can honestly say that the skills, confidence, and values I gained at WMC are the foundation of my success today.",
    linkedin: null,
    image: "/testimonials/samata.png",
    featured: true,
  },
  {
    id: 3,
    name: "Manoj Bhattarai",
    designation: "Relationship Manager at Prime Commercial Bank",
    program: "MBA",
    testimonial:
      "There comes a moment when everything in your life just clicks, not because of luck, but because you finally find the right place to build from. For me, that place was Western Mega College.\n\nI joined the MBA program carrying dreams, yes, but also doubt. I was working full-time, trying to climb a ladder. What I needed wasn't just a degree, but clarity, strength, and real tools to lead. WMC didn't just hand me a syllabus; it sparked a transformation in me.",
    linkedin: "https://www.linkedin.com/in/manoj-bhattarai-485264287/",
    image: "/testimonials/manoj.png",
    featured: false,
  },
  {
    id: 4,
    name: "Nirmal Pokharel",
    designation: "Commi at Radisson Blu Bengaluru Outer Ring Road, India",
    program: "BHM",
    testimonial:
      "My internship was a success because the college's structured training gave me the confidence to apply my knowledge in a real hotel environment. Thanks to Western Mega College, I am now confidently working as a Commis at Hotel Radisson Blu Bengaluru Outer Ring Road. The college gave me not just an education, but a clear career path for which I am incredibly grateful.",
    linkedin: "https://www.linkedin.com/in/nirmal-pokharel-b0005428b",
    image: "/testimonials/nirmal.png",
    featured: true,
  },
  {
    id: 5,
    name: "Aruna Salami",
    designation: "Sushi Chef at Honjo- Modern Japanese Restaurant, Hong Kong",
    program: "BHM",
    testimonial:
      "My passion for cuisines and culture led me to WMC, and I'm so grateful it did! The SCHOTEL model of teaching was an incredible experience that gave me the real-world skills and confidence to chase my dreams. Now, I'm excitedly taking my footsteps into the wonderful world of hospitality!",
    linkedin: "https://www.linkedin.com/in/aruna-salami-13475a260/",
    image: "/testimonials/aruna.png",
    featured: false,
  },
  {
    id: 6,
    name: "Madan Shrestha",
    designation: "commis III at Bvlgari Hotels & Resorts, Dubai",
    program: "BHM",
    testimonial:
      "At WMC, my education went beyond the classroom—it was a journey of mentorship and personal growth. I landed an internship as an Assistant Villa Butler at a prestigious hotel in Dubai, a dream come true. \n\nMy hard work earned me a full-time offer before graduation. Today, I'm living my dream as a hospitality professional, blending service with culinary art. Western Mega College didn't just teach me—it prepared me for the world.",
    linkedin: "https://www.linkedin.com/in/madan-shrestha-133a15263/",
    image: "/testimonials/madan.png",
    featured: true,
  },
];

export const getTestimonialById = (id: number) => {
  return testimonialsData.find((testimonial) => testimonial.id === id);
};

export const getFeaturedTestimonials = () => {
  return testimonialsData.filter((testimonial) => testimonial.featured);
};

export const getTestimonialsByProgram = (program: string) => {
  return testimonialsData.filter(
    (testimonial) => testimonial.program === program
  );
};

export const getMBATestimonials = () => {
  return testimonialsData.filter(
    (testimonial) => testimonial.program === "MBA"
  );
};

export const getBHMTestimonials = () => {
  return testimonialsData.filter(
    (testimonial) => testimonial.program === "BHM"
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQsSection() {
  const faqs = [
    {
      id: "faq-1",
      question: "What programs does Western Mega College offer?",
      answer:
        "Western Mega College offers a wide range of programs including +2 Science, +2 Management, and various Diploma programs. Our curriculum is designed to provide students with both theoretical knowledge and practical skills needed for their future careers.",
    },
    {
      id: "faq-2",
      question: "How can I apply for admission?",
      answer:
        "You can apply for admission by filling out our online application form on the website, or by visiting our campus in person. Required documents typically include academic transcripts, identification documents, and passport-sized photographs. Our admissions team is available to guide you through the process.",
    },
    {
      id: "faq-3",
      question: "Are scholarships available for students?",
      answer:
        "Yes, Western Mega College offers various scholarship programs based on academic merit, financial need, and extracurricular achievements. We believe in making quality education accessible to deserving students. Please contact our financial aid office for specific scholarship opportunities and eligibility criteria.",
    },
    {
      id: "faq-4",
      question: "What facilities are available on campus?",
      answer:
        "Our campus features modern classrooms, well-equipped laboratories, a comprehensive library, computer labs with high-speed internet, sports facilities, a cafeteria, and dedicated study areas. We continuously invest in our infrastructure to provide an optimal learning environment for our students.",
    },
    {
      id: "faq-5",
      question: "Does the college provide internship opportunities?",
      answer:
        "Yes, we have strong partnerships with various industries and organizations that provide internship opportunities to our students. Our career services department works closely with students to secure internships that align with their academic and career goals, giving them valuable real-world experience.",
    },
    {
      id: "faq-6",
      question: "What is the faculty-to-student ratio?",
      answer:
        "We maintain a low faculty-to-student ratio to ensure personalized attention and quality education. Our typical class sizes range from 30-40 students, allowing for interactive learning and individual guidance from our experienced faculty members.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-blue-600"></div>
            <span className="text-blue-600 font-medium">FAQs</span>
            <div className="w-8 h-1 bg-blue-600"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Find answers to common questions about Western Mega College, our
            programs, admission process, and campus facilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-lg shadow-md p-8"
          >
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pl-8 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-blue-600 font-medium hover:underline"
              >
                Contact us
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

export function IndustryConnectionsSection() {
  // Array of company logos - using placeholder logos
  const companyLogos = [
    {
      id: 1,
      name: "Microsoft",
      logo: "https://placehold.co/200x80/FFFFFF/0969DA/png?text=Microsoft",
    },
    {
      id: 2,
      name: "Google",
      logo: "https://placehold.co/200x80/FFFFFF/EA4335/png?text=Google",
    },
    {
      id: 3,
      name: "Amazon",
      logo: "https://placehold.co/200x80/FFFFFF/FF9900/png?text=Amazon",
    },
    {
      id: 4,
      name: "IBM",
      logo: "https://placehold.co/200x80/FFFFFF/0530AD/png?text=IBM",
    },
    {
      id: 5,
      name: "Deloitte",
      logo: "https://placehold.co/200x80/FFFFFF/86BC25/png?text=Deloitte",
    },
    {
      id: 6,
      name: "KPMG",
      logo: "https://placehold.co/200x80/FFFFFF/00338D/png?text=KPMG",
    },
    {
      id: 7,
      name: "Accenture",
      logo: "https://placehold.co/200x80/FFFFFF/A100FF/png?text=Accenture",
    },
    {
      id: 8,
      name: "Oracle",
      logo: "https://placehold.co/200x80/FFFFFF/F80000/png?text=Oracle",
    },
    {
      id: 9,
      name: "Cisco",
      logo: "https://placehold.co/200x80/FFFFFF/1BA0D7/png?text=Cisco",
    },
    {
      id: 10,
      name: "Intel",
      logo: "https://placehold.co/200x80/FFFFFF/0071C5/png?text=Intel",
    },
    {
      id: 11,
      name: "Samsung",
      logo: "https://placehold.co/200x80/FFFFFF/1428A0/png?text=Samsung",
    },
    {
      id: 12,
      name: "Apple",
      logo: "https://placehold.co/200x80/FFFFFF/555555/png?text=Apple",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-blue-600"></div>
            <span className="text-blue-600 font-medium">
              Industry Connections
            </span>
            <div className="w-8 h-1 bg-blue-600"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Corporate Partners
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Western Mega College has established strong partnerships with
            leading companies and organizations worldwide, providing our
            students with real-world exposure and career opportunities.
          </p>
        </div>

        {/* Logo marquee with fading edges */}
        <div className="relative w-full overflow-hidden">
          {/* Left fade effect */}
          <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent"></div>

          {/* Right fade effect */}
          <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent"></div>

          {/* Outer container to manage overflow */}
          <div className="py-4 overflow-hidden whitespace-nowrap">
            {/* Auto-scrolling logos container */}
            <div className="inline-flex animate-marquee">
              {/* First set of logos */}
              {companyLogos.map((company) => (
                <div key={company.id} className="flex-shrink-0 mx-8">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={200}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}

              {/* Duplicate set of logos for seamless looping */}
              {companyLogos.map((company) => (
                <div key={`dup-${company.id}`} className="flex-shrink-0 mx-8">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={200}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            These partnerships enable internships, industry projects, guest
            lectures, and employment opportunities for our students, ensuring
            they graduate with practical skills and industry connections.
          </p>
        </div>
      </div>
    </section>
  );
}

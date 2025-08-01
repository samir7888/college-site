// Shared news data for consistency across the application
export const newsData = [
  {
    id: 1,
    title: "BHM Students Host Annual Hospitality Festival",
    excerpt:
      "Showcasing culinary arts, event management, and hospitality skills with industry guests attending.",
    content: `
      <p>Western Mega College's BHM students successfully organized the Annual Hospitality Festival, a three-day event that showcased the exceptional skills and talents of our hospitality management students.</p>
      
      <p>The festival featured various activities and competitions designed to highlight the practical skills students have developed throughout their BHM program:</p>
      
      <h3>Event Highlights</h3>
      <ul>
        <li>Culinary Arts Competition - Students prepared gourmet dishes judged by professional chefs</li>
        <li>Event Management Showcase - Live demonstration of event planning and execution</li>
        <li>Hotel Operations Simulation - Real-time hotel management scenarios</li>
        <li>Customer Service Excellence Workshop - Interactive sessions with industry experts</li>
        <li>Food & Beverage Service Competition - Professional service standards demonstration</li>
      </ul>
      
      <p>The festival attracted over 200 industry professionals, including hotel managers, restaurant owners, and tourism operators who served as judges and mentors for the students.</p>
      
      <blockquote>
        "This festival perfectly demonstrates the practical skills our BHM students develop. They're not just learning theory - they're gaining real-world experience that makes them industry-ready upon graduation."
      </blockquote>
      
      <p>Several students received job offers from attending industry representatives, highlighting the quality of education and training provided in our BHM program.</p>
      
      <p>The event concluded with an awards ceremony where outstanding performers were recognized for their excellence in various categories. The festival has become an annual tradition that bridges the gap between academic learning and industry requirements.</p>
    `,
    date: "April 10, 2024",
    image: "/image3.JPG",
    category: "BHM Event",
    author: "BHM Department",
    featured: true,
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "MBA Seminar on Digital Marketing Trends",
    excerpt:
      "Industry experts share insights on the latest digital marketing strategies and tools.",
    content: `
      <p>The MBA program at Western Mega College hosted a comprehensive seminar on Digital Marketing Trends, bringing together industry experts and students for an enlightening discussion on the future of digital marketing.</p>
      
      <p>The seminar covered cutting-edge topics that are shaping the digital marketing landscape:</p>
      
      <h3>Key Topics Covered</h3>
      <ul>
        <li>Artificial Intelligence in Marketing Automation</li>
        <li>Social Media Marketing Strategies for 2024</li>
        <li>Data Analytics and Consumer Behavior Insights</li>
        <li>Content Marketing and Brand Storytelling</li>
        <li>E-commerce and Digital Sales Funnels</li>
        <li>Influencer Marketing and Partnership Strategies</li>
      </ul>
      
      <p>The seminar featured renowned speakers from leading marketing agencies and tech companies who shared their practical experiences and industry insights.</p>
      
      <h3>Expert Speakers</h3>
      <ul>
        <li>Sarah Johnson - Digital Marketing Director at TechCorp</li>
        <li>Michael Chen - Social Media Strategy Consultant</li>
        <li>Dr. Priya Sharma - Marketing Analytics Expert</li>
        <li>Raj Patel - E-commerce Growth Specialist</li>
      </ul>
      
      <p>Students had the opportunity to participate in interactive workshops, case study discussions, and networking sessions with industry professionals.</p>
      
      <blockquote>
        "The digital marketing landscape is evolving rapidly. Our MBA students need to stay ahead of these trends to become effective marketing leaders in their future careers."
      </blockquote>
      
      <p>The seminar concluded with a panel discussion where students could ask questions directly to the experts, gaining valuable insights into career opportunities in digital marketing.</p>
      
      <p>Many students expressed their appreciation for the practical knowledge gained and the networking opportunities provided during the event.</p>
    `,
    date: "March 28, 2024",
    image: "/image2.JPG",
    category: "MBA Seminar",
    author: "MBA Department",
    featured: true,
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Scholarships for BHM and MBA Students Announced",
    excerpt:
      "Merit-based and need-based scholarships available for deserving candidates in BHM and MBA programs.",
    content: `
      <p>Western Mega College is pleased to announce the launch of comprehensive scholarship programs specifically designed for BHM and MBA students, making quality education more accessible to deserving candidates.</p>
      
      <p>The scholarship program offers multiple categories of financial assistance tailored to the needs of hospitality and business management students:</p>
      
      <h3>BHM Scholarship Categories</h3>
      <ul>
        <li>Hospitality Excellence Scholarship - Up to 75% tuition coverage</li>
        <li>Culinary Arts Scholarship for students with exceptional cooking skills</li>
        <li>Event Management Innovation Award</li>
        <li>Tourism Industry Partnership Scholarship</li>
      </ul>
      
      <h3>MBA Scholarship Categories</h3>
      <ul>
        <li>Business Leadership Scholarship - Up to 80% tuition coverage</li>
        <li>Entrepreneurship and Innovation Award</li>
        <li>Finance and Investment Excellence Scholarship</li>
        <li>Marketing and Sales Achievement Award</li>
      </ul>
      
      <h3>General Scholarship Categories</h3>
      <ul>
        <li>Merit-Based Scholarships for academic excellence</li>
        <li>Need-Based Financial Assistance</li>
        <li>Rural Student Support Initiative</li>
        <li>Women in Business Leadership Scholarship</li>
      </ul>
      
      <p>The scholarship program has been made possible through partnerships with leading hotels, restaurants, business organizations, and generous alumni contributions.</p>
      
      <blockquote>
        "We believe that financial constraints should never limit a student's potential. These scholarships will help talented individuals pursue their dreams in hospitality and business management."
      </blockquote>
      
      <h3>Application Process</h3>
      <p>Interested students can apply through the following process:</p>
      <ul>
        <li>Complete the online scholarship application form</li>
        <li>Submit academic transcripts and certificates</li>
        <li>Provide a personal statement outlining career goals</li>
        <li>Include letters of recommendation from teachers or employers</li>
        <li>Attend an interview session (for selected candidates)</li>
      </ul>
      
      <p>Applications are now open and will be accepted until May 15, 2024. The selection committee will announce results by June 1, 2024.</p>
      
      <p>For more information and application forms, students can visit the Student Affairs office or check the college website.</p>
    `,
    date: "March 15, 2024",
    image: "/image1.JPG",
    category: "Scholarships",
    author: "Student Affairs",
    featured: false,
    readTime: "6 min read",
  },
];

export const getNewsById = (id: number) => {
  return newsData.find((news) => news.id === id);
};

export const getFeaturedNews = () => {
  return newsData.filter((news) => news.featured);
};

export const getRegularNews = () => {
  return newsData.filter((news) => !news.featured);
};

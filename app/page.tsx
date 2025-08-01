import { HeroSection } from "@/components/HeroSection";
import { UniversitySection } from "@/components/UniversitySection";
import { AboutSection } from "@/components/AboutSection";
import { CoursesSection } from "@/components/CoursesSection";
import { NewsSection } from "@/components/NewsSection";
import { BlogSection } from "@/components/BlogSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StatsSection } from "@/components/StatsSection";
import { IndustryConnectionsSection } from "@/components/IndustryConnectionsSection";
import { FAQsSection } from "@/components/FAQsSection";

export default function Home() {
  return (
    <div className="min-h-screen -mt-32">
      <HeroSection />
      <UniversitySection />
      <AboutSection />
      <CoursesSection />
      <StatsSection />
      <NewsSection />
      <BlogSection />
      <TestimonialsSection />
      <IndustryConnectionsSection />
      <FAQsSection />
    </div>
  );
}

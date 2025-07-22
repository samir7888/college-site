import { HeroSection } from "@/components/HeroSection";
import { UniversitySection } from "@/components/UniversitySection";
import { AboutSection } from "@/components/AboutSection";
import { CoursesSection } from "@/components/CoursesSection";
import { AlumniSection } from "@/components/AlumniSection";
import { NewsSection } from "@/components/NewsSection";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen -mt-32">
      <HeroSection />
      <UniversitySection />
      <AboutSection />
      <CoursesSection />
      <StatsSection />
      <AlumniSection />
      <NewsSection />
    </div>
  );
}

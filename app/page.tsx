import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CoursesSection } from '@/components/CoursesSection';
import { FacultySection } from '@/components/FacultySection';
import { NewsSection } from '@/components/NewsSection';
import { StatsSection } from '@/components/StatsSection';

export default function Home() {
  return (
    <div className="min-h-screen -mt-32">
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <StatsSection />
      <FacultySection />
      <NewsSection />
    </div>
  );
}
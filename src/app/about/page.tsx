// File: src/app/about/page.tsx

import HeroSection from '@/app/about/HeroSection';
import ServicesSection from '@/app/about/ServicesSection';
import ChooseUsSection from '@/app/about/ChooseUsSection';
import TechStackSection from '@/app/about/TechStackSection';
import CTASection from '@/app/about/CTASection';

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 text-blue-900">
      <main>
        <HeroSection />
        <ServicesSection />
        <ChooseUsSection />
        <TechStackSection />
        <CTASection />
      </main>
    </div>
  );
}

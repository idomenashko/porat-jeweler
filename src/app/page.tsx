import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { EngagementSection } from '@/components/sections/EngagementSection';
import { DiamondsSection } from '@/components/sections/DiamondsSection';
import { ConsultationCTASection } from '@/components/sections/ConsultationCTASection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { JournalSection } from '@/components/sections/JournalSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { JsonLd } from '@/components/JsonLd';

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'PORAT — Private Jeweler',
  description: 'סטודיו תכשיטים פרטי. טבעות אירוסין, תכשיטים בעיצוב אישי, ייעוץ יהלומים.',
  url: 'https://porat-jeweler.co.il',
  telephone: '+972-50-0000000',
  areaServed: 'IL',
  serviceType: 'Jewelry Design',
  priceRange: '₪₪₪',
  inLanguage: 'he',
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={professionalServiceSchema} />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <EngagementSection />
      <DiamondsSection />
      <ConsultationCTASection />
      <TestimonialsSection />
      <JournalSection />
      <ContactSection />
    </>
  );
}

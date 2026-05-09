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
import { getSiteSettings, getServices, getGalleryItems, getTestimonials, getArticles, getContactFormSettings } from '@/sanity/queries';

export const revalidate = 60;

export default async function HomePage() {
  const [siteSettings, services, galleryItems, testimonials, articles, contactFormSettings] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getGalleryItems(true), // featured only
    getTestimonials(),
    getArticles(),
    getContactFormSettings(),
  ]);

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'PORAT — Private Jeweler',
    description: siteSettings?.description ?? 'סטודיו תכשיטים פרטי. טבעות אירוסין, תכשיטים בעיצוב אישי, ייעוץ יהלומים.',
    url: 'https://porat-jeweler.co.il',
    telephone: siteSettings?.phone ?? '+972-50-0000000',
    areaServed: 'IL',
    serviceType: 'Jewelry Design',
    priceRange: '₪₪₪',
    inLanguage: 'he',
  };

  return (
    <>
      <JsonLd data={professionalServiceSchema} />
      <HeroSection />
      <IntroSection />
      <ServicesSection services={services} />
      <ProcessSection />
      <PortfolioSection galleryItems={galleryItems} />
      <EngagementSection />
      <DiamondsSection />
      <ConsultationCTASection />
      <TestimonialsSection testimonials={testimonials} />
      <JournalSection articles={articles} />
      <ContactSection contactFormSettings={contactFormSettings} />
    </>
  );
}

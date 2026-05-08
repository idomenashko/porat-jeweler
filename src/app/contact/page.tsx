import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';
import { JsonLd } from '@/components/JsonLd';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'צור קשר | קביעת פגישה פרטית',
  description: 'קביעת פגישה פרטית עם PORAT — צורף פרטי. שיחה ראשונה ללא התחייבות, שירות בכל רחבי ישראל.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PORAT — Private Jeweler',
  description: 'סטודיו תכשיטים פרטי. טבעות אירוסין, תכשיטים בעיצוב אישי, ייעוץ יהלומים.',
  url: 'https://porat-jeweler.co.il',
  telephone: '+972-50-0000000',
  areaServed: 'IL',
  priceRange: '₪₪₪',
  inLanguage: 'he',
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'צור קשר | PORAT — Private Jeweler',
  url: 'https://porat-jeweler.co.il/contact',
  description: 'קביעת פגישה פרטית עם PORAT — צורף פרטי. שיחה ראשונה ללא התחייבות, שירות בכל רחבי ישראל.',
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={contactPageSchema} />
      <ContactSection />
    </>
  );
}

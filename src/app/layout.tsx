import type { Metadata } from 'next';
import { cormorant, assistant, jetbrainsMono, notoSerifHebrew } from '@/lib/fonts';
import { Footer } from '@/components/layout/Footer';
import { ClientShell } from './ClientShell';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'PORAT — Private Jeweler | תכשיטים בעיצוב אישי',
    template: '%s | PORAT',
  },
  description: 'סטודיו תכשיטים פרטי. טבעות אירוסין, תכשיטים בעיצוב אישי, ייעוץ יהלומים. שירות אישי מלא בכל רחבי ישראל.',
  metadataBase: new URL('https://porat-jeweler.co.il'),
  openGraph: {
    type: 'website',
    title: 'PORAT — Private Jeweler | תכשיטים בעיצוב אישי',
    description: 'סטודיו תכשיטים פרטי. טבעות אירוסין, תכשיטים בעיצוב אישי, ייעוץ יהלומים. שירות אישי מלא בכל רחבי ישראל.',
    locale: 'he_IL',
    siteName: 'PORAT',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://porat-jeweler.co.il',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${cormorant.variable} ${assistant.variable} ${jetbrainsMono.variable} ${notoSerifHebrew.variable}`}
    >
      <body>
        <ClientShell>{children}</ClientShell>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { notFound } from 'next/navigation';
import { getServices, getServiceBySlug } from '@/sanity/queries';

export const revalidate = 60;

const SERVICES = [
  { num: '01', he: 'טבעות אירוסין בהתאמה אישית', en: 'Bespoke Engagement', desc: 'סוליטר, פאווה, שלושה יהלומים — בעיצוב חד-פעמי.', slug: 'bespoke-engagement', body: 'כל טבעת אירוסין שנוצרת בסטודיו שלנו היא יחידה במינה. מהייעוץ הראשון לבחירת היהלום, דרך הסקיצה והדמיית תלת-ממד, ועד לייצור בעבודת יד — כל שלב מלווה אתכם אישית.' },
  { num: '02', he: 'טבעות נישואין', en: 'Wedding Bands', desc: 'זוגות תואמים, חריטה אישית, פלטינה וזהב 18K.', slug: 'wedding-bands', body: 'טבעות הנישואין שלנו מיוצרות בזוגות תואמים. כל טבעת מותאמת לאיש ולאישה, עם אפשרות לחריטה אישית — תאריך, שם, או מילה שרק שניכם מבינים.' },
  { num: '03', he: 'יהלומים', en: 'Diamonds', desc: 'יהלומים מוסמכי GIA, ליווי בבחירת אבן יחידה במינה.', slug: 'diamonds', body: 'אנו עובדים עם יהלומים מוסמכי GIA בלבד. כל אבן נבחרת בקפידה עבורכם — בהתאם לתקציב, לטעם, ולסיפור שלכם.' },
  { num: '04', he: 'תכשיטים בעיצוב אישי', en: 'Custom Jewelry', desc: 'שרשראות, צמידים ועגילים — מהסקיצה ועד התוצר.', slug: 'custom-jewelry', body: 'מתנה מיוחדת, זיכרון שרוצים לשמר, או תכשיט שתמיד חלמתם עליו — אנו נהפוך את הרעיון לעולם.' },
  { num: '05', he: 'זהב וכסף', en: 'Gold & Silver', desc: 'זהב 14K / 18K, פלטינה וכסף סטרלינג בעבודת יד.', slug: 'gold-silver', body: 'אנו עובדים עם זהב 14K ו-18K (לבן, צהוב, ורוד), פלטינה, וכסף סטרלינג 925. כל חומר מותאם לסגנון ולשימוש.' },
  { num: '06', he: 'שיבוץ יהלומים', en: 'Stone Setting', desc: 'שיבוץ קלאסי או מודרני, בעבודת צורפות עדינה.', slug: 'stone-setting', body: 'שיבוץ הוא אמנות בפני עצמה. משיבוץ קלאסי בצבת ועד שיבוץ מודרני בפאווה, כל עבודה נעשית ביד ובעדינות.' },
  { num: '07', he: 'חריטות', en: 'Engraving', desc: 'חריטה ידנית או לייזר — תאריך, שם, אות אישית.', slug: 'engraving', body: 'חריטה הופכת תכשיט למשהו שיותר אישי. תאריך החתונה, שם בן הזוג, ציטוט — בחריטה ידנית או לייזר.' },
  { num: '08', he: 'תיקון וחידוש תכשיטים', en: 'Restoration', desc: 'החזרת ברק לתכשיטים יקרים — ניקוי, שיוף, תיקון.', slug: 'restoration', body: 'תכשיט ישן יכול לחזור לחיים. ניקוי מקצועי, שיוף, החלפת שיבוץ, תיקון קלאספ — אנו מחזירים את הניצוץ לתכשיטים שאהבתם.' },
  { num: '09', he: 'קנייה ומכירה של זהב ויהלומים', en: 'Buy & Sell', desc: 'הערכה מקצועית והוגנת לזהב וליהלומים.', slug: 'buy-sell', body: 'רוצים לממש תכשיט ישן? מחפשים יהלום שימושי? אנו מציעים הערכה מקצועית, הוגנת ושקופה.' },
  { num: '10', he: 'תכשיטים מוכנים', en: 'Ready-to-Wear', desc: 'אוסף מצומצם של חתיכות מוכנות, מוגבל בעותקים.', slug: 'ready-to-wear', body: 'אוסף קטן ומיוחד של תכשיטים מוכנים — כל אחד קיים בעותק אחד בלבד. מושלם כמתנה או לשימוש מיידי.' },
];

export async function generateStaticParams() {
  const sanityServices = await getServices();
  const sanityParams = sanityServices
    .filter(s => s.slug?.current)
    .map(s => ({ slug: s.slug!.current! }));

  const hardcodedParams = SERVICES
    .filter(s => !sanityParams.some(p => p.slug === s.slug))
    .map(s => ({ slug: s.slug }));

  return [...sanityParams, ...hardcodedParams];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const sanityService = await getServiceBySlug(slug);
  if (sanityService) {
    return {
      title: `${sanityService.title ?? ''} | PORAT — Private Jeweler`,
      description: sanityService.description ?? '',
    };
  }

  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: 'שירות לא נמצא' };
  return {
    title: `${service.he} | PORAT — Private Jeweler`,
    description: service.desc,
  };
}

interface ServiceData {
  num: string;
  he: string;
  en: string;
  desc: string;
  body: string;
}

function ServicePageContent({ service }: { service: ServiceData }) {
  return (
    <div style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-paper)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <div style={{ marginBottom: 16, fontSize: 13, color: 'var(--ink-3)' }}>
          <Link href="/" style={{ color: 'inherit' }}>בית</Link>
          {' · '}
          <Link href="/services" style={{ color: 'inherit' }}>שירותים</Link>
          {' · '}
          {service.he}
        </div>
        <SectionEyebrow en={service.en} he={service.he} />
        <Reveal>
          <h1 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(38px, 5.6vw, 84px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ink)', marginBlock: '8px 40px' }}>
            {service.he}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ maxWidth: 720, display: 'grid', gap: 24 }}>
            <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 20, lineHeight: 1.7, color: 'var(--ink-2)' }}>
              {service.desc}
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-2)', fontWeight: 300 }}>
              {service.body}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ marginTop: 48 }}>
            <Link
              href="/#contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 30px', background: 'var(--ink)', color: 'var(--bg-paper)', border: '1px solid var(--ink)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em' }}
            >
              קביעת פגישה פרטית
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const sanityService = await getServiceBySlug(slug);

  if (sanityService) {
    const service: ServiceData = {
      num: sanityService.number ?? '',
      he: sanityService.title ?? '',
      en: sanityService.englishTitle ?? '',
      desc: sanityService.description ?? '',
      body: sanityService.description ?? '',
    };
    return <ServicePageContent service={service} />;
  }

  const found = SERVICES.find(s => s.slug === slug);
  if (!found) notFound();

  const service: ServiceData = {
    num: found.num,
    he: found.he,
    en: found.en,
    desc: found.desc,
    body: found.body,
  };
  return <ServicePageContent service={service} />;
}

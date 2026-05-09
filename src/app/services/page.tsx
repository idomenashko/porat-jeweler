import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { getServices } from '@/sanity/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'שירותים | תכשיטים בעיצוב אישי',
  description: 'טבעות אירוסין, טבעות נישואין, יהלומים, חריטות ועוד — כל שירותי PORAT בסטודיו פרטי.',
};

const SERVICES = [
  { num: '01', he: 'טבעות אירוסין בהתאמה אישית', en: 'Bespoke Engagement', desc: 'סוליטר, פאווה, שלושה יהלומים — בעיצוב חד-פעמי.', slug: 'bespoke-engagement' },
  { num: '02', he: 'טבעות נישואין', en: 'Wedding Bands', desc: 'זוגות תואמים, חריטה אישית, פלטינה וזהב 18K.', slug: 'wedding-bands' },
  { num: '03', he: 'יהלומים', en: 'Diamonds', desc: 'יהלומים מוסמכי GIA, ליווי בבחירת אבן יחידה במינה.', slug: 'diamonds' },
  { num: '04', he: 'תכשיטים בעיצוב אישי', en: 'Custom Jewelry', desc: 'שרשראות, צמידים ועגילים — מהסקיצה ועד התוצר.', slug: 'custom-jewelry' },
  { num: '05', he: 'זהב וכסף', en: 'Gold & Silver', desc: 'זהב 14K / 18K, פלטינה וכסף סטרלינג בעבודת יד.', slug: 'gold-silver' },
  { num: '06', he: 'שיבוץ יהלומים', en: 'Stone Setting', desc: 'שיבוץ קלאסי או מודרני, בעבודת צורפות עדינה.', slug: 'stone-setting' },
  { num: '07', he: 'חריטות', en: 'Engraving', desc: 'חריטה ידנית או לייזר — תאריך, שם, אות אישית.', slug: 'engraving' },
  { num: '08', he: 'תיקון וחידוש תכשיטים', en: 'Restoration', desc: 'החזרת ברק לתכשיטים יקרים — ניקוי, שיוף, תיקון.', slug: 'restoration' },
  { num: '09', he: 'קנייה ומכירה של זהב ויהלומים', en: 'Buy & Sell', desc: 'הערכה מקצועית והוגנת לזהב וליהלומים.', slug: 'buy-sell' },
  { num: '10', he: 'תכשיטים מוכנים', en: 'Ready-to-Wear', desc: 'אוסף מצומצם של חתיכות מוכנות, מוגבל בעותקים.', slug: 'ready-to-wear' },
];

export default async function ServicesPage() {
  const sanityServices = await getServices().catch(() => []);

  const displayServices = (sanityServices && sanityServices.length > 0)
    ? sanityServices.map((s, i) => ({
        num: s.number ?? String(i + 1).padStart(2, '0'),
        he: s.title ?? '',
        en: s.englishTitle ?? '',
        desc: s.description ?? '',
        slug: s.slug?.current ?? '',
      }))
    : SERVICES;

  return (
    <div style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <SectionEyebrow en="Atelier Services" he="השירותים שלנו" />
        <Reveal>
          <h1 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(38px, 5.6vw, 84px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ink)', marginBlock: '8px 60px', maxWidth: 780 }}>
            כל עולם התכשיטים, <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)', fontWeight: 400 }}>בעבודת יד אישית.</em>
          </h1>
        </Reveal>

        <RevealStagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0, borderTop: '1px solid var(--line-soft)', borderInlineStart: '1px solid var(--line-soft)' }}>
          {displayServices.filter(s => s.slug).map((s) => (
            <RevealItem key={s.slug}>
              <Link href={`/services/${s.slug}`} style={{ display: 'block', padding: '36px 32px 32px', borderInlineEnd: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)', minHeight: 220, textDecoration: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--serif-en)', fontSize: 14, letterSpacing: '.25em', color: 'var(--gold)', fontStyle: 'italic' }}>№{s.num}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--serif-he)', fontWeight: 400, fontSize: 22, lineHeight: 1.25, letterSpacing: '-0.005em', color: 'var(--ink)', marginBottom: 10 }}>{s.he}</h2>
                <div style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--ink-3)', fontSize: 13, letterSpacing: '.05em', marginBottom: 14 }}>{s.en}</div>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                <div style={{ marginTop: 20, color: 'var(--gold-deep)', fontSize: 12, letterSpacing: '.15em', textTransform: 'uppercase' as const }}>למידע נוסף →</div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </div>
  );
}

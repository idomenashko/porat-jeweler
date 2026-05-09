import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { getArticles } from '@/sanity/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'מאמרים | עולם התכשיטים',
  description: 'מדריכים מקצועיים לתכשיטים, יהלומים, טבעות אירוסין ויצירת תכשיטים בעיצוב אישי.',
};

const ARTICLES = [
  { title: 'איך לבחור טבעת אירוסין', slug: 'how-to-choose-engagement-ring', category: 'מדריך', readTime: "8 דק'", excerpt: 'צורה, סגנון, גודל יהלום, מתכת — איך מתחילים, ולמה התקציב לא צריך להגביל אתכם.', tone: 'cream' },
  { title: 'מה ההבדל בין זהב 14K ל־18K', slug: 'gold-14k-vs-18k', category: 'חומרים', readTime: "6 דק'", excerpt: 'טוהר, חוזק, גוון. מה מתאים לכם — וזה לא תמיד מה שאתם חושבים.', tone: 'gold' },
  { title: 'איך בוחרים יהלום', slug: 'how-to-choose-diamond', category: 'יהלומים', readTime: "12 דק'", excerpt: 'ארבעת ה-Cs, מעבר לתעודה: מה חשוב לראות בעין, ומה כדאי להתעלם ממנו.', tone: 'pearl' },
  { title: 'תכשיט בעיצוב אישי: מה חשוב לדעת', slug: 'custom-jewelry-process', category: 'תהליך', readTime: "9 דק'", excerpt: 'מהפגישה הראשונה ועד למסירה: שלבי הייצור והבחירות לאורך הדרך.', tone: 'rose' },
];

const TONE_BG: Record<string, string> = {
  cream: 'linear-gradient(135deg, #f5ead2, #e6d3a8 50%, #c8a979 100%)',
  gold: 'linear-gradient(135deg, #e0c08a, #b8924f 50%, #7d5a26 100%)',
  pearl: 'linear-gradient(135deg, #faf3e2, #ece2c7 50%, #d3c2a0 100%)',
  rose: 'linear-gradient(135deg, #f0d8c2, #d9b491 50%, #a87b54 100%)',
};

export default async function ArticlesPage() {
  const sanityArticles = await getArticles();

  const displayArticles = (sanityArticles && sanityArticles.length > 0)
    ? sanityArticles.map(a => ({
        title: a.title ?? '',
        slug: a.slug?.current ?? '',
        category: a.category ?? '',
        readTime: a.readTime ?? '',
        excerpt: a.excerpt ?? '',
        tone: 'cream',
      }))
    : ARTICLES;

  return (
    <div style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <SectionEyebrow en="The Journal" he="מאמרים ויומן הסטודיו" />
        <Reveal>
          <h1 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(38px, 5.6vw, 84px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ink)', marginBlock: '8px 60px' }}>
            ידע מקצועי, <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)', fontWeight: 400 }}>בשפה ברורה.</em>
          </h1>
        </Reveal>
        <RevealStagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 36 }}>
          {displayArticles.filter(a => a.slug).map((a) => (
            <RevealItem key={a.slug}>
              <article>
                <Link href={`/articles/${a.slug}`} style={{ display: 'block', aspectRatio: '4/3', background: TONE_BG[a.tone] || TONE_BG.cream, marginBottom: 18, textDecoration: 'none' }} />
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12, fontSize: 11, color: 'var(--ink-3)', letterSpacing: '.15em', textTransform: 'uppercase' as const }}>
                  <span style={{ color: 'var(--gold-deep)' }}>{a.category}</span>
                  <span style={{ width: 12, height: 1, background: 'var(--line-deep)' }} />
                  <span>{a.readTime}</span>
                </div>
                <Link href={`/articles/${a.slug}`} style={{ textDecoration: 'none' }}>
                  <h2 style={{ fontFamily: 'var(--serif-he)', fontSize: 22, fontWeight: 500, marginBlock: '0 10px', color: 'var(--ink)', lineHeight: 1.3 }}>{a.title}</h2>
                </Link>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, margin: '0 0 14px' }}>{a.excerpt}</p>
                <Link href={`/articles/${a.slug}`} style={{ fontSize: 12, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'var(--ink)' }}>קריאת המאמר →</Link>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </div>
  );
}

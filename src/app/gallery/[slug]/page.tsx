import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { notFound } from 'next/navigation';

export const revalidate = 60;

const PORTFOLIO = [
  { he: 'סוליטר ״עדן״', en: 'Solitaire Eden', cat: 'טבעת אירוסין', desc: 'יהלום עגול 1.20ct על טבעת זהב 18K.', slug: 'solitaire-eden', tone: 'cream' },
  { he: 'תאומי הטרואו', en: 'Trois Pierres', cat: 'טבעת שלושה יהלומים', desc: 'שלושה יהלומים ניאו-קלאסיים על פלטינה.', slug: 'trois-pierres', tone: 'gold' },
  { he: 'ויטרינה ״אביגיל״', en: 'Avigail Set', cat: 'סט לכלה', desc: 'טבעת ועגילים תואמים, יהלום מרקיזה.', slug: 'avigail-set', tone: 'rose' },
  { he: 'הילו אינפיניטי', en: 'Halo Infinity', cat: 'טבעת אירוסין', desc: 'יהלום מרכזי בהילה כפולה ופאווה דקה.', slug: 'halo-infinity', tone: 'pearl' },
  { he: 'Eternity 5.6', en: 'Eternity Band', cat: 'טבעת נישואין', desc: 'טבעת איטרניטי 5.6mm, פלטינה מלוטשת.', slug: 'eternity-band', tone: 'onyx' },
  { he: 'סקיצה №42', en: 'Sketch №42', cat: 'תהליך', desc: 'סקיצה ידנית לקראת ייצור.', slug: 'sketch-42', tone: 'sketch' },
];

const TONE_BG: Record<string, string> = {
  cream: 'linear-gradient(135deg, #f5ead2, #e6d3a8 50%, #c8a979 100%)',
  gold: 'linear-gradient(135deg, #e0c08a, #b8924f 50%, #7d5a26 100%)',
  onyx: 'linear-gradient(135deg, #3a2f24, #221912 60%, #14100b 100%)',
  rose: 'linear-gradient(135deg, #f0d8c2, #d9b491 50%, #a87b54 100%)',
  pearl: 'linear-gradient(135deg, #faf3e2, #ece2c7 50%, #d3c2a0 100%)',
  sketch: 'var(--bg-paper)',
};

export async function generateStaticParams() {
  return PORTFOLIO.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = PORTFOLIO.find((p) => p.slug === slug);
  if (!item) return { title: 'פריט לא נמצא' };
  return { title: `${item.he} | PORAT`, description: item.desc };
}

export default async function GalleryItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = PORTFOLIO.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <div style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-paper)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <div style={{ marginBottom: 16, fontSize: 13, color: 'var(--ink-3)' }}>
          <Link href="/" style={{ color: 'inherit' }}>בית</Link> · <Link href="/gallery" style={{ color: 'inherit' }}>גלריה</Link> · {item.he}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div style={{ aspectRatio: '4/5', background: TONE_BG[item.tone] || TONE_BG.cream, position: 'relative' }}>
            <span style={{ position: 'absolute', insetInlineStart: 18, bottom: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'rgba(40,25,5,.75)', background: 'rgba(255,250,240,.7)', backdropFilter: 'blur(2px)', padding: '4px 8px' }}>{item.en.toUpperCase()}</span>
          </div>
          <div style={{ paddingTop: 24 }}>
            <SectionEyebrow en={item.cat} he={item.cat} />
            <Reveal>
              <h1 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.012em', color: 'var(--ink)', marginBlock: '8px 24px' }}>{item.he}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 17, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 40 }}>{item.desc}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 30px', background: 'var(--ink)', color: 'var(--bg-paper)', border: '1px solid var(--ink)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em' }}>
                יצירת תכשיט דומה
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

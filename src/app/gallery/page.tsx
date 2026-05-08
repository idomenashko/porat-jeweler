import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'גלריה | עבודות נבחרות',
  description: 'גלריה סלקטיבית של עבודות PORAT — טבעות אירוסין, נישואין, ותכשיטים בעיצוב אישי.',
};

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

export default function GalleryPage() {
  return (
    <div style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-paper)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <SectionEyebrow en="Selected Works" he="עבודות נבחרות" />
        <Reveal>
          <h1 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(38px, 5.6vw, 84px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ink)', marginBlock: '8px 60px' }}>
            גלריה <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)', fontWeight: 400 }}>סלקטיבית.</em>
          </h1>
        </Reveal>
        <RevealStagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 36 }}>
          {PORTFOLIO.map((p, i) => (
            <RevealItem key={p.slug}>
              <Link href={`/gallery/${p.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div style={{ aspectRatio: '4/5', background: TONE_BG[p.tone] || TONE_BG.cream, marginBottom: 18, position: 'relative', overflow: 'hidden' }}>
                  <span style={{ position: 'absolute', insetInlineStart: 18, bottom: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'rgba(40,25,5,.75)', background: 'rgba(255,250,240,.7)', backdropFilter: 'blur(2px)', padding: '4px 8px' }}>{p.en.toUpperCase()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                  <h2 style={{ fontFamily: 'var(--serif-he)', fontWeight: 400, fontSize: 22, lineHeight: 1.25, letterSpacing: '-0.005em', color: 'var(--ink)' }}>{p.he}</h2>
                  <span style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', fontSize: 10, color: 'var(--gold)', letterSpacing: '.25em', textTransform: 'uppercase' as const }}>№{i + 101}</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--gold-deep)', letterSpacing: '.15em', textTransform: 'uppercase' as const, marginBottom: 8 }}>{p.cat}</div>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </div>
  );
}

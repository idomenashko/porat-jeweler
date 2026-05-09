'use client';
import { useState } from 'react';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import type { GalleryItem } from '@/types/sanity';

const PORTFOLIO = [
  { he: 'סוליטר ״עדן״', en: 'Solitaire Eden', cat: 'טבעת אירוסין', desc: 'יהלום עגול 1.20ct על טבעת זהב 18K.', tone: 'cream' },
  { he: 'תאומי הטרואו', en: 'Trois Pierres', cat: 'טבעת שלושה יהלומים', desc: 'שלושה יהלומים ניאו-קלאסיים על פלטינה.', tone: 'gold' },
  { he: 'ויטרינה ״אביגיל״', en: 'Avigail Set', cat: 'סט לכלה', desc: 'טבעת ועגילים תואמים, יהלום מרקיזה.', tone: 'rose' },
  { he: 'הילו אינפיניטי', en: 'Halo Infinity', cat: 'טבעת אירוסין', desc: 'יהלום מרכזי בהילה כפולה ופאווה דקה.', tone: 'pearl' },
  { he: 'Eternity 5.6', en: 'Eternity Band', cat: 'טבעת נישואין', desc: 'טבעת איטרניטי 5.6mm, פלטינה מלוטשת.', tone: 'onyx' },
  { he: 'סקיצה №42', en: 'Sketch №42', cat: 'תהליך', desc: 'סקיצה ידנית לקראת ייצור.', tone: 'sketch' },
];

const TONE_BG: Record<string, string> = {
  cream: 'linear-gradient(135deg, #f5ead2, #e6d3a8 50%, #c8a979 100%)',
  gold: 'linear-gradient(135deg, #e0c08a, #b8924f 50%, #7d5a26 100%)',
  onyx: 'linear-gradient(135deg, #3a2f24, #221912 60%, #14100b 100%)',
  rose: 'linear-gradient(135deg, #f0d8c2, #d9b491 50%, #a87b54 100%)',
  pearl: 'linear-gradient(135deg, #faf3e2, #ece2c7 50%, #d3c2a0 100%)',
  sketch: 'var(--bg-paper)',
};

type DisplayItem = { he: string; en: string; cat: string; desc: string; tone: string };

interface PortfolioSectionProps {
  galleryItems?: GalleryItem[];
}

export function PortfolioSection({ galleryItems: sanityItems }: PortfolioSectionProps) {
  const displayItems: DisplayItem[] = (sanityItems && sanityItems.length > 0)
    ? sanityItems.map((item) => ({
        he: item.title ?? '',
        en: item.materials ?? '',
        cat: item.category ?? '',
        desc: item.description ?? '',
        tone: 'cream', // fallback color, no image mapping yet
      }))
    : PORTFOLIO;

  return (
    <section id="gallery" style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-paper)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <SectionEyebrow en="Selected Works" he="עבודות נבחרות" />
            <Reveal>
              <h2 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.012em', color: 'var(--ink)', marginTop: 8, maxWidth: 720 }}>
                גלריה <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)' }}>סלקטיבית.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal><a href="/gallery" style={{ fontSize: 14, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'var(--ink)' }}>לכל העבודות →</a></Reveal>
        </div>

        <RevealStagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 36 }}>
          {displayItems.map((p, i) => <PortfolioCard key={i} item={p} num={i + 101} />)}
        </RevealStagger>
      </div>
    </section>
  );
}

function PortfolioCard({ item, num }: { item: DisplayItem; num: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <RevealItem>
      <article style={{ cursor: 'pointer' }}>
        <div
          style={{ position: 'relative', overflow: 'hidden', marginBottom: 18, aspectRatio: '4/5' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div style={{ position: 'absolute', inset: 0, background: TONE_BG[item.tone] || TONE_BG.cream }} />
          {item.tone === 'sketch' && (
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(110,90,55,.07) 0 1px, transparent 1px 14px), repeating-linear-gradient(90deg, rgba(110,90,55,.07) 0 1px, transparent 1px 14px)' }} />
          )}
          <span style={{ position: 'absolute', insetInlineStart: 18, bottom: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'rgba(40,25,5,.75)', background: 'rgba(255,250,240,.7)', backdropFilter: 'blur(2px)', padding: '4px 8px' }}>{item.en.toUpperCase()}</span>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,.45))', display: 'flex', alignItems: 'flex-end', padding: 20, opacity: hovered ? 1 : 0, transition: 'opacity .4s ease' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '10px 18px', background: 'var(--gold)', color: 'var(--bg-paper)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 12, letterSpacing: '.08em' }}>הצגה →</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
          <h3 style={{ fontFamily: 'var(--serif-he)', fontWeight: 400, fontSize: 22, lineHeight: 1.25, letterSpacing: '-0.005em', color: 'var(--ink)' }}>{item.he}</h3>
          <span style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '.25em', textTransform: 'uppercase' as const, fontSize: 10, color: 'var(--gold)' }}>№{num}</span>
        </div>
        <div style={{ fontSize: 12, color: 'var(--gold-deep)', letterSpacing: '.15em', textTransform: 'uppercase' as const, marginBottom: 8 }}>{item.cat}</div>
        <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
      </article>
    </RevealItem>
  );
}

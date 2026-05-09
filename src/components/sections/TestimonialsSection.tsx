'use client';

import { useState, useEffect } from 'react';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { IconArrow, IconArrowLeft } from '@/components/icons';
import type { Testimonial } from '@/types/sanity';

const TESTIMONIALS = [
  { name: 'ש. ל.', role: 'טבעת אירוסין מותאמת', text: 'רגע ההצעה היה מושלם, והטבעת — מעבר לכל מה שדמיינתי. תהליך עדין, מקצועי ובלתי נשכח.' },
  { name: 'ד. ק.', role: 'טבעות נישואין', text: 'פורת ליווה אותנו בסבלנות אינסופית. כל פגישה הייתה תענוג, התוצאה הסופית — יצירת אומנות.' },
  { name: 'מ. ב.', role: 'תכשיט בעיצוב אישי', text: 'ביקשתי תליון לזכר אמא ז"ל. היחס האישי, ההקשבה והתוצאה — אין מילים.' },
  { name: 'ע. ר.', role: 'יהלום סוליטר', text: 'ייעוץ אמיתי, מקצועי, ללא לחץ. הרגשתי שאני בידיים בטוחות לכל אורך הדרך.' },
];

type DisplayTestimonial = { name: string; role: string; text: string };

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export function TestimonialsSection({ testimonials: sanityTestimonials }: TestimonialsSectionProps) {
  const displayTestimonials: DisplayTestimonial[] = (sanityTestimonials && sanityTestimonials.length > 0)
    ? sanityTestimonials.map((t) => ({
        name: t.name ?? '',
        role: t.role ?? '',
        text: t.text ?? '',
      }))
    : TESTIMONIALS;

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    setActiveIdx(0);
  }, [displayTestimonials.length]);

  useEffect(() => {
    if (displayTestimonials.length === 0) return;
    const timer = setInterval(
      () => setActiveIdx((x) => (x + 1) % displayTestimonials.length),
      6500
    );
    return () => clearInterval(timer);
  }, [displayTestimonials.length]);

  if (displayTestimonials.length === 0) return null;

  const t = displayTestimonials[activeIdx];

  return (
    <section style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
          <div>
            <SectionEyebrow en="Voices" he="המלצות" />
            <Reveal>
              <h2 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.012em', color: 'var(--ink)', marginTop: 8 }}>
                לקוחות <br />
                <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)' }}>שהפכו למשפחה.</em>
              </h2>
            </Reveal>
            <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
              <button
                onClick={() => setActiveIdx((x) => (x - 1 + displayTestimonials.length) % displayTestimonials.length)}
                aria-label="עדות קודמת"
                style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--line-deep)', background: 'transparent', display: 'grid', placeItems: 'center', cursor: 'pointer' }}
              >
                <IconArrow width={16} height={16} />
              </button>
              <button
                onClick={() => setActiveIdx((x) => (x + 1) % displayTestimonials.length)}
                aria-label="עדות הבאה"
                style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--line-deep)', background: 'var(--ink)', color: 'var(--bg)', display: 'grid', placeItems: 'center', cursor: 'pointer' }}
              >
                <IconArrowLeft width={16} height={16} />
              </button>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--serif-en)', fontSize: 120, lineHeight: 0.5, color: 'var(--gold-soft)', opacity: 0.35, fontStyle: 'italic', height: 50, marginBottom: 0 }}>&ldquo;</div>
            <p
              key={activeIdx}
              style={{
                fontFamily: 'var(--serif-he)',
                fontSize: 30,
                lineHeight: 1.5,
                color: 'var(--ink)',
                fontWeight: 400,
                marginBlock: '0 28px',
                minHeight: 140,
                animation: 'fadeIn .8s ease',
              }}
              aria-live="polite"
            >
              {t.text}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--bg-deep)', border: '1px solid var(--line-deep)', display: 'grid', placeItems: 'center', fontFamily: 'var(--serif-en)', color: 'var(--gold-deep)', fontSize: 18 }}>
                {t.name.split(' ')[0]}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--serif-he)', fontSize: 16, color: 'var(--ink)', fontWeight: 500 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', letterSpacing: '.15em', textTransform: 'uppercase' as const }}>{t.role}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {displayTestimonials.map((_, x) => (
                <button
                  key={x}
                  onClick={() => setActiveIdx(x)}
                  aria-label={`עדות ${x + 1}`}
                  style={{ width: x === activeIdx ? 36 : 14, height: 2, background: x === activeIdx ? 'var(--gold-deep)' : 'var(--line)', border: 'none', transition: 'all .4s ease', padding: 0, cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

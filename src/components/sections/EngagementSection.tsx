'use client';

import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Sparkles } from '@/components/ui/Sparkles';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';

export function EngagementSection() {
  const features = [
    'ייעוץ אישי בבחירת יהלום מוסמך GIA',
    'סגנונות סוליטר, הילו, פאווה ושלושה יהלומים',
    'פלטינה / זהב 14K / 18K — לבן, צהוב או ורוד',
    'ערבות לכל החיים על העבודה והשיבוץ',
  ];

  return (
    <section id="engagement" style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
      <Sparkles count={12} />
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Image column */}
          <div style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '3/4', background: 'linear-gradient(135deg, #f5ead2, #e6d3a8 50%, #c8a979 100%)', boxShadow: 'var(--shadow-card)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0 2px, transparent 2px 9px), radial-gradient(circle at 30% 30%, rgba(255,255,255,.45), transparent 55%)', mixBlendMode: 'overlay' as const }} />
              <span style={{ position: 'absolute', insetInlineStart: 18, bottom: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'rgba(40,25,5,.75)', background: 'rgba(255,250,240,.7)', backdropFilter: 'blur(2px)', padding: '4px 8px' }}>ENGAGEMENT MACRO</span>
            </div>
            {/* Overlapping smaller image */}
            <div style={{ position: 'absolute', insetInlineEnd: -50, bottom: -40, width: '55%', aspectRatio: '1/1', background: 'linear-gradient(135deg, #f0d8c2, #d9b491 50%, #a87b54 100%)', border: '8px solid var(--bg-deep)', boxShadow: 'var(--shadow-deep)' }}>
              <span style={{ position: 'absolute', insetInlineStart: 18, bottom: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'rgba(40,25,5,.75)', background: 'rgba(255,250,240,.7)', backdropFilter: 'blur(2px)', padding: '4px 8px' }}>HAND DETAIL</span>
            </div>
          </div>

          {/* Text column */}
          <div>
            <SectionEyebrow en="Engagement Rings" he="טבעות אירוסין" />
            <Reveal>
              <h2 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.012em', color: 'var(--ink)', marginBlock: '8px 30px' }}>
                הטבעת היחידה <br />
                <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)' }}>שתישא חיים שלמים.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 17, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 30 }}>
                עיצוב טבעת אירוסין הוא תהליך אישי במיוחד. אנו מלווים אותך מבחירת היהלום, דרך הסגנון והמתכת, ועד למסירה האישית — בסודיות מלאה ובכבוד לסיפור שלכם.
              </p>
            </Reveal>
            <RevealStagger>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'grid', gap: 14 }}>
                {features.map((t) => (
                  <RevealItem key={t}>
                    <li style={{ display: 'flex', alignItems: 'start', gap: 14, color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.5 }}>
                      <span style={{ marginTop: 8, width: 6, height: 6, background: 'var(--gold)', transform: 'rotate(45deg)', flexShrink: 0 }} />
                      {t}
                    </li>
                  </RevealItem>
                ))}
              </ul>
            </RevealStagger>
            <Reveal delay={0.3}>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 30px', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em', background: 'var(--ink)', color: 'var(--bg-paper)', border: '1px solid var(--ink)', cursor: 'pointer' }}
                >
                  התחלת תהליך אירוסין
                </a>
                <a
                  href="#gallery"
                  onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 30px', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em', background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink-2)', cursor: 'pointer' }}
                >
                  לגלריית הטבעות
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

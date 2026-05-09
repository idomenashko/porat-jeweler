'use client';

import { useState, useEffect } from 'react';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Sparkles } from '@/components/ui/Sparkles';
import { Reveal } from '@/components/ui/Reveal';
import { IconArrowLeft, IconWhatsApp } from '@/components/icons';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';

export function HeroSection() {
  const { whatsapp } = useSiteSettings();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallaxY = scrollY * 0.18;

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '92vh',
        background: 'var(--bg)',
        overflow: 'hidden',
      }}
    >
      <Sparkles count={16} />

      {/* Giant faded PORAT watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--serif-en)',
            fontSize: '23vw',
            letterSpacing: '.06em',
            color: 'var(--gold)',
            fontWeight: 500,
            transform: `translateY(${parallaxY * 0.3}px)`,
          }}
        >
          PORAT
        </span>
      </div>

      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          paddingInline: 'clamp(20px, 4vw, 64px)',
          position: 'relative',
          zIndex: 2,
          paddingTop: 60,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 60,
            alignItems: 'center',
            minHeight: 'calc(92vh - 100px)',
          }}
        >
          {/* Copy column */}
          <div>
            <SectionEyebrow en="Private Jeweler · Israel" he="צורף פרטי · ישראל" />

            <h1
              style={{
                fontFamily: 'var(--serif-he)',
                fontWeight: 300,
                fontSize: 'clamp(38px, 5.6vw, 84px)',
                lineHeight: 1.08,
                letterSpacing: '-0.015em',
                color: 'var(--ink)',
                marginBlock: '8px 30px',
              }}
            >
              תכשיטים בעיצוב אישי,
              <br />
              <em
                style={{
                  fontFamily: 'var(--serif-en)',
                  fontStyle: 'italic',
                  color: 'var(--gold-deep)',
                  fontWeight: 400,
                }}
              >
                שנוצרים עבורך בלבד.
              </em>
            </h1>

            <Reveal delay={0.1}>
              <p
                style={{
                  fontFamily: 'var(--sans-he)',
                  fontWeight: 300,
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: 'var(--ink-2)',
                  maxWidth: 540,
                  marginBottom: 40,
                }}
              >
                סטודיו פרטי לעיצוב והפקה של טבעות אירוסין, טבעות נישואין ויהלומים נדירים. ייעוץ אישי, פגישה דיסקרטית, וייצור בעבודת יד — בכל רחבי ישראל, בתיאום מראש.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    padding: '15px 30px', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14,
                    letterSpacing: '.08em', background: 'var(--ink)', color: 'var(--bg-paper)',
                    border: '1px solid var(--ink)', cursor: 'pointer',
                    transition: 'all .35s cubic-bezier(.22,.61,.36,1)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--gold-deep)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--gold-deep)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--ink)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--ink)'; }}
                >
                  קביעת פגישה פרטית
                  <IconArrowLeft width={16} height={16} />
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '15px 30px', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14,
                    letterSpacing: '.08em', background: 'transparent', color: 'var(--ink)',
                    border: '1px solid var(--ink-2)', cursor: 'pointer',
                    transition: 'all .35s cubic-bezier(.22,.61,.36,1)',
                  }}
                >
                  <IconWhatsApp width={16} height={16} />
                  שליחת הודעה בוואטסאפ
                </a>
              </div>
            </Reveal>

            {/* Trust stripe */}
            <Reveal delay={0.3}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginTop: 60, color: 'var(--ink-3)', flexWrap: 'wrap' }}>
                {[
                  ['12+', 'שנות מומחיות'],
                  ['GIA', 'יהלומים מוסמכים'],
                  ['100%', 'בעבודת יד'],
                ].map(([n, l], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontFamily: 'var(--serif-en)', fontSize: 28, color: 'var(--gold-deep)', fontWeight: 500, lineHeight: 1 }}>{n}</span>
                    <span style={{ fontSize: 12, letterSpacing: '.15em', textTransform: 'uppercase' as const }}>{l}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Visual column */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', aspectRatio: '4/5', maxWidth: 560, marginInline: 'auto' }}>
              {/* Hero placeholder image */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #e8d9bb, #d8c197 40%, #b59867 100%)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-deep)',
                  transform: `translateY(${-parallaxY * 0.2}px)`,
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0 2px, transparent 2px 9px), radial-gradient(circle at 30% 30%, rgba(255,255,255,.45), transparent 55%)', mixBlendMode: 'overlay' as const }} />
                <span style={{ position: 'absolute', insetInlineStart: 18, bottom: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'rgba(40,25,5,.75)', background: 'rgba(255,250,240,.7)', backdropFilter: 'blur(2px)', padding: '4px 8px' }}>HERO · MACRO RING</span>
              </div>

              {/* Floating rotating ring decoration */}
              <div
                style={{
                  position: 'absolute',
                  bottom: -50,
                  insetInlineStart: -60,
                  width: 210,
                  height: 210,
                  animation: 'float-slow 7s ease-in-out infinite',
                  pointerEvents: 'none',
                }}
              >
                <svg viewBox="0 0 200 200" style={{ animation: 'spin-slow 60s linear infinite' }}>
                  <defs>
                    <radialGradient id="ringG" cx="50%" cy="50%" r="50%">
                      <stop offset="60%" stopColor="rgba(216,182,128,0)" />
                      <stop offset="100%" stopColor="rgba(216,182,128,.3)" />
                    </radialGradient>
                  </defs>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="var(--gold)" strokeWidth="1" />
                  <circle cx="100" cy="100" r="80" fill="url(#ringG)" />
                  <circle cx="100" cy="100" r="78" fill="none" stroke="var(--gold-glow)" strokeWidth=".4" strokeDasharray="1 4" />
                  <g transform="translate(100,22)">
                    <polygon points="0,-10 -8,0 0,12 8,0" fill="var(--gold-deep)" />
                  </g>
                </svg>
              </div>

              {/* Caption card */}
              <Reveal>
                <div
                  style={{
                    position: 'absolute',
                    top: -24,
                    insetInlineEnd: -40,
                    background: 'var(--bg-paper)',
                    padding: '14px 20px',
                    boxShadow: 'var(--shadow-card)',
                    maxWidth: 220,
                    border: '1px solid var(--line-soft)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '.25em', textTransform: 'uppercase' as const, fontSize: 12, color: 'var(--gold)', marginBottom: 6 }}>Édition №017</div>
                  <div style={{ fontFamily: 'var(--serif-he)', fontSize: 16, color: 'var(--ink)', lineHeight: 1.3 }}>טבעת אירוסין יחידה במינה</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>יהלום סוליטר · 1.04ct · D · VS1</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            insetInlineEnd: 64,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: 'var(--ink-3)',
            fontSize: 11,
            letterSpacing: '.25em',
            textTransform: 'uppercase' as const,
          }}
        >
          <span>גלילה</span>
          <span style={{ width: 50, height: 1, display: 'block', background: 'linear-gradient(90deg, var(--gold), var(--bg) 50%, var(--gold))', backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite' }} />
        </div>
      </div>
    </section>
  );
}

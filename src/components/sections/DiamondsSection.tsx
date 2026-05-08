'use client';

import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Sparkles } from '@/components/ui/Sparkles';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { IconArrowLeft } from '@/components/icons';

const FOUR_C = [
  { letter: 'C', word: 'Cut', he: 'ליטוש', desc: 'האיכות החשובה ביותר — הליטוש קובע את הבריק ואת הנצנוץ של היהלום.' },
  { letter: 'C', word: 'Color', he: 'צבע', desc: 'בסולם D עד Z. ככל שהיהלום שקוף יותר, ערכו עולה.' },
  { letter: 'C', word: 'Clarity', he: 'ניקיון', desc: 'כמות הכלולות הפנימיות. דירוג FL נחשב נדיר במיוחד.' },
  { letter: 'C', word: 'Carat', he: 'משקל', desc: 'המשקל הקראטי. גודל אינו תמיד אינדיקציה לערך אמיתי.' },
];

export function DiamondsSection() {
  return (
    <section id="diamonds" style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: '#0f0a06', color: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 30%, rgba(216,182,128,.25), transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(155,123,60,.18), transparent 60%)', pointerEvents: 'none' }} />
      <Sparkles count={20} />
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <SectionEyebrow en="The Diamond Guide" he="מדריך היהלום" align="center" />
          <Reveal>
            <h2 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.012em', color: '#f5ead2', marginTop: 8 }}>
              ארבעה Cs, <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-glow)' }}>שיחה אחת.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 17, lineHeight: 1.75, color: 'rgba(245,234,210,.78)', maxWidth: 600, margin: '18px auto 0' }}>
              הסיווג הבינלאומי של יהלומים בנוי על ארבעה קריטריונים. אנו נלווה אותך לבחור את האבן המדויקת לסיפור שלכם — לא לפי כללים, אלא לפי תחושה.
            </p>
          </Reveal>
        </div>

        <RevealStagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid rgba(216,182,128,.3)' }}>
          {FOUR_C.map((c, i) => (
            <RevealItem key={i}>
              <div style={{ padding: '40px 28px', borderInlineEnd: i < 3 ? '1px solid rgba(216,182,128,.3)' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--serif-en)', fontSize: 86, fontStyle: 'italic', color: 'var(--gold-glow)', lineHeight: 1, marginBottom: 12 }}>{c.letter}</div>
                <div style={{ fontFamily: 'var(--serif-en)', fontSize: 14, letterSpacing: '.25em', textTransform: 'uppercase' as const, color: 'var(--gold-glow)', marginBottom: 12 }}>{c.word}</div>
                <h3 style={{ fontFamily: 'var(--serif-he)', fontSize: 22, fontWeight: 500, color: '#fdf6e6', marginBlock: '0 12px' }}>{c.he}</h3>
                <p style={{ fontSize: 13, color: 'rgba(245,234,210,.65)', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <div style={{ textAlign: 'center', marginTop: 50 }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 30px', background: 'var(--gold)', color: 'var(--bg-paper)', border: '1px solid var(--gold)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em', cursor: 'pointer' }}
            >
              ייעוץ אישי לבחירת יהלום
              <IconArrowLeft width={16} height={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

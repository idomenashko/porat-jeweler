import type { Metadata } from 'next';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { Sparkles } from '@/components/ui/Sparkles';
import Link from 'next/link';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'מדריך היהלומים | 4C',
  description: 'מדריך יהלומים מקצועי — ארבעת ה-Cs, בחירת יהלום GIA, וייעוץ אישי.',
};

const FOUR_C = [
  { letter: 'C', word: 'Cut', he: 'ליטוש', desc: 'האיכות החשובה ביותר — הליטוש קובע את הבריק ואת הנצנוץ של היהלום. ליטוש מצוין מאפשר לאור לחזור מן האבן בצורה המיטבית.' },
  { letter: 'C', word: 'Color', he: 'צבע', desc: 'בסולם D עד Z. ככל שהיהלום שקוף יותר, ערכו עולה. D הוא חסר צבע לחלוטין, Z הוא צהבהב. אנו עובדים בעיקר עם D-G.' },
  { letter: 'C', word: 'Clarity', he: 'ניקיון', desc: 'כמות הכלולות הפנימיות. דירוג FL נחשב נדיר במיוחד. VS1-VS2 הם מצוינים לעין הבלתי מזוינת.' },
  { letter: 'C', word: 'Carat', he: 'משקל', desc: 'המשקל הקראטי. גודל אינו תמיד אינדיקציה לערך אמיתי — ליטוש מצוין בקראט קטן שווה יותר מליטוש נחות בקראט גדול.' },
];

export default function DiamondsPage() {
  return (
    <div style={{ background: '#0f0a06', color: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <Sparkles count={20} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 30%, rgba(216,182,128,.25), transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(155,123,60,.18), transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)', position: 'relative', zIndex: 2 }}>
        <SectionEyebrow en="Diamond Guide" he="מדריך היהלום" />
        <Reveal>
          <h1 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(38px, 5.6vw, 84px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: '#f5ead2', marginBlock: '8px 40px' }}>
            ארבעה Cs,<br />
            <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-glow)', fontWeight: 400 }}>שיחה אחת.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 20, lineHeight: 1.7, color: 'rgba(245,234,210,.78)', maxWidth: 600, marginBottom: 60 }}>
            הסיווג הבינלאומי של יהלומים בנוי על ארבעה קריטריונים. אנו נלווה אותך לבחור את האבן המדויקת לסיפור שלכם.
          </p>
        </Reveal>

        <RevealStagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 0, border: '1px solid rgba(216,182,128,.3)', marginBottom: 60 }}>
          {FOUR_C.map((c, i) => (
            <RevealItem key={i}>
              <div style={{ padding: '40px 28px', borderInlineEnd: i < 3 ? '1px solid rgba(216,182,128,.3)' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--serif-en)', fontSize: 86, fontStyle: 'italic', color: 'var(--gold-glow)', lineHeight: 1, marginBottom: 12 }}>{c.letter}</div>
                <div style={{ fontFamily: 'var(--serif-en)', fontSize: 14, letterSpacing: '.25em', textTransform: 'uppercase' as const, color: 'var(--gold-glow)', marginBottom: 12 }}>{c.word}</div>
                <h2 style={{ fontFamily: 'var(--serif-he)', fontSize: 22, fontWeight: 500, color: '#fdf6e6', marginBlock: '0 12px' }}>{c.he}</h2>
                <p style={{ fontSize: 14, color: 'rgba(245,234,210,.65)', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <Link href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 30px', background: 'var(--gold)', color: 'var(--bg-paper)', border: '1px solid var(--gold)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em' }}>
            ייעוץ אישי לבחירת יהלום
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

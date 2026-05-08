import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';

const ARTICLES = [
  { he: 'איך לבחור טבעת אירוסין', cat: 'מדריך', read: "8 דק'", excerpt: 'צורה, סגנון, גודל יהלום, מתכת — איך מתחילים, ולמה התקציב לא צריך להגביל אתכם.', tone: 'cream', href: '/articles/how-to-choose-engagement-ring' },
  { he: 'מה ההבדל בין זהב 14K ל־18K', cat: 'חומרים', read: "6 דק'", excerpt: 'טוהר, חוזק, גוון. מה מתאים לכם — וזה לא תמיד מה שאתם חושבים.', tone: 'gold', href: '/articles/gold-14k-vs-18k' },
  { he: 'איך בוחרים יהלום', cat: 'יהלומים', read: "12 דק'", excerpt: 'ארבעת ה-Cs, מעבר לתעודה: מה חשוב לראות בעין, ומה כדאי להתעלם ממנו.', tone: 'pearl', href: '/articles/how-to-choose-diamond' },
  { he: 'תכשיט בעיצוב אישי: מה חשוב לדעת', cat: 'תהליך', read: "9 דק'", excerpt: 'מהפגישה הראשונה ועד למסירה: שלבי הייצור והבחירות לאורך הדרך.', tone: 'rose', href: '/articles/custom-jewelry-process' },
];

const TONE_BG: Record<string, string> = {
  cream: 'linear-gradient(135deg, #f5ead2, #e6d3a8 50%, #c8a979 100%)',
  gold: 'linear-gradient(135deg, #e0c08a, #b8924f 50%, #7d5a26 100%)',
  pearl: 'linear-gradient(135deg, #faf3e2, #ece2c7 50%, #d3c2a0 100%)',
  rose: 'linear-gradient(135deg, #f0d8c2, #d9b491 50%, #a87b54 100%)',
};

export function JournalSection() {
  return (
    <section id="journal" style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <SectionEyebrow en="The Journal" he="מאמרים ויומן הסטודיו" />
            <Reveal>
              <h2 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.012em', color: 'var(--ink)', marginTop: 8, maxWidth: 780 }}>
                ידע מקצועי, <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)' }}>בשפה ברורה.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <a href="/articles" style={{ fontSize: 14, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'var(--ink)' }}>לכל המאמרים →</a>
          </Reveal>
        </div>

        <RevealStagger style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}>
          {ARTICLES.map((a, i) => (
            <RevealItem key={i}>
              <article style={{ cursor: 'pointer' }}>
                <a href={a.href}>
                  <div style={{ aspectRatio: '4/3', background: TONE_BG[a.tone] || TONE_BG.cream, marginBottom: 18, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0 2px, transparent 2px 9px), radial-gradient(circle at 30% 30%, rgba(255,255,255,.45), transparent 55%)', mixBlendMode: 'overlay' as const }} />
                    <span style={{ position: 'absolute', insetInlineStart: 18, bottom: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'rgba(40,25,5,.75)', background: 'rgba(255,250,240,.7)', backdropFilter: 'blur(2px)', padding: '4px 8px' }}>{a.cat.toUpperCase()}</span>
                  </div>
                </a>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12, fontSize: 11, color: 'var(--ink-3)', letterSpacing: '.15em', textTransform: 'uppercase' as const }}>
                  <span style={{ color: 'var(--gold-deep)' }}>{a.cat}</span>
                  <span style={{ width: 12, height: 1, background: 'var(--line-deep)' }} />
                  <span>{a.read}</span>
                </div>
                <a href={a.href}>
                  <h3 style={{ fontFamily: 'var(--serif-he)', fontSize: 20, fontWeight: 500, marginBlock: '0 10px', color: 'var(--ink)', lineHeight: 1.3 }}>{a.he}</h3>
                </a>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, margin: '0 0 14px' }}>{a.excerpt}</p>
                <a href={a.href} style={{ fontSize: 12, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'var(--ink)', position: 'relative', paddingBottom: 4 }}>קריאת המאמר →</a>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

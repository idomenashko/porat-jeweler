import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';

const PROCESS = [
  { num: '01', he: 'יצירת קשר', en: 'Initial Contact', desc: 'שיחה ראשונה בוואטסאפ או טלפון, להבין את החזון.' },
  { num: '02', he: 'פגישה אישית', en: 'Private Meeting', desc: 'מפגש בסטודיו או באזורך — דיסקרטי וללא התחייבות.' },
  { num: '03', he: 'בחירת חומר וסגנון', en: 'Materials', desc: 'יהלום, מתכת וסגנון — מותאמים לסיפור ולתקציב.' },
  { num: '04', he: 'סקיצה והדמיה', en: 'Sketch & 3D', desc: 'סקיצה ידנית והדמיית תלת-ממד לפני ייצור.' },
  { num: '05', he: 'ייצור ושיבוץ', en: 'Crafting', desc: 'ייצור בעבודת יד, ליטוש ושיבוץ עדין במשך 4–6 שבועות.' },
  { num: '06', he: 'מסירה אישית', en: 'Personal Delivery', desc: 'מסירה אישית בליווי תיק עור, אישורים וביטוח.' },
];

export function ProcessSection() {
  return (
    <section id="process" style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <SectionEyebrow en="The Process" he="תהליך העבודה" align="center" />
          <Reveal>
            <h2 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.012em', color: 'var(--ink)', marginTop: 8 }}>
              ששה שלבים, <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)' }}>שיחה אחת ממושכת.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 17, lineHeight: 1.75, color: 'var(--ink-2)', maxWidth: 600, margin: '20px auto 0' }}>
              תהליך אישי, בקצב שלך. ללא לחץ, ללא ויטרינות, ללא תפסי-מכירה.
            </p>
          </Reveal>
        </div>

        <RevealStagger style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, position: 'relative' }}>
          {/* connecting line */}
          <div style={{ position: 'absolute', top: 32, insetInlineStart: '8%', insetInlineEnd: '8%', height: 1, background: 'linear-gradient(90deg, transparent, var(--line-deep), transparent)' }} />
          {PROCESS.map((p, i) => (
            <RevealItem key={i}>
              <div style={{ padding: '0 16px', position: 'relative' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--bg-paper)', border: '1px solid var(--line-deep)', display: 'grid', placeItems: 'center', fontFamily: 'var(--serif-en)', fontSize: 22, fontStyle: 'italic', color: 'var(--gold-deep)', marginInline: 'auto', marginBottom: 22, position: 'relative', zIndex: 2 }}>
                  {p.num}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '.25em', textTransform: 'uppercase' as const, fontSize: 10, color: 'var(--gold)', marginBottom: 6 }}>{p.en}</div>
                  <h3 style={{ fontFamily: 'var(--serif-he)', fontSize: 20, fontWeight: 500, marginBlock: '0 8px', color: 'var(--ink)' }}>{p.he}</h3>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65, maxWidth: 200, marginInline: 'auto' }}>{p.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

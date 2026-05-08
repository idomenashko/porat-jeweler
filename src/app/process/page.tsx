import type { Metadata } from 'next';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import Link from 'next/link';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'תהליך העבודה | 6 שלבים',
  description: 'ששה שלבים ליצירת תכשיט — מהשיחה הראשונה עד למסירה האישית.',
};

const PROCESS = [
  { num: '01', he: 'יצירת קשר', en: 'Initial Contact', desc: 'שיחה ראשונה בוואטסאפ או טלפון, להבין את החזון.' },
  { num: '02', he: 'פגישה אישית', en: 'Private Meeting', desc: 'מפגש בסטודיו או באזורך — דיסקרטי וללא התחייבות.' },
  { num: '03', he: 'בחירת חומר וסגנון', en: 'Materials', desc: 'יהלום, מתכת וסגנון — מותאמים לסיפור ולתקציב.' },
  { num: '04', he: 'סקיצה והדמיה', en: 'Sketch & 3D', desc: 'סקיצה ידנית והדמיית תלת-ממד לפני ייצור.' },
  { num: '05', he: 'ייצור ושיבוץ', en: 'Crafting', desc: 'ייצור בעבודת יד, ליטוש ושיבוץ עדין במשך 4–6 שבועות.' },
  { num: '06', he: 'מסירה אישית', en: 'Personal Delivery', desc: 'מסירה אישית בליווי תיק עור, אישורים וביטוח.' },
];

export default function ProcessPage() {
  return (
    <div style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-soft)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <SectionEyebrow en="The Process" he="תהליך העבודה" align="center" />
          <Reveal>
            <h1 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(38px, 5.6vw, 84px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ink)', marginBlock: '8px 24px' }}>
              ששה שלבים,<br />
              <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)', fontWeight: 400 }}>שיחה אחת ממושכת.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 20, lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px' }}>
              תהליך אישי, בקצב שלך. ללא לחץ, ללא ויטרינות, ללא תפסי-מכירה.
            </p>
          </Reveal>
        </div>

        <RevealStagger style={{ display: 'grid', gap: 60 }}>
          {PROCESS.map((p) => (
            <RevealItem key={p.num}>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 40, alignItems: 'start' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--bg-paper)', border: '1px solid var(--line-deep)', display: 'grid', placeItems: 'center', fontFamily: 'var(--serif-en)', fontSize: 28, fontStyle: 'italic', color: 'var(--gold-deep)', flexShrink: 0 }}>
                  {p.num}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '.25em', textTransform: 'uppercase' as const, fontSize: 12, color: 'var(--gold)', marginBottom: 8 }}>{p.en}</div>
                  <h2 style={{ fontFamily: 'var(--serif-he)', fontSize: 28, fontWeight: 500, color: 'var(--ink)', marginBlock: '0 12px' }}>{p.he}</h2>
                  <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)' }}>{p.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <div style={{ textAlign: 'center', marginTop: 80 }}>
            <Link href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 30px', background: 'var(--ink)', color: 'var(--bg-paper)', border: '1px solid var(--ink)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em' }}>
              התחלת התהליך
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

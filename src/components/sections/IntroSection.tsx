import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';

export function IntroSection() {
  const features = ['עיצוב אישי', 'יהלומים מוסמכים', 'ייצור בעבודת יד', 'ליווי לכל החיים'];

  return (
    <section
      id="about"
      style={{
        paddingBlock: 'clamp(72px, 9vw, 140px)',
        background: 'var(--bg-paper)',
        borderTop: '1px solid var(--line-soft)',
        borderBottom: '1px solid var(--line-soft)',
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 100, alignItems: 'start' }}>
          <div>
            <SectionEyebrow en="The House" he="אודות הבית" />
            <Reveal>
              <h2 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.012em', color: 'var(--ink)', marginTop: 8 }}>
                סטודיו פרטי, <br /> שיחה אחת על אחד.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ marginTop: 32, height: 1, background: 'var(--line-deep)', width: 60 }} />
            </Reveal>
          </div>
          <RevealStagger style={{ display: 'grid', gap: 24 }}>
            <RevealItem>
              <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 20, lineHeight: 1.7, color: 'var(--ink-2)' }}>
                <strong style={{ fontWeight: 500, color: 'var(--ink)', fontFamily: 'var(--serif-he)' }}>PORAT</strong> נוסד מתוך אהבה לעבודת יד עדינה ולמפגש האישי בין צורף ללקוח. אנו מעצבים ומפיקים תכשיטים יוצאי דופן — טבעות אירוסין, טבעות נישואין, יהלומים, זהב וכסף — בסטודיו פרטי, ללא חנות פתוחה, וללא לחץ.
              </p>
            </RevealItem>
            <RevealItem>
              <p style={{ fontSize: 15, lineHeight: 1.8, letterSpacing: '0.005em', color: 'var(--ink-2)', fontWeight: 300 }}>
                כל יצירה מתחילה בשיחה. אנו מקשיבים לסיפור, להעדפה, לתקציב — ומציעים יהלום, חומר וסגנון מתאימים. תהליך דיסקרטי בעבודת יד, מהסקיצה הראשונה ועד למסירה האישית, בכל רחבי הארץ ובתיאום מראש.
              </p>
            </RevealItem>
            <RevealItem>
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', marginTop: 16, paddingTop: 28, borderTop: '1px solid var(--line-soft)' }}>
                {features.map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 6, height: 6, display: 'inline-block', background: 'var(--gold)', transform: 'rotate(45deg)' }} />
                    <span style={{ fontSize: 14, color: 'var(--ink-2)', letterSpacing: '.05em' }}>{t}</span>
                  </div>
                ))}
              </div>
            </RevealItem>
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}

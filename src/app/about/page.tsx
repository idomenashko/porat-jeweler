import type { Metadata } from 'next';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal } from '@/components/ui/Reveal';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'אודות | סטודיו פרטי',
  description: 'PORAT — סטודיו פרטי לעיצוב תכשיטים בישראל. היכרות עם הצורף, הסטודיו ועם הפילוסופיה שמאחורי כל יצירה.',
};

export default function AboutPage() {
  return (
    <div style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-paper)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <SectionEyebrow en="The House" he="אודות הבית" />
        <Reveal>
          <h1 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(38px, 5.6vw, 84px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ink)', marginBlock: '8px 40px' }}>
            סטודיו פרטי,<br />
            <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)', fontWeight: 400 }}>שיחה אחת על אחד.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ maxWidth: 720, display: 'grid', gap: 24 }}>
            <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 20, lineHeight: 1.7, color: 'var(--ink-2)' }}>
              <strong style={{ fontWeight: 500, color: 'var(--ink)', fontFamily: 'var(--serif-he)' }}>PORAT</strong> נוסד מתוך אהבה לעבודת יד עדינה ולמפגש האישי בין צורף ללקוח. אנו מעצבים ומפיקים תכשיטים יוצאי דופן — טבעות אירוסין, טבעות נישואין, יהלומים, זהב וכסף — בסטודיו פרטי, ללא חנות פתוחה, וללא לחץ.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-2)', fontWeight: 300 }}>
              כל יצירה מתחילה בשיחה. אנו מקשיבים לסיפור, להעדפה, לתקציב — ומציעים יהלום, חומר וסגנון מתאימים. תהליך דיסקרטי בעבודת יד, מהסקיצה הראשונה ועד למסירה האישית, בכל רחבי הארץ ובתיאום מראש.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-2)', fontWeight: 300 }}>
              12 שנות ניסיון, יהלומים מוסמכי GIA, ולקוחות שחוזרים אלינו שוב ושוב — כי טבעת הנישואין היא רק ההתחלה.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

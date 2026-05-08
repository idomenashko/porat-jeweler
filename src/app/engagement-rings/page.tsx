import type { Metadata } from 'next';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Sparkles } from '@/components/ui/Sparkles';
import Link from 'next/link';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'טבעות אירוסין | עיצוב אישי ויחודי',
  description: 'טבעות אירוסין בהתאמה אישית — סוליטר, הילו, פאווה ושלושה יהלומים. עיצוב יחידה במינה עם יהלומי GIA.',
};

export default function EngagementRingsPage() {
  return (
    <div style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
      <Sparkles count={12} />
      <div style={{ maxWidth: 980, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)', position: 'relative', zIndex: 2 }}>
        <SectionEyebrow en="Engagement Rings" he="טבעות אירוסין" />
        <Reveal>
          <h1 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(38px, 5.6vw, 84px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ink)', marginBlock: '8px 40px' }}>
            הטבעת היחידה<br />
            <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)', fontWeight: 400 }}>שתישא חיים שלמים.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 20, lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: 600, marginBottom: 40 }}>
            עיצוב טבעת אירוסין הוא תהליך אישי במיוחד. אנו מלווים אותך מבחירת היהלום, דרך הסגנון והמתכת, ועד למסירה האישית — בסודיות מלאה ובכבוד לסיפור שלכם.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 30px', background: 'var(--ink)', color: 'var(--bg-paper)', border: '1px solid var(--ink)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em' }}>
              התחלת תהליך אירוסין
            </Link>
            <Link href="/gallery" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 30px', background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink-2)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em' }}>
              לגלריית הטבעות
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

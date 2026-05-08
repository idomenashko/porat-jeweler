import type { Metadata } from 'next';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal } from '@/components/ui/Reveal';
import Link from 'next/link';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'תכשיטים בעיצוב אישי',
  description: 'שרשראות, צמידים ועגילים — תכשיטים מותאמים אישית מהסקיצה ועד התוצר.',
};

export default function CustomJewelryPage() {
  return (
    <div style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-paper)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <SectionEyebrow en="Custom Jewelry" he="תכשיטים בעיצוב אישי" />
        <Reveal>
          <h1 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(38px, 5.6vw, 84px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: 'var(--ink)', marginBlock: '8px 40px' }}>
            הרעיון שלך,<br />
            <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)', fontWeight: 400 }}>ביד של אמן.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 20, lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: 600, marginBottom: 40 }}>
            שרשראות, צמידים, עגילים, תליונים — כל תכשיט מתחיל בסקיצה ומסתיים ביצירה ייחודית שנוצרה עבורך בלבד.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 30px', background: 'var(--ink)', color: 'var(--bg-paper)', border: '1px solid var(--ink)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em' }}>
            קביעת פגישה פרטית
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

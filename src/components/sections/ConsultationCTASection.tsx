'use client';

import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { IconWhatsApp } from '@/components/icons';

export function ConsultationCTASection() {
  return (
    <section style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-paper)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)', textAlign: 'center' }}>
        <SectionEyebrow en="Private Consultation" he="פגישה פרטית" align="center" />
        <Reveal>
          <h2 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.012em', color: 'var(--ink)', marginBlock: '8px 24px' }}>
            הסיפור שלכם <br />
            <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)' }}>מתחיל בשיחה.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 17, lineHeight: 1.75, color: 'var(--ink-2)', maxWidth: 580, margin: '0 auto 36px' }}>
            בחרו את הדרך הנוחה לכם. נחזור אליכם בתוך מספר שעות בלבד, בדיסקרטיות מלאה.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 30px', background: 'var(--ink)', color: 'var(--bg-paper)', border: '1px solid var(--ink)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em', cursor: 'pointer', minWidth: 240 }}
            >
              קביעת פגישה פרטית
            </a>
            <a
              href="https://wa.me/972500000000"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 30px', background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink-2)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em', cursor: 'pointer', minWidth: 240 }}
            >
              <IconWhatsApp width={16} height={16} />
              וואטסאפ ישיר
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div style={{ marginTop: 40, fontSize: 12, color: 'var(--ink-3)', letterSpacing: '.2em', textTransform: 'uppercase' as const }}>
            שירות בכל רחבי ישראל · בתיאום מראש · ללא חנות פתוחה
          </div>
        </Reveal>
      </div>
    </section>
  );
}

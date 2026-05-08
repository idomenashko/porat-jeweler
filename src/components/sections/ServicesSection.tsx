'use client';

import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { IconArrowLeft } from '@/components/icons';

const SERVICES = [
  { num: '01', he: 'טבעות אירוסין בהתאמה אישית', en: 'Bespoke Engagement', desc: 'סוליטר, פאווה, שלושה יהלומים — בעיצוב חד-פעמי.' },
  { num: '02', he: 'טבעות נישואין', en: 'Wedding Bands', desc: 'זוגות תואמים, חריטה אישית, פלטינה וזהב 18K.' },
  { num: '03', he: 'יהלומים', en: 'Diamonds', desc: 'יהלומים מוסמכי GIA, ליווי בבחירת אבן יחידה במינה.' },
  { num: '04', he: 'תכשיטים בעיצוב אישי', en: 'Custom Jewelry', desc: 'שרשראות, צמידים ועגילים — מהסקיצה ועד התוצר.' },
  { num: '05', he: 'זהב וכסף', en: 'Gold & Silver', desc: 'זהב 14K / 18K, פלטינה וכסף סטרלינג בעבודת יד.' },
  { num: '06', he: 'שיבוץ יהלומים', en: 'Stone Setting', desc: 'שיבוץ קלאסי או מודרני, בעבודת צורפות עדינה.' },
  { num: '07', he: 'חריטות', en: 'Engraving', desc: 'חריטה ידנית או לייזר — תאריך, שם, אות אישית.' },
  { num: '08', he: 'תיקון וחידוש תכשיטים', en: 'Restoration', desc: 'החזרת ברק לתכשיטים יקרים — ניקוי, שיוף, תיקון.' },
  { num: '09', he: 'קנייה ומכירה של זהב ויהלומים', en: 'Buy & Sell', desc: 'הערכה מקצועית והוגנת לזהב וליהלומים.' },
  { num: '10', he: 'תכשיטים מוכנים', en: 'Ready-to-Wear', desc: 'אוסף מצומצם של חתיכות מוכנות, מוגבל בעותקים.' },
];

export function ServicesSection() {
  return (
    <section id="services" style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <SectionEyebrow en="Atelier Services" he="השירותים שלנו" />
            <Reveal>
              <h2 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.012em', color: 'var(--ink)', marginTop: 8, maxWidth: 720 }}>
                כל עולם התכשיטים, <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-deep)' }}>בעבודת יד אישית.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ background: 'transparent', border: 'none', padding: '0 0 4px', fontSize: 14, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'var(--ink)', cursor: 'pointer', position: 'relative' }}
            >
              לכל השירותים →
            </a>
          </Reveal>
        </div>

        <RevealStagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0, borderTop: '1px solid var(--line-soft)', borderInlineStart: '1px solid var(--line-soft)' }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof SERVICES[number] }) {
  return (
    <RevealItem>
      <article
        style={{
          padding: '36px 32px 32px',
          borderInlineEnd: '1px solid var(--line-soft)',
          borderBottom: '1px solid var(--line-soft)',
          background: 'transparent',
          transition: 'background .4s ease',
          cursor: 'pointer',
          minHeight: 220,
          display: 'flex',
          flexDirection: 'column',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--bg-paper)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <span style={{ fontFamily: 'var(--serif-en)', fontSize: 14, letterSpacing: '.25em', color: 'var(--gold)', fontStyle: 'italic' }}>
            №{service.num}
          </span>
          <span style={{ width: 6, height: 6, display: 'inline-block', background: 'var(--gold)', transform: 'rotate(45deg)', opacity: 0.6 }} />
        </div>
        <h3 style={{ fontFamily: 'var(--serif-he)', fontWeight: 400, fontSize: 22, lineHeight: 1.25, letterSpacing: '-0.005em', color: 'var(--ink)', marginBottom: 10 }}>
          {service.he}
        </h3>
        <div style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--ink-3)', fontSize: 13, letterSpacing: '.05em', marginBottom: 14 }}>
          {service.en}
        </div>
        <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>{service.desc}</p>
        <div style={{ marginTop: 'auto', paddingTop: 20, color: 'var(--gold-deep)', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, letterSpacing: '.15em', textTransform: 'uppercase' as const }}>
          למידע נוסף <IconArrowLeft width={14} height={14} />
        </div>
      </article>
    </RevealItem>
  );
}

'use client';

import Image from 'next/image';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';

const navCol = { title: 'ניווט', links: [
  { label: 'בית', href: '#home' },
  { label: 'אודות', href: '#about' },
  { label: 'שירותים', href: '#services' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'מאמרים', href: '#journal' },
  { label: 'צור קשר', href: '#contact' },
]};

const servicesCol = { title: 'שירותים', links: [
  { label: 'טבעות אירוסין', href: '/engagement-rings' },
  { label: 'טבעות נישואין', href: '/wedding-rings' },
  { label: 'תכשיטים בעיצוב אישי', href: '/custom-jewelry' },
  { label: 'יהלומים', href: '/diamonds' },
  { label: 'זהב וכסף', href: '/services' },
  { label: 'תיקון וחידוש', href: '/services' },
]};

export function Footer() {
  const { whatsapp, description, social } = useSiteSettings();

  const contactCol = { title: 'צור קשר', links: [
    { label: 'WhatsApp', href: whatsapp },
    { label: 'Instagram', href: social.instagram },
    { label: 'Facebook', href: social.facebook },
    { label: 'TikTok', href: social.tiktok },
  ].filter(({ href }) => href && href !== '#') };

  return (
    <footer
      style={{
        background: 'var(--bg-paper)',
        paddingBlock: 70,
        borderTop: '1px solid var(--line-soft)',
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          paddingInline: 'clamp(20px, 4vw, 64px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 40,
            marginBottom: 60,
          }}
        >
          {/* Brand column */}
          <div>
            <Image
              src="/images/porat-logo-cropped.png"
              alt="PORAT"
              width={160}
              height={50}
              style={{ height: 50, width: 'auto', marginBottom: 18 }}
            />
            <p
              style={{
                fontSize: 14,
                color: 'var(--ink-2)',
                lineHeight: 1.7,
                maxWidth: 320,
              }}
            >
              {description}
            </p>
          </div>

          {/* Nav column */}
          <FooterCol col={navCol} />
          {/* Services column */}
          <FooterCol col={servicesCol} />
          {/* Contact column */}
          <FooterCol col={contactCol} />
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 28,
            borderTop: '1px solid var(--line-soft)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
            fontSize: 12,
            color: 'var(--ink-3)',
            letterSpacing: '.1em',
          }}
        >
          <div>© 2026 PORAT — Private Jeweler. כל הזכויות שמורות.</div>
          <div style={{ display: 'flex', gap: 22 }}>
            <a href="#" style={{ color: 'inherit' }}>תקנון</a>
            <a href="#" style={{ color: 'inherit' }}>פרטיות</a>
            <a href="#" style={{ color: 'inherit' }}>נגישות</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ col }: { col: { title: string; links: { label: string; href: string }[] } }) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--sans-he)',
          fontWeight: 300,
          letterSpacing: '.42em',
          fontSize: 11,
          color: 'var(--gold-deep)',
          marginBottom: 18,
        }}
      >
        {col.title}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
        {col.links.map((l) => (
          <li key={l.label}>
            <a href={l.href} style={{ fontSize: 14, color: 'var(--ink-2)' }}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

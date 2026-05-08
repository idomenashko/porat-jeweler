'use client';

import Image from 'next/image';
import { IconClose, IconWhatsApp, IconInstagram, IconFacebook, IconTikTok } from '@/components/icons';

const menuLinks = [
  { id: 'about', label: 'אודות', num: '01' },
  { id: 'services', label: 'שירותים', num: '02' },
  { id: 'engagement', label: 'טבעות אירוסין', num: '03' },
  { id: 'diamonds', label: 'יהלומים', num: '04' },
  { id: 'gallery', label: 'גלריה', num: '05' },
  { id: 'process', label: 'תהליך העבודה', num: '06' },
  { id: 'journal', label: 'מאמרים', num: '07' },
  { id: 'contact', label: 'צור קשר', num: '08' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const goTo = (id: string) => {
    onClose();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(20,12,5,.45)',
        zIndex: 200,
        animation: 'fadeIn .3s ease',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          insetInlineEnd: 0,
          background: 'var(--bg-paper)',
          padding: '32px 28px',
          width: 'min(380px, 92vw)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideInR .35s cubic-bezier(.22,.61,.36,1)',
          boxShadow: '-30px 0 80px -20px rgba(20,12,5,.25)',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 36,
            paddingBottom: 20,
            borderBottom: '1px solid var(--line-soft)',
          }}
        >
          <Image
            src="/images/porat-logo-cropped.png"
            alt="PORAT"
            width={120}
            height={36}
            style={{ height: 36, width: 'auto', filter: 'brightness(0.5) contrast(1.2)' }}
          />
          <button
            onClick={onClose}
            aria-label="סגור תפריט"
            style={{
              background: 'none',
              border: '1px solid var(--line)',
              borderRadius: '50%',
              width: 38,
              height: 38,
              display: 'grid',
              placeItems: 'center',
              color: 'var(--ink-1)',
            }}
          >
            <IconClose width={16} height={16} />
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 0, flex: 1 }}>
          {menuLinks.map((l) => (
            <li key={l.id} style={{ borderBottom: '1px solid var(--line-soft)' }}>
              <a
                href={`#${l.id}`}
                onClick={(e) => { e.preventDefault(); goTo(l.id); }}
                style={{
                  fontFamily: 'var(--serif-he)',
                  fontSize: 22,
                  fontWeight: 300,
                  color: 'var(--ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBlock: 18,
                  letterSpacing: '-.005em',
                }}
              >
                <span>{l.label}</span>
                <span
                  style={{
                    fontFamily: 'var(--serif-en)',
                    fontSize: 11,
                    fontStyle: 'italic',
                    color: 'var(--gold)',
                    letterSpacing: '.15em',
                  }}
                >
                  {l.num}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 24, display: 'grid', gap: 12 }}>
          <a
            href="https://wa.me/972500000000"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              padding: '16px 20px',
              background: '#25D366',
              color: 'white',
              border: '1px solid #25D366',
              fontFamily: 'var(--sans-he)',
              fontWeight: 400,
              fontSize: 14,
              letterSpacing: '.08em',
            }}
          >
            <IconWhatsApp width={18} height={18} />
            שליחת הודעה בוואטסאפ
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); goTo('contact'); }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              padding: '16px 20px',
              background: 'transparent',
              color: 'var(--ink)',
              border: '1px solid var(--ink-2)',
              fontFamily: 'var(--sans-he)',
              fontWeight: 400,
              fontSize: 14,
              letterSpacing: '.08em',
            }}
          >
            קביעת פגישה פרטית
          </a>

          <div
            style={{
              paddingTop: 18,
              marginTop: 8,
              borderTop: '1px solid var(--line-soft)',
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
            }}
          >
            {[
              { Icon: IconInstagram, label: 'Instagram' },
              { Icon: IconFacebook, label: 'Facebook' },
              { Icon: IconTikTok, label: 'TikTok' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{
                  width: 38,
                  height: 38,
                  border: '1px solid var(--line)',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--ink-2)',
                }}
              >
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

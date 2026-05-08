'use client';

import { IconWhatsApp } from '@/components/icons';

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/972500000000"
      aria-label="שלח הודעה בוואטסאפ"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        insetInlineStart: 24,
        bottom: 24,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: '#25D366',
        color: 'white',
        display: 'grid',
        placeItems: 'center',
        boxShadow: '0 12px 30px -8px rgba(37,211,102,.55), 0 4px 10px rgba(0,0,0,.12)',
        zIndex: 100,
        transition: 'transform .3s ease, box-shadow .3s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px) scale(1.04)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = '';
      }}
    >
      <span
        style={{
          position: 'absolute',
          inset: -6,
          borderRadius: '50%',
          border: '1px solid rgba(37,211,102,.4)',
          animation: 'pulse 2.6s ease-out infinite',
          pointerEvents: 'none',
        }}
      />
      <IconWhatsApp width={28} height={28} />
    </a>
  );
}

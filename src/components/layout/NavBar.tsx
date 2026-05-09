'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconMenu, IconWhatsApp } from '@/components/icons';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';

const navLinks = [
  { id: 'about', label: 'אודות' },
  { id: 'services', label: 'שירותים' },
  { id: 'engagement', label: 'טבעות אירוסין' },
  { id: 'diamonds', label: 'יהלומים' },
  { id: 'gallery', label: 'גלריה' },
  { id: 'journal', label: 'מאמרים' },
];

interface NavBarProps {
  onMenuOpen: () => void;
}

export function NavBar({ onMenuOpen }: NavBarProps) {
  const { whatsapp } = useSiteSettings();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--sans-he)',
    fontSize: 13,
    fontWeight: 300,
    letterSpacing: '.08em',
    color: 'var(--ink-1)',
    paddingBlock: 6,
    transition: 'color .3s ease',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(251,246,236,.97)' : 'rgba(251,246,236,.55)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: scrolled ? '1px solid var(--line-soft)' : '1px solid transparent',
        boxShadow: scrolled ? '0 12px 40px -28px rgba(60,40,15,.18)' : 'none',
        transition: 'all .45s cubic-bezier(.22,.61,.36,1)',
      }}
    >
      {/* Gold hairline accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'linear-gradient(90deg, transparent, var(--gold-soft), transparent)',
          opacity: scrolled ? 0 : 0.35,
          transition: 'opacity .4s ease',
        }}
      />

      {/* Mobile header */}
      <div
        className="md:hidden"
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          padding: scrolled ? '12px 20px' : '16px 20px',
          transition: 'padding .35s ease',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <button
            onClick={onMenuOpen}
            aria-label="תפריט"
            style={{
              width: 42,
              height: 42,
              background: 'transparent',
              border: '1px solid var(--line)',
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--ink-1)',
            }}
          >
            <IconMenu width={18} height={18} />
          </button>
          <a
            href={whatsapp}
            aria-label="WhatsApp"
            style={{
              width: 42,
              height: 42,
              background: '#25D366',
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              color: 'white',
            }}
          >
            <IconWhatsApp width={18} height={18} />
          </a>
        </div>
        <div />
        <a href="#home" onClick={(e) => { e.preventDefault(); goTo('home'); }}>
          <Image
            src="/images/porat-logo-cropped.png"
            alt="PORAT — Private Jeweler"
            width={200}
            height={60}
            style={{
              height: scrolled ? 38 : 46,
              width: 'auto',
              filter: 'brightness(0.5) contrast(1.2) saturate(1.05)',
            }}
            priority
          />
        </a>
      </div>

      {/* Desktop header */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          padding: scrolled ? '14px clamp(20px,4vw,64px)' : '22px clamp(20px,4vw,64px)',
          transition: 'padding .35s ease',
          gap: 28,
          maxWidth: 1480,
          marginInline: 'auto',
        }}
      >
        {/* Right nav (first 3 links in RTL) */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 2.4vw, 36px)', justifyContent: 'flex-start' }}>
          {navLinks.slice(0, 3).map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => { e.preventDefault(); goTo(l.id); }}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-deep)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-1)')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Center logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); goTo('home'); }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingInline: 'clamp(16px, 3vw, 36px)' }}
        >
          <Image
            src="/images/porat-logo-cropped.png"
            alt="PORAT — Private Jeweler"
            width={280}
            height={80}
            style={{
              height: scrolled ? 46 : 60,
              width: 'auto',
              filter: 'brightness(0.5) contrast(1.2) saturate(1.05)',
              transition: 'height .4s cubic-bezier(.22,.61,.36,1)',
            }}
            priority
          />
        </a>

        {/* Left nav + CTA (last 3 links) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 2.4vw, 36px)', justifyContent: 'flex-end' }}>
          {navLinks.slice(3).map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => { e.preventDefault(); goTo(l.id); }}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-deep)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-1)')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); goTo('contact'); }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '11px 22px',
              fontSize: 12,
              background: 'var(--ink)',
              color: 'var(--bg-paper)',
              border: '1px solid var(--ink)',
              letterSpacing: '.12em',
              marginInlineStart: 8,
              fontFamily: 'var(--sans-he)',
              fontWeight: 400,
              cursor: 'pointer',
              transition: 'all .35s cubic-bezier(.22,.61,.36,1)',
              whiteSpace: 'nowrap',
            }}
          >
            קביעת פגישה
          </a>
        </div>
      </div>
    </header>
  );
}

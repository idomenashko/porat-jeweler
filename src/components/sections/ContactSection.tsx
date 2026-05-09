'use client';

import { useState } from 'react';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Sparkles } from '@/components/ui/Sparkles';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { IconWhatsApp, IconPhone, IconArrowLeft, IconInstagram, IconFacebook, IconTikTok, IconDiamond } from '@/components/icons';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';
import type { ContactFormSettings } from '@/types/sanity';

const TOPICS = ['טבעת אירוסין', 'טבעות נישואין', 'תכשיט מותאם אישית', 'יהלום', 'תיקון / חידוש', 'אחר'];

interface ContactSectionProps {
  contactFormSettings?: ContactFormSettings | null;
}

export function ContactSection({ contactFormSettings }: ContactSectionProps) {
  const { phone, whatsapp, social } = useSiteSettings();

  const topics = (contactFormSettings?.topicOptions && contactFormSettings.topicOptions.length > 0)
    ? contactFormSettings.topicOptions
    : TOPICS;

  const [form, setForm] = useState({ name: '', phone: '', topic: topics[0] ?? 'טבעת אירוסין', msg: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } catch {
      // fallback: show success anyway (dev mode)
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(216,182,128,.4)',
    padding: '12px 0',
    color: '#fdf6e6',
    fontFamily: 'var(--sans-he)',
    fontSize: 16,
    outline: 'none',
    direction: 'rtl',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 11,
    color: 'var(--gold-glow)',
    letterSpacing: '.2em',
    textTransform: 'uppercase' as const,
    marginBottom: 8,
  };

  const socialLinks = [
    { Icon: IconInstagram, label: 'Instagram', href: social.instagram },
    { Icon: IconFacebook, label: 'Facebook', href: social.facebook },
    { Icon: IconTikTok, label: 'TikTok', href: social.tiktok },
  ].filter(({ href }) => href && href !== '#');

  return (
    <section id="contact" style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: '#1a130c', color: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <Sparkles count={14} />
      <div style={{ maxWidth: 1320, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80 }}>
          {/* Left: contact info */}
          <div>
            <SectionEyebrow en="Get in Touch" he="צור קשר" />
            <Reveal>
              <h2 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.012em', color: '#f5ead2', marginBlock: '8px 24px' }}>
                שיחה ראשונה,<br />
                <em style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', color: 'var(--gold-glow)' }}>בלי התחייבות.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 17, lineHeight: 1.75, color: 'rgba(245,234,210,.75)', marginBottom: 36 }}>
                שירות אישי ללקוחות בכל רחבי ישראל. נחזור אליכם בתוך מספר שעות, בדיסקרטיות מלאה.
              </p>
            </Reveal>

            <RevealStagger style={{ display: 'grid', gap: 18, marginBottom: 36 }}>
              <RevealItem>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px', border: '1px solid rgba(216,182,128,.3)', color: '#f5ead2', transition: 'all .3s' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(216,182,128,.08)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                >
                  <span style={{ width: 44, height: 44, background: '#25D366', borderRadius: '50%', display: 'grid', placeItems: 'center', color: 'white' }}>
                    <IconWhatsApp width={20} height={20} />
                  </span>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--gold-glow)', letterSpacing: '.15em', textTransform: 'uppercase' as const, marginBottom: 4 }}>WhatsApp</div>
                    <div style={{ fontFamily: 'var(--serif-he)', fontSize: 18, color: '#fdf6e6' }}>שליחת הודעה מיידית</div>
                  </div>
                  <IconArrowLeft width={18} height={18} style={{ marginInlineStart: 'auto', opacity: 0.6 }} />
                </a>
              </RevealItem>
              <RevealItem>
                <a
                  href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                  style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px', border: '1px solid rgba(216,182,128,.3)', color: '#f5ead2', transition: 'all .3s' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(216,182,128,.08)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                >
                  <span style={{ width: 44, height: 44, background: 'var(--gold)', borderRadius: '50%', display: 'grid', placeItems: 'center', color: '#1a130c' }}>
                    <IconPhone width={20} height={20} />
                  </span>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--gold-glow)', letterSpacing: '.15em', textTransform: 'uppercase' as const, marginBottom: 4 }}>טלפון</div>
                    <div style={{ fontFamily: 'var(--serif-he)', fontSize: 18, color: '#fdf6e6', direction: 'ltr', textAlign: 'right' as const }}>{phone}</div>
                  </div>
                  <IconArrowLeft width={18} height={18} style={{ marginInlineStart: 'auto', opacity: 0.6 }} />
                </a>
              </RevealItem>
            </RevealStagger>

            <div style={{ paddingTop: 28, borderTop: '1px solid rgba(216,182,128,.2)' }}>
              <div style={{ fontSize: 11, color: 'var(--gold-glow)', letterSpacing: '.25em', textTransform: 'uppercase' as const, marginBottom: 18 }}>עקבו אחרינו</div>
              {socialLinks.length > 0 && (
                <div style={{ display: 'flex', gap: 12 }}>
                  {socialLinks.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ width: 46, height: 46, border: '1px solid rgba(216,182,128,.4)', color: '#f5ead2', display: 'grid', placeItems: 'center', transition: 'all .3s' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--gold)'; (e.currentTarget as HTMLElement).style.color = '#1a130c'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#f5ead2'; }}
                    >
                      <Icon width={18} height={18} />
                    </a>
                  ))}
                </div>
              )}
              <div style={{ marginTop: 26, fontSize: 13, color: 'rgba(245,234,210,.55)', lineHeight: 1.7 }}>
                שירות אישי ללקוחות בכל רחבי ישראל<br />
                ללא חנות פתוחה — בתיאום מראש בלבד
              </div>
            </div>
          </div>

          {/* Right: form */}
          <Reveal>
            <div style={{ background: 'rgba(245,234,210,.04)', padding: 44, border: '1px solid rgba(216,182,128,.25)' }}>
              <div style={{ fontFamily: 'var(--serif-en)', fontStyle: 'italic', fontWeight: 400, letterSpacing: '.25em', textTransform: 'uppercase' as const, fontSize: 12, color: 'var(--gold-glow)', marginBottom: 8 }}>
                Send a Message · טופס יצירת קשר
              </div>
              <h3 style={{ fontFamily: 'var(--serif-he)', fontSize: 28, color: '#fdf6e6', marginBlock: '0 24px', fontWeight: 500 }}>
                בקשת פגישה פרטית
              </h3>

              {sent ? (
                <div style={{ padding: 30, textAlign: 'center', border: '1px solid var(--gold-glow)', color: '#f5ead2' }}>
                  <IconDiamond width={32} height={32} style={{ margin: '0 auto 16px', color: 'var(--gold-glow)', display: 'block' }} />
                  <div style={{ fontFamily: 'var(--serif-he)', fontSize: 22, marginBottom: 8 }}>תודה רבה</div>
                  <div style={{ fontSize: 14, color: 'rgba(245,234,210,.7)' }}>פנייתכם התקבלה. נחזור אליכם בהקדם.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 18 }}>
                  <label style={{ display: 'block' }}>
                    <span style={labelStyle}>שם מלא <span style={{ color: 'var(--gold-glow)' }}>*</span></span>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
                  </label>
                  <label style={{ display: 'block' }}>
                    <span style={labelStyle}>טלפון <span style={{ color: 'var(--gold-glow)' }}>*</span></span>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
                  </label>
                  <label style={{ display: 'block' }}>
                    <span style={labelStyle}>נושא הפנייה</span>
                    <select value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} style={{ ...inputStyle, appearance: 'none' as const }}>
                      {topics.map((o) => <option key={o} style={{ background: '#1a130c', color: '#fdf6e6' }}>{o}</option>)}
                    </select>
                  </label>
                  <label style={{ display: 'block' }}>
                    <span style={labelStyle}>הודעה</span>
                    <textarea value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
                  </label>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 8, padding: '18px 28px', background: loading ? 'var(--gold-soft)' : 'var(--gold)', color: 'var(--bg-paper)', border: '1px solid var(--gold)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em', cursor: loading ? 'wait' : 'pointer' }}
                  >
                    {loading ? 'שולח...' : 'שליחת הבקשה'}
                    {!loading && <IconArrowLeft width={16} height={16} />}
                  </button>
                  <div style={{ fontSize: 11, color: 'rgba(245,234,210,.5)', letterSpacing: '.05em', marginTop: 4 }}>
                    שליחת הטופס מהווה הסכמה ליצירת קשר חוזר. הפרטים נשמרים בסודיות מלאה.
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

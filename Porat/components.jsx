/* PORAT — Reusable components */
const { useState, useEffect, useRef, useMemo } = React;

/* ------------------------------------------------------------------ */
/* Icons                                                              */
/* ------------------------------------------------------------------ */

const Icon = {
  whatsapp: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.005 21.785h-.005a9.87 9.87 0 0 1-5.03-1.378l-.36-.214-3.74.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.89-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.889 9.885zm8.413-18.297A11.815 11.815 0 0 0 12.005 0C5.495 0 .197 5.298.195 11.806c0 2.08.544 4.11 1.578 5.9L.096 24l6.435-1.687a11.793 11.793 0 0 0 5.464 1.392h.005c6.51 0 11.808-5.299 11.81-11.806a11.74 11.74 0 0 0-3.392-8.41z"/>
    </svg>
  ),
  phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...p}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z"/>
    </svg>
  ),
  instagram: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" {...p}>
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
    </svg>
  ),
  facebook: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
    </svg>
  ),
  tiktok: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.92a8.16 8.16 0 004.77 1.52V7a4.85 4.85 0 01-1.84-.31z"/>
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" {...p}>
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>
  ),
  arrowLeft: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" {...p}>
      <path d="M19 12H5M11 5l-7 7 7 7"/>
    </svg>
  ),
  diamond: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" {...p}>
      <path d="M6 3h12l3 6-9 12L3 9l3-6z" />
      <path d="M6 3l3 6h6l3-6M3 9h18M9 9l3 12 3-12"/>
    </svg>
  ),
  ring: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true" {...p}>
      <path d="M8 4l4-2 4 2-2 3h-4L8 4z"/>
      <circle cx="12" cy="15" r="6"/>
    </svg>
  ),
  menu: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" {...p}>
      <path d="M3 7h18M3 12h18M3 17h18"/>
    </svg>
  ),
  close: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" {...p}>
      <path d="M5 5l14 14M19 5l-14 14"/>
    </svg>
  ),
  sparkle: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z"/>
    </svg>
  ),
  plus: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" {...p}>
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/* Logo (uses cropped png) + monogram fallback                         */
/* ------------------------------------------------------------------ */
function Logo({ size = 140, color = "currentColor", className = "" }) {
  return (
    <div className={className} style={{ display: "inline-flex", alignItems: "center", color }}>
      <img
        src="assets/porat-logo-cropped.png"
        alt="PORAT — Private Jeweler"
        style={{ height: size * 0.42, width: "auto", display: "block" }}
      />
    </div>
  );
}

/* Logo rendered as inline svg so we can recolor it */
function LogoMark({ width = 220, color = "var(--gold)", subColor }) {
  const sub = subColor || color;
  return (
    <svg viewBox="0 0 660 200" width={width} aria-label="PORAT — Private Jeweler" style={{ display: "block" }}>
      <text
        x="330" y="118"
        textAnchor="middle"
        fontFamily='"Cormorant Garamond", "Playfair Display", Georgia, serif'
        fontWeight="500"
        fontSize="138"
        letterSpacing="14"
        fill={color}
      >PORAT</text>
      <g stroke={sub} strokeWidth="1.2" fill="none" opacity=".95">
        <line x1="120" y1="166" x2="240" y2="166"/>
        <line x1="420" y1="166" x2="540" y2="166"/>
        <polygon points="330,158 322,168 330,178 338,168" fill={sub} stroke="none"/>
      </g>
      <text
        x="330" y="172"
        textAnchor="middle"
        fontFamily='"Cormorant Garamond", Georgia, serif'
        fontWeight="400"
        fontSize="18"
        letterSpacing="6"
        fill={sub}
      >PRIVATE</text>
      <text
        x="330" y="172"
        textAnchor="middle"
        fontFamily='"Cormorant Garamond", Georgia, serif'
        fontWeight="400"
        fontSize="18"
        letterSpacing="6"
        fill={sub}
        dx="60"
      >JEWELER</text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Reveal-on-scroll (IntersectionObserver)                            */
/* ------------------------------------------------------------------ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/* Placeholder image                                                  */
/* ------------------------------------------------------------------ */
function Placeholder({ label = "JEWELRY MACRO", id = "IMG-001", tone = "cream", aspect = "4 / 5", className = "", children, style = {} }) {
  return (
    <div className={`ph ph-tone-${tone} ${className}`} style={{ aspectRatio: aspect, ...style }}>
      <span className="ph-id">{id}</span>
      <span className="ph-label">{label}</span>
      {children}
    </div>
  );
}

/* Lifestyle / sketch styled placeholder (paper feel) */
function SketchPlaceholder({ label = "SKETCH", id = "DR-001", aspect = "4/3", className = "" }) {
  return (
    <div className={`ph ph-tone-sketch ${className}`} style={{ aspectRatio: aspect, position: "relative" }}>
      <span className="ph-id">{id}</span>
      <span className="ph-label">{label}</span>
      <svg viewBox="0 0 240 180" preserveAspectRatio="xMidYMid meet" style={{ position:"absolute", inset:0, width:"100%", height:"100%", padding: "10%" }}>
        <g fill="none" stroke="rgba(110,84,41,.55)" strokeWidth=".7">
          <circle cx="120" cy="100" r="34"/>
          <circle cx="120" cy="100" r="38" strokeDasharray="2 3"/>
          <path d="M86 100 Q120 60 154 100"/>
          <path d="M114 60 l6 -8 l6 8 l-2 4 h-8 z" fill="rgba(155,123,60,.18)"/>
          <path d="M120 50 v-10 M104 56 l-6 -6 M136 56 l6 -6"/>
        </g>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sparkles — subtle floating diamond particles                        */
/* ------------------------------------------------------------------ */
function Sparkles({ count = 14, area = "absolute" }) {
  const items = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      d: 2 + Math.random() * 6,
      delay: Math.random() * 4,
      dur: 3 + Math.random() * 4,
    })),
    [count]
  );
  return (
    <div style={{ position: area, inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 1 }}>
      {items.map((s, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.d, height: s.d,
            background: "var(--gold-glow)",
            transform: "rotate(45deg)",
            opacity: 0,
            animation: `sparkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
            boxShadow: "0 0 6px rgba(216,182,128,.6)",
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading block                                              */
/* ------------------------------------------------------------------ */
function SectionEyebrow({ en, he, align = "right" }) {
  return (
    <div className="reveal" style={{ textAlign: align, marginBottom: 14, display: "flex", alignItems: "center", justifyContent: align === "center" ? "center" : "flex-start", gap: 12 }}>
      <span className="diamond-mark" style={{ width: 6, height: 6 }} />
      <span className="eyebrow">{en}</span>
      {he && <>
        <span style={{ width: 1, height: 12, background: "var(--line-deep)" }} />
        <span className="eyebrow-he">{he}</span>
      </>}
    </div>
  );
}

/* Make these globally available */
Object.assign(window, {
  Icon, Logo, LogoMark, Placeholder, SketchPlaceholder, Sparkles, SectionEyebrow, useReveal,
});

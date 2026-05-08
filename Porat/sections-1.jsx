/* PORAT — Homepage sections (part 1: hero, intro, services, process) */

function NavBar({ onMenu, page, setPage, mobile }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const root = document.querySelector(".scroll-root") || window;
      const y = root === window ? window.scrollY : root.scrollTop;
      setScrolled(y > 20);
    };
    const root = document.querySelector(".scroll-root") || window;
    root.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  // Centered editorial nav: 3 + 3 around centered logo
  const navLinks = [
    { id: "about", label: "אודות" },
    { id: "services", label: "שירותים" },
    { id: "engagement", label: "טבעות אירוסין" },
    { id: "diamonds", label: "יהלומים" },
    { id: "gallery", label: "גלריה" },
    { id: "journal", label: "מאמרים" },
  ];

  const goTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const root = document.querySelector(".scroll-root") || window;
    if (root === window) target.scrollIntoView({ behavior: "smooth", block: "start" });
    else root.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
  };

  const linkStyle = {
    fontFamily: "var(--sans-he)",
    fontSize: 13,
    fontWeight: 300,
    letterSpacing: ".08em",
    color: "var(--ink-1)",
    position: "relative",
    paddingBlock: 6,
    transition: "color .3s ease",
    textDecoration: "none",
  };

  return (
    <header
      className="porat-nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(251,246,236,.97)" : "rgba(251,246,236,.55)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: scrolled ? "1px solid var(--line-soft)" : "1px solid transparent",
        boxShadow: scrolled ? "0 12px 40px -28px rgba(60,40,15,.18)" : "none",
        transition: "all .45s cubic-bezier(.22,.61,.36,1)",
      }}
    >
      {/* Hairline accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 2,
        background: "linear-gradient(90deg, transparent, var(--gold-soft), transparent)",
        opacity: scrolled ? 0 : .35,
        transition: "opacity .4s ease",
      }}/>

      {mobile ? (
        /* ----------- MOBILE HEADER ----------- */
        <div style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          padding: scrolled ? "12px 20px" : "16px 20px",
          transition: "padding .35s ease",
          gap: 12,
        }}>
          {/* Left: hamburger + WhatsApp */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <button onClick={onMenu} aria-label="תפריט" style={{
              width: 42, height: 42,
              background: "transparent",
              border: "1px solid var(--line)",
              borderRadius: "50%",
              display: "grid", placeItems: "center",
              color: "var(--ink-1)",
              transition: "all .25s ease",
            }}>
              <Icon.menu width="18" height="18"/>
            </button>
            <a href="#wa" aria-label="WhatsApp" style={{
              width: 42, height: 42,
              background: "#25D366",
              borderRadius: "50%",
              display: "grid", placeItems: "center",
              color: "white",
              boxShadow: "0 4px 14px -4px rgba(37,211,102,.4)",
            }}>
              <Icon.whatsapp width="18" height="18"/>
            </a>
          </div>

          {/* Center: spacer */}
          <div/>

          {/* Right: logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); goTo("home"); }} style={{ display: "flex", alignItems: "center" }}>
            <img
              src="assets/porat-logo-cropped.png"
              alt="PORAT — Private Jeweler"
              style={{
                height: scrolled ? 38 : 46,
                width: "auto",
                display: "block",
                transition: "height .35s ease",
                filter: "brightness(0.5) contrast(1.2) saturate(1.05)",
                imageRendering: "auto",
              }}
            />
          </a>
        </div>
      ) : (
        /* ----------- DESKTOP HEADER — centered editorial layout ----------- */
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: scrolled ? "14px clamp(20px,4vw,64px)" : "22px clamp(20px,4vw,64px)",
          transition: "padding .35s ease",
          gap: 28,
          maxWidth: 1480,
          marginInline: "auto",
        }}>
          {/* RIGHT (in RTL = first cell): nav links */}
          <nav style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 2.4vw, 36px)", justifyContent: "flex-start" }}>
            {navLinks.slice(0, 3).map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); goTo(l.id); }} style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold-deep)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--ink-1)"}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* CENTER: logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); goTo("home"); }} style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            paddingInline: "clamp(16px, 3vw, 36px)",
          }}>
            <img
              src="assets/porat-logo-cropped.png"
              alt="PORAT — Private Jeweler"
              style={{
                height: scrolled ? 46 : 60,
                width: "auto",
                display: "block",
                transition: "height .4s cubic-bezier(.22,.61,.36,1)",
                filter: "brightness(0.5) contrast(1.2) saturate(1.05)",
              }}
            />
          </a>

          {/* LEFT (last cell): nav + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 2.4vw, 36px)", justifyContent: "flex-end" }}>
            {navLinks.slice(3).map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); goTo(l.id); }} style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold-deep)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--ink-1)"}>
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn"
              onClick={(e) => { e.preventDefault(); goTo("contact"); }}
              style={{
                padding: "11px 22px",
                fontSize: 12,
                background: "var(--ink)",
                color: "var(--bg-paper)",
                border: "1px solid var(--ink)",
                letterSpacing: ".12em",
                marginInlineStart: 8,
              }}
            >
              קביעת פגישה
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

function HeroSection({ mobile }) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const root = document.querySelector(".scroll-root") || window;
    const onScroll = () => {
      const y = root === window ? window.scrollY : root.scrollTop;
      setScrollY(y);
    };
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  const ringRotate = scrollY * 0.15;
  const parallaxY = scrollY * 0.18;

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: mobile ? "auto" : "92vh",
        background: "var(--bg)",
        overflow: "hidden",
        paddingBottom: mobile ? 60 : 0,
      }}
    >
      <Sparkles count={mobile ? 8 : 16} />

      {/* Decorative type behind */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      >
        <span style={{
          fontFamily: "var(--serif-en)",
          fontSize: mobile ? "30vw" : "23vw",
          letterSpacing: ".06em",
          color: "var(--gold)",
          fontWeight: 500,
          transform: `translateY(${parallaxY * 0.3}px)`,
        }}>PORAT</span>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: mobile ? 24 : 60 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1.1fr 1fr",
            gap: mobile ? 40 : 60,
            alignItems: "center",
            minHeight: mobile ? "auto" : "calc(92vh - 100px)",
          }}
        >
          {/* Copy column */}
          <div style={{ order: mobile ? 2 : 1 }}>
            <SectionEyebrow en="Private Jeweler · Israel" he="צורף פרטי · ישראל"/>

            <h1 className="h-display reveal" style={{ marginBlock: "8px 30px" }}>
              תכשיטים בעיצוב אישי,
              <br/>
              <em style={{ fontFamily: "var(--serif-en)", fontStyle: "italic", color: "var(--gold-deep)", fontWeight: 400 }}>
                שנוצרים עבורך בלבד.
              </em>
            </h1>

            <p className="lede reveal" style={{ maxWidth: 540, marginBottom: 40 }}>
              סטודיו פרטי לעיצוב והפקה של טבעות אירוסין, טבעות נישואין ויהלומים נדירים.
              ייעוץ אישי, פגישה דיסקרטית, וייצור בעבודת יד — בכל רחבי ישראל, בתיאום מראש.
            </p>

            <div className="reveal" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                קביעת פגישה פרטית
                <Icon.arrowLeft width="16" height="16"/>
              </a>
              <a className="btn btn-ghost" href="#wa" style={{ gap: 10 }}>
                <Icon.whatsapp width="16" height="16"/>
                שליחת הודעה בוואטסאפ
              </a>
            </div>

            {/* trust stripe */}
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 60, color: "var(--ink-3)", flexWrap: "wrap" }}>
              {[
                ["12+", "שנות מומחיות"],
                ["GIA", "יהלומים מוסמכים"],
                ["100%", "בעבודת יד"],
              ].map(([n, l], i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontFamily: "var(--serif-en)", fontSize: 28, color: "var(--gold-deep)", fontWeight: 500, lineHeight: 1 }}>{n}</span>
                  <span style={{ fontSize: 12, letterSpacing: ".15em", textTransform: "uppercase" }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual column */}
          <div style={{ order: mobile ? 1 : 2, position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: mobile ? "4/5" : "4/5", maxWidth: 560, marginInline: "auto" }}>
              <Placeholder
                label="HERO · MACRO RING"
                id="HER-001"
                tone="cream"
                aspect={mobile ? "4/5" : "4/5"}
                className="reveal"
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `translateY(${-parallaxY * 0.2}px)`,
                  transition: "none",
                  boxShadow: "var(--shadow-deep)",
                }}
              />
              {/* Floating rotating ring */}
              <div style={{
                position: "absolute",
                bottom: mobile ? "-30px" : "-50px",
                insetInlineStart: mobile ? "-20px" : "-60px",
                width: mobile ? 140 : 210,
                height: mobile ? 140 : 210,
                animation: "float-slow 7s ease-in-out infinite",
              }}>
                <svg viewBox="0 0 200 200" style={{ animation: "spin-slow 60s linear infinite" }}>
                  <defs>
                    <radialGradient id="ringG" cx="50%" cy="50%" r="50%">
                      <stop offset="60%" stopColor="rgba(216,182,128,0)"/>
                      <stop offset="100%" stopColor="rgba(216,182,128,.3)"/>
                    </radialGradient>
                  </defs>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="var(--gold)" strokeWidth="1"/>
                  <circle cx="100" cy="100" r="80" fill="url(#ringG)"/>
                  <circle cx="100" cy="100" r="78" fill="none" stroke="var(--gold-glow)" strokeWidth=".4" strokeDasharray="1 4"/>
                  <g transform="translate(100,22)">
                    <polygon points="0,-10 -8,0 0,12 8,0" fill="var(--gold-deep)"/>
                    <polygon points="0,-10 -8,0 0,12 8,0" fill="none" stroke="var(--gold-glow)" strokeWidth=".5"/>
                    <line x1="-8" y1="0" x2="8" y2="0" stroke="var(--gold-glow)" strokeWidth=".4"/>
                  </g>
                </svg>
              </div>

              {/* small caption */}
              <div className="reveal" style={{
                position: "absolute",
                top: mobile ? -10 : -24,
                insetInlineEnd: mobile ? -8 : -40,
                background: "var(--bg-paper)",
                padding: "14px 20px",
                boxShadow: "var(--shadow-card)",
                maxWidth: 220,
                border: "1px solid var(--line-soft)",
              }}>
                <div className="eyebrow" style={{ marginBottom: 6 }}>Édition №017</div>
                <div style={{ fontFamily: "var(--serif-he)", fontSize: 16, color: "var(--ink)", lineHeight: 1.3 }}>
                  טבעת אירוסין יחידה במינה
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 4 }}>
                  יהלום סוליטר · 1.04ct · D · VS1
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        {!mobile && (
          <div style={{
            position: "absolute",
            bottom: 30,
            insetInlineEnd: 64,
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "var(--ink-3)",
            fontSize: 11,
            letterSpacing: ".25em",
            textTransform: "uppercase",
          }}>
            <span>גלילה</span>
            <span style={{ width: 50, height: 1, background: "var(--line-deep)", display: "block",
              animation: "shimmer 3s linear infinite",
              backgroundSize: "200% 100%",
              backgroundImage: "linear-gradient(90deg, var(--gold), var(--bg) 50%, var(--gold))" }} />
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* BRAND INTRO                                                         */
/* ------------------------------------------------------------------ */

function IntroSection({ mobile }) {
  return (
    <section id="about" className="section" style={{ background: "var(--bg-paper)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1.4fr", gap: mobile ? 40 : 100, alignItems: "start" }}>
          <div>
            <SectionEyebrow en="The House" he="אודות הבית"/>
            <h2 className="h-section reveal" style={{ marginTop: 8 }}>
              סטודיו פרטי, <br/> שיחה אחת על אחד.
            </h2>
            <div className="reveal" style={{ marginTop: 32, height: 1, background: "var(--line-deep)", width: 60 }} />
          </div>
          <div className="reveal-stagger" style={{ display: "grid", gap: 24 }}>
            <p className="lede" style={{ fontSize: 20, lineHeight: 1.7 }}>
              <strong style={{ fontWeight: 500, color: "var(--ink)", fontFamily: "var(--serif-he)" }}>PORAT</strong> נוסד מתוך אהבה לעבודת יד עדינה ולמפגש האישי בין צורף ללקוח. אנו מעצבים ומפיקים תכשיטים יוצאי דופן — טבעות אירוסין, טבעות נישואין, יהלומים, זהב וכסף — בסטודיו פרטי, ללא חנות פתוחה, וללא לחץ.
            </p>
            <p className="body">
              כל יצירה מתחילה בשיחה. אנו מקשיבים לסיפור, להעדפה, לתקציב — ומציעים יהלום, חומר וסגנון מתאימים. תהליך דיסקרטי בעבודת יד, מהסקיצה הראשונה ועד למסירה האישית, בכל רחבי הארץ ובתיאום מראש.
            </p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginTop: 16, paddingTop: 28, borderTop: "1px solid var(--line-soft)" }}>
              {["עיצוב אישי", "יהלומים מוסמכים", "ייצור בעבודת יד", "ליווי לכל החיים"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span className="diamond-mark" style={{ width: 6, height: 6 }}/>
                  <span style={{ fontSize: 14, color: "var(--ink-2)", letterSpacing: ".05em" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */

const SERVICES = [
  { num: "01", he: "טבעות אירוסין בהתאמה אישית", en: "Bespoke Engagement", desc: "סוליטר, פאווה, שלושה יהלומים — בעיצוב חד-פעמי." },
  { num: "02", he: "טבעות נישואין", en: "Wedding Bands", desc: "זוגות תואמים, חריטה אישית, פלטינה וזהב 18K." },
  { num: "03", he: "יהלומים", en: "Diamonds", desc: "יהלומים מוסמכי GIA, ליווי בבחירת אבן יחידה במינה." },
  { num: "04", he: "תכשיטים בעיצוב אישי", en: "Custom Jewelry", desc: "שרשראות, צמידים ועגילים — מהסקיצה ועד התוצר." },
  { num: "05", he: "זהב וכסף", en: "Gold & Silver", desc: "זהב 14K / 18K, פלטינה וכסף סטרלינג בעבודת יד." },
  { num: "06", he: "שיבוץ יהלומים", en: "Stone Setting", desc: "שיבוץ קלאסי או מודרני, בעבודת צורפות עדינה." },
  { num: "07", he: "חריטות", en: "Engraving", desc: "חריטה ידנית או לייזר — תאריך, שם, אות אישית." },
  { num: "08", he: "תיקון וחידוש תכשיטים", en: "Restoration", desc: "החזרת ברק לתכשיטים יקרים — ניקוי, שיוף, תיקון." },
  { num: "09", he: "קנייה ומכירה של זהב ויהלומים", en: "Buy & Sell", desc: "הערכה מקצועית והוגנת לזהב וליהלומים." },
  { num: "10", he: "תכשיטים מוכנים", en: "Ready-to-Wear", desc: "אוסף מצומצם של חתיכות מוכנות, מוגבל בעותקים." },
];

function ServicesSection({ mobile }) {
  return (
    <section id="services" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <div>
            <SectionEyebrow en="Atelier Services" he="השירותים שלנו"/>
            <h2 className="h-section reveal" style={{ marginTop: 8, maxWidth: 720 }}>
              כל עולם התכשיטים, <em style={{ fontFamily: "var(--serif-en)", fontStyle: "italic", color: "var(--gold-deep)" }}>בעבודת יד אישית.</em>
            </h2>
          </div>
          <a href="#contact" className="btn-link reveal" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            לכל השירותים →
          </a>
        </div>

        <div className="reveal-stagger" style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 0,
          borderTop: "1px solid var(--line-soft)",
          borderInlineStart: "1px solid var(--line-soft)",
        }}>
          {SERVICES.map((s, i) => (
            <article key={i} className="service-card" style={{
              padding: "36px 32px 32px",
              borderInlineEnd: "1px solid var(--line-soft)",
              borderBottom: "1px solid var(--line-soft)",
              background: "transparent",
              transition: "background .4s ease",
              cursor: "pointer",
              minHeight: 220,
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-paper)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <span style={{ fontFamily: "var(--serif-en)", fontSize: 14, letterSpacing: ".25em", color: "var(--gold)", fontStyle: "italic" }}>
                  №{s.num}
                </span>
                <span className="diamond-mark" style={{ width: 6, height: 6, opacity: .6 }} />
              </div>
              <h3 className="h-card" style={{ marginBottom: 10 }}>{s.he}</h3>
              <div style={{ fontFamily: "var(--serif-en)", fontStyle: "italic", color: "var(--ink-3)", fontSize: 13, letterSpacing: ".05em", marginBottom: 14 }}>
                {s.en}
              </div>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              <div style={{ marginTop: "auto", paddingTop: 20, color: "var(--gold-deep)", display: "flex", alignItems: "center", gap: 8, fontSize: 12, letterSpacing: ".15em", textTransform: "uppercase" }}>
                למידע נוסף <Icon.arrowLeft width="14" height="14"/>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PROCESS / TIMELINE                                                  */
/* ------------------------------------------------------------------ */

const PROCESS = [
  { num: "01", he: "יצירת קשר", en: "Initial Contact", desc: "שיחה ראשונה בוואטסאפ או טלפון, להבין את החזון." },
  { num: "02", he: "פגישה אישית", en: "Private Meeting", desc: "מפגש בסטודיו או באזורך — דיסקרטי וללא התחייבות." },
  { num: "03", he: "בחירת חומר וסגנון", en: "Materials", desc: "יהלום, מתכת וסגנון — מותאמים לסיפור ולתקציב." },
  { num: "04", he: "סקיצה והדמיה", en: "Sketch & 3D", desc: "סקיצה ידנית והדמיית תלת-ממד לפני ייצור." },
  { num: "05", he: "ייצור ושיבוץ", en: "Crafting", desc: "ייצור בעבודת יד, ליטוש ושיבוץ עדין במשך 4–6 שבועות." },
  { num: "06", he: "מסירה אישית", en: "Personal Delivery", desc: "מסירה אישית בליווי תיק עור, אישורים וביטוח." },
];

function ProcessSection({ mobile }) {
  return (
    <section id="process" className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <SectionEyebrow en="The Process" he="תהליך העבודה" align="center"/>
          <h2 className="h-section reveal" style={{ marginTop: 8 }}>
            ששה שלבים, <em style={{ fontFamily: "var(--serif-en)", fontStyle: "italic", color: "var(--gold-deep)" }}>שיחה אחת ממושכת.</em>
          </h2>
          <p className="lede reveal" style={{ maxWidth: 600, margin: "20px auto 0" }}>
            תהליך אישי, בקצב שלך. ללא לחץ, ללא ויטרינות, ללא תפסי-מכירה.
          </p>
        </div>

        <div className="reveal-stagger" style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "repeat(6, 1fr)",
          gap: mobile ? 24 : 0,
          position: "relative",
        }}>
          {/* connecting line */}
          {!mobile && (
            <div style={{
              position: "absolute",
              top: 32,
              insetInlineStart: "8%",
              insetInlineEnd: "8%",
              height: 1,
              background: "linear-gradient(90deg, transparent, var(--line-deep), transparent)",
            }}/>
          )}
          {PROCESS.map((p, i) => (
            <div key={i} style={{
              padding: mobile ? "0 0 0 24px" : "0 16px",
              position: "relative",
              borderInlineStart: mobile ? "1px solid var(--line)" : "none",
            }}>
              {/* number circle */}
              <div style={{
                width: 64, height: 64,
                borderRadius: "50%",
                background: "var(--bg-paper)",
                border: "1px solid var(--line-deep)",
                display: "grid", placeItems: "center",
                fontFamily: "var(--serif-en)",
                fontSize: 22, fontStyle: "italic",
                color: "var(--gold-deep)",
                marginInline: mobile ? 0 : "auto",
                marginInlineStart: mobile ? "-32px" : "auto",
                marginBottom: 22,
                position: "relative",
                zIndex: 2,
              }}>
                {p.num}
              </div>
              <div style={{ textAlign: mobile ? "right" : "center" }}>
                <div className="eyebrow" style={{ fontSize: 10, marginBottom: 6 }}>{p.en}</div>
                <h3 style={{ fontFamily: "var(--serif-he)", fontSize: 20, fontWeight: 500, marginBlock: "0 8px", color: "var(--ink)" }}>{p.he}</h3>
                <p style={{ fontSize: 13, color: "var(--ink-2)", lineHeight: 1.65, maxWidth: 200, marginInline: mobile ? 0 : "auto" }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { NavBar, HeroSection, IntroSection, ServicesSection, ProcessSection });

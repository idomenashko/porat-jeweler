/* PORAT — main app */
const { useState, useEffect, useRef } = React;

const PORAT_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "viewport": "desktop",
  "palette": "ivory",
  "showSparkles": true
}/*EDITMODE-END*/;

function App() {
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [t, setTweak] = useTweaks(PORAT_TWEAK_DEFAULTS);
  const [menuOpen, setMenuOpen] = useState(false);

  useReveal();

  // Apply palette
  useEffect(() => {
    const root = document.documentElement;
    if (t.palette === "ivory") {
      root.style.setProperty("--bg", "#fbf6ec");
      root.style.setProperty("--bg-soft", "#f5ecd9");
      root.style.setProperty("--bg-deep", "#ebdfc6");
      root.style.setProperty("--bg-paper", "#fefaf2");
    } else if (t.palette === "champagne") {
      root.style.setProperty("--bg", "#f5ecdb");
      root.style.setProperty("--bg-soft", "#ecdcc1");
      root.style.setProperty("--bg-deep", "#dbc59e");
      root.style.setProperty("--bg-paper", "#faf2e1");
    } else if (t.palette === "porcelain") {
      root.style.setProperty("--bg", "#faf6f0");
      root.style.setProperty("--bg-soft", "#f0eadd");
      root.style.setProperty("--bg-deep", "#e2d8c4");
      root.style.setProperty("--bg-paper", "#ffffff");
    }
  }, [t.palette]);

  const isMobile = t.viewport === "mobile";

  // Listen for "open tweaks" from host
  useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode") setTweaksOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent?.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .scroll-root { transition: max-width .55s cubic-bezier(.22,.61,.36,1); }
        .mobile-frame {
          max-width: 430px;
          margin: 28px auto;
          border-radius: 44px;
          border: 14px solid #1a1410;
          box-shadow: 0 50px 120px -30px rgba(20,12,5,.5), 0 0 0 1px rgba(0,0,0,.05);
          overflow: hidden;
          height: calc(100vh - 80px);
          position: relative;
        }
        .mobile-frame::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 130px;
          height: 30px;
          background: #1a1410;
          border-bottom-left-radius: 18px;
          border-bottom-right-radius: 18px;
          z-index: 1000;
        }
        .mobile-frame .scroll-root {
          height: 100%;
          overflow: auto;
          background: var(--bg);
        }
        .desktop-shell .scroll-root {
          min-height: 100vh;
        }
        .stage-bg {
          background: linear-gradient(180deg, #efe5d2 0%, #d9c8a4 100%);
          min-height: 100vh;
        }
      `}</style>

      <div className={isMobile ? "stage-bg" : ""} style={{ minHeight: "100vh" }}>
        <div className={isMobile ? "mobile-frame" : "desktop-shell"}>
          <div className="scroll-root" style={{ maxHeight: isMobile ? "100%" : "none", overflow: isMobile ? "auto" : "visible" }}>
            <NavBar onMenu={() => setMenuOpen(true)} mobile={isMobile}/>
            <main>
              <HeroSection mobile={isMobile}/>
              <IntroSection mobile={isMobile}/>
              <ServicesSection mobile={isMobile}/>
              <ProcessSection mobile={isMobile}/>
              <PortfolioSection mobile={isMobile}/>
              <EngagementSection mobile={isMobile}/>
              <DiamondsSection mobile={isMobile}/>
              <ConsultationCTA mobile={isMobile}/>
              <TestimonialsSection mobile={isMobile}/>
              <JournalSection mobile={isMobile}/>
              <ContactSection mobile={isMobile}/>
              <Footer mobile={isMobile}/>
            </main>

            {/* sticky WhatsApp */}
            <a href="#wa" className="wa-fab" aria-label="WhatsApp">
              <Icon.whatsapp width="28" height="28"/>
            </a>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{
          position: "fixed", inset: 0, background: "rgba(20,12,5,.45)",
          zIndex: 200, animation: "fadeIn .3s ease",
          backdropFilter: "blur(6px)",
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            position: "absolute",
            top: 0, bottom: 0, insetInlineEnd: 0,
            background: "var(--bg-paper)",
            padding: "32px 28px",
            width: "min(380px, 92vw)",
            display: "flex", flexDirection: "column",
            animation: "slideInR .35s cubic-bezier(.22,.61,.36,1)",
            boxShadow: "-30px 0 80px -20px rgba(20,12,5,.25)",
          }}>
            <style>{`@keyframes slideInR { from { transform: translateX(100%); } to { transform: none; } }`}</style>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36, paddingBottom: 20, borderBottom: "1px solid var(--line-soft)" }}>
              <img src="assets/porat-logo-cropped.png" alt="PORAT" style={{ height: 36, filter: "brightness(0.5) contrast(1.2)" }}/>
              <button onClick={() => setMenuOpen(false)} style={{ background: "none", border: "1px solid var(--line)", borderRadius: "50%", width: 38, height: 38, display: "grid", placeItems: "center", color: "var(--ink-1)" }}>
                <Icon.close width="16" height="16"/>
              </button>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 0, flex: 1 }}>
              {[
                { id: "about", label: "אודות" },
                { id: "services", label: "שירותים" },
                { id: "engagement", label: "טבעות אירוסין" },
                { id: "diamonds", label: "יהלומים" },
                { id: "gallery", label: "גלריה" },
                { id: "process", label: "תהליך העבודה" },
                { id: "journal", label: "מאמרים" },
                { id: "contact", label: "צור קשר" },
              ].map((l, i) => (
                <li key={i} style={{ borderBottom: "1px solid var(--line-soft)" }}>
                  <a href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      setTimeout(() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" }), 100);
                    }}
                    style={{
                      fontFamily: "var(--serif-he)",
                      fontSize: 22,
                      fontWeight: 300,
                      color: "var(--ink)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBlock: 18,
                      letterSpacing: "-.005em",
                    }}
                  >
                    <span>{l.label}</span>
                    <span style={{ fontFamily: "var(--serif-en)", fontSize: 11, fontStyle: "italic", color: "var(--gold)", letterSpacing: ".15em" }}>0{i+1}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
              <a href="#wa" className="btn btn-primary" style={{ background: "#25D366", border: "1px solid #25D366", padding: "16px 20px" }}>
                <Icon.whatsapp width="18" height="18"/>
                שליחת הודעה בוואטסאפ
              </a>
              <a href="#contact" className="btn btn-ghost"
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100); }}
                style={{ padding: "16px 20px" }}>
                קביעת פגישה פרטית
              </a>
              <div style={{ paddingTop: 18, marginTop: 8, borderTop: "1px solid var(--line-soft)", display: "flex", gap: 14, justifyContent: "center" }}>
                {[Icon.instagram, Icon.facebook, Icon.tiktok].map((I, i) => (
                  <a key={i} href="#" style={{ width: 38, height: 38, border: "1px solid var(--line)", borderRadius: "50%", display: "grid", placeItems: "center", color: "var(--ink-2)" }}>
                    <I width="16" height="16"/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tweaks panel */}
      {tweaksOpen && (
        <TweaksPanel title="Tweaks" onClose={() => setTweaksOpen(false)}>
          <TweakSection title="Viewport">
            <TweakRadio
              label="מצב תצוגה"
              value={t.viewport}
              options={[
                { value: "desktop", label: "Desktop" },
                { value: "mobile", label: "Mobile" },
              ]}
              onChange={(v) => setTweak("viewport", v)}
            />
          </TweakSection>
          <TweakSection title="Palette">
            <TweakRadio
              label="גוון רקע"
              value={t.palette}
              options={[
                { value: "ivory", label: "Ivory" },
                { value: "champagne", label: "Champagne" },
                { value: "porcelain", label: "Porcelain" },
              ]}
              onChange={(v) => setTweak("palette", v)}
            />
          </TweakSection>
          <TweakSection title="Effects">
            <TweakToggle
              label="ניצוצות יהלום"
              value={t.showSparkles}
              onChange={(v) => setTweak("showSparkles", v)}
            />
          </TweakSection>
        </TweaksPanel>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

/* PORAT — Homepage sections (part 2: portfolio, engagement, diamonds, CTA, testimonials, journal, contact, footer) */

const PORTFOLIO = [
  { he: "סוליטר ״עדן״", en: "Solitaire Eden", cat: "טבעת אירוסין", desc: "יהלום עגול 1.20ct על טבעת זהב 18K.", tone: "cream", id: "POR-101" },
  { he: "תאומי הטרואו", en: "Trois Pierres", cat: "טבעת שלושה יהלומים", desc: "שלושה יהלומים ניאו-קלאסיים על פלטינה.", tone: "gold", id: "POR-102" },
  { he: "ויטרינה ״אביגיל״", en: "Avigail Set", cat: "סט לכלה", desc: "טבעת ועגילים תואמים, יהלום מרקיזה.", tone: "rose", id: "POR-103" },
  { he: "הילו אינפיניטי", en: "Halo Infinity", cat: "טבעת אירוסין", desc: "יהלום מרכזי בהילה כפולה ופאווה דקה.", tone: "pearl", id: "POR-104" },
  { he: "Eternity 5.6", en: "Eternity Band", cat: "טבעת נישואין", desc: "טבעת איטרניטי 5.6mm, פלטינה מלוטשת.", tone: "onyx", id: "POR-105" },
  { he: "סקיצה №42", en: "Sketch №42", cat: "תהליך", desc: "סקיצה ידנית לקראת ייצור.", tone: "sketch", id: "POR-106" },
];

function PortfolioSection({ mobile }) {
  return (
    <section id="gallery" className="section" style={{ background: "var(--bg-paper)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <div>
            <SectionEyebrow en="Selected Works" he="עבודות נבחרות"/>
            <h2 className="h-section reveal" style={{ marginTop: 8, maxWidth: 720 }}>
              גלריה <em style={{ fontFamily: "var(--serif-en)", fontStyle: "italic", color: "var(--gold-deep)" }}>סלקטיבית.</em>
            </h2>
          </div>
          <a href="#gallery" className="btn-link reveal">לכל העבודות →</a>
        </div>

        <div className="reveal-stagger" style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
          gap: mobile ? 30 : 36,
        }}>
          {PORTFOLIO.map((p, i) => (
            <article key={i} className="port-card" style={{ cursor: "pointer" }}>
              <div style={{ position: "relative", overflow: "hidden", marginBottom: 18 }}>
                {p.tone === "sketch"
                  ? <SketchPlaceholder label={p.en.toUpperCase()} id={p.id} aspect="4/5"/>
                  : <Placeholder label={p.en.toUpperCase()} id={p.id} tone={p.tone} aspect="4/5"/>
                }
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,.45))",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 20,
                  opacity: 0,
                  transition: "opacity .4s ease",
                }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                >
                  <span className="btn btn-gold" style={{ padding: "10px 18px", fontSize: 12 }}>הצגה →</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                <h3 className="h-card" style={{ fontSize: 22 }}>{p.he}</h3>
                <span className="eyebrow" style={{ fontSize: 10 }}>№{i+101}</span>
              </div>
              <div style={{ fontSize: 12, color: "var(--gold-deep)", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 8 }}>{p.cat}</div>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ENGAGEMENT FEATURE                                                  */
/* ------------------------------------------------------------------ */

function EngagementSection({ mobile }) {
  return (
    <section id="engagement" className="section" style={{ background: "var(--bg-deep)", position: "relative", overflow: "hidden" }}>
      <Sparkles count={mobile ? 6 : 12}/>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
          gap: mobile ? 40 : 80,
          alignItems: "center",
        }}>
          <div style={{ position: "relative" }}>
            <Placeholder label="ENGAGEMENT MACRO" id="ENG-001" tone="cream" aspect="3/4" className="reveal" style={{ boxShadow: "var(--shadow-card)" }}/>
            <Placeholder label="HAND DETAIL" id="ENG-002" tone="rose" aspect="1/1" className="reveal" style={{
              position: "absolute",
              insetInlineEnd: mobile ? -10 : -50,
              bottom: -40,
              width: mobile ? "55%" : "55%",
              border: "8px solid var(--bg-deep)",
              boxShadow: "var(--shadow-deep)",
            }}/>
          </div>
          <div>
            <SectionEyebrow en="Engagement Rings" he="טבעות אירוסין"/>
            <h2 className="h-section reveal" style={{ marginBlock: "8px 30px" }}>
              הטבעת היחידה <br/>
              <em style={{ fontFamily: "var(--serif-en)", fontStyle: "italic", color: "var(--gold-deep)" }}>שתישא חיים שלמים.</em>
            </h2>
            <p className="lede reveal" style={{ marginBottom: 30 }}>
              עיצוב טבעת אירוסין הוא תהליך אישי במיוחד. אנו מלווים אותך מבחירת היהלום, דרך הסגנון והמתכת, ועד למסירה האישית — בסודיות מלאה ובכבוד לסיפור שלכם.
            </p>
            <ul className="reveal" style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "grid", gap: 14 }}>
              {["ייעוץ אישי בבחירת יהלום מוסמך GIA", "סגנונות סוליטר, הילו, פאווה ושלושה יהלומים", "פלטינה / זהב 14K / 18K — לבן, צהוב או ורוד", "ערבות לכל החיים על העבודה והשיבוץ"].map((t, i) => (
                <li key={i} style={{ display: "flex", alignItems: "start", gap: 14, color: "var(--ink-2)", fontSize: 16, lineHeight: 1.5 }}>
                  <span style={{ marginTop: 8, width: 6, height: 6, background: "var(--gold)", transform: "rotate(45deg)", flexShrink: 0 }}/>
                  {t}
                </li>
              ))}
            </ul>
            <div className="reveal" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                התחלת תהליך אירוסין
              </a>
              <a className="btn btn-ghost" href="#gallery" onClick={(e) => { e.preventDefault(); document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" }); }}>
                לגלריית הטבעות
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* DIAMONDS                                                            */
/* ------------------------------------------------------------------ */

const FOUR_C = [
  { letter: "C", word: "Cut", he: "ליטוש", desc: "האיכות החשובה ביותר — הליטוש קובע את ה-בריק ואת הנצנוץ של היהלום." },
  { letter: "C", word: "Color", he: "צבע", desc: "בסולם D עד Z. ככל שהיהלום שקוף יותר, ערכו עולה." },
  { letter: "C", word: "Clarity", he: "ניקיון", desc: "כמות הכלולות הפנימיות. דירוג FL נחשב נדיר במיוחד." },
  { letter: "C", word: "Carat", he: "משקל", desc: "המשקל הקראטי. גודל אינו תמיד אינדיקציה לערך אמיתי." },
];

function DiamondsSection({ mobile }) {
  return (
    <section id="diamonds" className="section" style={{ background: "#0f0a06", color: "var(--bg)", position: "relative", overflow: "hidden" }}>
      {/* shimmer overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 70% 30%, rgba(216,182,128,.25), transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(155,123,60,.18), transparent 60%)",
        pointerEvents: "none",
      }}/>
      <Sparkles count={mobile ? 10 : 20}/>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <SectionEyebrow en="The Diamond Guide" he="מדריך היהלום" align="center"/>
          <h2 className="h-section reveal" style={{ marginTop: 8, color: "#f5ead2" }}>
            ארבעה Cs, <em style={{ fontFamily: "var(--serif-en)", fontStyle: "italic", color: "var(--gold-glow)" }}>שיחה אחת.</em>
          </h2>
          <p className="lede reveal" style={{ maxWidth: 600, margin: "18px auto 0", color: "rgba(245,234,210,.78)" }}>
            הסיווג הבינלאומי של יהלומים בנוי על ארבעה קריטריונים. אנו נלווה אותך לבחור את האבן המדויקת לסיפור שלכם — לא לפי כללים, אלא לפי תחושה.
          </p>
        </div>

        <div className="reveal-stagger" style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: 0,
          border: "1px solid rgba(216,182,128,.3)",
        }}>
          {FOUR_C.map((c, i) => (
            <div key={i} style={{
              padding: "40px 28px",
              borderInlineEnd: (i+1)%(mobile?2:4) === 0 ? "none" : "1px solid rgba(216,182,128,.3)",
              borderBottom: mobile && i < 2 ? "1px solid rgba(216,182,128,.3)" : "none",
              textAlign: "center",
            }}>
              <div style={{ fontFamily: "var(--serif-en)", fontSize: 86, fontStyle: "italic", color: "var(--gold-glow)", lineHeight: 1, marginBottom: 12 }}>{c.letter}</div>
              <div style={{ fontFamily: "var(--serif-en)", fontSize: 14, letterSpacing: ".25em", textTransform: "uppercase", color: "var(--gold-glow)", marginBottom: 12 }}>{c.word}</div>
              <h3 style={{ fontFamily: "var(--serif-he)", fontSize: 22, fontWeight: 500, color: "#fdf6e6", marginBlock: "0 12px" }}>{c.he}</h3>
              <p style={{ fontSize: 13, color: "rgba(245,234,210,.65)", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: 50 }}>
          <a className="btn btn-gold" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            ייעוץ אישי לבחירת יהלום
            <Icon.arrowLeft width="16" height="16"/>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CONSULTATION CTA                                                    */
/* ------------------------------------------------------------------ */

function ConsultationCTA({ mobile }) {
  return (
    <section className="section" style={{ background: "var(--bg-paper)" }}>
      <div className="container-narrow" style={{ textAlign: "center" }}>
        <SectionEyebrow en="Private Consultation" he="פגישה פרטית" align="center"/>
        <h2 className="h-section reveal" style={{ marginBlock: "8px 24px" }}>
          הסיפור שלכם <br/>
          <em style={{ fontFamily: "var(--serif-en)", fontStyle: "italic", color: "var(--gold-deep)" }}>מתחיל בשיחה.</em>
        </h2>
        <p className="lede reveal" style={{ maxWidth: 580, margin: "0 auto 36px" }}>
          בחרו את הדרך הנוחה לכם. נחזור אליכם בתוך מספר שעות בלבד, בדיסקרטיות מלאה.
        </p>
        <div className="reveal" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn btn-primary" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} style={{ minWidth: 240 }}>
            קביעת פגישה פרטית
          </a>
          <a className="btn btn-ghost" href="#wa" style={{ minWidth: 240 }}>
            <Icon.whatsapp width="16" height="16"/>
            וואטסאפ ישיר
          </a>
        </div>
        <div className="reveal" style={{ marginTop: 40, fontSize: 12, color: "var(--ink-3)", letterSpacing: ".2em", textTransform: "uppercase" }}>
          שירות בכל רחבי ישראל · בתיאום מראש · ללא חנות פתוחה
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TESTIMONIALS                                                        */
/* ------------------------------------------------------------------ */

const TESTIMONIALS = [
  { name: "ש. ל.", role: "טבעת אירוסין מותאמת", text: "רגע ההצעה היה מושלם, והטבעת — מעבר לכל מה שדמיינתי. תהליך עדין, מקצועי ובלתי נשכח." },
  { name: "ד. ק.", role: "טבעות נישואין", text: "פורת ליווה אותנו בסבלנות אינסופית. כל פגישה הייתה תענוג, התוצאה הסופית — יצירת אומנות." },
  { name: "מ. ב.", role: "תכשיט בעיצוב אישי", text: "ביקשתי תליון לזכר אמא ז\"ל. היחס האישי, ההקשבה והתוצאה — אין מילים." },
  { name: "ע. ר.", role: "יהלום סוליטר", text: "ייעוץ אמיתי, מקצועי, ללא לחץ. הרגשתי שאני בידיים בטוחות לכל אורך הדרך." },
];

function TestimonialsSection({ mobile }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1.6fr", gap: mobile ? 40 : 80, alignItems: "start" }}>
          <div>
            <SectionEyebrow en="Voices" he="המלצות"/>
            <h2 className="h-section reveal" style={{ marginTop: 8 }}>
              לקוחות <br/>
              <em style={{ fontFamily: "var(--serif-en)", fontStyle: "italic", color: "var(--gold-deep)" }}>שהפכו למשפחה.</em>
            </h2>
            {!mobile && <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
              <button onClick={() => setI((x) => (x - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} style={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid var(--line-deep)", background: "transparent", display: "grid", placeItems: "center" }}>
                <Icon.arrow width="16" height="16"/>
              </button>
              <button onClick={() => setI((x) => (x + 1) % TESTIMONIALS.length)} style={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid var(--line-deep)", background: "var(--ink)", color: "var(--bg)", display: "grid", placeItems: "center" }}>
                <Icon.arrowLeft width="16" height="16"/>
              </button>
            </div>}
          </div>
          <div>
            <div style={{
              fontFamily: "var(--serif-en)",
              fontSize: 120,
              lineHeight: .5,
              color: "var(--gold-soft)",
              opacity: .35,
              fontStyle: "italic",
              height: 50,
              marginBottom: 0,
            }}>“</div>
            <p className="reveal" key={i} style={{
              fontFamily: "var(--serif-he)",
              fontSize: mobile ? 22 : 30,
              lineHeight: 1.5,
              color: "var(--ink)",
              fontWeight: 400,
              marginBlock: "0 28px",
              minHeight: 140,
              animation: "fadeIn .8s ease",
            }}>
              {TESTIMONIALS[i].text}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--bg-deep)", border: "1px solid var(--line-deep)", display: "grid", placeItems: "center", fontFamily: "var(--serif-en)", color: "var(--gold-deep)", fontSize: 18 }}>
                {TESTIMONIALS[i].name.split(" ")[0]}
              </div>
              <div>
                <div style={{ fontFamily: "var(--serif-he)", fontSize: 16, color: "var(--ink)", fontWeight: 500 }}>{TESTIMONIALS[i].name}</div>
                <div style={{ fontSize: 12, color: "var(--ink-3)", letterSpacing: ".15em", textTransform: "uppercase" }}>{TESTIMONIALS[i].role}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {TESTIMONIALS.map((_, x) => (
                <button key={x} onClick={() => setI(x)} style={{
                  width: x === i ? 36 : 14,
                  height: 2,
                  background: x === i ? "var(--gold-deep)" : "var(--line)",
                  border: "none",
                  transition: "all .4s ease",
                  padding: 0,
                }}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* JOURNAL / ARTICLES                                                  */
/* ------------------------------------------------------------------ */

const ARTICLES = [
  { he: "איך לבחור טבעת אירוסין", cat: "מדריך", read: "8 דק׳", excerpt: "צורה, סגנון, גודל יהלום, מתכת — איך מתחילים, ולמה התקציב לא צריך להגביל אתכם.", tone: "cream", id: "ART-201" },
  { he: "מה ההבדל בין זהב 14K ל־18K", cat: "חומרים", read: "6 דק׳", excerpt: "טוהר, חוזק, גוון. מה מתאים לכם — וזה לא תמיד מה שאתם חושבים.", tone: "gold", id: "ART-202" },
  { he: "איך לבוחרים יהלום", cat: "יהלומים", read: "12 דק׳", excerpt: "ארבעת ה-Cs, מעבר לתעודה: מה חשוב לראות בעין, ומה כדאי להתעלם ממנו.", tone: "pearl", id: "ART-203" },
  { he: "תכשיט בעיצוב אישי: מה חשוב לדעת", cat: "תהליך", read: "9 דק׳", excerpt: "מהפגישה הראשונה ועד למסירה: שלבי הייצור והבחירות לאורך הדרך.", tone: "rose", id: "ART-204" },
];

function JournalSection({ mobile }) {
  return (
    <section id="journal" className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <div>
            <SectionEyebrow en="The Journal" he="מאמרים ויומן הסטודיו"/>
            <h2 className="h-section reveal" style={{ marginTop: 8, maxWidth: 780 }}>
              ידע מקצועי, <em style={{ fontFamily: "var(--serif-en)", fontStyle: "italic", color: "var(--gold-deep)" }}>בשפה ברורה.</em>
            </h2>
          </div>
          <a href="#journal" className="btn-link reveal">לכל המאמרים →</a>
        </div>

        <div className="reveal-stagger" style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "repeat(4, 1fr)",
          gap: 28,
        }}>
          {ARTICLES.map((a, i) => (
            <article key={i} style={{ cursor: "pointer" }}>
              <Placeholder label={a.cat.toUpperCase()} id={a.id} tone={a.tone} aspect="4/3" style={{ marginBottom: 18 }}/>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12, fontSize: 11, color: "var(--ink-3)", letterSpacing: ".15em", textTransform: "uppercase" }}>
                <span style={{ color: "var(--gold-deep)" }}>{a.cat}</span>
                <span style={{ width: 12, height: 1, background: "var(--line-deep)" }}/>
                <span>{a.read}</span>
              </div>
              <h3 style={{ fontFamily: "var(--serif-he)", fontSize: 20, fontWeight: 500, marginBlock: "0 10px", color: "var(--ink)", lineHeight: 1.3 }}>{a.he}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6, margin: "0 0 14px" }}>{a.excerpt}</p>
              <span className="btn-link" style={{ fontSize: 12 }}>קריאת המאמר →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CONTACT                                                             */
/* ------------------------------------------------------------------ */

function ContactSection({ mobile }) {
  const [form, setForm] = useState({ name: "", phone: "", topic: "טבעת אירוסין", msg: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section" style={{ background: "#1a130c", color: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <Sparkles count={mobile ? 6 : 14}/>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1.1fr", gap: mobile ? 40 : 80 }}>
          <div>
            <SectionEyebrow en="Get in Touch" he="צור קשר"/>
            <h2 className="h-section reveal" style={{ marginBlock: "8px 24px", color: "#f5ead2" }}>
              שיחה ראשונה,<br/>
              <em style={{ fontFamily: "var(--serif-en)", fontStyle: "italic", color: "var(--gold-glow)" }}>בלי התחייבות.</em>
            </h2>
            <p className="lede reveal" style={{ color: "rgba(245,234,210,.75)", marginBottom: 36 }}>
              שירות אישי ללקוחות בכל רחבי ישראל. נחזור אליכם בתוך מספר שעות, בדיסקרטיות מלאה.
            </p>

            <div className="reveal-stagger" style={{ display: "grid", gap: 18, marginBottom: 36 }}>
              <a href="#wa" style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px", border: "1px solid rgba(216,182,128,.3)", color: "#f5ead2", transition: "all .3s" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(216,182,128,.08)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <span style={{ width: 44, height: 44, background: "#25D366", borderRadius: "50%", display: "grid", placeItems: "center", color: "white" }}>
                  <Icon.whatsapp width="20" height="20"/>
                </span>
                <div>
                  <div style={{ fontSize: 12, color: "var(--gold-glow)", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 4 }}>WhatsApp</div>
                  <div style={{ fontFamily: "var(--serif-he)", fontSize: 18, color: "#fdf6e6" }}>שליחת הודעה מיידית</div>
                </div>
                <Icon.arrowLeft width="18" height="18" style={{ marginInlineStart: "auto", opacity: .6 }}/>
              </a>
              <a href="tel:0500000000" style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px", border: "1px solid rgba(216,182,128,.3)", color: "#f5ead2", transition: "all .3s" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(216,182,128,.08)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <span style={{ width: 44, height: 44, background: "var(--gold)", borderRadius: "50%", display: "grid", placeItems: "center", color: "#1a130c" }}>
                  <Icon.phone width="20" height="20"/>
                </span>
                <div>
                  <div style={{ fontSize: 12, color: "var(--gold-glow)", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 4 }}>טלפון</div>
                  <div style={{ fontFamily: "var(--serif-he)", fontSize: 18, color: "#fdf6e6", direction: "ltr", textAlign: "right" }}>050-000-0000</div>
                </div>
                <Icon.arrowLeft width="18" height="18" style={{ marginInlineStart: "auto", opacity: .6 }}/>
              </a>
            </div>

            <div style={{ paddingTop: 28, borderTop: "1px solid rgba(216,182,128,.2)" }}>
              <div style={{ fontSize: 11, color: "var(--gold-glow)", letterSpacing: ".25em", textTransform: "uppercase", marginBottom: 18 }}>עקבו אחרינו</div>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { icon: Icon.instagram, label: "Instagram" },
                  { icon: Icon.facebook, label: "Facebook" },
                  { icon: Icon.tiktok, label: "TikTok" },
                ].map((s, i) => (
                  <a key={i} href={`#${s.label}`} aria-label={s.label} style={{
                    width: 46, height: 46,
                    border: "1px solid rgba(216,182,128,.4)",
                    color: "#f5ead2",
                    display: "grid", placeItems: "center",
                    transition: "all .3s",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#1a130c"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#f5ead2"; }}>
                    <s.icon width="18" height="18"/>
                  </a>
                ))}
              </div>
              <div style={{ marginTop: 26, fontSize: 13, color: "rgba(245,234,210,.55)", lineHeight: 1.7 }}>
                שירות אישי ללקוחות בכל רחבי ישראל<br/>
                ללא חנות פתוחה — בתיאום מראש בלבד
              </div>
            </div>
          </div>

          <div className="reveal" style={{ background: "rgba(245,234,210,.04)", padding: mobile ? 28 : 44, border: "1px solid rgba(216,182,128,.25)" }}>
            <div className="eyebrow" style={{ color: "var(--gold-glow)", marginBottom: 8 }}>Send a Message · טופס יצירת קשר</div>
            <h3 style={{ fontFamily: "var(--serif-he)", fontSize: 28, color: "#fdf6e6", marginBlock: "0 24px", fontWeight: 500 }}>
              בקשת פגישה פרטית
            </h3>

            {sent ? (
              <div style={{ padding: 30, textAlign: "center", border: "1px solid var(--gold-glow)", color: "#f5ead2" }}>
                <div style={{ fontSize: 32, color: "var(--gold-glow)" }}>✦</div>
                <div style={{ fontFamily: "var(--serif-he)", fontSize: 22, marginBlock: "16px 8px" }}>תודה רבה</div>
                <div style={{ fontSize: 14, color: "rgba(245,234,210,.7)" }}>פנייתכם התקבלה. נחזור אליכם בהקדם.</div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "grid", gap: 18 }}>
                <FormField label="שם מלא" required value={form.name} onChange={(v) => setForm({ ...form, name: v })}/>
                <FormField label="טלפון" required type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })}/>
                <FormSelect label="נושא הפנייה" value={form.topic} onChange={(v) => setForm({ ...form, topic: v })}
                  options={["טבעת אירוסין", "טבעות נישואין", "תכשיט מותאם אישית", "יהלום", "תיקון / חידוש", "אחר"]}/>
                <FormField label="הודעה" textarea value={form.msg} onChange={(v) => setForm({ ...form, msg: v })}/>
                <button type="submit" className="btn btn-gold" style={{ marginTop: 8, padding: "18px 28px" }}>
                  שליחת הבקשה
                  <Icon.arrowLeft width="16" height="16"/>
                </button>
                <div style={{ fontSize: 11, color: "rgba(245,234,210,.5)", letterSpacing: ".05em", marginTop: 4 }}>
                  שליחת הטופס מהווה הסכמה ליצירת קשר חוזר. הפרטים נשמרים בסודיות מלאה.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, value, onChange, required, type = "text", textarea }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label style={{ display: "block" }}>
      <span style={{ display: "block", fontSize: 11, color: "var(--gold-glow)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 8 }}>
        {label}{required && <span style={{ color: "var(--gold-glow)", marginInlineStart: 4 }}>*</span>}
      </span>
      <Tag
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={textarea ? 4 : undefined}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid rgba(216,182,128,.4)",
          padding: "12px 0",
          color: "#fdf6e6",
          fontFamily: "var(--sans-he)",
          fontSize: 16,
          outline: "none",
          resize: textarea ? "vertical" : "none",
          direction: "rtl",
        }}
      />
    </label>
  );
}

function FormSelect({ label, value, onChange, options }) {
  return (
    <label style={{ display: "block" }}>
      <span style={{ display: "block", fontSize: 11, color: "var(--gold-glow)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 8 }}>{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid rgba(216,182,128,.4)",
          padding: "12px 0",
          color: "#fdf6e6",
          fontFamily: "var(--sans-he)",
          fontSize: 16,
          outline: "none",
          appearance: "none",
          direction: "rtl",
        }}
      >
        {options.map((o) => <option key={o} style={{ background: "#1a130c", color: "#fdf6e6" }}>{o}</option>)}
      </select>
    </label>
  );
}

/* ------------------------------------------------------------------ */
/* FOOTER                                                              */
/* ------------------------------------------------------------------ */

function Footer({ mobile }) {
  const cols = [
    { title: "ניווט", links: ["בית", "אודות", "שירותים", "גלריה", "מאמרים", "צור קשר"] },
    { title: "שירותים", links: ["טבעות אירוסין", "טבעות נישואין", "תכשיטים בעיצוב אישי", "יהלומים", "זהב וכסף", "תיקון וחידוש"] },
    { title: "צור קשר", links: ["WhatsApp", "טלפון: 050-000-0000", "Instagram", "Facebook", "TikTok"] },
  ];
  return (
    <footer style={{ background: "var(--bg-paper)", paddingBlock: 70, borderTop: "1px solid var(--line-soft)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1.4fr 1fr 1fr 1fr", gap: 40, marginBottom: 60 }}>
          <div>
            <img src="assets/porat-logo-cropped.png" alt="PORAT" style={{ height: 50, marginBottom: 18 }}/>
            <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.7, maxWidth: 320 }}>
              סטודיו פרטי לעיצוב והפקה של תכשיטים — טבעות אירוסין, יהלומים, זהב וכסף — בכל רחבי ישראל, בתיאום מראש בלבד.
            </p>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <div className="eyebrow-he" style={{ marginBottom: 18 }}>{c.title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {c.links.map((l, j) => (
                  <li key={j}><a href="#" style={{ fontSize: 14, color: "var(--ink-2)" }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          paddingTop: 28,
          borderTop: "1px solid var(--line-soft)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          fontSize: 12,
          color: "var(--ink-3)",
          letterSpacing: ".1em",
        }}>
          <div>© 2026 PORAT — Private Jeweler. כל הזכויות שמורות.</div>
          <div style={{ display: "flex", gap: 22 }}>
            <a href="#" style={{ color: "inherit" }}>תקנון</a>
            <a href="#" style={{ color: "inherit" }}>פרטיות</a>
            <a href="#" style={{ color: "inherit" }}>נגישות</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { PortfolioSection, EngagementSection, DiamondsSection, ConsultationCTA, TestimonialsSection, JournalSection, ContactSection, Footer });

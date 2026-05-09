import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { getArticles, getArticleBySlug } from '@/sanity/queries';

export const revalidate = 60;

const ARTICLES = [
  { title: 'איך לבחור טבעת אירוסין', slug: 'how-to-choose-engagement-ring', category: 'מדריך', readTime: "8 דק'", excerpt: 'צורה, סגנון, גודל יהלום, מתכת — איך מתחילים, ולמה התקציב לא צריך להגביל אתכם.', tone: 'cream', body: 'בחירת טבעת אירוסין היא אחת ההחלטות המשמעותיות בחיים. לפני שניגשים לסטודיו, כדאי לדעת מה מחכה לכם...\n\nצורת האבן קובעת את המראה הכללי של הטבעת. סוליטר עגול הוא הסגנון הקלאסי ביותר, בעוד מרקיזה, אובל ופריר מעניקים מראה מוארך ומודרני.\n\nהמתכת — זהב לבן, צהוב, ורוד, או פלטינה — משפיעה לא רק על המראה אלא גם על תחזוקת התכשיט. פלטינה היא העמידה ביותר, אך גם היקרה ביותר.\n\nהתקציב לא צריך לעצור אתכם — עם ייעוץ נכון, ניתן לקבל תכשיט מהמם בכל תקציב.' },
  { title: 'מה ההבדל בין זהב 14K ל־18K', slug: 'gold-14k-vs-18k', category: 'חומרים', readTime: "6 דק'", excerpt: 'טוהר, חוזק, גוון. מה מתאים לכם — וזה לא תמיד מה שאתם חושבים.', tone: 'gold', body: 'זהב 14K מכיל 58.5% זהב טהור, ואילו זהב 18K מכיל 75% זהב טהור.\n\nזהב 14K עמיד יותר, פחות נוטה לשריטות, ומתאים לתכשיטים שמשתמשים בהם יומיומית. הוא גם זול יותר.\n\nזהב 18K עשיר יותר בצבע, נוצץ יותר, ומתאים לתכשיטים עדינים ולאלה שלא רוצים פשרות באיכות.\n\nלטבעות נישואין ואירוסין, רוב הלקוחות שלנו בוחרים ב-18K — אך 14K הוא לחלוטין בחירה לגיטימית ויפה.' },
  { title: 'איך בוחרים יהלום', slug: 'how-to-choose-diamond', category: 'יהלומים', readTime: "12 דק'", excerpt: 'ארבעת ה-Cs, מעבר לתעודה: מה חשוב לראות בעין, ומה כדאי להתעלם ממנו.', tone: 'pearl', body: 'ארבעת ה-Cs — Cut, Color, Clarity, Carat — הם הבסיס לכל שיחה על יהלומים.\n\nCut (ליטוש) הוא הפרמטר החשוב ביותר. יהלום עם ליטוש "Excellent" יבריק יותר מיהלום גדול יותר עם ליטוש גרוע.\n\nColor (צבע): בסולם D-Z, D הוא ללא צבע. יהלומי D-G נראים לבנים בעין הרגילה. H-I עדיין יפים ופחות יקרים.\n\nClarity (ניקיון): VS1-VS2 הם נקיים לעין הבלתי מזוינת ושווים כל שקל שנחסך לעומת FL.\n\nCarat (קראט): הגודל חשוב, אבל יהלום 0.9 קראט עם ליטוש מצוין יראה נהדר יותר מ-1 קראט עם ליטוש בינוני.' },
  { title: 'תכשיט בעיצוב אישי: מה חשוב לדעת', slug: 'custom-jewelry-process', category: 'תהליך', readTime: "9 דק'", excerpt: 'מהפגישה הראשונה ועד למסירה: שלבי הייצור והבחירות לאורך הדרך.', tone: 'rose', body: 'תהליך יצירת תכשיט בעיצוב אישי לוקח בממוצע 4-8 שבועות.\n\nהשלב הראשון הוא שיחה: מה הרעיון? מה התקציב? מהו השימוש? מי מקבל את התכשיט?\n\nאחר כך באים הסקיצה וההדמיה — שלב שבו הרעיון מקבל צורה. אפשר לשנות, להתאים, לשפר — הכל לפני שנוגעים בחומר.\n\nהייצור עצמו לוקח 3-5 שבועות בהתאם למורכבות. בסוף התהליך — מסירה אישית, עם תיק עור, אישורים, ועם הסיפור שכולנו כתבנו יחד.' },
];

const TONE_BG: Record<string, string> = {
  cream: 'linear-gradient(135deg, #f5ead2, #e6d3a8 50%, #c8a979 100%)',
  gold: 'linear-gradient(135deg, #e0c08a, #b8924f 50%, #7d5a26 100%)',
  pearl: 'linear-gradient(135deg, #faf3e2, #ece2c7 50%, #d3c2a0 100%)',
  rose: 'linear-gradient(135deg, #f0d8c2, #d9b491 50%, #a87b54 100%)',
};

export async function generateStaticParams() {
  const sanityArticles = await getArticles();
  const sanityParams = sanityArticles
    .filter(a => a.slug?.current)
    .map(a => ({ slug: a.slug!.current! }));

  const hardcodedParams = ARTICLES
    .filter(a => !sanityParams.some(p => p.slug === a.slug))
    .map(a => ({ slug: a.slug }));

  return [...sanityParams, ...hardcodedParams];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const sanityArticle = await getArticleBySlug(slug);
  if (sanityArticle) {
    return { title: `${sanityArticle.title ?? ''} | PORAT`, description: sanityArticle.excerpt ?? '' };
  }

  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'מאמר לא נמצא' };
  return { title: `${article.title} | PORAT`, description: article.excerpt };
}

interface ArticleData {
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  tone: string;
  body: string;
  datePublished: string;
}

function ArticlePageContent({ article }: { article: ArticleData }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: article.title,
    headline: article.title,
    description: article.excerpt,
    datePublished: article.datePublished,
    author: {
      '@type': 'Organization',
      name: 'PORAT',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PORAT — Private Jeweler',
      url: 'https://porat-jeweler.co.il',
    },
    inLanguage: 'he',
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <div style={{ paddingBlock: 'clamp(72px, 9vw, 140px)', background: 'var(--bg-paper)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
          <div style={{ aspectRatio: '16/7', background: TONE_BG[article.tone] || TONE_BG.cream, marginBottom: 48, position: 'relative', overflow: 'hidden' }}>
            <span style={{ position: 'absolute', insetInlineStart: 18, bottom: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'rgba(40,25,5,.75)', background: 'rgba(255,250,240,.7)', backdropFilter: 'blur(2px)', padding: '4px 8px' }}>{article.category.toUpperCase()}</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, fontSize: 11, color: 'var(--ink-3)', letterSpacing: '.15em', textTransform: 'uppercase' as const }}>
            <span style={{ color: 'var(--gold-deep)' }}>{article.category}</span>
            <span style={{ width: 12, height: 1, background: 'var(--line-deep)' }} />
            <span>{article.readTime}</span>
          </div>
          <SectionEyebrow en="The Journal" he="מאמר" />
          <Reveal>
            <h1 style={{ fontFamily: 'var(--serif-he)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.12, letterSpacing: '-0.012em', color: 'var(--ink)', marginBlock: '8px 32px' }}>{article.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: 'var(--sans-he)', fontWeight: 300, fontSize: 20, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 40, borderBottom: '1px solid var(--line-soft)', paddingBottom: 32 }}>{article.excerpt}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--ink-2)', fontWeight: 300, display: 'grid', gap: 24 }}>
              {article.body.split('\n\n').map((para, i) => (
                <p key={i} style={{ margin: 0 }}>{para}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ marginTop: 60, paddingTop: 40, borderTop: '1px solid var(--line-soft)', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--serif-he)', fontSize: 22, color: 'var(--ink)', marginBottom: 24 }}>רוצים לדבר על זה עוד?</p>
              <Link href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 30px', background: 'var(--ink)', color: 'var(--bg-paper)', border: '1px solid var(--ink)', fontFamily: 'var(--sans-he)', fontWeight: 400, fontSize: 14, letterSpacing: '.08em' }}>
                קביעת פגישה פרטית
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const sanityArticle = await getArticleBySlug(slug);

  if (sanityArticle) {
    const article: ArticleData = {
      title: sanityArticle.title ?? '',
      category: sanityArticle.category ?? '',
      readTime: sanityArticle.readTime ?? '',
      excerpt: sanityArticle.excerpt ?? '',
      tone: 'cream',
      body: sanityArticle.excerpt ?? '',
      datePublished: sanityArticle.publishedAt ?? new Date().toISOString().split('T')[0],
    };
    return <ArticlePageContent article={article} />;
  }

  const found = ARTICLES.find((a) => a.slug === slug);
  if (!found) notFound();

  const article: ArticleData = {
    title: found.title,
    category: found.category,
    readTime: found.readTime,
    excerpt: found.excerpt,
    tone: found.tone,
    body: found.body,
    datePublished: new Date().toISOString().split('T')[0],
  };
  return <ArticlePageContent article={article} />;
}

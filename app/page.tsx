import Link from "next/link";
import type { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "انجام پایان نامه با هوش مصنوعی",
  description:
    "با Caspian Thesis، پایان‌نامه‌ات رو با هوش مصنوعی پیشرفته بنویس، تحلیل کن و ویرایش کن. سریع‌تر، دقیق‌تر، هوشمندتر.",
  keywords: [
    "پایان نامه هوش مصنوعی",
    "نوشتن پایان نامه",
    "caspian thesis",
    "thesis ai iran",
  ],
  path: "/",
});

const features = [
  {
    icon: "✍️",
    title: "نگارش هوشمند",
    desc: "تولید متن علمی و آکادمیک با استانداردهای دانشگاهی ایران و جهان",
  },
  {
    icon: "📊",
    title: "تحلیل آماری",
    desc: "تحلیل داده‌ها با SPSS، R و Python به‌صورت خودکار و گزارش‌دهی کامل",
  },
  {
    icon: "🔍",
    title: "بررسی مقالات",
    desc: "جستجو و خلاصه‌سازی مقالات علمی معتبر از Scopus، Google Scholar و IEEE",
  },
  {
    icon: "🛡️",
    title: "ضد سرقت ادبی",
    desc: "بازنویسی و پاراگراف‌بندی مجدد برای کاهش درصد مشابهت با متن‌های موجود",
  },
];

const services = [
  {
    icon: "📝",
    href: "/services/thesis-writing",
    title: "نوشتن پایان‌نامه",
    desc: "از فصل اول تا دفاع — نوشتن کامل پایان‌نامه کارشناسی، ارشد و دکتری با هوش مصنوعی",
  },
  {
    icon: "📐",
    href: "/services/proposal-writing",
    title: "نگارش پروپوزال",
    desc: "پروپوزال حرفه‌ای و کامل برای تمام مقاطع تحصیلی با راهنمای گام‌به‌گام",
  },
  {
    icon: "📈",
    href: "/services/data-analysis",
    title: "تحلیل داده و آمار",
    desc: "تفسیر نتایج آماری، رسم نمودار و نوشتن فصل یافته‌ها به‌صورت کامل",
  },
  {
    icon: "✏️",
    href: "/services/editing",
    title: "ویرایش و بازنویسی",
    desc: "ویرایش ادبی، علمی و زبانی پایان‌نامه شما برای ارتقاء کیفیت نوشتاری",
  },
  {
    icon: "🌐",
    href: "/services/translation",
    title: "ترجمه تخصصی",
    desc: "ترجمه متون علمی و مقالات از فارسی به انگلیسی و برعکس با دقت بالا",
  },
  {
    icon: "💬",
    href: "/services/consulting",
    title: "مشاوره تخصصی",
    desc: "مشاوره آنلاین با متخصصان برای انتخاب موضوع، روش تحقیق و ساختار کار",
  },
];

const steps = [
  {
    num: "۱",
    title: "ثبت‌نام رایگان",
    desc: "با ایمیل یا شماره موبایل وارد پلتفرم شو. هیچ اطلاعات کارت بانکی لازم نیست.",
  },
  {
    num: "۲",
    title: "توضیح پایان‌نامه",
    desc: "موضوع، رشته، مقطع و نیازمندی‌های پایان‌نامه‌ات رو برای دستیار AI بنویس.",
  },
  {
    num: "۳",
    title: "دریافت محتوا",
    desc: "در چند دقیقه فصل‌ها، تحلیل‌ها و منابع آکادمیک کامل آماده می‌شه.",
  },
  {
    num: "۴",
    title: "ویرایش و دفاع",
    desc: "محتوای تولیدشده رو شخصی‌سازی کن و با اطمینان از پایان‌نامه‌ات دفاع کن.",
  },
];

const stats = [
  { number: "+۱۵۰۰", label: "دانشجوی موفق" },
  { number: "+۵۰۰", label: "پایان‌نامه کامل" },
  { number: "۹۸٪", label: "رضایت دانشجویان" },
  { number: "۲۴/۷", label: "پشتیبانی آنلاین" },
];

const blogPosts = [
  {
    emoji: "🎓",
    date: "۱۵ اردیبهشت ۱۴۰۵",
    title: "چگونه با هوش مصنوعی پایان‌نامه بنویسیم؟ راهنمای جامع ۱۴۰۵",
    desc: "در این مقاله گام‌به‌گام یاد می‌گیری چطور از ابزارهای AI برای نوشتن فصل‌های مختلف پایان‌نامه استفاده کنی.",
    href: "/blog/how-to-write-thesis-with-ai",
  },
  {
    emoji: "📊",
    date: "۵ اردیبهشت ۱۴۰۵",
    title: "تحلیل آماری پایان‌نامه با SPSS: از صفر تا صد",
    desc: "آموزش کامل تحلیل داده برای پایان‌نامه — از وارد کردن داده تا تفسیر نتایج و نوشتن فصل چهارم.",
    href: "/blog/spss-data-analysis-guide",
  },
  {
    emoji: "🔥",
    date: "۲۰ فروردین ۱۴۰۵",
    title: "بهترین موضوعات پایان‌نامه ارشد ۱۴۰۵ — ۵۰ ایده جدید",
    desc: "فهرست جامع موضوعات پیشنهادی برای پایان‌نامه کارشناسی ارشد در رشته‌های مختلف مدیریت، IT و مهندسی.",
    href: "/blog/best-thesis-topics-1404",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-content animate-fade-up">
          <span className="section-label">🚀 هوش مصنوعی در خدمت پژوهش</span>
          <h1>
            پایان‌نامه‌ات را با{" "}
            <span className="gradient-text">هوش مصنوعی</span> به سطح بعدی
            ببر
          </h1>
          <p className="hero-subtitle">
            Caspian Thesis — دستیار هوشمند پایان‌نامه برای دانشجویان ایرانی.
            نوشتن، تحلیل، ویرایش و مشاوره تخصصی با AI پیشرفته.
          </p>
          <div className="hero-buttons">
            <a
              href="https://thesis.diginoron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="hero-cta-start"
            >
              شروع رایگان ←
            </a>
            <Link href="/services" className="btn btn-outline btn-lg" id="hero-cta-services">
              مشاهده خدمات
            </Link>
          </div>

          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-number">{s.number}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section" id="features">
        <div className="container">
          <div className="section-center" style={{ marginBottom: "3rem" }}>
            <span className="section-label">قابلیت‌های کلیدی</span>
            <h2>
              هر چیزی که برای پایان‌نامه‌ات نیاز داری،{" "}
              <span className="gradient-text">در یک جا</span>
            </h2>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="card feature-card">
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section" id="services" style={{ background: "var(--color-bg-alt)" }}>
        <div className="container">
          <div className="section-center" style={{ marginBottom: "3rem" }}>
            <span className="section-label">خدمات ما</span>
            <h2>
              راه‌حل کامل برای{" "}
              <span className="gradient-text">هر نیاز آکادمیک</span>
            </h2>
            <p style={{ maxWidth: "550px", margin: "1rem auto 0" }}>
              از انتخاب موضوع تا روز دفاع — کنار شماییم
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="card service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-link">
                  بیشتر بدان ←
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-center" style={{ marginBottom: "3rem" }}>
            <span className="section-label">چطور کار می‌کنه؟</span>
            <h2>
              در <span className="gradient-text">۴ مرحله ساده</span> شروع کن
            </h2>
          </div>
          <div className="steps">
            {steps.map((step, i) => (
              <div key={i} className="step">
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section stats-section">
        <div className="container">
          <div className="section-center" style={{ marginBottom: "3rem" }}>
            <span className="section-label">آمار و ارقام</span>
            <h2>
              اعداد <span className="gradient-text">واقعی</span>، نتایج واقعی
            </h2>
          </div>
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="glass stat-item">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" style={{ background: "var(--color-bg-alt)" }} id="testimonials">
        <div className="container">
          <div className="section-center" style={{ marginBottom: "3rem" }}>
            <span className="section-label">نظر دانشجویان</span>
            <h2>
              آن‌ها از <span className="gradient-text">تجربه‌شان</span> می‌گویند
            </h2>
          </div>
          <div className="grid-3">
            {[
              {
                name: "سارا م.",
                role: "کارشناسی ارشد مدیریت",
                text: "با Caspian Thesis فصل دوم پایان‌نامه‌ام رو که ۲ ماه گیر کرده بودم، در ۳ روز نوشتم! کیفیت متون واقعاً آکادمیک بود.",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "علی ر.",
                role: "دکترای مهندسی کامپیوتر",
                text: "تحلیل داده‌های آماری‌ام رو با این ابزار انجام دادم. خروجی SPSS رو داد و فصل چهارم رو کامل نوشت. باورنکردنی بود!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "نیلوفر ح.",
                role: "کارشناسی حسابداری",
                text: "پروپوزالم رو با این سرویس نوشتم و استادم گفت یکی از بهترین پروپوزال‌هایی هست که دیده. ممنون از تیم Caspian Thesis!",
                rating: "⭐⭐⭐⭐⭐",
              },
            ].map((t, i) => (
              <div key={i} className="card" style={{ padding: "2rem" }}>
                <div style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>{t.rating}</div>
                <p style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <strong style={{ color: "var(--color-text)" }}>{t.name}</strong>
                  <p style={{ fontSize: "0.85rem", marginTop: "0.3rem" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT THE APP / TEAM ===== */}
      <section className="section" id="about-app">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "4rem" }}>
            <div>
              <span className="section-label">درباره این ابزار</span>
              <h2>
                ساخته‌شده توسط <span className="gradient-text">اساتید و محققان</span>
              </h2>
              <p style={{ marginTop: "1.2rem", marginBottom: "1.5rem" }}>
                Caspian Thesis با ترکیبی از تیمی از <strong>اساتید دانشگاه، محققان رشته‌های مختلف</strong> و استفاده از
                به‌روزترین مدل‌های هوش مصنوعی توسعه داده شده است. هدف ما ایجاد ابزاری علمی
                و قابل اعتماد برای پشتیبانی از فرآیند پژوهش دانشجویان است.
              </p>
              <div style={{
                background: "rgba(234, 179, 8, 0.08)",
                border: "1px solid rgba(234, 179, 8, 0.25)",
                borderRadius: "var(--radius-md)",
                padding: "1.2rem 1.5rem",
                display: "flex",
                gap: "0.8rem",
                alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>⚠️</span>
                <p style={{ fontSize: "0.9rem", color: "#92400e", margin: 0, lineHeight: 1.7 }}>
                  <strong>تذکر مهم:</strong> این ابزار صرفاً برای <strong>ایده‌پردازی و راهنمایی اولیه</strong> در انجام
                  پایان‌نامه طراحی شده است. محتوای تولیدشده نباید به‌عنوان متن نهایی پایان‌نامه ارائه شود
                  و مسئولیت محتوای نهایی بر عهده دانشجو است.
                </p>
              </div>
            </div>
            <div className="grid-2" style={{ gap: "1.2rem" }}>
              {[
                { icon: "🎓", title: "تیم علمی", desc: "اساتید و محققان از ۱۰+ رشته دانشگاهی" },
                { icon: "🤖", title: "AI پیشرفته", desc: "به‌روزترین مدل‌های زبانی دنیا" },
                { icon: "🔬", title: "پایه علمی", desc: "استانداردهای آکادمیک ایران و جهان" },
                { icon: "🛡️", title: "حریم خصوصی", desc: "محرمانگی کامل اطلاعات شما" },
              ].map((item) => (
                <div key={item.title} className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.7rem" }}>{item.icon}</div>
                  <h4 style={{ fontSize: "0.95rem", marginBottom: "0.4rem" }}>{item.title}</h4>
                  <p style={{ fontSize: "0.82rem" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="section" id="blog-preview">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <span className="section-label">وبلاگ</span>
              <h2>
                آخرین <span className="gradient-text">مطالب آموزشی</span>
              </h2>
            </div>
            <Link href="/blog" className="btn btn-outline" id="view-all-blog">
              مشاهده همه ←
            </Link>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link key={post.href} href={post.href} className="card blog-card">
                <div className="blog-card-image">{post.emoji}</div>
                <div className="blog-card-content">
                  <div className="blog-card-date">{post.date}</div>
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                  <span className="read-more">ادامه مطلب ←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="cta-content">
          <span className="section-label">همین الان شروع کن</span>
          <h2>
            پایان‌نامه‌ات را با{" "}
            <span className="gradient-text">Caspian Thesis</span> متحول کن
          </h2>
          <p>
            به هزاران دانشجوی ایرانی بپیوند که با هوش مصنوعی پایان‌نامه
            موفقی نوشتند.
          </p>
          <a
            href="https://thesis.diginoron.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            id="cta-bottom-start"
          >
            شروع رایگان — بدون نیاز به کارت بانکی ←
          </a>
        </div>
      </section>
    </>
  );
}

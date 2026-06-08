import Link from "next/link";
import type { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "وبلاگ پایان‌نامه — راهنمای دانشجویی",
  description:
    "آموزش‌ها، راهنماها و نکات کاربردی برای نوشتن پایان‌نامه، تحلیل داده و موفقیت در دفاع. وبلاگ Caspian Thesis.",
  keywords: ["آموزش پایان نامه", "راهنمای پایان نامه", "وبلاگ تحقیق دانشجویی"],
  path: "/blog",
});

const posts = [
  {
    slug: "literature-review-with-ai",
    emoji: "📚",
    date: "۱۸ خرداد ۱۴۰۵",
    category: "پیشینه تحقیق",
    title: "پیشینه تحقیق داخلی و خارجی پایان نامه با هوش مصنوعی: راهنمای جامع",
    desc: "چگونه با استفاده از ابزارهای هوش مصنوعی تخصصی، پیشینه پژوهش داخلی و خارجی پایان‌نامه خود را از منابع واقعی و معتبر علمی استخراج و تدوین کنیم؟",
  },
  {
    slug: "determining-sample-size-with-ai",
    emoji: "📊",
    date: "۱۷ خرداد ۱۴۰۵",
    category: "تحلیل آماری",
    title: "تعیین حجم نمونه با هوش مصنوعی: راهنمای علمی و کاربردی",
    desc: "چگونه با کمک ابزارهای هوش مصنوعی و فرمول‌های آماری حجم نمونه بهینه برای پایان‌نامه خود را محاسبه کنیم؟ مقایسه کوکران، مورگان و جی‌پاور.",
  },
  {
    slug: "proposal-writing-with-ai",
    emoji: "📐",
    date: "۱۷ خرداد ۱۴۰۵",
    category: "پروپوزال",
    title: "انجام پروپوزال با هوش مصنوعی: راهنمای جامع، کاربردی و علمی",
    desc: "چگونه از ابزارهای هوش مصنوعی برای انجام پروپوزال علمی کارشناسی ارشد و دکتری بر اساس متدولوژی استاندارد و بدون رفرنس‌های جعلی استفاده کنیم؟",
  },
  {
    slug: "phd-thesis-writing-with-ai",
    emoji: "🔬",
    date: "۱۷ خرداد ۱۴۰۵",
    category: "رساله دکتری",
    title: "انجام پایان نامه دکتری با هوش مصنوعی: راهنمای جامع و فنی رساله نویسی",
    desc: "چگونه از ابزارهای پیشرفته هوش مصنوعی برای انجام رساله دکتری، نوشتن پروپوزال، تحلیل داده‌های آماری و استخراج مقاله علمی بدون سرقت ادبی استفاده کنیم؟",
  },
  {
    slug: "proposal-problem-statement-with-ai",
    emoji: "🤖",
    date: "۱۶ خرداد ۱۴۰۵",
    category: "پروپوزال",
    title: "نگارش بیان مسئله پروپوزال با هوش مصنوعی: راهنمای کاربردی و گام‌به‌گام",
    desc: "چگونه با کمک ابزارهای هوش مصنوعی یک بیان مسئله قوی، علمی و بدون نقص برای پروپوزال خود بنویسیم؟ آموزش گام‌به‌گام همراه با پرامپت‌های آماده.",
  },
  {
    slug: "how-to-write-thesis-with-ai",
    emoji: "🎓",
    date: "۱۵ اردیبهشت ۱۴۰۵",
    category: "آموزش",
    title: "چگونه با هوش مصنوعی پایان‌نامه بنویسیم؟ راهنمای جامع ۱۴۰۵",
    desc: "در این مقاله گام‌به‌گام یاد می‌گیری چطور از ابزارهای AI برای نوشتن فصل‌های مختلف پایان‌نامه استفاده کنی.",
  },
  /*
  {
    slug: "spss-data-analysis-guide",
    emoji: "📊",
    date: "۵ اردیبهشت ۱۴۰۵",
    category: "آمار",
    title: "تحلیل آماری پایان‌نامه با SPSS: از صفر تا صد",
    desc: "آموزش کامل تحلیل داده برای پایان‌نامه — از وارد کردن داده تا تفسیر نتایج و نوشتن فصل چهارم.",
  },
  {
    slug: "best-thesis-topics-1404",
    emoji: "🔥",
    date: "۲۰ فروردین ۱۴۰۵",
    category: "موضوع پایان‌نامه",
    title: "بهترین موضوعات پایان‌نامه ارشد ۱۴۰۵ — ۵۰ ایده جدید",
    desc: "فهرست جامع موضوعات پیشنهادی برای پایان‌نامه کارشناسی ارشد در رشته‌های مختلف.",
  },
  {
    slug: "proposal-writing-tips",
    emoji: "📝",
    date: "۱۰ فروردین ۱۴۰۵",
    category: "پروپوزال",
    title: "۱۰ نکته طلایی برای نوشتن پروپوزال موفق",
    desc: "با رعایت این ۱۰ نکته، پروپوزال‌ات رو در اولین جلسه تصویب کن.",
  },
  {
    slug: "plagiarism-reduction-guide",
    emoji: "🛡️",
    date: "۲ فروردین ۱۴۰۵",
    category: "ویرایش",
    title: "چطور درصد مشابهت پایان‌نامه را کاهش دهیم؟",
    desc: "روش‌های عملی و اثربخش برای کاهش درصد سرقت ادبی بدون تغییر محتوا.",
  },
  {
    slug: "thesis-defense-preparation",
    emoji: "🎤",
    date: "۱۵ اسفند ۱۴۰۴",
    category: "دفاع",
    title: "راهنمای جامع آمادگی برای جلسه دفاع پایان‌نامه",
    desc: "چطور برای جلسه دفاع آماده بشی، چه سوال‌هایی مطرح می‌شه و چطور پاسخ بدی.",
  },
  */
];

export default function BlogPage() {
  return (
    <>
      <div className="page-header">
        <span className="section-label">وبلاگ</span>
        <h1>
          راهنمای جامع <span className="gradient-text">پایان‌نامه</span>
        </h1>
        <p>آموزش‌ها، نکات و راهکارهای کاربردی برای موفقیت در تحصیل</p>
      </div>

      <div className="blog-list-grid">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card blog-card"
            id={`blog-${post.slug}`}
          >
            <div className="blog-card-image">{post.emoji}</div>
            <div className="blog-card-content">
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    borderRadius: "999px",
                    padding: "0.2rem 0.7rem",
                    color: "var(--color-primary-light)",
                  }}
                >
                  {post.category}
                </span>
                <span className="blog-card-date">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <span className="read-more">ادامه مطلب ←</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

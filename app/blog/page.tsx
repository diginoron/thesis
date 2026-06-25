import type { Metadata } from "next";
import { generateMeta } from "@/lib/seo";
import BlogList from "@/components/BlogList";
import Pagination from "@/components/Pagination";

export const metadata: Metadata = generateMeta({
  title: "وبلاگ پایان‌نامه — راهنمای دانشجویی",
  description:
    "آموزش‌ها، راهنماها و نکات کاربردی برای نوشتن پایان‌نامه، تحلیل داده و موفقیت در دفاع. وبلاگ Caspian Thesis.",
  keywords: ["آموزش پایان نامه", "راهنمای پایان نامه", "وبلاگ تحقیق دانشجویی"],
  path: "/blog",
});

const allPosts = [
  {
    slug: "spss-analysis-with-ai",
    emoji: "📈",
    date: "۵ تیر ۱۴۰۵",
    category: "تحلیل آماری",
    title: "راهنمای جامع تحلیل و آموزش spss با هوش مصنوعی",
    desc: "چگونه تحلیل و آموزش spss با هوش مصنوعی را برای پروپوزال و پایان‌نامه خود یاد بگیریم؟ راهنمای جامع آماری برای دانشجویان و اساتید.",
  },
  {
    slug: "thesis-conceptual-model-with-ai",
    emoji: "🧩",
    date: "۲ تیر ۱۴۰۵",
    category: "متدولوژی پژوهش",
    title: "رسم مدل مفهومی پایان نامه با هوش مصنوعی + ابزارها",
    desc: "آموزش کامل و گام‌به‌گام رسم مدل مفهومی پایان نامه با هوش مصنوعی. بهترین ابزارها و پرامپت‌ها را برای طراحی حرفه‌ای چارچوب نظری بشناسید.",
  },
  {
    slug: "thesis-flowchart-with-ai",
    emoji: "🗺️",
    date: "۳۱ خرداد ۱۴۰۵",
    category: "نقشه راه پژوهش",
    title: "تهیه فلوچارت گام ها و مراحل پایان نامه با هوش مصنوعی",
    desc: "آموزش گام به گام تهیه فلوچارت مراحل پایان نامه با هوش مصنوعی. با بهترین ابزارهای ترسیم نقشه راه تحقیق و فرضیه نویسی آشنا شوید.",
  },
  {
    slug: "thesis-topic-selection-and-base-article-ai",
    emoji: "💡",
    date: "۲۷ خرداد ۱۴۰۵",
    category: "انتخاب موضوع",
    title: "انتخاب موضوع پایان نامه و مقاله بیس با هوش مصنوعی",
    desc: "راهنمای عملی انتخاب موضوع پایان نامه و مقاله بیس با هوش مصنوعی. بررسی ابزارها و تکنیک‌های تخصصی یافتن جدیدترین موضوعات تحقیقاتی.",
  },
  {
    slug: "best-ai-for-thesis-writing",
    emoji: "🏆",
    date: "۲۶ خرداد ۱۴۰۵",
    category: "ابزارهای پژوهشی",
    title: "بهترین هوش مصنوعی برای انجام پایان نامه",
    desc: "با بهترین هوش مصنوعی برای انجام پایان نامه آشنا شوید. مقایسه تخصصی ابزارها و راهنمای استفاده از کاسپین تز برای نگارش سریع و علمی پایان نامه.",
  },
  {
    slug: "operational-definition-of-variables-with-ai",
    emoji: "🔍",
    date: "۲۶ خرداد ۱۴۰۵",
    category: "متدولوژی پژوهش",
    title: "تعریف عملیاتی متغیرها با هوش مصنوعی در پایان نامه",
    desc: "یاد بگیرید چطور تعریف عملیاتی متغیرها در پایان نامه با استفاده از هوش مصنوعی را به صورت دقیق و علمی بنویسید. راهنمای گام به گام و کاربردی.",
  },
  {
    slug: "conceptual-definition-of-variables-with-ai",
    emoji: "🔬",
    date: "۲۵ خرداد ۱۴۰۵",
    category: "متدولوژی پژوهش",
    title: "تعریف مفهومی متغیرهای تحقیق با هوش مصنوعی",
    desc: "چگونه با هوش مصنوعی متغیرهای تحقیق را به صورت مفهومی و عملیاتی تعریف کنیم؟ آموزش گام‌به‌گام و مقایسه بهترین ابزارها.",
  },
  {
    slug: "thesis-chapter-two-theoretical-framework-ai",
    emoji: "🤖",
    date: "۲۵ خرداد ۱۴۰۵",
    category: "مبانی نظری",
    title: "مبانی نظری و فصل دوم پایان نامه با هوش مصنوعی",
    desc: "راهنمای گام‌به‌گام نوشتن مبانی نظری و فصل دوم پایان نامه با هوش مصنوعی. آموزش کاربردی نگارش علمی بدون رفرنس جعلی با دستیارهای هوشمند.",
  },
  {
    slug: "thesis-gantt-chart-with-ai",
    emoji: "📊",
    date: "۲۳ خرداد ۱۴۰۵",
    category: "مدیریت زمان",
    title: "گانت چارت پایان نامه با هوش مصنوعی: آموزش عملی و سریع",
    desc: "با طراحی گانت چارت پایان نامه با هوش مصنوعی، مدیریت زمان تحقیق خود را متحول کنید. آموزش گام‌به‌گام زمان‌بندی دقیق و معرفی بهترین ابزارها.",
  },
  {
    slug: "thesis-objectives-questions-hypotheses-with-ai",
    emoji: "🎯",
    date: "۲۲ خرداد ۱۴۰۵",
    category: "پروپوزال",
    title: "نگارش اهداف، سوالات و فرضیات پایان نامه با هوش مصنوعی: راهنمای علمی",
    desc: "چگونه با کمک ابزارهای هوشمند هوش مصنوعی بین اهداف، سوالات و فرضیات پایان‌نامه خود ارتباط منطقی برقرار کرده و پروپوزالی تصویب‌شدنی بنویسیم؟",
  },
  {
    slug: "proposal-novelty-with-ai",
    emoji: "📐",
    date: "۱۹ خرداد ۱۴۰۵",
    category: "پروپوزال",
    title: "نگارش جنبه جدید و نوآوری تحقیق و پروپوزال با هوش مصنوعی: راهنمای جامع",
    desc: "چگونه از ابزارهای هوشمند هوش مصنوعی برای کشف شکاف‌های پژوهشی و نگارش جنبه جدید و نوآوری تحقیق و پروپوزال با رفرنس‌های واقعی استفاده کنیم؟",
  },
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
];

const ITEMS_PER_PAGE = 6;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  const pageParam = resolvedParams.page;
  
  let currentPage = 1;
  if (typeof pageParam === "string") {
    const parsedPage = parseInt(pageParam, 10);
    if (!isNaN(parsedPage) && parsedPage > 0) {
      currentPage = parsedPage;
    }
  }

  const totalPages = Math.ceil(allPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = allPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <div className="page-header">
        <span className="section-label">وبلاگ</span>
        <h1>
          راهنمای جامع <span className="gradient-text">پایان‌نامه</span>
        </h1>
        <p>آموزش‌ها، نکات و راهکارهای کاربردی برای موفقیت در تحصیل</p>
      </div>

      <BlogList posts={currentPosts} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </>
  );
}

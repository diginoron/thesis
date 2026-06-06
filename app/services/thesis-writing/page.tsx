import Link from "next/link";
import type { Metadata } from "next";
import { generateMeta, generateServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "نوشتن پایان‌نامه با هوش مصنوعی",
  description:
    "نگارش، ساختاربندی و بازنویسی فصل‌های اول تا پنجم پایان‌نامه با هوش مصنوعی آکادمیک Caspian Thesis طبق آخرین شیوه‌نامه‌های دانشگاهی کشور.",
  keywords: [
    "نوشتن پایان نامه با هوش مصنوعی",
    "دستیار هوش مصنوعی پایان نامه",
    "نگارش رساله دکتری با هوش مصنوعی",
    "نوشتن فصل های پایان نامه با هوش مصنوعی",
  ],
  path: "/services/thesis-writing",
});

export default function ThesisWritingServicePage() {
  const jsonLd = generateServiceJsonLd({
    name: "نوشتن پایان‌نامه با هوش مصنوعی",
    description:
      "نگارش، ساختاربندی و بازنویسی فصل‌های اول تا پنجم پایان‌نامه با هوش مصنوعی آکادمیک Caspian Thesis طبق آخرین شیوه‌نامه‌های دانشگاهی کشور.",
    url: "/services/thesis-writing",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="breadcrumb" style={{ paddingTop: "6rem" }}>
        <Link href="/">خانه</Link>
        <span className="breadcrumb-separator">←</span>
        <Link href="/services">خدمات</Link>
        <span className="breadcrumb-separator">←</span>
        <span>نوشتن پایان‌نامه با هوش مصنوعی</span>
      </div>

      {/* Page Header */}
      <div className="page-header" style={{ background: "none", paddingTop: "2rem" }}>
        <span className="section-label">📝 خدمات تخصصی</span>
        <h1>
          نوشتن پایان‌نامه با <span className="gradient-text">هوش مصنوعی</span>
        </h1>
        <p>تدوین علمی، گام‌به‌گام و استاندارد فصول پنج‌گانه پایان‌نامه و رساله دکتری</p>
      </div>

      {/* Content */}
      <div className="page-content" style={{ direction: "rtl", textAlign: "justify", lineHeight: "1.8" }}>
        <p>
          نوشتن پایان‌نامه کارشناسی ارشد یا رساله دکتری یکی از بزرگترین موانع در مسیر فارغ‌التحصیلی دانشجویان است. حجم زیاد منابع، لزوم رعایت استانداردهای سخت‌گیرانه نگارشی و ضوابط دانشگاهی و کمبود زمان، کار را برای بسیاری دشوار می‌کند. ابزار تخصصی <strong>Caspian Thesis</strong> با تکیه بر الگوریتم‌های هوش مصنوعی پیشرفته خود، کل این فرآیند را تسهیل کرده است.
        </p>

        <div style={{ margin: "2rem 0", textAlign: "center" }}>
          <a
            href="https://thesis.diginoron.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            id="thesis-writing-top-cta"
            style={{ padding: "0.8rem 2rem", fontSize: "1.1rem" }}
          >
            شروع نگارش پایان‌نامه با هوش مصنوعی ←
          </a>
        </div>

        <h2>نوشتن فصول پایان‌نامه با هوش مصنوعی چگونه انجام می‌شود؟</h2>
        <p>
          دستیار هوش مصنوعی Caspian Thesis برای هر فصل از پایان‌نامه شما، فرآیند اختصاصی و علمی تعریف کرده است:
        </p>
        <ul>
          <li>
            <strong>فصل اول (کلیات تحقیق):</strong> تدوین مقدمه جذاب، تبیین دقیق بیان مسئله، ضرورت و اهمیت تحقیق، اهداف، فرضیات و تعاریف عملیاتی متغیرها.
          </li>
          <li>
            <strong>فصل دوم (ادبیات و پیشینه پژوهش):</strong> جستجو، طبقه‌بندی و خلاصه کردن مبانی نظری و پیشینه‌های پژوهشی داخلی و خارجی مرتبط با موضوع تحقیق شما به صورت کاملاً منسجم.
          </li>
          <li>
            <strong>فصل سوم (روش‌شناسی تحقیق):</strong> طراحی و تشریح روش تحقیق، جامعه آماری، روش نمونه‌گیری، ابزارهای جمع‌آوری داده‌ها (پرسشنامه، مصاحبه و...) و روش‌های تحلیل آماری.
          </li>
          <li>
            <strong>فصل چهارم (تجزیه و تحلیل داده‌ها):</strong> تحلیل نتایج به دست آمده و تفسیر خروجی‌های آماری به دست آمده از نرم‌افزارها با زبانی کاملاً آکادمیک.
          </li>
          <li>
            <strong>فصل پنجم (نتیجه‌گیری و پیشنهادها):</strong> بحث و مقایسه یافته‌ها با پژوهش‌های پیشین، ارائه نتیجه‌گیری نهایی، محدودیت‌های پژوهش و پیشنهادهای کاربردی و آتی.
          </li>
        </ul>

        <blockquote>
          💡 <strong>چرا Caspian Thesis؟</strong> برخلاف ابزارهای چت عمومی که متون تکراری و غیر‌علمی تولید می‌کنند، سیستم ما کاملاً با شیوه‌نامه نگارشی دانشگاه‌های ایران هماهنگ شده است و منابع را به درستی ارجاع می‌دهد.
        </blockquote>

        <h2>مزایای کلیدی نگارش پایان‌نامه با هوش مصنوعی</h2>
        <p>
          استفاده از هوش مصنوعی آکادمیک در فرآیند نگارش پایان‌نامه، کیفیت خروجی کار شما را به شدت افزایش می‌دهد:
        </p>
        <ul>
          <li>
            <strong>سرعت بالا در تولید محتوا:</strong> صرفه‌جویی چند صد ساعته در نگارش و ویرایش دستی فصول پایان‌نامه.
          </li>
          <li>
            <strong>حفظ ساختار علمی و منطقی:</strong> ایجاد ارتباط منطقی میان فصول مختلف بدون گسستگی مفهومی.
          </li>
          <li>
            <strong>اصلاح خودکار لحن و نگارش:</strong> تولید خروجی‌ها با لحن سوم شخص علمی، بدون غلط املایی و با رعایت کامل نیم‌فاصله‌ها.
          </li>
        </ul>

        <p>
          برای شروع کار و مشاهده چگونگی ساختار دهی به پایان‌نامه‌تان، می‌توانید ابتدا به <Link href="/">صفحه اصلی وب‌سایت Caspian Thesis</Link> مراجعه کرده و ابزارهای متنوع ما را مشاهده کنید.
        </p>

        <h2>سوالات متداول</h2>
        <div style={{ marginTop: "1.5rem" }}>
          <details style={{ marginBottom: "1rem", padding: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <summary style={{ fontWeight: "bold", cursor: "pointer" }}>آیا متون تولید شده توسط هوش مصنوعی سرقت علمی (Plagiarism) محسوب می‌شوند؟</summary>
            <p style={{ marginTop: "0.5rem" }}>خیر. محتوای تولید شده توسط Caspian Thesis کاملاً یکتا و اختصاصی بوده و از هیچ منبعی کپی‌برداری مستقیم انجام نمی‌شود. به همین دلیل درصد مشابهت آن در سامانه‌های همانندجویی بسیار ناچیز است.</p>
          </details>
          <details style={{ marginBottom: "1rem", padding: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <summary style={{ fontWeight: "bold", cursor: "pointer" }}>آیا می‌توانم روی پشتیبانی علمی ابزار حساب کنم؟</summary>
            <p style={{ marginTop: "0.5rem" }}>بله، این سیستم بر اساس هزاران پایان‌نامه علمی تایید شده آموزش دیده است تا خروجی نهایی از بالاترین انسجام منطقی و علمی برخوردار باشد.</p>
          </details>
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
          <h3>همین حالا اولین فصل پایان‌نامه خود را بنویسید</h3>
          <p>بدون نیاز به ثبت‌نام‌های پیچیده، ایده یا موضوع خود را وارد کرده و فرآیند تولید علمی پایان‌نامه را شروع کنید.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
            <a
              href="https://thesis.diginoron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="thesis-writing-bottom-cta-app"
            >
              ورود به پنل هوش مصنوعی ←
            </a>
            <Link href="/" className="btn btn-outline btn-lg" id="thesis-writing-bottom-cta-home">
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

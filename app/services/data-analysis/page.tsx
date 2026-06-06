import Link from "next/link";
import type { Metadata } from "next";
import { generateMeta, generateServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "تحلیل داده و آمار با هوش مصنوعی",
  description:
    "تحلیل آماری داده‌های پایان‌نامه و تفسیر آزمون‌های SPSS، R و Python به همراه رسم نمودار به کمک هوش مصنوعی تخصصی Caspian Thesis.",
  keywords: [
    "تحلیل آماری با هوش مصنوعی",
    "تحلیل داده پایان نامه با هوش مصنوعی",
    "تفسیر spss با هوش مصنوعی",
    "تحلیل داده های آماری پایان نامه",
  ],
  path: "/services/data-analysis",
});

export default function DataAnalysisServicePage() {
  const jsonLd = generateServiceJsonLd({
    name: "تحلیل داده و آمار با هوش مصنوعی",
    description:
      "تحلیل آماری داده‌های پایان‌نامه و تفسیر آزمون‌های SPSS، R و Python به همراه رسم نمودار به کمک هوش مصنوعی تخصصی Caspian Thesis.",
    url: "/services/data-analysis",
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
        <span>تحلیل داده و آمار با هوش مصنوعی</span>
      </div>

      {/* Page Header */}
      <div className="page-header" style={{ background: "none", paddingTop: "2rem" }}>
        <span className="section-label">📈 خدمات تخصصی</span>
        <h1>
          تحلیل داده و آمار با <span className="gradient-text">هوش مصنوعی</span>
        </h1>
        <p>تجزیه و تحلیل آماری، رسم نمودارها و نگارش کامل فصل چهارم پایان‌نامه</p>
      </div>

      {/* Content */}
      <div className="page-content" style={{ direction: "rtl", textAlign: "justify", lineHeight: "1.8" }}>
        <p>
          فصل چهارم پایان‌نامه (یافته‌های پژوهش) پر از جدول‌ها، نمودارها و آمارهای پیچیده است. تحلیل این داده‌ها و تفسیر آزمون‌های آماری (از جمله آزمون‌های فرض، همبستگی، رگرسیون، تحلیل واریانس و...) علاوه بر دانش تخصصی بالا، بسیار زمان‌بر است. هوش مصنوعی <strong>Caspian Thesis</strong> با ارایه ابزارهای تخصصی تحلیل داده، به شما کمک می‌کند داده‌های خام خود را به تحلیل‌های توصیفی و استنباطی منسجم و علمی تبدیل کنید.
        </p>

        <div style={{ margin: "2rem 0", textAlign: "center" }}>
          <a
            href="https://thesis.diginoron.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            id="data-analysis-top-cta"
            style={{ padding: "0.8rem 2rem", fontSize: "1.1rem" }}
          >
            شروع تحلیل آماری با هوش مصنوعی ←
          </a>
        </div>

        <h2>توانمندی‌های هوش مصنوعی Caspian Thesis در تحلیل آماری</h2>
        <p>
          سیستم ما تحلیل آماری داده‌ها را در بسترهای مختلف نرم‌افزاری پشتیبانی می‌کند:
        </p>
        <ul>
          <li>
            <strong>تفسیر خروجی‌های SPSS:</strong> کافیست جداول خروجی SPSS را در سامانه بارگذاری کنید تا هوش مصنوعی به صورت خودکار مقادیر میانگین، انحراف معیار، آماره آزمون، درجات آزادی و سطح معنی‌داری (P-value) را تحلیل کرده و به زبان فارسی و با استانداردهای دانشگاهی بنویسد.
          </li>
          <li>
            <strong>تحلیل داده‌ها در R و Python:</strong> تولید و اشکال‌زدایی کدهای محاسباتی برای اجرای انواع تحلیل‌های پیچیده آماری و مدل‌سازی داده‌ها.
          </li>
          <li>
            <strong>تحلیل روش‌های کیفی:</strong> کدگذاری و تم‌یابی داده‌های کیفی به دست آمده از مصاحبه‌ها به کمک الگوریتم‌های پردازش زبان طبیعی (NLP).
          </li>
          <li>
            <strong>رسم و تفسیر نمودارهای حرفه‌ای:</strong> رسم نمودارهای دقیق توزیع فراوانی، ستونی، پراکندگی و جعبه‌ای متناسب با نیازهای پژوهش.
          </li>
        </ul>

        <blockquote>
          💡 <strong>نگران محاسبات آماری نباشید:</strong> Caspian Thesis فرمول‌های ریاضی و آزمون‌های آماری را به خوبی می‌فهمد و خروجی‌هایی منطبق با ساختار رسمی فصل چهارم پایان‌نامه تولید می‌کند.
        </blockquote>

        <h2>مزایای تحلیل داده‌ها با هوش مصنوعی</h2>
        <p>
          استفاده از هوش مصنوعی آکادمیک خطاهای انسانی در تحلیل آماری را به حداقل می‌رساند:
        </p>
        <ul>
          <li>
            <strong>دقت بالا در تفسیر P-value:</strong> ارزیابی بدون نقص رد یا تایید فرضیه‌های تحقیق بر مبنای سطوح معنی‌داری.
          </li>
          <li>
            <strong>تولید متن آماده برای فصل چهارم:</strong> متون تفسیری تولید شده را می‌توانید مستقیماً در قالب پایان‌نامه کپی کنید.
          </li>
          <li>
            <strong>پشتیبانی از تحلیل‌های توصیفی و استنباطی:</strong> از شاخص‌های گرایش به مرکز تا تحلیل رگرسیون چندگانه و مدلسازی معادلات ساختاری.
          </li>
        </ul>

        <p>
          اگر می‌خواهید فرآیند انجام پایان‌نامه خود را از ابتدا برنامه‌ریزی کنید، به <Link href="/">صفحه اصلی وب‌سایت Caspian Thesis</Link> بازگردید تا کلیه ابزارها و خدمات یکپارچه ما را مرور کنید.
        </p>

        <h2>سوالات متداول</h2>
        <div style={{ marginTop: "1.5rem" }}>
          <details style={{ marginBottom: "1rem", padding: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <summary style={{ fontWeight: "bold", cursor: "pointer" }}>آیا می‌توانم فایل داده‌های خام اکسل (Excel) یا SPSS را مستقیماً آپلود کنم؟</summary>
            <p style={{ marginTop: "0.5rem" }}>بله، Caspian Thesis قابلیت خواندن فایل‌های اکسل و CSV را داراست تا ابتدا تحلیل‌های توصیفی اولیه را انجام داده و سپس آزمون‌های آماری مورد نیاز را روی داده‌ها پیاده کند.</p>
          </details>
          <details style={{ marginBottom: "1rem", padding: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <summary style={{ fontWeight: "bold", cursor: "pointer" }}>آیا آزمون‌های نرمال بودن داده‌ها (مثل کولموگوروف-اسمیرنوف) انجام می‌شود؟</summary>
            <p style={{ marginTop: "0.5rem" }}>بله. هوش مصنوعی ابتدا پیش‌فرض‌های آماری مانند نرمال بودن توزیع داده‌ها را بررسی کرده و بر اساس آن آزمون‌های پارامتریک یا ناپارامتریک مناسب را پیشنهاد و تحلیل می‌کند.</p>
          </details>
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
          <h3>همین حالا تحلیل داده‌های خود را آغاز کنید</h3>
          <p>با وارد کردن داده‌ها یا جداول آماری خود در پنل Caspian Thesis، در کوتاه‌ترین زمان فصل چهارم پایان‌نامه خود را تکمیل کنید.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
            <a
              href="https://thesis.diginoron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="data-analysis-bottom-cta-app"
            >
              ورود به پنل هوش مصنوعی ←
            </a>
            <Link href="/" className="btn btn-outline btn-lg" id="data-analysis-bottom-cta-home">
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

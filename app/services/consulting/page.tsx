import Link from "next/link";
import type { Metadata } from "next";
import { generateMeta, generateServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "مشاوره تخصصی پایان‌نامه با هوش مصنوعی",
  description:
    "مشاوره تخصصی و هوشمند علمی در تمام مراحل پایان‌نامه شامل ایده‌پردازی، روش تحقیق و آماده‌سازی جلسه دفاع به کمک هوش مصنوعی Caspian Thesis.",
  keywords: [
    "مشاوره پایان نامه با هوش مصنوعی",
    "انتخاب موضوع پایان نامه با هوش مصنوعی",
    "دستیار روش تحقیق با هوش مصنوعی",
    "آمادگی برای جلسه دفاع با هوش مصنوعی",
  ],
  path: "/services/consulting",
});

export default function ConsultingServicePage() {
  const jsonLd = generateServiceJsonLd({
    name: "مشاوره تخصصی پایان‌نامه با هوش مصنوعی",
    description:
      "مشاوره تخصصی و هوشمند علمی در تمام مراحل پایان‌نامه شامل ایده‌پردازی، روش تحقیق و آماده‌سازی جلسه دفاع به کمک هوش مصنوعی Caspian Thesis.",
    url: "/services/consulting",
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
        <span>مشاوره تخصصی پایان‌نامه با هوش مصنوعی</span>
      </div>

      {/* Page Header */}
      <div className="page-header" style={{ background: "none", paddingTop: "2rem" }}>
        <span className="section-label">💬 خدمات تخصصی</span>
        <h1>
          مشاوره تخصصی با <span className="gradient-text">هوش مصنوعی</span>
        </h1>
        <p>مشاوره علمی ۲۴ ساعته برای هموار کردن تمام مسیر نگارش، دفاع و پژوهش دانشگاهی</p>
      </div>

      {/* Content */}
      <div className="page-content" style={{ direction: "rtl", textAlign: "justify", lineHeight: "1.8" }}>
        <p>
          فرآیند پایان‌نامه‌نویسی پر از دوراهی‌ها و تصمیم‌گیری‌های حیاتی است. «چه موضوعی انتخاب کنم؟ کدام روش تحقیق مناسب کار من است؟ چطور با اساتید راهنما تعامل کنم؟ برای جلسه دفاع چه مباحثی را آماده کنم؟». هوش مصنوعی <strong>Caspian Thesis</strong> با شبیه‌سازی نقش یک استاد راهنمای مجرب، در تمام طول شبانه‌روز پاسخگوی سوالات متودولوژیک و علمی شماست.
        </p>

        <div style={{ margin: "2rem 0", textAlign: "center" }}>
          <a
            href="https://thesis.diginoron.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            id="consulting-top-cta"
            style={{ padding: "0.8rem 2rem", fontSize: "1.1rem" }}
          >
            شروع مشاوره تخصصی با هوش مصنوعی ←
          </a>
        </div>

        <h2>محورهای اصلی مشاوره هوش مصنوعی Caspian Thesis</h2>
        <p>
          شما در زمینه‌های زیر می‌توانید از راهنمایی‌های هوشمند دستیار علمی ما بهره‌مند شوید:
        </p>
        <ul>
          <li>
            <strong>ایده‌پردازی و انتخاب موضوع پژوهش:</strong> شناسایی موضوعات جدید و پرطرفدار که دارای منابع کافی هستند و به تایید گروه دانشگاهی می‌رسند.
          </li>
          <li>
            <strong>انتخاب و طراحی متدولوژی (روش تحقیق):</strong> تصمیم‌گیری در مورد نوع پژوهش (کمی، کیفی، ترکیبی)، طراحی ابزار و روش سنجش فرضیات.
          </li>
          <li>
            <strong>آمادگی همه‌جانبه برای جلسه دفاع:</strong> چیدمان اسلایدهای پاورپوینت دفاع، شبیه‌سازی سوالات احتمالی داوران بر اساس موضوع پایان‌نامه و ارائه نکات کلیدی دفاع موفق.
          </li>
          <li>
            <strong>رفع ایرادات نگارشی و منطقی:</strong> یافتن تناقض‌ها یا ضعف‌های استدلال علمی در متن نوشته‌شده شما و ارایه راهکار بهبود.
          </li>
        </ul>

        <blockquote>
          💡 <strong>همیشه در دسترس:</strong> برخلاف اساتید راهنما که زمان بسیار محدودی دارند، دستیار هوشمند شما در ۲۴ ساعت شبانه‌روز با شکیبایی کامل تمام ابهامات پژوهشی‌تان را رفع می‌کند.
        </blockquote>

        <h2>مزایای کلیدی مشاوره با هوش مصنوعی</h2>
        <p>
          این خدمات هوشمند کیفیت و سرعت عبور شما از مراحل مختلف تحصیلی را به شدت بهبود می‌دهد:
        </p>
        <ul>
          <li>
            <strong>کاهش استرس جلسه دفاع:</strong> با شبیه‌سازی سوالات داوران، نقاط ضعف پژوهش خود را قبل از دفاع شناسایی و برطرف کنید.
          </li>
          <li>
            <strong>پیشنهاد کدهای تحلیلی و ابزارها:</strong> کمک به انتخاب درست نرم‌افزارهای محاسباتی (SPSS، SmartPLS، AMOS و غیره).
          </li>
          <li>
            <strong>صرفه‌جویی در هزینه‌های مشاوره حضوری:</strong> دریافت راهنمایی‌های تخصصی با کارایی بالا بدون نیاز به پرداخت هزینه‌های مشاوره خصوصی حضوری.
          </li>
        </ul>

        <p>
          برای شروع، می‌توانید به <Link href="/">صفحه اصلی وب‌سایت Caspian Thesis</Link> مراجعه کرده و مجموعه کامل ابزارهای ما را به صورت یکجا مشاهده و امتحان کنید.
        </p>

        <h2>سوالات متداول</h2>
        <div style={{ marginTop: "1.5rem" }}>
          <details style={{ marginBottom: "1rem", padding: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <summary style={{ fontWeight: "bold", cursor: "pointer" }}>آیا مشاوره هوش مصنوعی جایگزین استاد راهنما است؟</summary>
            <p style={{ marginTop: "0.5rem" }}>خیر، این سیستم به عنوان یک شتاب‌دهنده و مشاور کمکی عمل می‌کند تا شما با دست پر و کارهایی کاملاً پخته در جلسات با استاد راهنمای خود حاضر شوید و تاییدیه بگیرید.</p>
          </details>
          <details style={{ marginBottom: "1rem", padding: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <summary style={{ fontWeight: "bold", cursor: "pointer" }}>چگونه می‌توانم از شبیه‌ساز جلسه دفاع استفاده کنم؟</summary>
            <p style={{ marginTop: "0.5rem" }}>کافیست فایل پروپوزال یا پایان‌نامه نهایی خود را به دستیار بدهید و بپرسید «داوران احتمالاً چه سوالاتی از این پژوهش مطرح خواهند کرد؟». سیستم سوالات را به همراه پاسخ‌های پیشنهادی برای شما استخراج خواهد کرد.</p>
          </details>
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
          <h3>مسیر موفقیت تحصیلی خود را هموار کنید</h3>
          <p>با ورود به پنل مشاوره تخصصی Caspian Thesis، پاسخ تمام ابهامات و سوالات روش تحقیق خود را بیابید.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
            <a
              href="https://thesis.diginoron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="consulting-bottom-cta-app"
            >
              ورود به پنل هوش مصنوعی ←
            </a>
            <Link href="/" className="btn btn-outline btn-lg" id="consulting-bottom-cta-home">
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

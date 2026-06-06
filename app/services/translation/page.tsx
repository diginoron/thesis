import Link from "next/link";
import type { Metadata } from "next";
import { generateMeta, generateServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "ترجمه تخصصی با هوش مصنوعی",
  description:
    "ترجمه تخصصی مقالات، پایان‌نامه‌ها و متون آکادمیک بین زبان‌های فارسی و انگلیسی با حفظ کامل اصطلاحات علمی به کمک هوش مصنوعی Caspian Thesis.",
  keywords: [
    "ترجمه تخصصی با هوش مصنوعی",
    "ترجمه مقاله علمی با هوش مصنوعی",
    "ترجمه انگلیسی به فارسی مقاله",
    "ترجمه فارسی به انگلیسی مقاله ISI",
  ],
  path: "/services/translation",
});

export default function TranslationServicePage() {
  const jsonLd = generateServiceJsonLd({
    name: "ترجمه تخصصی با هوش مصنوعی",
    description:
      "ترجمه تخصصی مقالات، پایان‌نامه‌ها و متون آکادمیک بین زبان‌های فارسی و انگلیسی با حفظ کامل اصطلاحات علمی به کمک هوش مصنوعی Caspian Thesis.",
    url: "/services/translation",
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
        <span>ترجمه تخصصی با هوش مصنوعی</span>
      </div>

      {/* Page Header */}
      <div className="page-header" style={{ background: "none", paddingTop: "2rem" }}>
        <span className="section-label">🌐 خدمات تخصصی</span>
        <h1>
          ترجمه تخصصی با <span className="gradient-text">هوش مصنوعی</span>
        </h1>
        <p>ترجمه دقیق و روان متون علمی، پروپوزال‌ها و مقالات ISI با هوش مصنوعی آکادمیک</p>
      </div>

      {/* Content */}
      <div className="page-content" style={{ direction: "rtl", textAlign: "justify", lineHeight: "1.8" }}>
        <p>
          نوشتن مقالات علمی بین‌المللی یا استخراج پیشینه پژوهشی از مقالات انگلیسی زبان، نیازمند ترجمه دقیق و تخصصی است. ترجمه‌های معمولی گوگل ترنسلیت به علت عدم درک صحیح اصطلاحات علمی و تخصصی در رشته‌های دانشگاهی گوناگون، خروجی‌های نامناسبی ارائه می‌دهند. هوش مصنوعی <strong>Caspian Thesis</strong> با در اختیار داشتن واژه‌نامه‌های غنی علمی، متون علمی شما را به صورت دقیق و تخصصی ترجمه می‌کند.
        </p>

        <div style={{ margin: "2rem 0", textAlign: "center" }}>
          <a
            href="https://thesis.diginoron.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            id="translation-top-cta"
            style={{ padding: "0.8rem 2rem", fontSize: "1.1rem" }}
          >
            شروع ترجمه تخصصی با هوش مصنوعی ←
          </a>
        </div>

        <h2>ویژگی‌های منحصر‌به‌فرد مترجم آکادمیک Caspian Thesis</h2>
        <p>
          مترجم تخصصی هوش مصنوعی ما فراتر از یک مترجم ساده واژه‌ها عمل می‌کند:
        </p>
        <ul>
          <li>
            <strong>درک اصطلاحات تخصصی (Context-Aware):</strong> ترجمه دقیق واژگان تخصصی در رشته‌های مختلف از جمله مدیریت، مهندسی، روانشناسی، پزشکی و علوم پایه.
          </li>
          <li>
            <strong>ترجمه فارسی به انگلیسی (برای مقالات ISI):</strong> ترجمه روان متون علمی فارسی به انگلیسی با گرامر صحیح و ساختار مناسب برای ارسال به مجلات ISI.
          </li>
          <li>
            <strong>حفظ ساختار آکادمیک متن:</strong> متن ترجمه شده کاملاً لحن علمی، رسمی و غیرتوصیفی اصلی را حفظ می‌کند.
          </li>
          <li>
            <strong>ویرایش بومی (Native Editing) خروجی انگلیسی:</strong> بهبود جمله‌بندی خروجی انگلیسی برای مطابقت کامل با استانداردهای نگارش بین‌المللی.
          </li>
        </ul>

        <blockquote>
          💡 <strong>سرعت همراه با کیفیت:</strong> با استفاده از موتور ترجمه تخصصی ما، مقالات مرجع انگلیسی خود را در چند ثانیه به فارسی روان و خوانا تبدیل کنید و در فصل دوم پایان‌نامه استفاده نمایید.
        </blockquote>

        <h2>چرا ترجمه مقاله با Caspian Thesis؟</h2>
        <p>
          مهم‌ترین دغدغه در ترجمه مقالات علمی، تغییر نکردن مفهوم نظریه‌ها و نتایج آماری است. مزایای ابزار ما:
        </p>
        <ul>
          <li>
            <strong>به حداقل رساندن اشتباهات معنایی:</strong> درک مفهوم جملات پیچیده دانشگاهی انگلیسی.
          </li>
          <li>
            <strong>سازگاری با جداول و نمودارها:</strong> حفظ جداول و اعداد بدون به هم ریختگی در حین فرآیند ترجمه.
          </li>
          <li>
            <strong>کاهش فوق‌العاده هزینه‌ها:</strong> پرداخت هزینه‌ای ناچیز در مقایسه با دارالترجمه‌های دستی مرسوم.
          </li>
        </ul>

        <p>
          برای آشنایی با نحوه ساختار دهی به پایان‌نامه خود، می‌توانید به <Link href="/">صفحه اصلی وب‌سایت Caspian Thesis</Link> مراجعه کنید یا مطالب آموزشی را در وبلاگ دنبال کنید.
        </p>

        <h2>سوالات متداول</h2>
        <div style={{ marginTop: "1.5rem" }}>
          <details style={{ marginBottom: "1rem", padding: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <summary style={{ fontWeight: "bold", cursor: "pointer" }}>آیا این ابزار فایل‌های PDF را نیز برای ترجمه پشتیبانی می‌کند؟</summary>
            <p style={{ marginTop: "0.5rem" }}>بله. شما می‌توانید متن را از فایل PDF کپی کرده یا مستقیماً فایل متنی خود را در پنل مترجم تخصصی بارگذاری کنید تا فرآیند ترجمه آغاز شود.</p>
          </details>
          <details style={{ marginBottom: "1rem", padding: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <summary style={{ fontWeight: "bold", cursor: "pointer" }}>ترجمه فارسی به انگلیسی مقاله برای ارسال به ژورنال‌های معتبر مناسب است؟</summary>
            <p style={{ marginTop: "0.5rem" }}>بله، خروجی انگلیسی این مترجم از اصطلاحات استاندارد بین‌المللی استفاده می‌کند؛ با این حال همیشه پیشنهاد می‌شود قبل از ارسال نهایی (Submission) به ژورنال‌های بسیار معتبر (Q1)، یک بار آن را بازبینی کنید.</p>
          </details>
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
          <h3>همین حالا مقالات خود را ترجمه کنید</h3>
          <p>با ورود به پنل ترجمه آکادمیک Caspian Thesis، متون علمی خود را به صورت تخصصی و روان ترجمه کنید.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
            <a
              href="https://thesis.diginoron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="translation-bottom-cta-app"
            >
              ورود به پنل هوش مصنوعی ←
            </a>
            <Link href="/" className="btn btn-outline btn-lg" id="translation-bottom-cta-home">
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

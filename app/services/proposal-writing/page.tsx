import Link from "next/link";
import type { Metadata } from "next";
import { generateMeta, generateServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "نگارش پروپوزال با هوش مصنوعی",
  description:
    "نگارش گام‌به‌گام، سریع و علمی پروپوزال کارشناسی ارشد و دکتری با دستیار هوش مصنوعی Caspian Thesis طبق ساختار استاندارد دانشگاه‌های کشور.",
  keywords: [
    "نگارش پروپوزال با هوش مصنوعی",
    "نوشتن پروپوزال با هوش مصنوعی",
    "بیان مسئله پروپوزال با هوش مصنوعی",
    "دستیار هوش مصنوعی پروپوزال",
  ],
  path: "/services/proposal-writing",
});

export default function ProposalWritingServicePage() {
  const jsonLd = generateServiceJsonLd({
    name: "نگارش پروپوزال با هوش مصنوعی",
    description:
      "نگارش گام‌به‌گام، سریع و علمی پروپوزال کارشناسی ارشد و دکتری با دستیار هوش مصنوعی Caspian Thesis طبق ساختار استاندارد دانشگاه‌های کشور.",
    url: "/services/proposal-writing",
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
        <span>نگارش پروپوزال با هوش مصنوعی</span>
      </div>

      {/* Page Header */}
      <div className="page-header" style={{ background: "none", paddingTop: "2rem" }}>
        <span className="section-label">📐 خدمات تخصصی</span>
        <h1>
          نگارش پروپوزال با <span className="gradient-text">هوش مصنوعی</span>
        </h1>
        <p>تدوین علمی و بدون نقص بخش‌های مختلف پروپوزال دانشجویی با هوش مصنوعی</p>
      </div>

      {/* Content */}
      <div className="page-content" style={{ direction: "rtl", textAlign: "justify", lineHeight: "1.8" }}>
        <p>
          پروپوزال (پیشنهاده پژوهش) سند اولیه تحقیق شماست که به گروه آموزشی دانشگاه ارائه می‌دهید. تصویب سریع و بدون ایراد پروپوزال، آغاز رسمی کار پژوهشی شما را رقم می‌زند. دستیار هوش مصنوعی <strong>Caspian Thesis</strong> به گونه‌ای طراحی شده است تا تمام بخش‌های حساس پروپوزال را به صورت ساختارمند و با ادبیات آکادمیک برای شما تدوین کند.
        </p>

        <div style={{ margin: "2rem 0", textAlign: "center" }}>
          <a
            href="https://thesis.diginoron.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            id="proposal-writing-top-cta"
            style={{ padding: "0.8rem 2rem", fontSize: "1.1rem" }}
          >
            شروع نگارش پروپوزال با هوش مصنوعی ←
          </a>
        </div>

        <h2>بخش‌های اصلی پروپوزال که توسط هوش مصنوعی تدوین می‌شوند</h2>
        <p>
          با انتخاب ابزار نگارش پروپوزال Caspian Thesis، می‌توانید بخش‌های زیر را در کوتاه‌ترین زمان تولید کنید:
        </p>
        <ul>
          <li>
            <strong>بیان مسئله (Problem Statement):</strong> تبیین چالش پژوهش، شکاف علمی موجود، پیامدهای حل‌نشده ماندن آن و اهداف تحقیق شما بر اساس الگوهای استاندارد.
          </li>
          <li>
            <strong>ضرورت و اهمیت تحقیق:</strong> توجیه اساتید داور در مورد اینکه چرا این پژوهش ارزشمند است و چه گرهی از مشکلات علمی یا اجرایی باز می‌کند.
          </li>
          <li>
            <strong>سوالات و فرضیات پژوهش:</strong> تدوین سوالات و فرضیات شفاف، منطقی و آزمون‌پذیر متناسب با متغیرهای مستقل و وابسته پژوهش شما.
          </li>
          <li>
            <strong>پیشینه تحقیق مقدماتی:</strong> مرور مقالات کلیدی سال‌های اخیر و استخراج رابطه موضوع شما با کارهای انجام شده گذشته.
          </li>
          <li>
            <strong>روش‌شناسی و فرآیند اجرا:</strong> تبیین روش جمع‌آوری اطلاعات، جامعه آماری، روش نمونه‌گیری و شیوه تحلیل یافته‌ها.
          </li>
        </ul>

        <blockquote>
          💡 <strong>یک گام جلوتر باشید:</strong> برای مطالعه بیشتر در مورد چگونگی نوشتن یک بیان مسئله فوق‌العاده با هوش مصنوعی، حتماً مقاله تفصیلی ما را در وبلاگ با عنوان <Link href="/blog/proposal-problem-statement-with-ai">نگارش بیان مسئله پروپوزال با هوش مصنوعی</Link> مطالعه بفرمایید.
        </blockquote>

        <h2>مزایای استفاده از Caspian Thesis برای پروپوزال</h2>
        <p>
          نگارش پروپوزال با Caspian Thesis به شما کمک می‌کند در اولین جلسه دفاع از پروپوزال، تاییدیه اساتید را دریافت کنید:
        </p>
        <ul>
          <li>
            <strong>انطباق کامل با پروپوزال‌های استاندارد ایرانی:</strong> ساختارهای خروجی طبق قالب مصوب وزارت علوم و دانشگاه‌های برتر طراحی شده‌اند.
          </li>
          <li>
            <strong>ایده‌پردازی تا تدوین نهایی:</strong> حتی اگر فقط یک عنوان ساده دارید، هوش مصنوعی می‌تواند در تعریف ابعاد و مسئله تحقیق به شما کمک کند.
          </li>
          <li>
            <strong>جلوگیری از ریجکت به دلیل ضعف ساختاری:</strong> انسجام زنجیره‌ای بین اهداف، سوالات و فرضیات را برقرار می‌سازد.
          </li>
        </ul>

        <p>
          جهت مشاهده ابزارها و پنل‌های تخصصی، می‌توانید به <Link href="/">صفحه اصلی سایت Caspian Thesis</Link> سر بزنید و ابزار مناسب خود را انتخاب کنید.
        </p>

        <h2>سوالات متداول</h2>
        <div style={{ marginTop: "1.5rem" }}>
          <details style={{ marginBottom: "1rem", padding: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <summary style={{ fontWeight: "bold", cursor: "pointer" }}>چگونه هوش مصنوعی متغیرهای پروپوزال من را تشخیص می‌دهد؟</summary>
            <p style={{ marginTop: "0.5rem" }}>شما در فرم ورودی، متغیرهای مستقل، وابسته و یا تعدیل‌کننده را می‌نویسید و هوش مصنوعی بر اساس روابط تئوریک، فرضیات و مدل مفهومی را برای شما طراحی می‌کند.</p>
          </details>
          <details style={{ marginBottom: "1rem", padding: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <summary style={{ fontWeight: "bold", cursor: "pointer" }}>آیا امکان ویرایش خروجی‌ها وجود دارد؟</summary>
            <p style={{ marginTop: "0.5rem" }}>بله، خروجی به صورت متنی ارایه شده و شما می‌توانید آن را کپی کرده و در فایل ورد (Word) پروپوزال خود مطابق با سلیقه‌تان ویرایش نهایی کنید.</p>
          </details>
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
          <h3>همین امروز نگارش پروپوزال خود را شروع کنید</h3>
          <p>با استفاده از دستیار آکادمیک Caspian Thesis، پروپوزال خود را سریع‌تر، دقیق‌تر و علمی‌تر از همیشه بنویسید.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
            <a
              href="https://thesis.diginoron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="proposal-writing-bottom-cta-app"
            >
              ورود به پنل هوش مصنوعی ←
            </a>
            <Link href="/" className="btn btn-outline btn-lg" id="proposal-writing-bottom-cta-home">
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

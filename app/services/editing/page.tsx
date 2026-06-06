import Link from "next/link";
import type { Metadata } from "next";
import { generateMeta, generateServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "ویرایش و بازنویسی با هوش مصنوعی",
  description:
    "ویرایش علمی، ادبی و ساختاری متن پایان‌نامه و کاهش درصد مشابهت (همانندجویی) به صورت کاملاً حرفه‌ای به کمک دستیار هوش مصنوعی Caspian Thesis.",
  keywords: [
    "ویرایش پایان نامه با هوش مصنوعی",
    "کاهش مشابهت پایان نامه با هوش مصنوعی",
    "همانندجویی با هوش مصنوعی",
    "بازنویسی متن با هوش مصنوعی",
  ],
  path: "/services/editing",
});

export default function EditingServicePage() {
  const jsonLd = generateServiceJsonLd({
    name: "ویرایش و بازنویسی با هوش مصنوعی",
    description:
      "ویرایش علمی، ادبی و ساختاری متن پایان‌نامه و کاهش درصد مشابهت (همانندجویی) به صورت کاملاً حرفه‌ای به کمک دستیار هوش مصنوعی Caspian Thesis.",
    url: "/services/editing",
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
        <span>ویرایش و بازنویسی با هوش مصنوعی</span>
      </div>

      {/* Page Header */}
      <div className="page-header" style={{ background: "none", paddingTop: "2rem" }}>
        <span className="section-label">✏️ خدمات تخصصی</span>
        <h1>
          ویرایش و بازنویسی با <span className="gradient-text">هوش مصنوعی</span>
        </h1>
        <p>کاهش علمی درصد سرقت ادبی (همانندجویی)، اصلاح نگارش و ارتقای متون دانشگاهی</p>
      </div>

      {/* Content */}
      <div className="page-content" style={{ direction: "rtl", textAlign: "justify", lineHeight: "1.8" }}>
        <p>
          نوشتن متن پایان‌نامه به خودی خود کافی نیست؛ متن شما باید از نظر ادبی، ساختاری و علمی کاملاً بدون نقص باشد. همچنین یکی از دغدغه‌های اصلی دانشجویان، استعلام درصد سرقت ادبی در سامانه‌هایی همچون همتاجو یا همانندجو است. هوش مصنوعی <strong>Caspian Thesis</strong> با ارایه ابزار بازنویسی و پارافریز (Paraphrase) پیشرفته، به شما کمک می‌کند متن خود را ویرایش کرده و درصد مشابهت آن را تا سطح مطلوب کاهش دهید.
        </p>

        <div style={{ margin: "2rem 0", textAlign: "center" }}>
          <a
            href="https://thesis.diginoron.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            id="editing-top-cta"
            style={{ padding: "0.8rem 2rem", fontSize: "1.1rem" }}
          >
            شروع ویرایش و بازنویسی با هوش مصنوعی ←
          </a>
        </div>

        <h2>کاربردهای کلیدی ابزار ویرایش و بازنویسی Caspian Thesis</h2>
        <p>
          این ابزار تخصصی با بهره‌گیری از مدل‌های پردازش زبان طبیعی فارسی، متون شما را در سطوح مختلف بهینه‌سازی می‌کند:
        </p>
        <ul>
          <li>
            <strong>کاهش درصد مشابهت (همانندجویی):</strong> بازنویسی جملات با حفظ مفهوم اصلی و استفاده از هم‌معنی‌ها و ساختارهای گرامری جدید برای عبور آسان از سد سامانه‌های همانندجویی دانشگاهی.
          </li>
          <li>
            <strong>ویرایش ادبی و نگارشی:</strong> اصلاح پیوند میان جملات، رفع خطاهای املایی، درج صحیح علائم نگارشی و رعایت کامل قوانین نیم‌فاصله‌نویسی در زبان فارسی.
          </li>
          <li>
            <strong>ارتقای لحن به سبک آکادمیک:</strong> تبدیل متون با لحن توصیفی ساده به متونی با واژگان غنی علمی و رسمی.
          </li>
          <li>
            <strong>کوتاه‌سازی یا بسط متن:</strong> خلاصه کردن پاراگراف‌های طولانی و خسته‌کننده یا گسترش مفاهیم کوتاه به متن‌های تحلیلی و مستدل.
          </li>
        </ul>

        <blockquote>
          💡 <strong>سئو و کیفیت متن:</strong> متن‌های بازنویسی شده توسط Caspian Thesis نه تنها از نظر علمی معتبر هستند، بلکه به دلیل غنای کلمات کلیدی، خوانایی فوق‌العاده‌ای دارند.
        </blockquote>

        <h2>چرا ویرایش پایان‌نامه با هوش مصنوعی؟</h2>
        <p>
          سپردن دستی ویرایش پایان‌نامه به ویراستاران هزینه گزافی دارد و ممکن است مفهوم علمی متن تغییر کند. مزیت‌های هوش مصنوعی ما:
        </p>
        <ul>
          <li>
            <strong>حفظ صددرصدی معنای علمی:</strong> بازنویسی هوشمند جملات بدون تغییر در منطق پژوهش.
          </li>
          <li>
            <strong>سرعت آنی (Real-time):</strong> ویرایش متون طولانی در کمتر از چند ثانیه.
          </li>
          <li>
            <strong>تعیین سطح بازنویسی:</strong> شما می‌توانید میزان تغییرات متن (کم، متوسط یا زیاد) را خودتان تنظیم کنید.
          </li>
        </ul>

        <p>
          همچنین پیشنهاد می‌کنیم برای آشنایی با روند جامع آموزش‌های ما، بخش مقالات وبلاگ و به ویژه <Link href="/blog/how-to-write-thesis-with-ai">چگونه با هوش مصنوعی پایان‌نامه بنویسیم؟</Link> را مطالعه بفرمایید. اطلاعات پایه‌ای‌تر سایت را نیز می‌توانید در <Link href="/">صفحه اصلی وب‌سایت Caspian Thesis</Link> دنبال کنید.
        </p>

        <h2>سوالات متداول</h2>
        <div style={{ marginTop: "1.5rem" }}>
          <details style={{ marginBottom: "1rem", padding: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <summary style={{ fontWeight: "bold", cursor: "pointer" }}>آیا این ابزار همانندجویی سمیم‌نور یا ایران‌داک را دور می‌زند؟</summary>
            <p style={{ marginTop: "0.5rem" }}>بله. الگوریتم‌های پارافریز ما متن را به گونه‌ای بازنویسی می‌کنند که ساختار گرامری و کلمات تکراری تغییر کنند؛ در نتیجه سامانه‌های همانندجو نمی‌توانند آن را به عنوان کپی شناسایی کنند، در حالی که مفهوم علمی آن کاملاً حفظ شده است.</p>
          </details>
          <details style={{ marginBottom: "1rem", padding: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <summary style={{ fontWeight: "bold", cursor: "pointer" }}>آیا بعد از بازنویسی نیاز به بازبینی متن دارم؟</summary>
            <p style={{ marginTop: "0.5rem" }}>خروجی‌های سیستم ما کیفیت بسیار بالایی دارند، اما همواره توصیه می‌شود یک بار متن بازنویسی‌شده را مرور کنید تا مطمئن شوید منطبق با اصطلاحات خاص و دلخواه رشته شما باشد.</p>
          </details>
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
          <h3>کیفیت نگارش پایان‌نامه خود را ارتقا دهید</h3>
          <p>با وارد کردن متن پیش‌نویس خود در پنل بازنویسی Caspian Thesis، فوراً متنی تمیز، علمی و عاری از سرقت ادبی تحویل بگیرید.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
            <a
              href="https://thesis.diginoron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="editing-bottom-cta-app"
            >
              ورود به پنل هوش مصنوعی ←
            </a>
            <Link href="/" className="btn btn-outline btn-lg" id="editing-bottom-cta-home">
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "خدمات پایان‌نامه با هوش مصنوعی",
  description:
    "خدمات کامل پایان‌نامه با هوش مصنوعی: نوشتن، تحلیل آماری، پروپوزال، ویرایش و ترجمه. Caspian Thesis بهترین دستیار دانشجویان ایرانی.",
  keywords: ["خدمات پایان نامه", "نوشتن پایان نامه", "تحلیل آماری پایان نامه"],
  path: "/services",
});

const services = [
  {
    icon: "📝",
    href: "/services/thesis-writing",
    title: "نوشتن پایان‌نامه با هوش مصنوعی",
    desc: "نوشتن کامل پایان‌نامه از فصل اول تا پنجم برای مقاطع کارشناسی، ارشد و دکتری. متن علمی، استاندارد و با کیفیت بالا.",
    features: ["تمام فصل‌ها", "استاندارد آکادمیک", "منابع معتبر"],
  },
  {
    icon: "📐",
    href: "/services/proposal-writing",
    title: "نگارش پروپوزال با هوش مصنوعی",
    desc: "نوشتن پروپوزال حرفه‌ای و کامل با تمام بخش‌های مورد نیاز. راهنمای گام‌به‌گام برای انتخاب موضوع و تعریف مسئله.",
    features: ["ساختار کامل", "بیان مسئله", "روش تحقیق"],
  },
  {
    icon: "📈",
    href: "/services/data-analysis",
    title: "تحلیل داده و آمار با هوش مصنوعی",
    desc: "تحلیل داده‌های آماری با SPSS، R و Python. رسم نمودار، تفسیر نتایج و نوشتن فصل چهارم به‌صورت کامل.",
    features: ["SPSS / R / Python", "تفسیر نتایج", "نمودار حرفه‌ای"],
  },
  {
    icon: "✏️",
    href: "/services/editing",
    title: "ویرایش و بازنویسی با هوش مصنوعی",
    desc: "ویرایش ادبی، علمی و زبانی متن پایان‌نامه. کاهش درصد مشابهت و بهبود کیفیت نوشتاری به‌صورت تضمین‌شده.",
    features: ["ویرایش ادبی", "کاهش مشابهت", "بهبود ساختار"],
  },
  {
    icon: "🌐",
    href: "/services/translation",
    title: "ترجمه تخصصی با هوش مصنوعی",
    desc: "ترجمه متون علمی، مقالات و فصل‌های پایان‌نامه از فارسی به انگلیسی و برعکس با دقت بالا و اصطلاحات تخصصی.",
    features: ["FA ↔ EN", "اصطلاحات تخصصی", "ویرایش بومی"],
  },
  {
    icon: "💬",
    href: "/services/consulting",
    title: "مشاوره تخصصی با هوش مصنوعی",
    desc: "مشاوره آنلاین با متخصصان برای انتخاب موضوع، روش تحقیق، ساختار پایان‌نامه و آمادگی برای جلسه دفاع.",
    features: ["مشاوره آنلاین", "انتخاب موضوع", "آمادگی دفاع"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="page-header">
        <span className="section-label">خدمات ما</span>
        <h1>
          خدمات کامل <span className="gradient-text">پایان‌نامه</span> با AI
        </h1>
        <p>
          از انتخاب موضوع تا روز دفاع — Caspian Thesis در هر مرحله کنار شماست
        </p>
      </div>

      <div className="services-page-grid">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="card services-page-card" id={`service-${s.href.split('/').pop()}`}>
            <h3>
              <span className="card-icon">{s.icon}</span>
              {s.title}
            </h3>
            <p>{s.desc}</p>
            <ul style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem", listStyle: "none", padding: 0 }}>
              {s.features.map((f) => (
                <li
                  key={f}
                  style={{
                    fontSize: "0.8rem",
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    borderRadius: "999px",
                    padding: "0.25rem 0.8rem",
                    color: "var(--color-primary-light)",
                  }}
                >
                  {f}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>
            نمی‌دانی از کجا شروع کنی؟
          </h2>
          <p>با ما مشاوره رایگان بگیر و بهترین مسیر رو پیدا کن.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://thesis.diginoron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="services-cta-start"
            >
              شروع رایگان ←
            </a>
            <Link href="/contact" className="btn btn-outline btn-lg" id="services-cta-contact">
              مشاوره رایگان
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

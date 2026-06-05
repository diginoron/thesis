import Link from "next/link";
import type { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "درباره Caspian Thesis",
  description:
    "Caspian Thesis با استفاده از به‌روزترین مدل‌های هوش مصنوعی و استانداردهای پایان‌نامه‌های داخلی و بین‌المللی ساخته شده است.",
  keywords: ["درباره ما", "caspian thesis", "هوش مصنوعی پایان نامه"],
  path: "/about",
});

const values = [
  {
    icon: "🎯",
    title: "دقت علمی",
    desc: "همه محتواهای ما با استانداردهای آکادمیک و منابع معتبر علمی تولید می‌شوند.",
  },
  {
    icon: "🚀",
    title: "نوآوری مستمر",
    desc: "از جدیدترین مدل‌های هوش مصنوعی استفاده می‌کنیم تا بهترین خروجی را ارائه دهیم.",
  },
  {
    icon: "🤝",
    title: "پشتیبانی واقعی",
    desc: "تیم پشتیبانی ما آماده پاسخگویی به سوالات دانشجویان است.",
  },
];

const aiModels = [
  { icon: "🧠", name: "GPT-4o", desc: "مدل پیشرفته OpenAI" },
  { icon: "⚡", name: "Claude Sonnet", desc: "مدل Anthropic" },
  { icon: "🌐", name: "Gemini Pro", desc: "مدل Google DeepMind" },
  { icon: "🔬", name: "مدل‌های تخصصی", desc: "فاین‌تیون‌شده روی متون فارسی" },
];

const standards = [
  {
    icon: "📋",
    title: "استانداردهای داخلی",
    items: [
      "آیین‌نامه دانشگاه‌های ایران",
      "ساختار پایان‌نامه وزارت علوم",
      "شیوه‌نامه نگارش فارسی",
      "استاندارد رفرنس‌دهی داخلی",
    ],
  },
  {
    icon: "🌍",
    title: "استانداردهای بین‌المللی",
    items: [
      "APA 7th Edition",
      "Vancouver Style",
      "IEEE Citation Format",
      "Harvard Referencing",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <span className="section-label">درباره ما</span>
        <h1>
          ما <span className="gradient-text">Caspian Thesis</span> هستیم
        </h1>
        <p>
          ابزاری علمی، هوشمند و قابل اعتماد برای هر دانشجوی ایرانی
        </p>
      </div>

      <div className="page-content" style={{ maxWidth: "900px" }}>

        {/* داستان */}
        <h2>داستان ما</h2>
        <p>
          Caspian Thesis با یک هدف ساده تاسیس شد: کمک به دانشجویان ایرانی برای
          عبور از چالش‌های پایان‌نامه‌نویسی. با الهام از دریای خزر — نماد عمق
          و آرامش — ما باور داریم که هر دانشجویی می‌تواند با ابزار مناسب،
          پایان‌نامه‌ای قوی و موفق بنویسد.
        </p>

        {/* ارزش‌ها */}
        <h2>ارزش‌های ما</h2>
        <div className="about-values">
          {values.map((v) => (
            <div key={v.title} className="card about-value">
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* مدل‌های AI */}
        <h2 style={{ marginTop: "3rem" }}>
          بر پایه <span className="gradient-text">به‌روزترین مدل‌های هوش مصنوعی</span>
        </h2>
        <p>
          ما از جدیدترین و به‌روزترین مدل‌های هوش مصنوعی دنیا استفاده کرده‌ایم
          تا خروجی‌ای با کیفیت واقعاً آکادمیک و قابل اعتماد ارائه دهیم.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
            margin: "1.5rem 0",
          }}
        >
          {aiModels.map((m) => (
            <div
              key={m.name}
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.3rem 1.5rem",
              }}
            >
              <span style={{ fontSize: "2rem" }}>{m.icon}</span>
              <div>
                <strong style={{ display: "block", color: "var(--color-primary)" }}>
                  {m.name}
                </strong>
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                  {m.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* استانداردهای پایان‌نامه */}
        <h2 style={{ marginTop: "2.5rem" }}>
          مطابق با <span className="gradient-text">استانداردهای داخلی و بین‌المللی</span>
        </h2>
        <p>
          تمام چک‌لیست‌ها، ساختارها و فرمت‌های خروجی این ابزار بر اساس
          استانداردهای رسمی پایان‌نامه‌نویسی داخلی و بین‌المللی طراحی شده‌اند.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            margin: "1.5rem 0",
          }}
        >
          {standards.map((s) => (
            <div
              key={s.title}
              className="card"
              style={{ padding: "1.8rem" }}
            >
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "1rem",
                  marginBottom: "1.2rem",
                }}
              >
                <span>{s.icon}</span>
                {s.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {s.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      padding: "0.45rem 0",
                      borderBottom: "1px solid var(--color-border)",
                      fontSize: "0.9rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    <span style={{ color: "var(--color-primary)", fontSize: "0.8rem" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* هشدار حقوقی */}
        <div
          style={{
            background: "rgba(234, 179, 8, 0.07)",
            border: "1px solid rgba(234, 179, 8, 0.25)",
            borderRadius: "var(--radius-md)",
            padding: "1.3rem 1.6rem",
            display: "flex",
            gap: "0.8rem",
            alignItems: "flex-start",
            margin: "2rem 0",
          }}
        >
          <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>⚠️</span>
          <p style={{ fontSize: "0.9rem", color: "#92400e", margin: 0, lineHeight: 1.8 }}>
            <strong>تذکر مهم:</strong> این ابزار صرفاً برای{" "}
            <strong>ایده‌پردازی و راهنمایی اولیه</strong> در انجام پایان‌نامه
            طراحی شده است. محتوای تولیدشده نباید به‌عنوان متن نهایی پایان‌نامه
            ارائه شود و مسئولیت محتوای نهایی بر عهده دانشجو است.
          </p>
        </div>

        {/* دکمه اتصال به اپ */}
        <div
          style={{
            textAlign: "center",
            padding: "2.5rem",
            background: "linear-gradient(135deg, #f5f3ff, #eff6ff)",
            border: "1px solid rgba(124, 58, 237, 0.15)",
            borderRadius: "var(--radius-xl)",
            marginTop: "2rem",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌊</div>
          <h3 style={{ marginBottom: "0.8rem" }}>آماده شروع هستی؟</h3>
          <p style={{ marginBottom: "1.8rem", maxWidth: "420px", margin: "0 auto 1.8rem" }}>
            همین الان وارد اپ شو و اولین فصل پایان‌نامه‌ات را با هوش مصنوعی بنویس.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://thesis.diginoron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="about-enter-app"
            >
              ورود به اپ Caspian Thesis ↗
            </a>
            <Link href="/contact" className="btn btn-outline btn-lg" id="about-contact-link">
              تماس با ما
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}

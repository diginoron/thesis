import type { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "تماس با ما",
  description:
    "با تیم پشتیبانی Caspian Thesis از طریق تلفن، واتس‌اپ، تلگرام یا ایمیل در تماس باشید.",
  keywords: ["تماس با ما", "پشتیبانی", "caspian thesis"],
  path: "/contact",
});

const contactItems = [
  {
    id: "contact-phone",
    icon: "📞",
    title: "تلفن پشتیبانی",
    value: "۰۲۱-۸۸۲۵۲۴۹۷",
    displayValue: "021-88252497",
    href: "tel:02188252497",
    desc: "پاسخگویی در ساعات اداری",
    color: "#7c3aed",
    colorBg: "rgba(124, 58, 237, 0.07)",
    colorBorder: "rgba(124, 58, 237, 0.18)",
  },
  {
    id: "contact-whatsapp",
    icon: "💬",
    title: "واتس‌اپ پشتیبانی",
    value: "۰۹۱۹۰۷۱۳۰۲۹",
    displayValue: "09190713029",
    href: "https://wa.me/989190713029",
    desc: "پیام‌رسانی سریع، ۲۴ ساعته",
    color: "#16a34a",
    colorBg: "rgba(22, 163, 74, 0.07)",
    colorBorder: "rgba(22, 163, 74, 0.18)",
  },
  {
    id: "contact-telegram",
    icon: "✈️",
    title: "تلگرام پشتیبانی",
    value: "@09190713029",
    displayValue: "+989190713029",
    href: "https://t.me/+989190713029",
    desc: "ارسال فایل و مشاوره آنلاین",
    color: "#0ea5e9",
    colorBg: "rgba(14, 165, 233, 0.07)",
    colorBorder: "rgba(14, 165, 233, 0.18)",
  },
  {
    id: "contact-email",
    icon: "📧",
    title: "ایمیل",
    value: "info@caspianthesis.com",
    displayValue: "info@caspianthesis.com",
    href: "mailto:info@caspianthesis.com",
    desc: "پاسخ در کمتر از ۲۴ ساعت",
    color: "#7c3aed",
    colorBg: "rgba(124, 58, 237, 0.07)",
    colorBorder: "rgba(124, 58, 237, 0.18)",
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <span className="section-label">تماس با ما</span>
        <h1>
          چطور می‌توانیم <span className="gradient-text">کمکت کنیم؟</span>
        </h1>
        <p>
          تیم پشتیبانی ما از چند روش آماده پاسخگویی است. سریع‌ترین راه، واتس‌اپ یا تلگرام است.
        </p>
      </div>

      <div className="page-content" style={{ maxWidth: "860px" }}>
        {/* کارت‌های تماس */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {contactItems.map((item) => (
            <a
              key={item.id}
              id={item.id}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1.2rem",
                padding: "1.8rem",
                textDecoration: "none",
                background: item.colorBg,
                borderColor: item.colorBorder,
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "14px",
                  background: `${item.colorBg}`,
                  border: `1.5px solid ${item.colorBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "0.3rem",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: item.color,
                    direction: "ltr",
                    textAlign: "right",
                    marginBottom: "0.4rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.displayValue}
                </div>
                <div
                  style={{
                    fontSize: "0.83rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* بنر ساعت پاسخگویی */}
        <div
          style={{
            background: "linear-gradient(135deg, #f5f3ff, #eff6ff)",
            border: "1px solid rgba(124, 58, 237, 0.15)",
            borderRadius: "var(--radius-lg)",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: "2.5rem" }}>⏰</div>
          <div>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>
              ساعات پاسخگویی
            </h3>
            <p style={{ margin: 0, fontSize: "0.93rem" }}>
              <strong>تلفن:</strong> شنبه تا چهارشنبه، ساعت ۹ الی ۱۸ &nbsp;|&nbsp;{" "}
              <strong>واتس‌اپ و تلگرام:</strong> ۲۴ ساعته، ۷ روز هفته
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

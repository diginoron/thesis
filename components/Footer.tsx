import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="header-logo" style={{ fontSize: "1.4rem" }} id="footer-logo">
            <img src="/logo.jpg" alt="Caspian Thesis" className="header-logo-img" />
            <span className="logo-text">Caspian Thesis</span>
          </Link>
          <p>
            دستیار هوش مصنوعی برای انجام پایان‌نامه. با استفاده از
            جدیدترین تکنولوژی‌های AI، فرآیند پژوهش و نگارش
            پایان‌نامه را ساده‌تر و سریع‌تر می‌کنیم.
          </p>
          <div className="footer-social">
            <a
              href="https://t.me/caspianthesis"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              id="footer-telegram"
              aria-label="کانال تلگرام"
            >
              ✈️
            </a>
            <a
              href="https://instagram.com/caspianthesis"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              id="footer-instagram"
              aria-label="صفحه اینستاگرام"
            >
              📸
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>دسترسی سریع</h4>
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li>
              <Link href="/services">خدمات</Link>
            </li>
            <li>
              <Link href="/blog">وبلاگ</Link>
            </li>
            <li>
              <Link href="/about">درباره ما</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>خدمات</h4>
          <ul>
            <li>
              <Link href="/services/thesis-writing">نوشتن پایان‌نامه</Link>
            </li>
            <li>
              <Link href="/services/data-analysis">تحلیل آماری</Link>
            </li>
            <li>
              <Link href="/services/proposal-writing">نگارش پروپوزال</Link>
            </li>
            <li>
              <Link href="/services/editing">ویرایش و بازنویسی</Link>
            </li>
            <li>
              <Link href="/services/translation">ترجمه تخصصی</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>ارتباط با ما</h4>
          <ul>
            <li>
              <Link href="/contact">تماس با ما</Link>
            </li>
            <li>
              <a
                href="https://thesis.diginoron.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-app-link"
              >
                ورود به اپ ↗
              </a>
            </li>
            <li>
              <a href="mailto:info@caspianthesis.com">
                info@caspianthesis.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Caspian Thesis. تمامی حقوق محفوظ است.
        </p>
        <p>
          ساخته شده با ❤️ برای دانشجویان ایران
        </p>
      </div>
    </footer>
  );
}

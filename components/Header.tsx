"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/services", label: "خدمات" },
  { href: "/blog", label: "وبلاگ" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-inner">
        {/* لوگو — سمت راست */}
        <Link href="/" className="header-logo" id="header-logo">
          <img src="/logo.jpg" alt="Caspian Thesis" className="header-logo-img" />
          <span className="logo-text">Caspian Thesis</span>
        </Link>

        {/* منوی ناوبری — وسط */}
        <nav className={`header-nav ${menuOpen ? "open" : ""}`} id="main-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* دکمه ورود به اپ فقط در منوی موبایل */}
          <a
            href="https://thesis.diginoron.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
            id="mobile-nav-app-link"
          >
            ورود به اپ ↗
          </a>
        </nav>

        {/* دکمه ورود به اپ — سمت چپ */}
        <a
          href="https://thesis.diginoron.com"
          target="_blank"
          rel="noopener noreferrer"
          className="header-cta"
          id="header-app-link"
        >
          ورود به اپ ↗
        </a>

        {/* دکمه موبایل */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="منوی ناوبری"
          aria-expanded={menuOpen}
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

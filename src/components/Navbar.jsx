import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Stethoscope, Globe } from "lucide-react";
import { useTranslation } from "react-i18next"; // استدعاء مكتبة الترجمة
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation(); // تفعيل الـ hook للترجمة

  // مصفوفة اللينكات مع استخدام الترجمة t للأسماء
  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/about", label: t("nav_about") },
    { to: "/services", label: t("nav_services") },
    { to: "/gallery", label: t("nav_gallery") },
    { to: "/testimonials", label: t("nav_testimonials") },
    { to: "/faq", label: t("nav_faq") },
    { to: "/contact", label: t("nav_contact") },
  ];

  // دالة تبديل اللغة
  const toggleLanguage = () => {
    const nextLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(nextLang);
  };

  // تفعيل تأثير السكرول
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // غلق قائمة الموبايل تلقائياً عند الانتقال لصفحة أخرى
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="logo-icon">
              <Stethoscope size={20} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div>
              <div className="logo-name">Shiny Dental</div>
              <div className="logo-sub">{t("doctor_name")}</div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`nav-link${pathname === l.to ? " active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* الأزرار الجانبية: الاتصال + زرار تبديل اللغة */}
          <div className="nav-actions-wrap" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* زرار تغيير اللغة الفخم */}
            <button onClick={toggleLanguage} className="lang-btn" aria-label="تغيير اللغة">
              <Globe size={15} style={{ marginLeft: i18n.language === 'ar' ? '5px' : '0', marginRight: i18n.language === 'en' ? '5px' : '0' }} />
              <span>{i18n.language === "ar" ? "English" : "العربية"}</span>
            </button>

            {/* CTA الاتصال */}
            <a href="tel:01100690997" className="nav-cta">
              <Phone size={15} />
              <span>01100690997</span>
            </a>
          </div>

          {/* Hamburger موبايل */}
          <button
            className="nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="القائمة"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`mob-link${pathname === l.to ? " active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* زرار اللغة في قائمة الموبايل */}
          <button onClick={toggleLanguage} className="lang-btn mob-lang-btn" style={{ margin: '15px auto 5px', display: 'flex', width: 'fit-content' }}>
            <Globe size={16} style={{ marginLeft: '5px' }} />
            <span>{i18n.language === "ar" ? "English" : "العربية"}</span>
          </button>

          <a href="tel:01100690997" className="btn btn-primary mob-cta">
            <Phone size={16} /> 01100690997
          </a>
        </div>
      )}
    </>
  );
}